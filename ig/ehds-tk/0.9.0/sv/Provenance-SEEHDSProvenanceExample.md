# Exempel: Provenance med custodian och author - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Exempel Provenance: Exempel: Provenance med custodian och author

Profil: [SE EHDS Provenance](StructureDefinition-SEEHDSProvenance.md)

Härkomst för Identifier: [Uniform Resource Identifier (URI)](http://terminology.hl7.org/7.3.0/NamingSystem-uri.html)/urn:uuid:6f1e4c2a-3b7d-4e8f-9a01-2c3d4e5f6a7b

Sammanfattning

| | |
| :--- | :--- |
| Registrerad | 2023-06-01 12:00:00+0200 |

**Agenter**

* **Typ**: Custodian
  * **vem**: Exempelregionen (Identifier:`urn:oid:1.2.752.29.4.19`/SE2321000016-15CQ)
* **Typ**: Author
  * **vem**: Exempelvårdcentralen (Identifier:`urn:oid:1.2.752.29.4.19`/SE2321000016-15D1)



## Resource Content

```json
{
  "resourceType" : "Provenance",
  "id" : "SEEHDSProvenanceExample",
  "meta" : {
    "profile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSProvenance"]
  },
  "target" : [{
    "identifier" : {
      "system" : "urn:ietf:rfc:3986",
      "value" : "urn:uuid:6f1e4c2a-3b7d-4e8f-9a01-2c3d4e5f6a7b"
    }
  }],
  "recorded" : "2023-06-01T12:00:00+02:00",
  "agent" : [{
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
        "code" : "custodian",
        "display" : "Custodian"
      }]
    },
    "who" : {
      "identifier" : {
        "system" : "urn:oid:1.2.752.29.4.19",
        "value" : "SE2321000016-15CQ"
      },
      "display" : "Exempelregionen"
    }
  },
  {
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
        "code" : "author",
        "display" : "Author"
      }]
    },
    "who" : {
      "identifier" : {
        "system" : "urn:oid:1.2.752.29.4.19",
        "value" : "SE2321000016-15D1"
      },
      "display" : "Exempelvårdcentralen"
    }
  }]
}

```
