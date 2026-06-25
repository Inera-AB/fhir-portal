# PrescriptionStatus - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.3.2

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **PrescriptionStatus**

## CodeSystem: PrescriptionStatus 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.inera.se/CodeSystem/prescriptionstatus | *Version*:0.3.2 |
| Active as of 2026-06-25 | *Computable Name*:PrescriptionStatusCS |

 
Kodverk för ordinationsstatus i GetMedicationHistory. Anger om en ordination är aktiv eller inaktiv. 

 This Code system is referenced in the content logical definition of the following value sets: 

* [PrescriptionStatusVS](ValueSet-prescriptionstatus-vs.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "prescriptionstatus-cs",
  "url" : "https://fhir.inera.se/CodeSystem/prescriptionstatus",
  "version" : "0.3.2",
  "name" : "PrescriptionStatusCS",
  "title" : "PrescriptionStatus",
  "status" : "active",
  "date" : "2026-06-25T06:57:15+00:00",
  "publisher" : "Inera AB",
  "contact" : [{
    "name" : "Inera AB",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.inera.se"
    }]
  }],
  "description" : "Kodverk för ordinationsstatus i GetMedicationHistory. Anger om en ordination är aktiv eller inaktiv.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "content" : "complete",
  "count" : 2,
  "concept" : [{
    "code" : "Active",
    "display" : "Aktiv",
    "definition" : "Aktiv ordination — den sista i sin ordinationskedja. Representerar gällande behandling."
  },
  {
    "code" : "Inactive",
    "display" : "Inaktiv",
    "definition" : "Inaktiv ordination — inte den sista i sin ordinationskedja. Historisk ordination."
  }]
}

```
