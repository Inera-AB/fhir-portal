# SE EHDS Immunization – Vaccinationer (GetVaccinationHistory) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Immunization – Vaccinationer (GetVaccinationHistory) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSImmunization.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ImmunizationEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-immunization-eu-core.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ImmunizationEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-immunization-eu-core.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [ImmunizationEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-immunization-eu-core.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ImmunizationEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-immunization-eu-core.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSImmunization.csv), [Excel](../StructureDefinition-SEEHDSImmunization.xlsx), [Schematron](../StructureDefinition-SEEHDSImmunization.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSImmunization",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSImmunization",
  "version" : "0.9.0",
  "name" : "SEEHDSImmunization",
  "title" : "SE EHDS Immunization – Vaccinationer (GetVaccinationHistory)",
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
  "description" : "Profil för vaccinationer mappat från RIVTA-tjänstekontraktet GetVaccinationHistory (clinicalprocess:activityprescription:actoutcome v2.0). Täcker NPÖ 2.0 och 1177 Journal 1.0, 2.0.",
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
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
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Immunization",
  "baseDefinition" : "http://hl7.eu/fhir/base/StructureDefinition/immunization-eu-core",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Immunization",
      "path" : "Immunization"
    },
    {
      "id" : "Immunization.meta.source",
      "path" : "Immunization.meta.source",
      "short" : "Källsystem HSA-id (vaccinationMedicalRecordHeader.sourceSystemHSAId) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.meta.security",
      "path" : "Immunization.meta.security",
      "short" : "PDL-kontroll (vaccinationMedicalRecordHeader.approvedForPatient) – se PDL-001",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.extension:legalAuthenticator",
      "path" : "Immunization.extension",
      "sliceName" : "legalAuthenticator",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/immunization-legal-authenticator"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Immunization.extension:patientPostalCode",
      "path" : "Immunization.extension",
      "sliceName" : "patientPostalCode",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/immunization-patient-postal-code"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Immunization.extension:registrationDevice",
      "path" : "Immunization.extension",
      "sliceName" : "registrationDevice",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/immunization-registration-device"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Immunization.extension:isDoseComplete",
      "path" : "Immunization.extension",
      "sliceName" : "isDoseComplete",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/immunization-is-dose-complete"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Immunization.identifier",
      "path" : "Immunization.identifier",
      "short" : "Dokumentidentifierare (vaccinationMedicalRecordHeader.documentId)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.status",
      "path" : "Immunization.status",
      "short" : "Vaccinationsstatus – 'completed' normalt; 'entered-in-error' om nullified=true",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.statusReason",
      "path" : "Immunization.statusReason",
      "short" : "Makuleringsorsak (vaccinationMedicalRecordHeader.nullifiedReason)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.vaccineCode",
      "path" : "Immunization.vaccineCode",
      "short" : "Vaccin (administrationRecord.typeOfVaccine / administrationRecord.vaccineName)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.patient",
      "path" : "Immunization.patient",
      "short" : "Patient (vaccinationMedicalRecordHeader.patientId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Immunization.encounter",
      "path" : "Immunization.encounter",
      "short" : "Kopplad vårdkontakt (vaccinationMedicalRecordHeader.careContactId)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.occurrence[x]:occurrenceDateTime",
      "path" : "Immunization.occurrence[x]",
      "sliceName" : "occurrenceDateTime",
      "short" : "Vaccinationstidpunkt: vaccinationMedicalRecordHeader.documentTime (primär) eller authorTime (fallback)",
      "type" : [{
        "code" : "dateTime"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Immunization.recorded",
      "path" : "Immunization.recorded",
      "short" : "Registreringsdatum (vaccinationMedicalRecordBody.registrationRecord.date)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.primarySource",
      "path" : "Immunization.primarySource",
      "short" : "false om vaccinationen efterregistrerats (sourceDescription är satt)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.reportOrigin",
      "path" : "Immunization.reportOrigin",
      "short" : "Källa för efterregistrerad vaccination (administrationRecord.sourceDescription) – fritext i reportOrigin.text; originaltext för eventuell kod",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.lotNumber",
      "path" : "Immunization.lotNumber",
      "short" : "Batchnummer (administrationRecord.vaccineBatchId)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.site",
      "path" : "Immunization.site",
      "short" : "Injektionsställe (administrationRecord.anatomicalSite)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.route",
      "path" : "Immunization.route",
      "short" : "Administreringssätt (administrationRecord.route)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.doseQuantity",
      "path" : "Immunization.doseQuantity",
      "short" : "Dos (administrationRecord.dose.quantity)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.performer:administeringCentreOrHp",
      "path" : "Immunization.performer",
      "sliceName" : "administeringCentreOrHp",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.performer:administeringCentreOrHp.actor",
      "path" : "Immunization.performer.actor",
      "short" : "Administrerande yrkesutövare/enhet (administrationRecord.performer / performerOrg; registrationRecord.careGiverOrg)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole",
        "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Immunization.performer:ordering",
      "path" : "Immunization.performer",
      "sliceName" : "ordering",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.performer:ordering.function",
      "path" : "Immunization.performer.function",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/v2-0443",
          "code" : "OP"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "Immunization.performer:ordering.actor",
      "path" : "Immunization.performer.actor",
      "short" : "Förskrivande yrkesutövare/enhet (administrationRecord.prescriberPerson / prescriberOrg)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole",
        "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Immunization.note",
      "path" : "Immunization.note",
      "short" : "Anteckningar: vaccinationUnstructuredNote, kommentarer och dokumenttitel (\"Dokumenttitel: …\", VAC-004)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.programEligibility",
      "path" : "Immunization.programEligibility",
      "short" : "Riskgrupp/programbehörighet (registrationRecord.riskCategory)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.reaction",
      "path" : "Immunization.reaction",
      "short" : "Biverkning (registrationRecord.patientAdverseEffect / administrationRecord.patientAdverseEffect)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.protocolApplied",
      "path" : "Immunization.protocolApplied",
      "short" : "Vaccinationsprotokoll (administrationRecord)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.protocolApplied.series",
      "path" : "Immunization.protocolApplied.series",
      "short" : "Vaccinationsprogram (administrationRecord.vaccinationProgramName)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.protocolApplied.targetDisease",
      "path" : "Immunization.protocolApplied.targetDisease",
      "short" : "Målsjukdom (administrationRecord.vaccineTargetDisease)",
      "mustSupport" : true
    },
    {
      "id" : "Immunization.protocolApplied.doseNumber[x]",
      "path" : "Immunization.protocolApplied.doseNumber[x]",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "$this"
        }],
        "ordered" : false,
        "rules" : "open"
      }
    },
    {
      "id" : "Immunization.protocolApplied.doseNumber[x]:doseNumberPositiveInt",
      "path" : "Immunization.protocolApplied.doseNumber[x]",
      "sliceName" : "doseNumberPositiveInt",
      "short" : "Dosnummer (administrationRecord.doseOrdinalNumber)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "positiveInt"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Immunization.protocolApplied.seriesDoses[x]",
      "path" : "Immunization.protocolApplied.seriesDoses[x]",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "$this"
        }],
        "ordered" : false,
        "rules" : "open"
      }
    },
    {
      "id" : "Immunization.protocolApplied.seriesDoses[x]:seriesDosesPositiveInt",
      "path" : "Immunization.protocolApplied.seriesDoses[x]",
      "sliceName" : "seriesDosesPositiveInt",
      "short" : "Antal ordinerade doser (administrationRecord.numberOfPrescribedDoses)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "positiveInt"
      }],
      "mustSupport" : true
    }]
  }
}

```
