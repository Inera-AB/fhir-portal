# GetObservations 1.2 - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetObservations 1.2 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMObservationsV12.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMObservationsV12.csv), [Excel](../StructureDefinition-SEEHDSLMObservationsV12.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMObservationsV12",
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
    "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:GetObservationsResponder:1"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservationsV12",
  "version" : "0.9.0",
  "name" : "SEEHDSLMObservationsV12",
  "title" : "GetObservations 1.2",
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
  "description" : "Logisk modell för version 1.2 av tjänstekontraktet GetObservations\n(urn:riv:clinicalprocess:healthcond:basic:GetObservationsResponder:1).\nMappningen utgår från versionen i SEEHDSLMObservations. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservationsV12",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMObservationsV12",
      "path" : "SEEHDSLMObservationsV12",
      "short" : "GetObservations 1.2",
      "definition" : "Logisk modell för version 1.2 av tjänstekontraktet GetObservations\n(urn:riv:clinicalprocess:healthcond:basic:GetObservationsResponder:1).\nMappningen utgår från versionen i SEEHDSLMObservations. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida."
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup",
      "path" : "SEEHDSLMObservationsV12.observationGroup",
      "short" : "Grupp av observationer som delar samma patient, utförare (m",
      "definition" : "Grupp av observationer som delar samma patient, utförare (m. tillhörande organisatorisk knytning), signerare, ytterligare deltagare, källsystem, vårdprocess-id, utrustning, samt plats. Denna nivå är framförallt till för att kunna begränsa mängden redundant data i överföringen i de fall då flera observationer gjorts med samma medverkande (exempelvis mätning av systoliskt och diastoliskt blodtryck). Denna klass är en teknisk optimering som inte speglas i NI 2015:1.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.patient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.patient",
      "short" : "Den patient som observationsgruppen avser",
      "definition" : "Den patient som observationsgruppen avser.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.patient.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.patient.rivId",
      "short" : "Id för patienten, 12 tecken utan avskiljare (IIType)",
      "definition" : "- root: OID för typ av identifierare. Personnummer 1.2.752.129.2.1.3.1, samordningsnummer 1.2.752.129.2.1.3.3, reservnummer lokalt definierad OID (t.ex. SLL reservnummer 1.2.752.97.3.1.3). - extension: personnummer/samordningsnummer/reservnummer.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.patient.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.patient.name",
      "short" : "Personens namn",
      "definition" : "Personens namn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.patient.dateOfBirth",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.patient.dateOfBirth",
      "short" : "Patientens födelseår, månad och dag. Ej personnummer. Format ÅÅÅÅMMDD (DateType)",
      "definition" : "Patientens födelseår, månad och dag. Ej personnummer. Format ÅÅÅÅMMDD (DateType).\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.patient.gender",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.patient.gender",
      "short" : "Patientens kön (CVType). KV kön, OID 1.2.752.129.2.2.1.1",
      "definition" : "Koder: 0 okänt, 1 man, 2 kvinna, 9 ej tillämpligt. Kodverket finns i [R9].",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole",
      "short" : "Den som utfört observationerna inom gruppen",
      "definition" : "Den som utfört observationerna inom gruppen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getobservations12-id-choice",
        "severity" : "error",
        "human" : "Högst ett av id och person.id får anges",
        "expression" : "rivId.combine(person.rivId).count() <= 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservationsV12"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.rivId",
      "short" : "HSA-id för personen som utfört observationen (IIType). Regel 2.1",
      "definition" : "Anges enbart om observationen utförts av hälso- och sjukvårdspersonal. root = 1.2.752.129.2.1.4.1 (HSA-katalogen), extension = HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.code",
      "short" : "Den roll som utföraren agerar i under observationen (CVType)",
      "definition" : "Den roll som utföraren agerar i under observationen (CVType).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.person",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.person",
      "short" : "Den person som utfört observationen (PersonType). Regel 2.1",
      "definition" : "Används då det finns behov av att beskriva egenskaper hos personen som inte beskrivs i performerRole (t.ex. namn på hälso- och sjukvårdspersonal), eller då observationen utförts av en person som inte klassas som hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.person.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.person.rivId",
      "short" : "Identifierare för personen (IIType)",
      "definition" : "Anges endast om observationen utförts av person som INTE klassas som hälso- och sjukvårdspersonal. root: OID för personnummer (1.2.752.129.2.1.3.1), samordningsnummer (1.2.752.129.2.1.3.3) eller lokalt definierat reservnummer. extension: personnummer/samordningsnummer/reservnummer.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.person.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.person.name",
      "short" : "För- och efternamn i klartext. Regel 2.1",
      "definition" : "För- och efternamn i klartext. Regel 2.1.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit",
      "short" : "PDL-vårdenhet och vårdgivare som observationen utförs på uppdrag av (CareUnitType). Regel 2.1, 2.5",
      "definition" : "Ska endast anges då den person som utfört observationen är hälso- och sjukvårdspersonal. Krävs för spärrhantering, åtkomstkontroll samt loggning enligt PDL.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit.rivId",
      "short" : "HSA-id för PDL-vårdenhet med medicinskt ansvar för observationen (IIType)",
      "definition" : "HSA-id för PDL-vårdenhet med medicinskt ansvar för observationen (IIType).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit.name",
      "short" : "Vårdenhetens namn",
      "definition" : "Vårdenhetens namn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit.careGiver",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit.careGiver",
      "short" : "Den vårdgivare som enheten är knuten till (CareGiverType)",
      "definition" : "Den vårdgivare som enheten är knuten till (CareGiverType).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit.careGiver.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit.careGiver.rivId",
      "short" : "HSA-id för vårdgivaren (IIType)",
      "definition" : "HSA-id för vårdgivaren (IIType).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit.careGiver.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.performerRole.careUnit.careGiver.name",
      "short" : "Vårdgivarens namn",
      "definition" : "Vårdgivarens namn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.legalAuthenticator",
      "short" : "Den som signerat observationerna inom gruppen",
      "definition" : "Den som signerat observationerna inom gruppen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.legalAuthenticator.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.legalAuthenticator.rivId",
      "short" : "HSA-id för personen som signerat (IIType). root = 1.2.752.129.2.1.4.1",
      "definition" : "HSA-id för personen som signerat (IIType). root = 1.2.752.129.2.1.4.1.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.legalAuthenticator.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.legalAuthenticator.time",
      "short" : "Tid för signeringen (PartialTimeStampType). Format ÅÅÅÅMMDDttmmss där klockslaget är frivilligt",
      "definition" : "Tid för signeringen (PartialTimeStampType). Format ÅÅÅÅMMDDttmmss där klockslaget är frivilligt.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.legalAuthenticator.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.legalAuthenticator.name",
      "short" : "För- och efternamn i klartext för signerande person. Regel 2.3",
      "definition" : "För- och efternamn i klartext för signerande person. Regel 2.3.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant",
      "short" : "Övriga deltagare relaterat till observationerna inom gruppen",
      "definition" : "Övriga deltagare relaterat till observationerna inom gruppen.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getobservations12-id-choice",
        "severity" : "error",
        "human" : "Högst ett av id och person.id får anges",
        "expression" : "rivId.combine(person.rivId).count() <= 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservationsV12"
      },
      {
        "key" : "getobservations12-participant-choice",
        "severity" : "error",
        "human" : "En och endast en av person, organisation, device och location ska anges",
        "expression" : "person.combine(organisation).combine(device).combine(location).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMObservationsV12"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.rivId",
      "short" : "HSA-id för ytterligare deltagare som är hälso- och sjukvårdspersonal (IIType)",
      "definition" : "HSA-id för ytterligare deltagare som är hälso- och sjukvårdspersonal (IIType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.type",
      "short" : "Typ av deltagande (CVType), t.ex. sekundär utförare/assistent",
      "definition" : "codeSystemName, codeSystemVersion och displayName ska ej anges (0..0).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.role",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.role",
      "short" : "Den roll deltagaren agerar i (CVType), t.ex. anhörig eller vårdpersonal",
      "definition" : "codeSystemName, codeSystemVersion och displayName ska ej anges (0..0).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.time",
      "short" : "Deltagandetid om den inte överensstämmer med observationens (TimePeriodType)",
      "definition" : "Deltagandetid om den inte överensstämmer med observationens (TimePeriodType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.person",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.person",
      "short" : "Deltagande övrig person (PersonType)",
      "definition" : "Deltagande övrig person (PersonType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.person.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.person.rivId",
      "short" : "Identifierare för personen (IIType)",
      "definition" : "Identifierare för personen (IIType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.person.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.person.name",
      "short" : "För- och efternamn i klartext",
      "definition" : "För- och efternamn i klartext.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.organisation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.organisation",
      "short" : "Deltagande övrig organisation (OrganisationType)",
      "definition" : "Deltagande övrig organisation (OrganisationType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.organisation.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.organisation.rivId",
      "short" : "Id för organisation, vanligtvis HSA-id (root 1.2.752.129.2.1.4.1)",
      "definition" : "Id för organisation, vanligtvis HSA-id (root 1.2.752.129.2.1.4.1).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.organisation.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.organisation.name",
      "short" : "Organisationens namn",
      "definition" : "Organisationens namn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device",
      "short" : "Deltagande utrustning (DeviceType)",
      "definition" : "Deltagande utrustning (DeviceType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device.rivId",
      "short" : "Identitetsbeteckning på en viss verklig instans av utrustning (IIType)",
      "definition" : "Identitetsbeteckning på en viss verklig instans av utrustning (IIType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device.type",
      "short" : "Typ av deltagande utrustning (CVType)",
      "definition" : "Typ av deltagande utrustning (CVType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device.model",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device.model",
      "short" : "Modell för angiven utrustning (SCType)",
      "definition" : "Modell för angiven utrustning (SCType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device.model.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device.model.code",
      "short" : "Modellbeteckning (CVType). codeSystemVersion ska ej anges",
      "definition" : "Modellbeteckning (CVType). codeSystemVersion ska ej anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device.model.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.device.model.value",
      "short" : "Tillverkarens modellbeteckning i klartext; komplement eller i stället för modelCode",
      "definition" : "Tillverkarens modellbeteckning i klartext; komplement eller i stället för modelCode.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location",
      "short" : "Deltagande plats (LocationType). Sammanslagning av roll och plats enligt V-MIM",
      "definition" : "Deltagande plats (LocationType). Sammanslagning av roll och plats enligt V-MIM.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.rivId",
      "short" : "HSA-id för platsen; anges om platsen är en vårdenhet (IIType)",
      "definition" : "HSA-id för platsen; anges om platsen är en vårdenhet (IIType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.name",
      "short" : "Namn på den plats där observationen har genomförts",
      "definition" : "Namn på den plats där observationen har genomförts.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.address",
      "short" : "Adress till plats (AddressType)",
      "definition" : "Adress till plats (AddressType).",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.address.use",
      "short" : "Adressens användning (PostalAddressUseEnum). Den primära adressen anges utan use-kod",
      "definition" : "Adressens användning (PostalAddressUseEnum). Den primära adressen anges utan use-kod.\nTillåtna värden enligt XSD: PHYS, H, HV, WP, TMP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.address.part",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.address.part",
      "short" : "Adressdel (AddressPartType). Delarna listas i ordningen CAR, POB, SAL, ZIP, CTY, CNT, PRE, CPA",
      "definition" : "Adressdel (AddressPartType). Delarna listas i ordningen CAR, POB, SAL, ZIP, CTY, CNT, PRE, CPA.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.address.part.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.address.part.value",
      "short" : "Adressdelens värde",
      "definition" : "Adressdelens värde.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.address.part.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.address.part.type",
      "short" : "Typ av adressdel (AddressPartTypeEnum, baserad på ISO 21090)",
      "definition" : "Typ av adressdel (AddressPartTypeEnum, baserad på ISO 21090).\nTillåtna värden enligt XSD: SAL, CAR, CEN, CNT, CPA, CTY, POB, ZIP, PRE, STA.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.electronicAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.electronicAddress",
      "short" : "Elektronisk adress till plats (TelType)",
      "definition" : "Elektronisk adress till plats (TelType).",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.electronicAddress.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.electronicAddress.use",
      "short" : "Typ av elektronisk adress (TelTypeEnum): voice, fax, data, sms",
      "definition" : "Typ av elektronisk adress (TelTypeEnum): voice, fax, data, sms.\nTillåtna värden enligt XSD: voice, fax, data, sms.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.electronicAddress.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.additionalParticipant.location.electronicAddress.value",
      "short" : "Elektronisk adress",
      "definition" : "Elektronisk adress.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.sourceSystem",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.sourceSystem",
      "short" : "Källsystem som observationsgruppen lagras i",
      "definition" : "Källsystem som observationsgruppen lagras i.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.sourceSystem.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.sourceSystem.rivId",
      "short" : "HSA-id för källsystemet (IIType). root = 1.2.752.129.2.1.4.1",
      "definition" : "HSA-id för källsystemet (IIType). root = 1.2.752.129.2.1.4.1.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation",
      "short" : "De observationer som ligger inom denna grupp av observationer",
      "definition" : "De observationer som ligger inom denna grupp av observationer.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.rivId",
      "short" : "Unik identifierare för observationen (IIType)",
      "definition" : "Identifieraren ska vara konsistent och beständig mellan olika majorversioner av ett kontrakt och mellan olika kontrakt. root: vårdgivarens HSA-id. extension: den inom vårdgivaren eller källsystemet unika identifieraren för observationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.type",
      "short" : "NI 2015:1 Observation.typ — kod för typ av observation (CVType)",
      "definition" : "Det som faktiskt är avsett, önskat eller observerat tillstånd dokumenteras i value. Exempelvis kan type vara \"diagnos\", vilket innebär att value håller diagnosen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.status",
      "short" : "NI 2015:1 Observation.status (CVType). TKB: 0..0",
      "definition" : "Denna version av specifikationen tillåter endast faktiskt utförda observationer; TKB anger kardinalitet 0..0 medan schemat tillåter 0..1. Om statuskoden utelämnas antas detta vara en faktisk observation.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.time",
      "short" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum",
      "definition" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum. start: Startdatum på formatet YYYYMMDDhhmmss end: Slutdatum på formatet YYYYMMDDhhmmss",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.time.start",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.time.start",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.time.end",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.time.end",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.method",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.method",
      "short" : "Kod för typ av tillvägagångssätt för genomförandet av observationen (CVType)",
      "definition" : "Kod för typ av tillvägagångssätt för genomförandet av observationen (CVType).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.value",
      "short" : "NI 2015:1 Observation.värde — observationens utfall (ValueANYType)",
      "definition" : "En och endast en av huvudtyperna cv, pq, ivl_pq, ts och ivl_ts. I schemat en xs:sequence av valfria element (av kompatibilitetsskäl i stället för xs:choice).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.value.pq",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.value.pq",
      "short" : "Mätvärde (PQType), t.ex. 187 cm",
      "definition" : "Mätvärde (PQType), t.ex. 187 cm.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.value.ts",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.value.ts",
      "short" : "Tidpunkt (PartialTimeStampType), precision ner till endast årtal",
      "definition" : "Tidpunkt (PartialTimeStampType), precision ner till endast årtal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.value.ivlTs",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ivl_ts"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.value.ivlTs",
      "short" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum",
      "definition" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum. start: Startdatum på formatet YYYYMMDDhhmmss end: Slutdatum på formatet YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.value.ivlTs.start",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.value.ivlTs.start",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.value.ivlTs.end",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.value.ivlTs.end",
      "short" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "definition" : "YYYY, YYYYMM, YYYYMMDD, YYYYMMDDhh, YYYYMMDDhhmm, YYYYMMDDhhmmss",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.value.cv",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.value.cv",
      "short" : "Kodat värde (CVType), t.ex. diagnoskod enligt ICD-10 eller kliniskt fynd enligt Snomed CT",
      "definition" : "Kodat värde (CVType), t.ex. diagnoskod enligt ICD-10 eller kliniskt fynd enligt Snomed CT.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.value.ivlPq",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1.2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "ivl_pq"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.value.ivlPq",
      "short" : "ivlPq",
      "definition" : "ivlPq",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeHealthcondBasic12"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.targetSite",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.targetSite",
      "short" : "NI 2015:1 Observation.lokalisation (CVType)",
      "definition" : "Beskriver vad observationen avser gällande anatomi, funktion eller system. Används endast om inte type innefattar tillräcklig information om detta.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.valueNegation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.valueNegation",
      "short" : "NI 2015:1 Observation.negation — negerar betydelsen av value. Normalvärde false",
      "definition" : "NI 2015:1 Observation.negation — negerar betydelsen av value. Normalvärde false.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.description",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.description",
      "short" : "Fritextbeskrivning av observationen där sådan kompletterar kodbeteckningen",
      "definition" : "Fritextbeskrivning av observationen där sådan kompletterar kodbeteckningen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.approvedForPatient",
      "short" : "Om informationen får delas till patient (menprövad)",
      "definition" : "Om informationen får delas till patient (menprövad).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.registrationTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.registrationTime",
      "short" : "Dokumentationstidpunkt i patientens journal. Format ÅÅÅÅMMDDttmmss (TimeStampType)",
      "definition" : "Dokumentationstidpunkt i patientens journal. Format ÅÅÅÅMMDDttmmss (TimeStampType).\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.relation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.relation",
      "short" : "Typade samband till andra informationsmängder (RelationType)",
      "definition" : "Typade samband till andra informationsmängder (RelationType).",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.code",
      "short" : "Typ av relation den refererade informationen har till observationen (CVType)",
      "definition" : "Typ av relation den refererade informationen har till observationen (CVType).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation",
      "short" : "Den refererade informationen (ReferredInformationType)",
      "definition" : "Den refererade informationen (ReferredInformationType).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation.rivId",
      "short" : "Den refererade informationens identitet (IIType)",
      "definition" : "root: HSA-id för källsystem där den refererade informationen är lagrad. extension: ett inom vårdgivaren unikt id.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation.time",
      "short" : "Starttid för refererad information (PartialTimeStampType). Regel 2.4",
      "definition" : "Starttid för refererad information (PartialTimeStampType). Regel 2.4.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialTimeStampTypeHealthcondBasic1"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation.type",
      "short" : "Typ av uppgift som sambandet pekar ut — kod från Categorization i engagemangsindex, t.ex. chb-o",
      "definition" : "Typ av uppgift som sambandet pekar ut — kod från Categorization i engagemangsindex, t.ex. chb-o.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation.informationOwner",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation.informationOwner",
      "short" : "Vårdgivare som är informationsägare av den refererade informationen (InformationOwnerType)",
      "definition" : "Vårdgivare som är informationsägare av den refererade informationen (InformationOwnerType).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation.informationOwner.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:basic:1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMObservationsV12.observationGroup.observation.relation.referredInformation.informationOwner.rivId",
      "short" : "Vårdgivarens HSA-id (IIType). root = 1.2.752.129.2.1.4.1",
      "definition" : "Vårdgivarens HSA-id (IIType). root = 1.2.752.129.2.1.4.1.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondBasic1"
      }]
    }]
  }
}

```
