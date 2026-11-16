# Källsystemskontakt - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Extension: Källsystemskontakt 

**Context of Use**

**Usage info**

**Användningar:**

* Använd denna Extension: [SE EHDS Device – Källsystem (GetVaccinationHistory registrationRecord)](StructureDefinition-SEEHDSDevice.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-device-source-system-contact.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-device-source-system-contact.csv), [Excel](../StructureDefinition-device-source-system-contact.xlsx), [Schematron](../StructureDefinition-device-source-system-contact.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "device-source-system-contact",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/device-source-system-contact",
  "version" : "0.9.0",
  "name" : "DeviceSourceSystemContact",
  "title" : "Källsystemskontakt",
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
  "description" : "Ansvarig kontaktperson för källsystemet (registrationRecord.sourceSystemContact.hsaid/personName).",
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
      "short" : "Källsystemskontakt",
      "definition" : "Ansvarig kontaktperson för källsystemet (registrationRecord.sourceSystemContact.hsaid/personName)."
    },
    {
      "id" : "Extension.extension:actorId",
      "path" : "Extension.extension",
      "sliceName" : "actorId",
      "short" : "Kontaktpersonens identifierare (sourceSystemContact.hsaid)",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Extension.extension:actorId.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:actorId.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "actorId"
    },
    {
      "id" : "Extension.extension:actorId.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Extension.extension:actorName",
      "path" : "Extension.extension",
      "sliceName" : "actorName",
      "short" : "Kontaktpersonens namn (sourceSystemContact.personName)",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Extension.extension:actorName.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:actorName.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "actorName"
    },
    {
      "id" : "Extension.extension:actorName.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/device-source-system-contact"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "max" : "0"
    }]
  }
}

```
