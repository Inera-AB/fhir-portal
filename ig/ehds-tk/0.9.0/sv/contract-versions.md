# Tjänstekontraktsversioner - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Tjänstekontraktsversioner

[Startsidan](index.md) anger vilka versioner av varje tjänstekontrakt som är aktiva för NPÖ och 1177 Journal. Flera tjänstekontrakt har mer än en aktiv version. För att IG:n ska vara ett fullständigt underlag för mappning har varje aktiv version en egen logisk modell, och mappningssidorna beskriver hur de övriga versionerna skiljer sig från den version som mappningstabellerna utgår från.

-------

### Arbetssätt

* **En version per tjänstekontrakt är utgångspunkt.** Mappningstabellerna på varje mappningssida är skrivna för den versionen. Dess logiska modell har tjänstekontraktets namn, t.ex. [SEEHDSLMCareContacts](StructureDefinition-SEEHDSLMCareContacts.md).
* **Övriga aktiva versioner har egna logiska modeller** med versionen som suffix, t.ex. [SEEHDSLMCareContactsV20](StructureDefinition-SEEHDSLMCareContactsV20.md) för 2.0. De är genererade på samma sätt som övriga modeller (se [Logiska modeller](logical-models.md#uppbyggnad)), från XSD:n i den domänversion där kontraktsversionen senast ingick och TKB:n för samma domänversion.
* **Skillnaderna är beräknade, inte handskrivna.** Varje mappningssida har ett avsnitt "Övriga aktiva versioner" med en genererad tabell över element som bara finns i den ena versionen, bytta namn och ändrade kardinaliteter eller datatyper. Under tabellen står hur det som skiljer mappas. Det som är lika mappas enligt sidans huvudtabeller.
* **Samma FHIR-profiler gäller för alla versioner.** Ingen version kräver egna profiler; skillnaderna hanteras i mappningen.

Domänversionerna och de äldre TKB:erna har jämförts med [tkb-converter](https://github.com/oskthu2/tkb-converter), som har TKB:erna som IG:er med logiska modeller, även för äldre domänversioner (`igs/TKB_<domän>/versions/<version>`). Strukturen i modellerna stämmer överens; tkb-converter normaliserar några elementnamn (t.ex. `dissentintOpinion` → `dissentingOpinion` och `id` → `actResultId`), medan IG:ns modeller behåller XSD:ns namn (med `rivId` för `id`) så att de kan läsa RIV-TA-XML direkt.

-------

### Versioner per tjänstekontrakt

| | | | | |
| :--- | :--- | :--- | :--- | :--- |
| GetDiagnosis | 2.0 / 2.0 | 2.0 | – | – |
| GetAlertInformation | 2.0, 3.0 / 2.0, 3.0 | 2.0 | [3.0](mapping-getalertinformation.md#version-3-0):[SEEHDSLMAlertInformationV30](StructureDefinition-SEEHDSLMAlertInformationV30.md) | `riv.clinicalprocess.healthcond.description`, gren`feature-GAI_3.0`(ej släppt, se VER-001) |
| GetMedicationHistory | 2.2 / 2.2 | 2.2 | – | – |
| GetVaccinationHistory | 2.0 / 1.0, 2.0 | 2.0 | [1.0](mapping-getvaccinationhistory.md#version-1-0):[SEEHDSLMVaccinationHistoryV10](StructureDefinition-SEEHDSLMVaccinationHistoryV10.md) | `riv.clinicalprocess.activityprescription.actoutcome`1.0.2 |
| GetFunctionalStatus | 2.0 / 2.0 | 2.0 | – | – |
| GetMaternityMedicalHistory | 2.0 / 2.0 | 2.0 | – | – |
| GetCarePlans | 2.0 / 2.0 | 2.0 | – | – |
| GetCareContacts | 2.0, 3.0 / 2.0, 3.0 | 3.0 | [2.0](mapping-getcarecontacts.md#version-2-0):[SEEHDSLMCareContactsV20](StructureDefinition-SEEHDSLMCareContactsV20.md) | `riv.clinicalprocess.logistics.logistics`2.0.7 |
| GetCareDocumentation | 2.1, 3.0 / 2.1, 3.0 | 3.0 | [2.1](mapping-getcaredocumentation.md#version-2-1):[SEEHDSLMCareDocumentationV21](StructureDefinition-SEEHDSLMCareDocumentationV21.md) | `riv.clinicalprocess.healthcond.description`2.1.19 |
| GetLaboratoryOrderOutcome | 3.1, 4.1 / 3.1, 4.2 | 4.2 | [4.1](mapping-getlaboratoryorderoutcome.md#version-4-1):[SEEHDSLMLaboratoryOrderOutcomeV41](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV41.md);[3.1](mapping-getlaboratoryorderoutcome.md#version-3-1):[SEEHDSLMLaboratoryOrderOutcomeV31](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV31.md) | `riv.clinicalprocess.healthcond.actoutcome`4.1.3 och 3.1.10 |
| GetImagingOutcome | 1.0 / 1.0 | 1.0 | – | – |
| GetReferralOutcome | 3.1 / 3.1 | 3.2 | [3.1](mapping-getreferraloutcome.md#version-3-1):[SEEHDSLMReferralOutcomeV31](StructureDefinition-SEEHDSLMReferralOutcomeV31.md) | `riv.clinicalprocess.healthcond.actoutcome`4.2 (se VER-004) |
| GetRequestActivities | 2.0 / 1.0, 2.0 | 2.0 | [1.0](mapping-getrequestactivities.md#version-1-0):[SEEHDSLMRequestActivitiesV10](StructureDefinition-SEEHDSLMRequestActivitiesV10.md) | `riv.crm.requeststatus`1.0.7 |
| GetObservations | 1.2 / 1.2 | 2.0 (release candidate) | [1.2](mapping-getobservations.md#version-1-2):[SEEHDSLMObservationsV12](StructureDefinition-SEEHDSLMObservationsV12.md) | `riv.clinicalprocess.healthcond.basic`1.2.3 (se VER-003) |
| GetAccessLogsForPatient | – / 1.1, 2.0 | 2.0 | [1.1](mapping-getaccesslogforpatient.md#getaccesslogforpatient-1-1):[SEEHDSLMAccessLogV11](StructureDefinition-SEEHDSLMAccessLogV11.md) | `riv.ehr.log`1.2.4 (domänen`ehr:log:querying`) |

-------

### Avvikelser mellan startsidan och modellerna

Kartläggningen visade tre fall där versionen som mappningen utgår från inte är en av de aktiva versionerna på startsidan, eller inte är släppt. De är öppna frågor i [Mappningsissues](mapping-issues.md):

* **GetAlertInformation 3.0** (VER-001) finns bara som beta. Modellen följer grenens senaste version och kan ändras.
* **GetObservations** (VER-003): startsidan anger 1.2, men huvudmodellen bygger på 2.0, som bara finns som release candidate.
* **GetReferralOutcome** (VER-004): startsidan anger 3.1, men huvudmodellen bygger på 3.2. Skillnaden är liten (en kardinalitet).

-------

### Verifiering

Modellerna är kontrollerade mot källorna på tre sätt:

* **XSD:** Strukturen, namnen och XML-namnrymderna läses direkt ur XSD:n för domänversionen. En omgenerering ger identiska filer.
* **TKB:** Kardinaliteterna är skärpta där TKB:n för samma version är strängare än XSD:n. TKB:n för GetObservations 1.2 har ingen tabell för svaret, så den modellen bygger enbart på XSD:n.
* **tkb-converter:** Sex av modellerna har en motsvarighet i tkb-converter, som tolkar TKB och XSD oberoende av IG:ns skript. Jämförelsen görs med `tools/rivta-lm/tkbcmp.py`.

| | | |
| :--- | :--- | :--- |
| SEEHDSLMVaccinationHistoryV10 | 105 | `nullified`är 1..1 enligt TKB:n, 0..1 i tkb-converter |
| SEEHDSLMLaboratoryOrderOutcomeV31 | 76 | – |
| SEEHDSLMCareDocumentationV21 | 48 | – |
| SEEHDSLMCareContactsV20 | 34 | `accountableHealthcareProfessional`är 1..1 enligt TKB:n, 0..1 i tkb-converter |
| SEEHDSLMObservationsV12 | 81 | – |
| SEEHDSLMAccessLogV11 | 19 | `result.resultText`är 1..1 enligt XSD:n, 0..1 i tkb-converter |
| SEEHDSLMLaboratoryOrderOutcomeV41, SEEHDSLMReferralOutcomeV31, SEEHDSLMAlertInformationV30, SEEHDSLMRequestActivitiesV10 | Finns inte i tkb-converter | Kontrollerade mot XSD och TKB |

Mappningarna för de övriga versionerna täcker alla element i modellerna, antingen per element eller per grupp ("mappas som i 3.0", "Ej mappad"). Till skillnad från mappningarna för huvudversionerna är de ännu inte prövade mot riktiga svar.

-------

### Uppdatera modellerna

Versionerna och deras domänversioner anges i `tools/rivta-lm/cfg.py`. Domänerna checkas ut per tagg eller gren med `git worktree` (`<domains>/riv.<domän>@<tagg>`), och modellerna och jämförelserna genereras med `run_gen.py` och `vdiff.py`. Se `tools/rivta-lm/README.md`.

