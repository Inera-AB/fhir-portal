# SE EHDS PractitionerRole – Hälso- och sjukvårdspersonal i uppdrag - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS PractitionerRole – Hälso- och sjukvårdspersonal i uppdrag 

**Användningar:**

* Referera till denna Profil: [SE EHDS AllergyIntolerance – Allergi/överkänslighet (GetAlertInformation)](StructureDefinition-SEEHDSAllergyIntolerance.md), [SE EHDS AuditEvent – Läsning av åtkomstloggar (GetAccessLogForPatient)](StructureDefinition-SEEHDSAuditEventReadAccessLog.md), [SE EHDS CarePlan – Vårdplan (GetCarePlans)](StructureDefinition-SEEHDSCarePlan.md), [SE EHDS Composition – Strukturerad journalanteckning från DocBook (GetCareDocumentation)](StructureDefinition-SEEHDSCompositionCareDocumentation.md)... Show 14 more, [SE EHDS Condition – Diagnos (GetDiagnosis)](StructureDefinition-SEEHDSConditionDiagnosis.md), [SE EHDS Condition – Funktionstillstånd och ADL (GetFunctionalStatus)](StructureDefinition-SEEHDSConditionFunctional.md), [SE EHDS DiagnosticReport – Bilddiagnostiskt utlåtande (GetImagingOutcome)](StructureDefinition-SEEHDSDiagnosticReportImaging.md), [SE EHDS DiagnosticReport – Provsvar (GetLaboratoryOrderOutcome)](StructureDefinition-SEEHDSDiagnosticReportLab.md), [SE EHDS DiagnosticReport – Konsultationssvar (GetReferralOutcome)](StructureDefinition-SEEHDSDiagnosticReportReferral.md), [SE EHDS DocumentReference – Anteckningar (GetCareDocumentation)](StructureDefinition-SEEHDSDocumentReference.md), [SE EHDS Encounter – Vårdkontakter (GetCareContacts)](StructureDefinition-SEEHDSEncounter.md), [SE EHDS Flag – Uppmärksamhetsinformation (GetAlertInformation)](StructureDefinition-SEEHDSFlag.md), [SE EHDS ImagingStudy – Bilddiagnostik (GetImagingOutcome)](StructureDefinition-SEEHDSImagingStudy.md), [SE EHDS Immunization – Vaccinationer (GetVaccinationHistory)](StructureDefinition-SEEHDSImmunization.md), [SE EHDS MedicationStatement – Läkemedel (GetMedicationHistory)](StructureDefinition-SEEHDSMedicationStatement.md), [SE EHDS ServiceRequest – Konsultationsremiss (GetReferralOutcome)](StructureDefinition-SEEHDSServiceRequestReferral.md), [SE EHDS Task – Remisstatus (GetRequestActivities)](StructureDefinition-SEEHDSTask.md) and [Juridisk äkthetsintygsgivare för uppmärksamhetssignal](StructureDefinition-alert-asserter.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSPractitionerRole.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [PractitionerRoleEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-practitionerRole-eu-core.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [PractitionerRoleEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-practitionerRole-eu-core.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [PractitionerRoleEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-practitionerRole-eu-core.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [PractitionerRoleEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-practitionerRole-eu-core.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSPractitionerRole.csv), [Excel](../StructureDefinition-SEEHDSPractitionerRole.xlsx), [Schematron](../StructureDefinition-SEEHDSPractitionerRole.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSPractitionerRole",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile",
    "valueCanonical" : "http://hl7.org/fhir/uv/ips/StructureDefinition/PractitionerRole-uv-ips"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole",
  "version" : "0.9.0",
  "name" : "SEEHDSPractitionerRole",
  "title" : "SE EHDS PractitionerRole – Hälso- och sjukvårdspersonal i uppdrag",
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
  "description" : "Profil för hälso- och sjukvårdspersonal i uppdrag (medarbetaruppdrag) som refereras från\nEHDS-TK-resurserna (t.ex. accountableHealthcareProfessional, legalAuthenticator, author).\nÄrver HL7 Europe Core PractitionerRole (EURIDICE). Identifier-slicen följer svenska basprofilernas\nkonvention (SEBasePractitionerRole: slice hsaid, system urn:oid:1.2.752.29.4.19, typ PRN).\nAnvänds normalt som logisk referens via identifier.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
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
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "PractitionerRole",
  "baseDefinition" : "http://hl7.eu/fhir/base/StructureDefinition/practitionerRole-eu-core",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "PractitionerRole",
      "path" : "PractitionerRole"
    },
    {
      "id" : "PractitionerRole.identifier",
      "path" : "PractitionerRole.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "system"
        }],
        "rules" : "open"
      },
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.identifier:hsaid",
      "path" : "PractitionerRole.identifier",
      "sliceName" : "hsaid",
      "short" : "HSA-id för medarbetaruppdraget/personen (healthcareProfessionalHSAId)",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.identifier:hsaid.type",
      "path" : "PractitionerRole.identifier.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code" : "PRN"
        }]
      }
    },
    {
      "id" : "PractitionerRole.identifier:hsaid.system",
      "path" : "PractitionerRole.identifier.system",
      "min" : 1,
      "patternUri" : "urn:oid:1.2.752.29.4.19"
    },
    {
      "id" : "PractitionerRole.practitioner",
      "path" : "PractitionerRole.practitioner",
      "short" : "Personen – display från healthcareProfessionalName",
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.organization",
      "path" : "PractitionerRole.organization",
      "short" : "Organisationsenhet (healthcareProfessionalOrgUnit)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "PractitionerRole.code",
      "path" : "PractitionerRole.code",
      "short" : "Befattning/yrkesroll (healthcareProfessionalRoleCode)",
      "mustSupport" : true
    }]
  }
}

```
