# RIV-TA CVType (clinicalprocess:healthcond:actoutcome:4) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA CVType (clinicalprocess:healthcond:actoutcome:4) 

**Användningar:**

* Använd denna Logisk modell: [GetLaboratoryOrderOutcome](StructureDefinition-SEEHDSLMLaboratoryOrderOutcome.md) and [GetLaboratoryOrderOutcome 4.1](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV41.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivCVTypeHealthcondActoutcome4.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivCVTypeHealthcondActoutcome4.csv), [Excel](../StructureDefinition-SEEHDSRivCVTypeHealthcondActoutcome4.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivCVTypeHealthcondActoutcome4",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4",
  "version" : "0.9.0",
  "name" : "SEEHDSRivCVTypeHealthcondActoutcome4",
  "title" : "RIV-TA CVType (clinicalprocess:healthcond:actoutcome:4)",
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
  "description" : "RIV-TA-datatypen CVType i namnrymden urn:riv:clinicalprocess:healthcond:actoutcome:4.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivCVTypeHealthcondActoutcome4",
      "path" : "SEEHDSRivCVTypeHealthcondActoutcome4",
      "short" : "RIV-TA CVType (clinicalprocess:healthcond:actoutcome:4)",
      "definition" : "RIV-TA-datatypen CVType i namnrymden urn:riv:clinicalprocess:healthcond:actoutcome:4."
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondActoutcome4.code",
      "path" : "SEEHDSRivCVTypeHealthcondActoutcome4.code",
      "short" : "Kod",
      "definition" : "Kod",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondActoutcome4.codeSystem",
      "path" : "SEEHDSRivCVTypeHealthcondActoutcome4.codeSystem",
      "short" : "OID för kodsystem",
      "definition" : "OID för kodsystem",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondActoutcome4.codeSystemName",
      "path" : "SEEHDSRivCVTypeHealthcondActoutcome4.codeSystemName",
      "short" : "Kodsystemets namn",
      "definition" : "Kodsystemets namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondActoutcome4.codeSystemVersion",
      "path" : "SEEHDSRivCVTypeHealthcondActoutcome4.codeSystemVersion",
      "short" : "Kodsystemets version",
      "definition" : "Kodsystemets version",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondActoutcome4.displayName",
      "path" : "SEEHDSRivCVTypeHealthcondActoutcome4.displayName",
      "short" : "Kodens klartext",
      "definition" : "Kodens klartext",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondActoutcome4.originalText",
      "path" : "SEEHDSRivCVTypeHealthcondActoutcome4.originalText",
      "short" : "Originaltext (om kod saknas eller som komplement)",
      "definition" : "Originaltext (om kod saknas eller som komplement)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
