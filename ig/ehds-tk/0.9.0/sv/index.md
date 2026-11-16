# Introduction - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Introduction

### Domän

Denna Implementation Guide (IG) beskriver den FHIR-funktionalitet som krävs för att informationsförsörja **NPÖ** (Nationell patientöversikt) och **1177 Journal** via Ineras RIVTA-tjänstekontrakt. IG:n definierar FHIR-profiler, logiska modeller och mappningar för 16 tjänstekontrakt fördelade på 6 FHIR-grupper.

-------

### Omfång

IG:n täcker följande FHIR-grupper och tjänstekontrakt:

| | | | | |
| :--- | :--- | :--- | :--- | :--- |
| Patientöversikt | Diagnos | GetDiagnosis | Ja (2.0) | Ja (2.0) |
| Patientöversikt | Uppmärksamhetsinformation | GetAlertInformation | Ja (2.0, 3.0) | Ja (2.0, 3.0) |
| Patientöversikt | Läkemedel | GetMedicationHistory | Ja (2.2) | Ja (2.2) |
| Patientöversikt | Vaccinationer | GetVaccinationHistory | Ja (2.0) | Ja (1.0, 2.0) |
| Patientöversikt | Funktionstillstånd och ADL | GetFunctionalStatus | Ja (2.0) | Ja (2.0) |
| Patientöversikt | Mödravård | GetMaternityMedicalHistory | Ja (2.0) | Ja (2.0) |
| Patientöversikt | Vårdplan | GetCarePlans | Ja (2.0) | Ja (2.0) |
| Patientöversikt | Vårdkontakter | GetCareContacts | Ja (2.0, 3.0) | Ja (2.0, 3.0) |
| Patientöversikt | Anteckningar | GetCareDocumentation | Ja (2.1, 3.0) | Ja (2.1, 3.0) |
| Laboratorie och diagnostik | Provsvar | GetLaboratoryOrderOutcome | Ja (3.1, 4.1) | Ja (3.1, 4.2) |
| Bilddiagnostik | Bilddiagnostik | GetImagingOutcome | Ja (1.0) | Ja (1.0) |
| Remiss och process | Konsultationsremiss | GetReferralOutcome | Ja (3.1) | Ja (3.1) |
| Remiss och process | Remisstatus | GetRequestActivities | Ja (2.0) | Ja (1.0, 2.0) |
| Tillväxtkurva barn | Tillväxtkurva | GetObservations | Ja (1.2) | Ja (1.2) |
| Logg | Åtkomstloggar | GetAccessLogForPatient | Nej | Ja (1.1, 2.0) |

Versionerna inom parentes är de aktiva versionerna av tjänstekontraktet. Alla aktiva versioner har logiska modeller och mappning i IG:n. Mappningstabellerna utgår från en version per tjänstekontrakt, och övriga versioner beskrivs som skillnader mot den, se [Tjänstekontraktsversioner](contract-versions.md).

IG:n täcker **inte** tjänstekontrakt utanför ovanstående tabell, och avser inte att ersätta källsystemen eller specificera gränssnittet mot NPÖ/1177 Journal på transaktionsnivå.

-------

### Vad IG:n utlovar

IG:n utlovar att följande tre krav uppfylls **samtidigt**:

| | | |
| :--- | :--- | :--- |
| 1 | **Samma kliniska information som TKB:erna, som FHIR-resurser.** | Varje element i tjänstekontraktens logiska modeller är mappat till ett FHIR-element, eller uttryckligen markerat som ej mappat med motivering. Profilerna kräver det som TKB:n kräver och inget som TKB:n inte bär. Se[Mappningar](mappings.md). |
| 2 | **En giltig profilering av EURIDICE-IG:n**([EU Health Data API](https://build.fhir.org/ig/euridice-org/eu-health-data-api/),`hl7.fhir.eu.health-data-api`). | EURIDICE anger att datamodellerna för resursåtkomst ärver från HL7 Europe Core (`hl7.fhir.eu.base`). Profilerna ärver därför EU Core-profilen där en sådan finns, och annars FHIR-basresursen. Kraven på API:et anges i[SEEHDSResourceAccessProvider](CapabilityStatement-SEEHDSResourceAccessProvider.md), som utgår från EURIDICE:s Resource Access Provider. |
| 3 | **Svenska basprofilernas namngivnings- och slicingkonventioner**(HL7 Sweden,`hl7se.fhir.base`). | Profilerna heter`SEEHDS…`med`Id`lika med namnet. Identifierare slicas med samma slice-namn och system som de svenska basprofilerna:`personnummer`,`samordningsnummer`,`nationelltReservnummer`, och`hsaid`(system`urn:oid:1.2.752.29.4.19`, typ`PRN`). |

Profilerna kan inte både ärva EU Core och de svenska basprofilerna, eftersom en profil bara kan ha en parent. Därför följs de svenska basprofilerna som konvention, medan EU Core är parent.

#### IPS och EPS – inspiration, inte löfte

IG:n utlovar **inte** följsamhet mot IPS (International Patient Summary) eller EPS (HL7 Europe Patient Summary). De har använts som inspiration, till exempel för vilka resurstyper som passar en informationsmängd. Krav och strukturer som bara fanns för att harmonisera med IPS eller EPS har tagits bort. Det gäller till exempel härledda statusvärden och kodningar utan stöd i TKB:n, och EPS-profiler i `meta.profile`.

-------

### Syfte

Syftet med IG:n är att:

1. Definiera FHIR-profiler (R4) som uppfyller de tre löftena ovan för data från Ineras RIVTA-tjänstekontrakt
1. Dokumentera mappningen från RIVTA-element till FHIR-element, inklusive OID→URI-översättning, Provenance-mönster och Sparr-hantering
1. Stödja implementörer som transformerar RIVTA-svar till FHIR-resurser för NPÖ och 1177 Journal

IG:n riktar sig till systemleverantörer, arkitekter och integrationsspecialister inom svensk e-hälsa.

-------

### Arkitektur

| | | |
| :--- | :--- | :--- |
| API och åtkomst | EURIDICE (`hl7.fhir.eu.health-data-api`) | Resource Access Provider, patientavgränsade sökningar, MHD för dokument |
| Datamodell | HL7 Europe Core (`hl7.fhir.eu.base`) | Parent för profilerna där EU Core-profil finns |
| Konventioner | HL7 Sweden basprofiler (`hl7se.fhir.base`) | Namngivning och identifier-slicing |
| Innehåll | Ineras TKB:er | Vilken klinisk information som bärs och vilka krav som gäller |
| Auditloggning | IHE BALP (`ihe.iti.balp`) | Loggposter vid utlämning, se[Åtkomstloggar](mapping-getaccesslogforpatient.md) |

Varje producerad FHIR-resurs anger sin EHDS-TK-profil i `meta.profile` (t.ex. `SEEHDSConditionDiagnosis`). Genom arvet uppfyller resursen även EU Core-profilen.

-------

### Terminologi

Alla kodverk och värdemängder som Inera förvaltar finns på [Inera Terminologitjänst](https://www.inera.se/tjanster/alla-tjanster-a-o/terminologitjanst-for-nationell-e-halsa/).

-------

### Beroenden

Denna IG har beroenden till:

* **EURIDICE – EU Health Data API:** `hl7.fhir.eu.health-data-api` 1.0.0-ballot
* **HL7 Europe Core:** `hl7.fhir.eu.base` 2.0.0-ballot
* **IHE BALP:** `ihe.iti.balp` 1.1.4
* **FHIR-extensions:** `hl7.fhir.uv.extensions.r4` 5.3.0

HL7 Sweden basprofiler (`hl7se.fhir.base`) används som konvention och är inget paketberoende.

### Val av FHIR-version

IG:n bygger på **FHIR R4 (4.0.1)**. Det långsiktiga målet är en R5-IG, men det förutsätter att beroendena först finns i R5, och det avgörs i externa projekt:

| | | |
| :--- | :--- | :--- |
| EURIDICE (`hl7.fhir.eu.health-data-api`) | R4, bygger på EU Core 2.0.0-ballot | En R5-version av EURIDICE |
| HL7 Europe Core (`hl7.fhir.eu.base`) | R4; R5 finns bara som opublicerat utkast | En publicerad R5-version |
| HL7 Sweden basprofiler (`hl7se.fhir.base`) | R4 | En R5-version, eftersom IG:n följer dess namn- och slicingkonventioner |
| IHE BALP (`ihe.iti.balp`) | 1.1.4 är R4; en R5-version (2.0.0) är under arbete | En publicerad R5-version |

Så länge EURIDICE och EU Core bara finns i R4 kan IG:n inte vara en giltig EURIDICE-profilering i R5 (se [Vad IG:n utlovar](#loften)). Därför ligger IG:n kvar på R4 tills beroendena är lösta.

Några mappningar blir bättre i R5:

* **AuditEvent.patient** – R5 har ett eget patientelement. I R4 används BALP:s entity-mönster (LOG-001).
* **DiagnosticReport.note** – R5 har anteckningar på rapportnivå, vilket R4 saknar.
* **DocumentReference.attester** – R5 har intygare med tidpunkt och roll, som kan bära signatur och signeringstid (`header.signature` i GetCareDocumentation). I R4 krävs extensionen `ext-signature-time` (DOC-003).
* **Observation.bodyStructure** – R5 kan referera en BodyStructure med flera anatomiska lokalisationer, vilket ersätter R4-extensionen `additionalBodySite` för `targetSite` (OBS-004).

När bytet görs bör R4-övergångslösningarna ovan ses över.

-------

### Dokumentation

Mer information om Inera Core och RIVTA finns på [Inera Core](https://www.inera.se/tjanster/alla-tjanster-a-o/inera-core/).

-------

### Förvaltning och vägledning

FHIR-profilerna förvaltas av Inera: [Källkod](https://github.com/oskthu2/ehds-tk).

Beskrivning av krav på konformans och vägledning för Ineras FHIR-IGs finns på [Inera FHIR-landningssida](https://www.inera.se/fhir).

