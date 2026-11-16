# RIV-TA PartialDateType (clinicalprocess:logistics:logistics:3) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA PartialDateType (clinicalprocess:logistics:logistics:3) 

**Användningar:**

* Använd denna Logisk modell: [GetCareContacts](StructureDefinition-SEEHDSLMCareContacts.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivPartialDateTypeLogisticsLogistics3.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivPartialDateTypeLogisticsLogistics3.csv), [Excel](../StructureDefinition-SEEHDSRivPartialDateTypeLogisticsLogistics3.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivPartialDateTypeLogisticsLogistics3",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialDateTypeLogisticsLogistics3",
  "version" : "0.9.0",
  "name" : "SEEHDSRivPartialDateTypeLogisticsLogistics3",
  "title" : "RIV-TA PartialDateType (clinicalprocess:logistics:logistics:3)",
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
  "description" : "RIV-TA-datatypen PartialDateType i namnrymden urn:riv:clinicalprocess:logistics:logistics:3.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialDateTypeLogisticsLogistics3",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivPartialDateTypeLogisticsLogistics3",
      "path" : "SEEHDSRivPartialDateTypeLogisticsLogistics3",
      "short" : "RIV-TA PartialDateType (clinicalprocess:logistics:logistics:3)",
      "definition" : "RIV-TA-datatypen PartialDateType i namnrymden urn:riv:clinicalprocess:logistics:logistics:3."
    },
    {
      "id" : "SEEHDSRivPartialDateTypeLogisticsLogistics3.format",
      "path" : "SEEHDSRivPartialDateTypeLogisticsLogistics3.format",
      "short" : "Format för värdet",
      "definition" : "Format för värdet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivPartialDateTypeLogisticsLogistics3.value",
      "path" : "SEEHDSRivPartialDateTypeLogisticsLogistics3.value",
      "short" : "Värde",
      "definition" : "Värde",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
