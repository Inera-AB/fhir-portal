# Profiles - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Profiles

Denna sida listar alla FHIR-profiler definierade i denna IG, grupperade per FHIR-grupp. Se [Mappings](mappings.md) för hur respektive profil relaterar till RIVTA-tjänstekontrakten.

Profilerna ärver HL7 Europe Core där en EU Core-profil finns, annars FHIR-basresursen, så att de är en giltig profilering av EURIDICE. De heter `SEEHDS…` med `Id` lika med namnet, enligt de svenska basprofilernas konvention. Se [Vad IG:n utlovar](index.md#loften).

Kraven på API:et anges i [SEEHDSResourceAccessProvider](CapabilityStatement-SEEHDSResourceAccessProvider.md), som utgår från EURIDICE:s Resource Access Provider.

-------

### Gemensamma profiler

| | | |
| :--- | :--- | :--- |
| [SEEHDSPatient](StructureDefinition-SEEHDSPatient.md) | EU Core Patient (patient-eu-core) | Patient med identifierarslicar enligt SEBasePatient (personnummer, samordningsnummer, nationelltReservnummer). Skapas utifrån patientId, se GENERAL-006. |
| [SEEHDSPractitionerRole](StructureDefinition-SEEHDSPractitionerRole.md) | EU Core PractitionerRole (practitionerRole-eu-core) | Personal i uppdrag; identifier-slice`hsaid`enligt SEBasePractitionerRole. Används som logisk referens. |
| [SEEHDSOrganization](StructureDefinition-SEEHDSOrganization.md) | EU Core Organization (organization-eu-core) | Organisationsenhet; identifier-slice`hsaid`enligt SEBaseOrganization samt SMI-id. |
| [SEEHDSProvenance](StructureDefinition-SEEHDSProvenance.md) | Provenance | Provenance med två agenter, custodian (vårdgivare, yttre Sparr) och author (vårdenhet, inre Sparr), som skiljs åt på`agent.type`och anges med HSA-id. Se GENERAL-003. |

-------

### Patientöversikt

| | | |
| :--- | :--- | :--- |
| [SEEHDSConditionDiagnosis](StructureDefinition-SEEHDSConditionDiagnosis.md) | EU Core Condition (condition-eu-core) | GetDiagnosis |
| [SEEHDSAllergyIntolerance](StructureDefinition-SEEHDSAllergyIntolerance.md) | EU Core AllergyIntolerance (allergyIntolerance-eu-core) | GetAlertInformation (allergi/överkänslighet) |
| [SEEHDSFlag](StructureDefinition-SEEHDSFlag.md) | EU Core Flag (flag-eu-core) | GetAlertInformation (varning) |
| [SEEHDSMedicationStatement](StructureDefinition-SEEHDSMedicationStatement.md) | EU Core MedicationStatement (medicationStatement-eu-core) | GetMedicationHistory |
| [SEEHDSImmunization](StructureDefinition-SEEHDSImmunization.md) | EU Core Immunization (immunization-eu-core) | GetVaccinationHistory |
| [SEEHDSConditionFunctional](StructureDefinition-SEEHDSConditionFunctional.md) | EU Core Condition (condition-eu-core) | GetFunctionalStatus |
| [SEEHDSObservationMaternity](StructureDefinition-SEEHDSObservationMaternity.md) | Observation | GetMaternityMedicalHistory |
| [SEEHDSCarePlan](StructureDefinition-SEEHDSCarePlan.md) | CarePlan | GetCarePlans |
| [SEEHDSEncounter](StructureDefinition-SEEHDSEncounter.md) | Encounter | GetCareContacts |
| [SEEHDSDocumentReference](StructureDefinition-SEEHDSDocumentReference.md) | DocumentReference | GetCareDocumentation |
| [SEEHDSCompositionCareDocumentation](StructureDefinition-SEEHDSCompositionCareDocumentation.md) | EU Core Composition (composition-eu-core) | GetCareDocumentation – valfri strukturerad representation av DocBook ([DocBook-mappning](guidance-docbook-narrative.md)) |

-------

### Laboratorie och diagnostik

| | | |
| :--- | :--- | :--- |
| [SEEHDSDiagnosticReportLab](StructureDefinition-SEEHDSDiagnosticReportLab.md) | EU Core DiagnosticReport (diagnosticReport-eu-core) | GetLaboratoryOrderOutcome |
| [SEEHDSObservationLab](StructureDefinition-SEEHDSObservationLab.md) | EU Core MedicalTestResult (medicalTestResult-eu-core) | GetLaboratoryOrderOutcome |

-------

### Bilddiagnostik

| | | |
| :--- | :--- | :--- |
| [SEEHDSImagingStudy](StructureDefinition-SEEHDSImagingStudy.md) | ImagingStudy | GetImagingOutcome |
| [SEEHDSDiagnosticReportImaging](StructureDefinition-SEEHDSDiagnosticReportImaging.md) | EU Core DiagnosticReport (diagnosticReport-eu-core) | GetImagingOutcome |

-------

### Remiss och process

| | | |
| :--- | :--- | :--- |
| [SEEHDSServiceRequestReferral](StructureDefinition-SEEHDSServiceRequestReferral.md) | ServiceRequest | GetReferralOutcome |
| [SEEHDSDiagnosticReportReferral](StructureDefinition-SEEHDSDiagnosticReportReferral.md) | EU Core DiagnosticReport (diagnosticReport-eu-core) | GetReferralOutcome |
| [SEEHDSTask](StructureDefinition-SEEHDSTask.md) | Task | GetRequestActivities |

-------

### Tillväxtkurva barn

| | | |
| :--- | :--- | :--- |
| [SEEHDSObservationGrowth](StructureDefinition-SEEHDSObservationGrowth.md) | SEEHDSObservationBase (Observation) | GetObservations |

-------

### Logg

| | | |
| :--- | :--- | :--- |
| [SEEHDSAuditEventReadAccessLog](StructureDefinition-SEEHDSAuditEventReadAccessLog.md) | AuditEvent | GetAccessLogForPatient – läsning av åtkomstloggar |
| [SEEHDSAuditEventPatientQuery](StructureDefinition-SEEHDSAuditEventPatientQuery.md) | IHE BALP PatientQuery | Loggpost som skapas vid sökning/träfflista i API:et ([Auditloggning](mapping-getaccesslogforpatient.md)) |
| [SEEHDSAuditEventPatientRead](StructureDefinition-SEEHDSAuditEventPatientRead.md) | IHE BALP PatientRead | Loggpost som skapas vid innehållshämtning i API:et ([Auditloggning](mapping-getaccesslogforpatient.md)) |

