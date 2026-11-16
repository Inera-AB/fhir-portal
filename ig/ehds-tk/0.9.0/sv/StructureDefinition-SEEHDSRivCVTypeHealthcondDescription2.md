# RIV-TA CVType (clinicalprocess:healthcond:description:2) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA CVType (clinicalprocess:healthcond:description:2) 

**Användningar:**

* Använd denna Logisk modell: [GetAlertInformation](StructureDefinition-SEEHDSLMAlertInformation.md), [GetCareDocumentation 2.1](StructureDefinition-SEEHDSLMCareDocumentationV21.md), [GetDiagnosis](StructureDefinition-SEEHDSLMDiagnosis.md) and [GetFunctionalStatus](StructureDefinition-SEEHDSLMFunctionalStatus.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivCVTypeHealthcondDescription2.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivCVTypeHealthcondDescription2.csv), [Excel](../StructureDefinition-SEEHDSRivCVTypeHealthcondDescription2.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivCVTypeHealthcondDescription2",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2",
  "version" : "0.9.0",
  "name" : "SEEHDSRivCVTypeHealthcondDescription2",
  "title" : "RIV-TA CVType (clinicalprocess:healthcond:description:2)",
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
  "description" : "RIV-TA-datatypen CVType i namnrymden urn:riv:clinicalprocess:healthcond:description:2.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription2",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivCVTypeHealthcondDescription2",
      "path" : "SEEHDSRivCVTypeHealthcondDescription2",
      "short" : "RIV-TA CVType (clinicalprocess:healthcond:description:2)",
      "definition" : "RIV-TA-datatypen CVType i namnrymden urn:riv:clinicalprocess:healthcond:description:2."
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription2.code",
      "path" : "SEEHDSRivCVTypeHealthcondDescription2.code",
      "short" : "Kod",
      "definition" : "Kod",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription2.codeSystem",
      "path" : "SEEHDSRivCVTypeHealthcondDescription2.codeSystem",
      "short" : "OID för kodsystem",
      "definition" : "OID för kodsystem",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription2.codeSystemName",
      "path" : "SEEHDSRivCVTypeHealthcondDescription2.codeSystemName",
      "short" : "Kodsystemets namn",
      "definition" : "Kodsystemets namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription2.codeSystemVersion",
      "path" : "SEEHDSRivCVTypeHealthcondDescription2.codeSystemVersion",
      "short" : "Kodsystemets version",
      "definition" : "Kodsystemets version",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription2.displayName",
      "path" : "SEEHDSRivCVTypeHealthcondDescription2.displayName",
      "short" : "Kodens klartext",
      "definition" : "Kodens klartext",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription2.originalText",
      "path" : "SEEHDSRivCVTypeHealthcondDescription2.originalText",
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
