# GetLaboratoryOrderOutcome 4.1 - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetLaboratoryOrderOutcome 4.1 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV41.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV41.csv), [Excel](../StructureDefinition-SEEHDSLMLaboratoryOrderOutcomeV41.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMLaboratoryOrderOutcomeV41",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetLaboratoryOrderOutcomeResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:GetLaboratoryOrderOutcomeResponder:4"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcomeV41",
  "version" : "0.9.0",
  "name" : "SEEHDSLMLaboratoryOrderOutcomeV41",
  "title" : "GetLaboratoryOrderOutcome 4.1",
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
  "description" : "Logisk modell för version 4.1 av tjänstekontraktet GetLaboratoryOrderOutcome\n(urn:riv:clinicalprocess:healthcond:actoutcome:GetLaboratoryOrderOutcomeResponder:4).\nMappningen utgår från versionen i SEEHDSLMLaboratoryOrderOutcome. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcomeV41",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41",
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41",
      "short" : "GetLaboratoryOrderOutcome 4.1",
      "definition" : "Logisk modell för version 4.1 av tjänstekontraktet GetLaboratoryOrderOutcome\n(urn:riv:clinicalprocess:healthcond:actoutcome:GetLaboratoryOrderOutcomeResponder:4).\nMappningen utgår från versionen i SEEHDSLMLaboratoryOrderOutcome. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida."
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome",
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome",
      "short" : "Ett eller flera laboratoriesvar som matchar begäran",
      "definition" : "Ett eller flera laboratoriesvar som matchar begäran.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header",
      "short" : "Innehåller information som är gemensam för uppgifter i patientjournalen som tillgängliggörs, exempelvis …",
      "definition" : "Innehåller information som är gemensam för uppgifter i patientjournalen som tillgängliggörs, exempelvis information om vilken hälso- och sjukvårdspersonal som är angiven som författare av en uppgift samt information om signering.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader",
      "short" : "Information som används för kontroll av åtkomst",
      "definition" : "Information som används för kontroll av åtkomst. Tjänstekonsumenten får enbart ta del av uppgifterna i AccessControlHeaderType innan övrig information om uppgift i patientjournal kan bearbetas.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.accountableCareGiver",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.accountableCareGiver",
      "short" : "Id för uppgiftsägande vårdgivare [R15]",
      "definition" : "Id för uppgiftsägande vårdgivare [R15]. I första hand HSA-id, i andra hand organisationsnummer. Om HSA-id används: root sätts till OID för HSA-katalogen (1.2.752.129.2.1.4.1) extension sätts till HSA-id Om organisationsnummer används: root sätts till OID för organisationsnummer (1.2.752.29.4.3) extension sätts till organisationsnumret. Enskild näringsidkare har i rollen som juridisk person sitt personnummer som organisationsnummer.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.accountableCareUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.accountableCareUnit",
      "short" : "HSA-id för vårdenheten [R15] där uppgiften är dokumenterad",
      "definition" : "HSA-id för vårdenheten [R15] där uppgiften är dokumenterad. root sätts till OID för HSA-katalogen (1.2.752.129.2.1.4.1) extension sätts till HSA-id",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.originalPatientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.originalPatientId",
      "short" : "Personidentifieraren som den tillgängliggjorda uppgiften lagrades under då den skapades",
      "definition" : "Personidentifieraren som den tillgängliggjorda uppgiften lagrades under då den skapades. Detta fält anges endast då det skiljer sig från patientId, exempelvis då patienten tidigare erhållit vård som dokumenterats under ett samordningsnummer för att sedan bli folkbokförd i Sverige och få ett personnummer. root sätts till OID för typ av personidentifierare. För personnummer ska Skatteverkets OID för personnummer (1.2.752.129.2.1.3.1) användas. För samordningsnummer skall Skatteverkets OID för samordningsnummer (1.2.752.129.2.1.3.3) användas. För andra typer av personidentifierare sätts root till aktuell OID. extension sätts till patientens identifierare. Anges med 12 tecken utan avskiljare.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.careProcessId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.careProcessId",
      "short" : "Id för den individanpassade vårdprocess som uppgiften journalförts inom ramen för",
      "definition" : "Id för den individanpassade vårdprocess som uppgiften journalförts inom ramen för. Består av ett lokalt genererat UUID.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.lockTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.lockTime",
      "short" : "lockTime",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.blockComparisonTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.blockComparisonTime",
      "short" : "Den tidpunkt mot vilken spärrkontroll sker vid åtkomst med syftet sammanhållen journalföring",
      "definition" : "Den tidpunkt mot vilken spärrkontroll sker vid åtkomst med syftet sammanhållen journalföring. Gäller både yttre (mellan vårdgivare) och inre (mellan vårdenheter) spärr. I detta fält anges provtagningstidpunkt. Om ett svar innehåller analyser utförda på olika prov anges tidpunkt för det senast tagna provet.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.approvedForPatient",
      "short" : "Ansvarig vårdpersonals beslut, alternativt verksamhetens policy och regler (men- och sekretessprövning), …",
      "definition" : "Ansvarig vårdpersonals beslut, alternativt verksamhetens policy och regler (men- och sekretessprövning), huruvida uppgiften får delas till patient för ändamålet patients åtkomst (Individens direktåtkomst). Om uppgiften beslutas delas sätts värdet till true, i annat fall till false. False innebär att uppgiften inte får delas till patient. Notera att värdet kan, för samma uppgift, förändras med tiden på grund av att rådrumstid har passerats, eller att verksamheten ändrat policy för vad som lämnas ut till patient. I sådana fall skall källsystemet uppdatera engagemangsindex.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4.1"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.accessControlHeader.patientId",
      "short" : "Personidentifierare för patienten",
      "definition" : "Personidentifierare för patienten. root sätts till OID för typ av personidentifierare. För personnummer ska Skatteverkets OID för personnummer (1.2.752.129.2.1.3.1) användas. För samordningsnummer skall Skatteverkets OID för samordningsnummer (1.2.752.129.2.1.3.3) användas. För andra typer av personidentifierare sätts root till aktuell OID. extension sätts till patientens identifierare. Anges med 12 tecken utan avskiljare. Obligatorisk vid nyanslutning",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.sourceSystemId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.sourceSystemId",
      "short" : "Det källsystem som uppgiften lagras i",
      "definition" : "Det källsystem som uppgiften lagras i. root sätts till OID för HSA-katalogen (1.2.752.129.2.1.4.1) extension sätts till källsystemets HSA-id",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.record",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.record",
      "short" : "Information avseende uppgiften som tillgängliggörs",
      "definition" : "Information avseende uppgiften som tillgängliggörs.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.record.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.record.rivId",
      "short" : "Identifierare för uppgift i patientjournal",
      "definition" : "Identifierare för uppgift i patientjournal. Identifieraren ska vara konsistent och beständig mellan olika majorversioner av ett tjänstekontrakt. Detta för att en tjänstekonsument ska kunna ta bort dubbletter från de tjänsteproducenter som producerar via flera majorversioner. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska även vara konsistent och beständig mellan olika tjänstekontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen. Motsvarar Laboratoriesvar.id i informationsspecifikationen [R6]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.record.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.record.timestamp",
      "short" : "Den tidpunkt då uppgiften skapades i tjänsteproducentens källsystem",
      "definition" : "Den tidpunkt då uppgiften skapades i tjänsteproducentens källsystem. Motsvarar Laboratoriesvar.svarstidpunkt i informationsspecifikationen [R6]\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author",
      "short" : "Information avseende dokumentation av uppgiften som tillgängliggörs",
      "definition" : "Information avseende dokumentation av uppgiften som tillgängliggörs. Notera att den som registrerar uppgiften från annan källa, exempelvis en medicinsk sekreterare som transkriberar ett diktat, inte avses.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.rivId",
      "short" : "HSA-id för hälso- och sjukvårdspersonal som dokumenterat uppgiften som tillgängliggörs",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som dokumenterat uppgiften som tillgängliggörs. root sätts till OID för HSA-id (1.2.752.129.2.1.4.1) extension sätts till HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.name",
      "short" : "Namn på hälso- och sjukvårdspersonal",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Anges med tilltalsnamn och efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.timestamp",
      "short" : "Tidpunkt då uppgiften dokumenterades eller senast uppdaterades",
      "definition" : "Tidpunkt då uppgiften dokumenterades eller senast uppdaterades. I de fall då uppgiften ursprungligen dokumenterats eller uppdaterats i ett annat informationssystem än tjänsteproducentens källsystem (t.ex. laboratorieinformationssystem), ska tidpunkten spegla informationen från systemet där uppgiften ursprungligen dokumenterades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.byRole",
      "short" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid …",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4.1"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.orgUnit",
      "short" : "Den organisation som hälso- och sjukvårdspersonalen är uppdragstagare på",
      "definition" : "Den organisation som hälso- och sjukvårdspersonalen är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.orgUnit.rivId",
      "short" : "Id för organisationsenheten där vårdpersonen verkat på uppdrag av",
      "definition" : "Id för organisationsenheten där vårdpersonen verkat på uppdrag av. Om tillgängligt skall HSAid anges. Notera att det är den verksamhet där utrustningen använts som avses, inte utrustningens ägare. I de fall HSAid saknas kan ett för källsystemet unikt id användas varvid fältet root sätts till källsystemets HSAid och fältet extions sätts till lokalt id i källsystemet. Om HSAid används sätts fältet root till OID för HSA-katalogen (1.2.752.129.2.1.4.1) och fältet extension sätts till HSAid. Om organisationsnummer används skall fältet root sättas till OID för Skatteverkets organisationsnummer (2.5.4.97) och fältet extension sättas till organisationsnumret.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.author.orgUnit.name",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt skall detta anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature",
      "short" : "Information avseende signering av laboratoriesvaret",
      "definition" : "Information avseende signering av laboratoriesvaret. Laboratoriesvaret signeras av en medicinskt ansvarig hälso- och sjukvårdspersonal på den ansvariga enheten. Den ansvariga enheten kan vara den remissmottagande enheten eller den utförande enheten (exempelvis vid patientnära analyser).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.rivId",
      "short" : "HSA-id för hälso- och sjukvårdspersonal som signerat uppgiften som tillgängliggörs",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som signerat uppgiften som tillgängliggörs. root sätts till OID för HSA-id (1.2.752.129.2.1.4.1) extension sätts till HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.name",
      "short" : "Namn på hälso- och sjukvårdspersonal",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Anges med tilltalsnamn och efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.timestamp",
      "short" : "Tidpunkt då uppgiften signerades",
      "definition" : "Tidpunkt då uppgiften signerades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.byRole",
      "short" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid …",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid signeringstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning i klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4.1"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.orgUnit",
      "short" : "Anges ej för Signature",
      "definition" : "Anges ej för Signature",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.orgUnit.rivId",
      "short" : "Id för organisationsenheten där vårdpersonen verkat på uppdrag av",
      "definition" : "Id för organisationsenheten där vårdpersonen verkat på uppdrag av. Om tillgängligt skall HSAid anges. Notera att det är den verksamhet där utrustningen använts som avses, inte utrustningens ägare. I de fall HSAid saknas kan ett för källsystemet unikt id användas varvid fältet root sätts till källsystemets HSAid och fältet extions sätts till lokalt id i källsystemet. Om HSAid används sätts fältet root till OID för HSA-katalogen (1.2.752.129.2.1.4.1) och fältet extension sätts till HSAid. Om organisationsnummer används skall fältet root sättas till OID för Skatteverkets organisationsnummer (2.5.4.97) och fältet extension sättas till organisationsnumret.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.header.signature.orgUnit.name",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt skall detta anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body",
      "short" : "Information om laboratoriesvaret",
      "definition" : "Information om laboratoriesvaret.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.identifier",
      "short" : "Angivelse av identitetsbeteckning för laboratoriesvaret",
      "definition" : "Angivelse av identitetsbeteckning för laboratoriesvaret.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.laboratoryIdentifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.laboratoryIdentifier",
      "short" : "Angivelse av identitetsbeteckning för laboratoriets arbetsorder",
      "definition" : "Angivelse av identitetsbeteckning för laboratoriets arbetsorder. Benämns även som LID.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.type",
      "short" : "Kod för typ av laboratoriesvar",
      "definition" : "Kod för typ av laboratoriesvar. code: En av koderna final, partial eller preliminary codeSystem: 2.16.840.1.113883.4.642.3.235 displayName: Klartext motsvarande den använda koden, final, partial eller preliminary",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.text",
      "short" : "Angivelse av utlåtande eller kommentar som gäller hela laboratoriesvaret",
      "definition" : "Angivelse av utlåtande eller kommentar som gäller hela laboratoriesvaret.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral",
      "short" : "Den remiss som ligger till grund för svaret",
      "definition" : "Den remiss som ligger till grund för svaret. Tjänstekonsument som behöver mer information om beställningen använder sig av identifier och logicalAddres och hämtar remiss med hjälp av interaktion ur domänen Remisshantering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.identifier",
      "short" : "Angivelse av identitetsbeteckning för remissen",
      "definition" : "Angivelse av identitetsbeteckning för remissen. root: logisk adress extension: remissens id, även kallad RID",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.timestamp",
      "short" : "Tidsangivelse för när remiss skapats",
      "definition" : "Tidsangivelse för när remiss skapats.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.version",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.version",
      "short" : "Version av remiss",
      "definition" : "Version av remiss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.question",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.question",
      "short" : "Remissens frågeställning",
      "definition" : "Remissens frågeställning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requestedCareService",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requestedCareService",
      "short" : "Kod för efterfrågad tjänst från utbudskatalog",
      "definition" : "Kod för efterfrågad tjänst från utbudskatalog. Om kod ej kan anges kan datatypens attribut originalText användas för en fritextrepresentation.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester",
      "short" : "Hälso- och sjukvårdspersonal som skrivit remiss",
      "definition" : "Hälso- och sjukvårdspersonal som skrivit remiss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.rivId",
      "short" : "HSA-id för hälso- och sjukvårdspersonal",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal. root sätts till OID för HSA-id (1.2.752.129.2.1.4.1) extension sätts till HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.name",
      "short" : "Namn på hälso- och sjukvårdspersonal",
      "definition" : "Namn på hälso- och sjukvårdspersonal",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.byRole",
      "short" : "Information om hälso- och sjukvårdspersonalens befattning",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning. Om möjligt skall kod från HSA:s kodverk Befattning (OID: 1.2.752.129.2.2.1.4) [R3] användas för att ange personens befattning så som den var angiven i HSA-katalogen vid tidpunkten. Om kod inte är tillgänglig anges befattning i klartext i CV-typens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.orgUnit",
      "short" : "Den organisation som remittenten är uppdragstagare på",
      "definition" : "Den organisation som remittenten är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.orgUnit.rivId",
      "short" : "Id för organisationsenheten där vårdpersonen verkat på uppdrag av",
      "definition" : "Id för organisationsenheten där vårdpersonen verkat på uppdrag av. Om tillgängligt skall HSAid anges. Notera att det är den verksamhet där utrustningen använts som avses, inte utrustningens ägare. I de fall HSAid saknas kan ett för källsystemet unikt id användas varvid fältet root sätts till källsystemets HSAid och fältet extions sätts till lokalt id i källsystemet. Om HSAid används sätts fältet root till OID för HSA-katalogen (1.2.752.129.2.1.4.1) och fältet extension sätts till HSAid. Om organisationsnummer används skall fältet root sättas till OID för Skatteverkets organisationsnummer (2.5.4.97) och fältet extension sättas till organisationsnumret.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.referral.requester.orgUnit.name",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt skall detta anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses",
      "short" : "Grupperar ett antal analyser som utförs på ett eller flera prov från samma provgivare och som man väljer att …",
      "definition" : "Grupperar ett antal analyser som utförs på ett eller flera prov från samma provgivare och som man väljer att betrakta som en enhet. Detta är en möjlighet för ett laboratorium att för ett givet svar kommentera en egen vald mängd analyser med en gemensam gruppkommentar. En grupp som endast innehåller en enda analys utan angivelse av name eller code ska tolkas som att analysen inte är grupperad. Det är inte tillåtet att ha en grupp med flera analyser utan att ange attributet name eller code.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.name",
      "short" : "Namn eller benämning för hela analysgruppen",
      "definition" : "Namn eller benämning för hela analysgruppen. Obligatorisk om attributet comment anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.comment",
      "short" : "Kommentar för hela analysgruppen",
      "definition" : "Kommentar för hela analysgruppen. Om en kommentar anges ska även attributet namn anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.code",
      "short" : "Listkoder (NPU) som fungerar som en rubrik-kod för de ingående analyserna",
      "definition" : "Listkoder (NPU) som fungerar som en rubrik-kod för de ingående analyserna. code.codeSystem: 1.2.752.108.1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis",
      "short" : "Utförd analys",
      "definition" : "Utförd analys.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.identifier",
      "short" : "Id för utförd analys",
      "definition" : "Id för utförd analys.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.timestamp",
      "short" : "Den tidpunkt då analysen utfördes",
      "definition" : "Den tidpunkt då analysen utfördes.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.code",
      "short" : "Kod (NPU) för den typ av analys som utförts",
      "definition" : "Kod (NPU) för den typ av analys som utförts. code.code: Kod från “Urval analyskoder laboratoriemedicin” (se [R10]) code.codeSystem: 1.2.752.108.1 Om kod ej kan anges kan datatypens attribut originalText användas för en fritextrepresentation.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.method",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.method",
      "short" : "Kod (SNOMED-CT-SE) för den typ av tillvägagångssätt för utförandet av analysen som avses",
      "definition" : "Kod (SNOMED-CT-SE) för den typ av tillvägagångssätt för utförandet av analysen som avses. code.code: Kod från Urval analysmetod laboratoriemedicin ( se [R10]) code.codeSystem: 1.2.752.116.2.1.1 Om kod ej kan anges kan datatypens attribut originalText användas för en fritextrepresentation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.status",
      "short" : "Kod (SNOMED-CT-SE) för analysens status",
      "definition" : "Kod (SNOMED-CT-SE) för analysens status. code.code: Kod från Urval analysstatus laboratoriemedicin (se [R10]) code.codeSystem: 1.2.752.116.2.1.1 Om status utelämnas ska detta tolkas som att analysen är slutförd. Fritextalternativ kan ej anges i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.comment",
      "short" : "Kommentar för enskild analys, exempelvis att svaret inte får användas för biobanksinfo",
      "definition" : "Kommentar för enskild analys, exempelvis att svaret inte får användas för biobanksinfo.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.accredited",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.accredited",
      "short" : "Om analysen är ackrediterad sätts fältet till true",
      "definition" : "Om analysen är ackrediterad sätts fältet till true. Om analysen inte är ackrediterad sätts fältet till false. Om analysens ackrediteringsstatus är okänd utelämnas elementet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen",
      "short" : "Information om ett prov",
      "definition" : "Information om ett prov.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.identifier",
      "short" : "Identitetsbeteckning för ett prov",
      "definition" : "Identitetsbeteckning för ett prov.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.material",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.material",
      "short" : "Kod (SNOMED-CT-SE) för typ av provmaterial",
      "definition" : "Kod (SNOMED-CT-SE) för typ av provmaterial. Koden för provmaterial kan även innefatta information om provtagningsmetod. code: Kod från Urval provtyp laboratoriemedicin (se [R10]) codeSystem: 1.2.752.116.2.1.1 Om kodad representation av provmaterialtyp från nationellt urval saknas kan datatypens attribut originalText användas för en fritextrepresentation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.timestamp",
      "short" : "Angivelse av den tidpunkt då ett prov är taget",
      "definition" : "Angivelse av den tidpunkt då ett prov är taget.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.anatomicalLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.anatomicalLocation",
      "short" : "Kod (SNOMED-CT-SE) som anger var provet är taget",
      "definition" : "Kod (SNOMED-CT-SE) som anger var provet är taget. Exempel: höger arm, vänster njure. code: Kod från Urval anatomisk lokalisation laboratoriemedicin (se [R10]) codeSystem: 1.2.752.116.2.1.1 Om kodad representation av lokalisation från nationellt urval saknas används endast CV-attributet originalText för att ange textuellt alternativ.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.comment",
      "short" : "Angivelse av kommentar om enskilt prov",
      "definition" : "Angivelse av kommentar om enskilt prov.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity",
      "short" : "Håller information om aktiviteter relaterade till hantering av prov",
      "definition" : "Håller information om aktiviteter relaterade till hantering av prov. Inkluderar även t.ex. aktiviteter i samband med transport, frysning, förvaring, bearbetning och delning i sekundärprov.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.code",
      "short" : "Kod (SNOMED-CT-SE) för provrelaterad aktivitet",
      "definition" : "Kod (SNOMED-CT-SE) för provrelaterad aktivitet. code: Kod från SNOMED-CT-SE codeSystem: 1.2.752.116.2.1.1",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.time",
      "short" : "Angivelse av tid eller tidsintervall då den provrelaterade aktiviteten utfördes",
      "definition" : "Angivelse av tid eller tidsintervall då den provrelaterade aktiviteten utfördes.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.method",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.method",
      "short" : "Kod (SNOMED-CT-SE) för metod för provrelaterad aktivitet",
      "definition" : "Kod (SNOMED-CT-SE) för metod för provrelaterad aktivitet. code: Kod från SNOMED-CT-SE codeSystem: 1.2.752.116.2.1.1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container",
      "short" : "Information om den eller de provbehållare som provet förvaras i",
      "definition" : "Information om den eller de provbehållare som provet förvaras i.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container.identifier",
      "short" : "Identitetsbeteckning för en provbehållare",
      "definition" : "Identitetsbeteckning för en provbehållare.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container.type",
      "short" : "Kod (SNOMED-CT-SE) för typ av provbehållare",
      "definition" : "Kod (SNOMED-CT-SE) för typ av provbehållare. code: Kod från Urval provbehållare laboratoriemedicin ( se [R10]) codeSystem: 1.2.752.116.2.1.1 Om kod saknas anges typ av provbehållare i orginalText Om typ av provbehållartyp är okänd anges ”ospecificerad” i attributet originalText",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.device",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.device",
      "short" : "Information om den utrustning som använts för att utföra en analys",
      "definition" : "Information om den utrustning som använts för att utföra en analys.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.device.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.device.identifier",
      "short" : "Identitetsbeteckningen för en analysutrustning",
      "definition" : "Identitetsbeteckningen för en analysutrustning.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result",
      "short" : "Klassen Laboratorieanalysresultat håller information om resultat av en utförd analys",
      "definition" : "Klassen Laboratorieanalysresultat håller information om resultat av en utförd analys. Detta resultat kan exempelvis bestå av ett mätvärde inom laboratoriedisciplinen kemi, ett fynd av en viss bakterieart eller en textuell beskrivning av analysresultatet. Utöver detta kan en kommentar avseende analysresultatet anges separat.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.type",
      "short" : "Kod för typ av laboratorieanalysresultat",
      "definition" : "Kod för typ av laboratorieanalysresultat. code: Enligt urval från tillämpningsanvisning codeSystem: 1.2.752.116.2.1.1 (om Snomed CT) eller 1.2.752.108.1 (om NPU-kod)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value",
      "short" : "Angivelse av utfall av en utförd analys angiven med en och endast en av datatyperna: Physical Quantity (PQ) I …",
      "definition" : "Angivelse av utfall av en utförd analys angiven med en och endast en av datatyperna: Physical Quantity (PQ) I PQ.value anges ett numeriskt värde I PQ.unit anges en måttenhet enligt referens [R10]. Intervall av Physical Quantity `IVL<PQ>` `IVL<PQ>`.low Det numeriska värdet som utgör den lägre delen av intervallet `IVL<PQ>`.lowClosed Angivelse av om värdet är en del av intervallet eller ej. Exempel: lowClosed = true och low = 5 motsvarar intervallet ≥ 5 lowClosed = false och low = 5 motsvarar intervallet > 5 `IVL<PQ>`.high Det numeriska värdet som utgör den högre delen av intervallet `IVL<PQ>`.highClosed Exempel: highClosed = true och high = 10 motsvarar intervallet ≤ 10 highClosed = false och high = 10 motsvarar intervallet < 10 Sträng ST Textuellt resultat Kodat värde CV Kodat värde",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getlaboratoryorderoutcome-value-choice",
        "severity" : "error",
        "human" : "En och endast en av cv, pq, intervalPQ och st ska anges",
        "expression" : "cv.combine(pq).combine(intervalPQ).combine(st).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcomeV41"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.cv",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.cv",
      "short" : "cv",
      "definition" : "cv",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.pq",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.pq",
      "short" : "pq",
      "definition" : "pq",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.intervalPQ",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.intervalPQ",
      "short" : "intervalPQ",
      "definition" : "intervalPQ",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.st",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.st",
      "short" : "st",
      "definition" : "st",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.comment",
      "short" : "Angivelse av kommentar som rör laboratorieanalysresultatet",
      "definition" : "Angivelse av kommentar som rör laboratorieanalysresultatet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.interpretation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.interpretation",
      "short" : "Kod (SNOMED-CT-SE) för en tolkning av laboratorieanalysresultatet",
      "definition" : "Kod (SNOMED-CT-SE) för en tolkning av laboratorieanalysresultatet. code: Kod från Urval tolkning resultat laboratoriemedicin ( se [R10])) codeSystem: 1.2.752.116.2.1.1 En sådan tolkning kan vara att analysresultatet ligger utanför aktuellt referensintervall, vilket även benämns som patologisk markör. Om kod ej kan anges används CV-typens attribut originalText som fritextalternativ.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference",
      "short" : "Information om vilket referensintervall eller referensvärde som gäller för ett resultat",
      "definition" : "Information om vilket referensintervall eller referensvärde som gäller för ett resultat.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getlaboratoryorderoutcome-reference-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av interval och description ska anges",
        "expression" : "interval.exists() xor description.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcomeV41"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.interval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.interval",
      "short" : "Angivelse av referensintervall som numeriskt värde av mätvärden",
      "definition" : "Angivelse av referensintervall som numeriskt värde av mätvärden. Ett referensvärde anges genom att antingen ange ett intervall från det lägre värdet 0 till det högre värdet som sätts till referensvärdet, alternativt från referensvärde som start på intervallet utan angivelse av intervallets slut för att ange att normalvärde ligger över referensvärdet. För att ange om det lägre eller högre värdet är inkluderat i intervallet sätts lowClosed/highClosed till true. Exempel: <= 40 high = 40 highClosed = true Exempel: 10 > < 40 low = 10 high = 40 Ett och endast ett av attributen intervall eller text ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.description",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.description",
      "short" : "Textuell beskrivning av referensintervall",
      "definition" : "Textuell beskrivning av referensintervall. Ett och endast ett av attributen intervall eller text ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.population",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.population",
      "short" : "Angivelse av den referenspopulation som ligger till grund för angivet referensintervall",
      "definition" : "Angivelse av den referenspopulation som ligger till grund för angivet referensintervall.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.comment",
      "short" : "Angivelse av kommentar för det angivna referensintervallet",
      "definition" : "Angivelse av kommentar för det angivna referensintervallet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature",
      "short" : "Information avseende signering av en enskild analys",
      "definition" : "Information avseende signering av en enskild analys. Analysen signeras av hälso- och sjukvårdspersonal på den remissvarsmottagande enheten när den förs in i patientjournalen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.rivId",
      "short" : "root: 1.2.752.129.2.1.4.1",
      "definition" : "extension: HSA-id för hälso- och sjukvårdspersonal",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.name",
      "short" : "Namn på hälso- och sjukvårdspersonal",
      "definition" : "Namn på hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.timestamp",
      "short" : "Tidpunkt för signering",
      "definition" : "Tidpunkt för signering.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.byRole",
      "short" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid …",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature",
      "short" : "Information avseende signering av en enskild analys",
      "definition" : "Information avseende signering av en enskild analys. Analysen signeras av den hälso- och sjukvårdspersonal som utför analysen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.rivId",
      "short" : "root: 1.2.752.129.2.1.4.1",
      "definition" : "extension: HSA-id för hälso- och sjukvårdspersonal",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.name",
      "short" : "Namn på hälso- och sjukvårdspersonal",
      "definition" : "Namn på hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.timestamp",
      "short" : "Tidpunkt då signering genomfördes",
      "definition" : "Tidpunkt då signering genomfördes.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.byRole",
      "short" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid …",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.related",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.related",
      "short" : "Relaterade analyser",
      "definition" : "Relaterade analyser",
      "min" : 0,
      "max" : "*",
      "contentReference" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcomeV41#SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.groupOfAnalyses.analysis"
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientUnit",
      "short" : "Mottagande enhet",
      "definition" : "Mottagande enhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientUnit.rivId",
      "short" : "Identitet för mottagande enhet",
      "definition" : "Identitet för mottagande enhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientUnit.name",
      "short" : "Namn på mottagande enhet",
      "definition" : "Namn på mottagande enhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientSignature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientSignature",
      "short" : "Information avseende signering av laboratoriesvaret",
      "definition" : "Information avseende signering av laboratoriesvaret. Laboratoriesvaret signeras av hälso- och sjukvårdspersonal på den remissvarsmottagande enheten när det förs in i patientjournalen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientSignature.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientSignature.rivId",
      "short" : "root: 1.2.752.129.2.1.4.1",
      "definition" : "extension: HSA-id för hälso- och sjukvårdspersonal",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientSignature.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientSignature.name",
      "short" : "Namn på hälso- och sjukvårdspersonal",
      "definition" : "Namn på hälso- och sjukvårdspersonal",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientSignature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientSignature.timestamp",
      "short" : "Tidpunkt för signering",
      "definition" : "Tidpunkt för signering.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientSignature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.recipientSignature.byRole",
      "short" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid …",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.contactInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.contactInformation",
      "short" : "Information om var eller till vem vården kan vända sig vid frågor om laboratoriesvaret",
      "definition" : "Information om var eller till vem vården kan vända sig vid frågor om laboratoriesvaret.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.contactInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcomeV41.laboratoryOrderOutcome.body.contactInformation.text",
      "short" : "Textuell beskrivning av kontaktinformation",
      "definition" : "Textuell beskrivning av kontaktinformation. Det kan t.ex. vara telefonnummer och öppettider till en kundtjänst, ett namn på en kontaktperson.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
