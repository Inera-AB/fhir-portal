# GetAlertInformation 3.0 - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetAlertInformation 3.0 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMAlertInformationV30.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMAlertInformationV30.csv), [Excel](../StructureDefinition-SEEHDSLMAlertInformationV30.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMAlertInformationV30",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetAlertInformationResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:description:GetAlertInformationResponder:3"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformationV30",
  "version" : "0.9.0",
  "name" : "SEEHDSLMAlertInformationV30",
  "title" : "GetAlertInformation 3.0",
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
  "description" : "Logisk modell för version 3.0 av tjänstekontraktet GetAlertInformation\n(urn:riv:clinicalprocess:healthcond:description:GetAlertInformationResponder:3).\nMappningen utgår från versionen i SEEHDSLMAlertInformation. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformationV30",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMAlertInformationV30",
      "path" : "SEEHDSLMAlertInformationV30",
      "short" : "GetAlertInformation 3.0",
      "definition" : "Logisk modell för version 3.0 av tjänstekontraktet GetAlertInformation\n(urn:riv:clinicalprocess:healthcond:description:GetAlertInformationResponder:3).\nMappningen utgår från versionen i SEEHDSLMAlertInformation. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida."
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation",
      "short" : "Den uppmärksamhetsinformation som matchar begäran",
      "definition" : "Den uppmärksamhetsinformation som matchar begäran.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header",
      "short" : "JoL-header",
      "definition" : "JoL-header. Innehåller metainformation som är gemensam för patientjournalinformation, exempelvis uppgift om vilken hälso- och sjukvårdspersonal som är angiven som författare av informationen och information om signering.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader",
      "short" : "Information för kontroll av åtkomst",
      "definition" : "Information för kontroll av åtkomst. Syftet med denna del av headern är att den ska innehålla den information som behövs för konsumentens filtrering av informationen innan den visas upp för slutanvändaren eller på annat vis behandlas vidare, exempelvis för kontroll av spärrar (avseende vårdpersonals åtkomst till information; PDL) eller om informationen får visas för patienten eller inte (verksamhetens rätt till rådrum och menprövning). En konsument (en konsumerande tjänst/applikation) har inte rätt att ta del av något annat än innehållet i accessControlHeader innan de för ändamålet nödvändiga säkerhetskontrollerna har utförts.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.accountableHealthcareProvider",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.accountableHealthcareProvider",
      "short" : "Id för informationsägande vårdgivare",
      "definition" : "Id för informationsägande vårdgivare. I första hand HSAid alternativt i andra hand organisationsnummer. Om HSA-id används sätts fältet root till oid för HSA-katalogen (1.2.752.129.2.1.4.1) och fältet extension sätts till HSA-id. Om organisationsnummer används skall fältet root sättas till OID för organisationsnummer (1.2.752.29.4.3) och fältet extension sättas till organisationsnumret. Enskild näringsidkare har i rollen som juridisk person sitt personnummer som organisationsnummer. Se även regel Spärrhantering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.accountableCareUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.accountableCareUnit",
      "short" : "Id för informationsägande vårdenhet angivet med HSA-id",
      "definition" : "Id för informationsägande vårdenhet angivet med HSA-id. Fältet root sätts OID för HSA-katalogen (1.2.752.129.2.1.4.1) och fältet extension sätts till HSA-id. Fältet används för spärrkontroll och är obligatorisk om uppgiften i patientjournal ska kunna ses via sammanhållen journalföring. Se även regel Spärrhantering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.patientId",
      "short" : "Patientens identitetsbeteckning",
      "definition" : "Patientens identitetsbeteckning. Den identitetsbeteckning som denna uppgift lagrades under när uppgiften skapades ska om möjligt anges. Exempel på en situation då detta förekommer är exempelvis då patienten tidigare erhållit vård dokumenterat under ett samordningsnummer för att sedan bli folkbokförd i Sverige och få ett personnummer. Fältet root sätts till OID för kodverket för identifieraren: 1) För personnummer skall Skatteverkets OID för personnummer (1.2.752.129.2.1.3.1) användas. 2) För samordningsnummer skall Skatteverkets OID för samordningsnummer (1.2.752.129.2.1.3.3) användas. Fältet extension sätts till patientens identifierare. Anges med 12 tecken utan avskiljare.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.careProcessId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.careProcessId",
      "short" : "Id för den individanpassad vårdprocess som informationen journalförts inom ramen för",
      "definition" : "Id för den individanpassad vårdprocess som informationen journalförts inom ramen för. Består av ett lokalt genererat UUID. UUID anges i root och extension lämnas tomt.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.blockComparisonTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.blockComparisonTime",
      "short" : "Den tidpunkt mot vilken spärrkontroll sker vid åtkomst med syftet sammanhållen journalföring för kontroll av …",
      "definition" : "Den tidpunkt mot vilken spärrkontroll sker vid åtkomst med syftet sammanhållen journalföring för kontroll av patientens (ev.) spärrade information, såväl yttre (mellan vårdgivare) som inre (mellan vårdenheter) spärr. Vad som sätts i blockComparisonTime beror på vilken typ av uppmärksamhetsinformation som anges enligt följande: Hypersensitivity body/hypersensitivity/time/ timestamp eller body/hypersensitivity/time/ timePeriod/start activity body/activity/time/timestamp eller body/activity/time/timePeriod/start condition body/condition/time/timestamp eller body/condition/time/timePeriod/start decisionNonstandardCareProcedure body/decisionNonstandard CareProcedure/time/timestamp informationNonstandardCareProcedure body/informationNonstandard CareProcedure/time/timestamp eller body/informationNonstandard CareProcedure/time/timePeriod/start Contagion body/contagion/time/timestamp eller body/contagion/time/timePeriod/start unstructuredAlertInformation header/record/timestamp\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.accessControlHeader.approvedForPatient",
      "short" : "Ansvarig vårdpersonals beslut, alternativt baserat på verksamhetens policy och regler …",
      "definition" : "Ansvarig vårdpersonals beslut, alternativt baserat på verksamhetens policy och regler (men-/sekretessprövning), huruvida informationen får delas till patient för ändamålet Patients åtkomst (Individens direktåtkomst). Om information beslutas delas sätts värdet i sådant fall till true, i annat fall till false. False innebär att informationen inte får delas till patient. Notera att flaggans värde kan, för samma information, förändras med tiden på grund av att rådrumstid har passerats, eller att verksamheten ändrat policy för vad som lämnas ut till patient. I sådana fall skall källsystemet uppdatera engagemangsindex för att konsumenter skall kunna bli notifierade därom.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.sourceSystemId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.sourceSystemId",
      "short" : "Det källsystem som informationen lagras i",
      "definition" : "Det källsystem som informationen lagras i. Fältet root sätts till OID för HSA-katalogen (1.2.752.129.2.1.4.1) och fältet extension sätts till källsystemets HSA-id.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.record",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.record",
      "short" : "Uppgift i patientjournal",
      "definition" : "Metainformation avseende den dokumenterade informationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.record.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.record.rivId",
      "short" : "Unik och beständig identifierare för uppgift i patientjournal",
      "definition" : "Unik och beständig identifierare för uppgift i patientjournal. För att vara konsistent och beständig med tidigare majorversionen av GetAlertInformation ska endast root anges på samma sätt som documentId i tidigare majorversioner.Extension utelämnas. Identifieraren ska vara konsistent och beständigt mellan olika kontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen. Se även regel Verify unique recordId.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.record.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.record.timestamp",
      "short" : "Första tidpunkten då denna journalinformation skapades hos tjänsteproducenten",
      "definition" : "Första tidpunkten då denna journalinformation skapades hos tjänsteproducenten.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author",
      "short" : "Hälso- och sjukvårdspersonal som ansvarar för information i patientjournal",
      "definition" : "Hälso- och sjukvårdspersonal som ansvarar för information i patientjournal. Notera att den som registrerar informationen från annan källa, exempelvis en medicinsk sekreterare som transkriberar ett diktat, inte är författare.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.rivId",
      "short" : "HSA-id för hälso- och sjukvårdspersonal",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal. Fältet root sätts till oid för HSA-id (1.2.752.129.2.1.4.1) och fältet extension sätts till HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.name",
      "short" : "Namn på hälso- och sjukvårdspersonal",
      "definition" : "Namn på hälso- och sjukvårdspersonal",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.timestamp",
      "short" : "Tidpunkt vid vilken journalinformationen skapades eller senast uppdaterades hos tjänsteproducenten",
      "definition" : "Tidpunkt vid vilken journalinformationen skapades eller senast uppdaterades hos tjänsteproducenten. I de fall då journalinformationen skapats i ett annat informationssystem (t.ex. laboratoriesystem eller annan remittents journalsystem) är det tidpunkten då journalinformationen ursprungligen skapades som ska anges.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.byRole",
      "short" : "Information om hälso- och sjukvårdspersonalens befattning vid författandet av informationen",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning vid författandet av informationen. Om möjligt skall kod från kodverket KV Befattning användas för att ange personens befattning så som den var angiven i HSA-katalogen vid tidpunkten. Om kod inte är tillgänglig anges befattning i klartext i CV-typens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit",
      "short" : "Den organisation som författaren är uppdragstagare på",
      "definition" : "Den organisation som författaren är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. Om tillgängligt skall detta anges. I de fall HSA-id saknas kan ett för källsystemet unikt id användas.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt skall detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitEmail",
      "short" : "Epost till organisationsenhet",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress till organisationsenhet. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.author.orgUnit.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.signature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.signature",
      "short" : "Signeringsinformation",
      "definition" : "Signeringsinformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.signature.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.signature.rivId",
      "short" : "rivId",
      "definition" : "rivId",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.signature.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.signature.name",
      "short" : "name",
      "definition" : "name",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.signature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.signature.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.header.signature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.header.signature.byRole",
      "short" : "byRole",
      "definition" : "byRole",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body",
      "short" : "Uppmärksamhetsinformation",
      "definition" : "Uppmärksamhetsinformation.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getalertinformation3-body-choice",
        "severity" : "error",
        "human" : "En och endast en av hypersensitivity, activity, condition, decisionNonstandardCareProcedure, informationNonstandardCareProcedure, contagion och unstructuredAlertInformation ska anges",
        "expression" : "hypersensitivity.combine(activity).combine(condition).combine(decisionNonstandardCareProcedure).combine(informationNonstandardCareProcedure).combine(contagion).combine(unstructuredAlertInformation).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformationV30"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.specificationVersion",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.specificationVersion",
      "short" : "Version av Socialstyrelsens informationspecifikation för uppmärksamhetsinformation som används när …",
      "definition" : "Version av Socialstyrelsens informationspecifikation för uppmärksamhetsinformation som används när information produceras i detta kontrakt. T.ex. ”5.1”",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity",
      "short" : "Uppmärksamhetsinformation av typ överkänslighet",
      "definition" : "Uppmärksamhetsinformation av typ överkänslighet. Se även regel Verify unique alert information.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.value",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.value",
      "short" : "Kod för att ange att det som har observerats är en substansöverkänslighet",
      "definition" : "Kod för att ange att det som har observerats är en substansöverkänslighet. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.status",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.status",
      "short" : "Kod för observationens status, exempelvis för att dokumentera om det tillstånd som beskrivs har funnits eller …",
      "definition" : "Kod för observationens status, exempelvis för att dokumentera om det tillstånd som beskrivs har funnits eller är ett potentiellt tillstånd. En instans av klassen observation kan inte byta status. Om man exempelvis vill dokumentera ett måltillstånd som senare uppfylls så dokumenteras detta som två instanser av klassen observation, en med status måltillstånd och en med status observerat. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.time",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.time",
      "short" : "Angivelse av den tid då överkänslighet som observerats faktiskt förekom eller förväntas förekomma",
      "definition" : "Angivelse av den tid då överkänslighet som observerats faktiskt förekom eller förväntas förekomma. Se även regel Verify TimeType.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getalertinformation3-time-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av timestamp och timePeriod ska anges",
        "expression" : "timestamp.exists() xor timePeriod.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformationV30"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.time.timestamp",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.time.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.time.timePeriod",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.time.timePeriod",
      "short" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum",
      "definition" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum. start: Startdatum på formatet YYYYMMDDhhmmss end: Slutdatum på formatet YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.degreeOfSeverity",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.degreeOfSeverity",
      "short" : "Kod som beskriver hur allvarligt patienten reagerar på angivet ämne",
      "definition" : "Kod som beskriver hur allvarligt patienten reagerar på angivet ämne. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.degreeOfCertainty",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.degreeOfCertainty",
      "short" : "Beskriver med vilken visshetsgrad överkänsligheten har konstaterats",
      "definition" : "Beskriver med vilken visshetsgrad överkänsligheten har konstaterats. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.negation",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.negation",
      "short" : "Flagga som negerar förekomsten av det som beskrivs av attribut värde",
      "definition" : "Flagga som negerar förekomsten av det som beskrivs av attribut värde. Vid förekomst av överkänslighet ska negation ha värde ’false. Vid konstaterande av att patient inte har smittsam sjukdom eller inte bär på smittämne ska negation ha värde ’true’.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod",
      "short" : "Håller information om en specifik verifieringsmetod, exempelvis antikroppstest, pricktest eller …",
      "definition" : "Håller information om en specifik verifieringsmetod, exempelvis antikroppstest, pricktest eller provokationstest.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod.code",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod.code",
      "short" : "Kod för den typ av aktivitet som avses, exempelvis Snomed-kod för pricktest",
      "definition" : "Kod för den typ av aktivitet som avses, exempelvis Snomed-kod för pricktest. Se även regel pattern.CVType.CodedWithNoExceptions",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod.status",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod.status",
      "short" : "Kod för aktivitetens status som anger om en aktivitet exempelvis är rekommenderad, planerad eller utförd",
      "definition" : "Kod för aktivitetens status som anger om en aktivitet exempelvis är rekommenderad, planerad eller utförd. En instans av klassen aktivitet kan inte byta status. Om man exempelvis vill dokumentera en planerad utredning som senare utförs så dokumenteras detta som två instanser av klassen aktivitet, en med status planerad och en med status utförd. Se även regel pattern.CVType.CodedWithNoExceptions",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod.time",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod.time",
      "short" : "Angivelse av vilken tid en aktivitet utförts, är planerad att utföras eller önskas utföras",
      "definition" : "Angivelse av vilken tid en aktivitet utförts, är planerad att utföras eller önskas utföras. Se även regel Verify TimeType.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getalertinformation3-time-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av timestamp och timePeriod ska anges",
        "expression" : "timestamp.exists() xor timePeriod.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformationV30"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod.time.timestamp",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod.time.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod.time.timePeriod",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.verificationMethod.time.timePeriod",
      "short" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum",
      "definition" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum. start: Startdatum på formatet YYYYMMDDhhmmss end: Slutdatum på formatet YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource",
      "short" : "Håller information om något som förekommer som del i en aktivitet, observation eller process inom hälso- och …",
      "definition" : "Håller information om något som förekommer som del i en aktivitet, observation eller process inom hälso- och sjukvård och som inte avser personer eller organisationer. Exempel är olika typer av medicintekniska produkter, hjälpmedel, läkemedel, organ och blod. Exempel som särskilt pekas ut som resurser som det i tillämpliga fall ska dokumenteras om är TNS-maskin, implantat och läkemedel.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.rivId",
      "short" : "Identifierare på en viss verklig instans av resurs, exempelvis identifierare för ett implantat eller …",
      "definition" : "Identifierare på en viss verklig instans av resurs, exempelvis identifierare för ett implantat eller transplantat.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.type",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.type",
      "short" : "Kod för typ av resurs, exempelvis NSL-id för hjälpämne eller aktiv läkemedelssubstans",
      "definition" : "Kod för typ av resurs, exempelvis NSL-id för hjälpämne eller aktiv läkemedelssubstans. Se även regel pattern.CVType.CodedWithNoExceptions",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.productId",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.productId",
      "short" : "Identifierare för viss produkt, t.ex.",
      "definition" : "Identifierare för viss produkt, t.ex. NPL-id för läkemedelsprodukt. Se även regel pattern.CVType.CodedWithNoExceptions",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.resourceProperty",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.resourceProperty",
      "short" : "Angivelse av egenskaper som en resurs kan ha, som inte kan utläsas från resursattributet typ",
      "definition" : "Angivelse av egenskaper som en resurs kan ha, som inte kan utläsas från resursattributet typ.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.resourceProperty.type",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.resourceProperty.type",
      "short" : "Kod för den typ av resursegenskap som avses i de fall detta inte framgår av attributet värde",
      "definition" : "Kod för den typ av resursegenskap som avses i de fall detta inte framgår av attributet värde. Exempel är läkemedelsform eller tillverkare. Se även regel pattern.CVType",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.resourceProperty.value",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.hypersensitivity.resource.resourceProperty.value",
      "short" : "Angivelse av värdet för den typ av egenskap som anges i attributet typ",
      "definition" : "Angivelse av värdet för den typ av egenskap som anges i attributet typ. Exempelvis läkemedlets form enligt NPL för resursegenskap av typ ”läkemedelsform”, eller tillverkarens företagsnamn för resursegenskap av typ ”tillverkare”.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity",
      "short" : "Uppmärksamhetsinformation av typ aktivitet, som kan avse behandlingar eller åtgärder",
      "definition" : "Uppmärksamhetsinformation av typ aktivitet, som kan avse behandlingar eller åtgärder. Se även regel Verify unique alert information.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.code",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.code",
      "short" : "Kod för den typ av aktivitet som avses",
      "definition" : "Kod för den typ av aktivitet som avses. Se även följande regler pattern.CVType.CodedWithNoExceptionsVerifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.status",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.status",
      "short" : "Kod för aktivitetens status som anger om en aktivitet exempelvis är rekommenderad, planerad eller utförd",
      "definition" : "Kod för aktivitetens status som anger om en aktivitet exempelvis är rekommenderad, planerad eller utförd. En instans av klassen aktivitet kan inte byta status. Om man exempelvis vill dokumentera en planerad utredning som senare utförs så dokumenteras detta som två instanser av klassen aktivitet, en med status planerad och en med status utförd. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.time",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.time",
      "short" : "Angivelse av vilken tid en aktivitet utförts, är planerad att utföras eller önskas utföras",
      "definition" : "Angivelse av vilken tid en aktivitet utförts, är planerad att utföras eller önskas utföras. Se även regel Verify TimeType.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getalertinformation3-time-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av timestamp och timePeriod ska anges",
        "expression" : "timestamp.exists() xor timePeriod.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformationV30"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.time.timestamp",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.time.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.time.timePeriod",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.time.timePeriod",
      "short" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum",
      "definition" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum. start: Startdatum på formatet YYYYMMDDhhmmss end: Slutdatum på formatet YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource",
      "short" : "Håller information om något som förekommer som del i en aktivitet, observation eller process inom hälso- och …",
      "definition" : "Håller information om något som förekommer som del i en aktivitet, observation eller process inom hälso- och sjukvård och som inte avser personer eller organisationer. Exempel är olika typer av medicintekniska produkter, hjälpmedel, läkemedel, organ och blod. Exempel som särskilt pekas ut som resurser som det i tillämpliga fall ska dokumenteras om är TNS-maskin, implantat och läkemedel.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.rivId",
      "short" : "Identifierare på en viss verklig instans av resurs, exempelvis identifierare för ett implantat eller …",
      "definition" : "Identifierare på en viss verklig instans av resurs, exempelvis identifierare för ett implantat eller transplantat.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.type",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.type",
      "short" : "Kod för typ av resurs, exempelvis NSL-id för hjälpämne eller aktiv läkemedelssubstans",
      "definition" : "Kod för typ av resurs, exempelvis NSL-id för hjälpämne eller aktiv läkemedelssubstans. Se även regel pattern.CVType.CodedWithNoExceptions",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.productId",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.productId",
      "short" : "Identifierare för viss produkt, t.ex.",
      "definition" : "Identifierare för viss produkt, t.ex. NPL-id för läkemedelsprodukt. Se även regel pattern.CVType.CodedWithNoExceptions",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.resourceProperty",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.resourceProperty",
      "short" : "Angivelse av egenskaper som en resurs kan ha, som inte kan utläsas från resursattributet typ",
      "definition" : "Angivelse av egenskaper som en resurs kan ha, som inte kan utläsas från resursattributet typ.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.resourceProperty.type",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.resourceProperty.type",
      "short" : "Kod för den typ av resursegenskap som avses i de fall detta inte framgår av attributet värde",
      "definition" : "Kod för den typ av resursegenskap som avses i de fall detta inte framgår av attributet värde. Exempel är läkemedelsform eller tillverkare. Se även regel pattern.CVType",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.resourceProperty.value",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.resource.resourceProperty.value",
      "short" : "Angivelse av värdet för den typ av egenskap som anges i attributet typ",
      "definition" : "Angivelse av värdet för den typ av egenskap som anges i attributet typ. Exempelvis läkemedlets form enligt NPL för resursegenskap av typ ”läkemedelsform”, eller tillverkarens företagsnamn för resursegenskap av typ ”tillverkare”.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.bodyStructure",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.bodyStructure",
      "short" : "Håller information om kroppens anatomiska delar såsom organ, lemmar och deras komponenter, inklusive …",
      "definition" : "Håller information om kroppens anatomiska delar såsom organ, lemmar och deras komponenter, inklusive sidoangivelse (lateralitet) och ytterligare precisering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.bodyStructure.code",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.bodyStructure.code",
      "short" : "Kod för angivelse av kroppens anatomiska delar såsom organ, lemmar och deras komponenter",
      "definition" : "Kod för angivelse av kroppens anatomiska delar såsom organ, lemmar och deras komponenter. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.bodyStructure.laterality",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.bodyStructure.laterality",
      "short" : "Kod för angivelse av lateralitet",
      "definition" : "Kod för angivelse av lateralitet. Detta attribut används för att skilja på de anatomiska kroppsdelar som uppträder parvis, exempelvis ögon och armar. Om det finns behov av att ange en viss sida av ett givet organ, exempelvis höger ansiktshalva uttrycks detta i attributet precision. Giltiga värden är vänster, höger eller bilateralt. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.bodyStructure.specifiedLocation",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.activity.bodyStructure.specifiedLocation",
      "short" : "Kod för att vid behov ytterligare precisera lokalisation",
      "definition" : "Kod för att vid behov ytterligare precisera lokalisation. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition",
      "short" : "Uppmärksamhetsinformation av typ medicinskt tillstånd, som kan avse förekomst av implantat, förekomst av …",
      "definition" : "Uppmärksamhetsinformation av typ medicinskt tillstånd, som kan avse förekomst av implantat, förekomst av transplantat eller annat medicinskt tillstånd. Se även regel Verify unique alert information.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.value",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.value",
      "short" : "Angivelse av värde som alltid representerar det faktiska observerade hälsotillståndet",
      "definition" : "Angivelse av värde som alltid representerar det faktiska observerade hälsotillståndet. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.status",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.status",
      "short" : "Kod för observationens status, exempelvis för att dokumentera om det tillstånd som beskrivs har funnits eller …",
      "definition" : "Kod för observationens status, exempelvis för att dokumentera om det tillstånd som beskrivs har funnits eller är ett potentiellt tillstånd. En instans av klassen observation kan inte byta status. Om man exempelvis vill dokumentera ett måltillstånd som senare uppfylls så dokumenteras detta som två instanser av klassen observation, en med status måltillstånd och en med status observerat. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.time",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.time",
      "short" : "Angivelse av den tid då det som observerats faktiskt förekom eller förväntas förekomma",
      "definition" : "Angivelse av den tid då det som observerats faktiskt förekom eller förväntas förekomma. Se även regel Verify TimeType.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getalertinformation3-time-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av timestamp och timePeriod ska anges",
        "expression" : "timestamp.exists() xor timePeriod.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformationV30"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.time.timestamp",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.time.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.time.timePeriod",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.time.timePeriod",
      "short" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum",
      "definition" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum. start: Startdatum på formatet YYYYMMDDhhmmss end: Slutdatum på formatet YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.negation",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.negation",
      "short" : "Flagga som negerar förekomsten av det som beskrivs av attribut värde",
      "definition" : "Flagga som negerar förekomsten av det som beskrivs av attribut värde. Vid förekomst av medicinskt tillstånd ska negation ha värde ’false’. Vid konstaterande av att patient inte har ett medicinskt tillstånd ska negation ha värde ’true’.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.bodyStructure",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.bodyStructure",
      "short" : "Håller information om kroppens anatomiska delar såsom organ, lemmar och deras komponenter, inklusive …",
      "definition" : "Håller information om kroppens anatomiska delar såsom organ, lemmar och deras komponenter, inklusive sidoangivelse (lateralitet) och ytterligare precisering",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.bodyStructure.code",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.bodyStructure.code",
      "short" : "Kod för angivelse av kroppens anatomiska delar såsom organ, lemmar och deras komponenter",
      "definition" : "Kod för angivelse av kroppens anatomiska delar såsom organ, lemmar och deras komponenter. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.bodyStructure.laterality",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.bodyStructure.laterality",
      "short" : "Kod för angivelse av lateralitet",
      "definition" : "Kod för angivelse av lateralitet. Detta attribut används för att skilja på de anatomiska kroppsdelar som uppträder parvis, exempelvis ögon och armar. Om det finns behov av att ange en viss sida av ett givet organ, exempelvis höger ansiktshalva uttrycks detta i attributet precision. Giltiga värden är vänster, höger eller bilateralt. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.bodyStructure.specifiedLocation",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.bodyStructure.specifiedLocation",
      "short" : "Kod för att vid behov ytterligare precisera lokalisation",
      "definition" : "Kod för att vid behov ytterligare precisera lokalisation. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource",
      "short" : "Håller information om något som förekommer som del i en aktivitet, observation eller process inom hälso- och …",
      "definition" : "Håller information om något som förekommer som del i en aktivitet, observation eller process inom hälso- och sjukvård och som inte avser personer eller organisationer. Exempel är olika typer av medicintekniska produkter, hjälpmedel, läkemedel, organ och blod. Exempel som särskilt pekas ut som resurser som det i tillämpliga fall ska dokumenteras om är TNS-maskin, implantat och läkemedel.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.rivId",
      "short" : "Identifierare på en viss verklig instans av resurs, exempelvis identifierare för ett implantat eller …",
      "definition" : "Identifierare på en viss verklig instans av resurs, exempelvis identifierare för ett implantat eller transplantat.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.type",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.type",
      "short" : "Kod för typ av resurs, exempelvis NSL-id för hjälpämne eller aktiv läkemedelssubstans",
      "definition" : "Kod för typ av resurs, exempelvis NSL-id för hjälpämne eller aktiv läkemedelssubstans. Se även regel pattern.CVType.CodedWithNoExceptions",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.productId",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.productId",
      "short" : "Identifierare för viss produkt, t.ex.",
      "definition" : "Identifierare för viss produkt, t.ex. NPL-id för läkemedelsprodukt. Se även regel pattern.CVType.CodedWithNoExceptions",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.resourceProperty",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.resourceProperty",
      "short" : "Angivelse av egenskaper som en resurs kan ha, som inte kan utläsas från resursattributet typ",
      "definition" : "Angivelse av egenskaper som en resurs kan ha, som inte kan utläsas från resursattributet typ.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.resourceProperty.type",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.resourceProperty.type",
      "short" : "Kod för den typ av resursegenskap som avses i de fall detta inte framgår av attributet värde",
      "definition" : "Kod för den typ av resursegenskap som avses i de fall detta inte framgår av attributet värde. Exempel är läkemedelsform eller tillverkare. Se även regel pattern.CVType",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.resourceProperty.value",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.condition.resource.resourceProperty.value",
      "short" : "Angivelse av värdet för den typ av egenskap som anges i attributet typ",
      "definition" : "Angivelse av värdet för den typ av egenskap som anges i attributet typ. Exempelvis läkemedlets form enligt NPL för resursegenskap av typ ”läkemedelsform”, eller tillverkarens företagsnamn för resursegenskap av typ ”tillverkare”.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.decisionNonstandardCareProcedure",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.decisionNonstandardCareProcedure",
      "short" : "Uppmärksamhetsinformation av typ beslut som kan leda till särskild vårdrutin",
      "definition" : "Uppmärksamhetsinformation av typ beslut som kan leda till särskild vårdrutin. Se även regel Verify unique alert information.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.decisionNonstandardCareProcedure.code",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.decisionNonstandardCareProcedure.code",
      "short" : "Kod för det beslutet avser, exempelvis avvikelse från behandlingsrekommendation så som att i ett visst fall …",
      "definition" : "Kod för det beslutet avser, exempelvis avvikelse från behandlingsrekommendation så som att i ett visst fall inte utföra en operation. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.decisionNonstandardCareProcedure.description",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.decisionNonstandardCareProcedure.description",
      "short" : "Textuell beskrivning av det beslut som avses",
      "definition" : "Textuell beskrivning av det beslut som avses. Beskrivningen kan i förekommande fall även innehålla särskilda villkor som hänger samman med beslutet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.decisionNonstandardCareProcedure.approval",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.decisionNonstandardCareProcedure.approval",
      "short" : "Anger huruvida det som avses i attributet kod bifalls eller inte",
      "definition" : "Anger huruvida det som avses i attributet kod bifalls eller inte. Exempelvis ett beslut med kod = palliativ vård och bifall = sant innebär att patienten ska få palliativ vård, medan ett beslut med kod = palliativ vård och bifall = falskt innebär att patienten ej ska få palliativ vård.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.decisionNonstandardCareProcedure.timestamp",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.decisionNonstandardCareProcedure.timestamp",
      "short" : "Angivelse av tidpunkt när beslutet fattades",
      "definition" : "Angivelse av tidpunkt när beslutet fattades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure",
      "short" : "Uppmärksamhetsinformation av typ information som kan leda till särskild vårdrutin",
      "definition" : "Uppmärksamhetsinformation av typ information som kan leda till särskild vårdrutin. Se även regel Verify unique alert information.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.value",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.value",
      "short" : "Angivelse av värde som alltid representerar det faktiska observerade hälsotillståndet",
      "definition" : "Angivelse av värde som alltid representerar det faktiska observerade hälsotillståndet. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.status",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.status",
      "short" : "Kod för observationens status, exempelvis för att dokumentera om det tillstånd som beskrivs har funnits eller …",
      "definition" : "Kod för observationens status, exempelvis för att dokumentera om det tillstånd som beskrivs har funnits eller är ett potentiellt tillstånd. En instans av klassen observation kan inte byta status. Om man exempelvis vill dokumentera ett måltillstånd som senare uppfylls så dokumenteras detta som två instanser av klassen observation, en med status måltillstånd och en med status observerat. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.time",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.time",
      "short" : "Angivelse av den tid då det som observerats faktiskt förekom eller förväntas förekomma",
      "definition" : "Angivelse av den tid då det som observerats faktiskt förekom eller förväntas förekomma. Se även regel Verify TimeType.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getalertinformation3-time-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av timestamp och timePeriod ska anges",
        "expression" : "timestamp.exists() xor timePeriod.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformationV30"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.time.timestamp",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.time.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.time.timePeriod",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.time.timePeriod",
      "short" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum",
      "definition" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum. start: Startdatum på formatet YYYYMMDDhhmmss end: Slutdatum på formatet YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.negation",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.informationNonstandardCareProcedure.negation",
      "short" : "Flagga som negerar förekomsten av det som beskrivs av attribut värde",
      "definition" : "Flagga som negerar förekomsten av det som beskrivs av attribut värde.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion",
      "short" : "Uppmärksamhetsinformation av typ smitta, som kan avse smittsam sjukdom eller smittämne",
      "definition" : "Uppmärksamhetsinformation av typ smitta, som kan avse smittsam sjukdom eller smittämne. Se även regel Verify unique alert information.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.value",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.value",
      "short" : "Kod för den smittsamma sjukdom eller det smittämne som observerats",
      "definition" : "Kod för den smittsamma sjukdom eller det smittämne som observerats. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.status",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.status",
      "short" : "Kod för observationens status, exempelvis för att dokumentera om det tillstånd som beskrivs har funnits eller …",
      "definition" : "Kod för observationens status, exempelvis för att dokumentera om det tillstånd som beskrivs har funnits eller är ett potentiellt tillstånd. En instans av klassen observation kan inte byta status. Om man exempelvis vill dokumentera ett måltillstånd som senare uppfylls så dokumenteras detta som två instanser av klassen observation, en med status måltillstånd och en med status observerat. Se även följande regler pattern.CVType.CodedWithNoExceptions Verifiera att angivet kodsystem är ok att använda [sch]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.time",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.time",
      "short" : "Angivelse av den tid då den smittsamma sjukdomen eller smittämnet som observerats faktiskt förekom eller …",
      "definition" : "Angivelse av den tid då den smittsamma sjukdomen eller smittämnet som observerats faktiskt förekom eller förväntas förekomma. Se även regel Verify TimeType.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getalertinformation3-time-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av timestamp och timePeriod ska anges",
        "expression" : "timestamp.exists() xor timePeriod.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMAlertInformationV30"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.time.timestamp",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.time.timestamp",
      "short" : "timestamp",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.time.timePeriod",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.time.timePeriod",
      "short" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum",
      "definition" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum. start: Startdatum på formatet YYYYMMDDhhmmss end: Slutdatum på formatet YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.negation",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.contagion.negation",
      "short" : "Flagga som negerar förekomsten av det som beskrivs av attribut värde",
      "definition" : "Flagga som negerar förekomsten av det som beskrivs av attribut värde. Vid förekomst av smittsam sjukdom eller smittämne ska negation ha värde ’false’. Vid konstaterande av att patient inte har smittsam sjukdom eller inte bär på smittämne ska negation ha värde ’true’.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.unstructuredAlertInformation",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.unstructuredAlertInformation",
      "short" : "Uppmärksamhetsinformation av typ ej strukturanpassad uppmärksamhetsinformation",
      "definition" : "Uppmärksamhetsinformation av typ ej strukturanpassad uppmärksamhetsinformation. Se även regel Verify unique alert information.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.unstructuredAlertInformation.title",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.unstructuredAlertInformation.title",
      "short" : "Ord eller fras avsedd för identifikation av uppmärksamhetsinformation",
      "definition" : "Ord eller fras avsedd för identifikation av uppmärksamhetsinformation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.alertInformation.body.unstructuredAlertInformation.description",
      "path" : "SEEHDSLMAlertInformationV30.alertInformation.body.unstructuredAlertInformation.description",
      "short" : "Textuellt beskriven historisk uppmärksamhetsinformation",
      "definition" : "Textuellt beskriven historisk uppmärksamhetsinformation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.result",
      "path" : "SEEHDSLMAlertInformationV30.result",
      "short" : "Innehåller information om det gick bra eller ej att besvara förfrågan",
      "definition" : "Innehåller information om det gick bra eller ej att besvara förfrågan. Se avsnitt 7.1.7 för beskrivning av hantering vid logiska fel.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.result.resultCode",
      "short" : "Anger resultatet av besvarad förfrågan",
      "definition" : "Anger resultatet av besvarad förfrågan. Kan endast vara OK, INFO eller ERROR.\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMAlertInformationV30.result.resultText",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMAlertInformationV30.result.resultText",
      "short" : "Optionellt felmeddelande som innehåller information om felet som uppstod",
      "definition" : "Optionellt felmeddelande som innehåller information om felet som uppstod.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
