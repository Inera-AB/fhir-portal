# GetAlertInformation - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetAlertInformation 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMAlertInformation.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMAlertInformation.csv), [Excel](../StructureDefinition-SEEHDSLMAlertInformation.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMAlertInformation",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetAlertInformationResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:description:GetAlertInformationResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformation",
  "version" : "0.9.0",
  "name" : "SEEHDSLMAlertInformation",
  "title" : "GetAlertInformation",
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
  "description" : "Logisk modell för tjänstekontraktet GetAlertInformation\n(RIV-TA urn:riv:clinicalprocess:healthcond:description:GetAlertInformationResponder:2).\nRepresenterar responsens informationsstruktur: uppmärksamhetsinformation för en patient,\nexempelvis överkänslighet mot läkemedel, allvarlig sjukdom, behandling, smittsam sjukdom,\nvårdbegränsning eller historisk varning.\n\nBody-strukturen är XOR – exakt en av hypersensitivity, seriousDisease, treatment,\ncommunicableDisease, restrictionOfCare, unstructuredAlertInformation ska anges per post.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMAlertInformation",
      "path" : "SEEHDSLMAlertInformation",
      "short" : "GetAlertInformation",
      "definition" : "Logisk modell för tjänstekontraktet GetAlertInformation\n(RIV-TA urn:riv:clinicalprocess:healthcond:description:GetAlertInformationResponder:2).\nRepresenterar responsens informationsstruktur: uppmärksamhetsinformation för en patient,\nexempelvis överkänslighet mot läkemedel, allvarlig sjukdom, behandling, smittsam sjukdom,\nvårdbegränsning eller historisk varning.\n\nBody-strukturen är XOR – exakt en av hypersensitivity, seriousDisease, treatment,\ncommunicableDisease, restrictionOfCare, unstructuredAlertInformation ska anges per post."
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation",
      "path" : "SEEHDSLMAlertInformation.alertInformation",
      "short" : "Uppmärksamhetsinformation",
      "definition" : "Den uppmärksamhetsinformation som matchar begäran.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader",
      "short" : "Dokumenthuvud (PatientSummaryHeader)",
      "definition" : "Innehåller basinformation om dokumentet (PatientSummaryHeaderType).\nOBS: documentTitle, documentTime, nullified och nullifiedReason är N/A (0..0) för detta TK.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.documentId",
      "short" : "Dokumentets identitet",
      "definition" : "Dokumentets identitet som är unik inom källsystemet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.sourceSystemHSAId",
      "short" : "HSA-id för källsystem",
      "definition" : "HSA-id för det system som tillgängliggör informationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.documentTitle",
      "short" : "Titel",
      "definition" : "N/A",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.documentTime",
      "short" : "Tidpunkt för dokumentet",
      "definition" : "N/A\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.patientId",
      "short" : "Patientidentifierare",
      "definition" : "Identifierare för patient. id = patientens identifierare (12 tecken).\ntype = OID för typ av identifierare.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional",
      "short" : "Ansvarig hälso- och sjukvårdsperson",
      "definition" : "Information om den hälso- och sjukvårdsperson som är ansvarig för informationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt för registrering",
      "definition" : "Tidpunkt då informationen registrerades. Format: YYYYMMDDhhmmss.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "HSA-id för hälso- och sjukvårdspersonal",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn",
      "definition" : "Namn på hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Befattning (CVType)",
      "definition" : "Information om personens befattning. KV Befattning (OID 1.2.752.129.2.2.1.4).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Organisationsenhet",
      "definition" : "Den organisation som hälso- och sjukvårdspersonalen är uppdragstagare i.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "Epost till organisationsenhet",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress för organisationsenhet",
      "definition" : "Postadress för organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Fysisk plats för organisationsenhet",
      "definition" : "Text som anger namn på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet",
      "definition" : "HSA-id för vårdenhet. Se regel 1 i TKB.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivare",
      "definition" : "HSA-id för vårdgivaren.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.legalAuthenticator",
      "short" : "Signerande person",
      "definition" : "Information om vem som signerat informationen i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.legalAuthenticator.signatureTime",
      "short" : "Tidpunkt för signering",
      "definition" : "Tidpunkt för signering. Format: YYYYMMDDhhmmss.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id för signerande",
      "definition" : "HSA-id för person som signerat dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namn på signerande person",
      "definition" : "Namn i klartext för signerande person.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.approvedForPatient",
      "short" : "Godkänd för visning till patient",
      "definition" : "Anger om information får delas till patient.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.careContactId",
      "short" : "Vårdkontakts-id",
      "definition" : "Identitet för den hälso- och sjukvårdskontakt som uppmärksamhetsinformationen gäller.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.nullified",
      "short" : "Makulerad",
      "definition" : "N/A",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationHeader.nullifiedReason",
      "short" : "Makuleringsorsak",
      "definition" : "N/A",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody",
      "short" : "Uppmärksamhetsinformationens innehåll (AlertInformationBodyType)",
      "definition" : "AlertInformationBodyType — uppmärksamhetsinformationens informationsinnehåll.\nExakt en av hypersensitivity, seriousDisease, treatment, communicableDisease,\nrestrictionOfCare, unstructuredAlertInformation ska anges (XOR).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getalertinformation-body-choice",
        "severity" : "error",
        "human" : "En och endast en av hypersensitivity, seriousDisease, treatment, communicableDisease, restrictionOfCare och unstructuredAlertInformation ska anges",
        "expression" : "hypersensitivity.combine(seriousDisease).combine(treatment).combine(communicableDisease).combine(restrictionOfCare).combine(unstructuredAlertInformation).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformation"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.typeOfAlertInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.typeOfAlertInformation",
      "short" : "Typ av uppmärksamhetssignal (CVType)",
      "definition" : "Kod som anger vilken typ av uppmärksamhetssignal som avses.\nBör tas från KV Uppmärksamhetstyp eller KV Informationstyp (OID 1.2.752.129.2.2.2.1).\nOID för KV Uppmärksamhetstyp saknas – använd KV Informationstyp som fallback.\nRegel 2 (NPÖ): För att uppmärksamhetssignaler ska skickas till NPÖ måste en av följande\nKV Informationstyp-koder anges: upp-ube, upp-ube-beh, upp-ube-lbe, upp-ube-kod, upp-uas,\nupp-uas-sjd, upp-vbe, upp-vbe-vbe, upp-arb, upp-arb-smf, upp-arb-smf-vag, upp-arb-smf-sjd,\nupp-est, upp-est-rub, upp-est-inh. Alternativt KV Uppmärksamhetstyp-koder: Överkänslighet,\nAllvarlig sjukdom, Allvarlig behandling, Smittsam sjukdom, Vårdbegränsning,\nHistorisk varningsinformation.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.ascertainedDate",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.ascertainedDate",
      "short" : "Datum för konstaterande",
      "definition" : "Datum då förhållandet som föranledde uppmärksamhetssignalen konstaterades.\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.verifiedTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.verifiedTime",
      "short" : "Tidpunkt för verifiering",
      "definition" : "Tidpunkt då uppmärksamhetssignalen verifierades i det lokala systemet.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.validityTimePeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.validityTimePeriod",
      "short" : "Giltighetstid",
      "definition" : "Tidsintervallet inom vilket uppmärksamhetssignalen är giltig.\nEnligt TKB i detta sammanhang: start 1..1.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.alertInformationComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.alertInformationComment",
      "short" : "Kommentar",
      "definition" : "Kommentar av ansvarig hälso- och sjukvårdspersonal angående uppmärksamhetssignalen.\nVid läkemedelsöverkänslighet kan kommentaren avse anamnes, reaktionsbeskrivning, möjliga agens.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.obsoleteTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.obsoleteTime",
      "short" : "Tidpunkt för inaktivering",
      "definition" : "Tidpunkt då uppmärksamhetssignalen registrerades som inaktuell i det lokala systemet.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.obsoleteComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.obsoleteComment",
      "short" : "Kommentar till inaktivering",
      "definition" : "Information om varför uppmärksamhetssignalen gjorts inaktuell.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity",
      "short" : "Överkänslighet (HyperSensitivityType)",
      "definition" : "XOR med seriousDisease, treatment, communicableDisease, restrictionOfCare, unstructuredAlertInformation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.typeOfHypersensitivity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.typeOfHypersensitivity",
      "short" : "Typ av överkänslighet (CVType)",
      "definition" : "Precisering av överkänslighetstyp (ICD10/SNOMED).\nT.ex. läkemedelsöverkänslighet, överkänslighet mot födoämne, djur, växt eller kemikalie.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.degreeOfSeverity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.degreeOfSeverity",
      "short" : "Allvarlighetsgrad (CVType)",
      "definition" : "Bedömning av överkänslighetens allvarlighet. KV Allvarlighetsgrad (1.2.752.129.2.2.3.3).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.degreeOfCertainty",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.degreeOfCertainty",
      "short" : "Visshet (CVType)",
      "definition" : "Visshetsgrad för överkänsligheten. KV Visshetsgrad (1.2.752.129.2.2.3.11).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity",
      "short" : "Läkemedelsöverkänslighet (PharmaceuticalHypersensitivityType)",
      "definition" : "Mer detaljerad information om läkemedelsöverkänslighet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getalertinformation-substance-choice",
        "severity" : "error",
        "human" : "Antingen atcSubstance eller både nonATCSubstance och nonATCSubstanceComment ska anges",
        "expression" : "(atcSubstance.exists() and nonATCSubstance.empty() and nonATCSubstanceComment.empty()) or (atcSubstance.empty() and nonATCSubstance.exists() and nonATCSubstanceComment.exists())",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformation"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.atcSubstance",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.atcSubstance",
      "short" : "ATC-substans (CVType)",
      "definition" : "Substans eller grupp av substanser som kan orsaka överkänslighetsreaktion.\nATC-kod på minst treställig nivå ska anges vid livshotande/skadande allvarlighetsgrad.\nOID: 1.2.752.129.2.2.3.1.1.\nCVType-begränsningar (TKB): codeSystem är fast 1.2.752.129.2.2.3.1.1 (ATC).\ncodeSystemName, codeSystemVersion och originalText är 0..0 (får ej anges).\ncode och displayName är 1..1 (obligatoriska) när atcSubstance anges.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, codeSystemName 0..0, codeSystemVersion 0..0, displayName 1..1, originalText 0..0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.nonATCSubstance",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.nonATCSubstance",
      "short" : "Substans utan ATC-kod",
      "definition" : "Benämning på aktiv substans utan ATC-kod.\nSka anges om atcSubstance saknas.\nVillkor (TKB): nonATCSubstance och nonATCSubstanceComment ska BÅDA anges om atcSubstance saknas.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.nonATCSubstanceComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.nonATCSubstanceComment",
      "short" : "Kommentar till avsaknad ATC-kod",
      "definition" : "Förklaring till varför ATC-kod inte används.\nSka anges om atcSubstance saknas.\nVillkor (TKB): Ska anges om atcSubstance saknas (tillsammans med nonATCSubstance).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.pharmaceuticalProductId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity.pharmaceuticalProductId",
      "short" : "Läkemedelsprodukt-id (CVType)",
      "definition" : "Identifierare för läkemedelsprodukt som kan orsaka överkänslighet. NPL-id (1.2.752.129.2.1.5.1).",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.otherHypersensitivity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.otherHypersensitivity",
      "short" : "Annan överkänslighet (OtherHypersensitivityType)",
      "definition" : "Mer detaljerad information om överkänslighet som ej är läkemedelsöverkänslighet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.otherHypersensitivity.hypersensitivityAgent",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.otherHypersensitivity.hypersensitivityAgent",
      "short" : "Agens",
      "definition" : "Text som beskriver det agens som bedöms kunna orsaka överkänslighetsreaktion.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.otherHypersensitivity.hypersensitivityAgentCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.hypersensitivity.otherHypersensitivity.hypersensitivityAgentCode",
      "short" : "Agenskod (CVType)",
      "definition" : "Kod för det agens som bedöms kunna orsaka överkänslighetsreaktion.\nT.ex. LMK-kod (foderkänslighet) eller CAS-kod (kemikalie).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.seriousDisease",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.seriousDisease",
      "short" : "Allvarlig sjukdom (SeriousDiseaseType)",
      "definition" : "XOR med hypersensitivity, treatment, communicableDisease, restrictionOfCare, unstructuredAlertInformation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.seriousDisease.disease",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.seriousDisease.disease",
      "short" : "Sjukdomskod (CVType)",
      "definition" : "Allvarlig sjukdom som patienten har. ICD10/SNOMED rekommenderas.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.treatment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.treatment",
      "short" : "Behandling (TreatmentType)",
      "definition" : "XOR med hypersensitivity, seriousDisease, communicableDisease, restrictionOfCare, unstructuredAlertInformation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.treatment.treatmentDescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.treatment.treatmentDescription",
      "short" : "Behandlingsbeskrivning",
      "definition" : "Beskrivning av allvarlig behandling som patienten genomgår.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.treatment.treatmentCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.treatment.treatmentCode",
      "short" : "Behandlingskod (CVType)",
      "definition" : "Preciserad uppgift om behandlingen. KVÅ-kod (1.2.752.116.1.3.2.1.4) rekommenderas.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.treatment.pharmaceuticalTreatment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.treatment.pharmaceuticalTreatment",
      "short" : "Läkemedel vid behandling (CVType)",
      "definition" : "Läkemedel som används vid uppmärksammad behandling. ATC-kod (1.2.752.129.2.2.3.1.1) rekommenderas.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.communicableDisease",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.communicableDisease",
      "short" : "Smittsam sjukdom (CommunicableDiseaseType)",
      "definition" : "XOR med hypersensitivity, seriousDisease, treatment, restrictionOfCare, unstructuredAlertInformation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.communicableDisease.communicableDiseaseCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.communicableDisease.communicableDiseaseCode",
      "short" : "Smittsam sjukdomskod (CVType)",
      "definition" : "Kod för smittsam sjukdom. ICD10 rekommenderas.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.communicableDisease.routeOfTransmission",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.communicableDisease.routeOfTransmission",
      "short" : "Smittväg (CVType)",
      "definition" : "Kod för hur sjukdomen smittar. KV Smittväg.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.restrictionOfCare",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.restrictionOfCare",
      "short" : "Vårdbegränsning (RestrictionOfCareType)",
      "definition" : "XOR med hypersensitivity, seriousDisease, treatment, communicableDisease, unstructuredAlertInformation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.restrictionOfCare.restrictionOfCareComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.restrictionOfCare.restrictionOfCareComment",
      "short" : "Kommentar om vårdbegränsning",
      "definition" : "Information om uppmärksammat förhållande som inte avser överkänslighet, sjukdom eller behandling.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.unstructuredAlertInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.unstructuredAlertInformation",
      "short" : "Historisk varning (UnstructuredAlertInformationType)",
      "definition" : "XOR med hypersensitivity, seriousDisease, treatment, communicableDisease, restrictionOfCare.\nAnvänds för tidigare varningsinformation som inte följer NPÖ-strukturen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.unstructuredAlertInformation.unstructuredAlertInformationHeading",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.unstructuredAlertInformation.unstructuredAlertInformationHeading",
      "short" : "Rubrik för historisk varning",
      "definition" : "Beskrivande rubrik för tidigare utfärdad varning.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.unstructuredAlertInformation.unstructuredAlertInformationContent",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.unstructuredAlertInformation.unstructuredAlertInformationContent",
      "short" : "Innehåll för historisk varning",
      "definition" : "Beskrivning av vad varningen gäller samt viss administrativ information.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.relatedAlertInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.relatedAlertInformation",
      "short" : "Relaterad uppmärksamhetssignal (RelatedAlertInformationType)",
      "definition" : "Information om samband med andra uppmärksamhetssignaler.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.relatedAlertInformation.typeOfAlertInformationRelationship",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.relatedAlertInformation.typeOfAlertInformationRelationship",
      "short" : "Typ av samband (CVType)",
      "definition" : "Typ av samband. KV Samband (1.2.752.129.2.2.2.4).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.relatedAlertInformation.relationComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.relatedAlertInformation.relationComment",
      "short" : "Kommentar till samband",
      "definition" : "Kommentar till det aktuella sambandet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.relatedAlertInformation.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.alertInformation.alertInformationBody.relatedAlertInformation.documentId",
      "short" : "Relaterad dokumentidentitet",
      "definition" : "Lokalt unik identitet för relaterad uppmärksamhetssignal.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.result",
      "path" : "SEEHDSLMAlertInformation.result",
      "short" : "Resultat",
      "definition" : "Innehåller information om begäran gick bra eller ej.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.result.resultCode",
      "short" : "Resultatkod",
      "definition" : "Kan endast vara OK, INFO eller ERROR.\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.result.errorCode",
      "short" : "Felkod",
      "definition" : "Sätts endast om resultCode är ERROR. Tillåtna värden: INVALID_REQUEST.\nTillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.result.logId",
      "short" : "Log-id",
      "definition" : "En UUID som kan användas vid felanmälan för att spåra felet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.result.subCode",
      "short" : "Subkod",
      "definition" : "Inga subkoder specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformation.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMAlertInformation.result.message",
      "short" : "Meddelande",
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
