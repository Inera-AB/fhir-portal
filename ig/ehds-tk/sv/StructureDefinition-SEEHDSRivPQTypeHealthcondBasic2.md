# RIV-TA PQType (clinicalprocess:healthcond:basic:2) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA PQType (clinicalprocess:healthcond:basic:2) 

**Användningar:**

* Använd denna Logisk modell: [GetObservations](StructureDefinition-SEEHDSLMObservations.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivPQTypeHealthcondBasic2.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivPQTypeHealthcondBasic2.csv), [Excel](../StructureDefinition-SEEHDSRivPQTypeHealthcondBasic2.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivPQTypeHealthcondBasic2",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondBasic2",
  "version" : "0.9.0",
  "name" : "SEEHDSRivPQTypeHealthcondBasic2",
  "title" : "RIV-TA PQType (clinicalprocess:healthcond:basic:2)",
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
  "description" : "RIV-TA-datatypen PQType i namnrymden urn:riv:clinicalprocess:healthcond:basic:2.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondBasic2",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivPQTypeHealthcondBasic2",
      "path" : "SEEHDSRivPQTypeHealthcondBasic2",
      "short" : "RIV-TA PQType (clinicalprocess:healthcond:basic:2)",
      "definition" : "RIV-TA-datatypen PQType i namnrymden urn:riv:clinicalprocess:healthcond:basic:2."
    },
    {
      "id" : "SEEHDSRivPQTypeHealthcondBasic2.value",
      "path" : "SEEHDSRivPQTypeHealthcondBasic2.value",
      "short" : "Värde",
      "definition" : "Värde",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSRivPQTypeHealthcondBasic2.unit",
      "path" : "SEEHDSRivPQTypeHealthcondBasic2.unit",
      "short" : "Enhet",
      "definition" : "Enhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
