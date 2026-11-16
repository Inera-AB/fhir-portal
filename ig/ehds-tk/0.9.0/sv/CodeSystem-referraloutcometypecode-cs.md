# ReferralOutcomeTypeCode - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: ReferralOutcomeTypeCode 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [ReferralOutcomeTypeCode — ValueSet](ValueSet-referraloutcometypecode-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "referraloutcometypecode-cs",
  "url" : "https://fhir.inera.se/CodeSystem/referraloutcometypecode",
  "version" : "0.9.0",
  "name" : "ReferralOutcomeTypeCodeCS",
  "title" : "ReferralOutcomeTypeCode",
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
  "description" : "Kodverk för typ av remissvar (ReferralOutcomeTypeCodeEnum). Används i GetReferralOutcome.",
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
    "code" : "SS",
    "display" : "Slutsvar på remissfråga",
    "definition" : "Slutsvar på remissfråga"
  },
  {
    "code" : "SR",
    "display" : "Svar på remissfråga",
    "definition" : "Svar på remissfråga"
  }]
}

```
