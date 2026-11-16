# GetCarePlans - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetCarePlans 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMCarePlans.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Terminologibindningar (differential)

#### Begränsningar

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **Differentialvy** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Terminologibindningar (differential)

#### Begränsningar

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMCarePlans.csv), [Excel](../StructureDefinition-SEEHDSLMCarePlans.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMCarePlans",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetCarePlansResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:GetCarePlansResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCarePlans",
  "version" : "0.9.0",
  "name" : "SEEHDSLMCarePlans",
  "title" : "GetCarePlans",
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
  "description" : "Logisk modell för tjänstekontraktet GetCarePlans\n(RIV-TA urn:riv:clinicalprocess:logistics:logistics:GetCarePlans:2).\nRepresenterar responsens informationsstruktur (GetCarePlansResponseType).\nEn lista med CarePlanType returneras, var och en med header- och body-element.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCarePlans",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMCarePlans",
      "path" : "SEEHDSLMCarePlans",
      "short" : "GetCarePlans",
      "definition" : "Logisk modell för tjänstekontraktet GetCarePlans\n(RIV-TA urn:riv:clinicalprocess:logistics:logistics:GetCarePlans:2).\nRepresenterar responsens informationsstruktur (GetCarePlansResponseType).\nEn lista med CarePlanType returneras, var och en med header- och body-element."
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan",
      "path" : "SEEHDSLMCarePlans.carePlan",
      "short" : "Vård- och omsorgsplaner som matchar begäran",
      "definition" : "Lista med vård- och omsorgsplaner för patienten. Varje post innehåller\nheader (basinformation) och body (planspecifik information).",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader",
      "short" : "Innehåller basinformation om dokumentet",
      "definition" : "Innehåller basinformation om dokumentet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.documentId",
      "short" : "Planens identitet, unik inom källsystemet",
      "definition" : "Vård- och omsorgsplanens identitet som är unik inom källsystemet. Identifieraren ska vara konsistent och beständigt mellan olika majorversioner av ett kontrakt. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska vara konsistent och beständigt mellan olika kontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.sourceSystemHSAId",
      "short" : "HSA-id för källsystemet",
      "definition" : "HSA-id för det system som dokumentet är skapat i.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.documentTitle",
      "short" : "Rubrik för vård- och omsorgsplanen",
      "definition" : "Text som innehåller en rubrik som beskriver innehållet i vård- och omsorgsplanen. För att underlätta för användaren att orientera sig i gränssnittet är det viktigt att ange en deskriptiv text i attributet rubrik. Inga krav finns dock på struktur för detta. Exempel: Samordnad vårdplanering Rehabiliteringsplan.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.documentTime",
      "short" : "Tidpunkt då planen upprättades (YYYYMMDDhhmmss)",
      "definition" : "Tidpunkt då vård- och omsorgsplanen upprättats.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.patientId",
      "short" : "Patientens identifierare (personnummer/samordningsnummer)",
      "definition" : "Id för patienten.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeLogisticsLogistics3"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional",
      "short" : "Ansvarig hälso- och sjukvårdspersonal",
      "definition" : "Hälso- och sjukvårdspersonal som ansvarar för vård- och omsorgsplanen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt då informationen registrerades (YYYYMMDDhhmmss)",
      "definition" : "Tidpunkt då informationen registrerades. Regel: Regel 2\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "HSA-id för ansvarig personal",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som ansvar för vårdplanen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på ansvarig personal",
      "definition" : "Namn på hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Befattning (KV Befattning OID 1.2.752.129.2.2.1.4)",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4) användas. Se referens [R6].",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeLogisticsLogistics3"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Organisationsenhet för ansvarig personal",
      "definition" : "Den organisation som hälso- och sjukvårdspersonalen är uppdragstagare på. Regel: Regel 4",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för org.enhet",
      "definition" : "HSA-id för organisationsenhet. Regel: Regel 4",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn på org.enhet",
      "definition" : "Namnet på den organisation som den ansvariga hälso- och sjukvårdspersonalen är uppdragstagare på. Regel: Regel 4",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till org.enhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post till org.enhet",
      "definition" : "Epost till enhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress för org.enhet",
      "definition" : "Postadress för den organisation som hälso- och sjukvårdspersonal en är uppdragstagare på. Skrivs på ett så naturligt sätt som möjligt, exempelvis: ”Storgatan 12 468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats för org.enhet",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet (Regel 1: PDL/Sparr)",
      "definition" : "HSA-id för vårdenhet. Regel: Regel 1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivare (Regel 1: PDL/Sparr)",
      "definition" : "HSA-id för vårdgivaren, som är vårdgivare för den enhet som hälso- och sjukvårdspersonalalen är uppdragstagare för. Regel: Regel 1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.legalAuthenticator",
      "short" : "Signeringsinformation",
      "definition" : "Information om vem som signerat informationen i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.legalAuthenticator.signatureTime",
      "short" : "Tidpunkt för signering (YYYYMMDDhhmmss)",
      "definition" : "Tidpunkt för signering\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id för signerare",
      "definition" : "HSA-id för person som signerat dokumentet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namn på signerare",
      "definition" : "Namnen i klartext för signerande person.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.approvedForPatient",
      "short" : "Informationen godkänd för patient (Regel 3)",
      "definition" : "Anger om information får delas till patient. Värdet sätts i sådant fall till true, i annat fall till false. Regel: Regel 3",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.nullified",
      "short" : "Makulerad",
      "definition" : "Ska ej anges",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.nullifiedReason",
      "short" : "Makuleringsorsak",
      "definition" : "Ska ej anges",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanHeader.careContactId",
      "short" : "Refererad vårdkontakt-id",
      "definition" : "Identitetet för den vårdkontakt som föranlett den information som omfattas av dokumentet. Identiteten är unik inom källsystemet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanBody",
      "short" : "carePlanBody",
      "definition" : "carePlanBody",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanBody.content",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanBody.content",
      "short" : "Innehåll i vård- och omsorgsplanen (MultimediaType)",
      "definition" : "MultimediaType-element med planens innehåll. Binärdata max 100 KB per TKB.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getcareplans-content-xor",
        "severity" : "error",
        "human" : "Antingen value eller reference ska anges i content, inte båda",
        "expression" : "(value.exists() or reference.exists()) and (value.exists().not() or reference.exists().not())",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCarePlans"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanBody.content.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanBody.content.rivId",
      "short" : "id (ej tillämpligt)",
      "definition" : "N/A — content.id är 0..0 per TKB för GetCarePlans.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanBody.content.mediaType",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanBody.content.mediaType",
      "short" : "Mediatyp (MIME-typ): text/plain, text/html, image/jpeg, image/png, image/tiff, application/pdf",
      "definition" : "Typ av multimedia (enligt HL7). Följande format för mediatype kan tillämpas i denna version: text/plain text/html image/png image/jpeg image/tiff application/pdf\nTillåtna värden enligt XSD: application/dicom, application/msword, application/pdf, audio/basic, audio/k32adpcm, audio/mpeg, image/g3fax, image/gif, image/jpeg, image/png, image/tiff, model/vrml, multipart/x-hl7-cda-level1, text/html, text/plain, text/rtf, text/sgml, text/x-hl7-ft, text/xml, video/mpeg, video/x-avi.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanBody.content.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanBody.content.value",
      "short" : "Binärdata (base64) – XOR med reference",
      "definition" : "Value är binärdata som representerar objektet. Ett och endast ett av attributen value och reference ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBase64Binary"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanBody.content.reference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanBody.content.reference",
      "short" : "Referens till extern fil (URL) – XOR med value",
      "definition" : "Referens till extern binär fil i form av en URL. Ett och endast ett av attributen value och reference ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanBody.participatingCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanBody.participatingCareUnitHSAId",
      "short" : "Deltagande vårdenheters HSA-id (IIType)",
      "definition" : "En Vård- och omsorgsplan har noll eller flera deltagande enheter.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeLogisticsLogistics3"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanBody.typeOfCarePlanEnum",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanBody.typeOfCarePlanEnum",
      "short" : "Typ av vård- och omsorgsplan",
      "definition" : "Tillåtna värden enligt XSD: SIP, SPLPTLRV, SPU, VP, HP, RP, GP, SVP.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.carePlan.carePlanBody.typeOfCarePlanEnum.value",
      "path" : "SEEHDSLMCarePlans.carePlan.carePlanBody.typeOfCarePlanEnum.value",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/typeofcareplan-vs"
      }
    },
    {
      "id" : "SEEHDSLMCarePlans.result",
      "path" : "SEEHDSLMCarePlans.result",
      "short" : "Resultatkod för anropet",
      "definition" : "Innehåller information om begäran gick bra eller ej.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.result.resultCode",
      "short" : "Resultatkod: OK, INFO eller ERROR",
      "definition" : "Kan endast vara OK, INFO eller ERROR\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.result.errorCode",
      "short" : "Felkod vid ERROR (INVALID_REQUEST)",
      "definition" : "Sätts endast om resultCode är ERROR, se kapitel 4.4 för mer information.\nTillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.result.logId",
      "short" : "UUID för felsökning",
      "definition" : "En UUID som kan användas vid felanmälan för att användas vid felsökning av producent.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.result.subCode",
      "short" : "Subkod",
      "definition" : "Inga subkoder är specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCarePlans.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:logistics:logistics:3"
      }],
      "path" : "SEEHDSLMCarePlans.result.message",
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
