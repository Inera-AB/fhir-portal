# SexCode - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: SexCode 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [SexCode — ValueSet](ValueSet-sexcode-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "sexcode-cs",
  "url" : "https://fhir.inera.se/CodeSystem/sexcode",
  "version" : "0.9.0",
  "name" : "SexCodeCS",
  "title" : "SexCode",
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
  "description" : "Kodverk för kön (SexCodeEnum). Används i GetMaternityMedicalHistory för barnets kön. OBS: Överväg att använda HL7 AdministrativeGender istället.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 4,
  "concept" : [{
    "code" : "0",
    "display" : "Okänt",
    "definition" : "Kön okänt"
  },
  {
    "code" : "1",
    "display" : "Man",
    "definition" : "Man"
  },
  {
    "code" : "2",
    "display" : "Kvinna",
    "definition" : "Kvinna"
  },
  {
    "code" : "9",
    "display" : "Ej tillämpligt",
    "definition" : "Kön ej tillämpligt"
  }]
}

```
