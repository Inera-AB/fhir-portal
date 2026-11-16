# RIV-TA PQIntervalType (clinicalprocess:healthcond:basic:1.2) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA PQIntervalType (clinicalprocess:healthcond:basic:1.2) 

**Användningar:**

* Använd denna Logisk modell: [GetObservations 1.2](StructureDefinition-SEEHDSLMObservationsV12.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivPQIntervalTypeHealthcondBasic12.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivPQIntervalTypeHealthcondBasic12.csv), [Excel](../StructureDefinition-SEEHDSRivPQIntervalTypeHealthcondBasic12.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivPQIntervalTypeHealthcondBasic12",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1.2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeHealthcondBasic12",
  "version" : "0.9.0",
  "name" : "SEEHDSRivPQIntervalTypeHealthcondBasic12",
  "title" : "RIV-TA PQIntervalType (clinicalprocess:healthcond:basic:1.2)",
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
  "description" : "RIV-TA-datatypen PQIntervalType i namnrymden urn:riv:clinicalprocess:healthcond:basic:1.2.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeHealthcondBasic12",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivPQIntervalTypeHealthcondBasic12",
      "path" : "SEEHDSRivPQIntervalTypeHealthcondBasic12",
      "short" : "RIV-TA PQIntervalType (clinicalprocess:healthcond:basic:1.2)",
      "definition" : "RIV-TA-datatypen PQIntervalType i namnrymden urn:riv:clinicalprocess:healthcond:basic:1.2."
    },
    {
      "id" : "SEEHDSRivPQIntervalTypeHealthcondBasic12.low",
      "path" : "SEEHDSRivPQIntervalTypeHealthcondBasic12.low",
      "short" : "Nedre gräns",
      "definition" : "Nedre gräns",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSRivPQIntervalTypeHealthcondBasic12.lowClosed",
      "path" : "SEEHDSRivPQIntervalTypeHealthcondBasic12.lowClosed",
      "short" : "Nedre gräns inkluderad",
      "definition" : "Nedre gräns inkluderad",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSRivPQIntervalTypeHealthcondBasic12.high",
      "path" : "SEEHDSRivPQIntervalTypeHealthcondBasic12.high",
      "short" : "Övre gräns",
      "definition" : "Övre gräns",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSRivPQIntervalTypeHealthcondBasic12.highClosed",
      "path" : "SEEHDSRivPQIntervalTypeHealthcondBasic12.highClosed",
      "short" : "Övre gräns inkluderad",
      "definition" : "Övre gräns inkluderad",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSRivPQIntervalTypeHealthcondBasic12.unit",
      "path" : "SEEHDSRivPQIntervalTypeHealthcondBasic12.unit",
      "short" : "Enhet",
      "definition" : "Enhet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
