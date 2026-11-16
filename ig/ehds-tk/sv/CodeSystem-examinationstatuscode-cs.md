# ExaminationStatusCode - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: ExaminationStatusCode 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [ExaminationStatusCode — ValueSet](ValueSet-examinationstatuscode-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "examinationstatuscode-cs",
  "url" : "https://fhir.inera.se/CodeSystem/examinationstatuscode",
  "version" : "0.9.0",
  "name" : "ExaminationStatusCodeCS",
  "title" : "ExaminationStatusCode",
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
  "description" : "Kodverk för undersökningsstatus (ExaminationStatusCodeEnum). Används i GetImagingOutcome.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 11,
  "concept" : [{
    "code" : "Initierad",
    "display" : "Initierad",
    "definition" : "Undersökning initierad"
  },
  {
    "code" : "Planerad",
    "display" : "Planerad (bevakad)",
    "definition" : "Undersökning planerad"
  },
  {
    "code" : "Tidbokad",
    "display" : "Tidbokad",
    "definition" : "Undersökning tidbokad"
  },
  {
    "code" : "Uppskjuten",
    "display" : "Uppskjuten",
    "definition" : "Undersökning uppskjuten"
  },
  {
    "code" : "Annullerad",
    "display" : "Annullerad",
    "definition" : "Undersökning annullerad"
  },
  {
    "code" : "Pagaende",
    "display" : "Pågående",
    "definition" : "Undersökning pågående"
  },
  {
    "code" : "Avvakta",
    "display" : "Avvakta",
    "definition" : "Undersökning avvakta"
  },
  {
    "code" : "Avbruten",
    "display" : "Avbruten",
    "definition" : "Undersökning avbruten"
  },
  {
    "code" : "Avklarad",
    "display" : "Avklarad",
    "definition" : "Undersökning avklarad"
  },
  {
    "code" : "Inaktuell",
    "display" : "Inaktuell",
    "definition" : "Undersökning inaktuell"
  },
  {
    "code" : "Makulerad",
    "display" : "Makulerad",
    "definition" : "Undersökning makulerad"
  }]
}

```
