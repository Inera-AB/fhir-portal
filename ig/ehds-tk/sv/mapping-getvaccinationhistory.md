# GetVaccinationHistory – Vaccinationer - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## GetVaccinationHistory – Vaccinationer

**Tjänstekontrakt:** `clinicalprocess:activityprescription:actoutcome` GetVaccinationHistory v2.0 och v1.0
 **FHIR-profiler:** [SEEHDSImmunization](StructureDefinition-SEEHDSImmunization.md) | [SEEHDSDevice](StructureDefinition-SEEHDSDevice.md) | [SEEHDSOrganization](StructureDefinition-SEEHDSOrganization.md)
 **Logiska modeller:** [SEEHDSLMVaccinationHistory](StructureDefinition-SEEHDSLMVaccinationHistory.md) (v2.0) | [SEEHDSLMVaccinationHistoryV10](StructureDefinition-SEEHDSLMVaccinationHistoryV10.md) (v1.0, se [Övriga aktiva versioner](#version-1-0))
 **Krävs för NPÖ:** Ja (v2.0) | **Krävs för 1177 Journal:** Ja (v1.0, 2.0)
 **EHDS-koppling:** Patient Summary – Vaccinationer

-------

> **VIKTIGT – Namnkonvention för header-element i detta TK**GetVaccinationHistory v2.0 använder `accountableHealth**C**areProfessional` (versalt 'C' i 'Care') som namn på header-elementet – i stället för `accountableHealthcareProfessional` (lowercase 'c') som används i de flesta övriga TK:er. Det är samma information; stavningen i element-sökvägen skiljer sig. Bryggkoden måste hantera detta explicit.

-------

### Resurshierarki

```
SEEHDSImmunization (1 per administrationRecord)
  ├── extension[registrationDevice] → SEEHDSDevice (registrationRecord.sourceSystem*)
  ├── performer[administering].actor → PractitionerRole (administrationRecord.performer)
  ├── performer[administering].actor → SEEHDSOrganization (administrationRecord.performerOrg)
  │     └── identifier[smiId] = registrationRecord.careUnitSmiId
  ├── performer[administering].actor → SEEHDSOrganization (registrationRecord.careGiverOrg)
  ├── performer[ordering].actor   → PractitionerRole/SEEHDSOrganization (administrationRecord.prescriber*)
  └── protocolApplied[0] (vaccineTargetDisease, doseOrdinalNumber, numberOfPrescribedDoses)

```

Varje `vaccinationMedicalRecord`-post kan innehålla ett `registrationRecord 1..1` med noll till många `administrationRecord 0..*`. En `Immunization`-resurs skapas per `administrationRecord`. Fält från `registrationRecord` som saknar specifikt `administrationRecord`-fält delas/ärvs av alla Immunization-resurser från samma post. Se [VAC-001](#öppna-frågor).

Källsystemsmetadata (`sourceSystemName/productName/productVersion/sourceSystemContact`) samlas i en separat `SEEHDSDevice`-resurs som refereras via `Immunization.extension[registrationDevice]` i stället för enskilda extensions på Immunization.

-------

### Mappningstabell – vaccinationMedicalRecordHeader

| | | | |
| :--- | :--- | :--- | :--- |
| `vaccinationMedicalRecordHeader.documentId` | 1..1 | `Immunization.identifier[0].value` | Källsystemets dokumentidentifierare |
| `vaccinationMedicalRecordHeader.sourceSystemHSAId` | 1..1 | `Immunization.meta.source` | Format:`https://tjanstekatalogen.inera.se/Endpoint/{hsaId}` |
| `vaccinationMedicalRecordHeader.documentTitle` | 0..1 | `Immunization.note.text` | Egen`note`-post med texten`Dokumenttitel: {documentTitle}`, så att den skiljs från övriga anteckningar (VAC-004) |
| `vaccinationMedicalRecordHeader.documentTime` | 0..1 | `Immunization.occurrenceDateTime` | Vaccinationstidpunkt (händelsetidpunkt); YYYYMMDDHHMMSS → ISO 8601. OBS: kan komma i konflikt med authorTime – se[VAC-002](#öppna-frågor) |
| `vaccinationMedicalRecordHeader.patientId.id` | 1..1 | `Immunization.patient.identifier.value` | Patientens identifierare (12 tecken), t.ex. personnummer eller samordningsnummer.`patientId`är av RIVTA-typen`PersonIdType {id, type}` |
| `vaccinationMedicalRecordHeader.patientId.type` | 1..1 | `Immunization.patient.identifier.system` | OID för typ av identifierare (t.ex.`1.2.752.129.2.1.3.1`för personnummer); OID→URI, se tabell nedan |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.authorTime` | 1..1 | `Immunization.occurrenceDateTime` | Dokumentationstidpunkt – används som fallback om documentTime saknas; YYYYMMDDHHMMSS → ISO 8601 (Europe/Stockholm), se[VAC-002](#öppna-frågor) |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId` | 0..1 | `Immunization.performer[0].actor`(Reference(PractitionerRole)) | Ansvarig yrkesutövares HSA-id |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalName` | 0..1 | `PractitionerRole.practitioner.display` | Ansvarig yrkesutövares visningsnamn |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode` | 0..1 | `PractitionerRole.code` | Ansvarig yrkesutövares befattningskod |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId` | 0..1 | `PractitionerRole.organization.identifier.value` | Organisationsenhetens HSA-id |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName` | 0..1 | `PractitionerRole.organization.display` | Organisationsenhetens namn |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom` | 0..1 | Ej mappad | Telefon till organisationsenhet – Immunization saknar adressfält. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail` | 0..1 | Ej mappad | E-post till organisationsenhet – se orgUnitTelecom ovan. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress` | 0..1 | Ej mappad | Postadress till organisationsenhet – se orgUnitTelecom ovan |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation` | 0..1 | Ej mappad | Plats/ort för organisationsenhet – se orgUnitTelecom ovan |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | 0..1 | `Provenance.agent[author].who.identifier` | **Inre Sparr**– versalt 'C' i 'Care' |
| `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | 0..1 | `Provenance.agent[custodian].who.identifier` | **Yttre Sparr**– versalt 'C' i 'Care' |
| `vaccinationMedicalRecordHeader.legalAuthenticator.signatureTime` | 1..1 (om legalAuth) | `Immunization.extension[legalAuthenticator].signatureTime` | Signeringstidpunkt; YYYYMMDDHHMMSS → ISO 8601 |
| `vaccinationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorHSAId` | 0..1 | `Immunization.extension[legalAuthenticator].hsaId` | HSA-id för signerare |
| `vaccinationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorName` | 0..1 | Ej mappad | Namn i klartext – HSA-id räcker för logisk referens |
| `vaccinationMedicalRecordHeader.approvedForPatient` | 1..1 | `Immunization.meta.security` | PDL-kontroll – se[PDL-001](#öppna-frågor) |
| `vaccinationMedicalRecordHeader.careContactId` | 0..1 | `Immunization.encounter.identifier` | Logisk referens till Encounter |
| `vaccinationMedicalRecordHeader.nullified` | 1..1 | `Immunization.status` | true→`entered-in-error`, false→`completed`; se DES-007 |
| `vaccinationMedicalRecordHeader.nullifiedReason` | 0..1 | `Immunization.statusReason.text` | Makuleringsorsak (fritext). Villkor: Får ENBART anges om nullified = true. |

-------

### Mappningstabell – registrationRecord

`registrationRecord 1..1` innehåller registreringsmetadata som gäller för alla `administrationRecord` inom samma `vaccinationMedicalRecord`.

| | | | |
| :--- | :--- | :--- | :--- |
| `vaccinationMedicalRecordBody.registrationRecord.date` | 1..1 | `Immunization.recorded` | Datum då vaccination(er) dokumenterades (inte nödvändigtvis genomfördes) |
| `vaccinationMedicalRecordBody.registrationRecord.patientPostalCode` | 0..1 | `Immunization.extension[patientPostalCode]` | Patientens postnummer vid vaccinationstillfället |
| `vaccinationMedicalRecordBody.registrationRecord.vaccinationUnstructuredNote` | 0..1 | `Immunization.note[0].text` | Ostrukturerad anteckning om vaccinationsregistreringen |
| `vaccinationMedicalRecordBody.registrationRecord.riskCategory` | 0..* | `Immunization.programEligibility` | Riskgrupp/programbehörighet; standard R4-element för vaccinationsprogramseligibilitet |
| `vaccinationMedicalRecordBody.registrationRecord.patientAdverseEffect` | 0..* | `Immunization.reaction[].detail` | Patientens biverkningar kopplade till registreringen |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitHSAId` | 0..1 | `Immunization.performer[2].actor.identifier.value` | Juridisk vårdgivares HSA-id |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitName` | 0..1 | `Immunization.performer[2].actor.display` | Juridisk vårdgivares namn |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitTelecom` | 0..1 | Ej mappad | Telefon till juridisk vårdgivare – Immunization saknar adressfält. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitEmail` | 0..1 | Ej mappad | E-post till juridisk vårdgivare – se orgUnitTelecom ovan. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitAddress` | 0..1 | Ej mappad | Postadress till juridisk vårdgivare – se orgUnitTelecom ovan |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitLocation` | 0..1 | Ej mappad | Plats/ort för juridisk vårdgivare – se orgUnitTelecom ovan |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverContact.hsaid` | 0..1 | Ej mappad | Kontaktpersonens identifierare hos juridisk vårdgivare – inget FHIR-fält för kontaktperson på registreringsnivå |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personName` | 0..1 | Ej mappad | Kontaktpersonens namn hos juridisk vårdgivare – se actorId ovan |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personEmail` | 0..1 | Ej mappad | E-post – se VAC-003 |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personTelecom` | 0..1 | Ej mappad | Telefon – se VAC-003 |
| `vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personAddress` | 0..1 | Ej mappad | Adress – se VAC-003 |
| `vaccinationMedicalRecordBody.registrationRecord.sourceSystemName` | 1..1 | `Device.deviceName[systemName].name` | Källsystemets klartextnamn; via`Immunization.extension[registrationDevice]`→ SEEHDSDevice |
| `vaccinationMedicalRecordBody.registrationRecord.sourceSystemProductName` | 0..1 | `Device.deviceName[productName].name` | Källsystemets produktnamn; se Device-tabell nedan |
| `vaccinationMedicalRecordBody.registrationRecord.sourceSystemProductVersion` | 0..1 | `Device.version.value` | Källsystemets produktversion; se Device-tabell nedan |
| `vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.hsaid` | 0..1 | `Device.extension[sourceSystemContact].actorId` | Identifierare för källsystemsansvarig kontakt; se Device-tabell nedan |
| `vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personName` | 0..1 | `Device.extension[sourceSystemContact].actorName` | Namn på källsystemsansvarig kontakt; se Device-tabell nedan |
| `vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personEmail` | 0..1 | Ej mappad | E-post till källsystemsansvarig; ingen plats i`Device.extension[sourceSystemContact]` |
| `vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personTelecom` | 0..1 | Ej mappad | Telefon till källsystemsansvarig; ingen plats i`Device.extension[sourceSystemContact]` |
| `vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personAddress` | 0..1 | Ej mappad | Adress till källsystemsansvarig; ingen plats i`Device.extension[sourceSystemContact]` |
| `vaccinationMedicalRecordBody.registrationRecord.careUnitSmiId` | 0..1 | `SEEHDSOrganization.identifier[smiId]` | SMI-id läggs som identifierarslice på den utförande vårdenhetens Organization-resurs (`performer[administering].actor`) – se Designbeslut nedan |

-------

### Mappningstabell – SEEHDSDevice (sourceSystem-fält)

`Immunization.extension[registrationDevice]` refererar en `SEEHDSDevice`-resurs som samlar alla källsystemsmetadata från `registrationRecord`. Resursen skapas alltid (sourceSystemName är 1..1).

| | | | |
| :--- | :--- | :--- | :--- |
| `registrationRecord.sourceSystemName` | 1..1 | `Device.deviceName[systemName].name` | type =`user-friendly-name` |
| `registrationRecord.sourceSystemProductName` | 0..1 | `Device.deviceName[productName].name` | type =`model-name` |
| `registrationRecord.sourceSystemProductVersion` | 0..1 | `Device.version.value` | Produktversion som fritext |
| `registrationRecord.sourceSystemContact.hsaid` | 0..1 | `Device.extension[sourceSystemContact].actorId` | Kontaktpersonens identifierare |
| `registrationRecord.sourceSystemContact.personName` | 0..1 | `Device.extension[sourceSystemContact].actorName` | Kontaktpersonens namn |

-------

### Mappningstabell – administrationRecord (per Immunization-resurs)

En `Immunization`-resurs skapas för varje `administrationRecord`. Fält nedan mappas per post.

| | | | |
| :--- | :--- | :--- | :--- |
| `administrationRecord.vaccinationProgramName` | 0..1 | `Immunization.protocolApplied[0].series` | Vaccinationsprogrammets namn (t.ex. "Nationellt barnvaccinationsprogram") |
| `administrationRecord.prescriberOrg.orgUnitHSAId` | 0..1 | `Immunization.performer[ordering].actor.identifier` | Förskrivande vårdenhetens HSA-id; actor = SEEHDSOrganization;`function = OP` |
| `administrationRecord.prescriberOrg.orgUnitName` | 0..1 | `Immunization.performer[ordering].actor.name` | Förskrivande vårdenhetens namn |
| `administrationRecord.prescriberOrg.orgUnitTelecom` | 0..1 | Ej mappad | Kontaktuppgift på enhetsnivå – ingår inte i referensen. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `administrationRecord.prescriberOrg.orgUnitEmail` | 0..1 | Ej mappad | Se`orgUnitTelecom`. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `administrationRecord.prescriberOrg.orgUnitAddress` | 0..1 | Ej mappad | Kontaktuppgift på enhetsnivå, se[GENERAL-008](mappings.md#organisation) |
| `administrationRecord.prescriberOrg.orgUnitLocation` | 0..1 | Ej mappad | Kontaktuppgift på enhetsnivå, se[GENERAL-008](mappings.md#organisation) |
| `administrationRecord.prescriberPerson.hsaid` | 0..1 | `Immunization.performer[ordering].actor.identifier` | Förskrivande yrkesutövarens identifierare; actor = PractitionerRole;`function = OP` |
| `administrationRecord.prescriberPerson.personName` | 0..1 | `Immunization.performer[ordering].actor.display` | Förskrivande yrkesutövarens namn |
| `administrationRecord.prescriberPerson.personEmail` | 0..1 | Ej mappad | E-post för förskrivaren |
| `administrationRecord.prescriberPerson.personTelecom` | 0..1 | Ej mappad | Telefon för förskrivaren |
| `administrationRecord.prescriberPerson.personAddress` | 0..1 | Ej mappad | Adress för förskrivaren |
| `administrationRecord.performerOrg.orgUnitHSAId` | 0..1 | `Immunization.performer[1].actor.identifier.value` | Administrerande vårdenhetens HSA-id |
| `administrationRecord.performerOrg.orgUnitName` | 0..1 | `Immunization.performer[1].actor.display` | Administrerande vårdenhetens namn |
| `administrationRecord.performerOrg.orgUnitTelecom` | 0..1 | Ej mappad | Kontaktuppgift på enhetsnivå – ingår inte i referensen. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `administrationRecord.performerOrg.orgUnitEmail` | 0..1 | Ej mappad | Se`orgUnitTelecom`. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `administrationRecord.performerOrg.orgUnitAddress` | 0..1 | Ej mappad | Kontaktuppgift på enhetsnivå, se[GENERAL-008](mappings.md#organisation) |
| `administrationRecord.performerOrg.orgUnitLocation` | 0..1 | Ej mappad | Kontaktuppgift på enhetsnivå, se[GENERAL-008](mappings.md#organisation) |
| `administrationRecord.performer.hsaid` | 0..1 | `Immunization.performer[0].actor.identifier.value` | Administrerande yrkesutövarens identifierare |
| `administrationRecord.performer.personName` | 0..1 | `Immunization.performer[0].actor.display` | Administrerande yrkesutövarens namn |
| `administrationRecord.performer.personEmail` | 0..1 | Ej mappad | E-post för den som vaccinerat |
| `administrationRecord.performer.personTelecom` | 0..1 | Ej mappad | Telefon för den som vaccinerat |
| `administrationRecord.performer.personAddress` | 0..1 | Ej mappad | Adress för den som vaccinerat |
| `administrationRecord.anatomicalSite` | 0..1 | `Immunization.site` | Anatomisk injektionsplats (CodeableConcept) |
| `administrationRecord.route` | 0..1 | `Immunization.route` | Administreringssätt (CodeableConcept) |
| `administrationRecord.dose.quantity` | 0..1 | `Immunization.doseQuantity` | Dos med mängd och enhet (Quantity) |
| `administrationRecord.dose.displayName` | 1..1 (om dose) | `Immunization.doseQuantity.unit` | Dosens visningsnamn/enhetsetikett (fritext) |
| `administrationRecord.isDoseComplete` | 0..1 | `Immunization.extension[isDoseComplete]` | Anger om hela dosen administrerades (boolean) |
| `administrationRecord.doseOrdinalNumber` | 0..1 | `Immunization.protocolApplied[0].doseNumberPositiveInt` | Ordningsnummer för denna dos i serien |
| `administrationRecord.numberOfPrescribedDoses` | 0..1 | `Immunization.protocolApplied[0].seriesDosesPositiveInt` | Totalt antal ordinerade doser i serien |
| `administrationRecord.sourceDescription` | 0..1 | `Immunization.reportOrigin.text` | Fritext om källa för efterregistrerad vaccinering; originaltext för eventuell kod. Sätter även`primarySource = false`. |
| `administrationRecord.commentPrescription` | 0..1 | `Immunization.note[1].text` | Fritext: instruktioner från ordination |
| `administrationRecord.commentAdministration` | 0..1 | `Immunization.note[0].text` | Fritext: kommentarer vid vaccinering |
| `administrationRecord.patientAdverseEffect` | 0..* | `Immunization.reaction[].detail` | Biverkningar specifika för detta administreringstillfälle |
| `administrationRecord.typeOfVaccine` | 0..1 | `Immunization.vaccineCode.coding` | Vaccintyp – vilka sjukdomar vaccinet skyddar emot (CodeableConcept) |
| `administrationRecord.vaccineName` | 0..1 | `Immunization.vaccineCode.text` | Vaccinets produktnamn (fritext) |
| `administrationRecord.vaccineBatchId` | 0..1 | `Immunization.lotNumber` | Vaccinsats-/partinummer |
| `administrationRecord.vaccineManufacturer` | 0..1 | `Immunization.manufacturer.display` | Tillverkarens namn (fritext) |
| `administrationRecord.vaccineTargetDisease` | 0..* | `Immunization.protocolApplied[0].targetDisease` | Målsjukdom(ar) som vaccinet riktar sig mot |
| `administrationRecord.vaccinationUniqueReference` | 0..1 | `Immunization.identifier[1]` | Unik vaccinationsreferens från källsystemet |

-------

### Mappningstabell – additionalPatientInformation (om present)

| | | | |
| :--- | :--- | :--- | :--- |
| `vaccinationMedicalRecordBody.additionalPatientInformation.dateOfBirth` | 1..1 | `Immunization.patient.birthDate` | Kräver inline Patient-resurs eller extension på patient |
| `vaccinationMedicalRecordBody.additionalPatientInformation.gender` | 0..1 | `Immunization.patient.gender` | Administrativt kön (KV Kön OID 1.2.752.129.2.2.1.1 → AdministrativeGender). CVType-begränsning: originalText är förbjudet (0..0) per TKB. |

-------

### Mappningstabell – result (tekniska svarsfält)

`result 1..1` innehåller teknisk statusinformation som hanteras av transportlagret och inte ingår i klinisk FHIR-data.

| | | | |
| :--- | :--- | :--- | :--- |
| `result.resultCode` | 1..1 | Ej mappad | Teknisk responskod (OK/INFO/ERROR) – hanteras av transportlagret |
| `result.errorCode` | 0..1 | Ej mappad | Teknisk felkod – hanteras av transportlagret |
| `result.subCode` | 0..1 | Ej mappad | Teknisk subkod – hanteras av transportlagret |
| `result.logId` | 1..1 | Ej mappad | Teknisk spårnings-UUID – hanteras av transportlagret |
| `result.message` | 0..1 | Ej mappad | Teknisk felbeskrivning – hanteras av transportlagret |

-------

### Härledda fält / Designbeslut

#### Immunization.status (från nullified)

`vaccinationMedicalRecordHeader.nullified 1..1 boolean` styr statusen för alla `Immunization`-resurser i posten (DES-007):

| | | |
| :--- | :--- | :--- |
| `false` | `completed` | (sätts ej) |
| `true` | `entered-in-error` | `nullifiedReason`(om satt) |

#### En Immunization per administrationRecord (VAC-001)

`registrationRecord 1..1` är behållaren; `administrationRecord 0..*` är de enskilda vaccinationshändelserna. Designbeslut: en `Immunization` per `administrationRecord`.

* Fält från `registrationRecord` (datum, riskCategory, careGiverOrg etc.) kopieras/delas till alla Immunization-resurser från samma `vaccinationMedicalRecord`.
* Om `administrationRecord` är tom (0 poster) skapas en `Immunization` baserad enbart på `registrationRecord`-data med minimal information.

#### Immunization.occurrenceDateTime (VAC-002)

Primär tidskälla är `vaccinationMedicalRecordHeader.documentTime` om den finns – den anger faktisk vaccinationstidpunkt. Om `documentTime` saknas används `accountableHealthcareProfessional.authorTime` som fallback (dokumentationstidpunkt). `registrationRecord.date` (date, ej dateTime) används alltid som `Immunization.recorded`.

#### sourceSystem-fält → SEEHDSDevice (registrationDevice)

`registrationRecord` innehåller fem källsystemsfält (`sourceSystemName`, `sourceSystemProductName`, `sourceSystemProductVersion`, `sourceSystemContact.hsaid`, `sourceSystemContact.personName`) som tillsammans beskriver det system varifrån vaccinationsregistreringen härstammar.

I stället för att lägga dessa som enskilda extensions direkt på Immunization samlas de i en `SEEHDSDevice`-resurs och refereras via `Immunization.extension[registrationDevice]`. Fördelar:

* `Device` är FHIR:s semantiskt korrekta resurs för IT-system som genererar klinisk data
* Eliminerar ett sub-extension-mönster (`extension[sourceSystem].systemName` etc.) till förmån för
 väldefinierade Device-element (`deviceName`, `version`)
* Möjliggör enkel sökning på källsystem: `Device.deviceName.name` är ett sökbart fält

#### performer-slicing (function=AP/OP)

`Immunization.performer` slicas på `function` med koder från `http://terminology.hl7.org/CodeSystem/v2-0443`:

| | | | |
| :--- | :--- | :--- | :--- |
| `performer[administering]` | `AP`(Administering Provider) | `administrationRecord.performer` | PractitionerRole |
| `performer[administering]` | `AP` | `administrationRecord.performerOrg` | SEEHDSOrganization (inkl. SMI-id) |
| `performer[administering]` | `AP` | `registrationRecord.careGiverOrg` | SEEHDSOrganization |
| `performer[ordering]` | `OP`(Ordering Provider) | `administrationRecord.prescriberPerson/prescriberOrg` | PractitionerRole / SEEHDSOrganization |

`performer[administering]` är 0..* och täcker alla AP-roller. `performer[ordering]` är 0..1 och representerar prescriber.

#### careUnitSmiId → SEEHDSOrganization.identifier[smiId]

`registrationRecord.careUnitSmiId` är SMI-id för den vårdenhet som administrerade vaccinet. I stället för en custom extension på Immunization läggs det som identifierarslice på `performer[administering].actor` (Organization) via `SEEHDSOrganization.identifier[smiId]`. Samma Organization bär även HSA-id via `identifier[hsaid]`.

> OBS: SMI-id:ts OID (`urn:oid:1.2.752.194.10.1.1`) behöver verifieras mot Folkhälsomyndighetens
 faktiska NamingSystem – se [VAC-006](#öppna-frågor).

#### riskCategory → programEligibility

`registrationRecord.riskCategory (0..*)`-koder mappar till `Immunization.programEligibility (0..*)`. `programEligibility` är FHIR R4:s standardelement för att ange vilken riskgrupp eller programmässig behörighet som motiverade vaccinationen.

#### sourceDescription → reportOrigin

`administrationRecord.sourceDescription` (fritext) är källbeskrivningen för en efterregistrering. Den mappar till `Immunization.reportOrigin.text` – reportOrigin är ett CodeableConcept och `.text` är korrekt plats för en originaltext/fritext. Närvaro av sourceDescription innebär att `Immunization.primarySource` sätts till `false`.

-------

### PDL och Sparr

PDL-styrning utgår från `accountableHealthcareProfessional`-blocket i headern. **OBS:** Elementnamnet har versalt 'C' i 'Care' (avvikelse från andra TK:ers stavning):

| | | |
| :--- | :--- | :--- |
| Yttre Sparr (vårdgivare) | `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | `Provenance.agent[custodian].who.identifier` |
| Inre Sparr (vårdenhet) | `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | `Provenance.agent[author].who.identifier` |
| Patientgodkännande | `vaccinationMedicalRecordHeader.approvedForPatient`(boolean) | `Immunization.meta.security`; se[PDL-001](#öppna-frågor) |

-------

### Provenance

| | | |
| :--- | :--- | :--- |
| `agent[custodian]` | Juridiskt ansvarig vårdgivare | `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` |
| `agent[author]` | Informationsägande vårdenhet | `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` |

`Provenance.target` refererar `Immunization` via `urn:uuid:{resurs.id}`.
 `Provenance.recorded` = `vaccinationMedicalRecordHeader.accountableHealthcareProfessional.authorTime` (ISO 8601).

-------

### Övriga aktiva versioner – GetVaccinationHistory 1.0

Mappningstabellerna ovan utgår från GetVaccinationHistory 2.0. Version 1.0 är också aktiv för 1177 Journal och beskrivs av den logiska modellen [SEEHDSLMVaccinationHistoryV10](StructureDefinition-SEEHDSLMVaccinationHistoryV10.md) (genererad från `GetVaccinationHistoryResponder_1.0.xsd` i `riv.clinicalprocess.activityprescription.actoutcome` 1.0.2 och tjänstekontraktsbeskrivningen för samma version). Strukturen är i stort sett densamma, så samma profiler används och element som är lika mappas enligt tabellerna ovan.

#### Skillnader mot 2.0

| | | | |
| :--- | :--- | :--- | :--- |
| `vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dosage` | 0..1 Backbone | – | Finns bara i 1.0 |
| `vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineType` | 0..1 CVType | – | Finns bara i 1.0 |
| `vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dose` | – | 0..1 Backbone | Finns bara i 2.0 |
| `vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.typeOfVaccine` | – | 0..1 CVType | Finns bara i 2.0 |
| `vaccinationMedicalRecord.vaccinationMedicalRecordBody.additionalPatientInformation` | – | 0..1 Backbone | Finns bara i 2.0 |
| `result` | – | 1..1 Backbone | Finns bara i 2.0 |
| `vaccinationMedicalRecord.vaccinationMedicalRecordHeader.nullifiedReason` | 0..1 Boolean | 0..1 String | Ändrad datatyp |

#### Mappning av det som skiljer i 1.0

| | | | |
| :--- | :--- | :--- | :--- |
| `administrationRecord.dosage.quantity` | 0..1 | `Immunization.doseQuantity` | Motsvarar`dose.quantity`i 2.0 |
| `administrationRecord.dosage.displayName` | 1..1 (om dosage) | `Immunization.doseQuantity.unit` | Motsvarar`dose.displayName`i 2.0. Fritexten kan innehålla preparat och dosnummer ("Twinrix 1 ml, 1 av 3"); om den inte är en enhet läggs den i stället i`Immunization.note.text` |
| `administrationRecord.vaccineType` | 0..1 | `Immunization.vaccineCode.coding` | Motsvarar`typeOfVaccine`i 2.0 |
| `vaccinationMedicalRecordHeader.nullified` | 1..1 | `Immunization.status` | Som i 2.0 (`true`→`entered-in-error`, annars`completed`). XSD:n har 0..1 men TKB:n kräver elementet |
| `vaccinationMedicalRecordHeader.nullifiedReason` | 0..1 | Ej mappad | XSD:n i 1.0 typar elementet som`xs:boolean`, så ingen orsakstext kan bäras. Se VER-006 i[Mappningsissues](mapping-issues.md) |
| `additionalPatientInformation`,`result` | – | – | Finns inte i 1.0. Svaret har inget`result`; fel signaleras med SOAP-fel |

-------

### OID-till-URI-tabell

| | |
| :--- | :--- |
| `1.2.752.129.2.1.3.1` | `http://electronichealth.se/identifier/personnummer` |
| `1.2.752.129.2.1.3.3` | `http://electronichealth.se/identifier/samordningsnummer` |
| `1.2.752.129.2.1.4.1` | `urn:oid:1.2.752.29.4.19` |

OID:er utan känd URI-mappning bevaras som `urn:oid:{oid}`.

-------

### Öppna frågor

| | |
| :--- | :--- |
| VAC-001 | **`registrationRecord` (1..1) + `administrationRecord` (0..*) – en Immunization per administrationRecord.**Om`administrationRecord`är tomt skapas en Immunization med enbart registreringsdata. Behöver verifieras om detta är önskat beteende eller om sådana poster ska filtreras bort. |
| VAC-002 | **`documentTime` kontra `authorTime` som källa för `occurrenceDateTime`.**`documentTime 0..1`anger vaccinationshändelsens tidpunkt;`authorTime 1..1`anger dokumentationstidpunkten. Om båda är satta kan de skilja sig. Beslut:`documentTime`har prioritet;`authorTime`används som fallback. Behöver bekräftelse från domänexpert. |
| PDL-001 | **Beslutat:**`approvedForPatient = false`→`meta.security``v3-ActCode#NOPAT`. Se[Mappningsissues](mapping-issues.md#stangda-fragor). |
| GENERAL-001 | **Beslutat – tidszon.**RIVTA-tidsstämplar tolkas som lokal tid i`Europe/Stockholm`(sommartid beaktas).`dateTime`får explicit offset (`+01:00`/`+02:00`);`instant`anger samma tidpunkt, helst med samma offset-form. Se[Tidsstämplar och tidszon](mappings.md#tidszon). |

| | |
| :--- | :--- |
| VAC-006 | **SMI-id OID behöver verifieras.**`SEEHDSOrganization.identifier[smiId].system`sätts preliminärt till`urn:oid:1.2.752.194.10.1.1`. Korrigera mot Folkhälsomyndighetens faktiska NamingSystem för vaccinationsregistret. |

### Föreslagna nya issues

| | |
| :--- | :--- |
| VAC-003 | **`careGiverContact` saknar FHIR-mappning.**Kontaktpersoninformation hos juridisk vårdgivare (`careGiverContact.hsaid`,`careGiverContact.personName`) har ingen naturlig plats i Immunization eller Provenance. Behöver beslut: ignorera eller lägga i extension. |
| VAC-004 | **Beslutat:**`documentTitle`läggs i en egen`Immunization.note`-post med texten`Dokumenttitel: {documentTitle}`. |
| VAC-005 | **`legalAuthenticator` i Immunization-profil.**Immunization saknar ett standard`authenticator`-fält (till skillnad från DocumentReference). Custom extension behövs för att bevara legalAuthenticator-blocket. Beslut behövs om legalAuthenticator är relevant för vaccinationsdata eller kan utelämnas. |

