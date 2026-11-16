# RIV-TA xs:dateTime - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA xs:dateTime 

**Användningar:**

* Använd denna Logisk modell: [GetAccessLogForPatient](StructureDefinition-SEEHDSLMAccessLog.md) and [GetAccessLogsForPatient 1.1](StructureDefinition-SEEHDSLMAccessLogV11.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivDateTime.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivDateTime.csv), [Excel](../StructureDefinition-SEEHDSRivDateTime.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivDateTime",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDateTime",
  "version" : "0.9.0",
  "name" : "SEEHDSRivDateTime",
  "title" : "RIV-TA xs:dateTime",
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
  "description" : "Tidpunkt enligt xs:dateTime. Lagras som text eftersom xs:dateTime tillåter tidpunkt utan tidszon. Elementets värde ligger som textinnehåll i XML-elementet (representation xmlText).",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDateTime",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivDateTime",
      "path" : "SEEHDSRivDateTime",
      "short" : "RIV-TA xs:dateTime",
      "definition" : "Tidpunkt enligt xs:dateTime. Lagras som text eftersom xs:dateTime tillåter tidpunkt utan tidszon. Elementets värde ligger som textinnehåll i XML-elementet (representation xmlText)."
    },
    {
      "id" : "SEEHDSRivDateTime.value",
      "path" : "SEEHDSRivDateTime.value",
      "representation" : ["xmlText"],
      "short" : "Elementets textinnehåll",
      "definition" : "Elementets textinnehåll",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }]
    }]
  }
}

```
