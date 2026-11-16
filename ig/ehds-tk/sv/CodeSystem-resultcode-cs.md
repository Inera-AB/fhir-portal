# ResultCode - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: ResultCode 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [ResultCode — ValueSet](ValueSet-resultcode-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "resultcode-cs",
  "url" : "https://fhir.inera.se/CodeSystem/resultcode-actoutcome",
  "version" : "0.9.0",
  "name" : "ResultCodeCS",
  "title" : "ResultCode",
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
  "description" : "Kodverk för resultatkod i svar från tjänstekontrakten i domänen clinicalprocess:activityprescription:actoutcome.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 3,
  "concept" : [{
    "code" : "OK",
    "display" : "OK",
    "definition" : "Begäran genomfördes utan fel"
  },
  {
    "code" : "INFO",
    "display" : "Info",
    "definition" : "Begäran genomfördes men med informationsmeddelande"
  },
  {
    "code" : "ERROR",
    "display" : "Fel",
    "definition" : "Begäran misslyckades med logiskt fel"
  }]
}

```
