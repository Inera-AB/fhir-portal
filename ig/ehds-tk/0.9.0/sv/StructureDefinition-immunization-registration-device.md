# Källsystem för vaccinationsregistrering - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Extension: Källsystem för vaccinationsregistrering 

**Context of Use**

**Usage info**

**Användningar:**

* Använd denna Extension: [SE EHDS Immunization – Vaccinationer (GetVaccinationHistory)](StructureDefinition-SEEHDSImmunization.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-immunization-registration-device.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-immunization-registration-device.csv), [Excel](../StructureDefinition-immunization-registration-device.xlsx), [Schematron](../StructureDefinition-immunization-registration-device.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "immunization-registration-device",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/immunization-registration-device",
  "version" : "0.9.0",
  "name" : "ImmunizationRegistrationDevice",
  "title" : "Källsystem för vaccinationsregistrering",
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
  "description" : "Referens till den Device-resurs som beskriver källsystemet varifrån\nvaccinationsregistreringen härstammar\n(registrationRecord.sourceSystemName/productName/productVersion/sourceSystemContact).",
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
      "short" : "Källsystem för vaccinationsregistrering",
      "definition" : "Referens till den Device-resurs som beskriver källsystemet varifrån\nvaccinationsregistreringen härstammar\n(registrationRecord.sourceSystemName/productName/productVersion/sourceSystemContact)."
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/immunization-registration-device"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSDevice"]
      }]
    }]
  }
}

```
