# KV Anteckningstyp - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: KV Anteckningstyp 

Detta kodsystem refereras i definitionen av följande värdemängder:

* [KV Anteckningstyp — ValueSet](ValueSet-clinicaldocumentnotecode-vs.md)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "clinicaldocumentnotecode-cs",
  "url" : "urn:oid:1.2.752.129.2.2.2.11",
  "version" : "0.9.0",
  "name" : "ClinicalDocumentNoteCodeCS",
  "title" : "KV Anteckningstyp",
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
  "description" : "Kodverk för typ av journalanteckning enligt KV Anteckningstyp. OID: 1.2.752.129.2.2.2.11.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 9,
  "concept" : [{
    "code" : "utr",
    "display" : "utr",
    "definition" : "Utredning"
  },
  {
    "code" : "atb",
    "display" : "atb",
    "definition" : "Åtgärd/Behandling"
  },
  {
    "code" : "sam",
    "display" : "sam",
    "definition" : "Sammanfattning"
  },
  {
    "code" : "sao",
    "display" : "sao",
    "definition" : "Samordning"
  },
  {
    "code" : "ins",
    "display" : "ins",
    "definition" : "Inskrivning"
  },
  {
    "code" : "slu",
    "display" : "slu",
    "definition" : "Slutanteckning"
  },
  {
    "code" : "auf",
    "display" : "auf",
    "definition" : "Anteckning utan fysiskt möte"
  },
  {
    "code" : "sva",
    "display" : "sva",
    "definition" : "Slutenvårdsanteckning"
  },
  {
    "code" : "bes",
    "display" : "bes",
    "definition" : "Besöksanteckning"
  }]
}

```
