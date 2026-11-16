# GetObservations - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetObservations 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMObservations.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Begränsningar

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **Differentialvy** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Begränsningar

 **ÖgonblicksbildsvyView** 

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMObservations.csv), [Excel](../StructureDefinition-SEEHDSLMObservations.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMObservations",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetObservationsResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:GetObservationsResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservations",
  "version" : "0.9.0",
  "name" : "SEEHDSLMObservations",
  "title" : "GetObservations",
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
  "description" : "Logisk modell för tjänstekontraktet GetObservations\n(RIV-TA urn:riv:clinicalprocess:healthcond:basic:GetObservationsInteraction:2).\nRepresenterar responsens informationsstruktur — en samling observationer som\nmatchar sökkriterier i begäran, inklusive header-information.\nMeddelandemodellen från avsnitt 5.1 V-MIM — Observationer i TKB motsvarar\nen observation i svarsmeddelandet.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservations",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMObservations",
      "path" : "SEEHDSLMObservations",
      "short" : "GetObservations",
      "definition" : "Logisk modell för tjänstekontraktet GetObservations\n(RIV-TA urn:riv:clinicalprocess:healthcond:basic:GetObservationsInteraction:2).\nRepresenterar responsens informationsstruktur — en samling observationer som\nmatchar sökkriterier i begäran, inklusive header-information.\nMeddelandemodellen från avsnitt 5.1 V-MIM — Observationer i TKB motsvarar\nen observation i svarsmeddelandet."
    },
    {
      "id" : "SEEHDSLMObservations.observations",
      "path" : "SEEHDSLMObservations.observations",
      "short" : "De observationer som matchar sökkriterierna, inklusive header.",
      "definition" : "De observationer som matchar sökkriterier i begäran, inklusive header-information.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header",
      "path" : "SEEHDSLMObservations.observations.header",
      "short" : "Header enligt RIV-TA standard.",
      "definition" : "Se separat dokument med fältregler för header [R10].",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.accessControlHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.accessControlHeader",
      "short" : "accessControlHeader",
      "definition" : "accessControlHeader",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.accessControlHeader.accountableCareGiver",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.accessControlHeader.accountableCareGiver",
      "short" : "accountableCareGiver",
      "definition" : "accountableCareGiver",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.accessControlHeader.accountableCareUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.accessControlHeader.accountableCareUnit",
      "short" : "accountableCareUnit",
      "definition" : "accountableCareUnit",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.accessControlHeader.patient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.accessControlHeader.patient",
      "short" : "patient",
      "definition" : "patient",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.accessControlHeader.patient.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.accessControlHeader.patient.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 1,
      "max" : "2",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.accessControlHeader.careProcessId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.accessControlHeader.careProcessId",
      "short" : "careProcessId",
      "definition" : "careProcessId",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.accessControlHeader.lockTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.accessControlHeader.lockTime",
      "short" : "lockTime",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.accessControlHeader.blockComparisonTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.accessControlHeader.blockComparisonTime",
      "short" : "blockComparisonTime",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.accessControlHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.accessControlHeader.approvedForPatient",
      "short" : "approvedForPatient",
      "definition" : "approvedForPatient",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.source",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.source",
      "short" : "source",
      "definition" : "source",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.source.systemId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.source.systemId",
      "short" : "systemId",
      "definition" : "systemId",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.record",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.record",
      "short" : "record",
      "definition" : "record",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.record.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.record.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.record.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.record.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.record.title",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.record.title",
      "short" : "title",
      "definition" : "title",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.record.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.record.careContactId",
      "short" : "careContactId",
      "definition" : "careContactId",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.origin",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.origin",
      "short" : "origin",
      "definition" : "origin",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.origin.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.origin.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.origin.by",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.origin.by",
      "short" : "by",
      "definition" : "by",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.origin.by.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.origin.by.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: HCPROFESSIONAL, PATIENT, PROXY, DEVICE.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.origin.by.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.origin.by.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.origin.by.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.origin.by.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.origin.by.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.origin.by.orgUnit",
      "short" : "orgUnit",
      "definition" : "orgUnit",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.origin.by.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.origin.by.orgUnit.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.origin.by.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.origin.by.orgUnit.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.origin.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.origin.byRole",
      "short" : "byRole",
      "definition" : "byRole",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.originalAuthor",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.originalAuthor",
      "short" : "originalAuthor",
      "definition" : "originalAuthor",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.originalAuthor.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.originalAuthor.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.originalAuthor.by",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.originalAuthor.by",
      "short" : "by",
      "definition" : "by",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.originalAuthor.by.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.originalAuthor.by.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: HCPROFESSIONAL, PATIENT, PROXY, DEVICE.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.originalAuthor.by.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.originalAuthor.by.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.originalAuthor.by.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.originalAuthor.by.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.originalAuthor.by.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.originalAuthor.by.orgUnit",
      "short" : "orgUnit",
      "definition" : "orgUnit",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.originalAuthor.by.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.originalAuthor.by.orgUnit.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.originalAuthor.by.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.originalAuthor.by.orgUnit.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.originalAuthor.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.originalAuthor.byRole",
      "short" : "byRole",
      "definition" : "byRole",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.modified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.modified",
      "short" : "modified",
      "definition" : "modified",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.modified.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.modified.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.modified.by",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.modified.by",
      "short" : "by",
      "definition" : "by",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.modified.by.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.modified.by.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: HCPROFESSIONAL, PATIENT, PROXY, DEVICE.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.modified.by.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.modified.by.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.modified.by.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.modified.by.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.modified.by.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.modified.by.orgUnit",
      "short" : "orgUnit",
      "definition" : "orgUnit",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.modified.by.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.modified.by.orgUnit.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.modified.by.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.modified.by.orgUnit.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.modified.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.modified.byRole",
      "short" : "byRole",
      "definition" : "byRole",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.signature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.signature",
      "short" : "signature",
      "definition" : "signature",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.signature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.signature.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.signature.by",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.signature.by",
      "short" : "by",
      "definition" : "by",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.signature.by.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.signature.by.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: HCPROFESSIONAL, PATIENT, PROXY, DEVICE.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.signature.by.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.signature.by.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.signature.by.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.signature.by.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.signature.by.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.signature.by.orgUnit",
      "short" : "orgUnit",
      "definition" : "orgUnit",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.signature.by.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.signature.by.orgUnit.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.signature.by.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.signature.by.orgUnit.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.signature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.signature.byRole",
      "short" : "byRole",
      "definition" : "byRole",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation",
      "short" : "cancellation",
      "definition" : "cancellation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation.by",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation.by",
      "short" : "by",
      "definition" : "by",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation.by.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation.by.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: HCPROFESSIONAL, PATIENT, PROXY, DEVICE.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation.by.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation.by.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation.by.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation.by.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation.by.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation.by.orgUnit",
      "short" : "orgUnit",
      "definition" : "orgUnit",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation.by.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation.by.orgUnit.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation.by.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation.by.orgUnit.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation.byRole",
      "short" : "byRole",
      "definition" : "byRole",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.header.cancellation.reason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.header.cancellation.reason",
      "short" : "reason",
      "definition" : "reason",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody",
      "path" : "SEEHDSLMObservations.observations.observationBody",
      "short" : "Information om en observation (ObservationType).",
      "definition" : "Motsvarar klasserna Observation och Uppgift i patientjournal i NI 2017.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.rivId",
      "short" : "Identitet för observationen",
      "definition" : "Identitet för observationen. Identiteten ska garanterat vara unik inom vårdgivaren.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.registrationTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.registrationTime",
      "short" : "Dokumentationstidpunkt — när uppgiften registrerades i journalen.",
      "definition" : "Kan skilja sig från signeringstidpunkt (som återfinns i header).\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.type",
      "short" : "NI 2017 (Observation.typ)",
      "definition" : "Kod för den typ av observation som avses i de fall detta inte framgår av attributet värde. Ett exempel på typ är \"längd mätt utan skor\" där attributet värde håller information om resultatet av mätningen, exempelvis 174 cm. Ett annat exempel är typen ”huvuddiagnos” där attributet värde håller information om den specifika diagnosen, exempelvis ”hypertoni” eller diagnoskoden.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.value",
      "short" : "NI 2017 (Observation.värde)",
      "definition" : "Angivelse av värde som alltid representerar det faktiska observerade hälsotillståndet. Exempelvis så skulle observationens typ [type] kunna motsvara \"huvuddiagnos”, vilket innebär att attributet värde håller den huvudsakliga diagnosen. Ett annat exempel är \"längd mätt utan skor\" och då innehåller attributet värde resultatet av mätningen, exempelvis 158 cm. Om observationen avser ett måltillstånd motsvarar attributet värde det resultat man önskar uppnå för att målet ska uppfyllas. Notera att även observationer vars representation dokumenteras som fritext använder attributet värde. Se ValueANYType i avsnitt 6.1.2.2.16.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getobservations-value-choice",
        "severity" : "error",
        "human" : "En och endast en av cv, pq, ivl_pq, ts, ivl_ts, st och int ska anges",
        "expression" : "cv.combine(pq).combine(ivlPq).combine(ts).combine(ivlTs).combine(st).combine(int).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservations"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.value.cv",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.value.cv",
      "short" : "Kodat värde",
      "definition" : "Kodat värde. I fallet med observationer kan det exempelvis vara en diagnoskod enligt ICD-10 eller ett kliniskt fynd enligt Snomed CT.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.value.pq",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.value.pq",
      "short" : "Värde som är resultatet av att någontings fysiskt uppmätts eller räknats, exempelvis 187 cm, 8 tabletter …",
      "definition" : "Värde som är resultatet av att någontings fysiskt uppmätts eller räknats, exempelvis 187 cm, 8 tabletter eller 37,8 °C.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.value.ivlPq",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ivl_pq"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.value.ivlPq",
      "short" : "Intervall av värden som är resultatet av att någontings fysiskt uppmätts eller räknats, exempelvis 187-190 …",
      "definition" : "Intervall av värden som är resultatet av att någontings fysiskt uppmätts eller räknats, exempelvis 187-190 cm, 8-10 tabletter eller 37,1-37,8 °C.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.value.ts",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.value.ts",
      "short" : "Tidpunkt där precisionen kan varieras utifrån behov",
      "definition" : "Tidpunkt där precisionen kan varieras utifrån behov. Notera att det föredragna sättet att ange tiden för en observation vanligtvis är att i attributet värde (observations/observationBody/value) ange vad som observerats och i attributet tid (observations/observationBody/time) ange när.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.value.ivlTs",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ivl_ts"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.value.ivlTs",
      "short" : "Tidsintervall där precisionen kan varieras utifrån behov",
      "definition" : "Tidsintervall där precisionen kan varieras utifrån behov. Tidpunkt där precisionen kan varieras utifrån behov. Notera att det föredragna sättet att ange tiden för en observation vanligtvis är att i attributet värde (observations/observationBody/value) ange vad som observerats och i attributet tid (observations/observationBody/time) ange när.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.value.ivlTs.start",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.value.ivlTs.start",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.value.ivlTs.end",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.value.ivlTs.end",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.value.st",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.value.st",
      "short" : "Textuell beskrivning",
      "definition" : "Textuell beskrivning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.value.int",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.value.int",
      "short" : "Heltal",
      "definition" : "Heltal. Ska användas då något klassificerats numeriskt på en skattningsskala, exempelvis 1 poäng på Apgarskalan för Grimaser, reflex, retbarhet. Denna typ ska inte användas för numeriska värden som är ett resultat av att någonting fysiskt uppmätts eller räknats (exempelvis antal tabletter). Fysiskt uppmätta eller räknade värden ska istället dokumenteras med typen pq.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.scale",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.scale",
      "short" : "NI 2017 (Observation.skala) — den mätskala som värdet är uppmätt på.",
      "definition" : "Två huvudtyper: nominalskala (kategorisk) och ordinalskala (rangordnad).\nExempel: AUDIT-skalan (0-40 poäng) eller AB0-blodgruppsystemet.\nCVType-regler (TKB): displayName är 1..1 (obligatorisk om fältet anges).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.status",
      "short" : "NI 2017 (Observation.status)Kod för observationens status, exempelvis för att dokumentera om det tillstånd …",
      "definition" : "NI 2017 (Observation.status)Kod för observationens status, exempelvis för att dokumentera om det tillstånd som beskrivs har funnits eller är ett potentiellt tillstånd. En instans av klassen observation kan inte byta status. Om man exempelvis vill dokumentera ett måltillstånd som senare uppfylls så dokumenteras detta som två instanser av klassen observation, en med status måltillstånd och en med status observerat. Koder för status för observation tillhandahålls av Socialstyrelsen som ett urval ur Snomed CT samt som bilaga till NI 2017 [R5]. Snomed CT urvals-id är 56431000052106. Vilka koder som ingår i urvalet söks fram i IHTSDO SNOMED CT Browser [R7]. Om koder utanför urvalet behöver användas ska detta göras i samråd med Socialstyrelsen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.targetSite",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.targetSite",
      "short" : "NI 2017 (Observation.lokalisation) — lokalisation för observationen.",
      "definition" : "Används för att beskriva vad observationen avser gällande anatomi, funktion eller system.\nKan beskriva lateralitet, organs position, orientering i relation till kroppen etc.\nAnvänds endast om value inte innefattar tillräcklig information om lokalisation.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.description",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.description",
      "short" : "NI 2017 (Observation.beskrivning) — textuell beskrivning som komplement till value.",
      "definition" : "Används som komplement till value i de fall ytterligare textuell beskrivning krävs.\nOBS: Om observationen ENDAST består av fritext ska denna anges i value/st.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.time",
      "short" : "NI 2017 (Observation.tid) — tidpunkt eller tidsintervall för observationen (TimeType).",
      "definition" : "Angivelse av den tid då det som observerats faktiskt förekom eller förväntas förekomma.\nSkiljer sig från registrationTime (dokumentationstidpunkt).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getobservations-time-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av ts och ivl_ts ska anges",
        "expression" : "ts.exists() xor ivlTs.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservations"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.time.ts",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.time.ts",
      "short" : "Tidpunkt med variabel precision.",
      "definition" : "Format: YYYY | YYYYMM | YYYYMMDD | YYYYMMDDhh | YYYYMMDDhhmm | YYYYMMDDhhmmss.\nSe OBS-001 (beslutad mappning i FHIR).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.time.ivlTs",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ivl_ts"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.time.ivlTs",
      "short" : "Tidsintervall med variabel precision (RIV-TA: ivl_ts).",
      "definition" : "Villkor: Minst ett av start och end måste anges per TKB.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.time.ivlTs.start",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.time.ivlTs.start",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.time.ivlTs.end",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.time.ivlTs.end",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.valueNegation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.valueNegation",
      "short" : "NI 2017 (Observation.negation) — negerar betydelsen av value.",
      "definition" : "Normalvärde: false (positiv utsaga).\ntrue = man har letat efter ett visst tillstånd och konstaterat att det inte föreligger.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient",
      "short" : "Den patient som observationen avser (PatientInformationType).",
      "definition" : "Motsvarar klassen Patient i NI 2017. Se PatientInformationType.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getobservations-patient-id-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av id och person.id ska anges",
        "expression" : "rivId.combine(person.rivId).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservations"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.rivId",
      "short" : "NI 2017 (Patient.id)",
      "definition" : "Angivelse av identitetsbeteckning för patientrollen. Denna identitet används då patienten inte kan eller bör identifieras med ett person-id (personnummer eller samordningsnummer). Identitetsbeteckningen på patient är vanligtvis ett reservnummer. En person kan ha flera instanser av klassen patient och dessa kan ha olika id. Observera att det är obligatoriskt att ange antingen person-id på person eller id på patient. Nationell reservidentitet är den enda typ av reservnummer som tillåts i denna tjänst. Denna ska anges med 12 tecken utan avskiljare. Se [R9] för mer information om nationell reservidentitet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person",
      "short" : "Uppgifter om den person som har rollen som patient (PersonType).",
      "definition" : "Se övrig regel 3 (avsnitt 6.1.3.3). Inkluderar id, givenName, surname, gender,\ndateOfBirth, confidentialityIndicator m.m.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.rivId",
      "short" : "Id för personen i form av personnummer eller samordningsnummer",
      "definition" : "Id för personen i form av personnummer eller samordningsnummer. Skall anges med 12 tecken utan avskiljare.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.givenName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.givenName",
      "short" : "NI 2017 (Person.förnamn).",
      "definition" : "NI 2017 (Person.förnamn) Angivelse av förnamn, som är en persons givna namn och inkluderar tilltalsnamn.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.middleSurname",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.middleSurname",
      "short" : "NI 2017 (Person.mellannamn).",
      "definition" : "NI 2017 (Person.mellannamn) Angivelse av mellannamn, som är ett namn som kan bäras för att visa gemenskap med en förälder eller en make som bär detta namn som efternamn. Man kan också bära ett eget tidigare efternamn som mellannamn om man bytt till makes eller registrerade partners efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.surname",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.surname",
      "short" : "NI 2017 (Person.efternamn).",
      "definition" : "NI 2017 (Person.efternamn) Angivelse av efternamn, som är en persons familjenamn eller släktnamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.givenNameMarker",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.givenNameMarker",
      "short" : "NI 2017 (Person.tilltalsnamnsmarkering). Giltiga värden: 10-99.",
      "definition" : "NI 2017 (Person.tilltalsnamnsmarkering) Angivelse av tilltalsnamnsmarkering, som används för att markera vilket av de angivna förnamnen som är personens tilltalsnamn. Giltiga värden är 10-99 där den första siffran anger vilket av de angivna förnamnen som är tilltalsnamnet (1 motsvarar första namnet osv.) och den andra siffran anger det eventuella andra tilltalsnamnet om dubbelnamn är aktuellt. Om inte är den andra siffran 0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.gender",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.gender",
      "short" : "NI 2017 (Person.kön). KV Kön OID: 1.2.752.129.2.2.1.1.",
      "definition" : "Koder: 0=okänt, 1=man, 2=kvinna, 9=ej tillämpligt.\nCVType-begränsning: originalText är förbjudet (0..0) för könsfältet per TKB.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.dateOfBirth",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.dateOfBirth",
      "short" : "NI 2017 (Person.födelsedatum). Format ÅÅÅÅMMDD.",
      "definition" : "NI 2017 (Person.födelsedatum) Angivelse av vilket datum personen är född. Ett datum på formatet ÅÅÅÅMMDD. Observera att det är födelsedatumet och inte personnumret.\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.confidentialityIndicator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.confidentialityIndicator",
      "short" : "NI 2017 (Person.sekretessmarkering). Defaultvärde: false.",
      "definition" : "NI 2017 (Person.sekretessmarkering) Angivelse av sekretessmarkering enligt Skatteverket. Defaultvärde är ”false”. Defaultvärdet ska automatiskt användas om inget annat värde anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.maritalStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.maritalStatus",
      "short" : "NI 2017 (Person.civilstånd).",
      "definition" : "NI 2017 (Person.civilstånd) Angivelse av personens civilstånd.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.address",
      "short" : "NI 2017 (Person.adress). Se AddressType.",
      "definition" : "NI 2017 (Person.adress) Angivelse av adressinformation för fysisk plats för en person, exempelvis bostadsadress eller tillfällig adress. Se AddressType i avsnitt 6.1.2.2.14.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.address.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.address.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.address.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.address.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.electronicAddress",
      "short" : "NI 2017 (Person.elektroniskAdress). Se TelType.",
      "definition" : "NI 2017 (Person.elektroniskAdress) Angivelse av elektronisk adressinformation som en person har. Här avses även telefonnummer. Exempel är telefonnummer eller e-postadress. Se TelType i avsnitt 6.1.2.2.15.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.electronicAddress.value",
      "short" : "Elektronisk adress, t.ex.",
      "definition" : "Elektronisk adress, t.ex. e-mail eller telefonnummer. Anges i form av en URI inklusive prefix som anger protokoll. Telefonnummer anges med prefixet ”tel:”, e-mailadresser med ”mailto:” och webbsidor med ”http:” eller ”https:”. Exempel: value=”tel:+46702353535” value=”mailto:lars@gmail.com” value=”http://www.1177.se”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.electronicAddress.capabilities",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.electronicAddress.capabilities",
      "short" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS",
      "definition" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS. Möjliga värden: voice = Numret kan ta emot röstsamtal fax = Numret kan ta emot fax sms = Numret kan ta emot SMS\nTillåtna värden enligt XSD: voice, fax, sms.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.person.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.person.electronicAddress.use",
      "short" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod. Möjliga värden: H = Används i hemmet/privat HV = Används under semester WP = Används på arbetet/i tjänsten TMP = Används tillfälligt\nTillåtna värden enligt XSD: H, HV, WP, TMP.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.address",
      "short" : "NI 2017 (Patient.adress). Särskild kallelseadress etc. Se AddressType.",
      "definition" : "NI 2017 (Patient.adress) Angivelse av adressinformation för fysisk plats som en person har i sin roll som patient, exempelvis särskild kallelseadress. Se AddressType i avsnitt 6.1.2.2.14.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.address.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.address.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.address.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.address.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.electronicAddress",
      "short" : "NI 2017 (Patient.elektroniskAdress). Exempelvis telefon till telemedicinutrustning. Se TelType.",
      "definition" : "NI 2017 (Patient.elektroniskAdress) Angivelse av elektronisk adressinformation som en person har i sin roll som patient. Här avses även telefonnummer. Exempel är särskilt telefonnummer till telemedicinutrustning. Se TelType i avsnitt 6.1.2.2.15.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.electronicAddress.value",
      "short" : "Elektronisk adress, t.ex.",
      "definition" : "Elektronisk adress, t.ex. e-mail eller telefonnummer. Anges i form av en URI inklusive prefix som anger protokoll. Telefonnummer anges med prefixet ”tel:”, e-mailadresser med ”mailto:” och webbsidor med ”http:” eller ”https:”. Exempel: value=”tel:+46702353535” value=”mailto:lars@gmail.com” value=”http://www.1177.se”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.electronicAddress.capabilities",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.electronicAddress.capabilities",
      "short" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS",
      "definition" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS. Möjliga värden: voice = Numret kan ta emot röstsamtal fax = Numret kan ta emot fax sms = Numret kan ta emot SMS\nTillåtna värden enligt XSD: voice, fax, sms.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.patient.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.patient.electronicAddress.use",
      "short" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod. Möjliga värden: H = Används i hemmet/privat HV = Används under semester WP = Används på arbetet/i tjänsten TMP = Används tillfälligt\nTillåtna värden enligt XSD: H, HV, WP, TMP.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation",
      "short" : "Deltagare i observationen (ParticipationType).",
      "definition" : "Kan vara hälso- och sjukvårdspersonal, patienten, annan person, organisation,\nplats eller resurs.\nEn och endast en av: healthcareProfessional, patient, otherPerson, locationRole,\nresource, organisation.\nMotsvarar klassen Deltagande i NI 2017.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getobservations-participation-choice",
        "severity" : "error",
        "human" : "En och endast en av healthcareProfessional, patient, otherPerson, locationRole, resource och organisation ska anges",
        "expression" : "healthcareProfessional.combine(patient).combine(otherPerson).combine(locationRole).combine(resource).combine(organisation).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservations"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.type",
      "short" : "Typ av deltagande",
      "definition" : "Typ av deltagande. Detta beskriver på vilket sätt en deltagare deltagit i observationen. Kan exempelvis vara utförare, vittne eller ansvarig. Koder för deltagandetyp tillhandahålls av Socialstyrelsen som ett urval ur Snomed CT samt som bilaga till NI 2017 [R5]. Snomed CT urvals-id är 53351000052100. Vilka koder som ingår i urvalet söks fram i IHTSDO SNOMED CT Browser [R7]. Om koder utanför urvalet behöver användas ska detta göras i samråd med Socialstyrelsen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.time",
      "short" : "Tidpunkt för deltagandet om den skiljer sig från observationens tid. Se TimeType.",
      "definition" : "Om tiden för deltagandet inte överensstämmer med tiden för observationen (observations/observationBody/time) kan detta fält ange när den specifika deltagaren deltog i observationen. Se TimeType i avsnitt 6.1.2.2.18.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getobservations-time-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av ts och ivl_ts ska anges",
        "expression" : "ts.exists() xor ivlTs.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservations"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.time.ts",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.time.ts",
      "short" : "Tidpunkt där precisionen kan varieras utifrån behov",
      "definition" : "Tidpunkt där precisionen kan varieras utifrån behov.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.time.ivlTs",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ivl_ts"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.time.ivlTs",
      "short" : "Tidsintervall där precisionen kan varieras utifrån behov",
      "definition" : "Tidsintervall där precisionen kan varieras utifrån behov.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.time.ivlTs.start",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.time.ivlTs.start",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.time.ivlTs.end",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.time.ivlTs.end",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional",
      "short" : "Hälso- och sjukvårdspersonal (HealthcareProfessionalType).",
      "definition" : "Fält: id (HSA-id), person (PersonType), jobCode (befattning, 0..1),\nlicense (legitimation, 0..*), specialistQualification (specialistkompetens, 0..*),\norganisation (1..1), address (0..*), electronicAddress (0..*).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.rivId",
      "short" : "Hälso- och sjukvårdspersonalens HSA-id",
      "definition" : "Hälso- och sjukvårdspersonalens HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person",
      "short" : "Uppgifter om personen. Se PersonType.",
      "definition" : "Uppgifter om den person som har rollen som hälso- och sjukvårdspersonal. Se övrig regel 3, avsnitt 6.1.3.3. Se PersonType i avsnitt 6.1.2.2.8.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.rivId",
      "short" : "Id för personen i form av personnummer eller samordningsnummer",
      "definition" : "Id för personen i form av personnummer eller samordningsnummer. Skall anges med 12 tecken utan avskiljare.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.givenName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.givenName",
      "short" : "NI 2017 (Person.förnamn)",
      "definition" : "Angivelse av förnamn, som är en persons givna namn och inkluderar tilltalsnamn.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.middleSurname",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.middleSurname",
      "short" : "NI 2017 (Person.mellannamn)",
      "definition" : "Angivelse av mellannamn, som är ett namn som kan bäras för att visa gemenskap med en förälder eller en make som bär detta namn som efternamn. Man kan också bära ett eget tidigare efternamn som mellannamn om man bytt till makes eller registrerade partners efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.surname",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.surname",
      "short" : "NI 2017 (Person.efternamn)",
      "definition" : "Angivelse av efternamn, som är en persons familjenamn eller släktnamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.givenNameMarker",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.givenNameMarker",
      "short" : "NI 2017 (Person.tilltalsnamnsmarkering)",
      "definition" : "Angivelse av tilltalsnamnsmarkering, som används för att markera vilket av de angivna förnamnen som är personens tilltalsnamn. Giltiga värden är 10-99 där den första siffran anger vilket av de angivna förnamnen som är tilltalsnamnet (1 motsvarar första namnet osv.) och den andra siffran anger det eventuella andra tilltalsnamnet om dubbelnamn är aktuellt. Om inte är den andra siffran 0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.gender",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.gender",
      "short" : "NI 2017 (Person.kön)",
      "definition" : "Angivelse av vilket kön personen har enligt folkbokföringen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.dateOfBirth",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.dateOfBirth",
      "short" : "NI 2017 (Person.födelsedatum)",
      "definition" : "Angivelse av vilket datum personen är född. Ett datum på formatet ÅÅÅÅMMDD. Observera att det är födelsedatumet och inte personnumret.\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.confidentialityIndicator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.confidentialityIndicator",
      "short" : "NI 2017 (Person.sekretessmarkering)",
      "definition" : "Angivelse av sekretessmarkering enligt Skatteverket. Defaultvärde är ”false”. Defaultvärdet ska automatiskt användas om inget annat värde anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.maritalStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.maritalStatus",
      "short" : "NI 2017 (Person.civilstånd)",
      "definition" : "Angivelse av personens civilstånd.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.address",
      "short" : "NI 2017 (Person.adress)",
      "definition" : "Angivelse av adressinformation för fysisk plats för en person, exempelvis bostadsadress eller tillfällig adress. Se AddressType i avsnitt 6.1.2.2.14.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.address.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.address.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.address.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.address.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.electronicAddress",
      "short" : "NI 2017 (Person.elektroniskAdress)",
      "definition" : "Angivelse av elektronisk adressinformation som en person har. Här avses även telefonnummer. Exempel är telefonnummer eller e-postadress. Se TelType i avsnitt 6.1.2.2.15.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.electronicAddress.value",
      "short" : "Elektronisk adress, t.ex.",
      "definition" : "Elektronisk adress, t.ex. e-mail eller telefonnummer. Anges i form av en URI inklusive prefix som anger protokoll. Telefonnummer anges med prefixet ”tel:”, e-mailadresser med ”mailto:” och webbsidor med ”http:” eller ”https:”. Exempel: value=”tel:+46702353535” value=”mailto:lars@gmail.com” value=”http://www.1177.se”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.electronicAddress.capabilities",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.electronicAddress.capabilities",
      "short" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS",
      "definition" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS. Möjliga värden: voice = Numret kan ta emot röstsamtal fax = Numret kan ta emot fax sms = Numret kan ta emot SMS\nTillåtna värden enligt XSD: voice, fax, sms.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.person.electronicAddress.use",
      "short" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod. Möjliga värden: H = Används i hemmet/privat HV = Används under semester WP = Används på arbetet/i tjänsten TMP = Används tillfälligt\nTillåtna värden enligt XSD: H, HV, WP, TMP.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.jobCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.jobCode",
      "short" : "NI 2017 (Hälso- och sjukvårdspersonal.befattning). 0..1 pga tillgänglighet i källsystem.",
      "definition" : "NI 2017 (Hälso- och sjukvårdspersonal.befattning) Kod för den befattning en hälso- och sjukvårdspersonal har i ett visst uppdrag i en organisation inom hälso- och sjukvård. En befattning avser ställning i en verksamhet som innebär vissa befogenheter och ett visst ansvar. Hälso- och sjukvårdspersonal.befattning är obligatoriskt enligt NI men har kardinalitet 0..1 i tjänstekontrakt eftersom det inte är säkert att information om befattning finns tillgänglig i producentsystemet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.license",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.license",
      "short" : "NI 2017 (Hälso- och sjukvårdspersonal.legitimation).",
      "definition" : "NI 2017 (Hälso- och sjukvårdspersonal.legitimation) Kod för den legitimation inom hälso- och sjukvård som avses.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.specialistQualification",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.specialistQualification",
      "short" : "NI 2017 (Hälso- och sjukvårdspersonal.specialistkompetens).",
      "definition" : "NI 2017 (Hälso- och sjukvårdspersonal.specialistkompetens) Angivelse av kod för kompetens inom en medicinsk specialitet som en läkare har.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation",
      "short" : "Organisation för uppdraget. Se OrganisationType.",
      "definition" : "Organization som hälso- och sjukvårdspersonal har uppdrag för. Se OrganisationType i avsnitt 6.1.2.2.13.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.rivId",
      "short" : "Id för organisation",
      "definition" : "Id för organisation. Vanligtvis HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.type",
      "short" : "N1 2017 (Organisation.typ)",
      "definition" : "Kod för vilken typ av organisation som avses, exempelvis vårdgivare eller vårdenhet. Ger också möjlighet att ange exempelvis socialtjänst eller annan myndighet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.name",
      "short" : "Organisationens namn",
      "definition" : "Organisationens namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.address",
      "short" : "NI 2017 (Organisation.adress)",
      "definition" : "Angivelse av adressinformation för fysisk plats till organisation, exempelvis besöksadress eller fakturaadress. Se AddressType i avsnitt 6.1.2.2.14.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.address.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.address.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.address.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.address.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.electronicAddress",
      "short" : "NI 2017 (Organisation.elektroniskAdress)",
      "definition" : "Angivelse av elektronisk adressinformation till organisation. Här avses även telefonnummer. Exempel är telefonnummer till växel, e-postadress eller webbadress. Se TelType i avsnitt 6.1.2.2.15.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.electronicAddress.value",
      "short" : "Elektronisk adress, t.ex.",
      "definition" : "Elektronisk adress, t.ex. e-mail eller telefonnummer. Anges i form av en URI inklusive prefix som anger protokoll. Telefonnummer anges med prefixet ”tel:”, e-mailadresser med ”mailto:” och webbsidor med ”http:” eller ”https:”. Exempel: value=”tel:+46702353535” value=”mailto:lars@gmail.com” value=”http://www.1177.se”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.electronicAddress.capabilities",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.electronicAddress.capabilities",
      "short" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS",
      "definition" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS. Möjliga värden: voice = Numret kan ta emot röstsamtal fax = Numret kan ta emot fax sms = Numret kan ta emot SMS\nTillåtna värden enligt XSD: voice, fax, sms.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.organisation.electronicAddress.use",
      "short" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod. Möjliga värden: H = Används i hemmet/privat HV = Används under semester WP = Används på arbetet/i tjänsten TMP = Används tillfälligt\nTillåtna värden enligt XSD: H, HV, WP, TMP.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.address",
      "short" : "NI 2017 (Hälso- och sjukvårdspersonal.adress). Se AddressType.",
      "definition" : "NI 2017 (Hälso- och sjukvårdspersonal.adress) Angivelse av adressinformation för fysisk plats som en person har i sin roll som hälso- och sjukvårdspersonal i ett visst uppdrag i en organisation inom hälso- och sjukvård. Exempel är personlig besöksadress. Se AddressType i avsnitt 6.1.2.2.14.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.address.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.address.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.address.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.address.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.electronicAddress",
      "short" : "NI 2017 (Hälso- och sjukvårdspersonal.elektroniskAdress). Se TelType.",
      "definition" : "NI 2017 (Hälso- och sjukvårdspersonal.elektroniskAdress) Angivelse av elektronisk adressinformation som en person har i sin roll som hälso- och sjukvårdspersonal i ett visst uppdrag i en organisation inom hälso- och sjukvård. Här avses även telefonnummer. Exempel är direktnummer eller personlig e-postadress. Se TelType i avsnitt 6.1.2.2.15.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.electronicAddress.value",
      "short" : "Elektronisk adress, t.ex.",
      "definition" : "Elektronisk adress, t.ex. e-mail eller telefonnummer. Anges i form av en URI inklusive prefix som anger protokoll. Telefonnummer anges med prefixet ”tel:”, e-mailadresser med ”mailto:” och webbsidor med ”http:” eller ”https:”. Exempel: value=”tel:+46702353535” value=”mailto:lars@gmail.com” value=”http://www.1177.se”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.electronicAddress.capabilities",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.electronicAddress.capabilities",
      "short" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS",
      "definition" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS. Möjliga värden: voice = Numret kan ta emot röstsamtal fax = Numret kan ta emot fax sms = Numret kan ta emot SMS\nTillåtna värden enligt XSD: voice, fax, sms.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.healthcareProfessional.electronicAddress.use",
      "short" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod. Möjliga värden: H = Används i hemmet/privat HV = Används under semester WP = Används på arbetet/i tjänsten TMP = Används tillfälligt\nTillåtna värden enligt XSD: H, HV, WP, TMP.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient",
      "short" : "Patienten som deltagare (PatientInformationType) — ej som subjekt för observationen.",
      "definition" : "Patienten i det fall då patienten deltar på andra sätt än som subjekt för observationen. Se PatientInformationType i avsnitt 6.1.2.2.4.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getobservations-patient-id-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av id och person.id ska anges",
        "expression" : "rivId.combine(person.rivId).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservations"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.rivId",
      "short" : "NI 2017 (Patient.id)",
      "definition" : "Angivelse av identitetsbeteckning för patientrollen. Denna identitet används då patienten inte kan eller bör identifieras med ett person-id (personnummer eller samordningsnummer). Identitetsbeteckningen på patient är vanligtvis ett reservnummer. En person kan ha flera instanser av klassen patient och dessa kan ha olika id. Observera att det är obligatoriskt att ange antingen person-id på person eller id på patient. Nationell reservidentitet är den enda typ av reservnummer som tillåts i denna tjänst. Denna ska anges med 12 tecken utan avskiljare. Se [R9] för mer information om nationell reservidentitet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person",
      "short" : "Uppgifter om den person som har rollen som patient",
      "definition" : "Uppgifter om den person som har rollen som patient. Se övrig regel 3, avsnitt 6.1.3.3. Se PersonType i avsnitt 6.1.2.2.6.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.rivId",
      "short" : "Id för personen i form av personnummer eller samordningsnummer",
      "definition" : "Id för personen i form av personnummer eller samordningsnummer. Skall anges med 12 tecken utan avskiljare.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.givenName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.givenName",
      "short" : "NI 2017 (Person.förnamn)",
      "definition" : "Angivelse av förnamn, som är en persons givna namn och inkluderar tilltalsnamn.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.middleSurname",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.middleSurname",
      "short" : "NI 2017 (Person.mellannamn)",
      "definition" : "Angivelse av mellannamn, som är ett namn som kan bäras för att visa gemenskap med en förälder eller en make som bär detta namn som efternamn. Man kan också bära ett eget tidigare efternamn som mellannamn om man bytt till makes eller registrerade partners efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.surname",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.surname",
      "short" : "NI 2017 (Person.efternamn)",
      "definition" : "Angivelse av efternamn, som är en persons familjenamn eller släktnamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.givenNameMarker",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.givenNameMarker",
      "short" : "NI 2017 (Person.tilltalsnamnsmarkering)",
      "definition" : "Angivelse av tilltalsnamnsmarkering, som används för att markera vilket av de angivna förnamnen som är personens tilltalsnamn. Giltiga värden är 10-99 där den första siffran anger vilket av de angivna förnamnen som är tilltalsnamnet (1 motsvarar första namnet osv.) och den andra siffran anger det eventuella andra tilltalsnamnet om dubbelnamn är aktuellt. Om inte är den andra siffran 0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.gender",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.gender",
      "short" : "NI 2017 (Person.kön)",
      "definition" : "Angivelse av vilket kön personen har enligt folkbokföringen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.dateOfBirth",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.dateOfBirth",
      "short" : "NI 2017 (Person.födelsedatum)",
      "definition" : "Angivelse av vilket datum personen är född. Ett datum på formatet ÅÅÅÅMMDD. Observera att det är födelsedatumet och inte personnumret.\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.confidentialityIndicator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.confidentialityIndicator",
      "short" : "NI 2017 (Person.sekretessmarkering)",
      "definition" : "Angivelse av sekretessmarkering enligt Skatteverket. Defaultvärde är ”false”. Defaultvärdet ska automatiskt användas om inget annat värde anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.maritalStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.maritalStatus",
      "short" : "NI 2017 (Person.civilstånd)",
      "definition" : "Angivelse av personens civilstånd.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.address",
      "short" : "NI 2017 (Person.adress)",
      "definition" : "Angivelse av adressinformation för fysisk plats för en person, exempelvis bostadsadress eller tillfällig adress. Se AddressType i avsnitt 6.1.2.2.14.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.address.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.address.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.address.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.address.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.electronicAddress",
      "short" : "NI 2017 (Person.elektroniskAdress)",
      "definition" : "Angivelse av elektronisk adressinformation som en person har. Här avses även telefonnummer. Exempel är telefonnummer eller e-postadress. Se TelType i avsnitt 6.1.2.2.15.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.electronicAddress.value",
      "short" : "Elektronisk adress, t.ex.",
      "definition" : "Elektronisk adress, t.ex. e-mail eller telefonnummer. Anges i form av en URI inklusive prefix som anger protokoll. Telefonnummer anges med prefixet ”tel:”, e-mailadresser med ”mailto:” och webbsidor med ”http:” eller ”https:”. Exempel: value=”tel:+46702353535” value=”mailto:lars@gmail.com” value=”http://www.1177.se”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.electronicAddress.capabilities",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.electronicAddress.capabilities",
      "short" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS",
      "definition" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS. Möjliga värden: voice = Numret kan ta emot röstsamtal fax = Numret kan ta emot fax sms = Numret kan ta emot SMS\nTillåtna värden enligt XSD: voice, fax, sms.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.person.electronicAddress.use",
      "short" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod. Möjliga värden: H = Används i hemmet/privat HV = Används under semester WP = Används på arbetet/i tjänsten TMP = Används tillfälligt\nTillåtna värden enligt XSD: H, HV, WP, TMP.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.address",
      "short" : "NI 2017 (Patient.adress)",
      "definition" : "Angivelse av adressinformation för fysisk plats som en person har i sin roll som patient, exempelvis särskild kallelseadress. Se AddressType i avsnitt 6.1.2.2.14.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.address.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.address.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.address.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.address.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.electronicAddress",
      "short" : "NI 2017 (Patient.elektroniskAdress)",
      "definition" : "Angivelse av elektronisk adressinformation som en person har i sin roll som patient. Här avses även telefonnummer. Exempel är särskilt telefonnummer till telemedicinutrustning. Se TelType i avsnitt 6.1.2.2.15.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.electronicAddress.value",
      "short" : "Elektronisk adress, t.ex.",
      "definition" : "Elektronisk adress, t.ex. e-mail eller telefonnummer. Anges i form av en URI inklusive prefix som anger protokoll. Telefonnummer anges med prefixet ”tel:”, e-mailadresser med ”mailto:” och webbsidor med ”http:” eller ”https:”. Exempel: value=”tel:+46702353535” value=”mailto:lars@gmail.com” value=”http://www.1177.se”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.electronicAddress.capabilities",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.electronicAddress.capabilities",
      "short" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS",
      "definition" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS. Möjliga värden: voice = Numret kan ta emot röstsamtal fax = Numret kan ta emot fax sms = Numret kan ta emot SMS\nTillåtna värden enligt XSD: voice, fax, sms.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.patient.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.patient.electronicAddress.use",
      "short" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod. Möjliga värden: H = Används i hemmet/privat HV = Används under semester WP = Används på arbetet/i tjänsten TMP = Används tillfälligt\nTillåtna värden enligt XSD: H, HV, WP, TMP.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson",
      "short" : "Övrig person — ej patienten eller hälso- och sjukvårdspersonal (OtherPersonType).",
      "definition" : "Fält: type (1..1, CVType), person (1..1, PersonType), organisation (0..1, OrganisationType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.type",
      "short" : "NI 2017 (Annan person.typ)",
      "definition" : "Kod för den typ av annan person som avses, exempelvis anhörig eller företrädare.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person",
      "short" : "Uppgifter om den person som har rollen som annan person",
      "definition" : "Uppgifter om den person som har rollen som annan person. Se övrig regel 3, avsnitt 6.1.3.3. Se PersonType i avsnitt 6.1.2.2.8.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.rivId",
      "short" : "Id för personen i form av personnummer eller samordningsnummer",
      "definition" : "Id för personen i form av personnummer eller samordningsnummer. Skall anges med 12 tecken utan avskiljare.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.givenName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.givenName",
      "short" : "NI 2017 (Person.förnamn)",
      "definition" : "Angivelse av förnamn, som är en persons givna namn och inkluderar tilltalsnamn.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.middleSurname",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.middleSurname",
      "short" : "NI 2017 (Person.mellannamn)",
      "definition" : "Angivelse av mellannamn, som är ett namn som kan bäras för att visa gemenskap med en förälder eller en make som bär detta namn som efternamn. Man kan också bära ett eget tidigare efternamn som mellannamn om man bytt till makes eller registrerade partners efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.surname",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.surname",
      "short" : "NI 2017 (Person.efternamn)",
      "definition" : "Angivelse av efternamn, som är en persons familjenamn eller släktnamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.givenNameMarker",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.givenNameMarker",
      "short" : "NI 2017 (Person.tilltalsnamnsmarkering)",
      "definition" : "Angivelse av tilltalsnamnsmarkering, som används för att markera vilket av de angivna förnamnen som är personens tilltalsnamn. Giltiga värden är 10-99 där den första siffran anger vilket av de angivna förnamnen som är tilltalsnamnet (1 motsvarar första namnet osv.) och den andra siffran anger det eventuella andra tilltalsnamnet om dubbelnamn är aktuellt. Om inte är den andra siffran 0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.gender",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.gender",
      "short" : "NI 2017 (Person.kön)",
      "definition" : "Angivelse av vilket kön personen har enligt folkbokföringen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.dateOfBirth",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.dateOfBirth",
      "short" : "NI 2017 (Person.födelsedatum)",
      "definition" : "Angivelse av vilket datum personen är född. Ett datum på formatet ÅÅÅÅMMDD. Observera att det är födelsedatumet och inte personnumret.\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.confidentialityIndicator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.confidentialityIndicator",
      "short" : "NI 2017 (Person.sekretessmarkering)",
      "definition" : "Angivelse av sekretessmarkering enligt Skatteverket. Defaultvärde är ”false”. Defaultvärdet ska automatiskt användas om inget annat värde anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.maritalStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.maritalStatus",
      "short" : "NI 2017 (Person.civilstånd)",
      "definition" : "Angivelse av personens civilstånd.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.address",
      "short" : "NI 2017 (Person.adress)",
      "definition" : "Angivelse av adressinformation för fysisk plats för en person, exempelvis bostadsadress eller tillfällig adress. Se AddressType i avsnitt 6.1.2.2.14.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.address.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.address.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.address.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.address.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.electronicAddress",
      "short" : "NI 2017 (Person.elektroniskAdress)",
      "definition" : "Angivelse av elektronisk adressinformation som en person har. Här avses även telefonnummer. Exempel är telefonnummer eller e-postadress. Se TelType i avsnitt 6.1.2.2.15.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.electronicAddress.value",
      "short" : "Elektronisk adress, t.ex.",
      "definition" : "Elektronisk adress, t.ex. e-mail eller telefonnummer. Anges i form av en URI inklusive prefix som anger protokoll. Telefonnummer anges med prefixet ”tel:”, e-mailadresser med ”mailto:” och webbsidor med ”http:” eller ”https:”. Exempel: value=”tel:+46702353535” value=”mailto:lars@gmail.com” value=”http://www.1177.se”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.electronicAddress.capabilities",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.electronicAddress.capabilities",
      "short" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS",
      "definition" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS. Möjliga värden: voice = Numret kan ta emot röstsamtal fax = Numret kan ta emot fax sms = Numret kan ta emot SMS\nTillåtna värden enligt XSD: voice, fax, sms.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.person.electronicAddress.use",
      "short" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod. Möjliga värden: H = Används i hemmet/privat HV = Används under semester WP = Används på arbetet/i tjänsten TMP = Används tillfälligt\nTillåtna värden enligt XSD: H, HV, WP, TMP.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation",
      "short" : "Den organisation som personen har uppdrag för",
      "definition" : "Den organisation som personen har uppdrag för. Se OrganisationType i avsnitt 6.1.2.2.13.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.rivId",
      "short" : "Id för organisation",
      "definition" : "Id för organisation. Vanligtvis HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.type",
      "short" : "N1 2017 (Organisation.typ)",
      "definition" : "Kod för vilken typ av organisation som avses, exempelvis vårdgivare eller vårdenhet. Ger också möjlighet att ange exempelvis socialtjänst eller annan myndighet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.name",
      "short" : "Organisationens namn",
      "definition" : "Organisationens namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.address",
      "short" : "NI 2017 (Organisation.adress)",
      "definition" : "Angivelse av adressinformation för fysisk plats till organisation, exempelvis besöksadress eller fakturaadress. Se AddressType i avsnitt 6.1.2.2.14.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.address.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.address.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.address.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.address.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.electronicAddress",
      "short" : "NI 2017 (Organisation.elektroniskAdress)",
      "definition" : "Angivelse av elektronisk adressinformation till organisation. Här avses även telefonnummer. Exempel är telefonnummer till växel, e-postadress eller webbadress. Se TelType i avsnitt 6.1.2.2.15.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.electronicAddress.value",
      "short" : "Elektronisk adress, t.ex.",
      "definition" : "Elektronisk adress, t.ex. e-mail eller telefonnummer. Anges i form av en URI inklusive prefix som anger protokoll. Telefonnummer anges med prefixet ”tel:”, e-mailadresser med ”mailto:” och webbsidor med ”http:” eller ”https:”. Exempel: value=”tel:+46702353535” value=”mailto:lars@gmail.com” value=”http://www.1177.se”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.electronicAddress.capabilities",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.electronicAddress.capabilities",
      "short" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS",
      "definition" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS. Möjliga värden: voice = Numret kan ta emot röstsamtal fax = Numret kan ta emot fax sms = Numret kan ta emot SMS\nTillåtna värden enligt XSD: voice, fax, sms.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.otherPerson.organisation.electronicAddress.use",
      "short" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod. Möjliga värden: H = Används i hemmet/privat HV = Används under semester WP = Används på arbetet/i tjänsten TMP = Används tillfälligt\nTillåtna värden enligt XSD: H, HV, WP, TMP.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole",
      "short" : "Plats eller platsroll som deltar i observationen (LocationRoleType).",
      "definition" : "Typ av roll: t.ex. patientens hem, semesterboende, arbetsplats.\nFält: type (0..1, CVType), location (0..1) med id, type, name, locationAddress, electronicAddress, position.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.type",
      "short" : "Typ av roll som en plats har",
      "definition" : "Typ av roll som en plats har. T.ex. patientens hem, semesterboende, arbetsplats.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location",
      "short" : "Fysisk eller virtuell plats som är samma oavsett vilken verksamhet som bedrivs på platsen",
      "definition" : "Fysisk eller virtuell plats som är samma oavsett vilken verksamhet som bedrivs på platsen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.type",
      "short" : "type",
      "definition" : "type",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.locationAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.locationAddress",
      "short" : "locationAddress",
      "definition" : "locationAddress",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.locationAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.locationAddress.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.locationAddress.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.locationAddress.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.locationAddress.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.locationAddress.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.locationAddress.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.locationAddress.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.position",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.position",
      "short" : "position",
      "definition" : "position",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.position.longitude",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.position.longitude",
      "short" : "longitude",
      "definition" : "longitude",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.position.latitude",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.position.latitude",
      "short" : "latitude",
      "definition" : "latitude",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.position.altitude",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.locationRole.location.position.altitude",
      "short" : "altitude",
      "definition" : "altitude",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource",
      "short" : "Resurs som deltar — t.ex. medicinteknisk utrustning (ResourceType).",
      "definition" : "Fält: id (0..1, IIType), type (0..1, CVType), groupId (0..*, IIType),\namount (0..1, AmountType), resourceProperty (0..*, typ + value).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.rivId",
      "short" : "NI 2017 (Resurs.id)",
      "definition" : "Angivelse av identitetsbeteckning på en viss verklig instans av resurs, exempelvis MR-maskinen på avdelning R23, rum 3.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.type",
      "short" : "NI 2017 (Resurs.typ)",
      "definition" : "Kod för typ av resurs, exempelvis skalpell eller typ av läkemedel (som till exempel kan anges med NPL-id).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.groupId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.groupId",
      "short" : "NI 2017 (Resurs.gruppidentitet)",
      "definition" : "Angivelse av identitetsbeteckning för en grupp av resurser, exempelvis ett batchnummer eller partinummer.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.amount",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.amount",
      "short" : "NI 2017 (Resurs.mängd)",
      "definition" : "Angivelse av den kvantitativa omfattning som en resurs har, uttryckt exempelvis som volym, massa eller antal. Exempel kan vara att den använda resursen blodtrycksmanschett är en till antalet. Se AmountType i avsnitt 6.1.2.2.17.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getobservations-amount-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av pq och ivl_pq ska anges",
        "expression" : "pq.exists() xor ivlPq.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservations"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.amount.pq",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.amount.pq",
      "short" : "Värdet som är resultatet av att en mängd uppmätts, exempelvis 100 mg eller 8 tabletter",
      "definition" : "Värdet som är resultatet av att en mängd uppmätts, exempelvis 100 mg eller 8 tabletter.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.amount.ivlPq",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ivl_pq"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.amount.ivlPq",
      "short" : "Intervall av mängder",
      "definition" : "Intervall av mängder.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty",
      "short" : "NI 2017 (Resursegenskap)",
      "definition" : "Angivelse av egenskaper som en resurs kan ha, som inte kan utläsas från resursattributet typ [type]. Exempel är egenskapen att blodet i en blodpåse har blodgruppen \"AB+\". Kan användas för att exempelvis ange modellbeteckning för en medicinteknisk utrustning.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.type",
      "short" : "type",
      "definition" : "type",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getobservations-value-choice",
        "severity" : "error",
        "human" : "En och endast en av cv, pq, ivl_pq, ts, ivl_ts, st och int ska anges",
        "expression" : "cv.combine(pq).combine(ivlPq).combine(ts).combine(ivlTs).combine(st).combine(int).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservations"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.cv",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.cv",
      "short" : "Kodat värde",
      "definition" : "Kodat värde. I fallet med observationer kan det exempelvis vara en diagnoskod enligt ICD-10 eller ett kliniskt fynd enligt Snomed CT.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.pq",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.pq",
      "short" : "Värde som är resultatet av att någontings fysiskt uppmätts eller räknats, exempelvis 187 cm, 8 tabletter …",
      "definition" : "Värde som är resultatet av att någontings fysiskt uppmätts eller räknats, exempelvis 187 cm, 8 tabletter eller 37,8 °C.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.ivlPq",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ivl_pq"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.ivlPq",
      "short" : "Intervall av värden som är resultatet av att någontings fysiskt uppmätts eller räknats, exempelvis 187-190 …",
      "definition" : "Intervall av värden som är resultatet av att någontings fysiskt uppmätts eller räknats, exempelvis 187-190 cm, 8-10 tabletter eller 37,1-37,8 °C.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.ts",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.ts",
      "short" : "Tidpunkt där precisionen kan varieras utifrån behov",
      "definition" : "Tidpunkt där precisionen kan varieras utifrån behov. Notera att det föredragna sättet att ange tiden för en observation vanligtvis är att i attributet värde (observations/observationBody/value) ange vad som observerats och i attributet tid (observations/observationBody/time) ange när.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.ivlTs",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ivl_ts"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.ivlTs",
      "short" : "Tidsintervall där precisionen kan varieras utifrån behov",
      "definition" : "Tidsintervall där precisionen kan varieras utifrån behov. Tidpunkt där precisionen kan varieras utifrån behov. Notera att det föredragna sättet att ange tiden för en observation vanligtvis är att i attributet värde (observations/observationBody/value) ange vad som observerats och i attributet tid (observations/observationBody/time) ange när.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.ivlTs.start",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.ivlTs.start",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.ivlTs.end",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.ivlTs.end",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.st",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.st",
      "short" : "Textuell beskrivning",
      "definition" : "Textuell beskrivning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.int",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.resource.resourceProperty.value.int",
      "short" : "Heltal",
      "definition" : "Heltal. Ska användas då något klassificerats numeriskt på en skattningsskala, exempelvis 1 poäng på Apgarskalan för Grimaser, reflex, retbarhet. Denna typ ska inte användas för numeriska värden som är ett resultat av att någonting fysiskt uppmätts eller räknats (exempelvis antal tabletter). Fysiskt uppmätta eller räknade värden ska istället dokumenteras med typen pq.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation",
      "short" : "Organisation som deltar i observationen (OrganisationType).",
      "definition" : "Organisation som deltar i observationen. Se OrganisationType i avsnitt 6.1.2.2.13.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.rivId",
      "short" : "Id för organisation",
      "definition" : "Id för organisation. Vanligtvis HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.type",
      "short" : "N1 2017 (Organisation.typ)",
      "definition" : "Kod för vilken typ av organisation som avses, exempelvis vårdgivare eller vårdenhet. Ger också möjlighet att ange exempelvis socialtjänst eller annan myndighet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.name",
      "short" : "Organisationens namn",
      "definition" : "Organisationens namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.address",
      "short" : "NI 2017 (Organisation.adress)",
      "definition" : "Angivelse av adressinformation för fysisk plats till organisation, exempelvis besöksadress eller fakturaadress. Se AddressType i avsnitt 6.1.2.2.14.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.address.use",
      "short" : "Om flera adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera adresser anges skiljs de åt via sin användningskod. Den primära/default adressen anges alltid utan användningskod. Möjliga värden: PHYS = Fysisk besöksadress H = Hemadress HV = Semesteradress WP = Adress till arbetsplats TMP = Tillfällig adress När det inte finns en adress med användningskod som matchar syftet med adressanvändningen, väljs den primära adressen.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.address.part",
      "short" : "Del av adress, exempelvis gatuadress eller postnummer",
      "definition" : "Del av adress, exempelvis gatuadress eller postnummer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.address.part.value",
      "short" : "value",
      "definition" : "value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.address.part.type",
      "short" : "type",
      "definition" : "Tillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, ZIP, POB, PRE.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.electronicAddress",
      "short" : "NI 2017 (Organisation.elektroniskAdress)",
      "definition" : "Angivelse av elektronisk adressinformation till organisation. Här avses även telefonnummer. Exempel är telefonnummer till växel, e-postadress eller webbadress. Se TelType i avsnitt 6.1.2.2.15.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.electronicAddress.value",
      "short" : "Elektronisk adress, t.ex.",
      "definition" : "Elektronisk adress, t.ex. e-mail eller telefonnummer. Anges i form av en URI inklusive prefix som anger protokoll. Telefonnummer anges med prefixet ”tel:”, e-mailadresser med ”mailto:” och webbsidor med ”http:” eller ”https:”. Exempel: value=”tel:+46702353535” value=”mailto:lars@gmail.com” value=”http://www.1177.se”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.electronicAddress.capabilities",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.electronicAddress.capabilities",
      "short" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS",
      "definition" : "Kan användas för telefonnummer för att ange om numret har möjlighet att ta emot röstsamtal, fax eller SMS. Möjliga värden: voice = Numret kan ta emot röstsamtal fax = Numret kan ta emot fax sms = Numret kan ta emot SMS\nTillåtna värden enligt XSD: voice, fax, sms.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.participation.organisation.electronicAddress.use",
      "short" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod",
      "definition" : "Om flera elektroniska adresser anges skiljs de åt via sin användningskod. Möjliga värden: H = Används i hemmet/privat HV = Används under semester WP = Används på arbetet/i tjänsten TMP = Används tillfälligt\nTillåtna värden enligt XSD: H, HV, WP, TMP.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.relation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.relation",
      "short" : "Typade samband till andra informationsmängder (RelationType).",
      "definition" : "Motsvarar delvis klassen Samband i NI 2017.\nExempel: ett systoliskt blodtryck (observation) är resultat av aktiviteten blodtrycksmätning.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.relation.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.relation.type",
      "short" : "NI 2017 (Samband.typ)",
      "definition" : "Kod för på vilket sätt två företeelser dokumenterade som uppgifter i patientjournal är relaterade till varandra. Exempelvis observationen att patienten har typ 2-diabetes har grund i observationerna att patienten är trött, kissar mycket och har ett förhöjt blodsockervärde, där typ av samband är ”har grund”. Koder för sambandstyp tillhandahålls av Socialstyrelsen som ett urval ur Snomed CT samt som bilaga till NI 2017 [R5]. Snomed CT urvals-id är 53371000052106. Vilka koder som ingår i urvalet söks fram i IHTSDO SNOMED CT Browser [R7]. Om koder utanför urvalet behöver användas ska detta göras i samråd med Socialstyrelsen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation",
      "short" : "Referens till en uppgift i patientjournal som observationen har samband till.",
      "definition" : "Referens till en uppgift i patientjournal som denna observation har ett samband till.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation.time",
      "short" : "Starttid för refererad information. Format: ÅÅÅÅMMDDttmmss (varierande precision). Se övrig regel 4.",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic2"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation.categorization",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation.categorization",
      "short" : "Typ av information som sambandet pekar ut (kod från Categorization i engagemangsindexposten).",
      "definition" : "Typ av information som sambandet pekar ut (kod från Categorization i engagemangsindexposten).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation.informationOwner",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation.informationOwner",
      "short" : "Vårdgivare som är informationsägare av den refererade informationen.",
      "definition" : "Vårdgivare som är informationsägare av den refererade informationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation.informationOwner.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservations.observations.observationBody.relation.referredInformation.informationOwner.rivId",
      "short" : "id",
      "definition" : "id",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic2"
      }]
    }]
  }
}

```
