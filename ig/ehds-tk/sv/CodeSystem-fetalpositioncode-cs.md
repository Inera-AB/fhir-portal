# FetalPositionCode - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: FetalPositionCode 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [FetalPositionCode — ValueSet](ValueSet-fetalpositioncode-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "fetalpositioncode-cs",
  "url" : "https://fhir.inera.se/CodeSystem/fetalpositioncode",
  "version" : "0.9.0",
  "name" : "FetalPositionCodeCS",
  "title" : "FetalPositionCode",
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
  "description" : "Kodverk för fosterläge (FetalPositionCodeEnum). Används i GetMaternityMedicalHistory.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 4,
  "concept" : [{
    "code" : "0",
    "display" : "Huvudläge",
    "definition" : "Fostret ligger med huvudet nedåt"
  },
  {
    "code" : "1",
    "display" : "Sätesläge",
    "definition" : "Fostret ligger med sätet nedåt"
  },
  {
    "code" : "2",
    "display" : "Snedläge",
    "definition" : "Fostret ligger snett"
  },
  {
    "code" : "3",
    "display" : "Tvärläge",
    "definition" : "Fostret ligger tvärs"
  }]
}

```
