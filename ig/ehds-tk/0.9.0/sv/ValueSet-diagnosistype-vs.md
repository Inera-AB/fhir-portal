# DiagnosisType — ValueSet - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## ValueSet: DiagnosisType — ValueSet 

 **References** 

* [SE EHDS Condition – Diagnos (GetDiagnosis)](StructureDefinition-SEEHDSConditionDiagnosis.md)
* [GetDiagnosis](StructureDefinition-SEEHDSLMDiagnosis.md)

### Logisk definition (CLD)

 

### Expansion

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "diagnosistype-vs",
  "url" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/diagnosistype-vs",
  "version" : "0.9.0",
  "name" : "DiagnosisTypeVS",
  "title" : "DiagnosisType — ValueSet",
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
  "description" : "Tillåtna värden för fältet typeOfDiagnosis i GetDiagnosis: HD (huvuddiagnos) och BY (bidiagnos) från kv_diagnostyp.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://terminologitjansten.inera.se/inera-kodverksforvaltning/kodverk/kv_diagnostyp"
    }]
  }
}

```
