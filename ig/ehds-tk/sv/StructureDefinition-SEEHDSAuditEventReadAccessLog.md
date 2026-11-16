# SE EHDS AuditEvent – Läsning av åtkomstloggar (GetAccessLogForPatient) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS AuditEvent – Läsning av åtkomstloggar (GetAccessLogForPatient) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSAuditEventReadAccessLog.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [AuditEvent](http://hl7.org/fhir/R4/auditevent.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [AuditEvent](http://hl7.org/fhir/R4/auditevent.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [AuditEvent](http://hl7.org/fhir/R4/auditevent.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [AuditEvent](http://hl7.org/fhir/R4/auditevent.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSAuditEventReadAccessLog.csv), [Excel](../StructureDefinition-SEEHDSAuditEventReadAccessLog.xlsx), [Schematron](../StructureDefinition-SEEHDSAuditEventReadAccessLog.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSAuditEventReadAccessLog",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSAuditEventReadAccessLog",
  "version" : "0.9.0",
  "name" : "SEEHDSAuditEventReadAccessLog",
  "title" : "SE EHDS AuditEvent – Läsning av åtkomstloggar (GetAccessLogForPatient)",
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
  "description" : "Profil för att läsa åtkomstloggar: representerar en befintlig loggpost som lämnas ut till\npatienten, mappad från RIVTA-tjänstekontraktet GetAccessLogForPatient\n(informationsecurity:auditing:log v1.1, 2.0). Täcker 1177 Journal 1.1, 2.0. Krävs ej för NPÖ.\n\nProfilen används INTE för att logga användningen av FHIR-API:et. De loggposter som ska skapas\nnär API:et nyttjas beskrivs av SEEHDSAuditEventPatientQuery och SEEHDSAuditEventPatientRead.",
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
    "identity" : "dicom",
    "uri" : "http://nema.org/dicom",
    "name" : "DICOM Tag Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "w3c.prov",
    "uri" : "http://www.w3.org/ns/prov",
    "name" : "W3C PROV"
  },
  {
    "identity" : "fhirprovenance",
    "uri" : "http://hl7.org/fhir/provenance",
    "name" : "FHIR Provenance Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "AuditEvent",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/AuditEvent",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "AuditEvent",
      "path" : "AuditEvent"
    },
    {
      "id" : "AuditEvent.type",
      "path" : "AuditEvent.type",
      "short" : "Händelsetyp – fast värde, meddelandet saknar åtkomsttyp (LOG-002)",
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.action",
      "path" : "AuditEvent.action",
      "short" : "Åtgärd (R=Read)",
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.recorded",
      "path" : "AuditEvent.recorded",
      "short" : "Tidpunkt för åtkomst (accessLog.accessDate)",
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.outcome",
      "path" : "AuditEvent.outcome",
      "short" : "Utfall – 0 (Success): loggposten avser en genomförd åtkomst",
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.agent",
      "path" : "AuditEvent.agent",
      "short" : "Aktörer i loggposten",
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.agent.who",
      "path" : "AuditEvent.agent.who",
      "short" : "Användare (accessLog.userId), vårdenhet (careUnitId) eller vårdgivare (careProviderId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole",
        "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization",
        "http://hl7.org/fhir/StructureDefinition/Device"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.agent.requestor",
      "path" : "AuditEvent.agent.requestor",
      "short" : "Är aktören den som initierade händelsen",
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.agent.purposeOfUse",
      "path" : "AuditEvent.agent.purposeOfUse",
      "short" : "Åtkomstsyfte (accessLog.purpose)",
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.source",
      "path" : "AuditEvent.source",
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.source.observer",
      "path" : "AuditEvent.source.observer",
      "short" : "Det källsystem (logisk adress) som bryggan anropade",
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.entity",
      "path" : "AuditEvent.entity",
      "short" : "Objekt/patient som åtkomsten gäller",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.entity.what",
      "path" : "AuditEvent.entity.what",
      "short" : "Patient – den efterfrågade patienten (begärans patientId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.entity.role",
      "path" : "AuditEvent.entity.role",
      "short" : "Objektets roll i händelsen",
      "mustSupport" : true
    }]
  }
}

```
