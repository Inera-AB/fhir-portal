# GetReferralOutcome – Remisser - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## GetReferralOutcome – Remisser

**Tjänstekontrakt:** `clinicalprocess:healthcond:actoutcome` GetReferralOutcome v3.2 och v3.1
 **FHIR-profil:** [SEEHDSDiagnosticReportReferral](StructureDefinition-SEEHDSDiagnosticReportReferral.md)
 **Logiska modeller:** [SEEHDSLMReferralOutcome](StructureDefinition-SEEHDSLMReferralOutcome.md) (v3.2) | [SEEHDSLMReferralOutcomeV31](StructureDefinition-SEEHDSLMReferralOutcomeV31.md) (v3.1, se [Övriga aktiva versioner](#version-3-1))
 **Krävs för NPÖ:** Ja (v3.1) | **Krävs för 1177 Journal:** Ja (v3.1)
 **EHDS-koppling:** Remissvar – relaterar till vårdprocess och resultat (ej separat EHDS-huvudkategori)

-------

### Resurshierarki

```
SEEHDSDiagnosticReportReferral (1 per referralOutcome)
  └── basedOn → ServiceRequest (logisk referens via referral.referralId)
  └── performer → PractitionerRole (accountableHealthcareProfessional)

```

Varje `referralOutcome`-post i svaret ger upphov till en `DiagnosticReport`. Om `referralOutcomeBody.act`-poster finns med multimedia representeras dessa som `DiagnosticReport.presentedForm`-bilagor eller via extension – se [REF-001](#öppna-frågor).

-------

### Mappningstabell – referralOutcomeHeader (PatientSummaryHeader)

| | | | |
| :--- | :--- | :--- | :--- |
| `referralOutcomeHeader.documentId` | 1..1 | `DiagnosticReport.identifier[0].value` | Källsystemets dokumentidentifierare |
| `referralOutcomeHeader.sourceSystemHSAId` | 1..1 | `DiagnosticReport.meta.source` | Format:`https://tjanstekatalogen.inera.se/Endpoint/{hsaId}` |
| `referralOutcomeHeader.documentTitle` | 0..1 | `DiagnosticReport.code.text` | Används om`referralOutcomeBody.referralOutcomeTitle`saknas, se[Titel-prioritering](#titel) |
| `referralOutcomeHeader.documentTime` | 1..1 | `DiagnosticReport.issued` | YYYYMMDDHHMMSS → ISO 8601 (Europe/Stockholm), se[GENERAL-001](#öppna-frågor) |
| `referralOutcomeHeader.patientId.id` | 1..1 | `DiagnosticReport.subject.identifier.value` | Personnummer eller samordningsnummer |
| `referralOutcomeHeader.patientId.type` | 1..1 | `DiagnosticReport.subject.identifier.system` | OID→URI, se tabell nedan |
| `referralOutcomeHeader.accountableHealthcareProfessional.authorTime` | 1..1 | `Provenance.recorded` | Tidpunkt för ansvarig yrkesutövare; YYYYMMDDHHMMSS → ISO 8601 |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId` | 0..1 | `PractitionerRole.identifier.value` | Logisk referens via HSA-id; DiagnosticReport.performer → Reference(PractitionerRole) |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalName` | 0..1 | `PractitionerRole.practitioner.display` | Visningsnamn för ansvarig yrkesutövare |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode` | 0..1 | `PractitionerRole.code` | Yrkesrollskod |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId` | 0..1 | `PractitionerRole.organization.identifier.value` | Organisationsenhetens HSA-id |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName` | 0..1 | `PractitionerRole.organization.display` | Organisationsenhetens namn |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom` | 0..1 | Ej mappad | Telefonnummer till org-enhet; ingen standardiserad plats på DiagnosticReport; kan läggas på Organization.telecom om Organization-instans skapas. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail` | 0..1 | Ej mappad | E-post till org-enhet; kan läggas på Organization.telecom om Organization-instans skapas. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress` | 0..1 | Ej mappad | Adress till org-enhet; kan läggas på Organization.address om Organization-instans skapas |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation` | 0..1 | Ej mappad | Plats/lokation för org-enhet; kan läggas på Organization.address.city om Organization-instans skapas |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | 0..1 | `Provenance.agent[author].who.identifier` | Inre Sparr – informationsägande vårdenhet |
| `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | 0..1 | `Provenance.agent[custodian].who.identifier` | Yttre Sparr – juridiskt ansvarig vårdgivare |
| `referralOutcomeHeader.legalAuthenticator.signatureTime` | 1..1 (om legalAuth) | `DiagnosticReport.extension[attested].attestedTime` | Signeringstidpunkt; YYYYMMDDHHMMSS → ISO 8601 |
| `referralOutcomeHeader.legalAuthenticator.legalAuthenticatorHSAId` | 0..1 | `DiagnosticReport.extension[attested].attestorHSAId` | HSA-id för signerare |
| `referralOutcomeHeader.legalAuthenticator.legalAuthenticatorName` | 0..1 | Ej mappad | Namn i klartext – HSA-id räcker för logisk referens |
| `referralOutcomeHeader.legalAuthenticator.legalAuthenticatorRoleCode` | 0..0 | N/A | Ej tillämpligt enligt TKB (0..0) |
| `referralOutcomeHeader.approvedForPatient` | 1..1 | `DiagnosticReport.meta.security` | PDL-kontroll – se[PDL-001](#öppna-frågor) |
| `referralOutcomeHeader.careContactId` | 0..1 | `DiagnosticReport.encounter.identifier.value` | Logisk referens till vårdkontakt |
| `referralOutcomeHeader.nullified` | 0..0 | N/A | Ej tillämpligt enligt TKB (0..0) |
| `referralOutcomeHeader.nullifiedReason` | 0..0 | N/A | Ej tillämpligt enligt TKB (0..0) |

-------

### Mappningstabell – referralOutcomeBody

#### Svarstext och klassificering

| | | | |
| :--- | :--- | :--- | :--- |
| `referralOutcomeBody.referralOutcomeTypeCode` | 1..1 | `DiagnosticReport.status` | SS=`final`, SR=`preliminary`; se[Härledda fält](#diagnosticreportstatus-från-referraloutcometypecode) |
| `referralOutcomeBody.referralOutcomeTitle` | 0..1 | `DiagnosticReport.code.text` | Går före`documentTitle`, se[Titel-prioritering](#titel) |
| `referralOutcomeBody.referralOutcomeText` | 1..1 | `DiagnosticReport.conclusion` | Fritext remissvar/utlåtande |

#### Klinisk information (clinicalInformation)

| | | | |
| :--- | :--- | :--- | :--- |
| `referralOutcomeBody.clinicalInformation[i].clinicalInformationCode` | 1..1 | `DiagnosticReport.conclusionCode[i]` | Klinisk informationskod (t.ex. diagnoskod) |
| `referralOutcomeBody.clinicalInformation[i].clinicalInformationText` | 1..1 | `DiagnosticReport.conclusion`(sammanslagen) | Fritextbeskrivning av klinisk information; konkateneras med referralOutcomeText; se[clinicalInformation-sammanslagning](#clinicalinformation-sammanslagning) |

#### Åtgärder (act)

| | | | |
| :--- | :--- | :--- | :--- |
| `referralOutcomeBody.act[i].actId` | 0..1 | `DiagnosticReport.presentedForm[i].url` | Åtgärdsidentifierare; se[REF-001](#öppna-frågor) |
| `referralOutcomeBody.act[i].actCode` | 0..1 | `DiagnosticReport.extension[act][i].actCode` | Klinisk åtgärdskod (KVÅ eller lokalt kodsystem); kräver lokal extension |
| `referralOutcomeBody.act[i].actText` | 1..1 | `DiagnosticReport.presentedForm[i].title` | Fritextbeskrivning av åtgärd; se[REF-001](#öppna-frågor) |
| `referralOutcomeBody.act[i].actTime` | 0..1 | `DiagnosticReport.extension[act][i].actTime` | Tidpunkt för åtgärd; YYYYMMDDHHMMSS → ISO 8601; kräver lokal extension |
| `referralOutcomeBody.act[i].actResult[j].mediaType` | 1..1 | `DiagnosticReport.presentedForm[i].contentType` | MIME-typ för resultatet (t.ex.`application/pdf`,`image/jpeg`) |
| `referralOutcomeBody.act[i].actResult[j].value` | 0..1 | `DiagnosticReport.presentedForm[i].data` | Binärdata base64-kodat; XOR med reference |
| `referralOutcomeBody.act[i].actResult[j].reference` | 0..1 | `DiagnosticReport.presentedForm[i].url` | URL till externt dokument; XOR med value |

#### Attestering (attested)

| | | | |
| :--- | :--- | :--- | :--- |
| `referralOutcomeBody.attested.attestedTime` | 1..1 (om attested) | `DiagnosticReport.extension[attested].attestedTime` | Tid för attestering; YYYYMMDDHHMMSS → ISO 8601 |
| `referralOutcomeBody.attested.attesterHSAId` | 0..1 | `DiagnosticReport.extension[attested].attestorHSAId` | Attesterarens HSA-id |
| `referralOutcomeBody.attested.attesterName` | 0..1 | Ej mappad | Attesterarens namn i klartext – HSA-id räcker för logisk referens |

#### Kopplad remiss (referral)

| | | | |
| :--- | :--- | :--- | :--- |
| `referralOutcomeBody.referral.referralId` | 1..1 | `DiagnosticReport.basedOn.identifier` | Logisk referens till ursprungsremiss (ServiceRequest) via remissens id |
| `referralOutcomeBody.referral.referralReason` | 1..1 | Ej mappad till DiagnosticReport | Remissorsak tillhör ursprungsremissen (ServiceRequest.note); repeteras ej i svaret |
| `referralOutcomeBody.referral.referralTime` | 0..1 | Ej mappad till DiagnosticReport | Remisstid tillhör ursprungsremissen (ServiceRequest.authoredOn) |
| `referralOutcomeBody.referral.referralAuthor.authorTime` | 1..1 | Ej mappad till DiagnosticReport | Remittentens åtgärdstidpunkt tillhör ursprungsremissen |
| `referralOutcomeBody.referral.referralAuthor.healthcareProfessionalHSAId` | 0..1 | Ej mappad till DiagnosticReport | Remittentens HSA-id tillhör ursprungsremissen (ServiceRequest.requester) |
| `referralOutcomeBody.referral.referralAuthor.healthcareProfessionalName` | 0..1 | Ej mappad till DiagnosticReport | Remittentens namn tillhör ursprungsremissen |
| `referralOutcomeBody.referral.referralAuthor.healthcareProfessionalRoleCode` | 0..1 | Ej mappad till DiagnosticReport | Remittentens yrkesroll tillhör ursprungsremissen |
| `referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit` | 0..1 | Ej mappad till DiagnosticReport | Remittentens org-enhet tillhör ursprungsremissen; se[Referral → ServiceRequest](#referral--servicerequest) |
| `referralOutcomeBody.referral.referralAuthor.healthcareProfessionalCareUnitHSAId` | 0..0 | N/A | Ej tillämpligt enligt TKB (0..0) |
| `referralOutcomeBody.referral.referralAuthor.healthcareProfessionalCareGiverHSAId` | 0..0 | N/A | Ej tillämpligt enligt TKB (0..0) |
| `referralOutcomeBody.referral.careContactId` | 0..1 | `DiagnosticReport.encounter.identifier.value` | Alternativ källa för vårdkontaktsreferens om header.careContactId saknas |

> **Obs – DiagnosticReport.code:** Sätts alltid till LOINC `11488-4` ("Consult note") som fast kod för remissvar. Det finns inget valfritt kodningsfält i TKB för utlåtandetypen utöver `referralOutcomeTypeCode`.

> Alla `referralOutcomeBody.referral.*`-fält utom `referralId` och `careContactId` är attribut till ursprungsremissen. En logisk referens via `DiagnosticReport.basedOn` → `ServiceRequest.identifier` är tillräcklig. Bryggan skapar en minimal stub-ServiceRequest om ingen matchning finns.

-------

### Mappningstabell – result

| | | | |
| :--- | :--- | :--- | :--- |
| `result.resultCode` | 1..1 | Ej mappad | Teknisk responskod – hanteras av transportlagret |
| `result.errorCode` | 0..1 | Ej mappad | Teknisk felkod – hanteras av transportlagret |
| `result.logId` | 1..1 | Ej mappad | Teknisk spårnings-UUID – hanteras av transportlagret |
| `result.subCode` | 0..1 | Ej mappad | Teknisk subkod – hanteras av transportlagret |
| `result.message` | 0..1 | Ej mappad | Teknisk felbeskrivning – hanteras av transportlagret |

-------

### Härledda fält / Designbeslut

#### DiagnosticReport.status (från referralOutcomeTypeCode)

| | | |
| :--- | :--- | :--- |
| `SS` | Specialistutlåtande/svar (slutgiltig bedömning) | `final` |
| `SR` | Specialistremissvar (preliminärt/delsvar) | `preliminary` |

#### Titel-prioritering (DiagnosticReport.code.text)

Titeln mappas till `DiagnosticReport.code.text`, rapportens namn i klartext. `code.coding` är fortfarande den fasta LOINC-koden `11488-4` ("Consult note"). Texten sätts enligt följande prioritet:

1. `referralOutcomeBody.referralOutcomeTitle`(om satt)
1. `referralOutcomeHeader.documentTitle`(om satt)
1. Annars LOINC-kodens display, "Consult note"

#### act-poster och multimedia (REF-001)

`referralOutcomeBody.act 0..*` representerar utförda åtgärder med eventuella bilagor. FHIR `DiagnosticReport` har inget dedikerat element för åtgärdslistor. Designbeslut:

* `act[i].actText` + multimedia (`actResult`) → `DiagnosticReport.presentedForm[i]`
* `act[i].actCode` + `act[i].actTime` → `DiagnosticReport.extension[act]` (kräver custom extension)
* `actResult.value` (base64Binary) → `presentedForm[i].data`
* `actResult.reference` (url) → `presentedForm[i].url`

Se [REF-001](#öppna-frågor) för öppen fråga.

#### clinicalInformation-sammanslagning

`clinicalInformation 0..*` innehåller kliniska fynd/slutsatser med kod och fritext. Koden mappas till `DiagnosticReport.conclusionCode`; fritexterna konkateneras med `referralOutcomeText` i `DiagnosticReport.conclusion`:

```
{referralOutcomeText}
\n
[{clinicalInformationCode.display}]: {clinicalInformationText}   ← per clinicalInformation-post

```

#### Referral → ServiceRequest

Om `referralOutcomeBody.referral.referralId` finns skapas en logisk referens till en `ServiceRequest` via `DiagnosticReport.basedOn`. Bryggan ansvarar för att matcha `referralId` mot befintliga ServiceRequest-instanser (från GetReferralOutcome eller GetRequestActivities) eller skapa en minimal stub-ServiceRequest med enbart identifier satt. Remissens övriga fält (`referralReason`, `referralTime`, `referralAuthor.*`) tillhör ServiceRequest och repeteras inte i DiagnosticReport.

-------

### PDL och Sparr

PDL-styrning i GetReferralOutcome utgår från `accountableHealthcareProfessional`-blockets HSA-id:n i headern (standard PatientSummaryHeader-mönster):

| | | |
| :--- | :--- | :--- |
| Yttre Sparr (vårdgivare) | `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | `Provenance.agent[custodian].who.identifier` |
| Inre Sparr (vårdenhet) | `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | `Provenance.agent[author].who.identifier` |
| Patientgodkännande | `referralOutcomeHeader.approvedForPatient`(boolean) | `DiagnosticReport.meta.security`; se[PDL-001](#öppna-frågor) |

-------

### Provenance

| | | |
| :--- | :--- | :--- |
| `agent[custodian]` | Juridiskt ansvarig vårdgivare | `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` |
| `agent[author]` | Informationsägande vårdenhet | `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` |

`Provenance.target` refererar `DiagnosticReport` via `urn:uuid:{resurs.id}`.
 `Provenance.recorded` = `referralOutcomeHeader.accountableHealthcareProfessional.authorTime` (ISO 8601).
 `Provenance.agent[author].onBehalfOf` = `referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId`.

-------

### Övriga aktiva versioner – GetReferralOutcome 3.1

Mappningstabellerna ovan utgår från GetReferralOutcome 3.2. [Startsidan](index.md) anger 3.1 som aktiv version för både NPÖ och 1177 Journal. Version 3.1 beskrivs av den logiska modellen [SEEHDSLMReferralOutcomeV31](StructureDefinition-SEEHDSLMReferralOutcomeV31.md) (genererad från `GetReferralOutcomeResponder_3.1.xsd` i `riv.clinicalprocess.healthcond.actoutcome` 4.2, den sista domänversionen med 3.1).

| | | | |
| :--- | :--- | :--- | :--- |
| `referralOutcome.referralOutcomeBody.referralOutcomeTitle` | 1..1 String | 0..1 String | Ändrad kardinalitet |

Den enda skillnaden är att `referralOutcomeBody.referralOutcomeTitle` är obligatorisk i 3.1. Alla element mappas enligt tabellerna ovan. Eftersom titeln alltid finns i 3.1 kommer `DiagnosticReport.code.text` alltid från `referralOutcomeTitle`, se [Titel-prioritering](#titel).

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
| REF-001 | **`act 0..*` saknar standard DiagnosticReport-element.**`referralOutcomeBody.act`innehåller kodad åtgärd (`actCode`), fritext (`actText`), tidpunkt (`actTime`) och eventuell multimedia (`actResult`med`mediaType`/`value`/`reference`). Nuvarande lösning: textinnehåll och bilagor →`presentedForm`, kodad åtgärd → custom extension. Alternativ: en`Procedure`-resurs per`act`-post länkad via`DiagnosticReport.result`. Kräver beslut. |
| PDL-001 | **Beslutat:**`approvedForPatient = false`→`meta.security``v3-ActCode#NOPAT`. Se[Mappningsissues](mapping-issues.md#stangda-fragor). |
| GENERAL-001 | **Beslutat – tidszon.**RIVTA-tidsstämplar tolkas som lokal tid i`Europe/Stockholm`(sommartid beaktas).`dateTime`får explicit offset (`+01:00`/`+02:00`);`instant`anger samma tidpunkt, helst med samma offset-form. Se[Tidsstämplar och tidszon](mappings.md#tidszon). |

### Föreslagna nya issues

| | |
| :--- | :--- |
| REF-002 | **`referralOutcomeBody.attested.attesterName` vs. header-signatär.**Svaret har två potentiella signatärstrukturer:`referralOutcomeHeader.legalAuthenticator`och`referralOutcomeBody.attested`. Nuvarande beslut: båda mappas till samma`DiagnosticReport.extension[attested]`. Om de kan representera olika signatärer (t.ex. juridisk autentiserare vs. klinisk attestant) kan detta skapa konflikter. Behöver klargöras med TKB-förvaltningen om de är semantiskt ekvivalenta eller distinkta. |
| REF-003 | **Stängd – `referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit`.**Den logiska modellen har nu alla OrgUnitType-fält (orgUnitHSAId, orgUnitName, orgUnitTelecom, orgUnitEmail, orgUnitAddress, orgUnitLocation) enligt XSD:n. Fälten tillhör ursprungsremissen och mappas inte till DiagnosticReport. |
| REF-004 | **Sammanslagen med GENERAL-008:**se[Organisationsenheter, kontaktuppgifter och historik](mappings.md#organisation). |

