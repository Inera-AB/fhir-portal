# ErrorCode - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.3.2

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ErrorCode**

## CodeSystem: ErrorCode 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.inera.se/CodeSystem/errorcode-actoutcome | *Version*:0.3.2 |
| Active as of 2026-06-25 | *Computable Name*:ErrorCodeCS |

 
Kodverk för felkoder i svar från tjänstekontrakten i domänen clinicalprocess:activityprescription:actoutcome. 

 This Code system is referenced in the content logical definition of the following value sets: 

* [ErrorCodeVS](ValueSet-errorcode-vs.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "errorcode-cs",
  "url" : "https://fhir.inera.se/CodeSystem/errorcode-actoutcome",
  "version" : "0.3.2",
  "name" : "ErrorCodeCS",
  "title" : "ErrorCode",
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
  "description" : "Kodverk för felkoder i svar från tjänstekontrakten i domänen clinicalprocess:activityprescription:actoutcome.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "content" : "complete",
  "count" : 1,
  "concept" : [{
    "code" : "INVALID_REQUEST",
    "display" : "Ogiltig begäran",
    "definition" : "Begäran är felaktig eller saknar obligatoriska fält"
  }]
}

```
