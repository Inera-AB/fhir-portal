# Versionshistorik - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Versionshistorik

Sidan beskriver ändringarna mellan publicerade versioner av denna Implementation Guide.

-------

| | | | |
| :--- | :--- | :--- | :--- |
| 0.9.0 | 2026-11-16 | Draft | Första releasen i IG Publishers publiceringsläge. IG:n publiceras utan Turtle, vilket gör varje publicerad version knappt en fjärdedel mindre. Version 0.3.1 är borttagen från fhir.inera.se. |
| 0.8.2 | 2026-11-13 | Draft | Inera-grafiken från inera-fhir-graphic-profile, och rättade fel och varningar i IG Publishers QA: rubriknivåer,`experimental`och`caseSensitive`för kodsystem och värdemängder, låsta kanoniska referenser och HTML-liknande text i definitioner. |
| 0.8.1 | 2026-10-26 | Draft | Rättar felen i IG Publishers QA: sidrubriker, egna url:er för kodsystem,`DiagnosticReport.performer`och bindningen av`Observation.status`. |
| 0.8.0 | 2026-10-26 | Draft | Releaser publiceras med IG Publishers officiella publiceringsläge enligt IneraFHIRTemplate. Paket-id:t är nu`inera.ehds.ehds-tk`. |
| 0.7.0 | 2026-10-26 | Draft | Rätt kod`NOPAT`för`approvedForPatient = false`, och Provenance-agenterna custodian och author går nu att skilja åt vid validering. |
| 0.6.0 | 2026-10-12 | Draft | Regler från TKB:erna och testsvitens schematron, bland annat val mellan element (MED-003), är FHIRPath-invarianter i de logiska modellerna. |
| 0.5.0 | 2026-10-12 | Draft | Alla aktiva tjänstekontraktsversioner enligt startsidan har nu logiska modeller och mappning, inte bara den senaste versionen. |
| 0.4.0 | 2026-10-12 | Draft | Ny konformitetsansats (EURIDICE och EU Core i stället för IPS/EPS), profiler omdöpta till SEEHDS, logiska modeller genererade från RIV-TA-XSD och verifierade mot TKB, och ett antal mappningsbeslut. |
| 0.3.3 | 2026-06-25 | Draft | `ig_slug`tillagd i dispatch-anropet till fhir-portal, så att länkarna till kanonisk URL blir rätt. |
| 0.3.2 | 2026-06-25 | Draft | Ompublicering som rättar publiceringsflödet och publiceringssökvägarna. |
| 0.3.1 | 2026-06-24 | Draft | Första publicerade versionen. |
| 0.1.0 | 2026-06-16 | Draft | Första mallversionen. |

-------

### Ändringslogg

#### 0.9.0 — 2026-11-16 (Draft)

**Publicering**

* Detta är den första releasen med IG Publishers publiceringsläge (se 0.8.0). Publishern skriver IG:ns rot på `https://fhir.inera.se/ig/ehds-tk/`, `history.html`, `package-list.json` och vidarebefordringarna, och sätter bannern i tidigare versioner till en hänvisning till den senaste versionen.
* Version 0.3.1 är borttagen från fhir.inera.se. Den ersattes dagen efter av 0.3.2, som bara rättade publiceringsflödet. 0.3.2 finns kvar som tidigare version i historiken.
* CI-bygget på `inera-ab.github.io/EHDS-TK` innehåller bara senaste bygget av `main` och grenarna, inte längre kopior av 0.3.1 och 0.3.2.

**Mindre utdata**

* IG:n genereras utan Turtle (`excludettl` i `sushi-config.yaml`). Resurserna finns inte längre som `.ttl` eller `.ttl.html`, fliken TTL är borta från resurssidorna, och `definitions.ttl.zip` och `examples.ttl.zip` skapas inte.
* XML och JSON finns kvar. `excludexml` och `excludejson` skulle ta bort även resursfilerna (`.xml`, `.json`), inte bara sidorna. Publishern skapar dessutom vidarebefordringarna från kanoniska url:er, till exempel `https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient`, bara för resurser som finns i både XML och JSON.

#### 0.8.2 — 2026-11-13 (Draft)

**Presentation**

* IG:n använder Inera-grafiken från `inera-fhir-graphic-profile` i stället för egna kopior av stilmall och logotyper.

**Byggfel och varningar**

* Med den nya mallen renderades avsnitt som börjar på `##` med `header_offset` två nivåer ned (`h4` direkt efter sidtitelns `h2`), vilket IG Publisher rapporterar som fel (WCAG). `header_offset` är borttaget och avsnitten börjar på `###`, som på övriga sidor.
* Alla kodsystem och värdemängder anger `experimental = false`, och kodsystemen anger `caseSensitive = true` (ShareableCodeSystem/ShareableValueSet).
* `pin-canonicals: pin-multiples` låser kanoniska referenser som finns i flera versioner bland beroendena.
* Text som `<actText>`, `IVL<PQ>` och `<section>` i definitioner skrivs som kod, så att den inte tolkas som inbäddad HTML.

#### 0.8.1 — 2026-10-26 (Draft)

**Profiler**

* `SEEHDSObservationBase`: `Observation.status` var bunden (required) till SNOMED CT-värdemängden `SEObservationStatusVS`, som inte är en delmängd av FHIR:s `observation-status`. Bindningen är borttagen. `status` följer FHIR:s värdemängd, och koderna från tjänstekontraktet översätts med [ObservationStatusMap](ConceptMap-observation-status-map.md) (OBS-003), som tidigare.
* `ObservationStatusMap` anger nu källa och mål som värdemängder (`sourceCanonical`/`targetCanonical`) i stället för kodsystem.
* `SEEHDSDiagnosticReportLab`, `-Imaging` och `-Referral`: EU Core-slicen `performer:organization` begränsas till `SEEHDSOrganization`. Tidigare ärvde slicen även `SEEHDSPractitionerRole`, vilket inte är en giltig begränsning av EU Core.

**Byggfel**

* Sidorna börjar inte längre med en egen `#`-rubrik, eftersom IG Publishers template redan sätter sidtiteln. Sidor vars avsnitt börjar på `##` renderas en nivå ned (`header_offset`).
* Kodsystemen och ConceptMap:en med en egen url utanför IG:ns canonical listas som `special-url` i `sushi-config.yaml`.
* [Examples](examples.md) länkade till mallens exempel `IneraPatient`.
* De inaktiva SNOMED CT-koderna `248334005` och `444301002`, som ingår i Ineras urval, är undantagna i `ignoreWarnings.txt`.

#### 0.8.0 — 2026-10-26 (Draft)

**Publicering**

* Releaser publiceras med IG Publishers officiella publiceringsläge (`-go-publish`) till den gemensamma webbroten på fhir.inera.se, enligt den nya publiceringsmetoden i IneraFHIRTemplate. Publishern skriver versionshistoriken (`history.html` och `package-list.json` på `https://fhir.inera.se/ig/ehds-tk/`) och sätter releasebannern på alla sidor, även i tidigare versioner.
* Paket-id:t är ändrat från `inera.ehds.tk` till `inera.ehds.ehds-tk`. Publiceringen lägger IG:n i katalogen som anges av tredje delen av paket-id:t, och den ska vara densamma som i canonical (`https://fhir.inera.se/ig/ehds-tk`), som är oförändrad.
* Releasetaggar skrivs utan `v`, till exempel `0.8.0`. De tidigare taggarna `v0.3.1`–`v0.3.3` ligger kvar.
* `publication-request.json` beskriver varje release. `package-list.json` finns inte längre i repot.
* Workflowsen anropar de delade workflowsen i `Inera-AB/fhir-ig-workflows`. release-please och `CHANGELOG.md` är borttagna; versionen räknas upp för hand och ändringarna beskrivs på den här sidan.

#### 0.7.0 — 2026-10-26 (Draft)

**Säkerhetsmärkning (PDL-001)**

* `approvedForPatient = false` mappas till `meta.security` med koden `NOPAT` från v3-ActCode. Tidigare angavs `NOPATIENT`, som inte finns i kodsystemet. Rättat på alla mappningssidor, i [Mappningsissues](mapping-issues.md) och i `SEEHDSObservationBase`.

**Provenance (GENERAL-003)**

* Uppdelningen av agenterna i [SEEHDSProvenance](StructureDefinition-SEEHDSProvenance.md) gick inte att utvärdera: diskriminatorn pekade på `agent.type.coding.code`, men profilen hade bara ett mönster på `agent.type`. Diskriminatorn är nu av typen `pattern` på `type`, så att en validator kan avgöra vilken agent som är `custodian` och vilken som är `author`.
* Båda agenterna kräver nu HSA-id i `who.identifier` (system `urn:oid:1.2.752.29.4.19`), vilket är vad mappningssidorna redan anger.
* Nytt exempel, [SEEHDSProvenanceExample](Provenance-SEEHDSProvenanceExample.md), som valideras mot profilen när IG:n byggs.
* [Profiler](profiles.md) beskrev felaktigt tre agenter (med `assembler`). Profilen har två.

#### 0.6.0 — 2026-10-12 (Draft)

Regler som inte finns i XSD:erna, men i TKB:ernas text och i schematron-filerna i domänernas testsviter, är nu FHIRPath-invarianter i de logiska modellerna (GENERAL-009). Se [Logiska modeller](logical-models.md#invarianter).

**Logiska modeller**

* GetMedicationHistory: läkemedelsvalet under `drug` kräver exakt ett av fem alternativ (MED-003, stängd), och modellen har invarianter för testsvitens övriga regler: `nplId` eller `atcCode`, dosering, förskrivare vid `selfMedication = false`, `startOfTreatment` vid insättning, administreringstid, gränser för tillfällesdosering, `totalAmount`/`packageUnit`, `referredInformation.type` och strikta kod- och id-typer.
* Val mellan element i GetAlertInformation 2.0 och 3.0, GetCareDocumentation 2.1, GetImagingOutcome, GetLaboratoryOrderOutcome 4.2, 4.1 och 3.1, GetMaternityMedicalHistory, GetReferralOutcome 3.2 och 3.1 samt GetObservations 2.0 och 1.2.
* GetRequestActivities 1.0: tillåtna `statusCode` per `typeOfRequest` enligt testsviten (VER-005, stängd), och att id och enheter anges.
* `tools/rivta-lm` kopplar inte längre en `obeys`-regel på ett element som heter `value` till föräldraelementet.

**Mappningar**

* GetMedicationHistory beskriver villkoret för `drug`, och GetRequestActivities anger att 1.0 bara tillåter de sju beskrivna statuskoderna.

#### 0.5.0 — 2026-10-12 (Draft)

Startsidan anger flera aktiva versioner för en del tjänstekontrakt, men mappningarna byggde bara på en version per kontrakt. Nu är alla aktiva versioner med. Se [Tjänstekontraktsversioner](contract-versions.md).

**Logiska modeller**

* Tio nya modeller för övriga aktiva versioner: GetAlertInformation 3.0, GetCareContacts 2.0, GetCareDocumentation 2.1, GetLaboratoryOrderOutcome 4.1 och 3.1, GetReferralOutcome 3.1, GetVaccinationHistory 1.0, GetRequestActivities 1.0, GetObservations 1.2 och GetAccessLogsForPatient 1.1. Modellerna har versionen som suffix, t.ex. `SEEHDSLMCareContactsV20`.
* Modellerna är genererade från XSD:n och TKB:n i den domänversion där kontraktsversionen senast ingick, och jämförda med motsvarande modeller i tkb-converter.
* `tools/rivta-lm` läser domäner vid en viss tagg eller gren, och det nya skriptet `vdiff.py` beräknar skillnaderna mot modellen som mappningen utgår från.

**Mappningar**

* Varje berörd mappningssida har ett nytt avsnitt "Övriga aktiva versioner" med en genererad tabell över skillnaderna och en mappning av det som skiljer. För GetLaboratoryOrderOutcome 3.1, GetCareDocumentation 2.1, GetAlertInformation 3.0, GetRequestActivities 1.0 och GetObservations 1.2, som har andra meddelandemodeller, finns fullständiga mappningstabeller.
* Sidhuvudena på mappningssidorna anger nu samma aktiva versioner som startsidan.
* Nya öppna frågor VER-001–VER-006 på [Mappningsissues](mapping-issues.md), bland annat att GetAlertInformation 3.0 bara finns som beta, att huvudmodellen för GetObservations bygger på en release candidate medan 1.2 är aktiv, och att GetReferralOutcome mappas från 3.2 medan startsidan anger 3.1.

#### 0.4.0 — 2026-10-12 (Draft)

Versionen bryter bakåtkompatibiliteten: profiler och logiska modeller har nya namn och kanoniska URL:er, och beroendena är utbytta.

**Konformitetsansats och beroenden**

* IG:n utlovar nu tre saker: TKB-innehåll, en giltig profilering av EURIDICE (`hl7.fhir.eu.health-data-api` 1.0.0-ballot) och svenska konventioner enligt HL7 Sweden. Se [Startsida](index.md).
* HL7 Europe Core (`hl7.fhir.eu.base` 2.0.0-ballot) är nu ett beroende. Beroendena till IPS (`hl7.fhir.uv.ips`) och EPS (`hl7.fhir.eu.eps`) är borttagna, liksom IPS-spåren i profilerna och i mappningen av GetDiagnosis.
* Ett nytt avsnitt motiverar valet av FHIR R4: målet är R5, men först behöver de externa beroendena finnas för R5 ([Val av FHIR-version](index.md#fhir-version)).

**Profiler**

* Alla profiler, extensioner och logiska modeller har bytt prefix från `IneraEHDS` till `SEEHDS`.
* `SEEHDSPractitionerRole` och CapabilityStatement-profilen `SEEHDSResourceAccessProvider` är nya.
* Auditloggningen följer IHE BALP och mXDE. `SEEHDSAuditEventReadAccessLog` ersätter den tidigare loggprofilen.
* `SEEHDSCompositionCareDocumentation` och `SEEHDSDocumentReference` har utökats för vårddokumentation.
* GetDiagnosis: `patientId` mappas som PersonIdType `{id, type}`, och `abatementDateTime` har lagts till.

**Logiska modeller**

* Alla 15 logiska modeller genereras nu från tjänstekontraktens XSD med verktyget `tools/rivta-lm`. Modellerna använder RIV-TA-datatyper, XML-namnrymder och XML-namn, så att de kan användas som källa i FHIR Mapping Language. Se [Logiska modeller](logical-models.md).
* GetLaboratoryOrderOutcome och GetMedicationHistory är kompletta.
* GetObservations, GetRequestActivities och GetAccessLogForPatient följer TKB:ns logiska meddelandemodell i stället för en platt struktur.
* Kardinaliteterna är verifierade mot TKB:ns fältregler. Där TKB är strängare än XSD gäller TKB.
* XSD-element som heter `id` eller `extension` heter `rivId` respektive `rivExtension` i modellerna, eftersom namnen annars krockar med FHIR:s ärvda element.

**Mappningar och mappningsbeslut**

* Ny undersida om DocBook-narrativ i vårddokumentation.
* Valideringsfixar från EHDS-bryggan är införda i mappningsspecifikationerna.
* documentTime-undantaget för `recordedDate` och `Provenance.recorded` är förtydligat, och spärrtiden för GetDiagnosis är beskriven.
* GENERAL-008, organisationsuppgifter: föreslagen lösning med en contained `Organization` som ögonblicksbild. Uppgifterna `orgUnitTelecom` och `orgUnitEmail` utelämnas normalt när det är en patient som anropar.
* `documentTitle`: 
* Imaging och Referral mappar den till `DiagnosticReport.code.text`.
* Vaccination mappar den till `Immunization.note`.
* Medication undertrycker den (0..0).
 
* Mödravård: varje sektion blir en grupperande `Observation`.
* CareContacts: `careContactOrgUnit.orgUnitHSAId` och `orgUnitName` är 0..1.
* Lösta mappningsissues är stängda och sammanfogade på [Mappningsissues](mapping-issues.md).

**Bygge och kvalitetssäkring**

* PR-kontrollen (IG Publisher QA) misslyckas nu om IG Publisher avbryter publiceringen. Tidigare kunde en krasch se ut som ett lyckat bygge.
* Notifieringen till fhir-portal stoppar inte längre publiceringen om den misslyckas.

#### 0.3.3 — 2026-06-25 (Draft)

* `ig_slug` tillagd i dispatch-anropet till fhir-portal.

#### 0.3.2 — 2026-06-25 (Draft)

* Ompublicering med rättat publiceringsflöde och rättade publiceringssökvägar.

#### 0.3.1 — 2026-06-24 (Draft)

* Första publicerade versionen, med profiler, logiska modeller och mappningar för 16 tjänstekontrakt.

#### 0.1.0 — 2026-06-16 (Draft)

* Grundstrukturen etablerad.
* Mallprofilen IneraPatient tillagd.
* Platshållarsidor för arbetsflöde, logiska modeller, mappningar och nedladdningar tillagda.

-------

> **Vägledning för författare:** Lägg till en rad i tabellen och ett avsnitt i ändringsloggen för varje publicerad version. Följ [semantisk versionshantering](https://semver.org/). Före 1.0.0 räknas minor-versionen upp även för ändringar som bryter bakåtkompatibiliteten. Ange publiceringsdatum, status (Draft, STU eller Normative) och en kort sammanfattning av vad som har ändrats.

