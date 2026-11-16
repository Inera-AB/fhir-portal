# GetObservations – Tillväxtkurva - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## GetObservations – Tillväxtkurva

**Tjänstekontrakt:** `clinicalprocess:healthcond:basic` GetObservations v2.0 och v1.2
 **FHIR-profiler:** [SEEHDSObservationBase](StructureDefinition-SEEHDSObservationBase.md) (generell) | [SEEHDSObservationGrowth](StructureDefinition-SEEHDSObservationGrowth.md) (tillväxtkurva)
 **Logiska modeller:** [SEEHDSLMObservations](StructureDefinition-SEEHDSLMObservations.md) (v2.0) | [SEEHDSLMObservationsV12](StructureDefinition-SEEHDSLMObservationsV12.md) (v1.2, se [Övriga aktiva versioner](#version-1-2))
 **Krävs för NPÖ:** Ja (v1.2) | **Krävs för 1177 Journal:** Ja (v1.2)
 **EHDS-koppling:** Kliniska mätresultat och tillväxtdata
 **IoÖ:** Interaktionsöverenskommelse Tillväxtkurva för barn och ungdom v3 (Inera, 2023-05-15)

> **OBS – Avvikande headerstruktur:** GetObservations använder en specifik headertyp som **inte** är `PatientSummaryHeader`. Det finns inget `careProviderHSAId`/`careUnitHSAId` på toppnivå i headern. PDL- och Sparr-fält hanteras separat – se avsnitt [PDL och Sparr](#pdl-och-sparr) nedan.

-------

### Profilhierarki

GetObservations-mappningen är uppdelad i två profiler:

| | | |
| :--- | :--- | :--- |
| `SEEHDSObservationBase` | `Observation` | Basprofil för ALL mappning från GetObservations TK; täcker alla fält i LM. Tillväxtmätningar är inte medicinska testresultat, och tidpunkten kan saknas (EU Core MedicalTestResult kräver`effective[x]`), så basresursen används |
| `SEEHDSObservationGrowth` | `SEEHDSObservationBase` | Tillväxtkurva; lägger till IoÖ-constraints (SNOMED-koder, Quantity) |

Alla GetObservations-implementationer instansierar `SEEHDSObservationBase` (eller en specialisering av den). För tillväxtkurvadata ska `SEEHDSObservationGrowth` användas eftersom IoÖ v3 anger specifika krav på koder och enheter.

-------

### Datamodell – översikt

Tjänstekontraktet returnerar en lista med `observations 0..*`. Varje observation består av ett `header`-element och ett `observationBody`-element. Trädet visar svarsmeddelandet enligt XSD:n (GetObservationsResponder_2.0.xsd):

```
observations [0..*]  ObservationResponseType
  header                   [1..1]  HeaderType
  observationBody          [1..1]  ObservationType
    id                     [1..1]  IIType
    registrationTime       [1..1]  TimeStampType
    type                   [0..1]  CVType
    value                  [1..1]  ValueANYType
      cv                   [0..1]  CVType
      pq                   [0..1]  PQType
      ivl_pq               [0..1]  PQIntervalType
      ts                   [0..1]  PartialTimeStampType
      ivl_ts               [0..1]  PartialTimePeriodType
      st                   [0..1]  string
      int                  [0..1]  int
    scale                  [0..1]  CVType
    status                 [1..1]  CVType
    targetSite             [0..*]  CVType
    description            [0..1]  string
    time                   [0..1]  TimeType
      ts                   [0..1]  PartialTimeStampType
      ivl_ts               [0..1]  PartialTimePeriodType
    valueNegation          [1..1]  boolean
    patient                [1..1]  PatientInformationType
      id                   [0..1]  IIType
      person               [1..1]  PersonType
      address              [0..*]  AddressType
      electronicAddress    [0..*]  TelType
    participation          [0..*]  ParticipationType
      type                 [1..1]  CVType
      time                 [0..1]  TimeType
      healthcareProfessional [0..1]  HealthcareProfessionalType
      patient              [0..1]  PatientInformationType
      otherPerson          [0..1]  OtherPersonType
      locationRole         [0..1]  LocationRoleType
      resource             [0..1]  ResourceType
      organisation         [0..1]  OrganisationType
    relation               [0..*]  RelationType
      type                 [1..1]  CVType
      referredInformation  [1..1]  ReferredInformationType

```

Typnamnen är RIV-TA-typerna i XSD:n. `ivl_pq` och `ivl_ts` heter `ivlPq` och `ivlTs` i den logiska modellen (FHIR tillåter inte understreck i elementnamn) och bär XML-namnet i tillägget `xml-name`.

-------

### Mappningstabell

#### Header

| | | | |
| :--- | :--- | :--- | :--- |
| `header`(headertyp specifik för GetObservations) | 1..1 | — | Ej standard`PatientSummaryHeader`; se avsnitt PDL och Sparr |

#### observationBody – identitet och tidpunkt

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.id.extension` | 1..1 | `Observation.identifier.value` | Unikt id satt av källsystemet |
| `observationBody.id.root` | 1..1 | `Observation.identifier.system` | OID för vårdgivarens HSA-id; format`urn:oid:{root}` |
| `observationBody.registrationTime` | 1..1 | `Observation.issued` | Dokumentationstidpunkt; YYYYMMDDHHMMSS → ISO 8601 (se GENERAL-001) |

#### type – klassificering och kod

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.type` | 0..1 | `Observation.code` | Typ av observation; om saknas används platshållarkod – se avsnitt Observation.code nedan |

> **OBS:** `Observation.category` sätts inte (se avsnitt Observation.category nedan). `observationBody.type` styr `Observation.code`, inte `category`.

#### value – XOR-union av värdetyper

Exakt ett av nedanstående fält används per observation (XOR). FHIR-elementet väljs baserat på vilken gren som är populerad i källdata.

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.value.cv` | 0..1 | `Observation.valueCodeableConcept` | Kodad observation |
| `observationBody.value.pq` | 0..1 | `Observation.valueQuantity` | Numeriskt värde med enhet (UCUM) |
| `observationBody.value.ivlPq` | 0..1 | `Observation.valueRange` | Intervall av Quantity-värden. Villkor: Minst ett av`low`och`high`måste anges. |
| `observationBody.value.ts` | 0..1 | `Observation.valueDateTime`/`Observation.valueString` | Precision ≥ dag →`valueDateTime`; precision`YYYY`/`YYYYMM`→`valueString`(se OBS-001) |
| `observationBody.value.ivlTs` | 0..1 | `Observation.valuePeriod` | Tidsintervall. Villkor: Minst ett av`start`och`end`måste anges. |
| `observationBody.value.st` | 0..1 | `Observation.valueString` | Fritextsvar |
| `observationBody.value.int` | 0..1 | `Observation.valueInteger` | Heltalsvärde. Ska ENBART användas för skalvärden (t.ex. AUDIT-poäng). Får INTE användas för fysiskt uppmätta värden (längd, vikt etc.) – använd`pq`för dessa. |

#### Negation och frånvaro av värde

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.valueNegation` | 1..1 | `Observation.dataAbsentReason` | Om`true`utelämnas`value[x]`och`dataAbsentReason.code = "not-detected"`; se OBS-002 |

#### Status och skala

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.status` | 1..1 | `Observation.status` | SNOMED CT (urvals-id 56431000052106) → FHIR ObservationStatus; kräver ConceptMap, se OBS-003 |
| `observationBody.scale` | 0..1 | `Observation.method` | Mätskala eller mätmetod (t.ex. AUDIT-skalan, AB0-systemet) |

#### Anatomisk lokalisation

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.targetSite[0]` | 0..1 | `Observation.bodySite` | Första elementet mappas till bodySite (FHIR R4 är 0..1); se OBS-004 |
| `observationBody.targetSite[1..*]` | 0..* | `Observation.extension[additionalBodySite]` | Ytterligare platser via lokal extension (R4-övergångslösning; tas bort vid R5-migration) |

#### Beskrivning och kommentar

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.description` | 0..1 | `Observation.note.text` | Klinisk fritextbeskrivning som komplement till value |

#### Effektiv tid

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.time` | 0..1 | — | XOR: antingen`ts`eller`ivl_ts`populeras |
| `observationBody.time.ts` | 0..1 | `Observation.effectiveDateTime` | Variabelprecisions-sträng; konverteras om precision ≥ dag (se OBS-001 och GENERAL-001) |
| `observationBody.time.ivlTs` | 0..1 | `Observation.effectivePeriod` | Tidsintervall för observationen; XOR med`time.ts`. Villkor: Minst ett av start och end måste anges. |

#### Patient (observationBody.patient)

`observationBody.patient` innehåller den patient som observationen avser. Denna information används primärt för att sätta `Observation.subject` och för skyddsbedömning.

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.patient.person.id.extension` | 0..1 | `Observation.subject.identifier.value` | Personnummer eller samordningsnummer (föredragen källa) |
| `observationBody.patient.person.id.root` | 0..1 | `Observation.subject.identifier.system` | OID→URI-konvertering, se OID-tabell nedan |
| `observationBody.patient.id.extension` | 0..1 | `Observation.subject.identifier.value` | Alternativ om`person.id`saknas (nationell reservidentitet, OID 1.2.752.74.9.1) |
| `observationBody.patient.id.root` | 0..1 | `Observation.subject.identifier.system` | OID→URI |
| `observationBody.patient.person.givenName` | 0..* | Ej mappad i Observation | Förnamn – lagras ej i Observation; kan bifogas i Patient-resurs om en skapas |
| `observationBody.patient.person.middleSurname` | 0..1 | Ej mappad i Observation | Mellannamn – se givenName ovan |
| `observationBody.patient.person.surname` | 0..1 | Ej mappad i Observation | Efternamn – se givenName ovan |
| `observationBody.patient.person.givenNameMarker` | 0..1 | Ej mappad | Tilltalsnamnsmarkering (10–99) – inget standardiserat FHIR-fält i Observation eller Patient |
| `observationBody.patient.person.gender` | 0..1 | Ej mappad i Observation | Kön – lagras i Patient.gender om Patient-resurs skapas; KV kön OID 1.2.752.129.2.2.1.1 |
| `observationBody.patient.person.dateOfBirth` | 0..1 | Ej mappad i Observation | Födelsedatum – lagras i Patient.birthDate om Patient-resurs skapas |
| `observationBody.patient.person.confidentialityIndicator` | 1..1 | `Observation.meta.security` | Skyddade uppgifter –`http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R`om`true` |
| `observationBody.patient.person.maritalStatus` | 0..1 | Ej mappad | Civilstånd – inget motsvararande fält i Observation; lagras i Patient.maritalStatus om Patient-resurs skapas |
| `observationBody.patient.person.address` | 0..* | Ej mappad | Personens adress – lagras i Patient.address om Patient-resurs skapas; ej relevant för Observation |
| `observationBody.patient.person.electronicAddress` | 0..* | Ej mappad | Elektronisk adress (t.ex. telefon) – lagras i Patient.telecom om Patient-resurs skapas |
| `observationBody.patient.address` | 0..* | Ej mappad | Särskild kallelseadress för patienten – lagras i Patient.address om Patient-resurs skapas |
| `observationBody.patient.electronicAddress` | 0..* | Ej mappad | Elektronisk adress för patienten (t.ex. telemedicinutrustning) – lagras i Patient.telecom om Patient-resurs skapas |

#### Utförare (participation)

`observationBody.participation` är en polymorf lista med XOR-union av deltagartyper: `healthcareProfessional`, `patient`, `otherPerson`, `locationRole`, `resource`, `organisation`. Mappningen nedan täcker alla grenar.

##### participation – gemensamma fält

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.participation[*].type` | 1..1 | `Observation.performer.extension[participationType]` | Deltagarroll (utförare, vittne, ansvarig etc.); SNOMED CT urvals-id 53351000052100 |
| `observationBody.participation[*].time` | 0..1 | Ej mappad | Tidpunkt för deltagandet – FHIR Observation har inget per-performer-tidsfält; kan noteras i extension om nödvändigt (se OBS-006) |

##### participation – hälso- och sjukvårdspersonal (healthcareProfessional)

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.participation[*].healthcareProfessional.id` | 0..1 | `Observation.performer`(Reference(PractitionerRole)) | Logisk referens via HSA-id (OID 1.2.752.129.2.1.4.1) |
| `observationBody.participation[*].healthcareProfessional.person` | 1..1 | `PractitionerRole.practitioner`(via referens) | PersonType – namn och id mappas till Practitioner-resurs om en skapas |
| `observationBody.participation[*].healthcareProfessional.jobCode` | 0..1 | `PractitionerRole.code` | Befattningskod (NI 2017 Hälso- och sjukvårdspersonal.befattning) |
| `observationBody.participation[*].healthcareProfessional.license` | 0..* | `PractitionerRole.practitioner`→`Practitioner.qualification` | Legitimation – lagras i Practitioner om resurs skapas |
| `observationBody.participation[*].healthcareProfessional.specialistQualification` | 0..* | `PractitionerRole.practitioner`→`Practitioner.qualification` | Specialistkompetens – lagras i Practitioner om resurs skapas |
| `observationBody.participation[*].healthcareProfessional.organisation` | 1..1 | `PractitionerRole.organization` | Organisation för uppdraget; HSA-id och namn via logisk referens |
| `observationBody.participation[*].healthcareProfessional.address` | 0..* | Ej mappad | Hälso- och sjukvårdspersonals adress – ingen plats i PractitionerRole; lagras i Practitioner.address om resurs skapas |
| `observationBody.participation[*].healthcareProfessional.electronicAddress` | 0..* | Ej mappad | Hälso- och sjukvårdspersonals elektroniska adress – lagras i Practitioner.telecom om resurs skapas |

##### participation – patient som deltagare

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.participation[*].patient` | 0..1 | Ej mappad | Patienten som aktiv deltagare (ej som subjekt) – ingen standardmappning i FHIR Observation.performer för PatientInformationType; se OBS-006 |

##### participation – övrig person (otherPerson)

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.participation[*].otherPerson` | 0..1 | `Observation.performer`(Reference(RelatedPerson)) | Övrig person (t.ex. anhörig, tolk); type → RelatedPerson.relationship; person → RelatedPerson |

##### participation – plats/platsroll (locationRole)

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.participation[*].locationRole` | 0..1 | Ej mappad | Platsroll (t.ex. patientens hem, arbetsplats) – FHIR Observation har inget performer-fält för Location; kan mappas till`Observation.extension[locationRole]`om extension definieras (se OBS-006) |

##### participation – resurs (resource)

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.participation[*].resource` | 0..1 | `Observation.device` | Medicinteknisk utrustning; id → Device.identifier; type → Device.type; övriga fält (groupId, amount, resourceProperty) är ej mappade (se OBS-006) |

##### participation – organisation

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.participation[*].organisation` | 0..1 | `Observation.performer`(Reference(Organization)) | Organisation som deltar; HSA-id via logisk referens |

#### Relationer (relation)

`observationBody.relation` innehåller typade samband till andra informationsmängder. Val av FHIR-element beror på koden i `type` – se OBS-005.

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.relation[*]` | 0..* | `Observation.derivedFrom`eller`Observation.hasMember` | Val beror på`type`; se OBS-005 och avsnitt nedan |
| `observationBody.relation[*].type` | 1..1 | **(styr val av FHIR-element)** | SNOMED CT-kod (urvals-id 53371000052106) som avgör om det är derivedFrom, hasMember eller extension |
| `observationBody.relation[*].referredInformation.id.extension` | 1..1 | `Observation.derivedFrom.identifier.value`/`Observation.hasMember.identifier.value` | Id på den refererade informationen |
| `observationBody.relation[*].referredInformation.id.root` | 1..1 | `Observation.derivedFrom.identifier.system`/`Observation.hasMember.identifier.system` | OID→URI-konvertering |
| `observationBody.relation[*].referredInformation.time` | 1..1 | Ej mappad | Starttid för refererad information – FHIR-referenser har inget tidsfält; information förloras om ej hanteras i extension (se OBS-005) |
| `observationBody.relation[*].referredInformation.categorization` | 1..1 | Ej mappad | Typ av information från engagemangsindexet – ingen standardmotpart i FHIR Observation.derivedFrom; kan lagras i extension (se OBS-005) |
| `observationBody.relation[*].referredInformation.informationOwner.id` | 1..1 | Ej mappad | Informationsägande vårdgivare – ingen per-referens ägarinformation i FHIR; kan lagras i Provenance om nödvändigt (se OBS-005) |

#### Tekniska responsfält (result)

Svarsmeddelandet `GetObservationsResponse` har inget `result`-element enligt XSD:n (GetObservationsResponder_2.0.xsd). Det finns därför inga tekniska responsfält att mappa.

-------

### Härledda fält och designbeslut

#### Observation.status (OBS-003)

`observationBody.status` använder SNOMED CT-koder ur urvalsuppsättningen med id `56431000052106`. En ConceptMap krävs för att översätta dessa till FHIR `ObservationStatus`-värden:

| | | |
| :--- | :--- | :--- |
| `385676005` | Under utförande | `preliminary` |
| `385651009` | Slutlig | `final` |
| `272393004` | Korrigerad | `amended` |
| `59776000` | Avbeställd/annullerad | `cancelled` |
| `444301002` | Avböjd av patient | `cancelled` |

Saknad mappning: status sätts till `unknown` och en `OperationOutcome`-varning genereras.

#### Observation.category

`Observation.category` sätts inte. GetObservations bär ingen kategori, och den statiska kategorin `exam` fanns bara för att harmonisera med IPS (GENERAL-007).

#### Observation.code – fallback

Om `observationBody.type` saknas och ingen annan kod kan härledas sätts `Observation.code` till en lokal platshållarkod `https://fhir.inera.se/ig/ehds-tk/CodeSystem/observation-placeholder#unspecified` med display **"Okänd observationstyp"** för att uppfylla FHIR-profilens krav på minst en kod.

#### valueNegation (OBS-002) – Beslut

När `observationBody.valueNegation = true` innebär det att observationens värde explicit förnekats eller är frånvarande av klinisk orsak. Mappning:

| | |
| :--- | :--- |
| `false`(normalfall) | `value[x]`populeras som normalt;`dataAbsentReason`utelämnas |
| `true` | `value[x]`utelämnas;`Observation.dataAbsentReason.coding.code = "not-detected"` |

Koden `not-detected` hämtas från `http://terminology.hl7.org/CodeSystem/data-absent-reason`.

#### ts-fältet (OBS-001) – Beslut

`observationBody.value.ts` och `observationBody.time.ts` är RIVTA `TimeType/ts`-strängar med variabel precision, t.ex. `202306`, `20230601`, `20230601120000`. Beslutad hantering:

| | | |
| :--- | :--- | :--- |
| `YYYY`(år) | `Observation.valueString` | Behålls som sträng — dateTime stödjer ej år-precision utan dag |
| `YYYYMM`(år+månad) | `Observation.valueString` | Behålls som sträng — dateTime stödjer ej månadsprecision utan dag |
| `YYYYMMDD`(datum) | `Observation.valueDateTime` | Konverteras till`YYYY-MM-DD` |
| `YYYYMMDDhh`(timme) | `Observation.valueDateTime` | Konverteras till ISO 8601 med zon Europe/Stockholm |
| `YYYYMMDDhhmm`(minut) | `Observation.valueDateTime` | Konverteras till ISO 8601 med zon Europe/Stockholm |
| `YYYYMMDDhhmmss`(sekund) | `Observation.valueDateTime` | Konverteras till ISO 8601 med zon Europe/Stockholm |

För `time.ts`: om precision ≥ dag mappas till `Observation.effectiveDateTime`. Vid lägre precision används `Observation.effectiveDateTime` med FHIR-primitiv extension `_effectiveDateTime.extension[originalText]` (system `http://hl7.org/fhir/StructureDefinition/originalText`) för att bevara källsträngen – se GENERAL-001.

#### targetSite – kardinalitetskollision (OBS-004) – Beslut

`observationBody.targetSite` är definierad som `0..*` i TKB men `Observation.bodySite` är `0..1` i FHIR R4. Beslutad strategi:

1. Det**första**elementet i`targetSite`-listan mappas till`Observation.bodySite`.
1. Eventuella ytterligare element (index ≥ 1) mappas till`Observation.extension[additionalBodySite]`(lokal extension med`url`och`valueCodeableConcept`).
1. **R5-migration:**I FHIR R5 är`Observation.bodySite``0..*`– extensionen tas bort och alla element mappas direkt till`bodySite`.

#### relation – relationstyper (OBS-005)

`observationBody.relation` innehåller referenser till andra observationer med en koden i `relation.type`. Mapping:

| | | |
| :--- | :--- | :--- |
| Härledd från / deriverad | `Observation.derivedFrom` | Källobservation för beräknad observation |
| Ingår i grupp / komponent | `Observation.hasMember` | Deltagande observation i panel |
| Övriga typer | `Observation.extension[observationRelation]` | Lokal extension – se OBS-005 |

Notera att `referredInformation.time`, `referredInformation.categorization` och `referredInformation.informationOwner.id` saknar standardmotpart i FHIR-referensen och kräver extension eller Provenance-resurs om de ska bevaras.

-------

### PDL och Sparr

> GetObservations v2.0 har en **avvikande headerstruktur** jämfört med `PatientSummaryHeader`. Det finns inga dedikerade fält `careProviderHSAId` och `careUnitHSAId` på standardplats i headern.

PDL- och Sparr-information hämtas istället ur följande källor när de är tillgängliga:

| | | |
| :--- | :--- | :--- |
| Vårdgivare (yttre Sparr) | `observationBody.participation[*]`där`participation.type`avser ansvarig vårdgivare | `Provenance.agent[custodian].who.identifier` |
| Vårdenhet (inre Sparr) | `observationBody.participation[*]`där`participation.type`avser vårdenhet | `Provenance.agent[author].who.identifier` |
| Skyddad identitet | `observationBody.patient.person.confidentialityIndicator` | `Observation.meta.security` |

Implementationer **måste** hantera avsaknaden av standard-Sparr-fält och antingen vägra returnera posten utan tydlig Sparr-attributering, eller flagga posten med `meta.security` och dokumentera beslutet i implementationsguiden.

-------

### Provenance

En `Provenance`-resurs skapas per `Observation`-resurs.

| | | |
| :--- | :--- | :--- |
| `agent[custodian]` | Juridiskt ansvarig vårdgivare | `observationBody.participation`(se PDL-avsnitt) |
| `agent[author]` | Informationsägande vårdenhet | `observationBody.participation`(se PDL-avsnitt) |

`Provenance.target` refererar `Observation` via `urn:uuid:{Observation.id}`.
 `Provenance.recorded` = `observationBody.registrationTime` (konverterat till ISO 8601).

-------

### Övriga aktiva versioner – GetObservations 1.2

Mappningstabellerna ovan utgår från GetObservations 2.0, som [SEEHDSLMObservations](StructureDefinition-SEEHDSLMObservations.md) bygger på. [Startsidan](index.md) anger 1.2 som aktiv version för både NPÖ och 1177 Journal, och 2.0 finns hittills bara som release candidate (`2.0_RC1`–`2.0_RC4`) i `riv.clinicalprocess.healthcond.basic`. Version 1.2 beskrivs av den logiska modellen [SEEHDSLMObservationsV12](StructureDefinition-SEEHDSLMObservationsV12.md) (genererad från `GetObservationsResponder_1.2.xsd` i domänversion 1.2.3). Se VER-003 i [Mappningsissues](mapping-issues.md).

Version 1.2 har en annan meddelandemodell: observationerna ligger i grupper (`observationGroup`) som delar patient, utförare, signering och källsystem, och varje grupp innehåller en eller flera `observation`. Det finns ingen JoL-header. Samma profiler används: [SEEHDSObservationBase](StructureDefinition-SEEHDSObservationBase.md) och, för tillväxtmätningar enligt IoÖ, [SEEHDSObservationGrowth](StructureDefinition-SEEHDSObservationGrowth.md). Det blir en Observation per `observation`; gruppens fält kopieras till varje Observation i gruppen.

| | | | |
| :--- | :--- | :--- | :--- |
| `observationGroup` | 0..* Backbone | – | Finns bara i 1.2 |
| `observations` | – | 0..* Backbone | Finns bara i 2.0 |

#### Gruppnivå (observationGroup) → varje Observation i gruppen

| | | | |
| :--- | :--- | :--- | :--- |
| `observationGroup.patient.rivId` | 1..1 | `Observation.subject.identifier` | IIType:`root`→`system`(OID→URI),`extension`→`value`; se[GENERAL-006](mappings.md#patientreferens) |
| `observationGroup.patient.name` | 0..1 | `Observation.subject.display` |   |
| `observationGroup.patient.dateOfBirth` | 1..1 | `Patient.birthDate`(via`Observation.subject`) | Om en Patient-resurs skapas |
| `observationGroup.patient.gender` | 0..1 | `Patient.gender`(via`Observation.subject`) | KV Kön → AdministrativeGender, samma ConceptMap som CC-003 |
| `observationGroup.performerRole.rivId` | 0..1 | `Observation.performer`(Reference(PractitionerRole)).identifier | Utförarens befattnings-id |
| `observationGroup.performerRole.code` | 1..1 | `PractitionerRole.code` | Befattning |
| `observationGroup.performerRole.person.rivId`/`name` | 0..1 | `PractitionerRole.practitioner.identifier`/`.display` |   |
| `observationGroup.performerRole.careUnit.rivId` | 1..1 (om careUnit) | `Provenance.agent[author].who.identifier`och`PractitionerRole.organization.identifier` | Inre Sparr – vårdenhet |
| `observationGroup.performerRole.careUnit.name` | 0..1 | `PractitionerRole.organization.display` |   |
| `observationGroup.performerRole.careUnit.careGiver.rivId` | 1..1 (om careUnit) | `Provenance.agent[custodian].who.identifier` | Yttre Sparr – vårdgivare |
| `observationGroup.legalAuthenticator.time` | 1..1 (om legalAuthenticator) | Ej mappad | Signeringstid; samma hantering som`header.signature`i 2.0 |
| `observationGroup.legalAuthenticator.rivId`/`name` | 0..1 | Ej mappad | Som`header.signature`i 2.0 |
| `observationGroup.additionalParticipant` | 0..* | Ej mappad | Övriga deltagare (person, organisation, enhet, plats); samma fråga som OBS-006 för`participation`i 2.0 |
| `observationGroup.sourceSystem.rivId` | 1..1 | `Observation.meta.source` | Källsystemets HSA-id (GENERAL-005) |

#### Observationsnivå (observationGroup.observation) → Observation

| | | | |
| :--- | :--- | :--- | :--- |
| `observation.rivId` | 1..1 | `Observation.identifier` | Motsvarar`observationBody.rivId` |
| `observation.type` | 1..1 | `Observation.code` | Obligatorisk i 1.2. IoÖ:s SNOMED CT-koder och kodtabellen ovan gäller på samma sätt |
| `observation.status` | 0..0 | `Observation.status`=`final` | TKB 1.2 anger 0..0 (schemat tillåter 0..1): versionen omfattar bara faktiskt utförda observationer, så elementet skickas inte och`Observation.status`sätts till`final` |
| `observation.time.start`/`time.end` | 0..1 | `Observation.effectivePeriod`, eller`effectiveDateTime`när start och end är lika | Variabel precision som`time.ts`i 2.0 (OBS-001) |
| `observation.method` | 0..1 | `Observation.method` | Motsvarar`scale`i 2.0 |
| `observation.value.pq` | 0..1 | `Observation.valueQuantity` | Tillväxtmätningar enligt IoÖ |
| `observation.value.ts` | 0..1 | `Observation.valueDateTime`/`valueString` | Som i 2.0 (OBS-001) |
| `observation.value.ivlTs` | 0..1 | `Observation.valuePeriod` |   |
| `observation.value.cv` | 0..1 | `Observation.valueCodeableConcept` |   |
| `observation.value.ivlPq` | 0..1 | `Observation.valueRange` |   |
| `observation.targetSite` | 0..1 | `Observation.bodySite` | Bara en plats i 1.2, så OBS-004 uppstår inte |
| `observation.valueNegation` | 1..1 | `Observation.dataAbsentReason` | Som i 2.0 (OBS-002) |
| `observation.description` | 0..1 | `Observation.note.text` |   |
| `observation.approvedForPatient` | 1..1 | `Observation.meta.security` | Per observation i 1.2; PDL-kontroll – se PDL-001 |
| `observation.registrationTime` | 0..1 | `Observation.issued` | Valfri i 1.2 (obligatorisk i 2.0) |
| `observation.relation.code` | 1..1 (om relation) | Som`relation.type`i 2.0 | Se OBS-005 |
| `observation.relation.referredInformation.rivId` | 1..1 | `Observation.hasMember`/`derivedFrom`(identifier) | Beroende på relationstyp, OBS-005 |
| `observation.relation.referredInformation.time`,`type`,`informationOwner` | 1..1 | Ej mappad |   |

Element i 2.0 som saknar motsvarighet i 1.2 är bland annat `observationBody.value.st`, `value.int`, `targetSite` med flera värden, `participation` och JoL-headerns `origin`, `originalAuthor`, `modified` och `cancellation`.

-------

### OID-till-URI-tabell

| | | |
| :--- | :--- | :--- |
| `1.2.752.129.2.1.3.1` | `http://electronichealth.se/identifier/personnummer` | Personnummer |
| `1.2.752.129.2.1.3.3` | `http://electronichealth.se/identifier/samordningsnummer` | Samordningsnummer |
| `1.2.752.74.9.1` | `urn:oid:1.2.752.74.9.1` | Nationell reservidentitet |
| `1.2.752.129.2.1.4.1` | `urn:oid:1.2.752.29.4.19` | HSA-id (Inera NTjP) |
| `2.16.840.1.113883.6.96` | `http://snomed.info/sct` | SNOMED CT |

OID:er utan känd URI-mappning bevaras som `urn:oid:{oid}`.

-------

-------

### IoÖ Tillväxtkurva för barn och ungdom v3

Interaktionsöverenskommelsen (IoÖ) specificerar hur GetObservations ska användas för fyra tillväxtmätningar. Profilen `SEEHDSObservationGrowth` implementerar dessa krav.

#### Kodtabell – IoÖ SNOMED CT-koder → FHIR

Kodsystem för `observationBody.type.codeSystem`: `1.2.752.116.2.1.1` (SNOMED CT SE) → URI `http://snomed.info/sct`.

| | | | | | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Längd (primär) | `1153637007` | Kroppslängd | `8302-2` | `cm` | 0–1 decimal (t.ex. 49.5) |
| Längd (alternativ) | `50373000` | Mått på kroppslängd | `8302-2` | `cm` | 0–1 decimal |
| Längd (bakåtkompatibel) | `248334005` | Längd i liggande | `8302-2` | `cm` | Ej för nyanslutning |
| Vikt | `27113001` | Kroppsvikt | `29463-7` | `kg` | 0–3 decimaler (t.ex. 5.830) |
| Huvudomfång | `363812007` | Huvudomfång | `9843-4` | `cm` | 1 decimal (t.ex. 38.5) |
| Graviditetslängd vid födelse | `412726003` | Graviditetslängd vid födelse | `11885-1` | `d` | Heltal (t.ex. 280) |

#### IoÖ-fält → FHIR Observation mappning

Nedanstående tabell visar hur IoÖ-dokumentets konkreta fältnamn (i GetObservations-kontexten) mappar till FHIR `SEEHDSObservationGrowth` (sökvägar enligt den logiska modellen):

| | | | |
| :--- | :--- | :--- | :--- |
| `observationBody.type.code` | SNOMED CT-kod, se tabell ovan | `Observation.code.coding[snomedSE].code` | Obligatorisk per IoÖ; ska vara en av de 6 koderna |
| `observationBody.type.codeSystem` | `1.2.752.116.2.1.1`(SNOMED CT SE) | `Observation.code.coding[snomedSE].system` | URI:`http://snomed.info/sct` |
| `observationBody.value.pq.value` | Decimal (enhet beror på mättyp) | `Observation.valueQuantity.value` | Längd: 0–1 dec.; Vikt: 0–3 dec.; HuC: 1 dec.; Gest: heltal |
| `observationBody.value.pq.unit` | `cm`/`kg`/`d` | `Observation.valueQuantity.unit`+`valueQuantity.code` | UCUM-kod sätts parallellt med textenhet |

#### IoÖ-kommentarer

* **Längd:** IoÖ anger `1153637007` (kroppslängd) som primärkod och `50373000` (mått på kroppslängd) som alternativ. Koden `248334005` (längd i liggande) stöds bakåtkompatibelt men ska **inte** användas vid nyanslutning.
* **Vikt:** Enbart kod `27113001` (kroppsvikt). Enhet alltid `kg`, decimalseparator `"."` (XML-standard).
* **Huvudomfång:** Enbart kod `363812007`. Enhet alltid `cm` med 1 decimal.
* **Graviditetslängd vid födelse:** Kod `412726003`. Anges i **dagar** (heltal, enhet `d`). Representerar antalet dagar som graviditeten beräknas ha varat vid barnets födelse.

-------

### Öppna frågor

| | | |
| :--- | :--- | :--- |
| OBS-001 | `ts`-strängar med lägre precision:`valueDateTime`(precision ≥ dag) eller`valueString`. | **Beslutat**– se avsnitt ovan och mapping-issues.md |
| OBS-002 | `dataAbsentReason`-kod för`valueNegation=true`. | **Beslutat**–`not-detected` |
| OBS-003 | ConceptMap för SNOMED CT-urval`56431000052106`→ FHIR ObservationStatus. | **Beslutat**– se`ObservationStatusMap.fsh` |
| OBS-004 | `targetSite`kardinalitetskollision. | **Beslutat**– extension[additionalBodySite] + R5-migrationsnotering |
| OBS-005 | `relation`med`relation.type`– lokal extension behövs för otypade relationer. | Öppen |
| GENERAL-001 | Gemensam hantering av RIVTA variabelprecisions-tidsstämplar. | Öppen |

-------

### Föreslagna nya issues

| | | |
| :--- | :--- | :--- |
| OBS-006 | `participation[*].time`(tidpunkt för deltagande),`participation[*].patient`(patient som deltagare),`participation[*].locationRole`(platsroll), samt detaljfälten i`participation[*].resource`(groupId, amount, resourceProperty) saknar standardmotpart i FHIR Observation. Bör dessa täckas av en gemensam`participation`-extension i profilen, eller ska dessa fält markeras som ej mappade med informationsförlust? | Föreslagen |
| OBS-007 | `observationBody.patient.person.givenNameMarker`(tilltalsnamnsmarkering, giltiga värden 10–99) har inget standardiserat FHIR-fält i Patient-resursen. Bör en extension definieras för denna uppgift, eller ska den ignoreras? | Föreslagen |
| OBS-008 | `observationBody.patient.person.maritalStatus`(civilstånd) och`observationBody.patient.person.address`/`electronicAddress`(samt`patient.address`/`electronicAddress`) är ej relevanta för Observation-resursen. Ska de lagras i en sammanhörande Patient-resurs om en skapas, och i så fall vilket profileringskrav gäller för Patient-resursen i detta sammanhang? | Föreslagen |

