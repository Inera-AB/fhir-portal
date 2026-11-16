# RIV-TA CVType (clinicalprocess:healthcond:description:3) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA CVType (clinicalprocess:healthcond:description:3) 

**Användningar:**

* Använd denna Logisk modell: [GetAlertInformation 3.0](StructureDefinition-SEEHDSLMAlertInformationV30.md) and [GetCareDocumentation](StructureDefinition-SEEHDSLMCareDocumentation.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivCVTypeHealthcondDescription3.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivCVTypeHealthcondDescription3.csv), [Excel](../StructureDefinition-SEEHDSRivCVTypeHealthcondDescription3.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivCVTypeHealthcondDescription3",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3",
  "version" : "0.9.0",
  "name" : "SEEHDSRivCVTypeHealthcondDescription3",
  "title" : "RIV-TA CVType (clinicalprocess:healthcond:description:3)",
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
  "description" : "RIV-TA-datatypen CVType i namnrymden urn:riv:clinicalprocess:healthcond:description:3.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivCVTypeHealthcondDescription3",
      "path" : "SEEHDSRivCVTypeHealthcondDescription3",
      "short" : "RIV-TA CVType (clinicalprocess:healthcond:description:3)",
      "definition" : "RIV-TA-datatypen CVType i namnrymden urn:riv:clinicalprocess:healthcond:description:3."
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription3.code",
      "path" : "SEEHDSRivCVTypeHealthcondDescription3.code",
      "short" : "Kod",
      "definition" : "Kod",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription3.codeSystem",
      "path" : "SEEHDSRivCVTypeHealthcondDescription3.codeSystem",
      "short" : "OID för kodsystem",
      "definition" : "OID för kodsystem",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription3.codeSystemName",
      "path" : "SEEHDSRivCVTypeHealthcondDescription3.codeSystemName",
      "short" : "Kodsystemets namn",
      "definition" : "Kodsystemets namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription3.codeSystemVersion",
      "path" : "SEEHDSRivCVTypeHealthcondDescription3.codeSystemVersion",
      "short" : "Kodsystemets version",
      "definition" : "Kodsystemets version",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription3.displayName",
      "path" : "SEEHDSRivCVTypeHealthcondDescription3.displayName",
      "short" : "Kodens klartext",
      "definition" : "Kodens klartext",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeHealthcondDescription3.originalText",
      "path" : "SEEHDSRivCVTypeHealthcondDescription3.originalText",
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
