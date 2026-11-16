# SE EHDS Device – Källsystem (GetVaccinationHistory registrationRecord) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Device – Källsystem (GetVaccinationHistory registrationRecord) 

**Användningar:**

* Referera till denna Profil: [Källsystem för vaccinationsregistrering](StructureDefinition-immunization-registration-device.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSDevice.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Device](http://hl7.org/fhir/R4/device.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Device](http://hl7.org/fhir/R4/device.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [Device](http://hl7.org/fhir/R4/device.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Device](http://hl7.org/fhir/R4/device.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSDevice.csv), [Excel](../StructureDefinition-SEEHDSDevice.xlsx), [Schematron](../StructureDefinition-SEEHDSDevice.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSDevice",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSDevice",
  "version" : "0.9.0",
  "name" : "SEEHDSDevice",
  "title" : "SE EHDS Device – Källsystem (GetVaccinationHistory registrationRecord)",
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
  "description" : "Profil för det källsystem som registrerat en vaccination i GetVaccinationHistory v2.0.\n\nRepresenterar vaccinationMedicalRecordBody.registrationRecord.sourceSystem*\noch sourceSystemContact. Refereras från SEEHDSImmunization via\nextension[registrationDevice].\n\ndeviceName[systemName]  = sourceSystemName     (1..1, obligatorisk)\ndeviceName[productName] = sourceSystemProductName (0..1)\nversion                 = sourceSystemProductVersion (0..1)\nextension[sourceSystemContact] = sourceSystemContact.hsaid/personName (0..1)",
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
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "udi",
    "uri" : "http://fda.gov/UDI",
    "name" : "UDI Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Device",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Device",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Device",
      "path" : "Device"
    },
    {
      "id" : "Device.extension",
      "path" : "Device.extension",
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
      "id" : "Device.extension:sourceSystemContact",
      "path" : "Device.extension",
      "sliceName" : "sourceSystemContact",
      "short" : "Kontaktperson för källsystemet (registrationRecord.sourceSystemContact)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/device-source-system-contact"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName",
      "path" : "Device.deviceName",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "type"
        }],
        "rules" : "open"
      },
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName:systemName",
      "path" : "Device.deviceName",
      "sliceName" : "systemName",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName:systemName.name",
      "path" : "Device.deviceName.name",
      "short" : "Källsystemets namn (registrationRecord.sourceSystemName)",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName:systemName.type",
      "path" : "Device.deviceName.type",
      "patternCode" : "user-friendly-name"
    },
    {
      "id" : "Device.deviceName:productName",
      "path" : "Device.deviceName",
      "sliceName" : "productName",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName:productName.name",
      "path" : "Device.deviceName.name",
      "short" : "Källsystemets produktnamn (registrationRecord.sourceSystemProductName)",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName:productName.type",
      "path" : "Device.deviceName.type",
      "patternCode" : "model-name"
    },
    {
      "id" : "Device.version",
      "path" : "Device.version",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.version.value",
      "path" : "Device.version.value",
      "short" : "Källsystemets produktversion (registrationRecord.sourceSystemProductVersion)",
      "mustSupport" : true
    }]
  }
}

```
