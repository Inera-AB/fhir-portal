# ExaminationStatusCode — ValueSet - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## ValueSet: ExaminationStatusCode — ValueSet 

 **References** 

Denna värdemängd används inte här; den kan användas på andra ställen (t.ex. specifikationer och/eller implementationer som använder detta innehåll)

### Logisk definition (CLD)

 

### Expansion

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "examinationstatuscode-vs",
  "url" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/examinationstatuscode-vs",
  "version" : "0.9.0",
  "name" : "ExaminationStatusCodeVS",
  "title" : "ExaminationStatusCode — ValueSet",
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
  "description" : "Tillåtna värden för examinationStatus i GetImagingOutcome.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://fhir.inera.se/CodeSystem/examinationstatuscode"
    }]
  }
}

```
