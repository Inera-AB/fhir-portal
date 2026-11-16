# TypeOfCarePlan - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: TypeOfCarePlan 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [TypeOfCarePlan — ValueSet](ValueSet-typeofcareplan-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "typeofcareplan-cs",
  "url" : "https://fhir.inera.se/CodeSystem/typeofcareplan-cs",
  "version" : "0.9.0",
  "name" : "TypeOfCarePlanCS",
  "title" : "TypeOfCarePlan",
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
  "description" : "Typ av vård- och omsorgsplan enligt clinicalprocess:logistics:logistics v3.0. Definierad i clinicalprocess_logistics_logistics_enum_3.0.xsd.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 8,
  "concept" : [{
    "code" : "SIP",
    "display" : "SIP",
    "definition" : "Samordnad individuell plan"
  },
  {
    "code" : "SPLPTLRV",
    "display" : "SPLPTLRV",
    "definition" : "Samordnad plan enligt LPT och LRV"
  },
  {
    "code" : "SPU",
    "display" : "SPU",
    "definition" : "Samordnad plan vid utskrivning"
  },
  {
    "code" : "VP",
    "display" : "VP",
    "definition" : "Vårdplan"
  },
  {
    "code" : "HP",
    "display" : "HP",
    "definition" : "Habiliteringsplan"
  },
  {
    "code" : "RP",
    "display" : "RP",
    "definition" : "Rehabiliteringsplan"
  },
  {
    "code" : "GP",
    "display" : "GP",
    "definition" : "Genomförandeplan"
  },
  {
    "code" : "SVP",
    "display" : "SVP",
    "definition" : "Standardiserad vårdplan"
  }]
}

```
