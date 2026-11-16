# SE EHDS CarePlan – Vårdplan (GetCarePlans) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS CarePlan – Vårdplan (GetCarePlans) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSCarePlan.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [CarePlan](http://hl7.org/fhir/R4/careplan.html) 

#### Terminologibindningar (differential)

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [CarePlan](http://hl7.org/fhir/R4/careplan.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [CarePlan](http://hl7.org/fhir/R4/careplan.html) 

#### Terminologibindningar (differential)

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [CarePlan](http://hl7.org/fhir/R4/careplan.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSCarePlan.csv), [Excel](../StructureDefinition-SEEHDSCarePlan.xlsx), [Schematron](../StructureDefinition-SEEHDSCarePlan.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSCarePlan",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSCarePlan",
  "version" : "0.9.0",
  "name" : "SEEHDSCarePlan",
  "title" : "SE EHDS CarePlan – Vårdplan (GetCarePlans)",
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
  "description" : "Profil för vård- och omsorgsplaner mappat från RIVTA-tjänstekontraktet GetCarePlans (clinicalprocess:logistics:logistics v2.0). Täcker NPÖ 2.0 och 1177 Journal 2.0.",
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
  "type" : "CarePlan",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/CarePlan",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "CarePlan",
      "path" : "CarePlan"
    },
    {
      "id" : "CarePlan.meta.source",
      "path" : "CarePlan.meta.source",
      "short" : "Källsystem HSA-id (sourceSystemHSAId) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.extension",
      "path" : "CarePlan.extension",
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
      "id" : "CarePlan.extension:approvedForPatient",
      "path" : "CarePlan.extension",
      "sliceName" : "approvedForPatient",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/approved-for-patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.identifier",
      "path" : "CarePlan.identifier",
      "short" : "Planens identitet inom källsystemet (documentId)",
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.status",
      "path" : "CarePlan.status",
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.intent",
      "path" : "CarePlan.intent",
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.category",
      "path" : "CarePlan.category",
      "short" : "Typ av vård- och omsorgsplan (typeOfCarePlanEnum)",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/typeofcareplan-vs"
      }
    },
    {
      "id" : "CarePlan.title",
      "path" : "CarePlan.title",
      "short" : "Rubrik för planen (documentTitle) – obligatorisk",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.subject",
      "path" : "CarePlan.subject",
      "short" : "Patient (patientId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.created",
      "path" : "CarePlan.created",
      "short" : "Tidpunkt då planen upprättades (documentTime)",
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.author",
      "path" : "CarePlan.author",
      "short" : "Ansvarig personal (accountableHealthcareProfessional)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole",
        "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.note",
      "path" : "CarePlan.note",
      "short" : "Innehåll i planen (content – text/plain, text/html). Stödda MIME-typer: text/plain, text/html, image/jpeg, image/png, image/tiff, application/pdf. Binärt innehåll (base64/URL) kräver extension. content.id är 0..0 (N/A) per TKB. Binärdata max 100 KB per post.",
      "mustSupport" : true
    }]
  }
}

```
