# GetLaboratoryOrderOutcome 3.1 - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetLaboratoryOrderOutcome 3.1 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV31.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV31.csv), [Excel](../StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV31.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMLaboratoryOrderOutcomeV31",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetLaboratoryOrderOutcomeResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:GetLaboratoryOrderOutcomeResponder:3"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcomeV31",
  "version" : "0.9.0",
  "name" : "SEEHDSLMLaboratoryOrderOutcomeV31",
  "title" : "GetLaboratoryOrderOutcome 3.1",
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
  "description" : "Logisk modell för version 3.1 av tjänstekontraktet GetLaboratoryOrderOutcome\n(urn:riv:clinicalprocess:healthcond:actoutcome:GetLaboratoryOrderOutcomeResponder:3).\nMappningen utgår från versionen i SEEHDSLMLaboratoryOrderOutcome. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcomeV31",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31",
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31",
      "short" : "GetLaboratoryOrderOutcome 3.1",
      "definition" : "Logisk modell för version 3.1 av tjänstekontraktet GetLaboratoryOrderOutcome\n(urn:riv:clinicalprocess:healthcond:actoutcome:GetLaboratoryOrderOutcomeResponder:3).\nMappningen utgår från versionen i SEEHDSLMLaboratoryOrderOutcome. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida."
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome",
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome",
      "short" : "Returnerar en patients laboratoriesvar",
      "definition" : "Returnerar en patients laboratoriesvar.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader",
      "short" : "Innehåller basinformation om dokumentet",
      "definition" : "Innehåller basinformation om dokumentet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.documentId",
      "short" : "Unik identifierare för undersökningsresultatet",
      "definition" : "Unik identifierare för undersökningsresultatet. Identitet ska vara unik inom källsystemet Identifieraren ska vara konsistent och beständigt mellan olika majorversioner av ett kontrakt. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska vara konsistent och beständigt mellan olika kontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.sourceSystemHSAId",
      "short" : "HSAid för det system som dokumentet är skapat i",
      "definition" : "HSAid för det system som dokumentet är skapat i.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.documentTitle",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.documentTime",
      "short" : "Tidpunkten då laboratoriesvaret inkom till beställarens vårdinformationssystem",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.patientId",
      "short" : "Id för patienten",
      "definition" : "Id för patienten.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional",
      "short" : "Information om den hälso- och sjukvårdsperson som framställt vårdbegäran som ligger till grund för svaret, …",
      "definition" : "Information om den hälso- och sjukvårdsperson som framställt vårdbegäran som ligger till grund för svaret, nedan kallad författare.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt vid vilken laboratoriesvaret skapades eller senast uppdaterades i laboratoriesystemet",
      "definition" : "Tidpunkt vid vilken laboratoriesvaret skapades eller senast uppdaterades i laboratoriesystemet.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "Författarens HSA-id",
      "definition" : "Författarens HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på författaren",
      "definition" : "Namn på författaren. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Information om personens befattning",
      "definition" : "Information om personens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4), se referens [R 5]. Om kodverk saknas anges befattning i originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Den organisation som författaren är uppdragstagare på",
      "definition" : "Information om en organisationsenhet orgUnitHsaId: HSA-id för organisationsenhet orgUnitName Namn på organisationsenhet orgUnitTelecom: Telefon till organisationsenhet orgUnitEmail: Epost till enhet orgUnitAddress: Postadress till enhet orgUnitLocation: Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namnet på den organisation som författaren är uppdragstagare på",
      "definition" : "Namnet på den organisation som författaren är uppdragstagare på",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "Epost till enhet",
      "definition" : "Epost till enhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress för den organisation som författaren är uppdragstagare på",
      "definition" : "Postadress för den organisation som författaren är uppdragstagare på. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Text som anger namnet påplats eller ort för organisationens fysiska placering",
      "definition" : "Text som anger namnet påplats eller ort för organisationens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för Vårdenhet",
      "definition" : "HSA-id för Vårdenhet. Ska anges om tillgänglig. [Regel 1]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivaren, som är vårdgivare för den enhet som författaren är uppdragstagare för",
      "definition" : "HSA-id för vårdgivaren, som är vårdgivare för den enhet som författaren är uppdragstagare för. Ska anges om tillgänglig. [Regel 1]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator",
      "short" : "Information om vem som signerat informationen i dokumentet",
      "definition" : "Information om vem som signerat informationen i dokumentet. Det är normalt laboratorieläkeren som signerar laboratoriesvar. Signering = signering av remissvar. Vidimering anges i attributet attested i bodyn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator.signatureTime",
      "short" : "Tidpunkt för signering av svaret",
      "definition" : "Tidpunkt för signering av svaret.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id för person som signerat dokumentet",
      "definition" : "HSA-id för person som signerat dokumentet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namnen i klartext för signerande person",
      "definition" : "Namnen i klartext för signerande person.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator.legalAuthenticatorRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.legalAuthenticator.legalAuthenticatorRoleCode",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.approvedForPatient",
      "short" : "Anger om information får delas till patient",
      "definition" : "Anger om information får delas till patient. Värdet sätts i sådant fall till true, i annat fall till false.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.careContactId",
      "short" : "Identitetet för den hälso-och sjukvårdskontakt som föranlett den information som omfattas av dokumentet",
      "definition" : "Identitetet för den hälso-och sjukvårdskontakt som föranlett den information som omfattas av dokumentet. Identiteten är unik inom källsystemet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.nullified",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeHeader.nullifiedReason",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody",
      "short" : "laboratoryOrderOutcomeBody",
      "definition" : "laboratoryOrderOutcomeBody",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.resultType",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.resultType",
      "short" : "Text som anger vilken typ av svar som avses",
      "definition" : "Text som anger vilken typ av svar som avses. DEF = Definitivsvar TILL = Tilläggssvar Den senaste statusen är den som ska skickas med.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.registrationTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.registrationTime",
      "short" : "Tidpunkt då informationen om undersökningsresultatet lagrades i källsystemet.Det är den senaste tidpunkten då …",
      "definition" : "Tidpunkt då informationen om undersökningsresultatet lagrades i källsystemet.Det är den senaste tidpunkten då informationen uppdaterats i systemet som ska finnas här i de fall informationen har ändrats efter det att den skapades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.discipline",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.discipline",
      "short" : "Text som anger vilken typ av labenhet som undersökningsresultatet härrör från",
      "definition" : "Text som anger vilken typ av labenhet som undersökningsresultatet härrör från. Tillåtet värde är \"Klinisk kemi\"",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.resultReport",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.resultReport",
      "short" : "Text som beskriver det sammanfattande utlåtandet kring undersökningsresultatet",
      "definition" : "Text som beskriver det sammanfattande utlåtandet kring undersökningsresultatet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.resultComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.resultComment",
      "short" : "Text som innehåller en kommentar avseende hela det lämnade svaret",
      "definition" : "Text som innehåller en kommentar avseende hela det lämnade svaret",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional",
      "short" : "Information om den hälso-och sjukvårdspersonal som är ansvarig (”ansvarig labbläkare”) för …",
      "definition" : "Information om den hälso-och sjukvårdspersonal som är ansvarig (”ansvarig labbläkare”) för undersökningsresultatet (svaret).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt då svaret skickas från laboratoriesystemet",
      "definition" : "Tidpunkt då svaret skickas från laboratoriesystemet.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "hälso-och sjukvårdspersonens HSA-id",
      "definition" : "hälso-och sjukvårdspersonens HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på ansvarig hälso-och sjukvårdsperson",
      "definition" : "Namn på ansvarig hälso-och sjukvårdsperson. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Information om personens befattning",
      "definition" : "Information om personens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4), se referens [R 5]. Om kodverk saknas anges befattning i originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Den enhet som hälso-och sjukvårdspersonen är uppdragstagare på",
      "definition" : "Information om en organisationsenhet orgUnitHsaId: HSA-id för organisationsenhet orgUnitName Namn på organisationsenhet orgUnitTelecom: Telefon till organisationsenhet orgUnitEmail: Epost till enhet orgUnitAddress: Postadress till enhet orgUnitLocation: Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namnet på den organisation som författaren är uppdragstagare på",
      "definition" : "Namnet på den organisation som författaren är uppdragstagare på",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "Epost till enhet",
      "definition" : "Epost till enhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress för den organisation som författaren är uppdragstagare på",
      "definition" : "Postadress för den organisation som författaren är uppdragstagare på",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis",
      "short" : "Information om analystjänster som ligger till grund för ett undersökningsresultat",
      "definition" : "Information om analystjänster som ligger till grund för ett undersökningsresultat",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getlaboratoryorderoutcome31-analysis-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av analysisCode och analysisText ska anges",
        "expression" : "analysisCode.exists() xor analysisText.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcomeV31"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisId",
      "short" : "Unik identifierare för analystjänsten",
      "definition" : "Unik identifierare för analystjänsten",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisTime",
      "short" : "Tidsangivelse för åtgärdens utförande",
      "definition" : "Tidsangivelse för åtgärdens utförande. Här anges tiden för provtagningen. Om start eller end saknas, ska det vid tidsurval tolkas som att båda är satta till samma tidpunkt.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisCode",
      "short" : "Kod och klartext som anger vilken åtgärd som avses, enligt kodverket NPU",
      "definition" : "Kod och klartext som anger vilken åtgärd som avses, enligt kodverket NPU. Ett av attributen analysisCode och analysisText ska anges.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisText",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisText",
      "short" : "Text som anger vilken åtgärd som avses, om analysen ej finns kodad enligt NPU",
      "definition" : "Text som anger vilken åtgärd som avses, om analysen ej finns kodad enligt NPU. Attributet åtgärdskod text används endast för svar som ej kan kodas enligt NPU. I åtgärdskod text anges endast analysens namn i klartext, dvs inga lokala koder. Ett av attributen analysisCode och analysisText ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisStatus",
      "short" : "Text som anger åtgärdens status",
      "definition" : "Text som anger åtgärdens status. Då det är möjligt ska KV åtgärdsstatus följas. Exempel från KV åtgärdsstatus: Planerad, Pågående, Avklarad",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisComment",
      "short" : "Text som innehåller en kommentar som avser den utförda analysen",
      "definition" : "Text som innehåller en kommentar som avser den utförda analysen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.specimen",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.specimen",
      "short" : "Text som beskriver vilket typ av material som användes vid analysen",
      "definition" : "Text som beskriver vilket typ av material som användes vid analysen. Ange provmaterial i klartext. Exempel: Plasma Både provmaterial och lokalisation bör anges i klartext när så är lämpligt för aktuell undersökning. Exempel: Var höger fot\".",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.method",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.method",
      "short" : "Text som beskriver den metod som använts i analystjänsten",
      "definition" : "Text som beskriver den metod som använts i analystjänsten.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.relationToAnalysis",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.relationToAnalysis",
      "short" : "Anger samband med annan utförd analystjänst",
      "definition" : "Anger samband med annan utförd analystjänst.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.relationToAnalysis.analysisId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.relationToAnalysis.analysisId",
      "short" : "Unik identifierare för analystjänsten",
      "definition" : "Unik identifierare för analystjänsten.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome",
      "short" : "Information om ett resultatet/utfallet av en analystjänst",
      "definition" : "Information om ett resultatet/utfallet av en analystjänst.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.outcomeValue",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.outcomeValue",
      "short" : "Det specifika värdet för resultatet/utfallet",
      "definition" : "Det specifika värdet för resultatet/utfallet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.outcomeUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.outcomeUnit",
      "short" : "Text som anger i förekommande fall enheten för det angivna värdet",
      "definition" : "Text som anger i förekommande fall enheten för det angivna värdet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.observationTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.observationTime",
      "short" : "Tidpunkt då iakttagelsen av resultatet gjordes",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.pathologicalFlag",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.pathologicalFlag",
      "short" : "Kod som anger om resultatet ligger utanför referensintervall",
      "definition" : "Kod som anger om resultatet ligger utanför referensintervall. Sant = Ja, resultatet ligger utanför referens-intervall Falskt = Nej, resultatet ligger inte utanför referens-intervall.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.outcomeDescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.outcomeDescription",
      "short" : "Text som innehåller en kommentar avseende resultatet/utfallet",
      "definition" : "Text som innehåller en kommentar avseende resultatet/utfallet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.referenceInterval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.referenceInterval",
      "short" : "Text som innehåller det referensintervall som använts i analysen",
      "definition" : "Text som innehåller det referensintervall som använts i analysen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.referencePopulation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.analysisOutcome.referencePopulation",
      "short" : "Text som beskriver den population som referensintervallet gäller för",
      "definition" : "Text som beskriver den population som referensintervallet gäller för.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.attested",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3.1"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.attested",
      "short" : "Information om vidimering av enskild analys med tillhörande resultat",
      "definition" : "Information om vidimering av enskild analys med tillhörande resultat. Finns attested är analysen vidimerad. Med vidimerad menas att information om analysen har lästs och den som läst har tagit ansvar.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.attested.attestedTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3.1"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.attested.attestedTime",
      "short" : "Tidpunkten för vidimering",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.attested.attesterHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3.1"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.attested.attesterHSAId",
      "short" : "HSA-id för person som vidimerat",
      "definition" : "HSA-id för person som vidimerat",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.attested.attesterName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3.1"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.analysis.attested.attesterName",
      "short" : "Namn på person som vidimerat",
      "definition" : "Namn på person som vidimerat",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.order",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.order",
      "short" : "Information om en vårdbegäran som ligger till grund för svaret",
      "definition" : "Information om en vårdbegäran som ligger till grund för svaret",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.order.orderId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.order.orderId",
      "short" : "Unik identifierare för laboratorieremiss",
      "definition" : "Unik identifierare för laboratorieremiss. Om laboratorieremiss (och således även unik identifierare) saknas, exempelvis då analys utförts på vårdavdelning anges en tom sträng.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.order.orderReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.laboratoryOrderOutcome.laboratoryOrderOutcomeBody.order.orderReason",
      "short" : "Text som anger aktuell frågeställning",
      "definition" : "Text som anger aktuell frågeställning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.result",
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.result",
      "short" : "Innehåller information om begäran gick bra eller ej",
      "definition" : "Innehåller information om begäran gick bra eller ej.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.result.resultCode",
      "short" : "Kan endast vara OK, INFO eller ERROR",
      "definition" : "Tillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.result.errorCode",
      "short" : "Sätts endast om resultCode är ERROR, se kapitel 4.4 för mer information.",
      "definition" : "Tillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.result.logId",
      "short" : "En UUID som kan användas vid felanmälan för att användas vid felsökning av producent",
      "definition" : "En UUID som kan användas vid felanmälan för att användas vid felsökning av producent.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.result.subCode",
      "short" : "Inga subkoder är specificerade",
      "definition" : "Inga subkoder är specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV31.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV31.result.message",
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
