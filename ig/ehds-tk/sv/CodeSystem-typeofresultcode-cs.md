# TypeOfResultCode - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: TypeOfResultCode 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [TypeOfResultCode — ValueSet](ValueSet-typeofresultcode-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "typeofresultcode-cs",
  "url" : "https://fhir.inera.se/CodeSystem/typeofresultcode",
  "version" : "0.9.0",
  "name" : "TypeOfResultCodeCS",
  "title" : "TypeOfResultCode",
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
  "description" : "Kodverk för typ av resultat (TypeOfResultCodeEnum). Används i GetImagingOutcome och GetReferralOutcome.",
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
    "code" : "PREL",
    "display" : "Preliminärsvar",
    "definition" : "Preliminärt svar"
  },
  {
    "code" : "DEF",
    "display" : "Definitivsvar",
    "definition" : "Definitivt svar"
  },
  {
    "code" : "TILL",
    "display" : "Tilläggssvar",
    "definition" : "Tilläggssvar"
  }]
}

```
