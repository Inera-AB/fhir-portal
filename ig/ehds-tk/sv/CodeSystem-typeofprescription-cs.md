# TypeOfPrescription - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: TypeOfPrescription 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [TypeOfPrescription — ValueSet](ValueSet-typeofprescription-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "typeofprescription-cs",
  "url" : "https://fhir.inera.se/CodeSystem/typeofprescription",
  "version" : "0.9.0",
  "name" : "TypeOfPrescriptionCS",
  "title" : "TypeOfPrescription",
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
  "description" : "Kodverk för ordinationstyp i GetMedicationHistory. Anger om en ordination är en insättnings- eller utsättningsordination.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 2,
  "concept" : [{
    "code" : "I",
    "display" : "Insättningsordination",
    "definition" : "Ordination som innebär att läkemedelsbehandling påbörjas"
  },
  {
    "code" : "U",
    "display" : "Utsättningsordination",
    "definition" : "Ordination som innebär att läkemedelsbehandling avslutas"
  }]
}

```
