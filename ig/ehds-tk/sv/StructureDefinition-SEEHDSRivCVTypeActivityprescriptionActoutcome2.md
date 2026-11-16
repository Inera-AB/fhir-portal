# RIV-TA CVType (clinicalprocess:activityprescription:actoutcome:2) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA CVType (clinicalprocess:activityprescription:actoutcome:2) 

**Användningar:**

* Använd denna Logisk modell: [GetMedicationHistory](StructureDefinition-SEEHDSLMMedicationHistory.md) and [GetVaccinationHistory](StructureDefinition-SEEHDSLMVaccinationHistory.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivCVTypeActivityprescriptionActoutcome2.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivCVTypeActivityprescriptionActoutcome2.csv), [Excel](../StructureDefinition-SEEHDSRivCVTypeActivityprescriptionActoutcome2.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2",
  "version" : "0.9.0",
  "name" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2",
  "title" : "RIV-TA CVType (clinicalprocess:activityprescription:actoutcome:2)",
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
  "description" : "RIV-TA-datatypen CVType i namnrymden urn:riv:clinicalprocess:activityprescription:actoutcome:2.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2",
      "path" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2",
      "short" : "RIV-TA CVType (clinicalprocess:activityprescription:actoutcome:2)",
      "definition" : "RIV-TA-datatypen CVType i namnrymden urn:riv:clinicalprocess:activityprescription:actoutcome:2."
    },
    {
      "id" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.code",
      "path" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.code",
      "short" : "Kod",
      "definition" : "Kod",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.codeSystem",
      "path" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.codeSystem",
      "short" : "OID för kodsystem",
      "definition" : "OID för kodsystem",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.codeSystemName",
      "path" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.codeSystemName",
      "short" : "Kodsystemets namn",
      "definition" : "Kodsystemets namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.codeSystemVersion",
      "path" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.codeSystemVersion",
      "short" : "Kodsystemets version",
      "definition" : "Kodsystemets version",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.displayName",
      "path" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.displayName",
      "short" : "Kodens klartext",
      "definition" : "Kodens klartext",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.originalText",
      "path" : "SEEHDSRivCVTypeActivityprescriptionActoutcome2.originalText",
      "short" : "Originaltext (om kod saknas eller som komplement)",
      "definition" : "Originaltext (om kod saknas eller som komplement)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
