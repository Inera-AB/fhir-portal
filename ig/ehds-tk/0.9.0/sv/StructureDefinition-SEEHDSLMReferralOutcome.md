# GetReferralOutcome - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetReferralOutcome 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMReferralOutcome.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Begränsningar

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **Differentialvy** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Begränsningar

 **ÖgonblicksbildsvyView** 

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMReferralOutcome.csv), [Excel](../StructureDefinition-SEEHDSLMReferralOutcome.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMReferralOutcome",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetReferralOutcomeResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:GetReferralOutcomeResponder:3"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMReferralOutcome",
  "version" : "0.9.0",
  "name" : "SEEHDSLMReferralOutcome",
  "title" : "GetReferralOutcome",
  "status" : "draft",
  "date" : "2026-11-16T16:15:01+00:00",
  "publisher" : "Inera AB",
  "contact" : [{
    "name" : "Inera AB",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.inera.se"
    }]
  }],
  "description" : "Logisk modell för tjänstekontraktet GetReferralOutcome\n(RIV-TA urn:riv:clinicalprocess:healthcond:actoutcome:GetReferralOutcome:3).\nRepresenterar responsens informationsstruktur — svar på konsultationsremiss\noch begäran om övertagande av vårdansvar. Meddelandeformatet är kompatibelt\nmed HL7v3 CDA v.2.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "kind" : "logical",
  "abstract" : false,
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMReferralOutcome",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMReferralOutcome",
      "path" : "SEEHDSLMReferralOutcome",
      "short" : "GetReferralOutcome",
      "definition" : "Logisk modell för tjänstekontraktet GetReferralOutcome\n(RIV-TA urn:riv:clinicalprocess:healthcond:actoutcome:GetReferralOutcome:3).\nRepresenterar responsens informationsstruktur — svar på konsultationsremiss\noch begäran om övertagande av vårdansvar. Meddelandeformatet är kompatibelt\nmed HL7v3 CDA v.2."
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome",
      "path" : "SEEHDSLMReferralOutcome.referralOutcome",
      "short" : "Remissvar (ett per remiss)",
      "definition" : "Returnerar en patients konsultationsremissvar.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader",
      "short" : "PatientSummaryHeader",
      "definition" : "Innehåller basinformation om dokumentet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.documentId",
      "short" : "Dokumentets unika id",
      "definition" : "Dokumentets identitet som är unik inom källsystemet Identifieraren ska vara konsistent och beständigt mellan olika majorversioner av ett kontrakt. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska vara konsistent och beständigt mellan olika kontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.sourceSystemHSAId",
      "short" : "Källsystemets HSA-id",
      "definition" : "HSAid för det system som dokumentet är skapat i.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.documentTitle",
      "short" : "Dokumentets titel",
      "definition" : "Titel som beskriver den information som sänds i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.documentTime",
      "short" : "Dokumentets tidpunkt",
      "definition" : "Tidpunkten då remissvaret inkom till remittentens vårdinformationssystem.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.patientId",
      "short" : "Patientens id",
      "definition" : "Identifierare för patient.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional",
      "short" : "Ansvarig hälso- och sjukvårdspersonal",
      "definition" : "Information om den hälso- och sjukvårdsperson som skapat informationen i dokumentet, nedan kallas författare. Vid uppdatering av tidigare skapade dokument avses den hälso- och sjukvårdsperson som senast uppdaterade informationen",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt för dokumentation",
      "definition" : "Tidpunkt vid vilken remissvaret skapades eller senast uppdaterades i remissmottagarens vårdinformationssystem.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "Personalens HSA-id",
      "definition" : "HSA-id hälso-och sjukvårdspersonal. Ska anges om tillgänglig.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Personalens namn",
      "definition" : "Namn på författaren. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Yrkesroll",
      "definition" : "Information om personens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4) användas, se referens [R 5]. Om kodverk saknas anges befattning i originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Organisationsenhet",
      "definition" : "Den organisation som angiven hälso-och sjukvårdsperson är uppdragstagare på. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "OrgUnit HSA-id",
      "definition" : "HSA-id för organisationsenhet. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "OrgUnit namn",
      "definition" : "Namn på organisationsenhet. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Adress",
      "definition" : "Postadress till organisationsenhet. Skrivs på ett så naturligt sätt som möjligt, exempelvis: ”Storgatan 12 468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "Vårdenhetens HSA-id",
      "definition" : "Regel 1: Krävs för spärrhantering och åtkomstkontroll.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "Vårdgivarens HSA-id",
      "definition" : "Regel 1: Krävs för spärrhantering och åtkomstkontroll.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.legalAuthenticator",
      "short" : "Juridiskt ansvarig",
      "definition" : "Information om vem som signerat informationen i dokumentet. Signering = signering av remissvar. Information om vidimering sker i attributet attested i bodyn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.legalAuthenticator.signatureTime",
      "short" : "Signeringstidpunkt",
      "definition" : "Tidpunkt för signering\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id för person som signerat dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namn",
      "definition" : "Namnen i klartext för signerande person",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.legalAuthenticator.legalAuthenticatorRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.legalAuthenticator.legalAuthenticatorRoleCode",
      "short" : "Befattning för signerande person",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.approvedForPatient",
      "short" : "Godkänd för patientvisning",
      "definition" : "Anger om information får delas till patient. Värdet sätts i sådant fall till true, i annat fall till false.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.careContactId",
      "short" : "Vårdkontaktid",
      "definition" : "Identitetet för hälso-och sjukvårdskontakt som föranlett den information som omfattas av dokumentet. Identiteten är unik inom källsystemet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.nullified",
      "short" : "Makulerad",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeHeader.nullifiedReason",
      "short" : "Makuleringsorsak",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody",
      "short" : "Remissvarsinformation",
      "definition" : "Remissvarsinformation",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referralOutcomeTypeCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referralOutcomeTypeCode",
      "short" : "Typ av remissvar",
      "definition" : "Kodas enligt referralOutcomeTypeCodeEnum. Se QUESTIONS.md ASSUME-002 angående canonicalURL.\nTillåtna värden enligt XSD: SS, SR.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referralOutcomeTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referralOutcomeTitle",
      "short" : "Remissvarets titel",
      "definition" : "Text som beskriver vilken specialitet som utlåtandet gäller. Typen av specialitet som anlitats anges i text. Exempel: Patologi Klinisk fysik Logopedi",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referralOutcomeText",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referralOutcomeText",
      "short" : "Remissvarets text",
      "definition" : "Text som beskriver det sammanfattande utlåtandet kring undersökningsresultatet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.clinicalInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.clinicalInformation",
      "short" : "Klinisk information",
      "definition" : "Klinisk information för remissvaret. Dessa kliniska data är direkt kopplat till svaret.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.clinicalInformation.clinicalInformationCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.clinicalInformation.clinicalInformationCode",
      "short" : "Klinisk informationskod",
      "definition" : "Kod för åtgärd. Koden anges i code. Kodverkets OID i codeSystem.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.clinicalInformation.clinicalInformationCode.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.clinicalInformation.clinicalInformationCode.code",
      "short" : "Kod",
      "definition" : "Kod.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.clinicalInformation.clinicalInformationCode.codeSystem",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.clinicalInformation.clinicalInformationCode.codeSystem",
      "short" : "Kod kan komma från kodverket ICD-10 (1.2.752.116.1.1.1.1.3) men andra kodverk kan förekomma.",
      "definition" : "Tillåtna värden enligt XSD: 1.2.752.116.1.1.1.1.3.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.clinicalInformation.clinicalInformationText",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.clinicalInformation.clinicalInformationText",
      "short" : "Klinisk informationstext",
      "definition" : "Beskrivning av klinisk information",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act",
      "short" : "Åtgärd",
      "definition" : "Utförd åtgärd",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actId",
      "short" : "Åtgärdens id",
      "definition" : "Åtgärdens identitet som är unik inom det lokala avsändande systemet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actCode",
      "short" : "Åtgärdskod",
      "definition" : "Kod för åtgärd. Koden anges i code. Kodverkets OID anges i codeSystem.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actCode.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actCode.code",
      "short" : "Nullvärde är tillåtet om kod ej är tillgänglig, och åtgärdskodstext ska då skrivas i <actText>",
      "definition" : "Nullvärde är tillåtet om kod ej är tillgänglig, och åtgärdskodstext ska då skrivas i `actText`.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actCode.codeSystem",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actCode.codeSystem",
      "short" : "Lämpliga kodverk kan vara: KVÅ (1.2.752.116.1.3.2.1.4) men andra kodverk kan förekomma.",
      "definition" : "Lämpliga kodverk kan vara: KVÅ (1.2.752.116.1.3.2.1.4) men andra kodverk kan förekomma.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actText",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actText",
      "short" : "Åtgärdstext",
      "definition" : "Text som anger namnet på den kod som anges i attributet åtgärdskod. Beskrivning av åtgärd anges här om ingen kod har angetts i attributet åtgärdskod.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actTime",
      "short" : "Tidpunkt för åtgärd",
      "definition" : "Tidpunkt då åtgärd genomfördes\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actResult",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actResult",
      "short" : "Resultat (multimedia)",
      "definition" : "Resultat av åtgärd. Data i form av bifogade bilder eller liknande.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getreferraloutcome-actresult-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av value och reference ska anges",
        "expression" : "value.exists() xor reference.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMReferralOutcome"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actResult.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actResult.rivId",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actResult.mediaType",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actResult.mediaType",
      "short" : "Medietyp",
      "definition" : "Typ av multimedia\nTillåtna värden enligt XSD: application/dicom, application/msword, application/pdf, audio/basic, audio/k32adpcm, audio/mpeg, image/g3fax, image/gif, image/jpeg, image/png, image/tiff, model/vrml, multipart/x-hl7-cda-level1, text/html, text/plain, text/rtf, text/sgml, text/x-hl7-ft, text/xml, video/mpeg, video/x-avi.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actResult.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actResult.value",
      "short" : "Binärt innehåll",
      "definition" : "Value är binärdata som representerar objektet. Ett och endast ett av value och reference ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBase64Binary"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actResult.reference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.act.actResult.reference",
      "short" : "Referens-URL",
      "definition" : "Referens till extern bild i form av en URL. Ett och endast ett av value och reference ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral",
      "short" : "Remissens uppgifter",
      "definition" : "Information om den remissen som ligger till grund för svaret",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralId",
      "short" : "Remissens id",
      "definition" : "Remissens identitet som är unik inom det lokala avsändade systemet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralReason",
      "short" : "Remissorsak",
      "definition" : "Text som anger aktuell frågeställning.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralTime",
      "short" : "Remisstidpunkt",
      "definition" : "Tid då remissen framställdes.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor",
      "short" : "Remittent",
      "definition" : "Information om den hälso- och sjukvårdsperson som framställt remissen som ligger till grund för svaret, nedan kallas författare.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.authorTime",
      "short" : "Tidpunkt",
      "definition" : "Tidpunkt då remissen registrerades i systemet.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id för hälso-och sjukvårdspersonal. Ska anges om tillgänglig.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalName",
      "short" : "Namn",
      "definition" : "Namn på författaren. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalRoleCode",
      "short" : "Yrkesroll",
      "definition" : "Information om personens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4) användas. Se referens [R 5]. Om kodverk saknas anges befattning i originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit",
      "short" : "Org-enhet",
      "definition" : "Den organisation som angiven hälso-och sjukvårdsperson är uppdragstagare på. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress till organisationsenhet. Skrivs på ett så naturligt sätt som möjligt, exempelvis: ”Storgatan 12 468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats för organisationsenhet",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.referralAuthor.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivare",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.referral.careContactId",
      "short" : "Vårdkontaktid",
      "definition" : "Identitet för den hälso-och sjukvårdskontakt som föranlett den information som omfattas av dokumentet. Identiteten är unik inom källsystemet. Detta ID kan användas för att genom tjänstekontaktet GetCareContacts (annan tjänstedomän) hämta kompletterandekontaktinformation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.attested",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3.1"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.attested",
      "short" : "Attestering",
      "definition" : "Information om vidimering av enskild utförd åtgärd med tillhörande resultat. Finns attester är åtgärden vidimerad. Med vidimerat menas att information om åtgärden har lästs och den som läst har tagit ansvar.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.attested.attestedTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3.1"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.attested.attestedTime",
      "short" : "Attest-tidpunkt",
      "definition" : "Tidpunkten för vidimering\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.attested.attesterHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3.1"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.attested.attesterHSAId",
      "short" : "Attesterarens HSA-id",
      "definition" : "HSA-id för person som vidimerat",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.attested.attesterName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3.1"
      }],
      "path" : "SEEHDSLMReferralOutcome.referralOutcome.referralOutcomeBody.attested.attesterName",
      "short" : "Attesterarens namn",
      "definition" : "Namn på person som vidimerat",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.result",
      "path" : "SEEHDSLMReferralOutcome.result",
      "short" : "Resultat",
      "definition" : "Innehåller information om begäran gick bra eller ej.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.result.resultCode",
      "short" : "Resultatkod (OK, INFO eller ERROR)",
      "definition" : "Kan endast vara OK, INFO eller ERROR\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.result.errorCode",
      "short" : "Felkod (sätts endast om resultCode är ERROR)",
      "definition" : "Sätts endast om resultCode är ERROR, se kapitel 4.4 för mer information.\nTillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.result.logId",
      "short" : "Log-id (UUID för felsökning)",
      "definition" : "En UUID som kan användas vid felanmälan för att användas vid felsökning av producent.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.result.subCode",
      "short" : "Subkod",
      "definition" : "Inga subkoder är specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMReferralOutcome.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMReferralOutcome.result.message",
      "short" : "Beskrivande meddelande",
      "definition" : "En beskrivande text som kan visas för användaren.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
