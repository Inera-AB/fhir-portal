# RIV-TA xs:boolean - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA xs:boolean 

**Användningar:**

* Använd denna Logisk modell: [GetAlertInformation](StructureDefinition-SEEHDSLMAlertInformation.md), [GetAlertInformation 3.0](StructureDefinition-SEEHDSLMAlertInformationV30.md), [GetCareContacts](StructureDefinition-SEEHDSLMCareContacts.md), [GetCareContacts 2.0](StructureDefinition-SEEHDSLMCareContactsV20.md)... Show 20 more, [GetCareDocumentation](StructureDefinition-SEEHDSLMCareDocumentation.md), [GetCareDocumentation 2.1](StructureDefinition-SEEHDSLMCareDocumentationV21.md), [GetCarePlans](StructureDefinition-SEEHDSLMCarePlans.md), [GetDiagnosis](StructureDefinition-SEEHDSLMDiagnosis.md), [GetFunctionalStatus](StructureDefinition-SEEHDSLMFunctionalStatus.md), [GetImagingOutcome](StructureDefinition-SEEHDSLMImagingOutcome.md), [GetLaboratoryOrderOutcome](StructureDefinition-SEEHDSLMLaboratoryOrderOutcome.md), [GetLaboratoryOrderOutcome 3.1](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV31.md), [GetLaboratoryOrderOutcome 4.1](StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV41.md), [GetMaternityMedicalHistory](StructureDefinition-SEEHDSLMMaternityMedicalHistory.md), [GetMedicationHistory](StructureDefinition-SEEHDSLMMedicationHistory.md), [GetObservations](StructureDefinition-SEEHDSLMObservations.md), [GetObservations 1.2](StructureDefinition-SEEHDSLMObservationsV12.md), [GetReferralOutcome](StructureDefinition-SEEHDSLMReferralOutcome.md), [GetReferralOutcome 3.1](StructureDefinition-SEEHDSLMReferralOutcomeV31.md), [GetRequestActivities](StructureDefinition-SEEHDSLMRequestActivities.md), [GetVaccinationHistory](StructureDefinition-SEEHDSLMVaccinationHistory.md), [GetVaccinationHistory 1.0](StructureDefinition-SEEHDSLMVaccinationHistoryV10.md), [RIV-TA PQIntervalType (clinicalprocess:healthcond:actoutcome:4)](StructureDefinition-SEEHDSRivPQIntervalTypeHealthcondActoutcome4.md) and [RIV-TA PQIntervalType (clinicalprocess:healthcond:basic:1.2)](StructureDefinition-SEEHDSRivPQIntervalTypeHealthcondBasic12.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivBoolean.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivBoolean.csv), [Excel](../StructureDefinition-SEEHDSRivBoolean.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivBoolean",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean",
  "version" : "0.9.0",
  "name" : "SEEHDSRivBoolean",
  "title" : "RIV-TA xs:boolean",
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
  "description" : "Sanningsvärde (true/false). Elementets värde ligger som textinnehåll i XML-elementet (representation xmlText).",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivBoolean",
      "path" : "SEEHDSRivBoolean",
      "short" : "RIV-TA xs:boolean",
      "definition" : "Sanningsvärde (true/false). Elementets värde ligger som textinnehåll i XML-elementet (representation xmlText)."
    },
    {
      "id" : "SEEHDSRivBoolean.value",
      "path" : "SEEHDSRivBoolean.value",
      "representation" : ["xmlText"],
      "short" : "Elementets textinnehåll",
      "definition" : "Elementets textinnehåll",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "boolean"
      }]
    }]
  }
}

```
