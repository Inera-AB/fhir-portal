# SE EHDS AuditEvent – Sökning och träfflista med patient (BALP PatientQuery) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS AuditEvent – Sökning och träfflista med patient (BALP PatientQuery) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSAuditEventPatientQuery.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [PatientQuery](https://profiles.ihe.net/ITI/BALP/1.1.4/StructureDefinition-IHE.BasicAudit.PatientQuery.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [PatientQuery](https://profiles.ihe.net/ITI/BALP/1.1.4/StructureDefinition-IHE.BasicAudit.PatientQuery.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [PatientQuery](https://profiles.ihe.net/ITI/BALP/1.1.4/StructureDefinition-IHE.BasicAudit.PatientQuery.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [PatientQuery](https://profiles.ihe.net/ITI/BALP/1.1.4/StructureDefinition-IHE.BasicAudit.PatientQuery.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSAuditEventPatientQuery.csv), [Excel](../StructureDefinition-SEEHDSAuditEventPatientQuery.xlsx), [Schematron](../StructureDefinition-SEEHDSAuditEventPatientQuery.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSAuditEventPatientQuery",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSAuditEventPatientQuery",
  "version" : "0.9.0",
  "name" : "SEEHDSAuditEventPatientQuery",
  "title" : "SE EHDS AuditEvent – Sökning och träfflista med patient (BALP PatientQuery)",
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
  "description" : "Loggpost som ska skapas när ett EHDS-kompatibelt FHIR-API (t.ex. en EHDS-brygga) tar emot en\nsökning på en patients uppgifter och lämnar ut träfflistan, t.ex. MHD ITI-67 Find Document\nReferences eller QEDm PCC-44. Loggposterna behövs för att patienten ska kunna få veta vem som\nhar tagit del av patientens uppgifter.\n\nÄrver från IHE BALP PatientQuery och lägger till:\n- användaragent (agent[user]) och syfte (purposeOfEvent, agent[user].purposeOfUse) är obligatoriska\n- en agent per källsystem/vårdgivare som bidrog till svaret (agent[custodian])\n- bryggan som loggkälla (source.observer)\n- träfflistan: varje utlämnad resurs registreras som en entity med entity.type = resurstypen\n  (http://hl7.org/fhir/resource-types) och entity.role = object-role#4 \"Domain Resource\"",
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
  "baseDefinition" : "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientQuery",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "AuditEvent",
      "path" : "AuditEvent"
    },
    {
      "id" : "AuditEvent.purposeOfEvent",
      "path" : "AuditEvent.purposeOfEvent",
      "short" : "Syfte med åtkomsten, v3-ActReason (TREAT, ETREAT, PATRQT)",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.agent",
      "path" : "AuditEvent.agent",
      "min" : 3
    },
    {
      "id" : "AuditEvent.agent:client",
      "path" : "AuditEvent.agent",
      "sliceName" : "client",
      "short" : "Klientapplikationen (t.ex. OAuth client_id)"
    },
    {
      "id" : "AuditEvent.agent:server",
      "path" : "AuditEvent.agent",
      "sliceName" : "server",
      "short" : "FHIR-API:et/bryggan som besvarade sökningen"
    },
    {
      "id" : "AuditEvent.agent:user",
      "path" : "AuditEvent.agent",
      "sliceName" : "user",
      "short" : "Användaren som tog del av uppgifterna",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.agent:user.who.identifier",
      "path" : "AuditEvent.agent.who.identifier",
      "short" : "Användarens HSA-id (urn:oid:1.2.752.29.4.19), eller personnummer när patienten själv är användare",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.agent:user.purposeOfUse",
      "path" : "AuditEvent.agent.purposeOfUse",
      "short" : "Syfte med åtkomsten, v3-ActReason (TREAT, ETREAT, PATRQT)",
      "min" : 1
    },
    {
      "id" : "AuditEvent.agent:custodian",
      "path" : "AuditEvent.agent",
      "sliceName" : "custodian",
      "short" : "Källsystem/vårdgivare som bidrog till svaret",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.agent:custodian.type",
      "path" : "AuditEvent.agent.type",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
          "code" : "CST",
          "display" : "custodian"
        }]
      }
    },
    {
      "id" : "AuditEvent.agent:custodian.who",
      "path" : "AuditEvent.agent.who",
      "min" : 1
    },
    {
      "id" : "AuditEvent.agent:custodian.who.identifier",
      "path" : "AuditEvent.agent.who.identifier",
      "short" : "Källsystemets eller vårdgivarens HSA-id – samma som Provenance.agent[custodian] för de utlämnade resurserna",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "AuditEvent.agent:custodian.requestor",
      "path" : "AuditEvent.agent.requestor",
      "patternBoolean" : false
    },
    {
      "id" : "AuditEvent.source.observer",
      "path" : "AuditEvent.source.observer",
      "short" : "Noden som registrerade händelsen (bryggan)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Device"]
      }]
    },
    {
      "id" : "AuditEvent.entity:query",
      "path" : "AuditEvent.entity",
      "sliceName" : "query",
      "short" : "Sökfrågan (base64 i query)"
    },
    {
      "id" : "AuditEvent.entity:patient",
      "path" : "AuditEvent.entity",
      "sliceName" : "patient"
    },
    {
      "id" : "AuditEvent.entity:patient.what",
      "path" : "AuditEvent.entity.what",
      "short" : "Patienten – identifier med personnummer eller samordningsnummer",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }]
    }]
  }
}

```
