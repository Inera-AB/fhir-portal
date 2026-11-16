# GetAccessLogsForPatient 1.1 - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetAccessLogsForPatient 1.1 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMAccessLogV11.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **Differentialvy** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **ÖgonblicksbildsvyView** 

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMAccessLogV11.csv), [Excel](../StructureDefinition-SEEHDSLMAccessLogV11.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMAccessLogV11",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetAccessLogsForPatientResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:ehr:log:querying:GetAccessLogsForPatientResponder:1"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAccessLogV11",
  "version" : "0.9.0",
  "name" : "SEEHDSLMAccessLogV11",
  "title" : "GetAccessLogsForPatient 1.1",
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
  "description" : "Logisk modell för version 1.1 av tjänstekontraktet GetAccessLogsForPatient\n(urn:riv:ehr:log:querying:GetAccessLogsForPatientResponder:1).\nMappningen utgår från versionen i SEEHDSLMAccessLog. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAccessLogV11",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMAccessLogV11",
      "path" : "SEEHDSLMAccessLogV11",
      "short" : "GetAccessLogsForPatient 1.1",
      "definition" : "Logisk modell för version 1.1 av tjänstekontraktet GetAccessLogsForPatient\n(urn:riv:ehr:log:querying:GetAccessLogsForPatientResponder:1).\nMappningen utgår från versionen i SEEHDSLMAccessLog. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida."
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType",
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "AccessLogsResultType"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType",
      "short" : "Resultatobjekt med status hurvida tjänsten returnerar ok eller om fel uppstått",
      "definition" : "Resultatobjekt med status hurvida tjänsten returnerar ok eller om fel uppstått. Om tjänsten utförts korrekt returneras en lista med patientinformation och resultatkod OK. Vid eventuella fel i tjänsteanropet returneras ingen patientinformation. Statuskod som beskriver orsaken till fel returneras då tillsammans med ett felmeddelande.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.result",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "Result"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.result",
      "short" : "Datatyp som returneras som ett generellt svar från alla förändrande tjänster, t.ex.",
      "definition" : "Datatyp som returneras som ett generellt svar från alla förändrande tjänster, t.ex. skapa, radera, etc. En anropande klient skall alltid kontrollera att resultatkoden inte innehåller fel för att på så sätt veta om anropet lyckades. Alla svarskoder förutom OK och INFO betyder att åtgärden inte genomfördes.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ResultCode"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.resultCode",
      "short" : "ResultCode",
      "definition" : "Tillåtna värden enligt XSD: OK, INFO, ERROR, VALIDATION_ERROR, ACCESSDENIED, REPORT_ON_QUEUE, REPORT_IN_PROCESS, REPORT_NOT_FOUND, MAX_QUERY_RESULT_EXCEEDED.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.resultText",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ResultText"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.resultText",
      "short" : "ResultText",
      "definition" : "ResultText",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.startInterval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "StartInterval"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.startInterval",
      "short" : "StartInterval",
      "definition" : "StartInterval",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDateTime"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.endInterval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "EndInterval"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.endInterval",
      "short" : "EndInterval",
      "definition" : "EndInterval",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDateTime"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.queuedReportId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "QueuedReportId"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.queuedReportId",
      "short" : "QueuedReportId",
      "definition" : "QueuedReportId",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.queueTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "QueueTime"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.result.queueTime",
      "short" : "QueueTime",
      "definition" : "QueueTime",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "AccesssLogs"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs",
      "short" : "Datatyp som håller lista med Access loggar",
      "definition" : "Datatyp som håller lista med Access loggar. Kan vara en tom lista.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "AccessLog"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog",
      "short" : "Datatyp som håller information för vilken vårdgivare och vårdenhet som haft åtkomst samt typ av resurs, orsak …",
      "definition" : "Datatyp som håller information för vilken vårdgivare och vårdenhet som haft åtkomst samt typ av resurs, orsak och tidpunkt.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.careProviderId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "CareProviderId"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.careProviderId",
      "short" : "Vårdgivare som haft åtkomst",
      "definition" : "Vårdgivare som haft åtkomst.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.careProviderName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "CareProviderName"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.careProviderName",
      "short" : "Namn på vårdgivare som haft åtkomst",
      "definition" : "Namn på vårdgivare som haft åtkomst.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.careUnitId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "CareUnitId"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.careUnitId",
      "short" : "Vårdenhet som haft åtkomst",
      "definition" : "Vårdenhet som haft åtkomst.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.careUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "CareUnitName"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.careUnitName",
      "short" : "Namn på vårdenhet som haft åtkomst",
      "definition" : "Namn på vårdenhet som haft åtkomst.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.accessDate",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "AccessDate"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.accessDate",
      "short" : "Tidpunkt för åtkomst",
      "definition" : "Tidpunkt för åtkomst.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDateTime"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.userId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "UserId"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.userId",
      "short" : "Aktörens Id",
      "definition" : "Aktörens Id",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.userName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "UserName"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.userName",
      "short" : "Namn på vårdaktören",
      "definition" : "Namn på vårdaktören",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.userTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "UserTitle"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.userTitle",
      "short" : "Titel på vårdaktören",
      "definition" : "Titel på vårdaktören",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.purpose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "Purpose"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.purpose",
      "short" : "Information om syftet med aktiviten",
      "definition" : "Information om syftet med aktiviten. kan vara något av dessa värden: Vård och behandling, Kvalitetssäkring, Annan dokumentation enligt lag, Statistik, Administration och Kvalitetsregister.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.resourceType",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:ehr:log:querying:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ResourceType"
      }],
      "path" : "SEEHDSLMAccessLogV11.accessLogsResultType.accesssLogs.accessLog.resourceType",
      "short" : "Typ av resurs",
      "definition" : "Typ av resurs.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
