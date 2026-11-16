# GetCareContacts 2.0 - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetCareContacts 2.0 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMCareContactsV20.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMCareContactsV20.csv), [Excel](../StructureDefinition-SEEHDSLMCareContactsV20.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMCareContactsV20",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetCareContactsResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:GetCareContactsResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareContactsV20",
  "version" : "0.9.0",
  "name" : "SEEHDSLMCareContactsV20",
  "title" : "GetCareContacts 2.0",
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
  "description" : "Logisk modell för version 2.0 av tjänstekontraktet GetCareContacts\n(urn:riv:clinicalprocess:logistics:logistics:GetCareContactsResponder:2).\nMappningen utgår från versionen i SEEHDSLMCareContacts. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareContactsV20",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMCareContactsV20",
      "path" : "SEEHDSLMCareContactsV20",
      "short" : "GetCareContacts 2.0",
      "definition" : "Logisk modell för version 2.0 av tjänstekontraktet GetCareContacts\n(urn:riv:clinicalprocess:logistics:logistics:GetCareContactsResponder:2).\nMappningen utgår från versionen i SEEHDSLMCareContacts. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida."
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact",
      "path" : "SEEHDSLMCareContactsV20.careContact",
      "short" : "De hälso- och sjukvårdskontakter som matchar begäran",
      "definition" : "De hälso- och sjukvårdskontakter som matchar begäran.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader",
      "short" : "careContactId: Vårdkontaktens identitet som är unik inom källsystemet sourceSystemHSAId: HSAId för det system …",
      "definition" : "careContactId: Vårdkontaktens identitet som är unik inom källsystemet sourceSystemHSAId: HSAId för det system som dokumentet är skapat i. documentTime: Tid då vård- eller omsorgskontakten registrerades patientId: Patientens ID (enligt PatientIdType). type sätts till OID för typ av identifierare. För personnummer ska Skatteverkets personnummer (1.2.752.129.2.1.3.1). För samordningsnummer ska Skatteverkets samordningsnummer (1.2.752.129.2.1.3.3). För reservnummer används lokalt definierade reservnummet, exempelvis SLL reservnummer (1.2.752.97.3.1.3) accountableHealthcareProfessional Hälso- och sjukvårdsperson som ansvarar för vårdkontakten. accountableHealthcareProfessionalOrgUnit Organisationsenhet för vård- och omsorgspersonens uppdrag i samband med vårdkontakten. approvedForPatient: Anger om information får delas till patient. Värdet sätts i sådant fall till true, i annat fall till false.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.documentId",
      "short" : "Identifieraren ska vara konsistent och beständigt mellan olika majorversioner av ett kontrakt",
      "definition" : "Identifieraren ska vara konsistent och beständigt mellan olika majorversioner av ett kontrakt. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska vara konsistent och beständigt mellan olika kontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.sourceSystemHSAId",
      "short" : "HSAid för det system som dokumentet är skapat i",
      "definition" : "HSAid för det system som dokumentet är skapat i.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.patientId",
      "short" : "Id för patienten",
      "definition" : "Id för patienten. Anges med 12 siffror utan avskiljare.id sätts till patientens identifierare.Type sätts till OID för typ av identifierare. För personnummer ska Skatteverkets personnummer (1.2.752.129.2.1.3.1).För samordningsnummer ska Skatteverkets samordningsnummer (1.2.752.129.2.1.3.3).För reservnummer används lokalt definierade reservnummet, exempelvis SLL reservnummer (1.2.752.97.3.1.3)",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeLogisticsLogistics2"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional",
      "short" : "Ansvarig hälso- och sjukvårdsperson",
      "definition" : "Ansvarig hälso- och sjukvårdsperson.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Den tidpunkt då dokumentet skapades",
      "definition" : "Den tidpunkt då dokumentet skapades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "HSA-id för hälso- och sjukvårdspersonal",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal. Ska anges om tillgänglig.\nTKB anger kardinaliteten 0..1, men XSD:n kräver 1..1. Modellen följer XSD:n.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på hälso- och sjukvårdspersonal",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Om tillgängligt ska detta anges.\nTKB anger kardinaliteten 0..1, men XSD:n kräver 1..1. Modellen följer XSD:n.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Information om personens befattning",
      "definition" : "Information om personens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4) användas.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeLogisticsLogistics2"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Den organisation som angiven hälso- och sjukvårdsperson är uppdragstagare på",
      "definition" : "Den organisation som angiven hälso- och sjukvårdsperson är uppdragstagare på. Om tillgängligt ska detta anges.\nTKB anger kardinaliteten 0..1, men XSD:n kräver 1..1. Modellen följer XSD:n.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. Om tillgängligt ska detta anges.\nTKB anger kardinaliteten 0..1, men XSD:n kräver 1..1. Modellen följer XSD:n.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt ska detta anges.\nTKB anger kardinaliteten 0..1, men XSD:n kräver 1..1. Modellen följer XSD:n.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "Epost till enhet",
      "definition" : "Epost till enhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress till enhet",
      "definition" : "Postadress till enhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet som hälso- och sjukvårdspersonen är uppdragstagare för",
      "definition" : "HSA-id för vårdenhet som hälso- och sjukvårdspersonen är uppdragstagare för. Ska anges om tillgänglig.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivaren, som är vårdgivare för den enhet som författaren är uppdragstagare för",
      "definition" : "HSA-id för vårdgivaren, som är vårdgivare för den enhet som författaren är uppdragstagare för. Ska anges om tillgänglig.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.approvedForPatient",
      "short" : "Anger om information får delas till patient",
      "definition" : "Anger om information får delas till patient. Värdet sätts i sådant fall till true, i annat fall till false.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.nullified",
      "short" : "Anger om dokumentet makulerats i källsystemet",
      "definition" : "Anger om dokumentet makulerats i källsystemet. Sätts i så fall till true annars false. Används bl.a. i statistik-/rapportuttag med hjälp av tjänstekontrakten.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactHeader.nullifiedReason",
      "short" : "Anger orsak till makulering",
      "definition" : "Anger orsak till makulering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody",
      "short" : "careContactCode: Typ av vård- och omsorgsdokumentation",
      "definition" : "careContactCode: Typ av vård- och omsorgsdokumentation. Nullvärde tillåtetet. careContactReason: Text som beskriver orsaken till vård- och omsorgskontakt som vård- och omsorgstagaren själv eller dess företrädare anger. careContactOrgUnit: Den enhet som kontakt utfördes vid careContactTimePeriod: För besök sätts sluttidpunken till samma tid som anges som starttidpunkt. För planerade kontakter sätts ingen sluttidpunkt. Pågående vårdtillfälle ska anges på samma sätt som en planerad vårdkontakt, dvs med angivet startdatum, men utan slutdatum. careContactStatus: Status på vårdkontakten enligt kodverk ur NPÖ RIV-spec 2.2.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactCode",
      "short" : "careContactCode",
      "definition" : "Tillåtna värden enligt XSD: 1, 2, 3, 4, 5.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactReason",
      "short" : "careContactReason",
      "definition" : "careContactReason",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit",
      "short" : "Information om en organisationsenhet careContactOrgUnitHsaId: HSA-id för organisationsenhet …",
      "definition" : "Information om en organisationsenhet careContactOrgUnitHsaId: HSA-id för organisationsenhet careContactOrgUnitName Namn på organisationsenhet careContactOrgUnitTelecom: Telefon till organisationsenhet careContactOrgUnitEmail: Epost till enhet careContactOrgUnitAddress: Postadress till enhet careContactOrgUnitLocation: Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. Om tillgängligt ska detta anges.\nTKB anger kardinaliteten 0..1, men XSD:n kräver 1..1. Modellen följer XSD:n.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt ska detta anges.\nTKB anger kardinaliteten 0..1, men XSD:n kräver 1..1. Modellen följer XSD:n.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitEmail",
      "short" : "Epost till enhet",
      "definition" : "Epost till enhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitAddress",
      "short" : "Postadress till enhet",
      "definition" : "Postadress till enhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactOrgUnit.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactTimePeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactTimePeriod",
      "short" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum",
      "definition" : "Används för att specificera ett datumintervall med hjälp av start- och slutdatum. start: Startdatum på formatet YYYYMMDDhhmmss end: Slutdatum på formatet YYYYMMDDhhmmss",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeLogisticsLogistics2"
      }]
    },
    {
      "id" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:2"
      }],
      "path" : "SEEHDSLMCareContactsV20.careContact.careContactBody.careContactStatus",
      "short" : "careContactStatus",
      "definition" : "Tillåtna värden enligt XSD: 1, 2, 3, 4, 5.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    }]
  }
}

```
