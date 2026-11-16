# GetCareDocumentation - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetCareDocumentation 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMCareDocumentation.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMCareDocumentation.csv), [Excel](../StructureDefinition-SEEHDSLMCareDocumentation.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMCareDocumentation",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetCareDocumentationResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:description:GetCareDocumentationResponder:3"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareDocumentation",
  "version" : "0.9.0",
  "name" : "SEEHDSLMCareDocumentation",
  "title" : "GetCareDocumentation",
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
  "description" : "Logisk modell för tjänstekontraktet GetCareDocumentation\n(RIV-TA urn:riv:clinicalprocess:healthcond:description:GetCareDocumentationResponder:3).\nRepresenterar responsens informationsstruktur: journalanteckningar för en patient.\nAnteckningstyper: utredning, åtgärd/behandling, sammanfattning, samordning, inskrivning,\nslutanteckning, anteckning utan fysiskt möte, slutenvårdsanteckning och besöksanteckning.\nMeddelandeformatet är kompatibelt med HL7 v3 CDA v2.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareDocumentation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMCareDocumentation",
      "path" : "SEEHDSLMCareDocumentation",
      "short" : "GetCareDocumentation",
      "definition" : "Logisk modell för tjänstekontraktet GetCareDocumentation\n(RIV-TA urn:riv:clinicalprocess:healthcond:description:GetCareDocumentationResponder:3).\nRepresenterar responsens informationsstruktur: journalanteckningar för en patient.\nAnteckningstyper: utredning, åtgärd/behandling, sammanfattning, samordning, inskrivning,\nslutanteckning, anteckning utan fysiskt möte, slutenvårdsanteckning och besöksanteckning.\nMeddelandeformatet är kompatibelt med HL7 v3 CDA v2."
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation",
      "path" : "SEEHDSLMCareDocumentation.careDocumentation",
      "short" : "Journalanteckning",
      "definition" : "De anteckningar som matchar begäran. En instans per anteckning.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header",
      "short" : "JoL-header",
      "definition" : "JoL-header v2.2. Innehåller metainformation gemensam för JoL-tjänstekontrakt.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader",
      "short" : "Åtkomstkontrollheader",
      "definition" : "Information för kontroll av åtkomst enligt PDL. Uppgifterna krävs för\nspärrhantering, åtkomstkontroll samt loggning.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.accountableHealthcareProvider",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.accountableHealthcareProvider",
      "short" : "Informationsägande vårdgivare",
      "definition" : "Id för informationsägande vårdgivare. HSA-id eller lokalt id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.accountableCareUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.accountableCareUnit",
      "short" : "Informationsägande vårdenhet",
      "definition" : "Id för informationsägande vårdenhet angivet med HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.patientId",
      "short" : "Patientens identitetsbeteckning",
      "definition" : "Patientens identitetsbeteckning. Personnummer, samordningsnummer eller nationellt reservnummer.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.careProcessId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.careProcessId",
      "short" : "Id för individanpassad vårdprocess",
      "definition" : "Id för den individanpassade vårdprocess som informationen ingår i.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.blockComparisonTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.blockComparisonTime",
      "short" : "Jämförelsetidpunkt för spärrkontroll",
      "definition" : "Den tidpunkt mot vilken spärrkontroll sker vid åtkomst till journalinformation.\nFormat: YYYYMMDDhhmmss. Kardinalitet: Obligatorisk.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.accessControlHeader.approvedForPatient",
      "short" : "Godkänd för visning till patient",
      "definition" : "Ansvarig vårdpersonals beslut, alternativt baserat på automatisk menprövning,\nom informationen är godkänd för visning till patient.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.sourceSystemId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.sourceSystemId",
      "short" : "Källsystem",
      "definition" : "Det källsystem som informationen lagras i. Fältet root sätts till HSA-id för källsystemet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.record",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.record",
      "short" : "Uppgift i patientjournal",
      "definition" : "Metainformation avseende journaluppgiften (recorden).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.record.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.record.rivId",
      "short" : "Journaluppgiftens unika identifierare",
      "definition" : "Unik och beständig identifierare för uppgift i patientjournal.\nSka vara unik — samma id får inte förekomma flera gånger (XSD-regel).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.record.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.record.timestamp",
      "short" : "Skapandetidpunkt",
      "definition" : "Första tidpunkten då denna journalinformation skapades.\nFormat: YYYYMMDDhhmmss. Kardinalitet: Obligatorisk.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author",
      "short" : "Dokumentationsansvarig",
      "definition" : "Hälso- och sjukvårdspersonal som ansvarar för informationen i journaluppgiften.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.rivId",
      "short" : "HSA-id för dokumentationsansvarig",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal. Fältet root sätts till OID för HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.name",
      "short" : "Namn på dokumentationsansvarig",
      "definition" : "Namn på hälso- och sjukvårdspersonal.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.timestamp",
      "short" : "Tidpunkt för informationsskapande",
      "definition" : "Tidpunkt vid vilken journalinformationen skapades av författaren.\nFormat: YYYYMMDDhhmmss. Kardinalitet: Obligatorisk.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.byRole",
      "short" : "Befattning",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning vid tidpunkten för dokumentationen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit",
      "short" : "Organisationsenhet",
      "definition" : "Den organisation som författaren är uppdragstagare i vid dokumentationstillfället.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på den organisation som författaren är uppdragstagare i.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress till organisationsenhet. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.author.orgUnit.orgUnitLocation",
      "short" : "Plats för organisationsenhet",
      "definition" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.signature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.signature",
      "short" : "Signeringsinformation",
      "definition" : "Signeringsinformation för journaluppgiften.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.signature.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.signature.rivId",
      "short" : "HSA-id för signerande person",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som signerat journaluppgiften.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.signature.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.signature.name",
      "short" : "Namn på signerande person",
      "definition" : "Namn på hälso- och sjukvårdspersonal som signerat journaluppgiften.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.signature.timestamp",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.signature.timestamp",
      "short" : "Tidpunkt för signering",
      "definition" : "Anger tidpunkten för signering av uppgift i patientjournal.\nFormat: YYYYMMDDhhmmss. Kardinalitet: Valfri.\nTKB anger kardinaliteten 0..1, men XSD:n kräver 1..1. Modellen följer XSD:n.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.header.signature.byRole",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.header.signature.byRole",
      "short" : "Befattning vid signering",
      "definition" : "Information om signerande persons befattning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body",
      "short" : "Journalanteckningens innehåll",
      "definition" : "Journalanteckning — informationsinnehållet i anteckningen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getcaredocumentation-body-xor",
        "severity" : "error",
        "human" : "Antingen clinicalDocumentNoteText eller multimediaEntry ska anges, ej båda",
        "expression" : "clinicalDocumentNoteText.exists() xor multimediaEntry.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareDocumentation"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.clinicalDocumentNoteCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.clinicalDocumentNoteCode",
      "short" : "Typ av anteckning",
      "definition" : "Typ av anteckning. Kod tas från KV Anteckningstyp (OID: 1.2.752.129.2.2.2.11).\nKodverk/värdemängd: ClinicalDocumentNoteCodeVS.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.clinicalDocumentNoteTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.clinicalDocumentNoteTitle",
      "short" : "Rubrik på anteckningen",
      "definition" : "Titel på anteckningen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.clinicalDocumentNoteText",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.clinicalDocumentNoteText",
      "short" : "Anteckningens textinnehåll",
      "definition" : "Journalanteckningens innehåll i text. Texten kan vara formaterad i DocBook-format\noch ska då vara 'entity encoded'. Ömsesidigt uteslutande med multimediaEntry.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.multimediaEntry",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.multimediaEntry",
      "short" : "Binär bilaga",
      "definition" : "Journalanteckningens innehåll i form av en multimediafil.\nÖmsesidigt uteslutande med clinicalDocumentNoteText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getcaredocumentation-multimedia-xor",
        "severity" : "error",
        "human" : "Antingen value eller reference ska anges i multimediaEntry, ej båda",
        "expression" : "value.exists() xor reference.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMCareDocumentation"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.multimediaEntry.mediaType",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.multimediaEntry.mediaType",
      "short" : "Medietyp",
      "definition" : "Typ av multimedia (MIME-typ). Tillåtna värden enligt MediaTypeEnum.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.multimediaEntry.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.multimediaEntry.value",
      "short" : "Binärdata",
      "definition" : "Binärdata som representerar objektet. Ömsesidigt uteslutande med reference.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBase64Binary"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.multimediaEntry.reference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.multimediaEntry.reference",
      "short" : "Referens till extern fil",
      "definition" : "Referens till extern binär fil i form av en URL. Ömsesidigt uteslutande med value.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion",
      "short" : "Avvikande mening",
      "definition" : "Om patienten eller någon för denna ansvarig person är av avvikande mening om\nnågon del av journalanteckningen.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion.opinionId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion.opinionId",
      "short" : "Id för avvikande mening",
      "definition" : "En universellt unik identifierare för den avvikande meningen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion.authorTime",
      "short" : "Tidpunkt för avvikande mening",
      "definition" : "Tidpunkten då den avvikande meningen författades. Format: YYYYMMDDhhmmss.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion.opinion",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion.opinion",
      "short" : "Text för avvikande mening",
      "definition" : "Text som innehåller den avvikande meningen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion.personId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion.personId",
      "short" : "Id för författare till avvikande mening",
      "definition" : "Id för författaren av den avvikande meningen.\nroot sätts till OID för typ av identifierare. För personnummer: 1.2.752.129.2.1.3.1.\nextension sätts till personens identifierare (12 tecken).\nEnligt TKB i detta sammanhang: extension 1..1.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondDescription3"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion.personName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.careDocumentation.body.dissentingOpinion.personName",
      "short" : "Namn på författare till avvikande mening",
      "definition" : "Namnet på författaren av den avvikande meningen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.hasMore",
      "path" : "SEEHDSLMCareDocumentation.hasMore",
      "short" : "Indikation om fler poster",
      "definition" : "Anges av tjänsteproducent när det finns ytterligare information att hämta\n(partiell datahämtning). Referensen ska vara giltig i minst en timme.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.hasMore.logicalAddress",
      "path" : "SEEHDSLMCareDocumentation.hasMore.logicalAddress",
      "short" : "Logisk adress för partiell hämtning",
      "definition" : "Den logiska adressen till tjänsteproducenten som tillhandahåller resterande information.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.hasMore.reference",
      "path" : "SEEHDSLMCareDocumentation.hasMore.reference",
      "short" : "Referens för partiell hämtning",
      "definition" : "En unik identifierare som tjänstekonsumenten anger i nästa anrop via hasMoreReference.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.result",
      "path" : "SEEHDSLMCareDocumentation.result",
      "short" : "Resultat",
      "definition" : "Innehåller information om det gick bra eller ej att besvara begäran.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.result.resultCode",
      "short" : "Resultatkod",
      "definition" : "Anger resultatet av besvarad förfrågan. Tillåtna värden: OK, INFO, ERROR.\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMCareDocumentation.result.resultText",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:description:3"
      }],
      "path" : "SEEHDSLMCareDocumentation.result.resultText",
      "short" : "Resultattext",
      "definition" : "Optionellt felmeddelande som innehåller information om eventuella fel.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    }]
  }
}

```
