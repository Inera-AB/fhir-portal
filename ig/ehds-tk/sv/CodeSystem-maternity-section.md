# MaternityMedicalSection - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## CodeSystem: MaternityMedicalSection 

Detta kodsystem refereras i definitionen av följande värdemängder:

* Detta CodeSystem används inte här; det kan användas på andra ställen (t.ex. specifikationer och/eller implementationer som använder detta innehåll)

-------

 [Beskrivning av ovanstående tabell(er)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "maternity-section",
  "url" : "https://fhir.inera.se/ig/ehds-tk/CodeSystem/maternity-section",
  "version" : "0.9.0",
  "name" : "MaternityMedicalSectionCS",
  "title" : "MaternityMedicalSection",
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
  "description" : "Diskriminatorkoder för de tre sektionerna i mödravårdsjournalen (GetMaternityMedicalHistory v2.0). Varje Observation-resurs som skapas ur ett maternityMedicalRecord sätter Observation.code till en av dessa koder.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 3,
  "concept" : [{
    "code" : "registration",
    "display" : "Inskrivning mödravård",
    "definition" : "Inskrivningsuppgifter (maternityMedicalRecordBody.registrationRecord)"
  },
  {
    "code" : "checkup",
    "display" : "Graviditetskontroll",
    "definition" : "Graviditetskontrolldata (maternityMedicalRecordBody.pregnancyCheckupRecord)"
  },
  {
    "code" : "post-delivery",
    "display" : "Eftervård",
    "definition" : "Eftervårdsdata (maternityMedicalRecordBody.postDeliveryRecord)"
  }]
}

```
