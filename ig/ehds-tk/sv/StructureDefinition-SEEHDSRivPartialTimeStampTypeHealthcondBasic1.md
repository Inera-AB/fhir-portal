# RIV-TA PartialTimeStampType (clinicalprocess:healthcond:basic:1) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA PartialTimeStampType (clinicalprocess:healthcond:basic:1) 

**Användningar:**

* Använd denna Logisk modell: [GetObservations 1.2](StructureDefinition-SEEHDSLMObservationsV12.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivPartialTimeStampTypeHealthcondBasic1.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivPartialTimeStampTypeHealthcondBasic1.csv), [Excel](../StructureDefinition-SEEHDSRivPartialTimeStampTypeHealthcondBasic1.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivPartialTimeStampTypeHealthcondBasic1",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic1",
  "version" : "0.9.0",
  "name" : "SEEHDSRivPartialTimeStampTypeHealthcondBasic1",
  "title" : "RIV-TA PartialTimeStampType (clinicalprocess:healthcond:basic:1)",
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
  "description" : "RIV-TA-datatypen PartialTimeStampType i namnrymden urn:riv:clinicalprocess:healthcond:basic:1.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic1",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivPartialTimeStampTypeHealthcondBasic1",
      "path" : "SEEHDSRivPartialTimeStampTypeHealthcondBasic1",
      "short" : "RIV-TA PartialTimeStampType (clinicalprocess:healthcond:basic:1)",
      "definition" : "RIV-TA-datatypen PartialTimeStampType i namnrymden urn:riv:clinicalprocess:healthcond:basic:1."
    },
    {
      "id" : "SEEHDSRivPartialTimeStampTypeHealthcondBasic1.format",
      "path" : "SEEHDSRivPartialTimeStampTypeHealthcondBasic1.format",
      "short" : "Format för värdet",
      "definition" : "Format för värdet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivPartialTimeStampTypeHealthcondBasic1.value",
      "path" : "SEEHDSRivPartialTimeStampTypeHealthcondBasic1.value",
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
