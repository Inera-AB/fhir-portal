# RIV-TA IIType (clinicalprocess:activityprescription:actoutcome:2) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA IIType (clinicalprocess:activityprescription:actoutcome:2) 

**Användningar:**

* Använd denna Logisk modell: [GetMedicationHistory](StructureDefinition-SEEHDSLMMedicationHistory.md) and [GetVaccinationHistory](StructureDefinition-SEEHDSLMVaccinationHistory.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivIITypeActivityprescriptionActoutcome2.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivIITypeActivityprescriptionActoutcome2.csv), [Excel](../StructureDefinition-SEEHDSRivIITypeActivityprescriptionActoutcome2.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivIITypeActivityprescriptionActoutcome2",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2",
  "version" : "0.9.0",
  "name" : "SEEHDSRivIITypeActivityprescriptionActoutcome2",
  "title" : "RIV-TA IIType (clinicalprocess:activityprescription:actoutcome:2)",
  "status" : "draft",
  "date" : "2026-11-16T16:15:01+00:00",
  "publisher" : "Inera AB",
  "contact" : [{
    "name" : "Inera AB",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.inera.se"
    }]
  }],
  "description" : "RIV-TA-datatypen IIType i namnrymden urn:riv:clinicalprocess:activityprescription:actoutcome:2.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivIITypeActivityprescriptionActoutcome2",
      "path" : "SEEHDSRivIITypeActivityprescriptionActoutcome2",
      "short" : "RIV-TA IIType (clinicalprocess:activityprescription:actoutcome:2)",
      "definition" : "RIV-TA-datatypen IIType i namnrymden urn:riv:clinicalprocess:activityprescription:actoutcome:2."
    },
    {
      "id" : "SEEHDSRivIITypeActivityprescriptionActoutcome2.root",
      "path" : "SEEHDSRivIITypeActivityprescriptionActoutcome2.root",
      "short" : "OID eller UUID för identifierarens namnrymd",
      "definition" : "OID eller UUID för identifierarens namnrymd",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSRivIITypeActivityprescriptionActoutcome2.rivExtension",
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "extension"
      }],
      "path" : "SEEHDSRivIITypeActivityprescriptionActoutcome2.rivExtension",
      "short" : "Identifierarens värde inom namnrymden",
      "definition" : "Identifierarens värde inom namnrymden",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
