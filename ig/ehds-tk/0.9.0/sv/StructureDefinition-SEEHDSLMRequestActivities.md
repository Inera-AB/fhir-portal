# GetRequestActivities - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetRequestActivities 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMRequestActivities.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMRequestActivities.csv), [Excel](../StructureDefinition-SEEHDSLMRequestActivities.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMRequestActivities",
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
    "valueUri" : "urn:riv:crm:requeststatus:GetRequestActivitiesResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMRequestActivities",
  "version" : "0.9.0",
  "name" : "SEEHDSLMRequestActivities",
  "title" : "GetRequestActivities",
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
  "description" : "Logisk modell för remisstatus och processaktiviteter hämtad via GetRequestActivities (crm:requeststatus v2.0).",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMRequestActivities",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMRequestActivities",
      "path" : "SEEHDSLMRequestActivities",
      "short" : "GetRequestActivities",
      "definition" : "Logisk modell för remisstatus och processaktiviteter hämtad via GetRequestActivities (crm:requeststatus v2.0)."
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity",
      "path" : "SEEHDSLMRequestActivities.requestActivity",
      "short" : "Remisstatus som matchar begäran",
      "definition" : "Remisstatus som matchar begäran",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header",
      "short" : "Innehåller information som är gemensam för remisstatusen som tillgängliggörs, exempelvis information om …",
      "definition" : "Innehåller information som är gemensam för remisstatusen som tillgängliggörs, exempelvis information om vilken hälso- och sjukvårdspersonal som är angiven som författare av en remisstatus samt information om signering.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader",
      "short" : "Information som används för kontroll av åtkomst",
      "definition" : "Information som används för kontroll av åtkomst.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.accountableHealthcareProvider",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.accountableHealthcareProvider",
      "short" : "Id för uppgiftsägande vårdgivare [R11]",
      "definition" : "Id för uppgiftsägande vårdgivare [R11]. I första hand HSA-id, i andra hand organisationsnummer. Om HSA-id används: root sätts till OID för HSA-katalogen (1.2.752.129.2.1.4.1) extension sätts till HSA-id Om organisationsnummer används: root sätts till OID för organisationsnummer (1.2.752.29.4.3) extension sätts till organisationsnumret. Enskild näringsidkare har i rollen som juridisk person sitt personnummer som organisationsnummer. Regel 2.1",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.accountableCareUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.accountableCareUnit",
      "short" : "HSA-id för vårdenheten [R11] där uppgiften är dokumenterad",
      "definition" : "HSA-id för vårdenheten [R11] där uppgiften är dokumenterad. root sätts till OID för HSA-katalogen (1.2.752.129.2.1.4.1) extension sätts till HSA-id Regel 2.1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.originalPatientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.originalPatientId",
      "short" : "Personidentifieraren som den tillgängliggjorda remisstatusen lagrades under då den skapades",
      "definition" : "Personidentifieraren som den tillgängliggjorda remisstatusen lagrades under då den skapades. Detta fält anges endast då det skiljer sig från patientId, exempelvis då patienten tidigare erhållit vård som dokumenterats under ett samordningsnummer för att sedan bli folkbokförd i Sverige och få ett personnummer. root sätts till OID för typ av personidentifierare. För personnummer ska Skatteverkets OID för personnummer (1.2.752.129.2.1.3.1) användas. För samordningsnummer skall Skatteverkets OID för samordningsnummer (1.2.752.129.2.1.3.3) användas. För andra typer av personidentifierare sätts root till aktuell OID. extension sätts till patientens identifierare. Anges med 12 tecken utan avskiljare.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.careProcessId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.careProcessId",
      "short" : "Id för den individanpassade vårdprocess som remisstatusen journalförts inom ramen för",
      "definition" : "Id för den individanpassade vårdprocess som remisstatusen journalförts inom ramen för. Består av ett lokalt genererat UUID. root sätts till UUID extension anges ej",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.lockTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.lockTime",
      "short" : "Ska ej användas!",
      "definition" : "Regel 2.2\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.blockComparisonTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.blockComparisonTime",
      "short" : "Den tidpunkt mot vilken spärrkontroll sker vid åtkomst med syftet sammanhållen journalföring",
      "definition" : "Den tidpunkt mot vilken spärrkontroll sker vid åtkomst med syftet sammanhållen journalföring. Gäller både yttre (mellan vårdgivare) och inre (mellan vårdenheter) spärr. Informationsägaren väljer själv en lämplig tidpunkt, t.ex. tidpunkten då remissen först skickades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.accessControlHeader.approvedForPatient",
      "short" : "Ansvarig vårdpersonals beslut, alternativt verksamhetens policy och regler (men- och sekretessprövning), …",
      "definition" : "Ansvarig vårdpersonals beslut, alternativt verksamhetens policy och regler (men- och sekretessprövning), huruvida remisstatusen får delas till patient för ändamålet patients åtkomst (Individens direktåtkomst). Om remisstatusen beslutas delas sätts värdet till true, i annat fall till false. False innebär att uppgiften inte får delas till patient. Notera att värdet kan, för samma uppgift, förändras med tiden på grund av att rådrumstid har passerats, eller att verksamheten ändrat policy för vad som lämnas ut till patient. I sådana fall skall källsystemet uppdatera engagemangsindex.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.sourceSystemId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.sourceSystemId",
      "short" : "Det källsystem som remisstatusen lagras i",
      "definition" : "Det källsystem som remisstatusen lagras i. root sätts till OID för HSA-katalogen (1.2.752.129.2.1.4.1) extension sätts till källsystemets HSA-id",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.record",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.record",
      "short" : "Information avseende remisstatusen som tillgängliggörs",
      "definition" : "Information avseende remisstatusen som tillgängliggörs.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.record.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.record.rivId",
      "short" : "Identifierare för remisstatus",
      "definition" : "Identifierare för remisstatus. Identifieraren ska vara konsistent och beständig mellan olika majorversioner av ett tjänstekontrakt. Detta för att en tjänstekonsument ska kunna ta bort dubbletter från de tjänsteproducenter som producerar via flera majorversioner. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska även vara konsistent och beständig mellan olika tjänstekontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen. Root sätts till systemHSA-id Extension sätts till id för remissen",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.record.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.record.timestamp",
      "short" : "Den tidpunkt då remisstatusen skapades i tjänsteproducentens källsystem",
      "definition" : "Den tidpunkt då remisstatusen skapades i tjänsteproducentens källsystem.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.author",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.author",
      "short" : "Information avseende dokumentation av remisstatus som tillgängliggörs",
      "definition" : "Information avseende dokumentation av remisstatus som tillgängliggörs. Notera att den som registrerar uppgiften från annan källa, exempelvis en medicinsk sekreterare som transkriberar ett diktat, inte avses.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.author.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.author.rivId",
      "short" : "HSA-id för hälso- och sjukvårdspersonal som dokumenterat remisstatusen som tillgängliggörs",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som dokumenterat remisstatusen som tillgängliggörs. root sätts till OID för HSA-id (1.2.752.129.2.1.4.1) extension sätts till HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.author.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.author.name",
      "short" : "Namn på hälso- och sjukvårdspersonal",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Anges med tilltalsnamn och efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.author.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.author.timestamp",
      "short" : "Tidpunkt då remisstatusen dokumenterades eller senast uppdaterades",
      "definition" : "Tidpunkt då remisstatusen dokumenterades eller senast uppdaterades. I de fall då remisstatusen ursprungligen dokumenterats eller uppdaterats i ett annat informationssystem än tjänsteproducentens källsystem (t.ex. laboratorieinformationssystem), ska tidpunkten spegla informationen från systemet där remisstatusen ursprungligen dokumenterades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.header.author.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.header.author.byRole",
      "short" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid …",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body",
      "short" : "body",
      "definition" : "body",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.statusCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.statusCode",
      "short" : "Angivelse av vilken status remissen befinner sig i",
      "definition" : "Angivelse av vilken status remissen befinner sig i. Anges med Kv status vårdbegäran [R5] OID: 1.2.752.129.2.2.2.43 Kodverket kan komma att kompletteras över tid vilket medför att konsumenter av kontraktet behöver vara förberedda på att nya koder kan tillkomma utan att versionen på kontraktet uppdateras.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.eventTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.eventTime",
      "short" : "Händelsetidpunkt",
      "definition" : "Tidpunkt då en händelse inträffade, dvs när en ändring av remisstatus sker.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request",
      "short" : "Den utfärdade remissen",
      "definition" : "Den utfärdade remissen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.rivId",
      "short" : "Remiss-id",
      "definition" : "Remiss-id. Unik identifierare av remissen. Vid kännedom om remittentens id på remissen ska detta anges för att kunna koppla ihop flera status och följa remissens status-information över tid. I det fall kännedom om remittentens id på remissen saknas ska källsystemets unika id på remissen anges. I det fall remissens id (sträng) består av flera delar, t.ex. enligt formatet ”källsystem-Id(HSA-ID)#lokalt-id” så ska hela strängen anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.type",
      "short" : "Remisstyp",
      "definition" : "Remisstyp. Kod och klartext som anger vilken typ av remiss som avses. Anges med Kv framställantyp [R5] OID: 1.2.752.129.2.2.2.24 Giltiga värden: 1 = röntgenremiss 2 = labbremiss 4 = allmänremiss Exempel: request.type.codesystem = 1.2.752.129.2.2.2.24 request.type.code = 4 request.type.displayName = allmänremiss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.medium",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.medium",
      "short" : "Medium",
      "definition" : "Medium. Kod och klartext som anger medium för remissen. Anges med Kv Form av framställan [R5] OID: 1.2.752.129.2.2.2.7 Giltiga värden: 3 = skriftligt elektroniskt 4 = skriftligt papper Exempel: medium.codesystem = 1.2.752.129.2.2.2.7 medium.code = 3 medium.displayName = skriftligt elektroniskt",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.author",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.author",
      "short" : "Remittent",
      "definition" : "Författare av remissen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.author.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.author.name",
      "short" : "Remittentens namn",
      "definition" : "Remittentens namn",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.author.organization",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.author.organization",
      "short" : "Remitterande enhet",
      "definition" : "Remitterande enhet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.author.organization.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.author.organization.rivId",
      "short" : "Remitterande enhetens id",
      "definition" : "root sätts till OID för HSA-id (1.2.752.129.2.1.4.1) extension sätts till HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.author.organization.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.author.organization.name",
      "short" : "Remitterande enhetens namn",
      "definition" : "Remitterande enhetens namn.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.receivingOrganization",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.receivingOrganization",
      "short" : "Remissmottagande enhet",
      "definition" : "Remissmottagande enhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.receivingOrganization.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.receivingOrganization.rivId",
      "short" : "Remissmottagande enhets id",
      "definition" : "Identitetsbeteckning för den som är angiven mottagare till remissen eller den faktiska mottagaren om detta ändras (om remissen har skickats vidare). root sätts till OID för HSA-id (1.2.752.129.2.1.4.1) extension sätts till HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeCrmRequeststatus2"
      }]
    },
    {
      "id" : "SEEHDSLMRequestActivities.requestActivity.body.request.receivingOrganization.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:crm:requeststatus:2"
      }],
      "path" : "SEEHDSLMRequestActivities.requestActivity.body.request.receivingOrganization.name",
      "short" : "Remissmottagande enhetens namn",
      "definition" : "Remissmottagande enhetens namn.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
