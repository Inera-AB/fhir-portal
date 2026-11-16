# SE EHDS Condition – Diagnos (GetDiagnosis) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Condition – Diagnos (GetDiagnosis) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSConditionDiagnosis.json)

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

#### Terminologibindningar (differential)

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ConditionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-condition-eu-core.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [ConditionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-condition-eu-core.html) 

#### Terminologibindningar (differential)

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ConditionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-condition-eu-core.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSConditionDiagnosis.csv), [Excel](../StructureDefinition-SEEHDSConditionDiagnosis.xlsx), [Schematron](../StructureDefinition-SEEHDSConditionDiagnosis.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSConditionDiagnosis",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSConditionDiagnosis",
  "version" : "0.9.0",
  "name" : "SEEHDSConditionDiagnosis",
  "title" : "SE EHDS Condition – Diagnos (GetDiagnosis)",
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
  "description" : "Profil för diagnos/problem mappat från RIVTA-tjänstekontraktet GetDiagnosis (clinicalprocess:healthcond:description v2.0). Ärver HL7 Europe Core Condition (EURIDICE). Täcker NPÖ 2.0 och 1177 Journal 2.0.",
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
      "short" : "Källsystem HSA-id (diagnosisHeader.sourceSystemHSAId) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "Condition.extension:assertedDate",
      "path" : "Condition.extension",
      "sliceName" : "assertedDate",
      "mustSupport" : true
    },
    {
      "id" : "Condition.extension:chronicDiagnosis",
      "path" : "Condition.extension",
      "sliceName" : "chronicDiagnosis",
      "short" : "Kronisk diagnos (diagnosisBody.chronicDiagnosis) – se DIAG-001",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/condition-chronic-diagnosis"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.extension:relatedCondition",
      "path" : "Condition.extension",
      "sliceName" : "relatedCondition",
      "short" : "Relaterad diagnos (diagnosisBody.relatedDiagnosis.documentId) – logisk referens via identifier, se DIAG-002",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/StructureDefinition/condition-related|5.3.0"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.extension:relatedCondition.value[x].identifier",
      "path" : "Condition.extension.value[x].identifier",
      "short" : "Den relaterade diagnosens dokumentid (relatedDiagnosis.documentId) – motsvarar Condition.identifier på den relaterade diagnosen",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.verificationStatus",
      "path" : "Condition.verificationStatus",
      "short" : "Alltid confirmed (RIVTA-svar representerar bekräftade journaluppgifter)",
      "mustSupport" : true
    },
    {
      "id" : "Condition.category",
      "path" : "Condition.category",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "coding.system"
        }],
        "rules" : "open"
      },
      "min" : 1
    },
    {
      "id" : "Condition.category:diagnostyp",
      "path" : "Condition.category",
      "sliceName" : "diagnostyp",
      "short" : "Diagnostyp (diagnosisBody.typeOfDiagnosis) – HD (Huvuddiagnos) eller BY (Bidiagnos) från kv_diagnostyp",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/diagnosistype-vs"
      }
    },
    {
      "id" : "Condition.category:diagnostyp.coding",
      "path" : "Condition.category.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Condition.category:diagnostyp.coding.system",
      "path" : "Condition.category.coding.system",
      "min" : 1,
      "patternUri" : "https://terminologitjansten.inera.se/inera-kodverksforvaltning/kodverk/kv_diagnostyp",
      "mustSupport" : true
    },
    {
      "id" : "Condition.category:diagnostyp.coding.code",
      "path" : "Condition.category.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Condition.code",
      "path" : "Condition.code",
      "short" : "Diagnoskod (diagnosisBody.diagnosisCode)",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding",
      "path" : "Condition.code.coding",
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
      "id" : "Condition.code.coding:ICD10SE",
      "path" : "Condition.code.coding",
      "sliceName" : "ICD10SE",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD10SE.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "patternUri" : "https://www.icd10.se/"
    },
    {
      "id" : "Condition.code.coding:ICD10SE.code",
      "path" : "Condition.code.coding.code",
      "short" : "ICD-10-SE kod (diagnosisBody.diagnosisCode.code)",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:ICD10SE.display",
      "path" : "Condition.code.coding.display",
      "short" : "Kodbenämning (diagnosisBody.diagnosisCode.displayName)",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.text",
      "path" : "Condition.code.text",
      "short" : "Fritext (diagnosisBody.diagnosisCode.originalText) – fallback: displayName",
      "mustSupport" : true
    },
    {
      "id" : "Condition.subject",
      "path" : "Condition.subject",
      "short" : "Patient (diagnosisHeader.patientId) – OID→URI för personnummer/samordningsnummer",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.onset[x]:onsetDateTime",
      "path" : "Condition.onset[x]",
      "sliceName" : "onsetDateTime",
      "short" : "Bedömningstidpunkt (diagnosisBody.diagnosisTime) – YYYYMMDDHHMMSS → ISO 8601",
      "type" : [{
        "code" : "dateTime"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.recordedDate",
      "path" : "Condition.recordedDate",
      "short" : "Registreringstidpunkt (diagnosisHeader.accountableHealthcareProfessional.authorTime) – YYYYMMDDHHMMSS → ISO 8601",
      "mustSupport" : true
    },
    {
      "id" : "Condition.recorder",
      "path" : "Condition.recorder",
      "short" : "Ansvarig personal (diagnosisHeader.accountableHealthcareProfessional) – logisk referens via HSA-id",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.asserter",
      "path" : "Condition.asserter",
      "short" : "Rättslig äkthetsintygsgivare (diagnosisHeader.legalAuthenticator) – logisk referens via HSA-id",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole"]
      }],
      "mustSupport" : true
    }]
  }
}

```
