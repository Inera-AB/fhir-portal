# RIV-TA decimaltal - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA decimaltal 

**Användningar:**

* Använd denna Logisk modell: [GetMaternityMedicalHistory](StructureDefinition-SEEHDSLMMaternityMedicalHistory.md), [GetMedicationHistory](StructureDefinition-SEEHDSLMMedicationHistory.md), [GetObservations](StructureDefinition-SEEHDSLMObservations.md), [RIV-TA PQIntervalType (clinicalprocess:activityprescription:actoutcome:2)](StructureDefinition-SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2.md)... Show 8 more, [RIV-TA PQIntervalType (clinicalprocess:healthcond:basic:1.2)](StructureDefinition-SEEHDSRivPQIntervalTypeHealthcondBasic12.md), [RIV-TA PQIntervalType (clinicalprocess:healthcond:basic:2)](StructureDefinition-SEEHDSRivPQIntervalTypeHealthcondBasic2.md), [RIV-TA PQType (clinicalprocess:activityprescription:actoutcome:1)](StructureDefinition-SEEHDSRivPQTypeActivityprescriptionActoutcome1.md), [RIV-TA PQType (clinicalprocess:activityprescription:actoutcome:2)](StructureDefinition-SEEHDSRivPQTypeActivityprescriptionActoutcome2.md), [RIV-TA PQType (clinicalprocess:healthcond:actoutcome:2)](StructureDefinition-SEEHDSRivPQTypeHealthcondActoutcome2.md), [RIV-TA PQType (clinicalprocess:healthcond:actoutcome:3)](StructureDefinition-SEEHDSRivPQTypeHealthcondActoutcome3.md), [RIV-TA PQType (clinicalprocess:healthcond:basic:1)](StructureDefinition-SEEHDSRivPQTypeHealthcondBasic1.md) and [RIV-TA PQType (clinicalprocess:healthcond:basic:2)](StructureDefinition-SEEHDSRivPQTypeHealthcondBasic2.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivDecimal.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivDecimal.csv), [Excel](../StructureDefinition-SEEHDSRivDecimal.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivDecimal",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal",
  "version" : "0.9.0",
  "name" : "SEEHDSRivDecimal",
  "title" : "RIV-TA decimaltal",
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
  "description" : "Decimaltal (xs:double/xs:decimal). Elementets värde ligger som textinnehåll i XML-elementet (representation xmlText).",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivDecimal",
      "path" : "SEEHDSRivDecimal",
      "short" : "RIV-TA decimaltal",
      "definition" : "Decimaltal (xs:double/xs:decimal). Elementets värde ligger som textinnehåll i XML-elementet (representation xmlText)."
    },
    {
      "id" : "SEEHDSRivDecimal.value",
      "path" : "SEEHDSRivDecimal.value",
      "representation" : ["xmlText"],
      "short" : "Elementets textinnehåll",
      "definition" : "Elementets textinnehåll",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "decimal"
      }]
    }]
  }
}

```
