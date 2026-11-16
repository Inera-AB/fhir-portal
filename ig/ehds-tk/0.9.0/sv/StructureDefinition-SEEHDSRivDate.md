# RIV-TA DateType - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA DateType 

**Användningar:**

* Använd denna Logisk modell: [GetAlertInformation](StructureDefinition-SEEHDSLMAlertInformation.md), [GetMaternityMedicalHistory](StructureDefinition-SEEHDSLMMaternityMedicalHistory.md), [GetMedicationHistory](StructureDefinition-SEEHDSLMMedicationHistory.md), [GetObservations](StructureDefinition-SEEHDSLMObservations.md)... Show 3 more, [GetObservations 1.2](StructureDefinition-SEEHDSLMObservationsV12.md), [GetVaccinationHistory](StructureDefinition-SEEHDSLMVaccinationHistory.md) and [GetVaccinationHistory 1.0](StructureDefinition-SEEHDSLMVaccinationHistoryV10.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivDate.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivDate.csv), [Excel](../StructureDefinition-SEEHDSRivDate.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivDate",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate",
  "version" : "0.9.0",
  "name" : "SEEHDSRivDate",
  "title" : "RIV-TA DateType",
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
  "description" : "Datum i formatet ÅÅÅÅMMDD. Elementets värde ligger som textinnehåll i XML-elementet (representation xmlText).",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivDate",
      "path" : "SEEHDSRivDate",
      "short" : "RIV-TA DateType",
      "definition" : "Datum i formatet ÅÅÅÅMMDD. Elementets värde ligger som textinnehåll i XML-elementet (representation xmlText)."
    },
    {
      "id" : "SEEHDSRivDate.value",
      "path" : "SEEHDSRivDate.value",
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
