# RIV-TA TimePeriodType (clinicalprocess:healthcond:actoutcome:4) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA TimePeriodType (clinicalprocess:healthcond:actoutcome:4) 

**Användningar:**

* Använd denna Logisk modell: [GetLaboratoryOrderOutcome](StructureDefinition-SEEHDSLMLaboratoryOrderOutcome.md) and [GetLaboratoryOrderOutcome 4.1](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV41.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivTimePeriodTypeHealthcondActoutcome4.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivTimePeriodTypeHealthcondActoutcome4.csv), [Excel](../StructureDefinition-SEEHDSRivTimePeriodTypeHealthcondActoutcome4.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivTimePeriodTypeHealthcondActoutcome4",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondActoutcome4",
  "version" : "0.9.0",
  "name" : "SEEHDSRivTimePeriodTypeHealthcondActoutcome4",
  "title" : "RIV-TA TimePeriodType (clinicalprocess:healthcond:actoutcome:4)",
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
  "description" : "RIV-TA-datatypen TimePeriodType i namnrymden urn:riv:clinicalprocess:healthcond:actoutcome:4.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondActoutcome4",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivTimePeriodTypeHealthcondActoutcome4",
      "path" : "SEEHDSRivTimePeriodTypeHealthcondActoutcome4",
      "short" : "RIV-TA TimePeriodType (clinicalprocess:healthcond:actoutcome:4)",
      "definition" : "RIV-TA-datatypen TimePeriodType i namnrymden urn:riv:clinicalprocess:healthcond:actoutcome:4."
    },
    {
      "id" : "SEEHDSRivTimePeriodTypeHealthcondActoutcome4.start",
      "path" : "SEEHDSRivTimePeriodTypeHealthcondActoutcome4.start",
      "short" : "Starttidpunkt",
      "definition" : "Starttidpunkt",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSRivTimePeriodTypeHealthcondActoutcome4.end",
      "path" : "SEEHDSRivTimePeriodTypeHealthcondActoutcome4.end",
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
