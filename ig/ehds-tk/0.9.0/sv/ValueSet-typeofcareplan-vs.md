# TypeOfCarePlan — ValueSet - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## ValueSet: TypeOfCarePlan — ValueSet 

 **References** 

* [SE EHDS CarePlan – Vårdplan (GetCarePlans)](StructureDefinition-SEEHDSCarePlan.md)
* [GetCarePlans](StructureDefinition-SEEHDSLMCarePlans.md)

### Logisk definition (CLD)

 

### Expansion

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "typeofcareplan-vs",
  "url" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/typeofcareplan-vs",
  "version" : "0.9.0",
  "name" : "TypeOfCarePlanVS",
  "title" : "TypeOfCarePlan — ValueSet",
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
  "description" : "Tillåtna värden för typeOfCarePlanEnum i GetCarePlans enligt clinicalprocess:logistics:logistics.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://fhir.inera.se/CodeSystem/typeofcareplan-cs"
    }]
  }
}

```
