# ErrorCode - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: ErrorCode 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [ErrorCode — ValueSet](ValueSet-errorcode-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "errorcode-cs",
  "url" : "https://fhir.inera.se/CodeSystem/errorcode-actoutcome",
  "version" : "0.9.0",
  "name" : "ErrorCodeCS",
  "title" : "ErrorCode",
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
  "description" : "Kodverk för felkoder i svar från tjänstekontrakten i domänen clinicalprocess:activityprescription:actoutcome.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 1,
  "concept" : [{
    "code" : "INVALID_REQUEST",
    "display" : "Ogiltig begäran",
    "definition" : "Begäran är felaktig eller saknar obligatoriska fält"
  }]
}

```
