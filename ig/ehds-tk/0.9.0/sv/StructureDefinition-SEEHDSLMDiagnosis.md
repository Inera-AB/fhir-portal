# GetDiagnosis - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetDiagnosis 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMDiagnosis.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Terminologibindningar (differential)

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **Differentialvy** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Terminologibindningar (differential)

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMDiagnosis.csv), [Excel](../StructureDefinition-SEEHDSLMDiagnosis.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMDiagnosis",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetDiagnosisResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:description:GetDiagnosisResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMDiagnosis",
  "version" : "0.9.0",
  "name" : "SEEHDSLMDiagnosis",
  "title" : "GetDiagnosis",
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
  "description" : "Logisk modell för tjänstekontraktet GetDiagnosis\n(RIV-TA urn:riv:clinicalprocess:healthcond:description:GetDiagnosisResponder:2).\nRepresenterar responsens informationsstruktur: registrerade diagnoser för en patient\ninklusive diagnoskod per ursprungligt diagnosticeringstillfälle.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMDiagnosis",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMDiagnosis",
      "path" : "SEEHDSLMDiagnosis",
      "short" : "GetDiagnosis",
      "definition" : "Logisk modell för tjänstekontraktet GetDiagnosis\n(RIV-TA urn:riv:clinicalprocess:healthcond:description:GetDiagnosisResponder:2).\nRepresenterar responsens informationsstruktur: registrerade diagnoser för en patient\ninklusive diagnoskod per ursprungligt diagnosticeringstillfälle."
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis",
      "path" : "SEEHDSLMDiagnosis.diagnosis",
      "short" : "Diagnos",
      "definition" : "De diagnoser som matchar begäran. En instans per diagnos.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader",
      "short" : "Dokumenthuvud (PatientSummaryHeader)",
      "definition" : "Innehåller basinformation om dokumentet (PatientSummaryHeaderType).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.documentId",
      "short" : "Dokumentets identitet",
      "definition" : "Dokumentets identitet som är unik inom källsystemet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.sourceSystemHSAId",
      "short" : "HSA-id för källsystem",
      "definition" : "HSA-id för det system som tillgängliggör informationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.documentTitle",
      "short" : "Titel (ej tillämpligt)",
      "definition" : "N/A — GetDiagnosis skickar inte documentTitle. Elementet är 0..0 per TKB.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.documentTime",
      "short" : "Tidpunkt (ej tillämpligt)",
      "definition" : "N/A — GetDiagnosis skickar inte documentTime. Elementet är 0..0 per TKB.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.patientId",
      "short" : "Patientidentifierare",
      "definition" : "Identifierare för patient. id = patientens identifierare (12 tecken).\ntype = OID för typ av identifierare. För personnummer: 1.2.752.129.2.1.3.1.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional",
      "short" : "Ansvarig hälso- och sjukvårdsperson",
      "definition" : "Information om den hälso- och sjukvårdsperson som är ansvarig för informationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt för registrering",
      "definition" : "Tidpunkt då informationen registrerades. Format: YYYYMMDDhhmmss.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "Författarens HSA-id",
      "definition" : "Författarens HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på hälso- och sjukvårdspersonal",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Befattning",
      "definition" : "Information om personens befattning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Organisationsenhet",
      "definition" : "Den organisation som hälso- och sjukvårdspersonalen är uppdragstagare i.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namnet på den organisation som hälso- och sjukvårdspersonalen är uppdragstagare i.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress för den organisation som författaren är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats för organisationsenhet",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet",
      "definition" : "HSA-id för vårdenhet. Se regel 1 i TKB.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivare",
      "definition" : "HSA-id för vårdgivaren, som är vårdgivare för den vårdenhet där personalen verkar.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.legalAuthenticator",
      "short" : "Signerande person",
      "definition" : "Information om vem som signerat informationen i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.legalAuthenticator.signatureTime",
      "short" : "Tidpunkt för signering",
      "definition" : "Tidpunkt för signering. Format: YYYYMMDDhhmmss.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id för signerande person",
      "definition" : "HSA-id för person som signerat dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namn på signerande person",
      "definition" : "Namn i klartext för signerande person.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.approvedForPatient",
      "short" : "Godkänd för visning till patient",
      "definition" : "Anger om information får delas till patient.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.careContactId",
      "short" : "Vårdkontakts-id",
      "definition" : "Identitet för den hälso- och sjukvårdskontakt som diagnosen dokumenterades vid.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.nullified",
      "short" : "Makulerad",
      "definition" : "N/A",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisHeader.nullifiedReason",
      "short" : "Makuleringsorsak",
      "definition" : "N/A",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody",
      "short" : "Diagnosens innehåll",
      "definition" : "DiagnosisBodyType — diagnosens informationsinnehåll.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.typeOfDiagnosis",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.typeOfDiagnosis",
      "short" : "Typ av diagnos",
      "definition" : "Anges som HD (huvuddiagnos) eller BY (bidiagnos) från kv_diagnostyp. Se DiagnosisTypeCS/DiagnosisTypeVS.\nTillåtna värden enligt XSD: Huvuddiagnos, Bidiagnos.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.typeOfDiagnosis.value",
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.typeOfDiagnosis.value",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/diagnosistype-vs"
      }
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.chronicDiagnosis",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.chronicDiagnosis",
      "short" : "Kronisk diagnos",
      "definition" : "Sätts till true om diagnosen är kronisk, false om den inte är kronisk.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.diagnosisTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.diagnosisTime",
      "short" : "Tidpunkt för diagnos",
      "definition" : "Tidpunkt då bedömningen gjordes. Format: YYYYMMDDhhmmss.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.diagnosisCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.diagnosisCode",
      "short" : "Diagnoskod",
      "definition" : "Diagnoskod. Normalt ICD-10-SE (OID okänt — se ASSUME-001 i QUESTIONS.md).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.relatedDiagnosis",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.relatedDiagnosis",
      "short" : "Relaterad diagnos",
      "definition" : "Relaterad diagnos. Associationen används för att koppla en bidiagnos till sin huvuddiagnos.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.relatedDiagnosis.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.diagnosis.diagnosisBody.relatedDiagnosis.documentId",
      "short" : "Relaterad diagnos dokumentid",
      "definition" : "Unik identitet för den relaterade diagnosen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.result",
      "path" : "SEEHDSLMDiagnosis.result",
      "short" : "Resultat",
      "definition" : "Innehåller information om begäran gick bra eller ej.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.result.resultCode",
      "short" : "Resultatkod",
      "definition" : "Kan endast vara OK, INFO eller ERROR.\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.result.errorCode",
      "short" : "Felkod",
      "definition" : "Sätts endast om resultCode är ERROR. Tillåtna värden: INVALID_REQUEST.\nTillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.result.logId",
      "short" : "Log-id",
      "definition" : "En UUID som kan användas vid felanmälan för att spåra felet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.result.subCode",
      "short" : "Subkod",
      "definition" : "Inga subkoder är specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMDiagnosis.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMDiagnosis.result.message",
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
