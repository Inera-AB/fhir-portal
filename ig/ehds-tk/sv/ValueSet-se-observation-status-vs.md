# SE Observation Status (SNOMED CT urval 56431000052106) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## ValueSet: SE Observation Status (SNOMED CT urval 56431000052106) 

 **References** 

Denna värdemängd används inte här; den kan användas på andra ställen (t.ex. specifikationer och/eller implementationer som använder detta innehåll)

### Logisk definition (CLD)

 

### Expansion

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "se-observation-status-vs",
  "url" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/se-observation-status-vs",
  "version" : "0.9.0",
  "name" : "SEObservationStatusVS",
  "title" : "SE Observation Status (SNOMED CT urval 56431000052106)",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-11-16T16:17:59+00:00",
  "publisher" : "Inera AB",
  "contact" : [{
    "name" : "Inera AB",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.inera.se"
    }]
  }],
  "description" : "Tillåtna statusvärden för GetObservations observationStatus.\nUrvals-id 56431000052106, SNOMED CT SE (OID 1.2.752.116.2.1.1).\nMappning till FHIR ObservationStatus via ConceptMap observation-status-map.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "concept" : [{
        "code" : "385676005",
        "display" : "Under utförande"
      },
      {
        "code" : "385651009",
        "display" : "Slutlig"
      },
      {
        "code" : "272393004",
        "display" : "Korrigerad"
      },
      {
        "code" : "59776000",
        "display" : "Avbeställd/annullerad"
      },
      {
        "code" : "444301002",
        "display" : "Avböjd av patient"
      }]
    }]
  }
}

```
