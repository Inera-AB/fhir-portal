# GetImagingOutcome - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetImagingOutcome 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMImagingOutcome.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMImagingOutcome.csv), [Excel](../StructureDefinition-SEEHDSLMImagingOutcome.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMImagingOutcome",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetImagingOutcomeResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:GetImagingOutcomeResponder:1"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMImagingOutcome",
  "version" : "0.9.0",
  "name" : "SEEHDSLMImagingOutcome",
  "title" : "GetImagingOutcome",
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
  "description" : "Logisk modell för tjänstekontraktet GetImagingOutcome\n(RIV-TA urn:riv:clinicalprocess:healthcond:actoutcome:GetImagingOutcome:1).\nRepresenterar responsens informationsstruktur — bilddiagnostiska resultat\nför en patient. Baseras på NPÖ RIV 2.2.0-specifikation.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMImagingOutcome",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMImagingOutcome",
      "path" : "SEEHDSLMImagingOutcome",
      "short" : "GetImagingOutcome",
      "definition" : "Logisk modell för tjänstekontraktet GetImagingOutcome\n(RIV-TA urn:riv:clinicalprocess:healthcond:actoutcome:GetImagingOutcome:1).\nRepresenterar responsens informationsstruktur — bilddiagnostiska resultat\nför en patient. Baseras på NPÖ RIV 2.2.0-specifikation."
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome",
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome",
      "short" : "Bilddiagnostiskt resultat (ett per undersökning)",
      "definition" : "De Bild-resultat(dokument) som matchar begäran.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader",
      "short" : "PatientSummaryHeader",
      "definition" : "Innehåller basinformation om dokumentet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.documentId",
      "short" : "Dokumentets unika id",
      "definition" : "Dokumentets identitet som är unik inom källsystemet. Identifieraren ska vara konsistent och beständigt mellan olika majorversioner av ett kontrakt. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska vara konsistent och beständigt mellan olika kontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.sourceSystemHSAId",
      "short" : "Källsystemets HSA-id",
      "definition" : "HSA-id för det system som dokumentet är skapat i.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.documentTitle",
      "short" : "Dokumentets titel",
      "definition" : "Titel som beskriver den information som sänds i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.documentTime",
      "short" : "Dokumentets tidpunkt",
      "definition" : "Händelsetidpunkt, om sådan finns. Tidpunkten bör vara då undersökningen gjordes inte när bilden skapades (t.ex. skannad bild).\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.patientId",
      "short" : "Patientens id",
      "definition" : "Identifierare för patient.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional",
      "short" : "Ansvarig hälso- och sjukvårdspersonal",
      "definition" : "Ansvarig hälso- och sjukvårdsperson. Ansvarig för undersökningsresultatet. Avser person som är ansvarig för det samlade dokumentet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt",
      "definition" : "Tidpunkt då dokumentet skapades. Det är den senaste tidpunkten då informationen uppdaterats i systemet som ska finnas här i de fall informationen har ändrats efter det att den skapades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id hälso-och sjukvårdspersonal. Ska anges om tillgänglig.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn",
      "definition" : "Namn på hälso-och sjukvårdspersonal. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Yrkesroll",
      "definition" : "Information om ansvarige personens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4), se referens [R 5]. Om kodverk saknas anges befattning i originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Org-enhet",
      "definition" : "Den organisation som angiven hälso-och sjukvårdsperson är uppdragstagare på. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "OrgUnit HSA-id",
      "definition" : "HSA-id för organisationsenhet. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "OrgUnit namn",
      "definition" : "Namn på organisationsenhet. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Adress",
      "definition" : "Postadress till organisationsenhet. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "Vårdenhetens HSA-id",
      "definition" : "Regel 1: Används för spärrhantering och åtkomstkontroll.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "Vårdgivarens HSA-id",
      "definition" : "Regel 1: Används för spärrhantering och åtkomstkontroll.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.legalAuthenticator",
      "short" : "Juridiskt ansvarig",
      "definition" : "Information om vem som signerat informationen i dokumentet. Det är normalt radiologen som signerar bilddiagnostiska svar. Signering = signering av remissvar. Vidimering anges i attributet attested i bodyn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.legalAuthenticator.signatureTime",
      "short" : "Signeringstidpunkt",
      "definition" : "Tidpunkt för signering.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id för person som signerat dokumentet. HSA-id för hälso-och sjukvårdspersonal. Ska anges om tillgänglig",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namn",
      "definition" : "Namnen i klartext för signerande person.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.legalAuthenticator.legalAuthenticatorRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.legalAuthenticator.legalAuthenticatorRoleCode",
      "short" : "Befattning för signerande person",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.approvedForPatient",
      "short" : "Godkänd för patientvisning",
      "definition" : "Anger om information får delas till patient. Värdet sätts i sådant fall till true, i annat fall till false.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.careContactId",
      "short" : "Vårdkontaktid",
      "definition" : "Identitetet för den hälso-och sjukvårdskontakt som föranlett den information som omfattas av dokumentet. Identiteten är unik inom källsystemet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.nullified",
      "short" : "Makulerad",
      "definition" : "Anger om dokumentet makulerats i källsystemet. Sätts i så fall till true annars false. Används bl.a. i statistik-/rapportuttag med hjälp av tjänstekontrakten.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeHeader.nullifiedReason",
      "short" : "Makuleringsorsak",
      "definition" : "Anger orsak till makulering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody",
      "short" : "Bilddiagnostisk information",
      "definition" : "Bilddiagnostisk information",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.examinationSpeciality",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.examinationSpeciality",
      "short" : "Undersökningsspecialitet",
      "definition" : "Undersökningstyp. Bör anges med kod enligt SNOMED. Text som beskriver vilken specialitet som utlåtandet gäller.Exempel: Typen av specialitet som anlitats anges i text Exempel: Patologi, Klinisk fysiologi, Logopedi",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.typeOfResult",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.typeOfResult",
      "short" : "Typ av resultat",
      "definition" : "Kodas enligt TypeOfResultCodeEnum. Se QUESTIONS.md ASSUME-003.\nTillåtna värden enligt XSD: PREL, DEF, TILL.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.resultTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.resultTime",
      "short" : "Resultatets tidpunkt",
      "definition" : "Svarstidpunkt. Tidpunkt då svar skickas till framställaren av remissen.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.resultReport",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.resultReport",
      "short" : "Resultatrapport (fritext)",
      "definition" : "Text som beskriver det sammanfattade utlåtandet kring undersökningsresultatet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.resultComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.resultComment",
      "short" : "Kommentar till resultatet",
      "definition" : "Kommentar till det sammanfattande utlåtandet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.radiationDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.radiationDose",
      "short" : "Stråldos",
      "definition" : "Ett dosvärde som härrör till undersökningen. Dosen kan anges på flera olika sätt (t.ex. som effektiv dos i Sv) eller som KAP. Den totala dosen som härrör till underökningen är summan av alla redovisade radiationDose. Enheten ska vara SI-enhet (eller kombination av sådana). (För KAP ska värdet räknas om till Gy*m² istället för Gy*cm².)",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.patientData",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.patientData",
      "short" : "Patientdata vid undersökningstillfälle",
      "definition" : "Ytterligare information om patienten med relevans för bedömningen. Kan typiskt anges i samband med givande av strukturerad bild-information enligt nedan",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.patientData.patientWeight",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.patientData.patientWeight",
      "short" : "Patientens vikt",
      "definition" : "Patientens vikt i kgvid undersökningstillfället.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.patientData.patientLength",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.patientData.patientLength",
      "short" : "Patientens längd",
      "definition" : "Patientens längd i cm vid undersökningstillfället.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording",
      "short" : "Bildtagning",
      "definition" : "Beskrivning av bild-tagning(ar). Bild(er) tas som en eller flera tagningar (noll tillåts i fall då tillgång till bild saknas, utan endast (remiss och) sammanfattande utlåtande finns). En bildtagning kan i sin tur ha flera bilder",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.recordingId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.recordingId",
      "short" : "Bildtagningens id",
      "definition" : "Id för Bild-tagningen som är unikt inom källsystemet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.examinationActivity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.examinationActivity",
      "short" : "Undersökningsaktivitet",
      "definition" : "Åtgärdskod för utförd typ av Bild. KRÅ91-kod eller i förekommande fall annat kodverk. Om inget gemensamt kodverk används, anges åtgärdsbeskrivning i originalText.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.examinationTimePeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.examinationTimePeriod",
      "short" : "Undersökningsperiod",
      "definition" : "Tidpunkt då Bild-insamlingen startar och slutar",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.examinationStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.examinationStatus",
      "short" : "Undersökningsstatus",
      "definition" : "Text som anger åtgärdens status. Kommer från KV åtgärdsstatus i V-TIM 1.0. Tillåtna värden är: Initierad, Planerad (bevakad), Tidbokad, Uppskjuten, Annullerad, Pågående, Avvakta, Avbruten, Avklarad, Inaktuell, Makulerad.\nTillåtna värden enligt XSD: Initierad, Planerad, Tidbokad, Uppskjuten, Annullerad, Pågående, Avvakta, Avbruten, Avklarad, Inaktuell, Makulerad.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.examinationUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.examinationUnit",
      "short" : "Undersökningsenhet",
      "definition" : "Text som anger vilken typ av labenhet som undersökningsresultatet härrör från. T ex MR-lab, CT inom bild",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional",
      "short" : "Ansvarig personal",
      "definition" : "Hälso- och sjukvårdsperson som är ansvarig för informationen som härstammar från insamlingstillfället. Den person som har den fysiska kontakten med patienten vid insamlandet av data.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt",
      "definition" : "Tidpunkt då dokumentet skapades. Det är den senaste tidpunkten då informationen uppdaterats i systemet som ska finnas här i de fall informationen har ändrats efter det att den skapades. Attributet sätts till detsamma som examinationTimePeriod.end, eller .start i de fall som inget .end finns\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id för hälso-och sjukvårdspersonal. Ska anges om tillgänglig.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn",
      "definition" : "Namn på hälso-och sjukvårdspersonal. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Yrkesroll",
      "definition" : "Information om ansvarige personens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4), se referens [R 5]. Om kodverk saknas anges befattning i originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Org-enhet",
      "definition" : "Den organisation som angiven hälso-och sjukvårdsperson är uppdragstagare på. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress till organisationsenhet. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats för organisationsenhet",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivare",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.numberOfImages",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.numberOfImages",
      "short" : "Antal bilder",
      "definition" : "Det totala antalet bilder i bildtagningen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData",
      "short" : "Modalitetsdata",
      "definition" : "Information om bild-utrustningen som använts",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.typeOfModality",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.typeOfModality",
      "short" : "Modalitetstyp (t.ex. CT, MR)",
      "definition" : "Modalitetstyp för bildfångande utrustning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.manufacturer",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.manufacturer",
      "short" : "Tillverkare",
      "definition" : "Producerande utrustnings tillverkare.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.modelName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.modelName",
      "short" : "Modellnamn",
      "definition" : "Producerande utrustnings modellnamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.equipmentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.equipmentId",
      "short" : "Utrustningens id",
      "definition" : "Identifierare för utrustningen. Kan tex vara serienummer eller inventarienummer.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.softwareVersion",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.softwareVersion",
      "short" : "Programvaruversion",
      "definition" : "Text som anger tillverkarens version av den bildproducerande mjukvaran",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.lineFilter",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.modalityData.lineFilter",
      "short" : "Linjefilter",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageDicomData",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageDicomData",
      "short" : "DICOM-bilddata",
      "definition" : "DICOM-objekt. För att ge renderbar data som kan visas på det sätt som användaren önskar (med hjälp av en viewer/renderare) ges möjligheten att skicka med binärdata eller en URI till ett DICOM-objekt i någon av SOP-klasserna för Bild. Både imageDicomData och ImageStaticData kan, och om möjligt bör anges för att underlätta för konsument.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getimagingoutcome-dicom-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av dicomValue och dicomReference ska anges",
        "expression" : "dicomValue.exists() xor dicomReference.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMImagingOutcome"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageDicomData.dicomSOP",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageDicomData.dicomSOP",
      "short" : "DICOM SOP (UID)",
      "definition" : "SOP UID för DICOM-objektet. Beskriver vilken information som kan förväntas i datan (jmf. mediaType nedan för statisk bild). T.ex. 1.2.840.10008.5.1.4.1.1.1.1 för digital x-ray for presentation",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageDicomData.dicomValue",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageDicomData.dicomValue",
      "short" : "DICOM binärdata",
      "definition" : "Binärdata som representerar objektet. Ett och endast ett av DicomValue och DicomReference ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBase64Binary"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageDicomData.dicomReference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageDicomData.dicomReference",
      "short" : "Referens till DICOM-bild",
      "definition" : "Referens till externt DICOM-objekt med åtkomst enligt WADO. En tillverkarspecifik länk som är möjlig att via en säker anslutning visa i en webklient",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData",
      "short" : "Strukturerad bilddata",
      "definition" : "Strukturerad mätdata för bild-tagningen med statiskt bildobjekt eller referens till bildfil.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.aperture",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.aperture",
      "short" : "Bländare",
      "definition" : "Anges som f/(enhetslöst).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.exposureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.exposureTime",
      "short" : "Exponeringstid",
      "definition" : "I sekunder",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageCreationTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageCreationTime",
      "short" : "Bildskapningstidpunkt",
      "definition" : "Tid då bilden skapats.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.bodyPartExamined",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.bodyPartExamined",
      "short" : "Undersökt kroppsdel",
      "definition" : "Kroppsdel. Bör anges med kod ur SNOMED CT (OID: 1.2.752.116.2.1.1). Om kodverk saknas kan kroppsdel anges i originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.contrastAgentUsed",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.contrastAgentUsed",
      "short" : "Kontrastmedel",
      "definition" : "Kontrast som använts vid bildtagningen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.magneticFieldStrength",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.magneticFieldStrength",
      "short" : "Magnetfältstyrka",
      "definition" : "Magnetisk fältsyrka i T.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.copyright",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.copyright",
      "short" : "Upphovsrätt",
      "definition" : "Copyright-ägare av bilden",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageData",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageData",
      "short" : "Bilddata",
      "definition" : "Möjlighet att svara med en bild i något av de tillåtna formaten enligt HL7 multimediatyper (inkl. PDF).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getimagingoutcome-imagedata-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av value och reference ska anges",
        "expression" : "value.exists() xor reference.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMImagingOutcome"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageData.mediaType",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageData.mediaType",
      "short" : "Medietyp",
      "definition" : "Mediatyper enligt HL7 MediaType\nTillåtna värden enligt XSD: application/dicom, application/msword, application/pdf, audio/basic, audio/k32adpcm, audio/mpeg, image/g3fax, image/gif, image/jpeg, image/png, image/tiff, model/vrml, multipart/x-hl7-cda-level1, text/html, text/plain, text/rtf, text/sgml, text/x-hl7-ft, text/xml, video/mpeg, video/x-avi.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageData.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageData.value",
      "short" : "Binär bild",
      "definition" : "Value är binärdata som representerar objektet. Ett och endast ett av value och reference ska anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBase64Binary"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageData.reference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageData.reference",
      "short" : "Referens-URL",
      "definition" : "Referens till extern bild i form av en URL. Ett och endast ett av value och reference ska anges. En tillverkarspecifik länk som är möjlig att via en säker anslutning visa i en webklient",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivAnyURI"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageData.burnedInaAnnotations",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.imageRecording.imageStructuredData.imageData.burnedInaAnnotations",
      "short" : "Inbrända annotationer (elementnamnet stavas så i XSD:n)",
      "definition" : "Inbrända annotationer (elementnamnet stavas så i XSD:n)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral",
      "short" : "Kopplad remiss",
      "definition" : "Information om den remiss som ligger till grund för undersökningen och dess svar. Måste vara valfri eftersom tagning av Bild inte alltid remitteras",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.referralId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.referralId",
      "short" : "Remissens id",
      "definition" : "Remissens identitet som är unik inom det lokala avsändande systemet. Motsvarar vårdbegäran-id",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.referralReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.referralReason",
      "short" : "Remissorsak",
      "definition" : "Text som anger frågeställningen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.anamnesis",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.anamnesis",
      "short" : "Anamnes",
      "definition" : "Text som anger bakgrund till frågeställningen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.careContactId",
      "short" : "Vårdkontaktid",
      "definition" : "Identitet för den hälso-och sjukvårdskontakt som föranlett remissen. Identiteten är unik inom producernade system.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional",
      "short" : "Remittent",
      "definition" : "Information om den hälso-och sjukvårdspersonal som framställt remissen, nedan kallad remittent.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt",
      "definition" : "Tid då remissen framställdes\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "HSA-id",
      "definition" : "Remittentens HSA-id. HSA-id hälso-och sjukvårdspersonal. Ska anges om tillgänglig.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn",
      "definition" : "Namn på remittenten. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Yrkesroll",
      "definition" : "Information om remittentens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4) användas. Om kodverk saknas anges befattning i originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Org-enhet (obligatorisk i remissen)",
      "definition" : "Den organisation som remittenten är uppdragstagare på",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "OrgUnit HSA-id",
      "definition" : "HSA-id för organisationsenhet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "OrgUnit namn",
      "definition" : "Namnet på den organisation som remittenten är uppdragstagare på",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post",
      "definition" : "Epost till enhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Adress",
      "definition" : "Postadress för den organisation som remittenten är uppdragstagare på",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivare",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.attested",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.attested",
      "short" : "Attestering",
      "definition" : "Information om den som vidimerat mottaget svar på remissen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.attested.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.attested.signatureTime",
      "short" : "Attesttidpunkt",
      "definition" : "Tidpunkt för vidimering.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.attested.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.attested.legalAuthenticatorHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id för person som vidimerat dokumentet. HSA-id för hälso-och sjukvårdspersonal. Ska anges om tillgänglig.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.attested.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.attested.legalAuthenticatorName",
      "short" : "Namn",
      "definition" : "Namnen i klartext för vidimerande person.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.attested.legalAuthenticatorRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.imagingOutcome.imagingOutcomeBody.referral.attested.legalAuthenticatorRoleCode",
      "short" : "Befattning för signerande person",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome3"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.result",
      "path" : "SEEHDSLMImagingOutcome.result",
      "short" : "Resultat",
      "definition" : "Innehåller information om begäran gick bra eller ej.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.result.resultCode",
      "short" : "Resultatkod (OK, INFO eller ERROR)",
      "definition" : "Kan endast vara OK, INFO eller ERROR\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.result.errorCode",
      "short" : "Felkod (sätts endast om resultCode är ERROR)",
      "definition" : "Sätts endast om resultCode är ERROR, se kapitel 4.4 för mer information.\nTillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.result.logId",
      "short" : "Log-id (UUID för felsökning)",
      "definition" : "En UUID som kan användas vid felanmälan för att användas vid felsökning av producent.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.result.subCode",
      "short" : "Subkod",
      "definition" : "Inga subkoder är specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMImagingOutcome.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:3"
      }],
      "path" : "SEEHDSLMImagingOutcome.result.message",
      "short" : "Beskrivande meddelande",
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
