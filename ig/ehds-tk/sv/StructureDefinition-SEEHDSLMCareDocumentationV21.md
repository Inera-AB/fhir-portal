# GetCareDocumentation 2.1 - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetCareDocumentation 2.1 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMCareDocumentationV21.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMCareDocumentationV21.csv), [Excel](../StructureDefinition-SEEHDSLMCareDocumentationV21.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMCareDocumentationV21",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetCareDocumentationResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:description:GetCareDocumentationResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareDocumentationV21",
  "version" : "0.9.0",
  "name" : "SEEHDSLMCareDocumentationV21",
  "title" : "GetCareDocumentation 2.1",
  "status" : "draft",
  "date" : "2026-11-16T16:17:59+00:00",
  "publisher" : "Inera AB",
  "contact" : [{
    "name" : "Inera AB",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.inera.se"
    }]
  }],
  "description" : "Logisk modell för version 2.1 av tjänstekontraktet GetCareDocumentation\n(urn:riv:clinicalprocess:healthcond:description:GetCareDocumentationResponder:2).\nMappningen utgår från versionen i SEEHDSLMCareDocumentation. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareDocumentationV21",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMCareDocumentationV21",
      "path" : "SEEHDSLMCareDocumentationV21",
      "short" : "GetCareDocumentation 2.1",
      "definition" : "Logisk modell för version 2.1 av tjänstekontraktet GetCareDocumentation\n(urn:riv:clinicalprocess:healthcond:description:GetCareDocumentationResponder:2).\nMappningen utgår från versionen i SEEHDSLMCareDocumentation. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida."
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation",
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation",
      "short" : "De hälso- och sjukvårdsdokument som matchar begäran",
      "definition" : "De hälso- och sjukvårdsdokument som matchar begäran.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader",
      "short" : "Innehåller basinformation om dokumentet",
      "definition" : "Innehåller basinformation om dokumentet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.documentId",
      "short" : "Dokumentets identitet som är unik inom källsystemet",
      "definition" : "Dokumentets identitet som är unik inom källsystemet. Identifieraren ska vara konsistent och beständigt mellan olika majorversioner av ett kontrakt. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska vara konsistent och beständigt mellan olika kontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.sourceSystemHSAid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.sourceSystemHSAid",
      "short" : "HSA-id för det system som dokumentet är skapat i",
      "definition" : "HSA-id för det system som dokumentet är skapat i. Notera att elementnamnet i de andra kontrakten är sourceSystemHSAId (med ett versalt I). Skälet till avvikelsen här är p.g.a. behovet av detta kontrakts bakåtkompatibilitet med kontraktet i version 2.0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.documentTitle",
      "short" : "Titel som beskriver den information som sänds i dokumentet",
      "definition" : "Titel som beskriver den information som sänds i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.documentTime",
      "short" : "Händelsetidpunkt",
      "definition" : "Händelsetidpunkt. Tidsangivelse för den händelse dokumentet gäller.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.patientId",
      "short" : "Identifierare för patient",
      "definition" : "Identifierare för patient.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional",
      "short" : "Information om den hälso- och sjukvårdsperson som ansvarar för informationen i dokumentet, nedan kallas …",
      "definition" : "Information om den hälso- och sjukvårdsperson som ansvarar för informationen i dokumentet, nedan kallas författare.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt då informationen registrerades",
      "definition" : "Tidpunkt då informationen registrerades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "Författarens HSA-id",
      "definition" : "Författarens HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på författaren",
      "definition" : "Namn på författaren. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Information om personens befattning",
      "definition" : "Information om personens befattning. Om möjligt ska kodverket Befattning (OID 1.2.752.129.2.2.1.4), [R13].",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Den organisation som författaren är uppdragstagare på",
      "definition" : "Den organisation som författaren är uppdragstagare på. I de fall då HSA-id inte finns tillgängligt i systemet ska lokalt id anges (unikt inom källsystemet).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. I de fall då HSA-id inte finns tillgängligt i systemet ska lokalt id anges (unikt inom källsystemet).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namnet på den organisation som författaren är uppdragstagare på",
      "definition" : "Namnet på den organisation som författaren är uppdragstagare på",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "Epost till enhet",
      "definition" : "Epost till enhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress för den organisation som författaren är uppdragstagare på",
      "definition" : "Postadress för den organisation som författaren är uppdragstagare på. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för Vårdenhet(Regel: 1)",
      "definition" : "HSA-id för Vårdenhet(Regel: 1)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivaren, som är vårdgivare för den enhet som författaren är uppdragstagare för",
      "definition" : "HSA-id för vårdgivaren, som är vårdgivare för den enhet som författaren är uppdragstagare för. (Regel: 1)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.legalAuthenticator",
      "short" : "Information om vem som signerat informationen i dokumentet",
      "definition" : "Information om vem som signerat informationen i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.legalAuthenticator.signatureTime",
      "short" : "Tidpunkt för signering",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id för person som signerat dokumentet",
      "definition" : "HSA-id för person som signerat dokumentet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namnen i klartext för signerande person",
      "definition" : "Namnen i klartext för signerande person.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.approvedForPatient",
      "short" : "Anger om information får delas till patient",
      "definition" : "Anger om information får delas till patient. Värdet sätts i sådant fall till true, i annat fall till false.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.careContactId",
      "short" : "Identitetet för den hälso- och sjukvårdskontakt som föranlett den information som omfattas av dokumentet",
      "definition" : "Identitetet för den hälso- och sjukvårdskontakt som föranlett den information som omfattas av dokumentet. Identiteten är unik inom källsystemet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.nullified",
      "short" : "N/A",
      "definition" : "N/A",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationHeader.nullifiedReason",
      "short" : "N/A",
      "definition" : "N/A",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody",
      "short" : "careDocumentationBody",
      "definition" : "careDocumentationBody",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote",
      "short" : "Dokument/anteckning",
      "definition" : "Dokument/anteckning.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getcaredocumentation-body-xor",
        "severity" : "error",
        "human" : "Antingen clinicalDocumentNoteText eller multimediaEntry ska anges, ej båda",
        "expression" : "clinicalDocumentNoteText.exists() xor multimediaEntry.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareDocumentationV21"
      },
      {
        "key" : "getcaredocumentation21-code-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av clinicalDocumentNoteCode och clinicalDocumentTypeCode ska anges",
        "expression" : "clinicalDocumentNoteCode.exists() xor clinicalDocumentTypeCode.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareDocumentationV21"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.clinicalDocumentNoteCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.clinicalDocumentNoteCode",
      "short" : "Obligatoriskt om clinicalDocumentTypeCode saknas",
      "definition" : "Obligatoriskt om clinicalDocumentTypeCode saknas. Får annars inte anges samtidigt med clinicalDocumentTypeCode. Typ av hälso- och sjukvårdsdokument. Kod tas från KV Anteckningstyp (1.2.752.129.2.2.2.11).Tillåtna värden är: utr = Utredning, atb = åtgärd/Behandling, sam = Sammanfattning, sao = Samordning, ins = Inskrivning, slu = Slutanteckning, auf = Anteckning utan fysiskt möte, sva = Slutenvårdsanteckning, bes = Besöksanteckning.\nTillåtna värden enligt XSD: utr, atb, sam, sao, ins, slu, auf, sva, bes.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.clinicalDocumentTypeCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.clinicalDocumentTypeCode",
      "short" : "Obligatoriskt om clinicalDocumentNoteCode saknas",
      "definition" : "Obligatoriskt om clinicalDocumentNoteCode saknas. Får annars inte anges samtidigt med clinicalDocumentNoteCode. Epikris = epi Intagninganteckning = int Daganteckning = dag Öppenvårdsanteckning = ova Öppenvårdssammanfattning = ovs Övrigt document = ovr\nTillåtna värden enligt XSD: epi, int, dag, ova, ovs, ovr.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.clinicalDocumentNoteTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.clinicalDocumentNoteTitle",
      "short" : "Titel på dokument",
      "definition" : "Titel på dokument",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.clinicalDocumentNoteText",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.clinicalDocumentNoteText",
      "short" : "Dokumentets innehåll i text",
      "definition" : "Dokumentets innehåll i text. Texten kan antingen skickas som vanlig text eller formaterat enligt DocBook-standarden, se 7.1.3. Obs Man kan välja att skicka dokumentets innehåll i elementet clinicalDocumentNoteText eller i multimediaEntry enligt respektive elements regler, man får inte skicka med båda elementen. Regeln finns med i constraints.xml (schematron) under katalogen test-suites och kan valideras med testsviten.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.multimediaEntry",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.multimediaEntry",
      "short" : "Dokumentets innehåll i form av en multimediaobjekt, i form av antingen ett inbäddat objekt eller en länk till …",
      "definition" : "Dokumentets innehåll i form av en multimediaobjekt, i form av antingen ett inbäddat objekt eller en länk till objektet. Obs Man kan välja att skicka dokumentets innehåll i elementet clinicalDocumentNoteText eller i multimediaEntry enligt respektive elements regler, man får inte skicka med båda elementen. Regeln finns med i constraints.xml(schematron) under katalogen test-suites och kan valideras med testsviten.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getcaredocumentation-multimedia-xor",
        "severity" : "error",
        "human" : "Antingen value eller reference ska anges i multimediaEntry, ej båda",
        "expression" : "value.exists() xor reference.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareDocumentationV21"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.multimediaEntry.mediaType",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.multimediaEntry.mediaType",
      "short" : "Typ av multimedia (enligt HL7)",
      "definition" : "Typ av multimedia (enligt HL7).\nTillåtna värden enligt XSD: application/dicom, application/msword, application/pdf, audio/basic, audio/k32adpcm, audio/mpeg, image/g3fax, image/gif, image/jpeg, image/png, image/tiff, model/vrml, multipart/x-hl7-cda-level1, text/html, text/plain, text/rtf, text/sgml, text/x-hl7-ft, text/xml, video/mpeg, video/x-avi.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.multimediaEntry.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.multimediaEntry.value",
      "short" : "Value är binärdata som representerar objektet",
      "definition" : "Value är binärdata som representerar objektet. Ett och endast ett av attributen value och reference ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBase64Binary"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.multimediaEntry.reference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.multimediaEntry.reference",
      "short" : "Referens till extern bild i form av en URL",
      "definition" : "Referens till extern bild i form av en URL. Ett och endast ett av attributen value och reference ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion",
      "short" : "dissentintOpinion",
      "definition" : "dissentintOpinion",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion.opinionId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion.opinionId",
      "short" : "opinionId",
      "definition" : "opinionId",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion.authorTime",
      "short" : "authorTime",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion.opinion",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion.opinion",
      "short" : "opinion",
      "definition" : "opinion",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion.personId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion.personId",
      "short" : "personId",
      "definition" : "personId",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondDescription2"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion.personName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.careDocumentation.careDocumentationBody.clinicalDocumentNote.dissentintOpinion.personName",
      "short" : "personName",
      "definition" : "personName",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.result",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2.1"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.result",
      "short" : "Innehåller information om begäran gick bra eller ej, en P av 2.1 måste skicka med resultType, för …",
      "definition" : "Innehåller information om begäran gick bra eller ej, en P av 2.1 måste skicka med resultType, för kompabilitet mellan K 2.1 och P 2.0 är den satt till icke obligatorisk i wsdl.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2.1"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.result.resultCode",
      "short" : "Kan endast vara OK, INFO eller ERROR",
      "definition" : "Tillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2.1"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.result.errorCode",
      "short" : "Sätts endast om resultCode är ERROR, se kapitel 4.4 för mer information.",
      "definition" : "Tillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2.1"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.result.logId",
      "short" : "En UUID som kan användas vid felanmälan för att användas vid felsökning av producent",
      "definition" : "En UUID som kan användas vid felanmälan för att användas vid felsökning av producent.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2.1"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.result.subCode",
      "short" : "Inga subkoder är specificerade",
      "definition" : "Inga subkoder är specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentationV21.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2.1"
      }],
      "path" : "SEEHDSLMCareDocumentationV21.result.message",
      "short" : "En beskrivande text som kan visas för användaren",
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
