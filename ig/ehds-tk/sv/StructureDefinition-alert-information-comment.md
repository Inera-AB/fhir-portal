# Kommentar till uppmärksamhetssignal - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Extension: Kommentar till uppmärksamhetssignal 

**Context of Use**

**Usage info**

**Användningar:**

* Använd denna Extension: [SE EHDS Flag – Uppmärksamhetsinformation (GetAlertInformation)](StructureDefinition-SEEHDSFlag.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-alert-information-comment.json)

### Formella vyer av extensioninnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

Denna struktur är härledd från [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

#### Begränsningar

Denna struktur är härledd från [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 **Differentialvy** 

Denna struktur är härledd från [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 **Ögonblicksbildsvy** 

#### Begränsningar

Denna struktur är härledd från [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-alert-information-comment.csv), [Excel](../StructureDefinition-alert-information-comment.xlsx), [Schematron](../StructureDefinition-alert-information-comment.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "alert-information-comment",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-information-comment",
  "version" : "0.9.0",
  "name" : "AlertInformationComment",
  "title" : "Kommentar till uppmärksamhetssignal",
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
  "description" : "Kommentar angående uppmärksamhetssignalen (alertInformationBody.alertInformationComment).\nOm obsoleteComment är angivet konkateneras det med prefix 'Inaktiveringskommentar: {obsoleteComment}'.\nFör body = unstructuredAlertInformation: unstructuredAlertInformationContent läggs här.",
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
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "Element"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "Kommentar till uppmärksamhetssignal",
      "definition" : "Kommentar angående uppmärksamhetssignalen (alertInformationBody.alertInformationComment).\nOm obsoleteComment är angivet konkateneras det med prefix 'Inaktiveringskommentar: {obsoleteComment}'.\nFör body = unstructuredAlertInformation: unstructuredAlertInformationContent läggs här."
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-information-comment"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "type" : [{
        "code" : "string"
      }]
    }]
  }
}

```
