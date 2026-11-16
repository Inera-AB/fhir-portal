# RIV-TA PersonIdType (clinicalprocess:activityprescription:actoutcome:1) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA PersonIdType (clinicalprocess:activityprescription:actoutcome:1) 

**Användningar:**

* Använd denna Logisk modell: [GetVaccinationHistory 1.0](StructureDefinition-SEEHDSLMVaccinationHistoryV10.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **Differentialvy** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **ÖgonblicksbildsvyView** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1.csv), [Excel](../StructureDefinition-SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1",
  "version" : "0.9.0",
  "name" : "SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1",
  "title" : "RIV-TA PersonIdType (clinicalprocess:activityprescription:actoutcome:1)",
  "status" : "draft",
  "date" : "2026-11-16T16:17:59+00:00",
  "publisher" : "Inera AB",
  "contact" : [{
    "name" : "Inera AB",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.inera.se"
    }]
  }],
  "description" : "RIV-TA-datatypen PersonIdType i namnrymden urn:riv:clinicalprocess:activityprescription:actoutcome:1.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "kind" : "logical",
  "abstract" : false,
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1",
      "path" : "SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1",
      "short" : "RIV-TA PersonIdType (clinicalprocess:activityprescription:actoutcome:1)",
      "definition" : "RIV-TA-datatypen PersonIdType i namnrymden urn:riv:clinicalprocess:activityprescription:actoutcome:1."
    },
    {
      "id" : "SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1.rivId",
      "short" : "Personidentitet (12 tecken utan avskiljare)",
      "definition" : "Personidentitet (12 tecken utan avskiljare)",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1.type",
      "path" : "SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1.type",
      "short" : "OID för typ av personidentitet",
      "definition" : "OID för typ av personidentitet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
