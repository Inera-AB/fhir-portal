# GetAccessLogForPatient - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetAccessLogForPatient 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMAccessLog.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMAccessLog.csv), [Excel](../StructureDefinition-SEEHDSLMAccessLog.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMAccessLog",
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
    "valueUri" : "urn:riv:informationsecurity:auditing:log:GetAccessLogsForPatientResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAccessLog",
  "version" : "0.9.0",
  "name" : "SEEHDSLMAccessLog",
  "title" : "GetAccessLogForPatient",
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
  "description" : "Logisk modell för patientens åtkomstloggar hämtad via GetAccessLogForPatient (informationsecurity:auditing:log v1.1, 2.0). Krävs för 1177 Journal 1.1, 2.0 men ej för NPÖ.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAccessLog",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMAccessLog",
      "path" : "SEEHDSLMAccessLog",
      "short" : "GetAccessLogForPatient",
      "definition" : "Logisk modell för patientens åtkomstloggar hämtad via GetAccessLogForPatient (informationsecurity:auditing:log v1.1, 2.0). Krävs för 1177 Journal 1.1, 2.0 men ej för NPÖ."
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult",
      "path" : "SEEHDSLMAccessLog.accessLogsResult",
      "short" : "Resultatobjekt med status huruvida tjänsten returnerar ok eller om fel uppstått",
      "definition" : "Resultatobjekt med status huruvida tjänsten returnerar ok eller om fel uppstått. Om tjänsten utförts korrekt returneras en lista med patientinformation och resultatkod OK. Vid eventuella fel i tjänsteanropet returneras ingen patientinformation. Statuskod som beskriver orsaken till fel returneras då tillsammans med ett felmeddelande.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.reportResult",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.reportResult",
      "short" : "reportResult",
      "definition" : "reportResult",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.result",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.result",
      "short" : "Datatyp som returneras som ett generellt svar från alla förändrande tjänster, t.ex.",
      "definition" : "Datatyp som returneras som ett generellt svar från alla förändrande tjänster, t.ex. skapa, radera, etc. En anropande klient skall alltid kontrollera att resultatkoden inte innehåller fel för att på så sätt veta om anropet lyckades. Alla svarskoder förutom OK och INFO betyder att åtgärden inte genomfördes.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.result.resultCode",
      "short" : "resultCode",
      "definition" : "Tillåtna värden enligt XSD: OK, INFO, ERROR, VALIDATION_ERROR, ACCESSDENIED, REPORT_ON_QUEUE, REPORT_IN_PROCESS, REPORT_NOT_FOUND, MAX_QUERY_RESULT_EXCEEDED.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.result.resultText",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.result.resultText",
      "short" : "resultText",
      "definition" : "resultText",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.startInterval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.startInterval",
      "short" : "Parameter som anger datum för första loggposten som finns för uppföljning när rapporten skapas",
      "definition" : "Parameter som anger datum för första loggposten som finns för uppföljning när rapporten skapas.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDateTime"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.endInterval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.endInterval",
      "short" : "Parameter som anger datum för sista loggposten som finns för uppföljning när rapporten skapas",
      "definition" : "Parameter som anger datum för sista loggposten som finns för uppföljning när rapporten skapas.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDateTime"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.queuedReportId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.queuedReportId",
      "short" : "Parameter som anger id på den rapport som efterfrågas och returneras om anropet avslutas innan rapporten är …",
      "definition" : "Parameter som anger id på den rapport som efterfrågas och returneras om anropet avslutas innan rapporten är genererad. Ytterligare anrop kan då göras med rapport id som inparameter för att hämta rapport. Finns för att undvika hängande anrop samt köa upp jobb vid hög belastning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.queueTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.reportResult.queueTime",
      "short" : "Anger förväntad tid i sekunder tills en köad rapport (identifierad med queuedReportId) kan levereras av …",
      "definition" : "Anger förväntad tid i sekunder tills en köad rapport (identifierad med queuedReportId) kan levereras av producenten.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs",
      "short" : "Datatyp som håller lista med Access loggar",
      "definition" : "Datatyp som håller lista med Access loggar. Kan vara en tom lista.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog",
      "short" : "Datatyp som håller information för vilken vårdgivare och vårdenhet som haft åtkomst samt typ av resurs, orsak …",
      "definition" : "Datatyp som håller information för vilken vårdgivare och vårdenhet som haft åtkomst samt typ av resurs, orsak och tidpunkt.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.careProviderId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.careProviderId",
      "short" : "Vårdgivare som haft åtkomst",
      "definition" : "Vårdgivare som haft åtkomst.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.careProviderName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.careProviderName",
      "short" : "Namn på vårdgivare som haft åtkomst",
      "definition" : "Namn på vårdgivare som haft åtkomst.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.careUnitId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.careUnitId",
      "short" : "Vårdenhet som haft åtkomst",
      "definition" : "Vårdenhet som haft åtkomst.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.careUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.careUnitName",
      "short" : "Namn på vårdenhet som haft åtkomst",
      "definition" : "Namn på vårdenhet som haft åtkomst.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.accessDate",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.accessDate",
      "short" : "Tidpunkt för åtkomst",
      "definition" : "Tidpunkt för åtkomst.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDateTime"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.userId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.userId",
      "short" : "Vårdaktörens id",
      "definition" : "Vårdaktörens id.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.userName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.userName",
      "short" : "Namn på vårdaktör",
      "definition" : "Namn på vårdaktör.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.userTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.userTitle",
      "short" : "Titel på vårdaktör",
      "definition" : "Titel på vårdaktör.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.purpose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.purpose",
      "short" : "Information om syftet med aktiviten",
      "definition" : "Information om syftet med aktiviten. kan vara något av dessa värden: Vård och behandling, Kvalitetssäkring, Annan dokumentation enligt lag, Statistik, Administration och Kvalitetsregister.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.resourceType",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:informationsecurity:auditing:log:2"
      }],
      "path" : "SEEHDSLMAccessLog.accessLogsResult.accesssLogs.accessLog.resourceType",
      "short" : "Typ av resurs",
      "definition" : "Typ av resurs. Se ref #7 och #8",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
