# GetFunctionalStatus – Funktionstillstånd och ADL - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## GetFunctionalStatus – Funktionstillstånd och ADL

**Tjänstekontrakt:** `clinicalprocess:healthcond:description` GetFunctionalStatus v2.0
 **FHIR-profil:** [SEEHDSConditionFunctional](StructureDefinition-SEEHDSConditionFunctional.md)
 **Logisk modell:** [SEEHDSLMFunctionalStatus](StructureDefinition-SEEHDSLMFunctionalStatus.md)
 **Krävs för NPÖ:** Ja (v2.0) | **Krävs för 1177 Journal:** Ja (v2.0)
 **EHDS-koppling:** Patient Summary – Funktionstillstånd (ICF-baserad)

-------

### Härledda fält / Designbeslut

#### En Condition per functionalStatusAssessment

Varje `functionalStatusAssessment`-post mappas till en `Condition`-resurs med profilen `SEEHDSConditionFunctional`. Roten för ett svar är `functionalStatusAssessment 0..*`.

#### assessmentCategory styr körningens innehåll

`functionalStatusAssessmentBody.assessmentCategory` avgör vilka underelement som är relevanta:

| | | |
| :--- | :--- | :--- |
| `pad-pad`(PADL) | `padl 0..*` | `Condition.note`(se[FUNC-001](#öppna-frågor)) |
| `fun-fun`(Funktionsnedsättning) | `disability 0..1` | `Condition.code`(ICF-kod) |

Kategorin i sig mappas alltid till `Condition.category` från kodverket `AssessmentCategoryCS`.

#### clinicalStatus och verificationStatus

Inget explicit statusfält finns i TKB:n. Fälten härleds:

| | | |
| :--- | :--- | :--- |
| `Condition.clinicalStatus` | `active` | Posterna är aktiva bedömningar vid svarstillfället |
| `Condition.verificationStatus` | `confirmed` | RIVTA-svar representerar bekräftade journaluppgifter |

#### PADL-poster (FUNC-001 – Beslutat)

`padl`-blockets `typeOfAssessment` och `assessment` mappas till `Condition.note` med formatet `[typeOfAssessment]: assessment` per post. `functionalStatusAssessmentBody.comment` mappas separat till `Condition.note[0]` (helbedömningskommentar); därefter en post per `padl`-element.

Alternativet med separata `Observation`-resurser per PADL-post ger bättre strukturerbarhet men ökar resurskomplexiteten avsevärt. Det kan omprövas om strukturerad sökning på PADL-typ krävs.

-------

### Mappningstabell – functionalStatusAssessmentHeader

| | | | |
| :--- | :--- | :--- | :--- |
| `functionalStatusAssessmentHeader.documentId` | 1..1 | `Condition.identifier[0].value` | Källsystemets dokumentidentifierare |
| `functionalStatusAssessmentHeader.sourceSystemHSAId` | 1..1 | `Condition.meta.source` | Format:`https://tjanstekatalogen.inera.se/Endpoint/{hsaId}` |
| `functionalStatusAssessmentHeader.documentTime` | 1..1 | `Condition.extension[assertedDate]` | Bedömningstidpunkt/händelsetidpunkt; YYYYMMDDHHMMSS → ISO 8601, se[GENERAL-001](#öppna-frågor) |
| `functionalStatusAssessmentHeader.patientId.id` | 1..1 | `Condition.subject.identifier.value` | Patientens identifierare (12 tecken), t.ex. personnummer eller samordningsnummer.`patientId`är av RIVTA-typen`PersonIdType {id, type}` |
| `functionalStatusAssessmentHeader.patientId.type` | 1..1 | `Condition.subject.identifier.system` | OID för typ av identifierare (t.ex.`1.2.752.129.2.1.3.1`för personnummer); OID→URI, se tabell nedan |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.authorTime` | 1..1 | `Condition.recordedDate` | Registreringstidpunkt; YYYYMMDDHHMMSS → ISO 8601 (Europe/Stockholm), se[GENERAL-001](#öppna-frågor) |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId` | 0..1 | `Condition.recorder`(Reference(PractitionerRole)) | Logisk referens via HSA-id |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalName` | 0..1 | `PractitionerRole.practitioner.display` | Visningsnamn |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode` | 0..1 | `PractitionerRole.code` | Yrkesrollskod |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId` | 1..1 | `PractitionerRole.organization.identifier.value` | Organisationsenhetens HSA-id |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName` | 1..1 | `PractitionerRole.organization.display` | Organisationsenhetens namn |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom` | 0..1 | Ej mappad | Kontaktuppgift på enhetsnivå – ingår inte i referensen. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail` | 0..1 | Ej mappad | Se`orgUnitTelecom`. Utelämnas normalt vid patientens egen åtkomst (kan ändras av EHDS-krav), se[GENERAL-008](mappings.md#organisation). |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress` | 0..1 | Ej mappad | Kontaktuppgift på enhetsnivå, se[GENERAL-008](mappings.md#organisation) |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation` | 0..1 | Ej mappad | Kontaktuppgift på enhetsnivå, se[GENERAL-008](mappings.md#organisation) |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | 0..1 | `Provenance.agent[author].who.identifier` | Inre Sparr – vårdenhet |
| `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | 0..1 | `Provenance.agent[custodian].who.identifier` | Yttre Sparr – vårdgivare |
| `functionalStatusAssessmentHeader.legalAuthenticator.signatureTime` | 1..1 (om legalAuth) | `Condition.extension[assertedDate]` | Signeringstidpunkt; YYYYMMDDHHMMSS → ISO 8601 (om legalAuthenticator finns, prioriteras framför documentTime) |
| `functionalStatusAssessmentHeader.legalAuthenticator.legalAuthenticatorHSAId` | 0..1 | `Condition.asserter`(Reference(PractitionerRole)) | Logisk referens via HSA-id |
| `functionalStatusAssessmentHeader.legalAuthenticator.legalAuthenticatorName` | 0..1 | Ej mappad | Namn i klartext – HSA-id räcker för logisk referens |
| `functionalStatusAssessmentHeader.approvedForPatient` | 1..1 | `Condition.meta.security` | `false`→ kod`NOPAT`från`http://terminology.hl7.org/CodeSystem/v3-ActCode`; se PDL-001 |
| `functionalStatusAssessmentHeader.careContactId` | 0..1 | `Condition.encounter.identifier.value` | Logisk referens till vårdkontakt |
| `functionalStatusAssessmentHeader.documentTitle` | 0..0 | N/A | Ej tillämpligt för detta TK (markerat 0..0 i logisk modell) |
| `functionalStatusAssessmentHeader.nullified` | 0..0 | N/A | Ej tillämpligt för detta TK |
| `functionalStatusAssessmentHeader.nullifiedReason` | 0..0 | N/A | Ej tillämpligt för detta TK |

-------

### Mappningstabell – functionalStatusAssessmentBody

| | | | |
| :--- | :--- | :--- | :--- |
| `functionalStatusAssessmentBody.assessmentCategory` | 1..1 | `Condition.category` | Kodverk`AssessmentCategoryCS`;`pad-pad`eller`fun-fun` |
| `functionalStatusAssessmentBody.comment` | 0..1 | `Condition.note[0].text` | Fritext-kommentar för hela bedömningen. Villkor: Gäller enbart vid assessmentCategory = 'pad-pad'. |

#### Underelement – padl (vid assessmentCategory = pad-pad)

| | | | |
| :--- | :--- | :--- | :--- |
| `functionalStatusAssessmentBody.padl` | 0..* | `Condition.note[n]` | Varje PADL-post enkodas som en note; se[FUNC-001](#öppna-frågor) |
| `functionalStatusAssessmentBody.padl.typeOfAssessment` | 1..1 | `Condition.note[n].text`(prefix) | Typ av PADL-bedömning; läggs som prefix i note-texten, t.ex.`[typeOfAssessment]: assessment`. Tillåtna värden (Regel 2): 'personlig hygien', 'på/avklädning', 'förflyttning', 'toalettbesök', 'födointag' |
| `functionalStatusAssessmentBody.padl.assessment` | 1..1 | `Condition.note[n].text`(suffix) | Textuell PADL-bedömning |

#### Underelement – disability (vid assessmentCategory = fun-fun)

| | | | |
| :--- | :--- | :--- | :--- |
| `functionalStatusAssessmentBody.disability.disabilityAssessment` | 1..1 | `Condition.code` | ICF-kod för funktionsnedsättning; se underelement nedan |
| `functionalStatusAssessmentBody.disability.disabilityAssessment.code` | — | `Condition.code.coding.code` | ICF-kod, t.ex.`b310` |
| `functionalStatusAssessmentBody.disability.disabilityAssessment.codeSystem` | — | `Condition.code.coding.system` | OID`1.2.752.116.1.1.3`→`urn:oid:1.2.752.116.1.1.3`(ICF, se tabell nedan) |
| `functionalStatusAssessmentBody.disability.disabilityAssessment.displayName` | 0..1 | `Condition.code.coding.display` | Kodverkets officiella benämning |
| `functionalStatusAssessmentBody.disability.comment` | 0..1 | `Condition.note[n].text` | Kommentar specifik för funktionsnedsättningsbedömningen |

> **CVType-restriktion för `disabilityAssessment`:** `codeSystemName` och `codeSystemVersion` är förbjudna (0..0) i detta fält per TKB. Använd enbart `code`, `codeSystem`, `displayName` och `originalText`.

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

### PDL och Sparr

PDL-styrning i GetFunctionalStatus utgår från `accountableHealthcareProfessional`-blockets HSA-id:n i headern (samma mönster som övriga PatientSummaryHeader-kontrakt):

| | | |
| :--- | :--- | :--- |
| Yttre Sparr (vårdgivare) | `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` | `Provenance.agent[custodian].who.identifier` |
| Inre Sparr (vårdenhet) | `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` | `Provenance.agent[author].who.identifier` |
| Patientgodkännande | `functionalStatusAssessmentHeader.approvedForPatient`(boolean) | `Condition.meta.security`;`false`→`NOPAT`(v3-ActCode) |

-------

### Provenance

| | | |
| :--- | :--- | :--- |
| `agent[custodian]` | Juridiskt ansvarig vårdgivare | `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId` |
| `agent[author]` | Informationsägande vårdenhet | `functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId` |

`Provenance.target` refererar Condition via `urn:uuid:{Condition.id}`.
 `Provenance.recorded` = `functionalStatusAssessmentHeader.accountableHealthcareProfessional.authorTime` (ISO 8601).

-------

### OID-till-URI-tabell

| | |
| :--- | :--- |
| `1.2.752.129.2.1.3.1` | `http://electronichealth.se/identifier/personnummer` |
| `1.2.752.129.2.1.3.3` | `http://electronichealth.se/identifier/samordningsnummer` |
| `1.2.752.129.2.1.4.1` | `urn:oid:1.2.752.29.4.19` |
| `1.2.752.116.1.1.3` | `urn:oid:1.2.752.116.1.1.3` |

OID:er utan känd URI-mappning bevaras som `urn:oid:{oid}`.

-------

### Öppna frågor

| | |
| :--- | :--- |
| FUNC-001 | **Beslutat:**PADL-poster kodas som`Condition.note`med format`[typeOfAssessment]: assessment`. Se avsnitt ovan. |
| PDL-001 | **Beslutat:**`approvedForPatient = false`→`meta.security``v3-ActCode#NOPAT`. Se[Mappningsissues](mapping-issues.md#stangda-fragor). |
| GENERAL-001 | **Beslutat – tidszon.**RIVTA-tidsstämplar tolkas som lokal tid i`Europe/Stockholm`(sommartid beaktas).`dateTime`får explicit offset (`+01:00`/`+02:00`);`instant`anger samma tidpunkt, helst med samma offset-form. Se[Tidsstämplar och tidszon](mappings.md#tidszon). |

-------

### Föreslagna nya issues

| | | |
| :--- | :--- | :--- |
| FUNC-002 | `functionalStatusAssessmentHeader.legalAuthenticator.legalAuthenticatorRoleCode` | **Stängd.**Elementet finns inte i`LegalAuthenticatorType`i schemat (clinicalprocess_healthcond_description_2.1.xsd) och har tagits bort ur den logiska modellen. |

