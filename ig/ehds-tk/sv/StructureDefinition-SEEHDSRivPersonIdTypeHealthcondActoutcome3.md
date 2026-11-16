# RIV-TA PersonIdType (clinicalprocess:healthcond:actoutcome:3) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA PersonIdType (clinicalprocess:healthcond:actoutcome:3) 

**Användningar:**

* Använd denna Logisk modell: [GetImagingOutcome](StructureDefinition-SEEHDSLMImagingOutcome.md), [GetLaboratoryOrderOutcome 3.1](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV31.md), [GetReferralOutcome](StructureDefinition-SEEHDSLMReferralOutcome.md) and [GetReferralOutcome 3.1](StructureDefinition-SEEHDSLMReferralOutcomeV31.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivPersonIdTypeHealthcondActoutcome3.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **Differentialvy** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **ÖgonblicksbildsvyView** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivPersonIdTypeHealthcondActoutcome3.csv), [Excel](../StructureDefinition-SEEHDSRivPersonIdTypeHealthcondActoutcome3.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivPersonIdTypeHealthcondActoutcome3",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondActoutcome3",
  "version" : "0.9.0",
  "name" : "SEEHDSRivPersonIdTypeHealthcondActoutcome3",
  "title" : "RIV-TA PersonIdType (clinicalprocess:healthcond:actoutcome:3)",
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
  "description" : "RIV-TA-datatypen PersonIdType i namnrymden urn:riv:clinicalprocess:healthcond:actoutcome:3.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondActoutcome3",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivPersonIdTypeHealthcondActoutcome3",
      "path" : "SEEHDSRivPersonIdTypeHealthcondActoutcome3",
      "short" : "RIV-TA PersonIdType (clinicalprocess:healthcond:actoutcome:3)",
      "definition" : "RIV-TA-datatypen PersonIdType i namnrymden urn:riv:clinicalprocess:healthcond:actoutcome:3."
    },
    {
      "id" : "SEEHDSRivPersonIdTypeHealthcondActoutcome3.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSRivPersonIdTypeHealthcondActoutcome3.rivId",
      "short" : "Personidentitet (12 tecken utan avskiljare)",
      "definition" : "Personidentitet (12 tecken utan avskiljare)",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivPersonIdTypeHealthcondActoutcome3.type",
      "path" : "SEEHDSRivPersonIdTypeHealthcondActoutcome3.type",
      "short" : "OID för typ av personidentitet",
      "definition" : "OID för typ av personidentitet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
