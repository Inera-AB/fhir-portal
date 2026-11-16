# Tillväxtkurva – observationstyper (IoÖ Tillväxtkurva v3) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## ValueSet: Tillväxtkurva – observationstyper (IoÖ Tillväxtkurva v3) 

 **References** 

* [SE EHDS Observation – Tillväxtkurva (GetObservations + IoÖ v3)](StructureDefinition-SEEHDSObservationGrowth.md)

### Logisk definition (CLD)

 

### Expansion

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "growth-observation-type-vs",
  "url" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/growth-observation-type-vs",
  "version" : "0.9.0",
  "name" : "GrowthObservationTypeVS",
  "title" : "Tillväxtkurva – observationstyper (IoÖ Tillväxtkurva v3)",
  "status" : "draft",
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
  "description" : "SNOMED CT-koder för tillväxtmätningar enligt Interaktionsöverenskommelse\nTillväxtkurva för barn och ungdom v3 (Inera, 2023-05-15).\n\nAlla koder från kodsystemet SNOMED CT SE (OID 1.2.752.116.2.1.1).\n\nKoder:\n- 1153637007 | Kroppslängd | (primärkod för längd)\n- 50373000   | Mått på kroppslängd | (alternativkod för längd)\n- 248334005  | Längd i liggande | (bakåtkompatibel – ej för nyanslutning)\n- 27113001   | Kroppsvikt |\n- 363812007  | Huvudomfång |\n- 412726003  | Graviditetslängd vid födelse |",
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
        "code" : "1153637007",
        "display" : "Kroppslängd"
      },
      {
        "code" : "50373000",
        "display" : "Mått på kroppslängd"
      },
      {
        "code" : "248334005",
        "display" : "Längd i liggande (bakåtkompatibel – ej för nyanslutning)"
      },
      {
        "code" : "27113001",
        "display" : "Kroppsvikt"
      },
      {
        "code" : "363812007",
        "display" : "Huvudomfång"
      },
      {
        "code" : "412726003",
        "display" : "Graviditetslängd vid födelse"
      }]
    }]
  }
}

```
