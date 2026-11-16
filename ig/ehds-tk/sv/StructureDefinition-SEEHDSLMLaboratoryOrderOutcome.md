# GetLaboratoryOrderOutcome - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetLaboratoryOrderOutcome 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMLaboratoryOrderOutcome.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMLaboratoryOrderOutcome.csv), [Excel](../StructureDefinition-SEEHDSLMLaboratoryOrderOutcome.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMLaboratoryOrderOutcome",
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
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcome",
  "version" : "0.9.0",
  "name" : "SEEHDSLMLaboratoryOrderOutcome",
  "title" : "GetLaboratoryOrderOutcome",
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
  "description" : "Logisk modell för tjänstekontraktet GetLaboratoryOrderOutcome\n(RIV-TA urn:riv:clinicalprocess:healthcond:actoutcome:GetLaboratoryOrderOutcome:4).\nRepresenterar responsens informationsstruktur — multidisciplinära laboratoriesvar\nför en patient.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcome",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMLaboratoryOrderOutcome",
      "path" : "SEEHDSLMLaboratoryOrderOutcome",
      "short" : "GetLaboratoryOrderOutcome",
      "definition" : "Logisk modell för tjänstekontraktet GetLaboratoryOrderOutcome\n(RIV-TA urn:riv:clinicalprocess:healthcond:actoutcome:GetLaboratoryOrderOutcome:4).\nRepresenterar responsens informationsstruktur — multidisciplinära laboratoriesvar\nför en patient."
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome",
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome",
      "short" : "Laboratoriesvar (ett per beställning)",
      "definition" : "En labbeställning med tillhörande svar. Kardinalitet: Valfri, lista.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header",
      "short" : "Header med åtkomstkontroll och metadata",
      "definition" : "Innehåller information som är gemensam för uppgifter i patientjournalen som tillgängliggörs, exempelvis information om vilken hälso- och sjukvårdspersonal som är angiven som författare av en uppgift samt information om signering.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader",
      "short" : "Åtkomstkontrollhuvud (PDL)",
      "definition" : "Information som används för kontroll av åtkomst. Tjänstekonsumenten får enbart ta del av uppgifterna i AccessControlHeaderType innan övrig information om uppgift i patientjournal kan bearbetas.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.accountableCareGiver",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.accountableCareGiver",
      "short" : "Ansvarig vårdgivare (HSA-id)",
      "definition" : "HSA-id för den vårdgivare som är ansvarig för posten. Obligatorisk.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.accountableCareUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.accountableCareUnit",
      "short" : "Ansvarig vårdenhet (HSA-id)",
      "definition" : "HSA-id för den vårdenhet som är ansvarig för posten. Obligatorisk.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.originalPatientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.originalPatientId",
      "short" : "Ursprungligt patient-id",
      "definition" : "Personidentifieraren som den tillgängliggjorda uppgiften lagrades under då den skapades. Detta fält anges endast då det skiljer sig från patientId, exempelvis då patienten tidigare erhållit vård som dokumenterats under ett samordningsnummer för att sedan bli folkbokförd i Sverige och få ett personnummer. root sätts till OID för typ av personidentifierare. För personnummer ska Skatteverkets OID för personnummer (1.2.752.129.2.1.3.1) användas. För samordningsnummer skall Skatteverkets OID för samordningsnummer (1.2.752.129.2.1.3.3) användas. För andra typer av personidentifierare sätts root till aktuell OID. extension sätts till patientens identifierare. Anges med 12 tecken utan avskiljare.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.careProcessId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.careProcessId",
      "short" : "Vårdprocessid (UUID)",
      "definition" : "Id för den individanpassade vårdprocess som uppgiften journalförts inom ramen för. Består av ett lokalt genererat UUID.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.lockTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.lockTime",
      "short" : "lockTime",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.blockComparisonTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.blockComparisonTime",
      "short" : "Tidpunkt för spärrkontroll",
      "definition" : "Den tidpunkt mot vilken spärrkontroll sker vid åtkomst med syftet sammanhållen journalföring. Gäller både yttre (mellan vårdgivare) och inre (mellan vårdenheter) spärr. I detta fält anges provtagningstidpunkt. Om ett svar innehåller analyser utförda på olika prov anges tidpunkt för det senast tagna provet.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.approvedForPatient",
      "short" : "Godkänd för patientvisning",
      "definition" : "Anger om informationsägaren godkänt att patienten kan ta del av informationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4.1"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.accessControlHeader.patientId",
      "short" : "Patientens id i svaret",
      "definition" : "Personidentifierare för patienten. root sätts till OID för typ av personidentifierare. För personnummer ska Skatteverkets OID för personnummer (1.2.752.129.2.1.3.1) användas. För samordningsnummer skall Skatteverkets OID för samordningsnummer (1.2.752.129.2.1.3.3) användas. För andra typer av personidentifierare sätts root till aktuell OID. extension sätts till patientens identifierare. Anges med 12 tecken utan avskiljare. Obligatorisk vid nyanslutning",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.sourceSystemId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.sourceSystemId",
      "short" : "Källsystemets HSA-id",
      "definition" : "Det källsystem som uppgiften lagras i. root sätts till OID för HSA-katalogen (1.2.752.129.2.1.4.1) extension sätts till källsystemets HSA-id",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.record",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.record",
      "short" : "Poststatus och tidpunkt",
      "definition" : "Information avseende uppgiften som tillgängliggörs.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.record.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.record.rivId",
      "short" : "Postens unika id",
      "definition" : "Identifierare för uppgift i patientjournal. Identifieraren ska vara konsistent och beständig mellan olika majorversioner av ett tjänstekontrakt. Detta för att en tjänstekonsument ska kunna ta bort dubbletter från de tjänsteproducenter som producerar via flera majorversioner. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska även vara konsistent och beständig mellan olika tjänstekontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen. Motsvarar Laboratoriesvar.id i informationsspecifikationen [R6]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.record.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.record.timestamp",
      "short" : "Tidpunkt för posten",
      "definition" : "Den tidpunkt då uppgiften skapades i tjänsteproducentens källsystem. Denna information ska vara beständig även om tjänsteproducenten migrerat uppgiften från ett källsystem till en annat. Motsvarar Laboratoriesvar.svarstidpunkt i informationsspecifikationen [R6]\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author",
      "short" : "Dokumentationsansvarig",
      "definition" : "Information avseende dokumentation av uppgiften som tillgängliggörs. Notera att den som registrerar uppgiften från annan källa, exempelvis en medicinsk sekreterare som transkriberar ett diktat, inte avses.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.rivId",
      "short" : "Författarens HSA-id",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som dokumenterat uppgiften som tillgängliggörs. root sätts till OID för HSA-id (1.2.752.129.2.1.4.1) extension sätts till HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.name",
      "short" : "Författarens namn",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Anges med tilltalsnamn och efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.timestamp",
      "short" : "Tidpunkt för dokumentation",
      "definition" : "Tidpunkt då uppgiften dokumenterades eller senast uppdaterades. I de fall då uppgiften ursprungligen dokumenterats eller uppdaterats i ett annat informationssystem än tjänsteproducentens källsystem (t.ex. laboratorieinformationssystem), ska tidpunkten spegla informationen från systemet där uppgiften ursprungligen dokumenterades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.byRole",
      "short" : "Yrkesroll vid dokumentation",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4.1"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.orgUnit",
      "short" : "Organisationsenhet",
      "definition" : "Den organisation som hälso- och sjukvårdspersonalen är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.orgUnit.rivId",
      "short" : "OrgUnit HSA-id",
      "definition" : "Id för organisationsenheten där vårdpersonen verkat på uppdrag av. Om tillgängligt skall HSAid anges. Notera att det är den verksamhet där utrustningen använts som avses, inte utrustningens ägare. I de fall HSAid saknas kan ett för källsystemet unikt id användas varvid fältet root sätts till källsystemets HSAid och fältet extions sätts till lokalt id i källsystemet. Om HSAid används sätts fältet root till OID för HSA-katalogen (1.2.752.129.2.1.4.1) och fältet extension sätts till HSAid. Om organisationsnummer används skall fältet root sättas till OID för Skatteverkets organisationsnummer (2.5.4.97) och fältet extension sättas till organisationsnumret.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.author.orgUnit.name",
      "short" : "OrgUnit namn",
      "definition" : "Namn på organisationsenhet. Om tillgängligt skall detta anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature",
      "short" : "Signatär",
      "definition" : "Information avseende signering av laboratoriesvaret. Laboratoriesvaret signeras av en medicinskt ansvarig hälso- och sjukvårdspersonal på den ansvariga enheten. Den ansvariga enheten kan vara den remissmottagande enheten eller den utförande enheten (exempelvis vid patientnära analyser).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.rivId",
      "short" : "Signatärens HSA-id",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som signerat uppgiften som tillgängliggörs. root sätts till OID för HSA-id (1.2.752.129.2.1.4.1) extension sätts till HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.name",
      "short" : "Signatärens namn",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Anges med tilltalsnamn och efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.timestamp",
      "short" : "Signeringstidpunkt",
      "definition" : "Tidpunkt då uppgiften signerades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.byRole",
      "short" : "Yrkesroll vid signering",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid signeringstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning i klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4.1"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.orgUnit",
      "short" : "Signatärens organisationsenhet",
      "definition" : "Anges ej för Signature",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.orgUnit.rivId",
      "short" : "OrgUnit HSA-id",
      "definition" : "Id för organisationsenheten där vårdpersonen verkat på uppdrag av. Om tillgängligt skall HSAid anges. Notera att det är den verksamhet där utrustningen använts som avses, inte utrustningens ägare. I de fall HSAid saknas kan ett för källsystemet unikt id användas varvid fältet root sätts till källsystemets HSAid och fältet extions sätts till lokalt id i källsystemet. Om HSAid används sätts fältet root till OID för HSA-katalogen (1.2.752.129.2.1.4.1) och fältet extension sätts till HSAid. Om organisationsnummer används skall fältet root sättas till OID för Skatteverkets organisationsnummer (2.5.4.97) och fältet extension sättas till organisationsnumret.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.header.signature.orgUnit.name",
      "short" : "OrgUnit namn",
      "definition" : "Namn på organisationsenhet. Om tillgängligt skall detta anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body",
      "short" : "Beställnings- och svarsinformation",
      "definition" : "Information om laboratoriesvaret.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.identifier",
      "short" : "Beställningens unika id",
      "definition" : "Angivelse av identitetsbeteckning för laboratoriesvaret.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.laboratoryIdentifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.laboratoryIdentifier",
      "short" : "Laboratoriets beställningsnummer",
      "definition" : "Angivelse av identitetsbeteckning för laboratoriets arbetsorder. Benämns även som LID.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.type",
      "short" : "Typ av laboratoriebeställning",
      "definition" : "Kod för status av laboratoriesvar. Använd FHIR value set Diagnostic Report Status. Giltiga koder är final, partial eller preliminary. Se kodverket för beskrivning av respektive kod. code: En av koderna final, partial eller preliminary codeSystem: 2.16.840.1.113883.4.642.3.235 displayName: Klartext motsvarande den använda koden.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.text",
      "short" : "Fritext om beställningen",
      "definition" : "Angivelse av utlåtande eller kommentar som gäller hela laboratoriesvaret.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral",
      "short" : "Kopplad remiss",
      "definition" : "Den remiss som ligger till grund för svaret.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.identifier",
      "short" : "Remissens id",
      "definition" : "Angivelse av identitetsbeteckning för remissen. root: logisk adress extension: remissens id, även kallad RID",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.timestamp",
      "short" : "Remissens tidpunkt",
      "definition" : "Tidsangivelse för när remiss skapats.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.version",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.version",
      "short" : "Remissversion",
      "definition" : "Version av remiss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.question",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.question",
      "short" : "Frågeställning i remissen",
      "definition" : "Remissens frågeställning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requestedCareService",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requestedCareService",
      "short" : "Begärd vårdtjänst",
      "definition" : "Kod för efterfrågad tjänst från utbudskatalog. Det finns inget kodverk eller urval utpekat för detta attribut. Regel 3.4 Om kod ej kan anges kan datatypens attribut originalText användas för en fritextrepresentation.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester",
      "short" : "Remittent",
      "definition" : "Hälso- och sjukvårdspersonal som skrivit remiss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.rivId",
      "short" : "Remittentens HSA-id",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal. root sätts till OID för HSA-id (1.2.752.129.2.1.4.1) extension sätts till HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.name",
      "short" : "Remittentens namn",
      "definition" : "Namn på hälso- och sjukvårdspersonal",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.byRole",
      "short" : "Remittentens yrkesroll",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning. Om möjligt skall kod från HSA:s kodverk Befattning (OID: 1.2.752.129.2.2.1.4) [R3] användas för att ange personens befattning så som den var angiven i HSA-katalogen vid tidpunkten. Om kod inte är tillgänglig anges befattning i klartext i CV-typens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.orgUnit",
      "short" : "Remittentens org-enhet",
      "definition" : "Den organisation som remittenten är uppdragstagare på. För detta fält är det obligatoriskt att ange både orgUnitType.id samt orgUnitType.name.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.orgUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.orgUnit.rivId",
      "short" : "OrgUnit HSA-id",
      "definition" : "Id för organisationsenheten där vårdpersonen verkat på uppdrag av. Om tillgängligt skall HSAid anges. Notera att det är den verksamhet där utrustningen använts som avses, inte utrustningens ägare. I de fall HSAid saknas kan ett för källsystemet unikt id användas varvid fältet root sätts till källsystemets HSAid och fältet extions sätts till lokalt id i källsystemet. Om HSAid används sätts fältet root till OID för HSA-katalogen (1.2.752.129.2.1.4.1) och fältet extension sätts till HSAid. Om organisationsnummer används skall fältet root sättas till OID för Skatteverkets organisationsnummer (2.5.4.97) och fältet extension sättas till organisationsnumret.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.orgUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.requester.orgUnit.name",
      "short" : "OrgUnit namn",
      "definition" : "Namn på organisationsenhet. Om tillgängligt skall detta anges.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.referralInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4.2"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.referralInformation",
      "short" : "Remissinformation",
      "definition" : "Ytterligare information från beställaren.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.referralInformation.referralComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4.2"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.referralInformation.referralComment",
      "short" : "Remisskommentar",
      "definition" : "Kommentar på beställningen av laboratorieundersökningen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.referralInformation.referralMedicalInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4.2"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.referral.referralInformation.referralMedicalInformation",
      "short" : "Medicinsk remissinformation",
      "definition" : "Medicinsk information som angetts i beställningen relaterad till laboratorieundersökningen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses",
      "short" : "Analysgrupp (panel)",
      "definition" : "En grupp av relaterade analyser (t.ex. ett analyspaket). Kardinalitet: Valfri, lista.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.name",
      "short" : "Gruppens namn",
      "definition" : "Namn eller benämning för hela analysgruppen. Obligatorisk om attributet comment anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.comment",
      "short" : "Kommentar till gruppen",
      "definition" : "Kommentar för hela analysgruppen. Om en kommentar anges ska även attributet name anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.code",
      "short" : "Gruppens kod",
      "definition" : "Listkoder (NPU) som fungerar som en rubrik-kod för de ingående analyserna. code.code: Kod från “Urval analyskoder laboratoriemedicin” (se [R16]) code.codeSystem: 1.2.752.108.1 Regel 3.5 Om kod ej kan anges kan datatypens attribut originalText användas för en fritextrepresentation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis",
      "short" : "Enskild analys",
      "definition" : "Utförd analys.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.identifier",
      "short" : "Analysens id",
      "definition" : "Id för utförd analys.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.timestamp",
      "short" : "Tidpunkt för analysen",
      "definition" : "Den tidpunkt då analysen utfördes.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.code",
      "short" : "Analysens kod (t.ex. NPU)",
      "definition" : "Kod (NPU) för den analys som utförts. code.code: Kod från “Urval analyskoder laboratoriemedicin” (se [R16]) code.codeSystem: 1.2.752.108.1 Regel 3.5 Om kod ej kan anges kan datatypens attribut originalText användas för en fritextrepresentation.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.method",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.method",
      "short" : "Analysmetod",
      "definition" : "Kod (SNOMED-CT-SE) för den typ av tillvägagångssätt för utförandet av analysen som avses. code.code: Kod från Urval analysmetod laboratoriemedicin (OID 1.2.752.129.5.1.18) (se [R10]) code.codeSystem: 1.2.752.116.2.1.1 Regel 3.5 Om kod ej kan anges kan datatypens attribut originalText användas för en fritextrepresentation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.status",
      "short" : "Analysstatus",
      "definition" : "Kod (SNOMED-CT-SE) för analysens status. code.code: Kod från Urval analysstatus laboratoriemedicin (OID 1.2.752.129.5.1.6) (se [R10]) code.codeSystem: 1.2.752.116.2.1.1 Regel 3.5 Om status utelämnas ska detta tolkas som att analysen är slutförd. Fritextalternativ kan ej anges i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.comment",
      "short" : "Kommentar till analysen",
      "definition" : "Kommentar för enskild analys, exempelvis att svaret inte får användas för biobanksinfo.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.accredited",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.accredited",
      "short" : "Ackrediterad analys",
      "definition" : "Om analysen är ackrediterad sätts fältet till true. Om analysen inte är ackrediterad sätts fältet till false. Om analysens ackrediteringsstatus är okänd utelämnas elementet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen",
      "short" : "Prov",
      "definition" : "Information om ett prov.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.identifier",
      "short" : "Provnummer",
      "definition" : "Identitetsbeteckning för ett prov.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.material",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.material",
      "short" : "Provmaterial",
      "definition" : "Kod (SNOMED-CT-SE) för typ av provmaterial. Koden för provmaterial kan även innefatta information om provtagningsmetod. code: Kod från Urval provtyp laboratoriemedicin (OID 1.2.752.129.5.1.13) (se [R10]) codeSystem: 1.2.752.116.2.1.1 Regel 3.5 Om kodad representation av provmaterialtyp från nationellt urval saknas kan datatypens attribut originalText användas för en fritextrepresentation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.timestamp",
      "short" : "Provtagningstidpunkt",
      "definition" : "Angivelse av den tidpunkt då provet är taget.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.anatomicalLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.anatomicalLocation",
      "short" : "Anatomisk plats",
      "definition" : "Kod (SNOMED-CT-SE) som anger var provet är taget. Exempel: höger arm, vänster njure. code: Kod från Urval anatomisk lokalisation laboratoriemedicin (OID 1.2.752.129.5.1.7) (se [R10]) codeSystem: 1.2.752.116.2.1.1 Regel 3.5 Om kodad representation av lokalisation från nationellt urval saknas används endast CV-attributet originalText för att ange textuellt alternativ.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.comment",
      "short" : "Kommentar om provet",
      "definition" : "Angivelse av kommentar om enskilt prov.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity",
      "short" : "Provrelaterad aktivitet",
      "definition" : "Håller information om aktiviteter relaterade till hantering av provet. Inkluderar även t.ex. aktiviteter i samband med transport, frysning, förvaring, bearbetning och delning i sekundärprov.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.code",
      "short" : "Aktivitetskod",
      "definition" : "Kod (SNOMED-CT-SE) för provrelaterad aktivitet. code: Kod från SNOMED-CT-SE codeSystem: 1.2.752.116.2.1.1 Det finns inget urval utpekat för detta attribut. Regel 3.4",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.time",
      "short" : "Aktivitetens tidsperiod",
      "definition" : "Angivelse av tidpunkt eller tidsintervall då den provrelaterade aktiviteten utfördes. Om tidpunkt anges sätts start- och sluttid till samma tidpunkt.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.method",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.activity.method",
      "short" : "Aktivitetsmetod",
      "definition" : "Kod (SNOMED-CT-SE) för metod för provrelaterad aktivitet. code: Kod från SNOMED-CT-SE codeSystem: 1.2.752.116.2.1.1 Det finns inget urval utpekat för detta attribut. Regel 3.4",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container",
      "short" : "Provbehållare",
      "definition" : "Information om den eller de provbehållare som provet förvaras i.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container.identifier",
      "short" : "Behållarens id",
      "definition" : "Identitetsbeteckning för en provbehållare.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.specimen.container.type",
      "short" : "Behållartyp",
      "definition" : "Kod (SNOMED-CT-SE) för typ av provbehållare. code: Kod från Urval provbehållare laboratoriemedicin (OID 1.2.752.129.5.1.12) (se [R10]) codeSystem: 1.2.752.116.2.1.1 Regel 3.5 Om kod saknas anges typ av provbehållare i orginalText Om typ av provbehållartyp är okänd anges ”ospecificerad” i attributet originalText",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.device",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.device",
      "short" : "Mätinstrument",
      "definition" : "Information om den utrustning som använts för att utföra analysen.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.device.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.device.identifier",
      "short" : "Instrumentets id",
      "definition" : "Identitetsbeteckningen för en analysutrustning.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result",
      "short" : "Analysresultat",
      "definition" : "Klassen LaboratoryAnalysisResultType håller information om resultat av den utförda analysen. Detta resultat kan exempelvis bestå av ett mätvärde inom laboratoriedisciplinen kemi, ett fynd av en viss bakterieart eller en textuell beskrivning av analysresultatet. Utöver detta kan en kommentar avseende analysresultatet anges separat.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.type",
      "short" : "Resultattyp",
      "definition" : "Kod för typ av laboratorieanalysresultat. code: Enligt urval från tillämpningsanvisning codeSystem: 1.2.752.108.1 (om NPU-kod) eller 1.2.752.116.2.1.1 (om Snomed CT)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value",
      "short" : "Resultatvärde (AnyValueType — se anmärkning)",
      "definition" : "ASSUME-001: AnyValueType kan innehålla PQ, string, boolean eller kodad typ.\nModellerad som string i avvaktan på mappningsverifiering. Se QUESTIONS.md.",
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
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcome"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.cv",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.cv",
      "short" : "cv",
      "definition" : "cv",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.pq",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.pq",
      "short" : "pq",
      "definition" : "pq",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.intervalPQ",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.intervalPQ",
      "short" : "intervalPQ",
      "definition" : "intervalPQ",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.st",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.value.st",
      "short" : "st",
      "definition" : "st",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.comment",
      "short" : "Kommentar till resultatet",
      "definition" : "Angivelse av kommentar som rör laboratorieanalysresultatet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.interpretation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.interpretation",
      "short" : "Tolkning av resultatet",
      "definition" : "Kod (SNOMED-CT-SE) för en tolkning av laboratorieanalysresultatet. code: Kod från Urval tolkning resultat laboratoriemedicin (OID 1.2.752.129.5.1.14) (se [R10]) codeSystem: 1.2.752.116.2.1.1 En sådan tolkning kan vara att analysresultatet ligger utanför aktuellt referensintervall, vilket även benämns som patologisk markör. Regel 3.5 Om kod ej kan anges används CV-typens attribut originalText som fritextalternativ.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference",
      "short" : "Referensintervall",
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
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcome"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.interval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.interval",
      "short" : "Referensintervall (PQIntervalType)",
      "definition" : "Angivelse av referensintervall som numeriskt värde av mätvärden. Ett referensvärde anges genom att antingen ange ett intervall från det lägre värdet till det högre värdet som sätts till referensvärdet, alternativt från referensvärde som start på intervallet utan angivelse av intervallets slut för att ange att normalvärde ligger över referensvärdet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.description",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.description",
      "short" : "Beskrivning av referensintervall",
      "definition" : "Textuell beskrivning av referensintervall. Ett och endast ett av attributen interval och description ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.population",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.population",
      "short" : "Population för referensintervall",
      "definition" : "Angivelse av den referenspopulation som ligger till grund för angivet referensintervall.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.reference.comment",
      "short" : "Kommentar till referensintervall",
      "definition" : "Angivelse av kommentar för det angivna referensintervallet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature",
      "short" : "Mottagarsignatur",
      "definition" : "Information avseende signering av en enskild analys. Analysen signeras av hälso- och sjukvårdspersonal på den remissvarsmottagande enheten när den förs in i patientjournalen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.rivId",
      "short" : "Signatärens id",
      "definition" : "Root sätts till OID för HSA (1.2.752.129.2.1.4.1) Extension sätts till HSA-id för hälso- och sjukvårdspersonal",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.name",
      "short" : "Signatärens namn",
      "definition" : "Namn på hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.timestamp",
      "short" : "Signeringstidpunkt",
      "definition" : "Tidpunkt för signering.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.recipientSignature.byRole",
      "short" : "Yrkesroll",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature",
      "short" : "Utförarsignatur",
      "definition" : "Information avseende signering av en enskild analys. Analysen signeras av den hälso- och sjukvårdspersonal som utför analysen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.rivId",
      "short" : "Signatärens id",
      "definition" : "Root sätts till OID för HSA (1.2.752.129.2.1.4.1) Extension sätts till HSA-id för hälso- och sjukvårdspersonal",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.name",
      "short" : "Signatärens namn",
      "definition" : "Namn på hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.timestamp",
      "short" : "Signeringstidpunkt",
      "definition" : "Tidpunkt då signering genomfördes.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.performerSignature.byRole",
      "short" : "Yrkesroll",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.related",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis.result.related",
      "short" : "Relaterade analyser",
      "definition" : "Relaterade analyser",
      "min" : 0,
      "max" : "*",
      "contentReference" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMLaboratoryOrderOutcome#SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.groupOfAnalyses.analysis"
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientUnit",
      "short" : "Mottagande enhet",
      "definition" : "Mottagande enhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientUnit.rivId",
      "short" : "Enhetens HSA-id",
      "definition" : "Identitet för mottagande enhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientUnit.name",
      "short" : "Enhetens namn",
      "definition" : "Namn på mottagande enhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientSignature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientSignature",
      "short" : "Beställarens signatur",
      "definition" : "Information avseende signering av laboratoriesvaret. Laboratoriesvaret signeras av hälso- och sjukvårdspersonal på den remissvarsmottagande enheten när det förs in i patientjournalen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientSignature.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientSignature.rivId",
      "short" : "Signatärens id",
      "definition" : "Root sätts till OID för HSA (1.2.752.129.2.1.4.1) Extension sätts till HSA-id för hälso- och sjukvårdspersonal",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientSignature.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientSignature.name",
      "short" : "Signatärens namn",
      "definition" : "Namn på hälso- och sjukvårdspersonal",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientSignature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientSignature.timestamp",
      "short" : "Signeringstidpunkt",
      "definition" : "Tidpunkt för signering.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientSignature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.recipientSignature.byRole",
      "short" : "Yrkesroll",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4). Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome4"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.contactInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.contactInformation",
      "short" : "Kontaktinformation",
      "definition" : "Information om var eller till vem vården kan vända sig vid frågor om laboratoriesvaret.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.contactInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:4"
      }],
      "path" : "SEEHDSLMLaboratoryOrderOutcome.laboratoryOrderOutcome.body.contactInformation.text",
      "short" : "Kontaktinformationstext",
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
