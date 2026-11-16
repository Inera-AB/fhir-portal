# GetMaternityMedicalHistory – Mödravård - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## GetMaternityMedicalHistory – Mödravård

**Tjänstekontrakt:** `clinicalprocess:healthcond:actoutcome` GetMaternityMedicalHistory v2.0
 **FHIR-profil:** [SEEHDSObservationMaternity](StructureDefinition-SEEHDSObservationMaternity.md)
 **Logisk modell:** [SEEHDSLMMaternityMedicalHistory](StructureDefinition-SEEHDSLMMaternityMedicalHistory.md)
 **Krävs för NPÖ:** Ja (v2.0) | **Krävs för 1177 Journal:** Ja (v2.0)
 **EHDS-koppling:** Mödravårdsdata – bakgrundsinformation i Patient Summary

> **Design (MAT-001):** Tjänstekontraktet returnerar en journalpost med upp till tre avsnitt (`registrationRecord`, `pregnancyCheckupRecord`, `postDeliveryRecord`). Varje avsnitt blir en **grupperande Observation** och varje fält en **medlems-Observation** via `hasMember`. Se [Flersektionsdesign (MAT-001)](#flersektionsdesign-mat-001).

-------

### Datamodell – översikt

```
maternityMedicalRecord [0..*]
  maternityMedicalRecordHeader [1..1]          ← standard PatientSummaryHeader
    documentId                  [1..1]
    sourceSystemHSAId           [1..1]
    documentTitle               [0..1]
    documentTime                [1..1]
    patientId                   [1..1]
      patientId.id              [1..1]
      patientId.type            [1..1]
    accountableHealthcareProfessional [1..1]
      authorTime                        [1..1]
      healthcareProfessionalHSAId       [1..1]  (OBLIGATORISK i detta TK)
      healthcareProfessionalName        [0..1]
      healthcareProfessionalRoleCode    [0..1]
      healthcareProfessionalOrgUnit     [1..1]
        orgUnitHSAId            [1..1]
        orgUnitName             [1..1]
        orgUnitTelecom          [0..1]
        orgUnitEmail            [0..1]
        orgUnitAddress          [0..1]
        orgUnitLocation         [0..1]
      healthcareProfessionalCareUnitHSAId [1..1] (OBLIGATORISK i detta TK)
      healthcareProfessionalCareGiverHSAId [1..1] (OBLIGATORISK i detta TK)
    legalAuthenticator          [0..1]
      signatureTime             [1..1]
      legalAuthenticatorHSAId   [0..1]
    approvedForPatient          [1..1]  boolean
    careContactId               [0..1]
    nullified                   [0..0]  (N/A enligt TKB)
    nullifiedReason             [0..0]  (N/A enligt TKB)
  maternityMedicalRecordBody [1..1]
    registrationRecord          [0..1]          ← inskrivningsuppgifter
    pregnancyCheckupRecord      [0..1]          ← graviditetskontroll
    postDeliveryRecord          [0..1]          ← eftervård

```

-------

### Flersektionsdesign (MAT-001)

Varje avsnitt i `maternityMedicalRecordBody` som finns i svaret blir en **grupperande Observation**, och varje fält i avsnittet blir en **medlems-Observation** som den grupperande Observationen refererar via `hasMember`. Detta följer FHIR:s mönster för grupperade observationer: den grupperande Observationen har inget eget `value[x]`.

**Grupperande Observation (en per avsnitt):**

| | |
| :--- | :--- |
| `code.coding` | Avsnittets lokala kod, se tabellen nedan |
| `code.text` | `maternityMedicalRecordHeader.documentTitle`om den finns, annars avsnittets namn (MAT-003) |
| `identifier` | `documentId`+ avsnittskod, t.ex.`{documentId}#registration` |
| `hasMember` | Referenser till avsnittets medlems-Observationer |
| `subject`,`performer`,`effective[x]`,`issued`,`meta` | Från headern, se mappningstabellen för headern |

| | | |
| :--- | :--- | :--- |
| `registrationRecord` | `https://fhir.inera.se/ig/ehds-tk/CodeSystem/maternity-section#registration` | Inskrivning mödravård |
| `pregnancyCheckupRecord` | `https://fhir.inera.se/ig/ehds-tk/CodeSystem/maternity-section#checkup` | Graviditetskontroll |
| `postDeliveryRecord` | `https://fhir.inera.se/ig/ehds-tk/CodeSystem/maternity-section#post-delivery` | Eftervård |

**Medlems-Observationer (en per fält):** Varje fält får egen `code` (LOINC där sådan anges i kommentaren, annars lokal kod med namnet inom hakparentes) och sitt värde i `value[x]`. `subject`, `performer`, `effective[x]`, `issued` och `meta` sätts som på den grupperande Observationen. Sökvägen `Observation[lmp].valueDateTime` i tabellerna nedan betyder `value[x]` på medlems-Observationen `lmp`. Upprepade poster (`[i]`), t.ex. tidigare graviditeter, blir en medlems-Observation per post, med postens fält som `component`: `Observation[prev-delivery-{i}].component[year].valueInteger`.

De tre grupperande Observationerna från samma `maternityMedicalRecord` hålls ihop genom att deras `identifier` bygger på samma `documentId`.

-------

### Mappningstabell – Header (gemensam för alla sektioner)

Header-fälten gäller samtliga Observation-resurser som härleds ur ett `maternityMedicalRecord`-objekt.

#### Dokumentidentitet och patient

| | | | |
| :--- | :--- | :--- | :--- |
| `maternityMedicalRecordHeader.documentId` | 1..1 | `Observation.identifier[0].value` | Unikt dokument-id; suffix`#{sektionskod}`läggs till för att skilja de tre Observation-resurserna |
| `maternityMedicalRecordHeader.sourceSystemHSAId` | 1..1 | `Observation.meta.source` | Format:`https://tjanstekatalogen.inera.se/Endpoint/{hsaId}` |
| `maternityMedicalRecordHeader.documentTitle` | 0..1 | Grupperande`Observation.code.text` | Avsnittets titel. Mappas inte på medlems-Observationerna, som är enskilda observationer (MAT-003) |
| `maternityMedicalRecordHeader.documentTime` | 1..1 | `Observation.issued` | Dokumentets registreringstidpunkt; YYYYMMDDHHMMSS → ISO 8601. OBS:`authorTime`(se nedan) används för`effectiveDateTime` |
| `maternityMedicalRecordHeader.patientId.id` | 1..1 | `Observation.subject.identifier.value` | Personnummer eller samordningsnummer |
| `maternityMedicalRecordHeader.patientId.type` | 1..1 | `Observation.subject.identifier.system` | OID→URI-konvertering; se OID-tabell nedan |

#### Ansvarig hälso- och sjukvårdspersonal

| | | | |
| :--- | :--- | :--- | :--- |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.authorTime` | 1..1 | `Observation.effectiveDateTime` | Dokumentationstidpunkt; YYYYMMDDHHMMSS → ISO 8601 (se GENERAL-001) |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId` | 1..1 | `Observation.performer[0].identifier.value` | HSA-id för ansvarig yrkesperson (OBLIGATORISK i detta TK) |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalName` | 0..1 | `Observation.performer[0].display` | Namn i klartext; komplement till HSA-id |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode` | 0..1 | `PractitionerRole.code` | Befattningskod; via PractitionerRole-resurs refererad från`Observation.performer` |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId` | 1..1 | `PractitionerRole.organization.identifier.value` | HSA-id för organisationsenhet |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName` | 1..1 | `PractitionerRole.organization.display` | Namn på organisationsenhet |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom` | 0..1 | Ej mappad | Enhetens telefonnummer – kontaktuppgifter för enheten representeras via Organization-resursen men ingen mappning fastlagd; se GENERAL-008. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail` | 0..1 | Ej mappad | Enhetens e-post – kontaktuppgifter för enheten representeras via Organization-resursen men ingen mappning fastlagd; se GENERAL-008. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress` | 0..1 | Ej mappad | Enhetens adress – kontaktuppgifter för enheten representeras via Organization-resursen men ingen mappning fastlagd; se GENERAL-008 |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation` | 0..1 | Ej mappad | Enhetens plats/lokalbeteckning – ej strukturerat fält i FHIR Observation; se GENERAL-008 |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | 1..1 | `Provenance.agent[author].who.identifier.value` | HSA-id för vårdenhet; Inre Sparr (OBLIGATORISK i detta TK) |
| `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | 1..1 | `Provenance.agent[custodian].who.identifier.value` | HSA-id för vårdgivare; Yttre Sparr (OBLIGATORISK i detta TK) |

#### Juridisk autentisering

| | | | |
| :--- | :--- | :--- | :--- |
| `maternityMedicalRecordHeader.legalAuthenticator.signatureTime` | 1..1 | `Observation.extension[assertedDate]` | Signeringstidpunkt; lokal extension (ingen standardekvivalent i R4 Observation) |
| `maternityMedicalRecordHeader.legalAuthenticator.legalAuthenticatorHSAId` | 0..1 | `Observation.asserter.identifier.value` | HSA-id för juridiskt ansvarig signatär; via asserter-referens till Practitioner |

#### PDL och övriga headerfält

| | | | |
| :--- | :--- | :--- | :--- |
| `maternityMedicalRecordHeader.approvedForPatient` | 1..1 | `Observation.meta.security` | Boolean; styr 1177-synlighet (se PDL-001); mappas till säkerhetsmärkning i`meta.security` |
| `maternityMedicalRecordHeader.careContactId` | 0..1 | `Observation.encounter.identifier` | Logisk referens till Encounter via identifierare |
| `maternityMedicalRecordHeader.nullified` | 0..0 | N/A | Ej tillämpligt enligt TKB (0..0) |
| `maternityMedicalRecordHeader.nullifiedReason` | 0..0 | N/A | Ej tillämpligt enligt TKB (0..0) |

-------

### Tekniska responsfält (result)

Svarsmeddelandet `GetMaternityMedicalHistoryResponse` i version 2.0 har inget `result`-element enligt XSD:n (GetMaternityMedicalHistoryResponder_2.0.xsd), till skillnad från flera andra tjänstekontrakt. Det finns därför inga tekniska responsfält att mappa.

-------

### Mappningstabell – registrationRecord (inskrivningsuppgifter)

Avsnittet blir en grupperande Observation med `code = maternity-section#registration`, och varje fält en medlems-Observation (se [Flersektionsdesign](#flersektionsdesign-mat-001)).

#### Beräknat nedkomstdatum och graviditetsstatus

| | | | |
| :--- | :--- | :--- | :--- |
| `registrationRecord.lastMenstrualPeriod` | 0..1 | `Observation[lmp].valueDateTime` | Sista menstruationens första dag; YYYYMMDD → YYYY-MM-DD |
| `registrationRecord.indicationPregnancy` | 0..1 | `Observation[indication-pregnancy].valueDateTime` | Datum för graviditetsindikation |
| `registrationRecord.contraceptiveDiscontinued` | 0..1 | `Observation[contraceptive-discontinued].valueDateTime` | Datum för preventivmedelsavstängning |
| `registrationRecord.expectedDayOfDeliveryFromLastMenstrualPeriod` | 0..1 | `Observation[edd-lmp].valueDateTime` | Beräknat nedkomstdatum från senaste mens; LOINC`11778-8` |
| `registrationRecord.expectedDayOfDeliveryFromUltrasoundScan` | 0..1 | `Observation[edd-us].valueDateTime` | Beräknat nedkomstdatum från ultraljud; LOINC`11779-6` |
| `registrationRecord.expectedDayOfDeliveryFromEmbryonicTransfer` | 0..1 | `Observation[edd-et].valueDateTime` | Beräknat nedkomstdatum från embryotransfer |

#### Antropometri vid inskrivning

| | | | |
| :--- | :--- | :--- | :--- |
| `registrationRecord.length` | 0..1 | `Observation[body-height].valueQuantity` | Kroppslängd; LOINC`8302-2`; enhet cm (UCUM) |
| `registrationRecord.weight` | 0..1 | `Observation[body-weight].valueQuantity` | Kroppsvikt; LOINC`29463-7`; enhet kg (UCUM) |
| `registrationRecord.bodyMassIndex` | 0..1 | `Observation[bmi].valueQuantity` | BMI; LOINC`39156-5`; enhet kg/m2 (UCUM) |

#### Infertilitetsbehandling

| | | | |
| :--- | :--- | :--- | :--- |
| `registrationRecord.infertility` | 0..1 | `Observation[infertility-duration].valueQuantity` | Duration av infertilitetsbehandling (år, decimal) |

#### Tidigare graviditeter och förlossningar

`previousGravidityAndParity` är en repeterad sektion. Varje post blir en medlems-Observation med postens fält som `component`:

| | | | |
| :--- | :--- | :--- | :--- |
| `registrationRecord.previousGravidityAndParity[i].year` | 1..1 | `Observation[prev-delivery-{i}].component[year].valueInteger` | Förlossningsår |
| `registrationRecord.previousGravidityAndParity[i].month` | 1..1 | `Observation[prev-delivery-{i}].component[month].valueInteger` | Förlossnings­månad |
| `registrationRecord.previousGravidityAndParity[i].delivery` | 0..1 | `Observation[prev-delivery-{i}].component[type].valueCodeableConcept` | Förlossningssätt |
| `registrationRecord.previousGravidityAndParity[i].healthcareFacility` | 0..1 | `Observation[prev-delivery-{i}].component[facility].valueString` | Vårdinrättningens namn i fritext; ingen strukturerad referens tillgänglig från TKB |
| `registrationRecord.previousGravidityAndParity[i].progress` | 0..1 | `Observation[prev-delivery-{i}].component[progress].valueString` | Förlopp i fritext |
| `registrationRecord.previousGravidityAndParity[i].sex` | 0..1 | `Observation[prev-delivery-{i}].component[sex].valueCodeableConcept` | Barnets kön |
| `registrationRecord.previousGravidityAndParity[i].weightOfChild` | 0..1 | `Observation[prev-delivery-{i}].component[weight].valueQuantity` | Barnets födslovikt (g) |
| `registrationRecord.previousGravidityAndParity[i].gestation` | 0..1 | `Observation[prev-delivery-{i}].component[gestation].valueInteger` | Gestationsålder vid förlossning (veckor) |

#### Sjukdomar och riskfaktorer (booleska fält)

| | | | |
| :--- | :--- | :--- | :--- |
| `registrationRecord.diseasesThrombosis` | 0..1 | `Observation[disease-thrombosis].valueBoolean` | Trombossjukdom i anamnes |
| `registrationRecord.diseasesEndocineDiseases` | 0..1 | `Observation[disease-endocrine].valueBoolean` | Endokrinsjukdom i anamnes |
| `registrationRecord.diseasesRecurrentUrinaryTractInfections` | 0..1 | `Observation[disease-uti-recurrent].valueBoolean` | Recidiverande urinvägsinfektioner i anamnes |
| `registrationRecord.diseasesDiabetesMellitus` | 0..1 | `Observation[disease-diabetes].valueBoolean` | Diabetes mellitus i anamnes |

#### Läkemedel under graviditet

`medicationDuringPregnacy` är en repeterad sektion. Varje läkemedel mappas som ett komponent-par (namn + dosering) med löpande index:

| | | | |
| :--- | :--- | :--- | :--- |
| `registrationRecord.medicationDuringPregnacy[i].medicament` | 1..1 | `Observation[medication-pregnancy-{i}].component[name].valueString` | Läkemedelsnamn/-beskrivning; FHIR MedicationStatement är alternativ resurstyp (se MAT-001) |
| `registrationRecord.medicationDuringPregnacy[i].dosage` | 0..1 | `Observation[medication-pregnancy-{i}].component[dosage].valueString` | Doseringsbeskrivning i fritext |

#### Bedömning första kontakt

| | | | |
| :--- | :--- | :--- | :--- |
| `registrationRecord.assessmentAtFirstContactStandardCare` | 0..1 | `Observation[first-contact-std-care].valueBoolean` | Bedömning: standardvård vid första kontakt |

-------

### Mappningstabell – pregnancyCheckupRecord (graviditetskontroll)

Avsnittet blir en grupperande Observation med `code = maternity-section#checkup`, och varje fält en medlems-Observation (se [Flersektionsdesign](#flersektionsdesign-mat-001)).

#### Gestationsålder och vikt

| | | | |
| :--- | :--- | :--- | :--- |
| `pregnancyCheckupRecord.completeWeeksOfGestation` | 0..1 | `Observation[gestation-weeks].valueInteger` | Fullgångna graviditetsveckor; LOINC`49051-6` |
| `pregnancyCheckupRecord.weight` | 0..1 | `Observation[body-weight].valueQuantity` | Aktuell vikt; LOINC`29463-7`; enhet kg |
| `pregnancyCheckupRecord.symphysisFundalHeight` | 0..1 | `Observation[sfh].valueQuantity` | Symfys-fundusavstånd; LOINC`11881-0`; enhet cm |

#### Blodstatus

| | | | |
| :--- | :--- | :--- | :--- |
| `pregnancyCheckupRecord.haemoglobin` | 0..1 | `Observation[haemoglobin].valueQuantity` | Hb; LOINC`718-7`; enhet g/dL |

#### Blodtryck

| | | | |
| :--- | :--- | :--- | :--- |
| `pregnancyCheckupRecord.bloodPressureSystolic` | 0..1 | `Observation[bp-systolic].valueQuantity` | Systoliskt blodtryck; LOINC`8480-6`; enhet mmHg |
| `pregnancyCheckupRecord.bloodPressureDiastolic` | 0..1 | `Observation[bp-diastolic].valueQuantity` | Diastoliskt blodtryck; LOINC`8462-4`; enhet mmHg |

#### Urinstatus

| | | | |
| :--- | :--- | :--- | :--- |
| `pregnancyCheckupRecord.proteinuria` | 0..1 | `Observation[proteinuria].valueCodeableConcept` | Proteinuri; semikvantitatif kod (negativ/spår/+/++/+++); LOINC`2888-6`. OBS: LM-typen är`Quantity`men klinisk praxis i Sverige är kodad skala – FHIR-mappningen använder`valueCodeableConcept`(se MAT-001 i issues) |
| `pregnancyCheckupRecord.glycosuria` | 0..1 | `Observation[glycosuria].valueCodeableConcept` | Glukosuri; semikvantitatif kod (negativ/positiv); LOINC`2349-9`. OBS: LM-typen är`Quantity`men klinisk praxis är kodad skala – se proteinuri-not ovan |

#### Fosterdata

| | | | |
| :--- | :--- | :--- | :--- |
| `pregnancyCheckupRecord.fetalPosition` | 0..* | `Observation[fetal-position].valueCodeableConcept` | Fosterläge; från`FetalPositionCodeCS`; repeterbara komponenter vid flera foster |
| `pregnancyCheckupRecord.fetalPresentation` | 0..* | `Observation[fetal-presentation].valueCodeableConcept` | Bjudning; repeterbara komponenter vid flera foster |
| `pregnancyCheckupRecord.fetalHeartRate` | 0..* | `Observation[fetal-heart-rate].valueQuantity` | Fosterhjärtfrekvens; LOINC`55283-6`; enhet /min; repeterbara vid flera foster |

#### Ledighet

| | | | |
| :--- | :--- | :--- | :--- |
| `pregnancyCheckupRecord.typeOfLeave` | 0..* | `Observation[leave-type].valueCodeableConcept` | Ledighetstyp; från`TypeOfLeaveCodeCS`; repeterbara |

#### Läkemedel sedan inskrivning

`medicationSinceRegistration` är en repeterad sektion. Varje läkemedel mappas som ett komponent-par (namn + dosering) med löpande index:

| | | | |
| :--- | :--- | :--- | :--- |
| `pregnancyCheckupRecord.medicationSinceRegistration[i].medicament` | 1..1 | `Observation[medication-since-reg-{i}].component[name].valueString` | Läkemedel tillagt sedan inskrivning |
| `pregnancyCheckupRecord.medicationSinceRegistration[i].dosage` | 0..1 | `Observation[medication-since-reg-{i}].component[dosage].valueString` | Doseringsbeskrivning i fritext |

-------

### Mappningstabell – postDeliveryRecord (eftervård)

Avsnittet blir en grupperande Observation med `code = maternity-section#post-delivery`, och varje fält en medlems-Observation (se [Flersektionsdesign](#flersektionsdesign-mat-001)). Sektionen är uppdelad i moderuppgifter (`motherPostDeliveryRecord`, kard. 1..1) och barnuppgifter (`childPostDeliveryRecord`, kard. 1..*).

#### Moderuppgifter efter förlossning

| | | | |
| :--- | :--- | :--- | :--- |
| `postDeliveryRecord.motherPostDeliveryRecord.breastfeeding` | 0..1 | `Observation[breastfeeding].valueBoolean` | Ammar ja/nej |
| `postDeliveryRecord.motherPostDeliveryRecord.bloodPressureSystolic` | 0..1 | `Observation[postpartum-bp-sys].valueQuantity` | Systoliskt BT postpartum; enhet mmHg |
| `postDeliveryRecord.motherPostDeliveryRecord.bloodPressureDiastolic` | 0..1 | `Observation[postpartum-bp-dia].valueQuantity` | Diastoliskt BT postpartum; enhet mmHg |
| `postDeliveryRecord.motherPostDeliveryRecord.haemoglobin` | 0..1 | `Observation[postpartum-hb].valueQuantity` | Hb postpartum; enhet g/dL |
| `postDeliveryRecord.motherPostDeliveryRecord.bodyTemperature` | 0..1 | `Observation[postpartum-temp].valueQuantity` | Kroppstemperatur; LOINC`8310-5`; enhet Cel |
| `postDeliveryRecord.motherPostDeliveryRecord.scarsOK` | 0..1 | `Observation[postpartum-scars-ok].valueBoolean` | Ärr utan anmärkning |
| `postDeliveryRecord.motherPostDeliveryRecord.sutureRemoved` | 0..1 | `Observation[postpartum-suture-removed].valueBoolean` | Suturer/stygn borttagna |
| `postDeliveryRecord.motherPostDeliveryRecord.perineumComfortable` | 0..1 | `Observation[postpartum-perineum-ok].valueBoolean` | Perineum utan anmärkning |
| `postDeliveryRecord.motherPostDeliveryRecord.vulvaVaginaPortioOK` | 0..1 | `Observation[postpartum-vulva-ok].valueBoolean` | Vulva/vagina/portio utan anmärkning |
| `postDeliveryRecord.motherPostDeliveryRecord.uterusContracted` | 0..1 | `Observation[postpartum-uterus-contracted].valueBoolean` | Uterus kontraherad |
| `postDeliveryRecord.motherPostDeliveryRecord.uterusNote` | 0..1 | `Observation[postpartum-uterus-note].valueString` | Fri anteckning om uterus |

#### Barnuppgifter efter förlossning

`childPostDeliveryRecord` är repeterat (ett element per barn). Varje barns data separeras med ordningsnumret `ordinalNumber` i komponent-koden:

| | | | |
| :--- | :--- | :--- | :--- |
| `postDeliveryRecord.childPostDeliveryRecord[i].ordinalNumber` | 1..1 | **(ingår i komponent-kodens suffix `{i}`)** | Skiljer barn 1, 2 osv. vid flerbörd; ingår ej som separat komponent utan används som index |
| `postDeliveryRecord.childPostDeliveryRecord[i].weight` | 0..1 | `Observation[child-{i}].component[birth-weight].valueQuantity` | Födslovikt; LOINC`8339-4`; enhet g |
| `postDeliveryRecord.childPostDeliveryRecord[i].apgarScore1` | 0..1 | `Observation[child-{i}].component[apgar-1min].valueInteger` | Apgar 1 minut; LOINC`9272-6`; skala 0–10 |
| `postDeliveryRecord.childPostDeliveryRecord[i].apgarScore5` | 0..1 | `Observation[child-{i}].component[apgar-5min].valueInteger` | Apgar 5 minuter; LOINC`9274-2`; skala 0–10 |
| `postDeliveryRecord.childPostDeliveryRecord[i].apgarScore10` | 0..1 | `Observation[child-{i}].component[apgar-10min].valueInteger` | Apgar 10 minuter; LOINC`9271-8`; skala 0–10 |

-------

### Härledda fält och designbeslut

#### Observation.status

Inget explicit statusfält finns i GetMaternityMedicalHistory. `Observation.status` sätts statiskt till `final` för alla producerade Observation-resurser, eftersom ett svarsmeddelande från tjänstekontraktet representerar en färdig journalpost.

#### Observation.category

`Observation.category` sätts inte. GetMaternityMedicalHistory bär ingen kategori, och den statiska kategorin `survey` fanns bara för att harmonisera med IPS (GENERAL-007). Sektionen identifieras av `Observation.code`.

#### Observation.effective[x]

`maternityMedicalRecordHeader.accountableHealthcareProfessional.authorTime` används som `Observation.effectiveDateTime`. `documentTime` (registreringstidpunkt) mappas till `Observation.issued` om de skiljer sig åt.

#### Länkning av sektioner (MAT-001)

Fälten i ett avsnitt hålls ihop av den grupperande Observationens `hasMember`. De grupperande Observationerna från samma `maternityMedicalRecord` har `identifier` som bygger på samma `documentId` (`{documentId}#registration`, `{documentId}#checkup`, `{documentId}#post-delivery`). Någon `List`- eller `Composition`-resurs behövs inte.

#### documentTitle (MAT-003)

`maternityMedicalRecordHeader.documentTitle` beskriver hela journalposten och mappas till `code.text` på varje grupperande Observation. Den mappas **inte** på medlems-Observationerna. De är enskilda observationer (t.ex. vikt eller blodtryck), där `code.text` beskriver det som observerats och inte dokumentet.

#### Läkemedel – alternativ representation

`medicationDuringPregnacy` och `medicationSinceRegistration` innehåller läkemedelsbeskrivningar som i en fullständig implementering bör representeras som separata `MedicationStatement`-resurser med referens från Observation. I nuvarande mappning används `valueString` som förenkling i avvaktan på profilbeslut (se MAT-001).

#### OrgUnit-kontaktuppgifter (orgUnitTelecom, orgUnitEmail, orgUnitAddress, orgUnitLocation)

Dessa fyra fält representerar enhetens kontaktinformation. De saknar en naturlig plats i Observation-resursen och tillhör egentligen Organization-resursen i FHIR. I en fullständig implementation bör de mappas till `Organization.telecom`, `Organization.address`, och `Organization.address.line` på den Organization som PractitionerRole refererar. Ingen mappning fastlagd i nuläget; se GENERAL-008.

-------

### PDL och Sparr

GetMaternityMedicalHistory använder **standard `PatientSummaryHeader`** med `accountableHealthcareProfessional` som inkluderar både `healthcareProfessionalCareUnitHSAId` och `healthcareProfessionalCareGiverHSAId`. Dessa är **OBLIGATORISKA** i detta TK (till skillnad från att vara valfria i andra TK som delar headertypen).

| | | |
| :--- | :--- | :--- |
| Yttre Sparr (vårdgivare) | `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | `Provenance.agent[custodian].who.identifier` |
| Inre Sparr (vårdenhet) | `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | `Provenance.agent[author].who.identifier` |
| Patientgodkännande (1177) | `maternityMedicalRecordHeader.approvedForPatient` | `Observation.meta.security`(se PDL-001) |
| Skyddad identitet | **(ej explicit i detta TK – ärvs från patient)** | `Observation.meta.security` |

-------

### Provenance

En `Provenance`-resurs skapas per `maternityMedicalRecord`-objekt och refererar samtliga Observation-resurser producerade från det objektet.

| | | |
| :--- | :--- | :--- |
| `agent[custodian]` | Juridiskt ansvarig vårdgivare | `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` |
| `agent[author]` | Informationsägande vårdenhet | `maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` |

`Provenance.target` refererar alla Observation-resurser från samma post via `urn:uuid:{Observation.id}`.
 `Provenance.recorded` = `maternityMedicalRecordHeader.accountableHealthcareProfessional.authorTime` (konverterat till ISO 8601).

-------

### OID-till-URI-tabell

| | | |
| :--- | :--- | :--- |
| `1.2.752.129.2.1.3.1` | `http://electronichealth.se/identifier/personnummer` | Personnummer |
| `1.2.752.129.2.1.3.3` | `http://electronichealth.se/identifier/samordningsnummer` | Samordningsnummer |
| `1.2.752.129.2.1.4.1` | `urn:oid:1.2.752.29.4.19` | HSA-id (Inera NTjP) |

OID:er utan känd URI-mappning bevaras som `urn:oid:{oid}`.

-------

### Öppna frågor

| | | |
| :--- | :--- | :--- |
| MAT-001 | **Beslutat:**varje avsnitt blir en grupperande Observation (`code`= avsnittskod,`code.text`= documentTitle) med fälten som medlems-Observationer via`hasMember`. Se[Flersektionsdesign](#flersektionsdesign-mat-001). | Beslutat |
| PDL-001 | **Beslutat:**`approvedForPatient = false`→`meta.security``v3-ActCode#NOPAT`. Se[Mappningsissues](mapping-issues.md#stangda-fragor). | Beslutat |
| GENERAL-001 | Gemensam hantering av RIVTA variabelprecisions-tidsstämplar (YYYYMMDDHHMMSS, YYYYMMDD, YYYYMM, YYYY) vid konvertering till ISO 8601 och tidszon Europe/Stockholm behöver dokumenteras i gemensam konverteringsspecifikation. | Öppen |

-------

### Föreslagna nya issues

| | | |
| :--- | :--- | :--- |
| MAT-002 | **Sammanslagen med GENERAL-008:**se[Organisationsenheter, kontaktuppgifter och historik](mappings.md#organisation). | Öppen |
| MAT-003 | **Beslutat:**`documentTitle`mappas till`code.text`på de grupperande Observationerna, inte på medlems-Observationerna. Se[documentTitle](#documenttitle-mat-003). | Beslutat |
| MAT-004 | `legalAuthenticator.signatureTime`saknar standardfält i FHIR R4 Observation. Nuvarande förslag är lokal extension`assertedDate`. Bör utredas om FHIR R5-mönstret (`Observation.note`med tidsstämpel) eller en Provenance-baserad lösning är att föredra för R4-kompatibilitet. | Medium |

