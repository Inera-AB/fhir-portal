# KV Anteckningstyp — ValueSet - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## ValueSet: KV Anteckningstyp — ValueSet 

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
  "id" : "clinicaldocumentnotecode-vs",
  "url" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/clinicaldocumentnotecode-vs",
  "version" : "0.9.0",
  "name" : "ClinicalDocumentNoteCodeVS",
  "title" : "KV Anteckningstyp — ValueSet",
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
  "description" : "Tillåtna värden för fältet clinicalDocumentNoteCode i GetCareDocumentation enligt KV Anteckningstyp (OID: 1.2.752.129.2.2.2.11).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "urn:oid:1.2.752.129.2.2.2.11"
    }]
  }
}

```
