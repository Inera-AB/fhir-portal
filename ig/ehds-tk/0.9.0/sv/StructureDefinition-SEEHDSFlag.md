# SE EHDS Flag – Uppmärksamhetsinformation (GetAlertInformation) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Flag – Uppmärksamhetsinformation (GetAlertInformation) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSFlag.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [FlagEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-flag-eu-core.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [FlagEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-flag-eu-core.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [FlagEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-flag-eu-core.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [FlagEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-flag-eu-core.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSFlag.csv), [Excel](../StructureDefinition-SEEHDSFlag.xlsx), [Schematron](../StructureDefinition-SEEHDSFlag.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSFlag",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSFlag",
  "version" : "0.9.0",
  "name" : "SEEHDSFlag",
  "title" : "SE EHDS Flag – Uppmärksamhetsinformation (GetAlertInformation)",
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
  "description" : "Primär profil för ALL uppmärksamhetsinformation från GetAlertInformation\n(clinicalprocess:healthcond:description v2.0).\n\nVarje alertInformation-post ger alltid en Flag-resurs.\nOm typeOfAlertInformation anger allergi/överkänslighet (body = hypersensitivity)\nskapas dessutom en SEEHDSAllergyIntolerance-resurs som pekas ut via\nextension[flag-detail] (standard R4-extension; kallas supportingInfo i R5).\n\nBody-strukturen är XOR: exakt en av hypersensitivity, seriousDisease, treatment,\ncommunicableDisease, restrictionOfCare, unstructuredAlertInformation anges per post.\n\nFlag.category[alertType]           = typeOfAlertInformation (obligatorisk).\nFlag.category[hypersensitivityType] = typeOfHypersensitivity (när body = hypersensitivity).\nFlag.code                           = den kliniska koden specifik för body-typen.\n\nTäcker NPÖ 2.0 och 1177 Journal 2.0.",
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
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Flag",
  "baseDefinition" : "http://hl7.eu/fhir/base/StructureDefinition/flag-eu-core",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Flag",
      "path" : "Flag"
    },
    {
      "id" : "Flag.meta.source",
      "path" : "Flag.meta.source",
      "short" : "Källsystem HSA-id (alertInformationHeader.sourceSystemHSAId) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "Flag.meta.security",
      "path" : "Flag.meta.security",
      "short" : "PDL-kontroll (alertInformationHeader.approvedForPatient) – se PDL-001",
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:flagDetailExt",
      "path" : "Flag.extension",
      "sliceName" : "flagDetailExt",
      "short" : "Referens till AllergyIntolerance när body = hypersensitivity (R4: flag-detail; R5: supportingInfo)",
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:alertInformationComment",
      "path" : "Flag.extension",
      "sliceName" : "alertInformationComment",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-information-comment"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:alertAscertainedDate",
      "path" : "Flag.extension",
      "sliceName" : "alertAscertainedDate",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-ascertained-date"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:alertVerifiedTime",
      "path" : "Flag.extension",
      "sliceName" : "alertVerifiedTime",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-verified-time"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:alertAssertedDate",
      "path" : "Flag.extension",
      "sliceName" : "alertAssertedDate",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-asserted-date"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:alertAsserter",
      "path" : "Flag.extension",
      "sliceName" : "alertAsserter",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-asserter"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:relatedAlertInformation",
      "path" : "Flag.extension",
      "sliceName" : "relatedAlertInformation",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/related-alert-information"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:degreeOfSeverity",
      "path" : "Flag.extension",
      "sliceName" : "degreeOfSeverity",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-degree-of-severity"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:degreeOfCertainty",
      "path" : "Flag.extension",
      "sliceName" : "degreeOfCertainty",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-degree-of-certainty"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:pharmaceuticalHypersensitivity",
      "path" : "Flag.extension",
      "sliceName" : "pharmaceuticalHypersensitivity",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-pharmaceutical-hypersensitivity"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:treatmentDescription",
      "path" : "Flag.extension",
      "sliceName" : "treatmentDescription",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-treatment-description"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:pharmaceuticalTreatment",
      "path" : "Flag.extension",
      "sliceName" : "pharmaceuticalTreatment",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-pharmaceutical-treatment"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:routeOfTransmission",
      "path" : "Flag.extension",
      "sliceName" : "routeOfTransmission",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-route-of-transmission"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.extension:restrictionOfCareComment",
      "path" : "Flag.extension",
      "sliceName" : "restrictionOfCareComment",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-restriction-of-care-comment"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.identifier",
      "path" : "Flag.identifier",
      "short" : "Dokumentidentifierare (alertInformationHeader.documentId)",
      "mustSupport" : true
    },
    {
      "id" : "Flag.status",
      "path" : "Flag.status",
      "short" : "Alltid 'active' – inget statusfält i TKBn; returnerade poster är per definition aktiva",
      "mustSupport" : true
    },
    {
      "id" : "Flag.category",
      "path" : "Flag.category",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "min" : 1
    },
    {
      "id" : "Flag.category:alertType",
      "path" : "Flag.category",
      "sliceName" : "alertType",
      "short" : "Uppmärksamhetstyp (alertInformationBody.typeOfAlertInformation)",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Flag.category:hypersensitivityType",
      "path" : "Flag.category",
      "sliceName" : "hypersensitivityType",
      "short" : "Precisering av överkänslighetstyp (alertInformationBody.hypersensitivity.typeOfHypersensitivity)",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Flag.code",
      "path" : "Flag.code",
      "short" : "Klinisk kod per body-typ (XOR):\nhypersensitivity: atcSubstance (code.coding) eller hypersensitivityAgentCode (code.coding);\n  fritext i code.text (nonATCSubstance / hypersensitivityAgent)\nseriousDisease: seriousDisease.disease (ICD10/SNOMED)\ntreatment: treatment.treatmentCode (KVÅ); tomt CodeableConcept om enbart treatmentDescription\ncommunicableDisease: communicableDiseaseCode (ICD10)\nunstructuredAlertInformation: unstructuredAlertInformationHeading som code.text\nrestrictionOfCare: ingen strukturerad kod; tomt CodeableConcept",
      "mustSupport" : true
    },
    {
      "id" : "Flag.subject",
      "path" : "Flag.subject",
      "short" : "Patient (alertInformationHeader.patientId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Flag.period",
      "path" : "Flag.period",
      "mustSupport" : true
    },
    {
      "id" : "Flag.period.start",
      "path" : "Flag.period.start",
      "short" : "Giltighet från (alertInformationBody.validityTimePeriod.start)",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Flag.period.end",
      "path" : "Flag.period.end",
      "short" : "Giltighet till: validityTimePeriod.end (planerat slut) eller obsoleteTime (faktisk inaktivering) – det minsta av dessa",
      "mustSupport" : true
    },
    {
      "id" : "Flag.encounter",
      "path" : "Flag.encounter",
      "short" : "Kopplad vårdkontakt (alertInformationHeader.careContactId)",
      "mustSupport" : true
    },
    {
      "id" : "Flag.author",
      "path" : "Flag.author",
      "short" : "Ansvarig hälso- och sjukvårdspersonal (alertInformationHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole"]
      }],
      "mustSupport" : true
    }]
  }
}

```
