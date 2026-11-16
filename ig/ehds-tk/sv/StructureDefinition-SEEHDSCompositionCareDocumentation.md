# SE EHDS Composition – Strukturerad journalanteckning från DocBook (GetCareDocumentation) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Composition – Strukturerad journalanteckning från DocBook (GetCareDocumentation) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSCompositionCareDocumentation.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [CompositionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-composition-eu-core.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [CompositionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-composition-eu-core.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [CompositionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-composition-eu-core.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [CompositionEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-composition-eu-core.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSCompositionCareDocumentation.csv), [Excel](../StructureDefinition-SEEHDSCompositionCareDocumentation.xlsx), [Schematron](../StructureDefinition-SEEHDSCompositionCareDocumentation.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSCompositionCareDocumentation",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSCompositionCareDocumentation",
  "version" : "0.9.0",
  "name" : "SEEHDSCompositionCareDocumentation",
  "title" : "SE EHDS Composition – Strukturerad journalanteckning från DocBook (GetCareDocumentation)",
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
  "description" : "Valfri strukturerad representation av en journalanteckning från GetCareDocumentation v3.0 när\ninnehållet är DocBook (clinicalDocumentNoteText eller en bilaga med mediaType\napplication/docbook+xml). Varje DocBook-`section` blir en Composition.section med XHTML-narrativ\n(Strategi B, se DOC-004 och sidan DocBook-mappning).\n\nKompletterar SEEHDSDocumentReference, där innehållet alltid finns som XHTML (Strategi A).\nComposition kopplas till DocumentReference genom att samma Provenance har båda i\nProvenance.target.",
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
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  },
  {
    "identity" : "fhirdocumentreference",
    "uri" : "http://hl7.org/fhir/documentreference",
    "name" : "FHIR DocumentReference"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Composition",
  "baseDefinition" : "http://hl7.eu/fhir/base/StructureDefinition/composition-eu-core",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Composition",
      "path" : "Composition"
    },
    {
      "id" : "Composition.identifier",
      "path" : "Composition.identifier",
      "short" : "Journaluppgiftens id (careDocumentation.header.record.id) – samma som DocumentReference.masterIdentifier"
    },
    {
      "id" : "Composition.status",
      "path" : "Composition.status",
      "short" : "Alltid final",
      "patternCode" : "final"
    },
    {
      "id" : "Composition.type",
      "path" : "Composition.type",
      "short" : "Anteckningstyp – kopieras från DocumentReference.type (careDocumentation.body.clinicalDocumentNoteCode)",
      "mustSupport" : true
    },
    {
      "id" : "Composition.subject",
      "path" : "Composition.subject",
      "short" : "Patient – kopieras från DocumentReference.subject",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.date",
      "path" : "Composition.date",
      "short" : "Journaluppgiftens skapandetidpunkt – kopieras från DocumentReference.date (careDocumentation.header.record.timestamp)",
      "mustSupport" : true
    },
    {
      "id" : "Composition.author",
      "path" : "Composition.author",
      "short" : "Dokumentationsansvarig – kopieras från DocumentReference.author; om author saknas: vårdenheten (accessControlHeader.accountableCareUnit) som Organization",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole",
        "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Composition.title",
      "path" : "Composition.title",
      "short" : "careDocumentation.body.clinicalDocumentNoteTitle; fallback \"Journalanteckning\"",
      "mustSupport" : true
    },
    {
      "id" : "Composition.section",
      "path" : "Composition.section",
      "short" : "En sektion per DocBook-<section>; löst innehåll under <article> i en avslutande namnlös sektion",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Composition.section.title",
      "path" : "Composition.section.title",
      "short" : "Text från DocBook-<title>; saknas för namnlös sektion",
      "mustSupport" : true
    },
    {
      "id" : "Composition.section.text",
      "path" : "Composition.section.text",
      "short" : "Sektionens eget innehåll som XHTML (samma transformation som Strategi A)",
      "mustSupport" : true
    },
    {
      "id" : "Composition.section.text.status",
      "path" : "Composition.section.text.status",
      "patternCode" : "generated"
    },
    {
      "id" : "Composition.section.section",
      "path" : "Composition.section.section",
      "short" : "Nästlade DocBook-<section>",
      "mustSupport" : true
    }]
  }
}

```
