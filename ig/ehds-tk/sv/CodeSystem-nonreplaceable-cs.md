# NonReplaceable - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: NonReplaceable 

Detta kodsystem refereras i definitionen av följande värdemängder:

* Detta CodeSystem används inte här; det kan användas på andra ställen (t.ex. specifikationer och/eller implementationer som använder detta innehåll)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "nonreplaceable-cs",
  "url" : "https://fhir.inera.se/CodeSystem/nonreplaceable-actoutcome",
  "version" : "0.9.0",
  "name" : "NonReplaceableCS",
  "title" : "NonReplaceable",
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
  "description" : "Kodverk för aktör som har angett att ett läkemedel inte är utbytbart i GetMedicationHistory (DispensationAuthorizationType).",
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
    "code" : "Prescriber",
    "display" : "Förskrivare",
    "definition" : "Förskrivaren har angett att läkemedlet inte är utbytbart"
  },
  {
    "code" : "Patient",
    "display" : "Patient",
    "definition" : "Patienten har begärt att läkemedlet inte ska bytas ut"
  }]
}

```
