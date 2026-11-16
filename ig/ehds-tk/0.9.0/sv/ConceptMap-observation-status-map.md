# GetObservations – observationStatus (SNOMED CT) → FHIR ObservationStatus - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## ConceptMap: GetObservations – observationStatus (SNOMED CT) → FHIR ObservationStatus 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "observation-status-map",
  "url" : "https://fhir.inera.se/ConceptMap/observation-status-map",
  "version" : "0.9.0",
  "name" : "ObservationStatusMap",
  "title" : "GetObservations observationStatus → FHIR ObservationStatus",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-01-01",
  "publisher" : "Inera AB",
  "contact" : [{
    "name" : "Inera AB",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.inera.se"
    }]
  }],
  "description" : "Mappar SNOMED CT-koder från urvals-id 56431000052106 till FHIR ObservationStatus.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "sourceCanonical" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/se-observation-status-vs",
  "targetCanonical" : "http://hl7.org/fhir/ValueSet/observation-status",
  "group" : [{
    "source" : "http://snomed.info/sct",
    "target" : "http://hl7.org/fhir/observation-status",
    "targetVersion" : "4.0.1",
    "element" : [{
      "code" : "385676005",
      "display" : "Under utförande",
      "target" : [{
        "code" : "preliminary",
        "display" : "Preliminary",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "385651009",
      "display" : "Slutlig",
      "target" : [{
        "code" : "final",
        "display" : "Final",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "272393004",
      "display" : "Korrigerad",
      "target" : [{
        "code" : "amended",
        "display" : "Amended",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "59776000",
      "display" : "Avbeställd/annullerad",
      "target" : [{
        "code" : "cancelled",
        "display" : "Cancelled",
        "equivalence" : "equivalent",
        "comment" : "Avbeställd/annullerad – observationen utfördes aldrig"
      }]
    },
    {
      "code" : "444301002",
      "display" : "Avböjd av patient",
      "target" : [{
        "code" : "cancelled",
        "display" : "Cancelled",
        "equivalence" : "narrower",
        "comment" : "Avböjd av patient – semantiken specificeras med dataAbsentReason om värderelevant"
      }]
    }],
    "unmapped" : {
      "mode" : "fixed",
      "code" : "unknown",
      "display" : "Unknown"
    }
  }]
}

```
