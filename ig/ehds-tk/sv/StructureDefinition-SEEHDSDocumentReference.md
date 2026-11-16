# SE EHDS DocumentReference – Anteckningar (GetCareDocumentation) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS DocumentReference – Anteckningar (GetCareDocumentation) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSDocumentReference.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [DocumentReference](http://hl7.org/fhir/R4/documentreference.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [DocumentReference](http://hl7.org/fhir/R4/documentreference.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [DocumentReference](http://hl7.org/fhir/R4/documentreference.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [DocumentReference](http://hl7.org/fhir/R4/documentreference.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSDocumentReference.csv), [Excel](../StructureDefinition-SEEHDSDocumentReference.xlsx), [Schematron](../StructureDefinition-SEEHDSDocumentReference.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSDocumentReference",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSDocumentReference",
  "version" : "0.9.0",
  "name" : "SEEHDSDocumentReference",
  "title" : "SE EHDS DocumentReference – Anteckningar (GetCareDocumentation)",
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
  "description" : "Profil för vårdanteckningar mappat från RIVTA-tjänstekontraktet GetCareDocumentation\n(clinicalprocess:healthcond:description v3.0). Täcker NPÖ 3.0 och 1177 Journal 3.0.\n\nAnvänder JoL-header v2.2 (ej PatientSummaryHeader): accessControlHeader för PDL,\nrecord för journaluppgift-metadata, author för dokumentationsansvarig,\nsignature för signeringsinformation.",
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
    "identity" : "fhircomposition",
    "uri" : "http://hl7.org/fhir/composition",
    "name" : "FHIR Composition"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
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
  },
  {
    "identity" : "xds",
    "uri" : "http://ihe.net/xds",
    "name" : "XDS metadata equivalent"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "DocumentReference",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/DocumentReference",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "DocumentReference",
      "path" : "DocumentReference"
    },
    {
      "id" : "DocumentReference.meta.source",
      "path" : "DocumentReference.meta.source",
      "short" : "Källsystem HSA-id (careDocumentation.header.sourceSystemId) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.extension",
      "path" : "DocumentReference.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "open"
      }
    },
    {
      "id" : "DocumentReference.extension:ext-signature-time",
      "path" : "DocumentReference.extension",
      "sliceName" : "ext-signature-time",
      "short" : "Signeringstidpunkt (careDocumentation.header.signature.timestamp) – utelämnas om signature.timestamp saknas (DOC-003)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/ext-signature-time"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.status",
      "path" : "DocumentReference.status",
      "short" : "Dokumentstatus – 'current' normalt; härledd",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.type",
      "path" : "DocumentReference.type",
      "short" : "Anteckningstyp (careDocumentation.body.clinicalDocumentNoteCode – KV Anteckningstyp)",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.category",
      "path" : "DocumentReference.category",
      "short" : "Dokumentkategori",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.subject",
      "path" : "DocumentReference.subject",
      "short" : "Patient (careDocumentation.header.accessControlHeader.patientId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.date",
      "path" : "DocumentReference.date",
      "short" : "Journaluppgiftens skapandetidpunkt (careDocumentation.header.record.timestamp)",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.author",
      "path" : "DocumentReference.author",
      "short" : "Dokumentationsansvarig (careDocumentation.header.author.id – JoL-header)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.authenticator",
      "path" : "DocumentReference.authenticator",
      "short" : "Signerande person (careDocumentation.header.signature.id – JoL-header)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content",
      "path" : "DocumentReference.content",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content.attachment",
      "path" : "DocumentReference.content.attachment",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content.attachment.contentType",
      "path" : "DocumentReference.content.attachment.contentType",
      "short" : "Mimetyp (careDocumentation.body.multimediaEntry.mediaType); för clinicalDocumentNoteText text/plain; charset=utf-8 (fritext) eller text/html; charset=utf-8 (DocBook → XHTML, DOC-004)",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content.attachment.data",
      "path" : "DocumentReference.content.attachment.data",
      "short" : "Anteckningstext/binärinnehåll (careDocumentation.body.clinicalDocumentNoteText / multimediaEntry.value) – för clinicalDocumentNoteText: fritext base64-kodas som text/plain; DocBook-XML transformeras till XHTML och base64-kodas som text/html (DOC-004)",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content.attachment.url",
      "path" : "DocumentReference.content.attachment.url",
      "short" : "Referens till extern fil (careDocumentation.body.multimediaEntry.reference)",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.content.attachment.title",
      "path" : "DocumentReference.content.attachment.title",
      "short" : "Anteckningsrubrik (careDocumentation.body.clinicalDocumentNoteTitle)",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.context",
      "path" : "DocumentReference.context",
      "mustSupport" : true
    },
    {
      "id" : "DocumentReference.context.encounter",
      "path" : "DocumentReference.context.encounter",
      "short" : "Tillhörande vårdkontakt (careDocumentation.header.accessControlHeader – koppling via vårdkontakt-id)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSEncounter"]
      }],
      "mustSupport" : true
    }]
  }
}

```
