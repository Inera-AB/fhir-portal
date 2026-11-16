# KV Diagnostyp (fragment) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: KV Diagnostyp (fragment) 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [DiagnosisType — ValueSet](ValueSet-diagnosistype-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "diagnosistype-cs",
  "url" : "https://terminologitjansten.inera.se/inera-kodverksforvaltning/kodverk/kv_diagnostyp",
  "version" : "0.9.0",
  "name" : "DiagnosisTypeCS",
  "title" : "KV Diagnostyp (fragment)",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-11-16T16:15:01+00:00",
  "publisher" : "Inera AB",
  "contact" : [{
    "name" : "Inera AB",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.inera.se"
    }]
  }],
  "description" : "Fragment av Ineras kodverk kv_diagnostyp med de koder som används för typ av diagnos i GetDiagnosis (diagnosisBody.typeOfDiagnosis): HD = huvuddiagnos, BY = bidiagnos. Kodverket förvaltas av Inera; detta är en delmängd för validering i IG:n.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "caseSensitive" : true,
  "content" : "fragment",
  "concept" : [{
    "code" : "HD",
    "display" : "Huvuddiagnos",
    "definition" : "Huvuddiagnos"
  },
  {
    "code" : "BY",
    "display" : "Bidiagnos",
    "definition" : "Bidiagnos"
  }]
}

```
