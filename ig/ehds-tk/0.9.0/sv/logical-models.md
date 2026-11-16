# Logical Models - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logical Models

Denna sida dokumenterar de logiska informationsmodeller som utgör grunden för profilerna i denna IG. De logiska modellerna är en exakt avbildning av svarsmeddelandena i Ineras RIVTA-tjänstekontrakt: samma elementnamn, nästling, ordning, XML-namnrymder och datatyper som i XSD:erna, med kardinaliteter verifierade mot respektive TKB. De kan därför användas både som dokumentation och som källstruktur när en FML-motor (StructureMap) läser RIV-TA-XML direkt.

-------

### Syfte

De logiska modellerna nedan representerar de informationskrav som definieras av respektive tjänstekontrakt i Ineras tjänstekatalog. De tjänar som auktoritativ källa för vilka data som ska utväxlas och utgör grunden för FHIR-profilerna i IG:n.

-------

### Modeller

| | | |
| :--- | :--- | :--- |
| [SEEHDSLMDiagnosis](StructureDefinition-SEEHDSLMDiagnosis.md) | GetDiagnosis | Patientöversikt |
| [SEEHDSLMAlertInformation](StructureDefinition-SEEHDSLMAlertInformation.md) | GetAlertInformation | Patientöversikt |
| [SEEHDSLMMedicationHistory](StructureDefinition-SEEHDSLMMedicationHistory.md) | GetMedicationHistory | Patientöversikt |
| [SEEHDSLMVaccinationHistory](StructureDefinition-SEEHDSLMVaccinationHistory.md) | GetVaccinationHistory | Patientöversikt |
| [SEEHDSLMFunctionalStatus](StructureDefinition-SEEHDSLMFunctionalStatus.md) | GetFunctionalStatus | Patientöversikt |
| [SEEHDSLMMaternityMedicalHistory](StructureDefinition-SEEHDSLMMaternityMedicalHistory.md) | GetMaternityMedicalHistory | Patientöversikt |
| [SEEHDSLMCarePlans](StructureDefinition-SEEHDSLMCarePlans.md) | GetCarePlans | Patientöversikt |
| [SEEHDSLMCareContacts](StructureDefinition-SEEHDSLMCareContacts.md) | GetCareContacts | Patientöversikt |
| [SEEHDSLMCareDocumentation](StructureDefinition-SEEHDSLMCareDocumentation.md) | GetCareDocumentation | Patientöversikt |
| [SEEHDSLMLaboratoryOrderOutcome](StructureDefinition-SEEHDSLMLaboratoryOrderOutcome.md) | GetLaboratoryOrderOutcome | Laboratorie och diagnostik |
| [SEEHDSLMImagingOutcome](StructureDefinition-SEEHDSLMImagingOutcome.md) | GetImagingOutcome | Bilddiagnostik |
| [SEEHDSLMReferralOutcome](StructureDefinition-SEEHDSLMReferralOutcome.md) | GetReferralOutcome | Remiss och process |
| [SEEHDSLMRequestActivities](StructureDefinition-SEEHDSLMRequestActivities.md) | GetRequestActivities | Remiss och process |
| [SEEHDSLMObservations](StructureDefinition-SEEHDSLMObservations.md) | GetObservations | Tillväxtkurva barn |
| [SEEHDSLMAccessLog](StructureDefinition-SEEHDSLMAccessLog.md) | GetAccessLogForPatient | Logg |

#### Övriga aktiva versioner

Modellerna ovan avser den version som mappningstabellerna utgår från. Övriga aktiva versioner har egna modeller med versionen som suffix, se [Tjänstekontraktsversioner](contract-versions.md).

| | |
| :--- | :--- |
| [SEEHDSLMAlertInformationV30](StructureDefinition-SEEHDSLMAlertInformationV30.md) | GetAlertInformation 3.0 (beta) |
| [SEEHDSLMVaccinationHistoryV10](StructureDefinition-SEEHDSLMVaccinationHistoryV10.md) | GetVaccinationHistory 1.0 |
| [SEEHDSLMCareContactsV20](StructureDefinition-SEEHDSLMCareContactsV20.md) | GetCareContacts 2.0 |
| [SEEHDSLMCareDocumentationV21](StructureDefinition-SEEHDSLMCareDocumentationV21.md) | GetCareDocumentation 2.1 |
| [SEEHDSLMLaboratoryOrderOutcomeV41](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV41.md) | GetLaboratoryOrderOutcome 4.1 |
| [SEEHDSLMLaboratoryOrderOutcomeV31](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV31.md) | GetLaboratoryOrderOutcome 3.1 |
| [SEEHDSLMReferralOutcomeV31](StructureDefinition-SEEHDSLMReferralOutcomeV31.md) | GetReferralOutcome 3.1 |
| [SEEHDSLMRequestActivitiesV10](StructureDefinition-SEEHDSLMRequestActivitiesV10.md) | GetRequestActivities 1.0 |
| [SEEHDSLMObservationsV12](StructureDefinition-SEEHDSLMObservationsV12.md) | GetObservations 1.2 |
| [SEEHDSLMAccessLogV11](StructureDefinition-SEEHDSLMAccessLogV11.md) | GetAccessLogsForPatient 1.1 (ehr:log:querying) |

-------

### Hur modellerna är byggda

Modellerna är genererade från XSD:erna i respektive RIV-TA-domän (bitbucket.org/rivta-domains) och slås ihop med beskrivningar från TKB:n och den tidigare handskrivna dokumentationen.

| | |
| :--- | :--- |
| Rotelementet, t.ex.`GetDiagnosisResponse` | Modellens rot. Tillägget`http://hl7.org/fhir/tools/StructureDefinition/xml-name`anger XML-namnet och`elementdefinition-namespace`responder-namnrymden |
| Elementets namnrymd | `elementdefinition-namespace`på varje element vars namnrymd skiljer sig från rotens. Rotens direkta barn ligger i responder-namnrymden; allt därunder i domänens kärnnamnrymd (eller en`_ext`-namnrymd) |
| Komplex typ, t.ex.`PatientSummaryHeaderType` | `BackboneElement`med samma barn i samma ordning |
| RIV-TA-datatyp:`IIType`,`CVType`,`PersonIdType`,`PQType`,`PQIntervalType`,`TimePeriodType`,`PartialDateType`,`PartialTimeStampType` | Egen logisk modell per namnrymd, t.ex.`SEEHDSRivCVTypeHealthcondDescription2`, eftersom datatypens underelement ärver datatypens namnrymd och fälten skiljer sig mellan domänerna |
| Enkelt innehåll (`xs:string`,`TimeStampType`,`xs:boolean`…) | En omslagstyp (`SEEHDSRivString`,`SEEHDSRivTimeStamp`,`SEEHDSRivBoolean`,`SEEHDSRivInteger`,`SEEHDSRivDecimal`,`SEEHDSRivDate`,`SEEHDSRivDateTime`,`SEEHDSRivBase64Binary`,`SEEHDSRivAnyURI`) vars`value`har`representation = xmlText`, eftersom RIV-TA lägger värdet som textinnehåll och inte i ett`value`-attribut |
| Kodlista (`xs:enumeration`) | Omslagstyp med tillåtna värden i definitionen; där IG:n har en värdemängd binds den på`.value` |
| Elementnamn med understreck eller inledande versal, t.ex.`ivl_pq`och`ResultCode` | FHIR-namn i camelCase (`ivlPq`,`resultCode`) och XML-namnet i`xml-name` |
| Elementnamn som krockar med FHIR:s ärvda element:`id`,`extension`,`modifierExtension` | FHIR-namnen`rivId`,`rivExtension`och`rivModifierExtension`, med XML-namnet i`xml-name`. Mappningssidorna använder XSD-namnen, t.ex.`header.record.id`och`id.extension` |
| Rekursion (`result.related`i GetLaboratoryOrderOutcome) | `contentReference` |
| `xs:any`(utökningspunkter) | Utelämnas |

Typer som `PatientSummaryHeaderType`, `HealthcareProfessionalType`, `OrgUnitType`, `LegalAuthenticatorType` och `ResultType` skrivs ut i varje modell, så att mappningssidornas sökvägar (t.ex. `diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId`) gäller i modellen.

### Användning med FML

En FML-motor baserad på HL7:s Java-verktyg (t.ex. Matchbox eller validatorn) kan läsa svarsmeddelandet som källa när modellen och datatypmodellerna är laddade:

* Källan är själva svarselementet, t.ex. `<GetDiagnosisResponse>`. SOAP-kuvertet måste skalas av först.
* Rotelementet matchas mot modellen via `xml-name` och namnrymd.
* Textinnehåll nås via `.value`, t.ex. `src.diagnosis.diagnosisHeader.documentId.value`.
* Tidsstämplar (`SEEHDSRivTimeStamp`) är text i formatet ÅÅÅÅMMDDttmmss och konverteras i FML till `dateTime` med tidszon enligt [GENERAL-001](mappings.md#tidszon). OID:er och `PersonIdType {id, type}` konverteras enligt [GENERAL-002](mapping-issues.md) och [GENERAL-006](mappings.md#patientreferens).

### Invarianter

En del regler i tjänstekontrakten finns inte i XSD:n utan i TKB:ns text och i schematron-filerna i domänernas testsviter (`test-suite/<kontrakt>/constraints.xml`). Regler som gäller ett enskilt meddelandeelement är uttryckta som FHIRPath-invarianter (`Severity: error`) på motsvarande element i den logiska modellen. Uttrycken utgår från modellens FHIR-namn, t.ex. `rivId` för XML-elementet `id`, och textvärden nås via `.value`.

| | | | |
| :--- | :--- | :--- | :--- |
| SEEHDSLMMedicationHistory | `getmedicationhistory-drug-choice` | `drug`(ordination, expediering, administrering) | Exakt ett av`unstructuredDrugInformation`,`merchandise`,`drugArticle`,`drug`och`generics`(MED-003) |
|   | `getmedicationhistory-npl-or-atc` | `drug.drug` | Minst ett av`nplId`och`atcCode` |
|   | `getmedicationhistory-dosage` | `drug.dosage`(ordination, administrering) | Minst ett av`setDosage`och`conditionalDosage` |
|   | `getmedicationhistory-prescriber` | `medicationPrescription` | `prescriber`krävs när`selfMedication`är`false` |
|   | `getmedicationhistory-start-of-treatment` | `medicationPrescription` | `startOfTreatment`krävs när`typeOfPrescription`är`I` |
|   | `getmedicationhistory-administration-time` | `administration.administrationTime` | Minst ett av`start`och`end` |
|   | `getmedicationhistory-occasion-dosage` | `occasionDosage` | `period.value`1–28 och`administration.dayOfPeriod`1–14 |
|   | `getmedicationhistory-total-amount` | `dispensationAuthorization` | `totalAmount`och`packageUnit`anges tillsammans eller inte alls |
|   | `getmedicationhistory-referred-type` | `relation.referredInformation.type` | `originalText`är`caa-ga`eller`chb-go` |
|   | `getmedicationhistory-pq-interval` | `dose`,`treatmentInterval` | Minst ett av`low`och`high` |
|   | `getmedicationhistory-cv-strict` | `reason`,`articleNumber`,`atcCode`,`nplId`,`nplPackId`,`gender` | `code`,`codeSystem`och`displayName`anges, inte`originalText` |
|   | `getmedicationhistory-ii-strict` | `receivingPharmacy`,`informationOwner.id` | `extension`anges |
| SEEHDSLMAlertInformation | `getalertinformation-body-choice` | `alertInformationBody` | Exakt en av`hypersensitivity`,`seriousDisease`,`treatment`,`communicableDisease`,`restrictionOfCare`och`unstructuredAlertInformation` |
|   | `getalertinformation-substance-choice` | `pharmaceuticalHypersensitivity` | Antingen`atcSubstance`eller både`nonATCSubstance`och`nonATCSubstanceComment` |
| SEEHDSLMAlertInformationV30 | `getalertinformation3-body-choice` | `body` | Exakt en av de sju typerna av uppmärksamhetsinformation |
|   | `getalertinformation3-time-choice` | `time`(sex ställen) | Exakt ett av`timestamp`och`timePeriod` |
| SEEHDSLMCareDocumentation, V21 | `getcaredocumentation-body-xor`,`getcaredocumentation-multimedia-xor` | `body`,`multimediaEntry` | Exakt ett av`clinicalDocumentNoteText`och`multimediaEntry`, och av`value`och`reference` |
| SEEHDSLMCareDocumentationV21 | `getcaredocumentation21-code-choice` | `clinicalDocumentNote` | Exakt ett av`clinicalDocumentNoteCode`och`clinicalDocumentTypeCode` |
| SEEHDSLMCarePlans | `getcareplans-content-xor` | `content` | Exakt ett av`value`och`reference` |
| SEEHDSLMImagingOutcome | `getimagingoutcome-dicom-choice` | `imageDicomData` | Exakt ett av`dicomValue`och`dicomReference` |
|   | `getimagingoutcome-imagedata-choice` | `imageData` | Exakt ett av`value`och`reference` |
| SEEHDSLMLaboratoryOrderOutcome, V41 | `getlaboratoryorderoutcome-reference-choice` | `result.reference` | Exakt ett av`interval`och`description` |
|   | `getlaboratoryorderoutcome-value-choice` | `result.value` | Exakt ett av`cv`,`pq`,`intervalPQ`och`st` |
| SEEHDSLMLaboratoryOrderOutcomeV31 | `getlaboratoryorderoutcome31-analysis-choice` | `analysis` | Exakt ett av`analysisCode`och`analysisText` |
| SEEHDSLMMaternityMedicalHistory | `getmaternitymedicalhistory-body-choice` | `maternityMedicalRecordBody` | Exakt en av`registrationRecord`,`pregnancyCheckupRecord`och`postDeliveryRecord` |
| SEEHDSLMReferralOutcome, V31 | `getreferraloutcome-actresult-choice` | `act.actResult` | Exakt ett av`value`och`reference` |
| SEEHDSLMObservations | `getobservations-patient-id-choice` | `observationBody.patient`,`participation.patient` | Exakt ett av`id`och`person.id` |
|   | `getobservations-participation-choice` | `participation` | Exakt en av`healthcareProfessional`,`patient`,`otherPerson`,`locationRole`,`resource`och`organisation` |
|   | `getobservations-time-choice` | `observationBody.time`,`participation.time` | Exakt ett av`ts`och`ivl_ts` |
|   | `getobservations-amount-choice` | `resource.amount` | Exakt ett av`pq`och`ivl_pq` |
|   | `getobservations-value-choice` | `observationBody.value`,`resourceProperty.value` | Exakt ett av`cv`,`pq`,`ivl_pq`,`ts`,`ivl_ts`,`st`och`int` |
| SEEHDSLMObservationsV12 | `getobservations12-id-choice` | `performerRole`,`additionalParticipant` | Högst ett av`id`och`person.id` |
|   | `getobservations12-participant-choice` | `additionalParticipant` | Exakt en av`person`,`organisation`,`device`och`location` |
| SEEHDSLMRequestActivitiesV10 | `getrequestactivities1-status-code` | `requestActivity` | `typeOfRequest`är 1, 2, 4 eller 10, och`statusCode`är en av de koder som testsviten tillåter för remisstypen (VER-005) |
|   | `getrequestactivities1-request-id`,`-issued-by-unit`,`-receiving-unit` | `requestActivity` | Minst ett av`senderRequestId`/`receiverRequestId`, och id eller beskrivning för remitterande respektive mottagande enhet |

Följande schematron-regler är inte invarianter i modellerna:

* Regler för datatypen CVType (att `code`, `codeSystem` och `displayName` anges tillsammans och att `originalText` utesluter kod), eftersom datatypmodellerna genereras och delas mellan kontrakten. `getmedicationhistory-cv-strict` är undantaget, där TKB:n skärper regeln för vissa element.
* Unika id:n i svaret, att inga element är tomma och kontroller av OID:er och kodvärden mot fasta listor.
* Regler som rör begäran eller resultatkoden i svaret.
* Övriga villkorsregler i de andra kontrakten, t.ex. `uterusNote` i GetMaternityMedicalHistory och `nullifiedReason` i GetVaccinationHistory. De kan läggas till på samma sätt.

Generatorn i `tools/rivta-lm` behåller invarianterna och deras `obeys`-regler när modellerna genereras om.

### Verifiering mot TKB

Varje kardinalitet har jämförts mellan XSD, TKB och den tidigare modellen. TKB:ns tabell "Fältregler" (svar) är källan för begränsningar som är strängare än XSD:n, inklusive N/A (0..0).

* **Bekräftade av TKB** (29 element): strängare än XSD:n och oförändrade, t.ex. `documentTitle`/`documentTime` 0..0 i GetDiagnosis, `result` 1..1 i GetDiagnosis och GetAlertInformation, `documentTime` 1..1 i GetFunctionalStatus, GetMaternityMedicalHistory och GetReferralOutcome.
* **Nya begränsningar från TKB** (24 element), främst 0..0: `nullified`/`nullifiedReason` i GetDiagnosis, GetCarePlans, GetMaternityMedicalHistory och GetReferralOutcome; `legalAuthenticatorRoleCode` och vårdenhet/vårdgivare under bildtagning och remiss i GetImagingOutcome och GetReferralOutcome; `header.signature.orgUnit` i GetLaboratoryOrderOutcome; `documentTime` samt vårdenhet/vårdgivare för förskrivare och utvärderare i GetMedicationHistory.
* **Behållna trots att TKB:n anger annat:**

| | | | | |
| :--- | :--- | :--- | :--- | :--- |
| GetMedicationHistory | `medicationMedicalRecord.medicationMedicalRecordHeader.documentTitle` | 0..0 (avsiktligt undertryckt) | 0..1 | 0..1 |
| GetCareContacts | `careContact.careContactHeader.nullified`,`nullifiedReason` | 0..0 | saknas i TKB | 0..1 |

* **TKB lösare än XSD** – modellen följer XSD:n:

| | | | |
| :--- | :--- | :--- | :--- |
| GetCareDocumentation | `careDocumentation.header.signature.timestamp` | 0..1 | 1..1 |
| GetMedicationHistory | `…drug.dosage.conditionalDosage.conditionDescription`(två ställen) | 0..1 | 1..1 (TKB:n hänvisar själv till ett arkitekturbeslut om diskrepansen) |

* **Stavning:** TKB:n för GetMedicationHistory och GetCarePlans skriver `healthcareProfessionalcareUnitHSAId`/`…careGiverHSAId` med litet c; XSD:n och modellerna har `healthcareProfessionalCareUnitHSAId`. XSD:n stavar `accesssLogs` (GetAccessLogsForPatient) och `burnedInaAnnotations` (GetImagingOutcome) på det sättet, och modellerna följer XSD:n.

> **Vägledning för författare:** Modellerna i `input/fsh/logicalmodels/` är genererade. Ändringar i struktur görs genom att generera om från XSD:n; beskrivningar kan redigeras direkt.

