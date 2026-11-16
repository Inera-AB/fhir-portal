# RIV-TA PQIntervalType (clinicalprocess:activityprescription:actoutcome:2) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA PQIntervalType (clinicalprocess:activityprescription:actoutcome:2) 

**Användningar:**

* Använd denna Logisk modell: [GetMedicationHistory](StructureDefinition-SEEHDSLMMedicationHistory.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2.csv), [Excel](../StructureDefinition-SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2",
  "version" : "0.9.0",
  "name" : "SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2",
  "title" : "RIV-TA PQIntervalType (clinicalprocess:activityprescription:actoutcome:2)",
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
  "description" : "RIV-TA-datatypen PQIntervalType i namnrymden urn:riv:clinicalprocess:activityprescription:actoutcome:2.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2",
      "path" : "SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2",
      "short" : "RIV-TA PQIntervalType (clinicalprocess:activityprescription:actoutcome:2)",
      "definition" : "RIV-TA-datatypen PQIntervalType i namnrymden urn:riv:clinicalprocess:activityprescription:actoutcome:2."
    },
    {
      "id" : "SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2.low",
      "path" : "SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2.low",
      "short" : "Nedre gräns",
      "definition" : "Nedre gräns",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2.high",
      "path" : "SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2.high",
      "short" : "Övre gräns",
      "definition" : "Övre gräns",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2.unit",
      "path" : "SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2.unit",
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
