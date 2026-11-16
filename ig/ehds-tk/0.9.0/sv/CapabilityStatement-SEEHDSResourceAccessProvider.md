# SE EHDS Resource Access Provider - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CapabilityStatement: SE EHDS Resource Access Provider 

 [Rå OpenAPI-Swagger-definitionsfil](../SEEHDSResourceAccessProvider.openapi.json) | [Ladda ner](../SEEHDSResourceAccessProvider.openapi.json) 



## Resource Content

```json
{
  "resourceType" : "CapabilityStatement",
  "id" : "SEEHDSResourceAccessProvider",
  "url" : "https://fhir.inera.se/ig/ehds-tk/CapabilityStatement/SEEHDSResourceAccessProvider",
  "version" : "0.9.0",
  "name" : "SEEHDSResourceAccessProvider",
  "title" : "SE EHDS Resource Access Provider",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-05",
  "publisher" : "Inera AB",
  "contact" : [{
    "name" : "Inera AB",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.inera.se"
    }]
  }],
  "description" : "Krav på ett FHIR-API som tillhandahåller data från RIVTA-tjänstekontrakten enligt denna IG.\nBygger på EURIDICE (EU Health Data API) Resource Access Provider och anger vilka profiler i\ndenna IG som resurserna ska följa.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "kind" : "requirements",
  "instantiates" : ["http://hl7.eu/fhir/health-data-api/CapabilityStatement/resource-access-provider-eu-api"],
  "fhirVersion" : "4.0.1",
  "format" : ["json", "xml"],
  "rest" : [{
    "mode" : "server",
    "documentation" : "Alla sökningar är patientavgränsade (patient-parameter krävs), enligt EURIDICE. Varje utlämning loggas enligt SEEHDSAuditEventPatientQuery/SEEHDSAuditEventPatientRead.",
    "resource" : [{
      "type" : "Patient",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
    },
    {
      "type" : "Condition",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSConditionDiagnosis",
      "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSConditionFunctional"]
    },
    {
      "type" : "AllergyIntolerance",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSAllergyIntolerance"]
    },
    {
      "type" : "Flag",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSFlag"]
    },
    {
      "type" : "MedicationStatement",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSMedicationStatement"]
    },
    {
      "type" : "Immunization",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSImmunization"]
    },
    {
      "type" : "Observation",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSObservationLab",
      "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSObservationGrowth",
      "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSObservationMaternity"]
    },
    {
      "type" : "DiagnosticReport",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSDiagnosticReportLab",
      "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSDiagnosticReportImaging",
      "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSDiagnosticReportReferral"]
    },
    {
      "type" : "Encounter",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSEncounter"]
    },
    {
      "type" : "DocumentReference",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSDocumentReference"]
    },
    {
      "type" : "Composition",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSCompositionCareDocumentation"]
    },
    {
      "type" : "CarePlan",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSCarePlan"]
    },
    {
      "type" : "ImagingStudy",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSImagingStudy"]
    },
    {
      "type" : "ServiceRequest",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSServiceRequestReferral"]
    },
    {
      "type" : "Task",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSTask"]
    },
    {
      "type" : "Provenance",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSProvenance"]
    },
    {
      "type" : "AuditEvent",
      "supportedProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSAuditEventReadAccessLog",
      "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSAuditEventPatientQuery",
      "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSAuditEventPatientRead"]
    }]
  }]
}

```
