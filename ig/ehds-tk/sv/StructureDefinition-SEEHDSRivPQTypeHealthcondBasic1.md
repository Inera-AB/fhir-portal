# RIV-TA PQType (clinicalprocess:healthcond:basic:1) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA PQType (clinicalprocess:healthcond:basic:1) 

**Användningar:**

* Använd denna Logisk modell: [GetObservations 1.2](StructureDefinition-SEEHDSLMObservationsV12.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivPQTypeHealthcondBasic1.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivPQTypeHealthcondBasic1.csv), [Excel](../StructureDefinition-SEEHDSRivPQTypeHealthcondBasic1.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivPQTypeHealthcondBasic1",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondBasic1",
  "version" : "0.9.0",
  "name" : "SEEHDSRivPQTypeHealthcondBasic1",
  "title" : "RIV-TA PQType (clinicalprocess:healthcond:basic:1)",
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
  "description" : "RIV-TA-datatypen PQType i namnrymden urn:riv:clinicalprocess:healthcond:basic:1.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondBasic1",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivPQTypeHealthcondBasic1",
      "path" : "SEEHDSRivPQTypeHealthcondBasic1",
      "short" : "RIV-TA PQType (clinicalprocess:healthcond:basic:1)",
      "definition" : "RIV-TA-datatypen PQType i namnrymden urn:riv:clinicalprocess:healthcond:basic:1."
    },
    {
      "id" : "SEEHDSRivPQTypeHealthcondBasic1.value",
      "path" : "SEEHDSRivPQTypeHealthcondBasic1.value",
      "short" : "Värde",
      "definition" : "Värde",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSRivPQTypeHealthcondBasic1.unit",
      "path" : "SEEHDSRivPQTypeHealthcondBasic1.unit",
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
