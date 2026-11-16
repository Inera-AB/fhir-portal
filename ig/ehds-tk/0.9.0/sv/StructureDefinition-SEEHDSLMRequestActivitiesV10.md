# GetRequestActivities 1.0 - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetRequestActivities 1.0 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMRequestActivitiesV10.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMRequestActivitiesV10.csv), [Excel](../StructureDefinition-SEEHDSLMRequestActivitiesV10.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMRequestActivitiesV10",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetRequestActivitiesResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:crm:requeststatus:GetRequestActivitiesResponder:1"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMRequestActivitiesV10",
  "version" : "0.9.0",
  "name" : "SEEHDSLMRequestActivitiesV10",
  "title" : "GetRequestActivities 1.0",
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
  "description" : "Logisk modell för version 1.0 av tjänstekontraktet GetRequestActivities\n(urn:riv:crm:requeststatus:GetRequestActivitiesResponder:1).\nMappningen utgår från versionen i SEEHDSLMRequestActivities. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMRequestActivitiesV10",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMRequestActivitiesV10",
      "path" : "SEEHDSLMRequestActivitiesV10",
      "short" : "GetRequestActivities 1.0",
      "definition" : "Logisk modell för version 1.0 av tjänstekontraktet GetRequestActivities\n(urn:riv:crm:requeststatus:GetRequestActivitiesResponder:1).\nMappningen utgår från versionen i SEEHDSLMRequestActivities. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida."
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity",
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity",
      "short" : "requestActivity",
      "definition" : "requestActivity",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getrequestactivities1-request-id",
        "severity" : "error",
        "human" : "Minst ett av senderRequestId och receiverRequestId ska anges",
        "expression" : "senderRequestId.exists() or receiverRequestId.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMRequestActivitiesV10"
      },
      {
        "key" : "getrequestactivities1-issued-by-unit",
        "severity" : "error",
        "human" : "Minst ett av requestIssuedByOrganizationalUnitId och requestIssuedByOrganizationalUnitDescription ska anges",
        "expression" : "requestIssuedByOrganizationalUnitId.exists() or requestIssuedByOrganizationalUnitDescription.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMRequestActivitiesV10"
      },
      {
        "key" : "getrequestactivities1-receiving-unit",
        "severity" : "error",
        "human" : "Minst ett av receivingOrganizationalUnitId och receivingOrganizationalUnitDescription ska anges",
        "expression" : "receivingOrganizationalUnitId.exists() or receivingOrganizationalUnitDescription.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMRequestActivitiesV10"
      },
      {
        "key" : "getrequestactivities1-status-code",
        "severity" : "error",
        "human" : "typeOfRequest ska vara 1, 2, 4 eller 10 och statusCode ska vara en av de koder som är tillåtna för remisstypen (VER-005)",
        "expression" : "(typeOfRequest.value = '1' and statusCode.value in ('20' | '30' | '90' | '126' | '130' | '136' | '140')) or (typeOfRequest.value = '2' and statusCode.value in ('20' | '30' | '126' | '130' | '136' | '140')) or (typeOfRequest.value = '4' and statusCode.value in ('20' | '30' | '90' | '130' | '140')) or (typeOfRequest.value = '10' and statusCode.value in ('20' | '30' | '90' | '140'))",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMRequestActivitiesV10"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.subjectOfCareId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.subjectOfCareId",
      "short" : "Person eller samordnings-nummer enligt skatteverkets definition 12 tecken",
      "definition" : "Person eller samordnings-nummer enligt skatteverkets definition 12 tecken. Del av instansen unikhet. Personnummer OID: 1.2.752.129.2.1.3.1",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.senderRequestId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.senderRequestId",
      "short" : "Framställarens identitetsbeteckning för framställan",
      "definition" : "Framställarens identitetsbeteckning för framställan. Är Remiss Id. Identifierare som är unik inom källsystemet. Om tomt så måste receiverRequestId vara infylld, alltså båda kan inte vara tomma.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.receiverRequestId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.receiverRequestId",
      "short" : "Mottagarens identitetsbeteckning för framställan Identifierare som är unik inom källsystemet",
      "definition" : "Mottagarens identitetsbeteckning för framställan Identifierare som är unik inom källsystemet. Om tomt så måste senderRequestId vara infylld, alltså båda kan inte vara tomma.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.typeOfRequest",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.typeOfRequest",
      "short" : "Kod som anger vilken typ av framställan som avses",
      "definition" : "Kod som anger vilken typ av framställan som avses. Kodverket saknar nationell förankring. Giltiga värden: 1 = röntgenremiss 2 = labbremiss 4 = allmänremiss 10 = fysiologiremiss\nTillåtna värden enligt XSD: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.requestMedium",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.requestMedium",
      "short" : "Kod och klartext som anger medium för framställan",
      "definition" : "Kod och klartext som anger medium för framställan. KTOV/KV Form av framställan (OID: 1.2.752.129.2.2.2.7). Giltiga värden: 3 = skriftligt elektroniskt 4 = skriftligt papper\nTillåtna värden enligt XSD: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.requestIssuedByPersonName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.requestIssuedByPersonName",
      "short" : "Namn på den person som framställt framställan",
      "definition" : "Namn på den person som framställt framställan.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.requestIssuedByOrganizationalUnitId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.requestIssuedByOrganizationalUnitId",
      "short" : "Identitetsbeteckning för den organisationsenhet inom vars uppdrag som framställan görs",
      "definition" : "Identitetsbeteckning för den organisationsenhet inom vars uppdrag som framställan görs. HSA-id OID 1.2.752.129.2.1.4.1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.requestIssuedByOrganizationalUnitDescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.requestIssuedByOrganizationalUnitDescription",
      "short" : "Beskrivning av enheten",
      "definition" : "Beskrivning av enheten. Format: fritext. Exempel: Närakuten +468 398 72, Solna Torg 3, 171 45 SOLNA. Saknas requestIssuedByOrganizationalUnitId så skrivs information om enheten här.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.receivingPersonName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.receivingPersonName",
      "short" : "Namn på den hälso- och sjukvårdspersonal som mottar framställan Motsvarar HSA ”fullName”",
      "definition" : "Namn på den hälso- och sjukvårdspersonal som mottar framställan Motsvarar HSA ”fullName”.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.receivingOrganizationalUnitId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.receivingOrganizationalUnitId",
      "short" : "Identitetsbeteckning för den enhet inom vars uppdrag som framställan mottages HSA-id OID 1.2.752.129.2.1.4.1",
      "definition" : "Identitetsbeteckning för den enhet inom vars uppdrag som framställan mottages HSA-id OID 1.2.752.129.2.1.4.1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.receivingOrganizationalUnitDescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.receivingOrganizationalUnitDescription",
      "short" : "Beskrivning av enheten",
      "definition" : "Beskrivning av enheten. Format: fritext Exempel: Närakuten +468 398 72, Solna Torg 3, 171 45 SOLNA. Om receivingOrganizationalUnitId saknas skrivs information om enheten här.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.careUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.careUnit",
      "short" : "HSA-id för informationsägande vårdenhet",
      "definition" : "HSA-id för informationsägande vårdenhet. Inre sekretess enligt PDL 4 kap. 4-5 §§ ”vårdenhet”. HSA-id OID 1.2.752.129.2.1.4.1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.logicalSystemId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.logicalSystemId",
      "short" : "Referens till informationskällan",
      "definition" : "Referens till informationskällan. `<Systemets HSA-id>`. Format enligt aktuell identiferare, tex HSA-id OID 1.2.752.129.2.1.4.1",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.statusCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.statusCode",
      "short" : "Anger i vilken status remissen befinner sig i",
      "definition" : "Anger i vilken status remissen befinner sig i. Kodverket saknar nationell förankring. kod=20 namn=Skickad, används av framställantyp (1=Ja, 4=Ja,10=Ja, 2=Ja) kod=30 namn=Mottagen används av framställantyp (1=Ja, 4=Ja, 10=Ja, 2=Ja) kod=90 namn=Bedömd används av framställantyp (1=Ja, 4=Ja, 10= Ja) kod=126 namn=Preliminärsvar skickat används av framställantyp (1=Ja , 2=Ja) kod=130 namn=Svar skickat används av framställantyp (1=Ja, 4=Ja, 2=Ja) kod=136 namn=Preliminärsvar mottaget används av framställantyp (1=Ja , 2=Ja) kod=140 namn=Svar mottaget används av framställantyp (1=Ja, 4=Ja, 10=Ja, 2=Ja)\nTillåtna värden enligt XSD: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 126, 130, 136, 140, 150, 160, 170.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivitiesV10.requestActivity.eventTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:1"
      }],
      "path" : "SEEHDSLMRequestActivitiesV10.requestActivity.eventTime",
      "short" : "Anger tidspunkt när händelsen inträffade",
      "definition" : "Anger tidspunkt när händelsen inträffade.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
