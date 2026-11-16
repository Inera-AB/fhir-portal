# GetLaboratoryOrderOutcome – Provsvar - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## GetLaboratoryOrderOutcome – Provsvar

**Tjänstekontrakt:** `clinicalprocess:healthcond:actoutcome` GetLaboratoryOrderOutcome v4.2, v4.1 och v3.1
 **FHIR-profiler:** [SEEHDSDiagnosticReportLab](StructureDefinition-SEEHDSDiagnosticReportLab.md) | [SEEHDSObservationLab](StructureDefinition-SEEHDSObservationLab.md)
 **Logiska modeller:** [SEEHDSLMLaboratoryOrderOutcome](StructureDefinition-SEEHDSLMLaboratoryOrderOutcome.md) (v4.2) | [SEEHDSLMLaboratoryOrderOutcomeV41](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV41.md) (v4.1, se [Övriga aktiva versioner](#version-4-1)) | [SEEHDSLMLaboratoryOrderOutcomeV31](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV31.md) (v3.1, se [Övriga aktiva versioner](#version-3-1))
 **Krävs för NPÖ:** Ja (v3.1, 4.1) | **Krävs för 1177 Journal:** Ja (v3.1, 4.2)
 **EHDS-koppling:** Medical test results – laboratorie- och diagnostiska resultat

-------

> **VIKTIGT – JoL-header (inte PatientSummaryHeader)**GetLaboratoryOrderOutcome v4.2 använder en **JoL-header** (`header.accessControlHeader`), inte det vanliga PatientSummaryHeader-mönstret. PDL-fälten `accountableCareGiver` och `accountableCareUnit` finns direkt i `accessControlHeader`, **inte** nästlade under ett `accountableHealthcareProfessional`-block. Headern innehåller dessutom ett separat `header.author`-block för vårdfacklig information och ett `header.signature`-block för signatär. Se [PDL och Sparr](#pdl-och-sparr).

-------

### Resurshierarki

```
laboratoryOrderOutcome 0..*
│
SEEHDSDiagnosticReportLab  (1 per laboratoryOrderOutcome)
  └── SEEHDSObservationLab (1 per groupOfAnalyses.analysis)
        └── Specimen        (0..* per analysis.specimen)

```

En `laboratoryOrderOutcome` representerar en beställning (order) med tillhörande analysresultat. Varje analys inom `groupOfAnalyses.analysis` mappas till en separat `SEEHDSObservationLab`. Provrör/specimen kopplas till respektive `Observation` och kan delas mellan analyser med samma specimen-identifierare.

-------

### Mappningstabell – SEEHDSDiagnosticReportLab

Rotelementet `laboratoryOrderOutcome` (ett per svar) mappas till en DiagnosticReport-instans.

#### Header – accessControlHeader (PDL/Sparr)

| | | | |
| :--- | :--- | :--- | :--- |
| `header.accessControlHeader.patientId.extension` | 1..1 | `DiagnosticReport.subject.identifier.value` | Personnummer eller samordningsnummer |
| `header.accessControlHeader.patientId.root` | 1..1 | `DiagnosticReport.subject.identifier.system` | OID→URI, se tabell nedan |
| `header.accessControlHeader.originalPatientId` | 0..1 | Ej mappad | Administrativt reservfält för ursprunglig patientidentitet; ingen FHIR-motpart i DiagnosticReport |
| `header.accessControlHeader.careProcessId` | 0..1 | Ej mappad | Vårdprocessidentifierare; inget standardiserat FHIR-fält i DiagnosticReport; kan hanteras via Encounter.identifier om vårdprocess är känd |
| `header.accessControlHeader.accountableCareGiver` | 1..1 | `Provenance.agent[custodian].who.identifier` | Yttre Sparr – juridiskt ansvarig vårdgivare |
| `header.accessControlHeader.accountableCareUnit` | 1..1 | `Provenance.agent[author].who.identifier` | Inre Sparr – informationsägande vårdenhet |
| `header.accessControlHeader.blockComparisonTime` | 1..1 | Ej mappad | Används av Sparr-tjänsten vid filtrering; transportlagerdata, ingår ej i FHIR-resursen |
| `header.accessControlHeader.approvedForPatient` | 1..1 | `DiagnosticReport.meta.security` | PDL-kontroll – se[PDL-001](#öppna-frågor) |

#### Header – sourceSystemId och record

| | | | |
| :--- | :--- | :--- | :--- |
| `header.sourceSystemId` | 1..1 | `DiagnosticReport.meta.source` | Format:`https://tjanstekatalogen.inera.se/Endpoint/{hsaId}` |
| `header.record.id` | 1..1 | `DiagnosticReport.identifier[record]` | Källsystemets postidentifierare |
| `header.record.timestamp` | 1..1 | `DiagnosticReport.issued` | YYYYMMDDHHMMSS → ISO 8601 (Europe/Stockholm), se[GENERAL-001](#öppna-frågor) |

#### Header – author (vårdfacklig information)

| | | | |
| :--- | :--- | :--- | :--- |
| `header.author.id` | 0..1 | `PractitionerRole.identifier.value` | HSA-id för ansvarig person; via performer-referens |
| `header.author.name` | 0..1 | `PractitionerRole.practitioner.display` | Visningsnamn |
| `header.author.timestamp` | 1..1 | `Provenance.recorded` | Tidpunkt för författarens åtgärd; YYYYMMDDHHMMSS → ISO 8601 |
| `header.author.byRole` | 0..1 | `PractitionerRole.code` | Yrkesrollskod |
| `header.author.orgUnit.id` | 0..1 | `PractitionerRole.organization.identifier.value` | Organisationsenhetens HSA-id |
| `header.author.orgUnit.name` | 1..1 | `PractitionerRole.organization.display` | Organisationsenhetens namn |

#### Header – signature (signatär)

| | | | |
| :--- | :--- | :--- | :--- |
| `header.signature.id` | 0..1 | `DiagnosticReport.extension[signatureId]` | Signatärens HSA-id; kräver lokal extension om ej finns |
| `header.signature.name` | 0..1 | Ej mappad | Signatärens namn i klartext; HSA-id räcker för logisk referens |
| `header.signature.timestamp` | 1..1 | `DiagnosticReport.extension[signatureTime]` | Signeringstidpunkt; YYYYMMDDHHMMSS → ISO 8601 |
| `header.signature.byRole` | 0..1 | Ej mappad | Yrkesroll vid signering; ingen standardiserad motpart på DiagnosticReport; kan inkluderas i signatärens PractitionerRole om den skapas |
| `header.signature.orgUnit.id` | 0..1 | Ej mappad | Signatärens organisationsenhet (HSA-id) |
| `header.signature.orgUnit.name` | 1..1 (om orgUnit) | Ej mappad | Signatärens organisationsenhet (namn) |

#### Body – beställningsinformation

| | | | |
| :--- | :--- | :--- | :--- |
| `body.identifier` | 1..1 | `DiagnosticReport.identifier[order]` | Beställnings-id (remiss-/ordernummer) |
| `body.laboratoryIdentifier` | 0..1 | `DiagnosticReport.identifier[lab]` | Laboratoriets eget interna id |
| `body.type` | 1..1 | `DiagnosticReport.code` | Typ av laboratoriebeställning (NPU/LOINC/lokalt) |
| `body.text` | 0..1 | `DiagnosticReport.conclusion` | Fritext-sammanfattning av beställningssvaret |

#### Body – referral (kopplad remiss)

| | | | |
| :--- | :--- | :--- | :--- |
| `body.referral.identifier` | 1..1 | `DiagnosticReport.basedOn.identifier` | Remiss-id → logisk referens till ServiceRequest |
| `body.referral.timestamp` | 1..1 | Ej mappad till DiagnosticReport | Remissens tidpunkt tillhör ursprungsremissen (ServiceRequest.authoredOn) |
| `body.referral.version` | 0..1 | Ej mappad | Remissversion; inget standardiserat FHIR-fält; kan ev. lagras i ServiceRequest.extension |
| `body.referral.question` | 0..1 | Ej mappad till DiagnosticReport | Frågeställning från remittenten tillhör ursprungsremissen (ServiceRequest.note) |
| `body.referral.requestedCareService` | 0..* | Ej mappad till DiagnosticReport | Begärd tjänst tillhör ursprungsremissen (ServiceRequest.code) |
| `body.referral.requester.id` | 0..1 | Ej mappad till DiagnosticReport | Remittentens HSA-id tillhör ursprungsremissen (ServiceRequest.requester) |
| `body.referral.requester.name` | 0..1 | Ej mappad till DiagnosticReport | Remittentens namn tillhör ursprungsremissen |
| `body.referral.requester.byRole` | 0..1 | Ej mappad till DiagnosticReport | Remittentens yrkesroll tillhör ursprungsremissen |
| `body.referral.requester.orgUnit.id` | 0..1 | Ej mappad till DiagnosticReport | Remittentens org-enhets HSA-id tillhör ursprungsremissen |
| `body.referral.requester.orgUnit.name` | 1..1 | Ej mappad till DiagnosticReport | Remittentens org-enhets namn tillhör ursprungsremissen |
| `body.referral.referralInformation.referralComment` | 0..1 | Ej mappad till DiagnosticReport | Remisskommentar tillhör ursprungsremissen (ServiceRequest.note) |
| `body.referral.referralInformation.referralMedicalInformation` | 0..1 | Ej mappad till DiagnosticReport | Medicinsk remissinformation tillhör ursprungsremissen (ServiceRequest.note) |

> Alla `body.referral.*`-fält är attribut till ursprungsremissen. En logisk referens via `DiagnosticReport.basedOn` → `ServiceRequest.identifier` är tillräcklig. Bryggan skapar en minimal stub-ServiceRequest om ingen matchning finns. Se [Referral → ServiceRequest](#referral--servicerequest).

#### Body – mottagande enhet och kontakt

| | | | |
| :--- | :--- | :--- | :--- |
| `body.recipientUnit.id` | 0..1 | `DiagnosticReport.resultsInterpreter.identifier` | Mottagande vårdenhet (svarmottagare) via logisk referens |
| `body.recipientUnit.name` | 1..1 | `DiagnosticReport.resultsInterpreter.display` | Svarmottagarens namn |
| `body.recipientSignature.id` | 0..1 | Ej mappad | Kvittens av svaret; inget standardiserat FHIR-fält i DiagnosticReport |
| `body.recipientSignature.name` | 0..1 | Ej mappad | Kvittensnamn; inget standardiserat FHIR-fält |
| `body.recipientSignature.timestamp` | 1..1 | Ej mappad | Kvittenstidpunkt; inget standardiserat FHIR-fält |
| `body.recipientSignature.byRole` | 0..1 | Ej mappad | Yrkesroll vid kvittens; inget standardiserat FHIR-fält |
| `body.contactInformation.text` | 1..1 | Ej mappad | Kontaktinformation i fritext; inget standardiserat FHIR-fält i DiagnosticReport; kan läggas i DiagnosticReport.text.div som narrativ |

#### Härledda fält – DiagnosticReport

| | | |
| :--- | :--- | :--- |
| (härledd från analysis.status) | `DiagnosticReport.status` | Se[Härledda fält – DiagnosticReport.status](#diagnosticreportstatus) |
| (groupOfAnalyses.analysis → ObservationLab) | `DiagnosticReport.result` | Reference(SEEHDSObservationLab) per analys |

-------

### Mappningstabell – groupOfAnalyses-metadata

`groupOfAnalyses` har egna fält som fångar metadata om gruppen av analyser (t.ex. ett analyspaket).

| | | | |
| :--- | :--- | :--- | :--- |
| `groupOfAnalyses.name` | 0..1 | `DiagnosticReport.category.text` | Paketnamn; alternativt som`DiagnosticReport.note.text`om category används för klassificering |
| `groupOfAnalyses.comment` | 0..1 | `DiagnosticReport.note.text` | Kommentar till analysgruppen |
| `groupOfAnalyses.code` | 0..1 | `DiagnosticReport.category` | Kod för analysgruppen/paketet |

-------

### Mappningstabell – SEEHDSObservationLab (per analysis)

Varje element i `body.groupOfAnalyses[*].analysis[*]` mappas till en separat `SEEHDSObservationLab`-instans.

| | | | |
| :--- | :--- | :--- | :--- |
| `groupOfAnalyses.analysis.identifier` | 0..1 | `Observation.identifier` | Analysens unika id i källsystemet |
| `groupOfAnalyses.analysis.timestamp` | 0..1 | `Observation.effectiveDateTime` | Tidpunkt för mätningen; YYYYMMDDHHMMSS → ISO 8601 |
| `groupOfAnalyses.analysis.code` | 1..1 | `Observation.code` | NPU- eller LOINC-kod för analysen |
| `groupOfAnalyses.analysis.method` | 0..1 | `Observation.method` | Analysmetod |
| `groupOfAnalyses.analysis.status` | 0..1 | `Observation.status` | Se statusmappning nedan |
| `groupOfAnalyses.analysis.comment` | 0..1 | `Observation.note[0].text` | Kommentar till analysen |
| `groupOfAnalyses.analysis.accredited` | 0..1 | `Observation.extension[accredited]` | Boolean; ackrediteringsstatus för analysen |

#### Resultat (analysis.result)

| | | | |
| :--- | :--- | :--- | :--- |
| `groupOfAnalyses.analysis.result.type` | 0..1 | `Observation.extension[resultType]` | Typ av resultat (kvantitativt, kvalitativt etc.) |
| `groupOfAnalyses.analysis.result.value` | 1..1 | `Observation.value[x]` | Grenen (`cv`/`pq`/`intervalPQ`/`st`) styr typen, se[result.value](#lab-001) |
| `groupOfAnalyses.analysis.result.comment` | 0..1 | `Observation.note[1].text` | Kommentar till enskilt resultat |
| `groupOfAnalyses.analysis.result.interpretation` | 0..* | `Observation.interpretation` | H/L/A/N – tolkning av resultatet |
| `groupOfAnalyses.analysis.result.reference.interval` | 0..1 | `Observation.referenceRange.text` | Referensintervall som fritext (PQIntervalType) |
| `groupOfAnalyses.analysis.result.reference.description` | 0..1 | `Observation.referenceRange.text` | Beskrivning; kombineras med interval om båda finns |
| `groupOfAnalyses.analysis.result.reference.population` | 0..1 | `Observation.referenceRange.appliesTo` | Population som referensintervallet gäller |
| `groupOfAnalyses.analysis.result.reference.comment` | 0..1 | `Observation.referenceRange.text` | Kommentar om referensintervallet; kombineras i referenceRange.text |
| `groupOfAnalyses.analysis.result.recipientSignature.id` | 0..1 | Ej mappad | Mottagarkvittens; inget standardiserat FHIR-fält i Observation |
| `groupOfAnalyses.analysis.result.recipientSignature.name` | 0..1 | Ej mappad | Mottagarkvittens namn; inget standardiserat FHIR-fält |
| `groupOfAnalyses.analysis.result.recipientSignature.timestamp` | 1..1 | Ej mappad | Mottagarkvittenstidpunkt; inget standardiserat FHIR-fält |
| `groupOfAnalyses.analysis.result.recipientSignature.byRole` | 0..1 | Ej mappad | Yrkesroll vid mottagarkvittens; inget standardiserat FHIR-fält |
| `groupOfAnalyses.analysis.result.performerSignature.id` | 0..1 | `Observation.performer.identifier` | Utförarens HSA-id; via Reference(PractitionerRole) |
| `groupOfAnalyses.analysis.result.performerSignature.name` | 0..1 | `Observation.performer.display` | Utförarens namn |
| `groupOfAnalyses.analysis.result.performerSignature.timestamp` | 1..1 | Ej mappad | Signeringstidpunkt för utförarens signatur; inget dedikerat fält i Observation; kan lagras i Provenance om kritiskt |
| `groupOfAnalyses.analysis.result.performerSignature.byRole` | 0..1 | Ej mappad | Utförarens yrkesroll; ingår via PractitionerRole.code om performer-referens skapas |
| `groupOfAnalyses.analysis.result.related` | 0..* | Ej mappad | Relaterade analyser; inget strukturerat fält i Observation R4; alternativ:`Observation.hasMember`eller`Observation.derivedFrom`beroende på relationstyp – se[LAB-002](#öppna-frågor) |

#### Mätinstrument (analysis.device)

| | | | |
| :--- | :--- | :--- | :--- |
| `groupOfAnalyses.analysis.device.identifier` | 1..1 | `Observation.device.identifier` | Mätinstrumentets id; Reference(Device) via logisk referens |

#### Härledda fält – Observation

| | | |
| :--- | :--- | :--- |
| (härledd) | `Observation.subject` | Logisk referens till DiagnosticReport.subject (samma patient) |
| (härledd) | `Observation.partOf` | Reference till DiagnosticReport |

-------

### Mappningstabell – Specimen (per analysis.specimen)

| | | | |
| :--- | :--- | :--- | :--- |
| `analysis.specimen.identifier` | 0..1 | `Specimen.identifier` | Provrörets/provets id |
| `analysis.specimen.material` | 0..1 | `Specimen.type` | Provsort (blod, urin, etc.) |
| `analysis.specimen.timestamp` | 1..1 | `Specimen.collection.collectedDateTime` | Provtagningstid; YYYYMMDDHHMMSS → ISO 8601 |
| `analysis.specimen.anatomicalLocation` | 0..1 | `Specimen.collection.bodySite` | Kroppsdel/provtagningslokal |
| `analysis.specimen.comment` | 0..1 | `Specimen.note.text` | Kommentar om provet |
| `analysis.specimen.activity[i].code` | 1..1 | `Specimen.collection.extension[activity][i].code` | Aktivitetskod (t.ex. fasta, medicinering); kräver lokal extension |
| `analysis.specimen.activity[i].time` | 1..1 | `Specimen.collection.extension[activity][i].period` | Aktivitetens tidsperiod; Period-typ |
| `analysis.specimen.activity[i].method` | 0..1 | `Specimen.collection.extension[activity][i].method` | Aktivitetsmetod |
| `analysis.specimen.container[i].identifier` | 0..* | `Specimen.container[i].identifier` | Behållarens id (ett eller flera) |
| `analysis.specimen.container[i].type` | 1..1 | `Specimen.container[i].type` | Behållartyp (provrörstyp) |
| (härledd) | `Observation.specimen` | Reference(Specimen) per analys |   |

-------

### Härledda fält / Designbeslut

#### DiagnosticReport.status

`DiagnosticReport.status` finns inte explicit i TKB:n och måste härledas från statusarna hos de ingående analyserna (`analysis.status`). Mappningsreglerna är:

| | |
| :--- | :--- |
| Alla analyser har status`final` | `final` |
| Minst en analys har status`preliminary`(och ingen är`registered`) | `preliminary` |
| Minst en analys har status`registered`(ej påbörjad/inkommande) | `registered` |
| Minst en analys har status`cancelled`och inga andra | `cancelled` |
| Blandade statusar (t.ex.`final`+`preliminary`) | `partial` |
| Okänd/omappningsbar status | `unknown` |

Analysstatus från RIVTA mappas till FHIR `ObservationStatus` enligt:

| | |
| :--- | :--- |
| `REG`/`registered` | `registered` |
| `PREL`/`preliminary` | `preliminary` |
| `FINAL`/`final` | `final` |
| `KVAL`/`corrected` | `corrected` |
| `AVED`/`cancelled` | `cancelled` |

#### body.text – conclusion kontra narrative

`body.text` är en fritext som antingen representerar en samlad kommentar eller ett sammandrag av beställningssvaret. Mappas till `DiagnosticReport.conclusion`. Om texten ska presenteras som XHTML-narrativ sätts även `DiagnosticReport.text.div` (med `text.status = generated`).

#### result.value – AnyValueType (LAB-001, beslutat)

`analysis.result.value` är av typen `AnyValueType`. I XSD:n har den fyra grenar, varav en används per resultat, och var och en mappas entydigt till `Observation.value[x]`:

| | | |
| :--- | :--- | :--- |
| `cv` | CVType | `valueCodeableConcept` |
| `pq` | PQType | `valueQuantity` |
| `intervalPQ` | PQIntervalType | `valueRange` |
| `st` | string | `valueString` |

#### performerSignature → Observation.performer

`analysis.result.performerSignature` representerar den utförande analytikers signatur. Mappas till `Observation.performer` som Reference(PractitionerRole) med logisk referens via HSA-id om id finns tillgängligt.

#### Referral → ServiceRequest

Om `body.referral.identifier` finns skapas en logisk referens till en `ServiceRequest`-resurs via `DiagnosticReport.basedOn`. Bryggan ansvarar för att matcha `identifier` mot befintliga ServiceRequest-instanser (från GetReferralOutcome eller GetRequestActivities) eller skapa en minimal stub-ServiceRequest med enbart identifier satt. Remissens övriga fält (timestamp, question, requestedCareService, requester, referralInformation) tillhör ServiceRequest och repeteras inte i DiagnosticReport.

#### result.related → Observation-relation

`analysis.result.related 0..*` refererar till relaterade analyser men saknar specificerat relationsmönster i TKB:n. FHIR Observation har två relevanta fält:

* `Observation.hasMember` – om den relaterade analysen ingår i samma panel
* `Observation.derivedFrom` – om den är ett härledd resultat

Bryggan behöver tilldelningsregler för att avgöra vilken relationstyp som gäller. Se [LAB-002](#öppna-frågor).

-------

### PDL och Sparr

GetLaboratoryOrderOutcome v4.2 använder **JoL-header** (inte PatientSummaryHeader). PDL-fälten skiljer sig från andra TK:er:

| | | |
| :--- | :--- | :--- |
| Yttre Sparr (vårdgivare) | `header.accessControlHeader.accountableCareGiver` | `Provenance.agent[custodian].who.identifier` |
| Inre Sparr (vårdenhet) | `header.accessControlHeader.accountableCareUnit` | `Provenance.agent[author].who.identifier` |
| Jämförelsetid (Sparr) | `header.accessControlHeader.blockComparisonTime` | Används av Sparr-tjänsten vid filtrering; ingår ej i FHIR-resursen |
| Patientgodkännande | `header.accessControlHeader.approvedForPatient`(boolean) | `DiagnosticReport.meta.security`; se[PDL-001](#öppna-frågor) |

Observera att `accountableCareGiver` och `accountableCareUnit` är direkt under `accessControlHeader` – det finns inget mellanliggande `accountableHealthcareProfessional`-block i JoL-headern.

-------

### Provenance

| | | |
| :--- | :--- | :--- |
| `agent[custodian]` | Juridiskt ansvarig vårdgivare | `header.accessControlHeader.accountableCareGiver` |
| `agent[author]` | Informationsägande vårdenhet | `header.accessControlHeader.accountableCareUnit` |

`Provenance.target` refererar `DiagnosticReport` (och transitivt alla `Observation`-instanser) via `urn:uuid:{DiagnosticReport.id}`.
 `Provenance.recorded` = `header.record.timestamp` (ISO 8601).
 `Provenance.agent[author].onBehalfOf` = `header.accessControlHeader.accountableCareGiver` (vårdgivare).

-------

### Övriga aktiva versioner

Mappningstabellerna ovan utgår från GetLaboratoryOrderOutcome 4.2. Enligt [startsidan](index.md) är även 4.1 (NPÖ) och 3.1 (NPÖ och 1177 Journal) aktiva. Båda har egna logiska modeller och mappas till samma profiler, [SEEHDSDiagnosticReportLab](StructureDefinition-SEEHDSDiagnosticReportLab.md) och [SEEHDSObservationLab](StructureDefinition-SEEHDSObservationLab.md).

| | | | |
| :--- | :--- | :--- | :--- |
| 4.1 | [SEEHDSLMLaboratoryOrderOutcomeV41](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV41.md) | `riv.clinicalprocess.healthcond.actoutcome`4.1.3 | Samma struktur; några kardinaliteter och`referralInformation`skiljer |
| 3.1 | [SEEHDSLMLaboratoryOrderOutcomeV31](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV31.md) | `riv.clinicalprocess.healthcond.actoutcome`3.1.10 | Annan meddelandemodell (PatientSummaryHeader och platt analyslista) |

#### GetLaboratoryOrderOutcome 4.1

| | | | |
| :--- | :--- | :--- | :--- |
| `laboratoryOrderOutcome.body.referral.referralInformation` | – | 0..1 Backbone | Finns bara i 4.2 |
| `laboratoryOrderOutcome.header.author.orgUnit.rivId` | 1..1 IIType | 0..1 IIType | Ändrad kardinalitet |
| `laboratoryOrderOutcome.header.signature.orgUnit.rivId` | 1..1 IIType | 0..1 IIType | Ändrad kardinalitet |
| `laboratoryOrderOutcome.body.referral.requester` | 1..1 Backbone | 0..1 Backbone | Ändrad kardinalitet |
| `laboratoryOrderOutcome.body.referral.requester.name` | 1..1 String | 0..1 String | Ändrad kardinalitet |
| `laboratoryOrderOutcome.body.referral.requester.orgUnit.rivId` | 1..1 IIType | 0..1 IIType | Ändrad kardinalitet |

Alla element i 4.1 finns i 4.2 med samma namn och mappas enligt tabellerna ovan. Skillnaderna påverkar inte mappningen:

* `header.author.orgUnit.id`, `header.signature.orgUnit.id`, `body.referral.requester` med `name` och `orgUnit.id` är obligatoriska i 4.1. Målelementen är desamma.
* `body.referral.referralInformation` finns inte i 4.1. De element som då saknas är ändå inte mappade till DiagnosticReport.

#### GetLaboratoryOrderOutcome 3.1

Version 3.1 har PatientSummaryHeader (`laboratoryOrderOutcomeHeader`), en body med svarets typ, disciplin, utlåtande och ansvarig labbläkare, och en platt lista `analysis` med ett resultat per analys. Det finns ingen gruppering i `groupOfAnalyses`, inget strukturerat provmaterial och inget kodat resultatvärde.

| | | | |
| :--- | :--- | :--- | :--- |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.documentId` | 1..1 String | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.sourceSystemHSAId` | 1..1 String | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.documentTime` | 1..1 TimeStamp | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.patientId` | 1..1 PersonIdType | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional` | 1..1 Backbone | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator` | 0..1 Backbone | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.approvedForPatient` | 1..1 Boolean | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.careContactId` | 0..1 String | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeBody.resultType` | 1..1 String | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeBody.registrationTime` | 1..1 TimeStamp | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeBody.discipline` | 1..1 String | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeBody.resultReport` | 0..1 String | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeBody.resultComment` | 0..1 String | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional` | 0..1 Backbone | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis` | 0..* Backbone | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeBody.order` | 1..1 Backbone | – | Finns bara i 3.1 |
| `result` | 1..1 Backbone | – | Finns bara i 3.1 |
| `laboratoryOrderOutcome.header.accessControlHeader` | – | 1..1 Backbone | Finns bara i 4.2 |
| `laboratoryOrderOutcome.header.sourceSystemId` | – | 1..1 IIType | Finns bara i 4.2 |
| `laboratoryOrderOutcome.header.record` | – | 1..1 Backbone | Finns bara i 4.2 |
| `laboratoryOrderOutcome.header.author` | – | 0..1 Backbone | Finns bara i 4.2 |
| `laboratoryOrderOutcome.header.signature` | – | 0..1 Backbone | Finns bara i 4.2 |
| `laboratoryOrderOutcome.body.identifier` | – | 1..1 IIType | Finns bara i 4.2 |
| `laboratoryOrderOutcome.body.laboratoryIdentifier` | – | 0..1 IIType | Finns bara i 4.2 |
| `laboratoryOrderOutcome.body.type` | – | 1..1 CVType | Finns bara i 4.2 |
| `laboratoryOrderOutcome.body.text` | – | 0..1 String | Finns bara i 4.2 |
| `laboratoryOrderOutcome.body.referral` | – | 0..1 Backbone | Finns bara i 4.2 |
| `laboratoryOrderOutcome.body.groupOfAnalyses` | – | 0..* Backbone | Finns bara i 4.2 |
| `laboratoryOrderOutcome.body.recipientUnit` | – | 1..1 Backbone | Finns bara i 4.2 |
| `laboratoryOrderOutcome.body.recipientSignature` | – | 0..1 Backbone | Finns bara i 4.2 |
| `laboratoryOrderOutcome.body.contactInformation` | – | 0..1 Backbone | Finns bara i 4.2 |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeHeader` | 1..1 Backbone | `laboratoryOrderOutcome.header` | Bytt namn |
| `laboratoryOrderOutcome.laboratoryOrderOutcomeBody` | 1..1 Backbone | `laboratoryOrderOutcome.body` | Bytt namn |

Resurshierarkin är densamma som för 4.2: en `SEEHDSDiagnosticReportLab` per `laboratoryOrderOutcome` och en `SEEHDSObservationLab` per `analysis`.

##### Header (laboratoryOrderOutcomeHeader) → DiagnosticReport

| | | | |
| :--- | :--- | :--- | :--- |
| `laboratoryOrderOutcomeHeader.documentId` | 1..1 | `DiagnosticReport.identifier[record]` | Motsvarar`header.record.id`i 4.2 |
| `laboratoryOrderOutcomeHeader.sourceSystemHSAId` | 1..1 | `DiagnosticReport.meta.source` | Format:`https://tjanstekatalogen.inera.se/Endpoint/{hsaId}`(GENERAL-005) |
| `laboratoryOrderOutcomeHeader.documentTime` | 1..1 | `DiagnosticReport.issued` | Tidpunkt då svaret kom till beställarens system; ÅÅÅÅMMDDttmmss → ISO 8601 (GENERAL-001) |
| `laboratoryOrderOutcomeHeader.patientId.id` | 1..1 | `DiagnosticReport.subject.identifier.value` | PersonIdType; se[GENERAL-006](mappings.md#patientreferens) |
| `laboratoryOrderOutcomeHeader.patientId.type` | 1..1 | `DiagnosticReport.subject.identifier.system` | OID→URI enligt tabellen nedan |
| `laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.authorTime` | 1..1 | `Provenance.recorded` | Motsvarar`header.author.timestamp`i 4.2 |
| `….accountableHealthcareProfessional.healthcareProfessionalHSAId` | 0..1 | `PractitionerRole.identifier.value` | Den som framställt vårdbegäran; via`DiagnosticReport.performer`som i 4.2 |
| `….accountableHealthcareProfessional.healthcareProfessionalName` | 0..1 | `PractitionerRole.practitioner.display` |   |
| `….accountableHealthcareProfessional.healthcareProfessionalRoleCode` | 0..1 | `PractitionerRole.code` |   |
| `….accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId` | 1..1 | `PractitionerRole.organization.identifier.value` |   |
| `….accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName` | 1..1 | `PractitionerRole.organization.display` |   |
| `….healthcareProfessionalOrgUnit.orgUnitTelecom/orgUnitEmail/orgUnitAddress/orgUnitLocation` | 0..1 | Ej mappad | Kontaktuppgifter på enhetsnivå, se[GENERAL-008](mappings.md#organisation) |
| `….accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | 0..1 | `Provenance.agent[author].who.identifier` | Inre Sparr; motsvarar`accessControlHeader.accountableCareUnit` |
| `….accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | 0..1 | `Provenance.agent[custodian].who.identifier` | Yttre Sparr; motsvarar`accessControlHeader.accountableCareGiver` |
| `laboratoryOrderOutcomeHeader.legalAuthenticator.signatureTime` | 1..1 (om legalAuthenticator) | `DiagnosticReport.extension[signatureTime]` | Motsvarar`header.signature.timestamp` |
| `laboratoryOrderOutcomeHeader.legalAuthenticator.legalAuthenticatorHSAId` | 0..1 | `DiagnosticReport.extension[signatureId]` | Motsvarar`header.signature.id` |
| `laboratoryOrderOutcomeHeader.legalAuthenticator.legalAuthenticatorName` | 0..1 | Ej mappad | Som`header.signature.name` |
| `laboratoryOrderOutcomeHeader.approvedForPatient` | 1..1 | `DiagnosticReport.meta.security` | PDL-kontroll – se PDL-001 |
| `laboratoryOrderOutcomeHeader.careContactId` | 0..1 | `DiagnosticReport.encounter.identifier.value` | Logisk referens till vårdkontakten |

##### Body (laboratoryOrderOutcomeBody) → DiagnosticReport

| | | | |
| :--- | :--- | :--- | :--- |
| `laboratoryOrderOutcomeBody.resultType` | 1..1 | `DiagnosticReport.status` | `DEF`→`final`,`TILL`→`amended`. Används i stället för härledningen från analysstatus i 4.2 |
| `laboratoryOrderOutcomeBody.registrationTime` | 1..1 | `DiagnosticReport.meta.lastUpdated` | Senaste tidpunkten då svaret uppdaterades i källsystemet |
| `laboratoryOrderOutcomeBody.discipline` | 1..1 | `DiagnosticReport.category.text` | Enda tillåtna värde är "Klinisk kemi";`category`sätts även till`v2-0074#CH` |
| `laboratoryOrderOutcomeBody.resultReport` | 0..1 | `DiagnosticReport.conclusion` | Sammanfattande utlåtande; motsvarar`body.text` |
| `laboratoryOrderOutcomeBody.resultComment` | 0..1 | `DiagnosticReport.note.text` | Kommentar till hela svaret; samma hantering som`groupOfAnalyses.comment`i 4.2 |
| `laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalHSAId` | 0..1 | `DiagnosticReport.resultsInterpreter`(Reference(PractitionerRole)) | Ansvarig labbläkare; logisk referens via HSA-id |
| `….accountableHealthcareProfessional.healthcareProfessionalName` | 0..1 | `PractitionerRole.practitioner.display` |   |
| `….accountableHealthcareProfessional.healthcareProfessionalRoleCode` | 0..1 | `PractitionerRole.code` |   |
| `….accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId/orgUnitName` | 1..1 | `PractitionerRole.organization` | Laboratoriets enhet |
| `….accountableHealthcareProfessional.authorTime` | 1..1 (om elementet finns) | Ej mappad | Tidpunkt då svaret skickades från laboratoriet; täcks av`issued` |
| `laboratoryOrderOutcomeBody.order.orderId` | 1..1 | `DiagnosticReport.identifier[order]` | Remissens id; tom sträng när remiss saknas, och då skapas ingen identifierare |
| `laboratoryOrderOutcomeBody.order.orderReason` | 0..1 | Ej mappad till DiagnosticReport | Frågeställningen tillhör remissen (ServiceRequest.reasonCode.text), som i 4.2 |
| (härledd från`analysis`) | – | `DiagnosticReport.result` | Reference(SEEHDSObservationLab) per analys |

##### analysis → Observation

| | | | |
| :--- | :--- | :--- | :--- |
| `analysis.analysisId` | 1..1 | `Observation.identifier` | IIType:`root`→`system`(OID→URI),`extension`→`value` |
| `analysis.analysisTime` | 0..1 | `Observation.effectivePeriod` | Provtagningstiden; saknas`start`eller`end`tolkas båda som samma tidpunkt, och då används`effectiveDateTime` |
| `analysis.analysisCode` | 0..1 | `Observation.code.coding` | NPU-kod |
| `analysis.analysisText` | 0..1 | `Observation.code.text` | Analysnamn när NPU-kod saknas |
| `analysis.analysisStatus` | 0..1 | `Observation.status` | Fritext, helst enligt KV åtgärdsstatus: "Avklarad" →`final`, "Pågående" →`preliminary`, "Planerad" →`registered`, annat eller saknat värde →`unknown` |
| `analysis.analysisComment` | 0..1 | `Observation.note[0].text` |   |
| `analysis.specimen` | 0..1 | `Observation.specimen`→`Specimen.type.text` | Provmaterial i klartext; en enkel Specimen per analys |
| `analysis.method` | 0..1 | `Observation.method.text` |   |
| `analysis.relationToAnalysis.analysisId` | 1..1 (per relation) | `Observation.hasMember`eller`Observation.derivedFrom` | Relationstypen anges inte, samma fråga som[LAB-002](mapping-issues.md) |
| `analysis.analysisOutcome.outcomeValue` | 1..1 | `Observation.valueQuantity.value`eller`Observation.valueString` | Text i 3.1. Numeriskt värde med`outcomeUnit`→`valueQuantity`, annars`valueString` |
| `analysis.analysisOutcome.outcomeUnit` | 0..1 | `Observation.valueQuantity.unit` | UCUM-kod sätts om enheten är en giltig UCUM-enhet |
| `analysis.analysisOutcome.observationTime` | 0..1 | `Observation.issued` | Tidpunkt då resultatet iakttogs |
| `analysis.analysisOutcome.pathologicalFlag` | 1..1 | `Observation.interpretation` | `true`→`v3-ObservationInterpretation#A`(avvikande);`false`→`N` |
| `analysis.analysisOutcome.outcomeDescription` | 0..1 | `Observation.note[1].text` |   |
| `analysis.analysisOutcome.referenceInterval` | 0..1 | `Observation.referenceRange.text` | Fritext i 3.1 |
| `analysis.analysisOutcome.referencePopulation` | 0..1 | `Observation.referenceRange.appliesTo.text` |   |
| `analysis.attested.attestedTime` | 1..1 (om attested) | Ej mappad | Vidimering; motsvarar`result.performerSignature.timestamp`som inte heller mappas |
| `analysis.attested.attesterHSAId` | 0..1 | `Observation.performer.identifier` | Logisk referens till PractitionerRole |
| `analysis.attested.attesterName` | 0..1 | `Observation.performer.display` |   |

##### result

`result.resultCode`, `errorCode`, `logId`, `subCode` och `message` är tekniska svarsfält och mappas inte, som i 4.2.

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

| | |
| :--- | :--- |
| LAB-001 | **Beslutat:**`cv`→`valueCodeableConcept`,`pq`→`valueQuantity`,`intervalPQ`→`valueRange`,`st`→`valueString`. Se[Mappningsissues](mapping-issues.md#stangda-fragor). |
| PDL-001 | **Beslutat:**`approvedForPatient = false`→`meta.security``v3-ActCode#NOPAT`. Se[Mappningsissues](mapping-issues.md#stangda-fragor). |
| GENERAL-001 | **Beslutat – tidszon.**RIVTA-tidsstämplar tolkas som lokal tid i`Europe/Stockholm`(sommartid beaktas).`dateTime`får explicit offset (`+01:00`/`+02:00`);`instant`anger samma tidpunkt, helst med samma offset-form. Se[Tidsstämplar och tidszon](mappings.md#tidszon). |

### Föreslagna nya issues

| | |
| :--- | :--- |
| LAB-002 | **`analysis.result.related 0..*` – relationstyp okänd.**Fältet anger relaterade analyser men TKB:n specificerar inte om relationen är "ingår i panel" (`Observation.hasMember`) eller "härledd från" (`Observation.derivedFrom`). Bryggan behöver en tolkningsregel. Behöver klarläggande från TKB-förvaltningen. |
| LAB-003 | **`analysis.specimen.activity` saknar standard Specimen-element.**`activity[i].code`,`activity[i].time`och`activity[i].method`(t.ex. fasta-aktivitet) har ingen direkt motpart i Specimen R4. Nuvarande förslag: lokal extension på`Specimen.collection`. Alternativ:`Specimen.collection.fastingStatusCodeableConcept`om aktiviteten avser fasta. Beslut behövs. |
| LAB-004 | **`header.signature.byRole` – ingen standardiserad plats på DiagnosticReport.**Signatärens yrkesroll vid signering kan ev. placeras i en PractitionerRole-resurs om signatären representeras som en separat Practitioner. I nuläget markerad som ej mappad. Behöver beslut om en lokal extension ska definieras. |

