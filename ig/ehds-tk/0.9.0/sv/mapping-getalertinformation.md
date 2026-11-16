# GetAlertInformation – Uppmärksamhetsinformation - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## GetAlertInformation – Uppmärksamhetsinformation

**Tjänstekontrakt:** `clinicalprocess:healthcond:description` GetAlertInformation v2.0 och v3.0
 **FHIR-profiler:** [SEEHDSFlag](StructureDefinition-SEEHDSFlag.md) | [SEEHDSAllergyIntolerance](StructureDefinition-SEEHDSAllergyIntolerance.md)
 **Logiska modeller:** [SEEHDSLMAlertInformation](StructureDefinition-SEEHDSLMAlertInformation.md) (v2.0) | [SEEHDSLMAlertInformationV30](StructureDefinition-SEEHDSLMAlertInformationV30.md) (v3.0, se [Övriga aktiva versioner](#version-3-0))
 **Krävs för NPÖ:** Ja (v2.0, 3.0) | **Krävs för 1177 Journal:** Ja (v2.0, 3.0)
 **EHDS-koppling:** Patient Summary – Allergier, överkänslighet och varningsinformation

-------

### Profilval – alltid Flag, ibland även AllergyIntolerance

`Flag` skapas **alltid** för varje `alertInformation`-post, oavsett typ av uppmärksamhetssignal (beslut GENERAL-004, ALERT-003).

Om body-typen är `hypersensitivity` skapas **dessutom** en `AllergyIntolerance`-resurs. I det fallet pekar `Flag` på `AllergyIntolerance` via `Flag.extension[flagDetailExt]` (standard-extensionen flag-detail, som ärvs från EU Core Flag; kallas `supportingInfo` i R5).

| | |
| :--- | :--- |
| body =`hypersensitivity` | `Flag`+`AllergyIntolerance`(länkad via`extension[flagDetailExt]`) |
| body =`seriousDisease` | `Flag`(enbart) |
| body =`treatment` | `Flag`(enbart) |
| body =`communicableDisease` | `Flag`(enbart) |
| body =`restrictionOfCare` | `Flag`(enbart) |
| body =`unstructuredAlertInformation` | `Flag`(enbart) |

Body-typen avgörs av vilket XOR-element som anges i `alertInformationBody`.

-------

### Mappning av Flag.category och Flag.code

`Flag.category` bär alltid body-typen (obligatorisk) och, vid överkänslighet, även preciseringstypen:

| | | |
| :--- | :--- | :--- |
| `Flag.category[alertType]` | `alertInformationBody.typeOfAlertInformation` | Alltid obligatorisk (1..1) |
| `Flag.category[hypersensitivityType]` | `alertInformationBody.hypersensitivity.typeOfHypersensitivity` | Enbart när body = hypersensitivity (0..1) |

`Flag.code` bär den kliniska koden specifik för varje body-typ:

| | | |
| :--- | :--- | :--- |
| `hypersensitivity` | `atcSubstance`(code.coding) eller`hypersensitivityAgentCode`(code.coding); fritext i code.text | XOR: pharmaceuticalHypersensitivity eller otherHypersensitivity |
| `seriousDisease` | `seriousDisease.disease`(ICD10/SNOMED) |   |
| `treatment` | `treatment.treatmentCode`(KVÅ) | Tomt CodeableConcept om enbart treatmentDescription finns |
| `communicableDisease` | `communicableDiseaseCode`(ICD10) |   |
| `unstructuredAlertInformation` | `unstructuredAlertInformationHeading`som code.text | Ingen strukturerad kod |
| `restrictionOfCare` | Tomt CodeableConcept | Ingen strukturerad kod |

-------

### Flag.status

Inget explicit statusfält finns i TKB:n. `Flag.status` sätts alltid till `active` (poster som returneras av tjänsten är per definition aktiva uppmärksamhetssignaler vid svarstillfället).

-------

### Mappningstabell – alertInformationHeader

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformationHeader.documentId` | 1..1 | `Flag.identifier.value` | Källsystemets dokumentidentifierare |
| `alertInformationHeader.sourceSystemHSAId` | 1..1 | `Flag.meta.source` | Format:`https://tjanstekatalogen.inera.se/Endpoint/{hsaId}` |
| `alertInformationHeader.patientId.id` | 1..1 | `Flag.subject.identifier.value` | Patientens identifierare (12 tecken), t.ex. personnummer eller samordningsnummer.`patientId`är av RIVTA-typen`PersonIdType {id, type}` |
| `alertInformationHeader.patientId.type` | 1..1 | `Flag.subject.identifier.system` | OID för typ av identifierare (t.ex.`1.2.752.129.2.1.3.1`för personnummer); OID→URI, se tabell nedan |
| `alertInformationHeader.accountableHealthcareProfessional.authorTime` | 1..1 | `Provenance.recorded` | YYYYMMDDHHMMSS → ISO 8601 (Europe/Stockholm); se[GENERAL-001](#öppna-frågor) |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId` | 0..1 | `Flag.author`(Reference(PractitionerRole)) | Logisk referens via HSA-id |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalName` | 0..1 | `PractitionerRole.practitioner.display` | Visningsnamn |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode` | 0..1 | `PractitionerRole.code` | Yrkesrollskod |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId` | 1..1 | `PractitionerRole.organization.identifier.value` | Organisationsenhetens HSA-id |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName` | 1..1 | `PractitionerRole.organization.display` | Organisationsenhetens namn |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom` | 0..1 | Ej mappad | Kontaktinfo på enhetsnivå – hanteras ej i FHIR-resursen. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail` | 0..1 | Ej mappad | Kontaktinfo på enhetsnivå – hanteras ej i FHIR-resursen. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress` | 0..1 | Ej mappad | Kontaktinfo på enhetsnivå – hanteras ej i FHIR-resursen |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation` | 0..1 | Ej mappad | Kontaktinfo på enhetsnivå – hanteras ej i FHIR-resursen |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | 0..1 | `Provenance.agent[author].who.identifier` | Inre Sparr – vårdenhet |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | 0..1 | `Provenance.agent[custodian].who.identifier` | Yttre Sparr – vårdgivare |
| `alertInformationHeader.legalAuthenticator.signatureTime` | 1..1 (om legalAuth) | `Flag.extension[alertAssertedDate]` | Signeringstidpunkt; YYYYMMDDHHMMSS → ISO 8601 |
| `alertInformationHeader.legalAuthenticator.legalAuthenticatorHSAId` | 0..1 | `Flag.extension[alertAsserter].identifier` | Ingår även i`AllergyIntolerance.asserter`om allergi |
| `alertInformationHeader.legalAuthenticator.legalAuthenticatorName` | 0..1 | Ej mappad | Namn i klartext – HSA-id räcker för logisk referens |
| `alertInformationHeader.approvedForPatient` | 1..1 | `Flag.meta.security` | PDL-kontroll – se[PDL-001](#öppna-frågor) |
| `alertInformationHeader.careContactId` | 0..1 | `Flag.encounter.identifier.value` | Logisk referens till vårdkontakt |

-------

### Mappningstabell – alertInformationBody (gemensamma fält)

Följande fält är gemensamma för alla body-typer (förekommer oberoende av XOR-val):

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformationBody.typeOfAlertInformation` | 1..1 | `Flag.category[alertType]` | Kodsystem se[ALERT-002](#öppna-frågor) |
| `alertInformationBody.validityTimePeriod.start` | 1..1 | `Flag.period.start` | YYYYMMDDHHMMSS → ISO 8601 |
| `alertInformationBody.validityTimePeriod.end` | 0..1 | `Flag.period.end` | Planerat giltighetsslutt; se nedan om obsoleteTime |
| `alertInformationBody.obsoleteTime` | 0..1 | `Flag.period.end` | Faktisk inaktivering; används om ≤ validityTimePeriod.end eller om period.end ej är satt |
| `alertInformationBody.obsoleteComment` | 0..1 | `Flag.extension[alertInformationComment]` | Konkateneras: "Inaktiveringskommentar: {obsoleteComment}" |
| `alertInformationBody.ascertainedDate` | 0..1 | `Flag.extension[alertAscertainedDate]` | Datum för konstaterande |
| `alertInformationBody.verifiedTime` | 0..1 | `Flag.extension[alertVerifiedTime]` | Tidpunkt för verifiering i källsystem |
| `alertInformationBody.alertInformationComment` | 0..1 | `Flag.extension[alertInformationComment]` | Klinisk kommentar; vid allergi även`AllergyIntolerance.note.text` |

> **Notering om period.end och obsoleteTime:** Båda mappar till `Flag.period.end`. Om båda är satta används det minsta värdet (= faktisk giltighetstid). `obsoleteComment` konkateneras i `alertInformationComment`.

> **OBS:** `alertInformationHeader.documentTitle`, `documentTime`, `nullified` och `nullifiedReason` är N/A (0..0) för detta tjänstekontrakt och mappas inte.

-------

### Body XOR-sektion 1: hypersensitivity (överkänslighet)

Gäller när `alertInformationBody.hypersensitivity` är angivet. Skapar Flag **och** AllergyIntolerance.

#### Flag-fält (hypersensitivity)

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformationBody.hypersensitivity.typeOfHypersensitivity` | 0..1 | `Flag.category[hypersensitivityType]` | Precisering av överkänslighetstyp (ICD10/SNOMED) |
| `alertInformationBody.hypersensitivity.degreeOfSeverity` | 0..1 | `Flag.extension[degreeOfSeverity]` | KV Allvarlighetsgrad (1.2.752.129.2.2.3.3) |
| `alertInformationBody.hypersensitivity.degreeOfCertainty` | 0..1 | `Flag.extension[degreeOfCertainty]` | KV Visshetsgrad (1.2.752.129.2.2.3.11) |
| `alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.atcSubstance` | 0..1 | `Flag.code.coding` | ATC-kod (1.2.752.129.2.2.3.1.1). XOR med otherHypersensitivity |
| `alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.nonATCSubstance` | 0..1 | `Flag.code.text` | Substansnamn utan ATC-kod |
| `alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.nonATCSubstanceComment` | 0..1 | `Flag.extension[pharmaceuticalHypersensitivity].nonATCSubstanceComment` | Förklaring till avsaknad ATC-kod |
| `alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.pharmaceuticalProductId` | 0..* | `Flag.extension[pharmaceuticalHypersensitivity].pharmaceuticalProductId` | NPL-id (1.2.752.129.2.1.5.1); lista |
| `alertInformationBody.hypersensitivity.otherHypersensitivity.hypersensitivityAgentCode` | 0..1 | `Flag.code.coding` | Agenskod (LMK-kod, CAS-kod m.fl.). XOR med pharmaceuticalHypersensitivity |
| `alertInformationBody.hypersensitivity.otherHypersensitivity.hypersensitivityAgent` | 0..1 | `Flag.code.text` | Agens i fritext |

#### AllergyIntolerance-fält (hypersensitivity)

AllergyIntolerance skapas enbart när body = hypersensitivity. Fält från header och hypersensitivity-blocket mappas:

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformationHeader.documentId` | 1..1 | `AllergyIntolerance.identifier.value` | Samma dokumentid som Flag |
| `alertInformationHeader.patientId.id` | 1..1 | `AllergyIntolerance.patient.identifier.value` | Patientens identifierare (12 tecken), t.ex. personnummer eller samordningsnummer.`patientId`är av RIVTA-typen`PersonIdType {id, type}` |
| `alertInformationHeader.patientId.type` | 1..1 | `AllergyIntolerance.patient.identifier.system` | OID för typ av identifierare (t.ex.`1.2.752.129.2.1.3.1`för personnummer); OID→URI, se tabell nedan |
| `alertInformationHeader.sourceSystemHSAId` | 1..1 | `AllergyIntolerance.meta.source` | Format:`https://tjanstekatalogen.inera.se/Endpoint/{hsaId}` |
| `alertInformationHeader.accountableHealthcareProfessional.authorTime` | 1..1 | `AllergyIntolerance.recordedDate` | YYYYMMDDHHMMSS → ISO 8601 |
| `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId` | 0..1 | `AllergyIntolerance.recorder`(Reference(PractitionerRole)) | Logisk referens via HSA-id |
| `alertInformationHeader.legalAuthenticator.legalAuthenticatorHSAId` | 0..1 | `AllergyIntolerance.asserter`(Reference(PractitionerRole)) | Logisk referens via HSA-id |
| `alertInformationBody.ascertainedDate` | 0..1 | `AllergyIntolerance.onsetDateTime` | Datum för konstaterande av överkänslighet |
| `alertInformationBody.alertInformationComment` | 0..1 | `AllergyIntolerance.note.text` | Klinisk kommentar |
| `alertInformationBody.hypersensitivity.typeOfHypersensitivity` | 0..1 | `AllergyIntolerance.category` | Härleds från typeOfHypersensitivity; se[ALERT-002](#öppna-frågor) |
| `alertInformationBody.hypersensitivity.degreeOfCertainty` | 0..1 | `AllergyIntolerance.verificationStatus` | Kräver ConceptMap KV Visshetsgrad → FHIR verificationStatus; se[ALERT-004](#öppna-frågor) |
| `alertInformationBody.hypersensitivity.degreeOfSeverity` | 0..1 | `AllergyIntolerance.reaction.severity` | Kräver ConceptMap KV Allvarlighetsgrad → FHIR severity; se[ALERT-004](#öppna-frågor) |
| `alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.atcSubstance` | 0..1 | `AllergyIntolerance.code.coding` | ATC-kod som primär substanskod |
| `alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.nonATCSubstance` | 0..1 | `AllergyIntolerance.code.text` | Fritext substansnamn (fallback om atcSubstance saknas) |
| `alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.pharmaceuticalProductId` | 0..* | `AllergyIntolerance.reaction.substance.coding` | NPL-id (1.2.752.129.2.1.5.1) |
| `alertInformationBody.hypersensitivity.otherHypersensitivity.hypersensitivityAgentCode` | 0..1 | `AllergyIntolerance.code.coding` | Agenskod (LMK, CAS m.fl.) |
| `alertInformationBody.hypersensitivity.otherHypersensitivity.hypersensitivityAgent` | 0..1 | `AllergyIntolerance.code.text` | Agens i fritext (fallback om agenskod saknas) |
| (härledd – alltid active) | — | `AllergyIntolerance.clinicalStatus` | `active`; inget statusfält i TKBn |
| (härledd – alltid allergy) | — | `AllergyIntolerance.type` | `allergy`; härledd av att body = hypersensitivity |

-------

### Body XOR-sektion 2: seriousDisease (allvarlig sjukdom)

Gäller när `alertInformationBody.seriousDisease` är angivet. Skapar enbart Flag.

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformationBody.seriousDisease.disease` | 1..1 | `Flag.code` | Sjukdomskod (ICD10/SNOMED); se[ALERT-002](#öppna-frågor) |

-------

### Body XOR-sektion 3: treatment (behandling)

Gäller när `alertInformationBody.treatment` är angivet. Skapar enbart Flag.

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformationBody.treatment.treatmentCode` | 0..1 | `Flag.code` | KVÅ-kod (1.2.752.116.1.3.2.1.4); tomt CodeableConcept om enbart treatmentDescription |
| `alertInformationBody.treatment.treatmentDescription` | 1..1 | `Flag.extension[treatmentDescription]` | Fritextbeskrivning av behandlingen |
| `alertInformationBody.treatment.pharmaceuticalTreatment` | 0..* | `Flag.extension[pharmaceuticalTreatment]` | ATC-kod (1.2.752.129.2.2.3.1.1); lista – ryms ej i Flag.code (1..1) |

-------

### Body XOR-sektion 4: communicableDisease (smittsam sjukdom)

Gäller när `alertInformationBody.communicableDisease` är angivet. Skapar enbart Flag.

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformationBody.communicableDisease.communicableDiseaseCode` | 1..1 | `Flag.code` | ICD10-kod; se[ALERT-002](#öppna-frågor) |
| `alertInformationBody.communicableDisease.routeOfTransmission` | 0..1 | `Flag.extension[routeOfTransmission]` | KV Smittväg |

-------

### Body XOR-sektion 5: restrictionOfCare (vårdbegränsning)

Gäller när `alertInformationBody.restrictionOfCare` är angivet. Skapar enbart Flag.

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformationBody.restrictionOfCare.restrictionOfCareComment` | 1..1 | `Flag.extension[restrictionOfCareComment]` | Fritext om vårdbegränsning; ingen strukturerad kod finns |

> `Flag.code` sätts till ett tomt `CodeableConcept` (obligatorisk i FHIR) vid restrictionOfCare.

-------

### Body XOR-sektion 6: unstructuredAlertInformation (ostrukturerad varning)

Gäller när `alertInformationBody.unstructuredAlertInformation` är angivet. Skapar enbart Flag.

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformationBody.unstructuredAlertInformation.unstructuredAlertInformationHeading` | 1..1 | `Flag.code.text` | Rubrik för varningen;`category[alertType]`= unstructuredAlertInformation |
| `alertInformationBody.unstructuredAlertInformation.unstructuredAlertInformationContent` | 1..1 | `Flag.extension[alertInformationComment]` | Innehåll/beskrivning konkateneras i kommentarsfältet |

-------

### Mappningstabell – relatedAlertInformation

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformationBody.relatedAlertInformation` | 0..* | `Flag.extension[relatedAlertInformation]` | En extension-instans per relaterad signal |
| `alertInformationBody.relatedAlertInformation.typeOfAlertInformationRelationship` | 1..1 | `Flag.extension[relatedAlertInformation].typeOfRelationship` | KV Samband (1.2.752.129.2.2.2.4) |
| `alertInformationBody.relatedAlertInformation.relationComment` | 0..1 | `Flag.extension[relatedAlertInformation].relationComment` | Kommentar till sambandet |
| `alertInformationBody.relatedAlertInformation.documentId` | 1..* | `Flag.extension[relatedAlertInformation].documentId` | Relaterat dokumentid; en per post |

-------

### Mappningstabell – result

| | | | |
| :--- | :--- | :--- | :--- |
| `result.resultCode` | 1..1 | Ej mappad | Teknisk responskod – hanteras av transportlagret |
| `result.errorCode` | 0..1 | Ej mappad | Teknisk felkod – hanteras av transportlagret |
| `result.subCode` | 0..1 | Ej mappad | Teknisk subkod – hanteras av transportlagret |
| `result.logId` | 1..1 | Ej mappad | Teknisk spårnings-UUID – hanteras av transportlagret |
| `result.message` | 0..1 | Ej mappad | Teknisk felbeskrivning – hanteras av transportlagret |

-------

### PDL och Sparr

PDL-styrning i GetAlertInformation utgår från `accountableHealthcareProfessional`-blockets HSA-id:n i headern:

| | | |
| :--- | :--- | :--- |
| Yttre Sparr (vårdgivare) | `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | `Provenance.agent[custodian].who.identifier` |
| Inre Sparr (vårdenhet) | `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | `Provenance.agent[author].who.identifier` |
| Patientgodkännande | `alertInformationHeader.approvedForPatient`(boolean) | `Flag.meta.security`; se[PDL-001](#öppna-frågor) |

-------

### Provenance

| | | |
| :--- | :--- | :--- |
| `agent[custodian]` | Juridiskt ansvarig vårdgivare | `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` |
| `agent[author]` | Informationsägande vårdenhet | `alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` |

`Provenance.target` refererar Flag (och eventuell AllergyIntolerance) via `urn:uuid:{resurs.id}`.
 `Provenance.recorded` = `alertInformationHeader.accountableHealthcareProfessional.authorTime` (ISO 8601).

-------

### Övriga aktiva versioner – GetAlertInformation 3.0

Mappningstabellerna ovan utgår från GetAlertInformation 2.0. [Startsidan](index.md) anger även 3.0 för både NPÖ och 1177 Journal. Version 3.0 finns ännu inte som släppt domänversion i `riv.clinicalprocess.healthcond.description`; den finns på grenen `feature-GAI_3.0` (taggarna `GAI3.0_BETA1`–`GAI3.0_BETA3`). Den logiska modellen [SEEHDSLMAlertInformationV30](StructureDefinition-SEEHDSLMAlertInformationV30.md) är genererad från grenens senaste `GetAlertInformationResponder_3.0.xsd` och TKB:n för GetAlertInformation på samma gren. Se VER-001 i [Mappningsissues](mapping-issues.md).

Version 3.0 är en ny meddelandemodell. Den har JoL-header (som GetCareDocumentation 3.0 och GetLaboratoryOrderOutcome 4.2) och en body som följer Socialstyrelsens informationsspecifikation för uppmärksamhetsinformation, med sju typer i stället för sex. Samma profiler används: en [SEEHDSFlag](StructureDefinition-SEEHDSFlag.md) per post och dessutom en [SEEHDSAllergyIntolerance](StructureDefinition-SEEHDSAllergyIntolerance.md) vid överkänslighet.

| | | | |
| :--- | :--- | :--- | :--- |
| `alertInformation.header.accessControlHeader` | 1..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.header.sourceSystemId` | 1..1 IIType | – | Finns bara i 3.0 |
| `alertInformation.header.record` | 1..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.header.author` | 0..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.header.signature` | 0..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.body.specificationVersion` | 1..1 String | – | Finns bara i 3.0 |
| `alertInformation.body.hypersensitivity.value` | 1..1 CVType | – | Finns bara i 3.0 |
| `alertInformation.body.hypersensitivity.status` | 1..1 CVType | – | Finns bara i 3.0 |
| `alertInformation.body.hypersensitivity.time` | 1..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.body.hypersensitivity.negation` | 1..1 Boolean | – | Finns bara i 3.0 |
| `alertInformation.body.hypersensitivity.verificationMethod` | 0..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.body.hypersensitivity.resource` | 1..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.body.activity` | 0..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.body.condition` | 0..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.body.decisionNonstandardCareProcedure` | 0..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.body.informationNonstandardCareProcedure` | 0..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.body.contagion` | 0..1 Backbone | – | Finns bara i 3.0 |
| `alertInformation.body.unstructuredAlertInformation.title` | 0..1 String | – | Finns bara i 3.0 |
| `alertInformation.body.unstructuredAlertInformation.description` | 0..1 String | – | Finns bara i 3.0 |
| `result.resultText` | 1..1 String | – | Finns bara i 3.0 |
| `alertInformation.alertInformationHeader.documentId` | – | 1..1 String | Finns bara i 2.0 |
| `alertInformation.alertInformationHeader.sourceSystemHSAId` | – | 1..1 String | Finns bara i 2.0 |
| `alertInformation.alertInformationHeader.patientId` | – | 1..1 PersonIdType | Finns bara i 2.0 |
| `alertInformation.alertInformationHeader.accountableHealthcareProfessional` | – | 1..1 Backbone | Finns bara i 2.0 |
| `alertInformation.alertInformationHeader.legalAuthenticator` | – | 0..1 Backbone | Finns bara i 2.0 |
| `alertInformation.alertInformationHeader.approvedForPatient` | – | 1..1 Boolean | Finns bara i 2.0 |
| `alertInformation.alertInformationHeader.careContactId` | – | 0..1 String | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.typeOfAlertInformation` | – | 1..1 CVType | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.ascertainedDate` | – | 0..1 Date | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.verifiedTime` | – | 0..1 TimeStamp | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.validityTimePeriod` | – | 1..1 TimePeriodType | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.alertInformationComment` | – | 0..1 String | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.obsoleteTime` | – | 0..1 TimeStamp | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.obsoleteComment` | – | 0..1 String | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.hypersensitivity.typeOfHypersensitivity` | – | 0..1 CVType | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity` | – | 0..1 Backbone | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.hypersensitivity.otherHypersensitivity` | – | 0..1 Backbone | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.seriousDisease` | – | 0..1 Backbone | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.treatment` | – | 0..1 Backbone | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.communicableDisease` | – | 0..1 Backbone | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.restrictionOfCare` | – | 0..1 Backbone | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.unstructuredAlertInformation.unstructuredAlertInformationHeading` | – | 1..1 String | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.unstructuredAlertInformation.unstructuredAlertInformationContent` | – | 1..1 String | Finns bara i 2.0 |
| `alertInformation.alertInformationBody.relatedAlertInformation` | – | 0..* Backbone | Finns bara i 2.0 |
| `result.errorCode` | – | 0..1 String | Finns bara i 2.0 |
| `result.logId` | – | 1..1 String | Finns bara i 2.0 |
| `result.subCode` | – | 0..1 String | Finns bara i 2.0 |
| `result.message` | – | 0..1 String | Finns bara i 2.0 |
| `alertInformation.header` | 1..1 Backbone | `alertInformation.alertInformationHeader` | Bytt namn |
| `alertInformation.body` | 1..1 Backbone | `alertInformation.alertInformationBody` | Bytt namn |
| `alertInformation.body.hypersensitivity.degreeOfSeverity` | 1..1 CVType | 0..1 CVType | Ändrad kardinalitet |

#### Typer i 3.0 och motsvarighet i 2.0

`Flag.category[alertType]` härleds i 3.0 från vilket body-element som finns, eftersom `typeOfAlertInformation` inte finns.

| | | | |
| :--- | :--- | :--- | :--- |
| `hypersensitivity` | `hypersensitivity` | Flag + AllergyIntolerance | `hypersensitivity.resource.type`(substans), annars`hypersensitivity.value` |
| `condition` | `seriousDisease` | Flag | `condition.value` |
| `activity` | `treatment` | Flag | `activity.code` |
| `contagion` | `communicableDisease` | Flag | `contagion.value` |
| `decisionNonstandardCareProcedure` | `restrictionOfCare` | Flag | `decisionNonstandardCareProcedure.code` |
| `informationNonstandardCareProcedure` | – (ny) | Flag | `informationNonstandardCareProcedure.value` |
| `unstructuredAlertInformation` | `unstructuredAlertInformation` | Flag | `unstructuredAlertInformation.title`som`code.text` |

#### Header (JoL-header) → Flag

| | | | |
| :--- | :--- | :--- | :--- |
| `header.accessControlHeader.patientId` | 1..1 | `Flag.subject.identifier` | IIType:`root`→`system`(OID→URI),`extension`→`value` |
| `header.accessControlHeader.accountableHealthcareProvider` | 0..1 | `Provenance.agent[custodian].who.identifier` | Yttre Sparr |
| `header.accessControlHeader.accountableCareUnit` | 0..1 | `Provenance.agent[author].who.identifier` | Inre Sparr |
| `header.accessControlHeader.careProcessId` | 0..1 | Ej mappad | Som i GetCareDocumentation 3.0 |
| `header.accessControlHeader.blockComparisonTime` | 1..1 | Ej mappad | Används för spärrkontroll |
| `header.accessControlHeader.approvedForPatient` | 1..1 | `Flag.meta.security` | PDL-kontroll – se PDL-001 |
| `header.sourceSystemId` | 1..1 | `Flag.meta.source` | IIType;`extension`= källsystemets HSA-id (GENERAL-005) |
| `header.record.rivId` | 1..1 | `Flag.identifier` | Motsvarar`documentId`i 2.0 |
| `header.record.timestamp` | 1..1 | `Provenance.recorded`om`author`saknas |   |
| `header.author.rivId` | 0..1 | `Flag.author`(Reference(PractitionerRole)) | Logisk referens via HSA-id |
| `header.author.name` | 0..1 | `PractitionerRole.practitioner.display` |   |
| `header.author.timestamp` | 1..1 (om author) | `Provenance.recorded` | Motsvarar`authorTime`i 2.0 |
| `header.author.byRole` | 0..1 | `PractitionerRole.code` |   |
| `header.author.orgUnit.orgUnitHSAId`/`orgUnitName` | 0..1 | `PractitionerRole.organization` | Övriga kontaktuppgifter mappas inte, se[GENERAL-008](mappings.md#organisation) |
| `header.signature.timestamp` | 1..1 (om signature) | `Flag.extension[alertAssertedDate]` | Motsvarar`legalAuthenticator.signatureTime` |
| `header.signature.rivId` | 0..1 | `Flag.extension[alertAsserter].identifier` | Även`AllergyIntolerance.asserter`vid överkänslighet |
| `header.signature.name`,`header.signature.byRole` | 0..1 | Ej mappad |   |

#### Body → Flag och AllergyIntolerance

| | | | |
| :--- | :--- | :--- | :--- |
| `body.specificationVersion` | 1..1 | Ej mappad | Version av Socialstyrelsens informationsspecifikation, t.ex. "5.1" |
| `*.time.timestamp`/`*.time.timePeriod` | 1..1 | `Flag.period` | Tiden då det observerade förekom eller förväntas förekomma; vid överkänslighet även`AllergyIntolerance.onset[x]` |
| `*.status` | 1..1 | Ej mappad på Flag; vid överkänslighet`AllergyIntolerance.verificationStatus` | Observationens status enligt informationsspecifikationen (till exempel observerat eller potentiellt). Kräver ConceptMap, se VER-001 |
| `*.negation` | 1..1 | `Flag.status`och`AllergyIntolerance.verificationStatus` | `true`betyder att förekomsten är utesluten:`Flag.status = inactive`och`verificationStatus = refuted` |
| `hypersensitivity.value` | 1..1 | `Flag.category[hypersensitivityType]`och`AllergyIntolerance.category` | Motsvarar`typeOfHypersensitivity` |
| `hypersensitivity.resource.type` | 0..1 | `Flag.code.coding`och`AllergyIntolerance.code.coding` | Substans (t.ex. ATC eller NSL-id för aktiv substans) |
| `hypersensitivity.resource.productId` | 0..1 | `AllergyIntolerance.reaction.substance.coding` | Produkt, t.ex. NPL-id; motsvarar`pharmaceuticalProductId` |
| `hypersensitivity.resource.rivId`,`resource.resourceProperty` | – | Ej mappad |   |
| `hypersensitivity.degreeOfSeverity` | 1..1 | `Flag.extension[degreeOfSeverity]`och`AllergyIntolerance.reaction.severity` | Obligatorisk i 3.0 |
| `hypersensitivity.degreeOfCertainty` | 0..1 | `Flag.extension[degreeOfCertainty]`och`AllergyIntolerance.verificationStatus` | Se ALERT-004 |
| `hypersensitivity.verificationMethod` | 0..1 | Ej mappad | Verifieringsmetod (t.ex. pricktest); ingen motsvarighet i AllergyIntolerance R4 |
| `condition.value` | 1..1 | `Flag.code` | Motsvarar`seriousDisease.disease` |
| `condition.bodyStructure`,`condition.resource` | – | Ej mappad | Lokalisation och resurs (t.ex. implantat) |
| `activity.code` | 1..1 | `Flag.code` | Motsvarar`treatment.treatmentCode` |
| `activity.resource.type` | 0..* | `Flag.extension[pharmaceuticalTreatment]` | Motsvarar`pharmaceuticalTreatment` |
| `activity.bodyStructure` | 0..1 | Ej mappad |   |
| `contagion.value` | 1..1 | `Flag.code` | Motsvarar`communicableDiseaseCode`; smittväg finns inte i 3.0 |
| `decisionNonstandardCareProcedure.code` | 1..1 | `Flag.code` | Beslut om avvikelse från behandlingsrutin |
| `decisionNonstandardCareProcedure.description` | 0..1 | `Flag.extension[restrictionOfCareComment]` | Motsvarar`restrictionOfCareComment` |
| `decisionNonstandardCareProcedure.approval` | 1..1 | `Flag.status` | `false`(beslutet bifalls inte) ger`inactive` |
| `decisionNonstandardCareProcedure.timestamp` | 1..1 | `Flag.period.start` | Tidpunkt för beslutet |
| `informationNonstandardCareProcedure.value` | 1..1 | `Flag.code` | Information som kan leda till särskild vårdrutin |
| `unstructuredAlertInformation.title` | 0..1 | `Flag.code.text` | Motsvarar`unstructuredAlertInformationHeading` |
| `unstructuredAlertInformation.description` | 0..1 | `Flag.extension[alertInformationComment]` | Motsvarar`unstructuredAlertInformationContent` |
| `result.resultCode`,`result.resultText` | 1..1 | Ej mappad | Tekniska svarsfält |

Element i 2.0 som saknar motsvarighet i 3.0: `validityTimePeriod`, `obsoleteTime`, `obsoleteComment`, `ascertainedDate`, `verifiedTime`, `alertInformationComment` och `relatedAlertInformation`.

-------

### OID-till-URI-tabell

| | |
| :--- | :--- |
| `1.2.752.129.2.1.3.1` | `http://electronichealth.se/identifier/personnummer` |
| `1.2.752.129.2.1.3.3` | `http://electronichealth.se/identifier/samordningsnummer` |
| `1.2.752.129.2.1.4.1` | `urn:oid:1.2.752.29.4.19` |
| `1.2.752.129.2.2.3.1.1` | `urn:oid:1.2.752.129.2.2.3.1.1`(ATC) |
| `1.2.752.129.2.1.5.1` | `urn:oid:1.2.752.129.2.1.5.1`(NPL-id) |

OID:er utan känd URI-mappning bevaras som `urn:oid:{oid}`.

-------

### Öppna frågor

| | |
| :--- | :--- |
| ALERT-002 | **Okänt kodsystem för `typeOfAlertInformation`.**OID och URI för kodsystemet är inte dokumenterat i TKB:n. Avgör vilka koder som styr om AllergyIntolerance skapas och hur de mappas till`AllergyIntolerance.category`. |
| ALERT-004 | **ConceptMap saknas: degreeOfCertainty/degreeOfSeverity → FHIR.**`hypersensitivity.degreeOfCertainty`(KV Visshetsgrad 1.2.752.129.2.2.3.11) behöver ConceptMap till`AllergyIntolerance.verificationStatus`.`hypersensitivity.degreeOfSeverity`(KV Allvarlighetsgrad 1.2.752.129.2.2.3.3) behöver ConceptMap till`AllergyIntolerance.reaction.severity`. Sätt temporärt`confirmed`tills ConceptMap finns. |
| PDL-001 | **Beslutat:**`approvedForPatient = false`→`meta.security``v3-ActCode#NOPAT`. Se[Mappningsissues](mapping-issues.md#stangda-fragor). |
| GENERAL-001 | **Beslutat – tidszon.**RIVTA-tidsstämplar tolkas som lokal tid i`Europe/Stockholm`(sommartid beaktas).`dateTime`får explicit offset (`+01:00`/`+02:00`);`instant`anger samma tidpunkt, helst med samma offset-form. Se[Tidsstämplar och tidszon](mappings.md#tidszon). |

