# RIV-TA TimePeriodType (clinicalprocess:logistics:logistics:2) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA TimePeriodType (clinicalprocess:logistics:logistics:2) 

**Användningar:**

* Använd denna Logisk modell: [GetCareContacts 2.0](StructureDefinition-SEEHDSLMCareContactsV20.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivTimePeriodTypeLogisticsLogistics2.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivTimePeriodTypeLogisticsLogistics2.csv), [Excel](../StructureDefinition-SEEHDSRivTimePeriodTypeLogisticsLogistics2.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivTimePeriodTypeLogisticsLogistics2",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeLogisticsLogistics2",
  "version" : "0.9.0",
  "name" : "SEEHDSRivTimePeriodTypeLogisticsLogistics2",
  "title" : "RIV-TA TimePeriodType (clinicalprocess:logistics:logistics:2)",
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
  "description" : "RIV-TA-datatypen TimePeriodType i namnrymden urn:riv:clinicalprocess:logistics:logistics:2.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeLogisticsLogistics2",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivTimePeriodTypeLogisticsLogistics2",
      "path" : "SEEHDSRivTimePeriodTypeLogisticsLogistics2",
      "short" : "RIV-TA TimePeriodType (clinicalprocess:logistics:logistics:2)",
      "definition" : "RIV-TA-datatypen TimePeriodType i namnrymden urn:riv:clinicalprocess:logistics:logistics:2."
    },
    {
      "id" : "SEEHDSRivTimePeriodTypeLogisticsLogistics2.start",
      "path" : "SEEHDSRivTimePeriodTypeLogisticsLogistics2.start",
      "short" : "Starttidpunkt",
      "definition" : "Starttidpunkt",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSRivTimePeriodTypeLogisticsLogistics2.end",
      "path" : "SEEHDSRivTimePeriodTypeLogisticsLogistics2.end",
      "short" : "Sluttidpunkt",
      "definition" : "Sluttidpunkt",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    }]
  }
}

```
