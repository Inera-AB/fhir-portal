# GetCareContacts - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetCareContacts 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMCareContacts.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMCareContacts.csv), [Excel](../StructureDefinition-SEEHDSLMCareContacts.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMCareContacts",
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
    "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:GetCareContactsResponder:3"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareContacts",
  "version" : "0.9.0",
  "name" : "SEEHDSLMCareContacts",
  "title" : "GetCareContacts",
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
  "description" : "Logisk modell för tjänstekontraktet GetCareContacts\n(RIV-TA urn:riv:clinicalprocess:logistics:logistics:GetCareContacts:3).\nRepresenterar responsens informationsstruktur (GetCareContactsResponseType).\nEn lista med CareContactType returneras.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareContacts",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMCareContacts",
      "path" : "SEEHDSLMCareContacts",
      "short" : "GetCareContacts",
      "definition" : "Logisk modell för tjänstekontraktet GetCareContacts\n(RIV-TA urn:riv:clinicalprocess:logistics:logistics:GetCareContacts:3).\nRepresenterar responsens informationsstruktur (GetCareContactsResponseType).\nEn lista med CareContactType returneras."
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact",
      "path" : "SEEHDSLMCareContacts.careContact",
      "short" : "Vårdkontakter som matchar begäran",
      "definition" : "De vårdkontakter som matchar begäran.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader",
      "short" : "Innehåller basinformation om dokumentet",
      "definition" : "Innehåller basinformation om dokumentet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.documentId",
      "short" : "Vårdkontaktens identitet, unik inom källsystemet",
      "definition" : "Vårdkontaktens identitet som är unik inom källsystemet. Identifieraren ska vara konsistent och beständigt mellan olika majorversioner av ett kontrakt. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska vara konsistent och beständigt mellan olika kontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.sourceSystemHSAId",
      "short" : "HSA-id för källsystemet",
      "definition" : "HSA-id för det system som dokumentet är skapat i.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.documentTitle",
      "short" : "Titel (ej tillämpligt)",
      "definition" : "N/A — GetCareContacts skickar inte documentTitle. Elementet är 0..0 per TKB.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.documentTime",
      "short" : "Tidpunkt (ej tillämpligt)",
      "definition" : "N/A — GetCareContacts skickar inte documentTime. Elementet är 0..0 per TKB.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.patientId",
      "short" : "Patientens identifierare (personnummer/samordningsnummer)",
      "definition" : "Id för patienten.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeLogisticsLogistics3"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional",
      "short" : "Ansvarig hälso- och sjukvårdspersonal",
      "definition" : "Hälso- och sjukvårdspersonalen som ansvarar för vårdkontakten.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt då informationen registrerades (YYYYMMDDhhmmss)",
      "definition" : "Tidpunkt då informationen registrerades. Regel: Regel 2\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "HSA-id för ansvarig personal",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som ansvar för vårdkontakten.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på ansvarig personal",
      "definition" : "Namn på hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Befattning (KV Befattning OID 1.2.752.129.2.2.1.4)",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4) användas. Se referens [R6].",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeLogisticsLogistics3"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Organisationsenhet för ansvarig personal (Regel 4)",
      "definition" : "Den organisation som hälso- och sjukvårdspersonen är uppdragstagare på. Regel: Regel 4",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för org.enhet",
      "definition" : "HSA-id för organisationsenhet. Regel: Regel 4",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn på org.enhet",
      "definition" : "Namnet på den organisation som den ansvariga hälso- och sjukvårdspersonalen är uppdragstagare på. Regel: Regel 4",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till org.enhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post till org.enhet",
      "definition" : "Epost till enhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress för org.enhet",
      "definition" : "Postadress för den organisation som hälso- och sjukvårdspersonal en är uppdragstagare på. Skrivs på ett så naturligt sätt som möjligt, exempelvis: ”Storgatan 12 468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats för org.enhet",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet (Regel 1: PDL/Sparr)",
      "definition" : "HSA-id för vårdenhet. Regel: Regel 1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivare (Regel 1: PDL/Sparr)",
      "definition" : "HSA-id för vårdgivaren, som är vårdgivare för den enhet som hälso- och sjukvårdspersonalen är uppdragstagare för. Regel :Regel 1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.legalAuthenticator",
      "short" : "Signering (ej tillämpligt)",
      "definition" : "N/A — GetCareContacts skickar inte legalAuthenticator. Elementet är 0..0 per TKB.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.legalAuthenticator.signatureTime",
      "short" : "signatureTime",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "legalAuthenticatorHSAId",
      "definition" : "legalAuthenticatorHSAId",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "legalAuthenticatorName",
      "definition" : "legalAuthenticatorName",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.approvedForPatient",
      "short" : "Informationen godkänd för patient (Regel 3)",
      "definition" : "Anger om information får delas till patient. Värdet sätts i sådant fall till true, i annat fall till false. Regel: Regel 3",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.nullified",
      "short" : "Makulerat (ej tillämpligt)",
      "definition" : "N/A — GetCareContacts stödjer inte nullified. Elementet är 0..0 per TKB.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.nullifiedReason",
      "short" : "Makuleringsskäl (ej tillämpligt)",
      "definition" : "N/A — GetCareContacts stödjer inte nullifiedReason. Elementet är 0..0 per TKB.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactHeader.careContactId",
      "short" : "Vårdkontakts-id i header (ej tillämpligt)",
      "definition" : "N/A — careContactId i PatientSummaryHeader är 0..0 per TKB för GetCareContacts.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody",
      "short" : "careContactBody",
      "definition" : "careContactBody",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactCode",
      "short" : "Typ av vårdkontakt (KV Vårdkontakttyp OID 1.2.752.129.2.2.2.x)",
      "definition" : "Kod som anger på vilket sätt vårdkontakten är planerad att ske, alternativt skedde. KV Vårdkontakttyp (1.2.752.129.2.2.2.25) ska användas. Se referens [R6]. Utelämnat värde betyder att värdet är okänt.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeLogisticsLogistics3"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactReason",
      "short" : "Orsak till vårdkontakt (fri text från patient/företrädare)",
      "definition" : "Text som beskriver orsaken till vårdkontakt som patienten själv eller dess företrädare anger.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit",
      "short" : "Enhet för vårdkontakten (Regel 5: krävs för NPÖ)",
      "definition" : "Den enhet som vårdkontakten utfördes vid eller planeras utföras vid. Regel: Regel 5",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för kontaktenhet",
      "definition" : "HSA-id för organisationsenhet. Regel: Regel 5",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitName",
      "short" : "Namn på kontaktenhet",
      "definition" : "Namn på organisationsenheten. Regel: Regel 5",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitTelecom",
      "short" : "Telefon till kontaktenhet",
      "definition" : "Telefon till organisationsenheten.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitEmail",
      "short" : "E-post till kontaktenhet",
      "definition" : "Epost till organisationsenheten.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitAddress",
      "short" : "Adress till kontaktenhet",
      "definition" : "Postadress till organisationsenheten.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactOrgUnit.orgUnitLocation",
      "short" : "Plats för kontaktenhet",
      "definition" : "Text som anger namnet på plats eller ort för organisationsenhetens eller funktionens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactTimePeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactTimePeriod",
      "short" : "Tidsintervall för vårdkontakten. Villkor: Minst ett av start och end måste anges.",
      "definition" : "Tidsintervall för vårdkontakt. Vid besök i öppenvård sätts careContactTimePeriod.start och careContactTimePeriod.end till samma tidpunkt (besökets startidpunkt).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeLogisticsLogistics3"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.careContactStatus",
      "short" : "Status för vårdkontakten (SNOMED CT SE, OID 1.2.752.116.2.1.1, SCTID 53761000052103)",
      "definition" : "Kod som anger aktuell status för vårdkontakten. Kodverket är definierat i SNOMED CT-SE med SCTID: 53761000052103 (Snomed CT finns tillgängligt via R11 där man kan se de publicerade koderna som är refererade)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeLogisticsLogistics3"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.additionalPatientInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.additionalPatientInformation",
      "short" : "Ytterligare patientinformation",
      "definition" : "Ytterligare information om patienten som inte går att få tag på via en gemensam PU-slagning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.additionalPatientInformation.dateOfBirth",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.additionalPatientInformation.dateOfBirth",
      "short" : "Patientens födelsedatum (YYYY / YYYYMM / YYYYMMDD)",
      "definition" : "Patientens födelsedatum.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPartialDateTypeLogisticsLogistics3"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.careContact.careContactBody.additionalPatientInformation.gender",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.careContact.careContactBody.additionalPatientInformation.gender",
      "short" : "Patientens kön (KV Kön OID 1.2.752.129.2.2.1.1)",
      "definition" : "Patientens kön. KV Kön (1.2.752.129.2.2.1.1) bör användas. Se referens [R6].\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeLogisticsLogistics3"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.result",
      "path" : "SEEHDSLMCareContacts.result",
      "short" : "Resultatkod för anropet",
      "definition" : "Innehåller information om begäran gick bra eller ej.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.result.resultCode",
      "short" : "Resultatkod: OK, INFO eller ERROR",
      "definition" : "Kan endast vara OK, INFO eller ERROR\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.result.errorCode",
      "short" : "Felkod vid ERROR (INVALID_REQUEST)",
      "definition" : "Sätts endast om resultCode är ERROR, se kapitel 4.4 för mer information.\nTillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.result.logId",
      "short" : "UUID för felsökning",
      "definition" : "En UUID som kan användas vid felanmälan för att användas vid felsökning av producent.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.result.subCode",
      "short" : "Subkod",
      "definition" : "Inga subkoder är specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareContacts.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCareContacts.result.message",
      "short" : "Beskrivande meddelande (svenska)",
      "definition" : "En beskrivande text som kan visas för användaren.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
