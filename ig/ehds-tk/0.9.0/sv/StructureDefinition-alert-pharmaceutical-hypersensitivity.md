# Läkemedelsöverkänslighet – substansdetaljer - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Extension: Läkemedelsöverkänslighet – substansdetaljer 

**Context of Use**

**Usage info**

**Användningar:**

* Använd denna Extension: [SE EHDS Flag – Uppmärksamhetsinformation (GetAlertInformation)](StructureDefinition-SEEHDSFlag.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-alert-pharmaceutical-hypersensitivity.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-alert-pharmaceutical-hypersensitivity.csv), [Excel](../StructureDefinition-alert-pharmaceutical-hypersensitivity.xlsx), [Schematron](../StructureDefinition-alert-pharmaceutical-hypersensitivity.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "alert-pharmaceutical-hypersensitivity",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-pharmaceutical-hypersensitivity",
  "version" : "0.9.0",
  "name" : "AlertPharmaceuticalHypersensitivity",
  "title" : "Läkemedelsöverkänslighet – substansdetaljer",
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
  "description" : "Kompletterande substansdetaljer för läkemedelsöverkänslighet\n(alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity).\nPrimär substans: atcSubstance → Flag.code.coding; nonATCSubstance → Flag.code.text.\nDenna extension bär kvarvarande detaljer: nonATCSubstanceComment och pharmaceuticalProductId.",
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
      "short" : "Läkemedelsöverkänslighet – substansdetaljer",
      "definition" : "Kompletterande substansdetaljer för läkemedelsöverkänslighet\n(alertInformationBody.hypersensitivity.pharmaceuticalHypersensitivity).\nPrimär substans: atcSubstance → Flag.code.coding; nonATCSubstance → Flag.code.text.\nDenna extension bär kvarvarande detaljer: nonATCSubstanceComment och pharmaceuticalProductId."
    },
    {
      "id" : "Extension.extension:nonATCSubstanceComment",
      "path" : "Extension.extension",
      "sliceName" : "nonATCSubstanceComment",
      "short" : "Förklaring till avsaknad ATC-kod (pharmaceuticalHypersensitivity.nonATCSubstanceComment)",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Extension.extension:nonATCSubstanceComment.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:nonATCSubstanceComment.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "nonATCSubstanceComment"
    },
    {
      "id" : "Extension.extension:nonATCSubstanceComment.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Extension.extension:pharmaceuticalProductId",
      "path" : "Extension.extension",
      "sliceName" : "pharmaceuticalProductId",
      "short" : "Läkemedelsprodukt-id/NPL-id (pharmaceuticalHypersensitivity.pharmaceuticalProductId)",
      "min" : 0,
      "max" : "*"
    },
    {
      "id" : "Extension.extension:pharmaceuticalProductId.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:pharmaceuticalProductId.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "pharmaceuticalProductId"
    },
    {
      "id" : "Extension.extension:pharmaceuticalProductId.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "CodeableConcept"
      }]
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/alert-pharmaceutical-hypersensitivity"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "max" : "0"
    }]
  }
}

```
