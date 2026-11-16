# SE EHDS Condition – Funktionstillstånd och ADL (GetFunctionalStatus) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Condition – Funktionstillstånd och ADL (GetFunctionalStatus) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSConditionFunctional.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ConditionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-condition-eu-core.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ConditionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-condition-eu-core.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [ConditionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-condition-eu-core.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ConditionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-condition-eu-core.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSConditionFunctional.csv), [Excel](../StructureDefinition-SEEHDSConditionFunctional.xlsx), [Schematron](../StructureDefinition-SEEHDSConditionFunctional.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSConditionFunctional",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSConditionFunctional",
  "version" : "0.9.0",
  "name" : "SEEHDSConditionFunctional",
  "title" : "SE EHDS Condition – Funktionstillstånd och ADL (GetFunctionalStatus)",
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
  "description" : "Profil för funktionstillstånd och ADL-bedömningar mappat från RIVTA-tjänstekontraktet\nGetFunctionalStatus (clinicalprocess:healthcond:description v2.0).\nTäcker NPÖ 2.0 och 1177 Journal 2.0.\n\nTKBn har två bedömningskategorier: 'pad-pad' (PADL-bedömning) och 'fun-fun'\n(funktionsnedsättningsbedömning med ICF-kod). Condition.code mappas mot\nassessmentCategory (för PADL) eller disability.disabilityAssessment (ICF-kod).\nInget statusfält, tidperiod eller svårighetsgradfält finns i TKBn – dessa är härleddda.",
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
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
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
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Condition",
  "baseDefinition" : "http://hl7.eu/fhir/base/StructureDefinition/condition-eu-core",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Condition",
      "path" : "Condition"
    },
    {
      "id" : "Condition.meta.source",
      "path" : "Condition.meta.source",
      "short" : "Källsystem HSA-id (functionalStatusAssessmentHeader.sourceSystemHSAId) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "Condition.clinicalStatus",
      "path" : "Condition.clinicalStatus",
      "short" : "Alltid 'active' – härledd (inget statusfält i TKBn)",
      "mustSupport" : true
    },
    {
      "id" : "Condition.verificationStatus",
      "path" : "Condition.verificationStatus",
      "short" : "Alltid 'confirmed' – härledd (journaluppgifter anses bekräftade)",
      "mustSupport" : true
    },
    {
      "id" : "Condition.category",
      "path" : "Condition.category",
      "short" : "Bedömningskategori (functionalStatusAssessmentBody.assessmentCategory – pad-pad eller fun-fun)",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code",
      "path" : "Condition.code",
      "short" : "Bedömningskod: assessmentCategory (pad-pad/fun-fun) eller disability.disabilityAssessment (ICF) – se FUNC-001",
      "mustSupport" : true
    },
    {
      "id" : "Condition.subject",
      "path" : "Condition.subject",
      "short" : "Patient (functionalStatusAssessmentHeader.patientId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.recordedDate",
      "path" : "Condition.recordedDate",
      "short" : "Bedömningstidpunkt (functionalStatusAssessmentHeader.documentTime)",
      "mustSupport" : true
    },
    {
      "id" : "Condition.recorder",
      "path" : "Condition.recorder",
      "short" : "Ansvarig hälso- och sjukvårdspersonal (functionalStatusAssessmentHeader.accountableHealthcareProfessional)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.asserter",
      "path" : "Condition.asserter",
      "short" : "Rättslig äkthetsintygsgivare (functionalStatusAssessmentHeader.legalAuthenticator)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.note",
      "path" : "Condition.note",
      "short" : "Fritext och PADL-poster (FUNC-001):\nnote[0].text ← functionalStatusAssessmentBody.comment (helbedömningskommentar)\nnote[n].text ← varje padl-post formaterad som '[typeOfAssessment]: assessment'\nAlternativ (ej valt): separata Observation-resurser per PADL-post med\nObservation.code = typeOfAssessment och Observation.valueString = assessment.",
      "mustSupport" : true
    }]
  }
}

```
