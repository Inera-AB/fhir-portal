# SE EHDS DiagnosticReport – Provsvar (GetLaboratoryOrderOutcome) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS DiagnosticReport – Provsvar (GetLaboratoryOrderOutcome) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSDiagnosticReportLab.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [DiagnosticReportEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-diagnosticReport-eu-core.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [DiagnosticReportEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-diagnosticReport-eu-core.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [DiagnosticReportEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-diagnosticReport-eu-core.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [DiagnosticReportEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-diagnosticReport-eu-core.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSDiagnosticReportLab.csv), [Excel](../StructureDefinition-SEEHDSDiagnosticReportLab.xlsx), [Schematron](../StructureDefinition-SEEHDSDiagnosticReportLab.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSDiagnosticReportLab",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSDiagnosticReportLab",
  "version" : "0.9.0",
  "name" : "SEEHDSDiagnosticReportLab",
  "title" : "SE EHDS DiagnosticReport – Provsvar (GetLaboratoryOrderOutcome)",
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
  "description" : "Profil för laboratorieresultat mappat från RIVTA-tjänstekontraktet GetLaboratoryOrderOutcome (clinicalprocess:healthcond:actoutcome v4.2). Täcker NPÖ v4.2 och 1177 Journal v4.2.",
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
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "DiagnosticReport",
  "baseDefinition" : "http://hl7.eu/fhir/base/StructureDefinition/diagnosticReport-eu-core",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "DiagnosticReport",
      "path" : "DiagnosticReport"
    },
    {
      "id" : "DiagnosticReport.meta.source",
      "path" : "DiagnosticReport.meta.source",
      "short" : "Källsystem HSA-id (header.sourceSystemId) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.status",
      "path" : "DiagnosticReport.status",
      "short" : "Svarstatus – härledd (inget statusfält i TKBn)",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.category",
      "path" : "DiagnosticReport.category",
      "short" : "Laboratoriekategori",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.code",
      "path" : "DiagnosticReport.code",
      "short" : "Beställningskod (laboratoryOrderOutcome.body.type)",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.subject",
      "path" : "DiagnosticReport.subject",
      "short" : "Patient (header.accessControlHeader.patientId – JoL-header)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.effective[x]",
      "path" : "DiagnosticReport.effective[x]",
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
      "id" : "DiagnosticReport.effective[x]:effectiveDateTime",
      "path" : "DiagnosticReport.effective[x]",
      "sliceName" : "effectiveDateTime",
      "short" : "Kliniskt relevant tidpunkt (härledd; specimen.timestamp → Specimen.collection.collectedDateTime)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "dateTime"
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.issued",
      "path" : "DiagnosticReport.issued",
      "short" : "Svarstidpunkt (header.record.timestamp)",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.performer",
      "path" : "DiagnosticReport.performer",
      "short" : "Ansvarig laboratorium/personal (header.author.orgUnit)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole",
        "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.performer:organization",
      "path" : "DiagnosticReport.performer",
      "sliceName" : "organization",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization"]
      }]
    },
    {
      "id" : "DiagnosticReport.specimen",
      "path" : "DiagnosticReport.specimen",
      "short" : "Provmaterial (groupOfAnalyses.analysis.specimen.material)",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.result",
      "path" : "DiagnosticReport.result",
      "short" : "Enskilda analysresultat (groupOfAnalyses.analysis)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSObservationLab"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.conclusion",
      "path" : "DiagnosticReport.conclusion",
      "short" : "Beställningsinformation/fritext (laboratoryOrderOutcome.body.text)",
      "mustSupport" : true
    }]
  }
}

```
