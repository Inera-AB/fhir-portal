# Relaterad uppmärksamhetssignal - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Extension: Relaterad uppmärksamhetssignal 

**Context of Use**

**Usage info**

**Användningar:**

* Använd denna Extension: [SE EHDS Flag – Uppmärksamhetsinformation (GetAlertInformation)](StructureDefinition-SEEHDSFlag.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-related-alert-information.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-related-alert-information.csv), [Excel](../StructureDefinition-related-alert-information.xlsx), [Schematron](../StructureDefinition-related-alert-information.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "related-alert-information",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/related-alert-information",
  "version" : "0.9.0",
  "name" : "RelatedAlertInformation",
  "title" : "Relaterad uppmärksamhetssignal",
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
  "description" : "Information om samband med andra uppmärksamhetssignaler (alertInformationBody.relatedAlertInformation).",
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
      "short" : "Relaterad uppmärksamhetssignal",
      "definition" : "Information om samband med andra uppmärksamhetssignaler (alertInformationBody.relatedAlertInformation)."
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "min" : 2
    },
    {
      "id" : "Extension.extension:typeOfRelationship",
      "path" : "Extension.extension",
      "sliceName" : "typeOfRelationship",
      "short" : "Typ av samband (relatedAlertInformation.typeOfAlertInformationRelationship)",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "Extension.extension:typeOfRelationship.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:typeOfRelationship.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "typeOfRelationship"
    },
    {
      "id" : "Extension.extension:typeOfRelationship.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "CodeableConcept"
      }]
    },
    {
      "id" : "Extension.extension:relationComment",
      "path" : "Extension.extension",
      "sliceName" : "relationComment",
      "short" : "Kommentar till samband (relatedAlertInformation.relationComment)",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Extension.extension:relationComment.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:relationComment.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "relationComment"
    },
    {
      "id" : "Extension.extension:relationComment.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Extension.extension:documentId",
      "path" : "Extension.extension",
      "sliceName" : "documentId",
      "short" : "Relaterat dokumentid (relatedAlertInformation.documentId)",
      "min" : 1,
      "max" : "*"
    },
    {
      "id" : "Extension.extension:documentId.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:documentId.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "documentId"
    },
    {
      "id" : "Extension.extension:documentId.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/related-alert-information"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "max" : "0"
    }]
  }
}

```
