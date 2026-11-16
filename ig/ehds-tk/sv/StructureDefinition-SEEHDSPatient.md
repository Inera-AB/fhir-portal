# SE EHDS Patient - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Patient 

**Användningar:**

* Referera till denna Profil: [SE EHDS AllergyIntolerance – Allergi/överkänslighet (GetAlertInformation)](StructureDefinition-SEEHDSAllergyIntolerance.md), [SE EHDS AuditEvent – Sökning och träfflista med patient (BALP PatientQuery)](StructureDefinition-SEEHDSAuditEventPatientQuery.md), [SE EHDS AuditEvent – Innehållshämtning med patient (BALP PatientRead)](StructureDefinition-SEEHDSAuditEventPatientRead.md), [SE EHDS AuditEvent – Läsning av åtkomstloggar (GetAccessLogForPatient)](StructureDefinition-SEEHDSAuditEventReadAccessLog.md)... Show 18 more, [SE EHDS CarePlan – Vårdplan (GetCarePlans)](StructureDefinition-SEEHDSCarePlan.md), [SE EHDS Composition – Strukturerad journalanteckning från DocBook (GetCareDocumentation)](StructureDefinition-SEEHDSCompositionCareDocumentation.md), [SE EHDS Condition – Diagnos (GetDiagnosis)](StructureDefinition-SEEHDSConditionDiagnosis.md), [SE EHDS Condition – Funktionstillstånd och ADL (GetFunctionalStatus)](StructureDefinition-SEEHDSConditionFunctional.md), [SE EHDS DiagnosticReport – Bilddiagnostiskt utlåtande (GetImagingOutcome)](StructureDefinition-SEEHDSDiagnosticReportImaging.md), [SE EHDS DiagnosticReport – Provsvar (GetLaboratoryOrderOutcome)](StructureDefinition-SEEHDSDiagnosticReportLab.md), [SE EHDS DiagnosticReport – Konsultationssvar (GetReferralOutcome)](StructureDefinition-SEEHDSDiagnosticReportReferral.md), [SE EHDS DocumentReference – Anteckningar (GetCareDocumentation)](StructureDefinition-SEEHDSDocumentReference.md), [SE EHDS Encounter – Vårdkontakter (GetCareContacts)](StructureDefinition-SEEHDSEncounter.md), [SE EHDS Flag – Uppmärksamhetsinformation (GetAlertInformation)](StructureDefinition-SEEHDSFlag.md), [SE EHDS ImagingStudy – Bilddiagnostik (GetImagingOutcome)](StructureDefinition-SEEHDSImagingStudy.md), [SE EHDS Immunization – Vaccinationer (GetVaccinationHistory)](StructureDefinition-SEEHDSImmunization.md), [SE EHDS MedicationStatement – Läkemedel (GetMedicationHistory)](StructureDefinition-SEEHDSMedicationStatement.md), [SE EHDS Observation Base – GetObservations](StructureDefinition-SEEHDSObservationBase.md), [SE EHDS Observation – Laboratoriesvar (GetLaboratoryOrderOutcome)](StructureDefinition-SEEHDSObservationLab.md), [SE EHDS Observation – Mödravård (GetMaternityMedicalHistory)](StructureDefinition-SEEHDSObservationMaternity.md), [SE EHDS ServiceRequest – Konsultationsremiss (GetReferralOutcome)](StructureDefinition-SEEHDSServiceRequestReferral.md) and [SE EHDS Task – Remisstatus (GetRequestActivities)](StructureDefinition-SEEHDSTask.md)
* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSPatient.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [PatientEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-patient-eu-core.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [PatientEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-patient-eu-core.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [PatientEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-patient-eu-core.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [PatientEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-patient-eu-core.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSPatient.csv), [Excel](../StructureDefinition-SEEHDSPatient.xlsx), [Schematron](../StructureDefinition-SEEHDSPatient.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSPatient",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient",
  "version" : "0.9.0",
  "name" : "SEEHDSPatient",
  "title" : "SE EHDS Patient",
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
  "description" : "Patientprofil för EHDS-TK. Ärver HL7 Europe Core Patient (EURIDICE) och följer svenska basprofilernas\nidentifierarkonvention (SEBasePatient: slicarna personnummer, samordningsnummer, nationelltReservnummer).\nSkapas av API:et utifrån patientId i RIVTA-svaret, eftersom EU Core kräver subject.reference (GENERAL-006).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "loinc",
    "uri" : "http://loinc.org",
    "name" : "LOINC code for the element"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Patient",
  "baseDefinition" : "http://hl7.eu/fhir/base/StructureDefinition/patient-eu-core",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Patient",
      "path" : "Patient"
    },
    {
      "id" : "Patient.identifier",
      "path" : "Patient.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "system"
        }],
        "rules" : "open"
      },
      "short" : "Patientidentifierare (patientId från RIVTA)",
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:personnummer",
      "path" : "Patient.identifier",
      "sliceName" : "personnummer",
      "short" : "Personnummer",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:personnummer.system",
      "path" : "Patient.identifier.system",
      "min" : 1,
      "patternUri" : "http://electronichealth.se/identifier/personnummer",
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:personnummer.value",
      "path" : "Patient.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:samordningsnummer",
      "path" : "Patient.identifier",
      "sliceName" : "samordningsnummer",
      "short" : "Samordningsnummer",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:samordningsnummer.system",
      "path" : "Patient.identifier.system",
      "min" : 1,
      "patternUri" : "http://electronichealth.se/identifier/samordningsnummer",
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:samordningsnummer.value",
      "path" : "Patient.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:nationelltReservnummer",
      "path" : "Patient.identifier",
      "sliceName" : "nationelltReservnummer",
      "short" : "Nationellt reservnummer",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:nationelltReservnummer.system",
      "path" : "Patient.identifier.system",
      "min" : 1,
      "patternUri" : "http://electronichealth.se/identifier/nationelltReservnummer",
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:nationelltReservnummer.value",
      "path" : "Patient.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Patient.name",
      "path" : "Patient.name",
      "short" : "Patientens namn om det är känt; annars HumanName med data-absent-reason (eu-pat-1) – TKB:erna bär normalt inte namn",
      "mustSupport" : true
    },
    {
      "id" : "Patient.gender",
      "path" : "Patient.gender",
      "mustSupport" : true
    },
    {
      "id" : "Patient.birthDate",
      "path" : "Patient.birthDate",
      "short" : "Härleds ur personnummer/samordningsnummer (samordningsnummer: dag − 60); annars data-absent-reason",
      "mustSupport" : true
    }]
  }
}

```
