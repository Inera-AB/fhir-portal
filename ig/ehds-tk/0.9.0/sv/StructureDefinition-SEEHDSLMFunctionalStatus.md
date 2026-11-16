# GetFunctionalStatus - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetFunctionalStatus 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMFunctionalStatus.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMFunctionalStatus.csv), [Excel](../StructureDefinition-SEEHDSLMFunctionalStatus.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMFunctionalStatus",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetFunctionalStatusResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:description:GetFunctionalStatusResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMFunctionalStatus",
  "version" : "0.9.0",
  "name" : "SEEHDSLMFunctionalStatus",
  "title" : "GetFunctionalStatus",
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
  "description" : "Logisk modell för tjänstekontraktet GetFunctionalStatus\n(RIV-TA urn:riv:clinicalprocess:healthcond:description:GetFunctionalStatusResponder:2).\nRepresenterar responsens informationsstruktur: dokumenterade bedömningar av\nfunktionsnedsättningar och/eller aktivitetsförmåga (PADL) för en patient.\nBedömningskategori styrs av assessmentCategory: 'pad-pad' (PADL) eller 'fun-fun' (funktionsnedsättning).\nEn tjänsteproducent måste använda samma värde för categorization i engagemangsindex som\nför assessmentCategory i svaret.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMFunctionalStatus",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMFunctionalStatus",
      "path" : "SEEHDSLMFunctionalStatus",
      "short" : "GetFunctionalStatus",
      "definition" : "Logisk modell för tjänstekontraktet GetFunctionalStatus\n(RIV-TA urn:riv:clinicalprocess:healthcond:description:GetFunctionalStatusResponder:2).\nRepresenterar responsens informationsstruktur: dokumenterade bedömningar av\nfunktionsnedsättningar och/eller aktivitetsförmåga (PADL) för en patient.\nBedömningskategori styrs av assessmentCategory: 'pad-pad' (PADL) eller 'fun-fun' (funktionsnedsättning).\nEn tjänsteproducent måste använda samma värde för categorization i engagemangsindex som\nför assessmentCategory i svaret."
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment",
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment",
      "short" : "Funktionsstatusbedömning",
      "definition" : "De funktionsstatusbedömningar som matchar begäran.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader",
      "short" : "Dokumenthuvud (PatientSummaryHeader)",
      "definition" : "Innehåller basinformation om dokumentet (PatientSummaryHeaderType).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.documentId",
      "short" : "Dokumentets identitet",
      "definition" : "Funktionsbedömningens identitet som är unik inom källsystemet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.sourceSystemHSAId",
      "short" : "HSA-id för källsystem",
      "definition" : "HSA-id för det system som tillgängliggör informationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.documentTitle",
      "short" : "Titel (ej tillämpligt)",
      "definition" : "N/A — GetFunctionalStatus skickar inte documentTitle. Elementet är 0..0 per TKB.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.documentTime",
      "short" : "Bedömningstidpunkt",
      "definition" : "Bedömningstidpunkt/händelsetidpunkt. Format: YYYYMMDDhhmmss.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.patientId",
      "short" : "Patientidentifierare",
      "definition" : "Identifierare för patient. id = patientens identifierare (12 tecken).\ntype = OID för typ av identifierare.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional",
      "short" : "Ansvarig hälso- och sjukvårdsperson",
      "definition" : "Information om den hälso- och sjukvårdsperson som är ansvarig för informationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt för registrering",
      "definition" : "Tidpunkt då informationen registrerades. Format: YYYYMMDDhhmmss.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "Författarens HSA-id",
      "definition" : "Författarens HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn",
      "definition" : "Namn på hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Befattning",
      "definition" : "Information om personens befattning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Organisationsenhet",
      "definition" : "Den organisation som hälso- och sjukvårdspersonalen är uppdragstagare i.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress för den organisation som författaren är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats för organisationsenhet",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet",
      "definition" : "HSA-id för vårdenhet. Se regel 1 i TKB.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivare",
      "definition" : "HSA-id för vårdgivaren.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.legalAuthenticator",
      "short" : "Signerande person",
      "definition" : "Information om vem som signerat informationen i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.legalAuthenticator.signatureTime",
      "short" : "Tidpunkt för signering",
      "definition" : "Signaturtidpunkt. Format: YYYYMMDDhhmmss.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id för signerande",
      "definition" : "HSA-id för person som signerat dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namn på signerande person",
      "definition" : "Namn i klartext för signerande person.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.approvedForPatient",
      "short" : "Godkänd för visning till patient",
      "definition" : "Anger om information får delas till patient.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.careContactId",
      "short" : "Vårdkontakts-id",
      "definition" : "Id för den vårdkontakt vid vilken bedömningen genomfördes.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.nullified",
      "short" : "Makulerat (ej tillämpligt)",
      "definition" : "N/A — GetFunctionalStatus stödjer inte nullified. Elementet är 0..0 per TKB.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentHeader.nullifiedReason",
      "short" : "Makuleringsskäl (ej tillämpligt)",
      "definition" : "N/A — GetFunctionalStatus stödjer inte nullifiedReason. Elementet är 0..0 per TKB.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody",
      "short" : "Bedömningens innehåll",
      "definition" : "FunctionalStatusAssessmentBodyType — bedömningens informationsinnehåll.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.assessmentCategory",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.assessmentCategory",
      "short" : "Bedömningskategori",
      "definition" : "Bedömningskategori. 'pad-pad' = PADL-bedömning, 'fun-fun' = funktionsnedsättningsbedömning.\nOBS: tjänsteproducent måste använda samma värde som categorization i engagemangsindex.\nSe AssessmentCategoryCS/AssessmentCategoryVS.\nTillåtna värden enligt XSD: pad-pad, fun-fun.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.assessmentCategory.value",
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.assessmentCategory.value",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/assessmentcategory-vs"
      }
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.comment",
      "short" : "Kommentar",
      "definition" : "Kommentar till total bedömning.\nVillkor (Regel): Får ENDAST anges om assessmentCategory = 'pad-pad'.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.padl",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.padl",
      "short" : "PADL-bedömning",
      "definition" : "Beskriver gjorda PADL-bedömningar. Får enbart anges om assessmentCategory = 'pad-pad'.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.padl.typeOfAssessment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.padl.typeOfAssessment",
      "short" : "Typ av PADL-bedömning",
      "definition" : "Typ av PADL-bedömning. Kan anges med lämpligt kodsystem för PADL.\nRegel 2 (TKB): Då attributet avser Personlig ADL ska ENBART ett av följande värden anges per post: 'personlig hygien', 'på/avklädning', 'förflyttning', 'toalettbesök', 'födointag'.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.padl.assessment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.padl.assessment",
      "short" : "Textuell PADL-bedömning",
      "definition" : "Den textuella PADL-bedömning som gjorts i kategorin.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.disability",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.disability",
      "short" : "Funktionsnedsättningsbedömning",
      "definition" : "Beskriver gjord funktionsnedsättningsbedömning.\nFår enbart anges om assessmentCategory = 'fun-fun'.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.disability.disabilityAssessment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.disability.disabilityAssessment",
      "short" : "ICF-kod för funktionsnedsättning",
      "definition" : "Angivelse av kod för den funktion som bedömts nedsatt.\nKodsystem: ICF, OID 1.2.752.116.1.1.3.\nExempelkod: b310 = röst- och talfunktioner.\nCVType-begränsningar: codeSystemName och codeSystemVersion är 0..0 (får ej anges) per TKB. Om code anges ska codeSystem och displayName anges, ej originalText. Om originalText anges ska inga andra attribut anges.\nEnligt TKB i detta sammanhang: codeSystemName 0..0, codeSystemVersion 0..0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.disability.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.functionalStatusAssessment.functionalStatusAssessmentBody.disability.comment",
      "short" : "Kommentar till funktionsnedsättning",
      "definition" : "Kommentar med ytterligare information om funktionsnedsättningen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.result",
      "path" : "SEEHDSLMFunctionalStatus.result",
      "short" : "Resultat",
      "definition" : "Innehåller information om begäran gick bra eller ej.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.result.resultCode",
      "short" : "Resultatkod",
      "definition" : "Kan endast vara OK, INFO eller ERROR.\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.result.errorCode",
      "short" : "Felkod",
      "definition" : "Sätts endast om resultCode är ERROR. Tillåtna värden: INVALID_REQUEST.\nTillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.result.logId",
      "short" : "Log-id",
      "definition" : "En UUID som kan användas vid felanmälan för att spåra felet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.result.subCode",
      "short" : "Subkod",
      "definition" : "Inga subkoder är specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMFunctionalStatus.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMFunctionalStatus.result.message",
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
