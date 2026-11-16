# SE EHDS Task – Remisstatus (GetRequestActivities) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Task – Remisstatus (GetRequestActivities) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSTask.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Task](http://hl7.org/fhir/R4/task.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Task](http://hl7.org/fhir/R4/task.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [Task](http://hl7.org/fhir/R4/task.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Task](http://hl7.org/fhir/R4/task.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSTask.csv), [Excel](../StructureDefinition-SEEHDSTask.xlsx), [Schematron](../StructureDefinition-SEEHDSTask.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSTask",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSTask",
  "version" : "0.9.0",
  "name" : "SEEHDSTask",
  "title" : "SE EHDS Task – Remisstatus (GetRequestActivities)",
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
  "description" : "Profil för remisstatus och processaktiviteter mappat från RIVTA-tjänstekontraktet GetRequestActivities (crm:requeststatus v2.0). Täcker NPÖ 2.0 och 1177 Journal 1.0, 2.0.",
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
  "type" : "Task",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Task",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Task",
      "path" : "Task"
    },
    {
      "id" : "Task.meta.source",
      "path" : "Task.meta.source",
      "short" : "Källsystem (requestActivity.header.sourceSystemId.extension) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "Task.identifier",
      "path" : "Task.identifier",
      "short" : "Remisstatusens id (header.record.id)",
      "mustSupport" : true
    },
    {
      "id" : "Task.status",
      "path" : "Task.status",
      "short" : "Status härledd från body.statusCode (Kv status vårdbegäran)",
      "mustSupport" : true
    },
    {
      "id" : "Task.businessStatus",
      "path" : "Task.businessStatus",
      "short" : "Remisstatus enligt Kv status vårdbegäran (body.statusCode)",
      "mustSupport" : true
    },
    {
      "id" : "Task.intent",
      "path" : "Task.intent",
      "mustSupport" : true
    },
    {
      "id" : "Task.focus",
      "path" : "Task.focus",
      "short" : "Koppling till remiss (body.request.id)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSServiceRequestReferral"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Task.for",
      "path" : "Task.for",
      "short" : "Patient – den efterfrågade patienten (begärans patientId); svaret saknar patientidentitet",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Task.authoredOn",
      "path" : "Task.authoredOn",
      "short" : "Skapad i källsystemet (header.record.timestamp)",
      "mustSupport" : true
    },
    {
      "id" : "Task.lastModified",
      "path" : "Task.lastModified",
      "short" : "Statusändring (body.eventTime)",
      "mustSupport" : true
    },
    {
      "id" : "Task.requester",
      "path" : "Task.requester",
      "short" : "Remittent (body.request.author)",
      "mustSupport" : true
    },
    {
      "id" : "Task.owner",
      "path" : "Task.owner",
      "short" : "Mottagande enhet (body.request.receivingOrganization)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole",
        "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization"]
      }],
      "mustSupport" : true
    }]
  }
}

```
