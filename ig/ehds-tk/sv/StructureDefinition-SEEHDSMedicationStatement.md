# SE EHDS MedicationStatement – Läkemedel (GetMedicationHistory) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS MedicationStatement – Läkemedel (GetMedicationHistory) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSMedicationStatement.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [MedicationStatementEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-medicationStatement-eu-core.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [MedicationStatementEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-medicationStatement-eu-core.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [MedicationStatementEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-medicationStatement-eu-core.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [MedicationStatementEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-medicationStatement-eu-core.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSMedicationStatement.csv), [Excel](../StructureDefinition-SEEHDSMedicationStatement.xlsx), [Schematron](../StructureDefinition-SEEHDSMedicationStatement.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSMedicationStatement",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSMedicationStatement",
  "version" : "0.9.0",
  "name" : "SEEHDSMedicationStatement",
  "title" : "SE EHDS MedicationStatement – Läkemedel (GetMedicationHistory)",
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
  "description" : "Profil för läkemedelsordinationer, förskrivningar och administrerade läkemedel mappat från RIVTA-tjänstekontraktet GetMedicationHistory (clinicalprocess:activityprescription:actoutcome v2.2). Täcker NPÖ 2.2 och 1177 Journal 2.2.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
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
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "MedicationStatement",
  "baseDefinition" : "http://hl7.eu/fhir/base/StructureDefinition/medicationStatement-eu-core",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "MedicationStatement",
      "path" : "MedicationStatement"
    },
    {
      "id" : "MedicationStatement.meta.source",
      "path" : "MedicationStatement.meta.source",
      "short" : "Källsystem HSA-id (medicationMedicalRecordHeader.sourceSystemHSAId) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.status",
      "path" : "MedicationStatement.status",
      "short" : "Ordinationsstatus (medicationMedicalRecordBody.medicationPrescription.prescriptionStatus – Active/Inactive)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.medication[x]",
      "path" : "MedicationStatement.medication[x]",
      "short" : "Läkemedel (medicationMedicalRecordBody.medicationPrescription.drug – exakt ett av unstructured/merchandise/drugArticle/drug/generics, se invarianten getmedicationhistory-drug-choice)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.subject",
      "path" : "MedicationStatement.subject",
      "short" : "Patient (medicationMedicalRecordHeader.patientId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.effective[x]:effectivePeriod",
      "path" : "MedicationStatement.effective[x]",
      "sliceName" : "effectivePeriod",
      "short" : "Behandlingsperiod (startOfTreatment / endOfTreatment)",
      "type" : [{
        "code" : "Period"
      }],
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.effective[x]:effectivePeriod.start",
      "path" : "MedicationStatement.effective[x].start",
      "short" : "Insättningstidpunkt (medicationMedicalRecordBody.medicationPrescription.startOfTreatment)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.effective[x]:effectivePeriod.end",
      "path" : "MedicationStatement.effective[x].end",
      "short" : "Utsättningstidpunkt (medicationMedicalRecordBody.medicationPrescription.endOfTreatment)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.dateAsserted",
      "path" : "MedicationStatement.dateAsserted",
      "short" : "Dokumentationstidpunkt (medicationMedicalRecordHeader.accountableHealthcareProfessional.authorTime)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.informationSource",
      "path" : "MedicationStatement.informationSource",
      "short" : "Ansvarig hälso- och sjukvårdspersonal (medicationMedicalRecordHeader.accountableHealthcareProfessional)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.reasonCode",
      "path" : "MedicationStatement.reasonCode",
      "short" : "Ordinationsorsak (medicationMedicalRecordBody.medicationPrescription.principalPrescriptionReason.reason)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.note",
      "path" : "MedicationStatement.note",
      "short" : "Notat om ordination (medicationMedicalRecordBody.medicationPrescription.prescriptionNote)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.dosage",
      "path" : "MedicationStatement.dosage",
      "short" : "Dosering (medicationMedicalRecordBody.medicationPrescription.dosage)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.dosage.text",
      "path" : "MedicationStatement.dosage.text",
      "short" : "Doseringsinstruktion i fritext (medicationMedicalRecordBody.medicationPrescription.dosage.dosageInstruction)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.dosage.timing",
      "path" : "MedicationStatement.dosage.timing",
      "short" : "Doseringsschemat (medicationMedicalRecordBody.medicationPrescription.dosage – fastdosering/villkorsdosering)",
      "mustSupport" : true
    },
    {
      "id" : "MedicationStatement.dosage.route",
      "path" : "MedicationStatement.dosage.route",
      "short" : "Administreringssätt (medicationMedicalRecordBody.medicationPrescription.drug.drug.routeOfAdministration)",
      "mustSupport" : true
    }]
  }
}

```
