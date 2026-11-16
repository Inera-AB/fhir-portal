# AssessmentCategory - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: AssessmentCategory 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [AssessmentCategory — ValueSet](ValueSet-assessmentcategory-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "assessmentcategory-cs",
  "url" : "https://fhir.inera.se/clinicalprocess-healthcond-description/CodeSystem/assessmentcategory-cs",
  "version" : "0.9.0",
  "name" : "AssessmentCategoryCS",
  "title" : "AssessmentCategory",
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
  "description" : "Bedömningskategori för funktionsstatus. Tillåtna värden är 'pad-pad' (PADL-bedömning) och 'fun-fun' (funktionsnedsättningsbedömning). Definierat i enum XSD v2.1 för domänen.",
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
    "code" : "pad-pad",
    "display" : "pad-pad",
    "definition" : "PADL-bedömning"
  },
  {
    "code" : "fun-fun",
    "display" : "fun-fun",
    "definition" : "Funktionsnedsättningsbedömning"
  }]
}

```
