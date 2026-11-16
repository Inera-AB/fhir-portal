# RIV-TA PersonIdType (clinicalprocess:healthcond:description:2) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA PersonIdType (clinicalprocess:healthcond:description:2) 

**Användningar:**

* Använd denna Logisk modell: [GetAlertInformation](StructureDefinition-SEEHDSLMAlertInformation.md), [GetCareDocumentation 2.1](StructureDefinition-SEEHDSLMCareDocumentationV21.md), [GetDiagnosis](StructureDefinition-SEEHDSLMDiagnosis.md) and [GetFunctionalStatus](StructureDefinition-SEEHDSLMFunctionalStatus.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivPersonIdTypeHealthcondDescription2.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivPersonIdTypeHealthcondDescription2.csv), [Excel](../StructureDefinition-SEEHDSRivPersonIdTypeHealthcondDescription2.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivPersonIdTypeHealthcondDescription2",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:description:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondDescription2",
  "version" : "0.9.0",
  "name" : "SEEHDSRivPersonIdTypeHealthcondDescription2",
  "title" : "RIV-TA PersonIdType (clinicalprocess:healthcond:description:2)",
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
  "description" : "RIV-TA-datatypen PersonIdType i namnrymden urn:riv:clinicalprocess:healthcond:description:2.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondDescription2",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivPersonIdTypeHealthcondDescription2",
      "path" : "SEEHDSRivPersonIdTypeHealthcondDescription2",
      "short" : "RIV-TA PersonIdType (clinicalprocess:healthcond:description:2)",
      "definition" : "RIV-TA-datatypen PersonIdType i namnrymden urn:riv:clinicalprocess:healthcond:description:2."
    },
    {
      "id" : "SEEHDSRivPersonIdTypeHealthcondDescription2.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSRivPersonIdTypeHealthcondDescription2.rivId",
      "short" : "Personidentitet (12 tecken utan avskiljare)",
      "definition" : "Personidentitet (12 tecken utan avskiljare)",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivPersonIdTypeHealthcondDescription2.type",
      "path" : "SEEHDSRivPersonIdTypeHealthcondDescription2.type",
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
