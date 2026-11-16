# GetMaternityMedicalHistory - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetMaternityMedicalHistory 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMMaternityMedicalHistory.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMMaternityMedicalHistory.csv), [Excel](../StructureDefinition-SEEHDSLMMaternityMedicalHistory.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMMaternityMedicalHistory",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetMaternityMedicalHistoryResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:GetMaternityMedicalHistoryResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMaternityMedicalHistory",
  "version" : "0.9.0",
  "name" : "SEEHDSLMMaternityMedicalHistory",
  "title" : "GetMaternityMedicalHistory",
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
  "description" : "Logisk modell för tjänstekontraktet GetMaternityMedicalHistory\n(RIV-TA urn:riv:clinicalprocess:healthcond:actoutcome:GetMaternityMedicalHistory:2).\nRepresenterar responsens informationsstruktur — mödravårdsjournal för en patient.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMaternityMedicalHistory",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMMaternityMedicalHistory",
      "path" : "SEEHDSLMMaternityMedicalHistory",
      "short" : "GetMaternityMedicalHistory",
      "definition" : "Logisk modell för tjänstekontraktet GetMaternityMedicalHistory\n(RIV-TA urn:riv:clinicalprocess:healthcond:actoutcome:GetMaternityMedicalHistory:2).\nRepresenterar responsens informationsstruktur — mödravårdsjournal för en patient."
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord",
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord",
      "short" : "Mödravårdsjournalpost",
      "definition" : "En moders mödravårdsjournal.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader",
      "short" : "PatientSummaryHeader",
      "definition" : "Innehåller basinformation om dokumentet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.documentId",
      "short" : "Dokumentets unika id",
      "definition" : "Dokumentets identitet som är unik inom källsystemet. Identifieraren ska vara konsistent och beständigt mellan olika majorversioner av ett kontrakt. Ett exempel på detta är att en vårdkontakt ska ha samma identifierare i majorversion 3 och 4 av ett tjänstekontrakt för att läsa vårdkontakter. Identifieraren ska vara konsistent och beständigt mellan olika kontrakt. Ett exempel på detta är att samma remiss-identitet ska användas i ett tjänstekontrakt för att läsa remisser, samt tjänstekontraktet som läser remissvar som refererar till den ursprungliga remissen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.sourceSystemHSAId",
      "short" : "Källsystemets HSA-id",
      "definition" : "HSAid för det system som dokumentet är skapat i.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.documentTitle",
      "short" : "Dokumentets titel",
      "definition" : "Titel som beskriver den information som sänds i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.documentTime",
      "short" : "Dokumentets tidpunkt",
      "definition" : "Första tidpunkten då denna journalinformation skapades hos tjänsteproducenten.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.patientId",
      "short" : "Patientens id",
      "definition" : "Id för modern.id sätts till patientens identifierare, anges med 12 siffror utan avskiljare.Type sätts till OID för typ av identifierare. För personnummer ska Skatteverkets personnummer (1.2.752.129.2.1.3.1).För samordningsnummer ska Skatteverkets samordningsnummer (1.2.752.129.2.1.3.3).För reservnummer används lokalt definierade reservnummet, exempelvis SLL reservnummer (1.2.752.97.3.1.3)",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional",
      "short" : "Ansvarig hälso- och sjukvårdspersonal",
      "definition" : "Information om den hälso- och sjukvårdsperson som skapat informationen i dokumentet, nedan kallas författare. Vid uppdatering av tidigare skapade dokument avses den hälso- och sjukvårdsperson som senast uppdaterade informationen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt",
      "definition" : "Tidpunkt vid vilken journalinformationen skapades eller senast uppdaterades hos tjänsteproducenten. I de fall då journalinformationen skapats i ett annat informationssystem (t.ex. laboratoriesystem eller annan remittents journalsystem) är det tidpunkten då journalinformationen ursprungligen skapades som ska anges.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "HSA-id (obligatorisk i mödrahälsovård)",
      "definition" : "Författarens HSA-id.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn",
      "definition" : "Författarens namn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Yrkesroll",
      "definition" : "Information om författarens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4), se referens [R 5]. Om kodverk saknas anges befattning i originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Organisationsenhet",
      "definition" : "Den organisation som författaren är uppdragstagare på.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "OrgUnit HSA-id",
      "definition" : "HSA-id för den organisation som författaren är uppdragstagare på.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "OrgUnit namn",
      "definition" : "Namnet på den organisation som författaren är uppdragstagare på.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post",
      "definition" : "Epost till enhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Adress",
      "definition" : "Postadress för den organisation som författaren är uppdragstagare på. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats",
      "definition" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "Vårdenhetens HSA-id",
      "definition" : "Regel 1: Obligatorisk i GetMaternityMedicalHistory.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "Vårdgivarens HSA-id",
      "definition" : "Regel 1: Obligatorisk i GetMaternityMedicalHistory.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.legalAuthenticator",
      "short" : "Juridiskt ansvarig",
      "definition" : "Information om vem som signerat informationen i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.legalAuthenticator.signatureTime",
      "short" : "Signeringstidpunkt",
      "definition" : "Tidpunkt för signering.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id för person som signerat dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.approvedForPatient",
      "short" : "Godkänd för patientvisning",
      "definition" : "Anger om information får delas till patient. Värdet sätts i sådant fall till true, i annat fall till false.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.nullified",
      "short" : "Makulerad",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.nullifiedReason",
      "short" : "Makuleringsorsak",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordHeader.careContactId",
      "short" : "Vårdkontaktid",
      "definition" : "Identitetet för hälso-och sjukvårdskontakt som föranlett den information som omfattas av dokumentet. Identiteten är unik inom källsystemet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody",
      "short" : "Mödravårdsjournaldata",
      "definition" : "Kan bestå av antingen en registrationRecord, en pregnancyCheckupRecord eller en postDeliveryRecord.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmaternitymedicalhistory-body-choice",
        "severity" : "error",
        "human" : "En och endast en av registrationRecord, pregnancyCheckupRecord och postDeliveryRecord ska anges",
        "expression" : "registrationRecord.combine(pregnancyCheckupRecord).combine(postDeliveryRecord).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMaternityMedicalHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord",
      "short" : "Inskrivningsuppgifter",
      "definition" : "Information som registreras vid inskrivningsbesöket.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.lastMenstrualPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.lastMenstrualPeriod",
      "short" : "Sista menstruationsdag",
      "definition" : "Datum för senaste menstruation\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.indicationPregnancy",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.indicationPregnancy",
      "short" : "Graviditetsindikation datum",
      "definition" : "Datum för graviditetsindikation\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.contraceptiveDiscontinued",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.contraceptiveDiscontinued",
      "short" : "Datum p-medel avslutades",
      "definition" : "Datum för när moder upphört med preventivtablett\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.expectedDayOfDeliveryFromLastMenstrualPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.expectedDayOfDeliveryFromLastMenstrualPeriod",
      "short" : "Beräknat förlossningsdatum (LMP)",
      "definition" : "Beräknad förlossning enligt sista menstruation\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.expectedDayOfDeliveryFromUltrasoundScan",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.expectedDayOfDeliveryFromUltrasoundScan",
      "short" : "Beräknat förlossningsdatum (UL)",
      "definition" : "Beräknad förlossning enligt ultraljud\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.expectedDayOfDeliveryFromEmbryonicTransfer",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.expectedDayOfDeliveryFromEmbryonicTransfer",
      "short" : "Beräknat förlossningsdatum (embryoöverföring)",
      "definition" : "Beräknad förlossning enligt embryonik transfer\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.length",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.length",
      "short" : "Kroppslängd (cm)",
      "definition" : "Längd vid inskrivning",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.weight",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.weight",
      "short" : "Kroppsvikt (kg)",
      "definition" : "Vikt vid inskrivning [massa]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.bodyMassIndex",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.bodyMassIndex",
      "short" : "BMI",
      "definition" : "BMI vid inskrivning [massa/yta]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.infertility",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.infertility",
      "short" : "Infertilitet (år)",
      "definition" : "Antal år med ofrivillig barnlöshet (decimaltal)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity",
      "short" : "Tidigare graviditeter",
      "definition" : "Tidigare graviditeter och förlossningar",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.year",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.year",
      "short" : "År",
      "definition" : "År för tidigare graviditet eller förlossning",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.month",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.month",
      "short" : "Månad",
      "definition" : "Månad för tidigare graviditet eller förlossning",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.delivery",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.delivery",
      "short" : "Förlossningssätt",
      "definition" : "Graviditet förlossning enligt kodverk: 0 = Ej angivet, 1 = X-gravid, 2 = Spontan abort, 4 = Dödfött, 5 = Levande fött\nTillåtna värden enligt XSD: 0, 1, 2, 4, 5.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.healthcareFacility",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.healthcareFacility",
      "short" : "Vårdinrättning",
      "definition" : "Sjukhus",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.progress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.progress",
      "short" : "Förlopp",
      "definition" : "Förlopp",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.sex",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.sex",
      "short" : "Barnets kön",
      "definition" : "Kön, giltiga värden 0,1,2 och 9 enligt kodverk med OID 1.2.752.129.2.2.1.1: 0 = okänt, 1 = man, 2 = kvinna, 9 = ej tillämpligt\nTillåtna värden enligt XSD: 0, 1, 2, 9.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.weightOfChild",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.weightOfChild",
      "short" : "Barnets vikt",
      "definition" : "Barnets vikt [massa]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.gestation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.previousGravidityAndParity.gestation",
      "short" : "Gestationsålder (veckor)",
      "definition" : "Graviditetsvecka.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.diseasesThrombosis",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.diseasesThrombosis",
      "short" : "Trombos",
      "definition" : "Trombos (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.diseasesEndocineDiseases",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.diseasesEndocineDiseases",
      "short" : "Endokrina sjukdomar",
      "definition" : "Endokrina sjukdomar (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.diseasesRecurrentUrinaryTractInfections",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.diseasesRecurrentUrinaryTractInfections",
      "short" : "Recidiverande urinvägsinfektioner",
      "definition" : "Upprepade urinvägsinfektioner (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.diseasesDiabetesMellitus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.diseasesDiabetesMellitus",
      "short" : "Diabetes mellitus",
      "definition" : "Diabetes mellitus (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.medicationDuringPregnacy",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.medicationDuringPregnacy",
      "short" : "Läkemedel under graviditet",
      "definition" : "Före inskrivning under graviditet: medicinering",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.medicationDuringPregnacy.medicament",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.medicationDuringPregnacy.medicament",
      "short" : "Läkemedel",
      "definition" : "Preparat",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.medicationDuringPregnacy.dosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.medicationDuringPregnacy.dosage",
      "short" : "Dosering",
      "definition" : "Dosering i beskrivande text",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.assessmentAtFirstContactStandardCare",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.registrationRecord.assessmentAtFirstContactStandardCare",
      "short" : "Bedömning vid inskrivning standardvård",
      "definition" : "Bedömning vid 1:a besök: basprogram (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord",
      "short" : "Graviditetskontroll",
      "definition" : "Graviditetskontroll",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.completeWeeksOfGestation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.completeWeeksOfGestation",
      "short" : "Kompletta graviditetsveckor",
      "definition" : "Fullgångna graviditetsveckor",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.weight",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.weight",
      "short" : "Vikt",
      "definition" : "Moderns vikt [massa]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.symphysisFundalHeight",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.symphysisFundalHeight",
      "short" : "Symfondusmått (cm)",
      "definition" : "Symfys-fundus mått [längd]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.haemoglobin",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.haemoglobin",
      "short" : "Hemoglobin",
      "definition" : "Hb (Hemoglobin) [massa / volym]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.bloodPressureSystolic",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.bloodPressureSystolic",
      "short" : "Systoliskt blodtryck",
      "definition" : "Systoliskt blodtryck [tryck]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.bloodPressureDiastolic",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.bloodPressureDiastolic",
      "short" : "Diastoliskt blodtryck",
      "definition" : "Diastoliskt blodtryck [tryck]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.proteinuria",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.proteinuria",
      "short" : "Proteinuri",
      "definition" : "Proteinuri - Protein i urinet [massa / volym] Mängden protein ska alltså anges i g/l eller motsvarande. Använd INTE mätstickans kodning (0, 1+, 2+…)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.glycosuria",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.glycosuria",
      "short" : "Glykosuri",
      "definition" : "Glucosuri - Glucos i urinet [antal / volym] Förväntad enhet är mmol/l. Använd INTE mätstickans kodning (0, 1+, 2+…) OBS! U på svenska men y på engelska (ICD10).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.fetalPosition",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.fetalPosition",
      "short" : "Fosterläge",
      "definition" : "Fosterläge enligt kodverk: 0 = head (huvud ) 1 = breech (säte) 2 = oblique (snedläge) 3 = transverse (tvärläge)\nTillåtna värden enligt XSD: 0, 1, 2, 3.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.fetalPresentation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.fetalPresentation",
      "short" : "Fosterpresentation",
      "definition" : "Föregående fosterdel enligt kodverk: 0= mobile (rörligt), 1 = movable (ruckbart), 2 = fixed (fix)\nTillåtna värden enligt XSD: 0, 1, 2, 3.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.fetalHeartRate",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.fetalHeartRate",
      "short" : "Fosterhjärtfrekvens",
      "definition" : "Fosterljud, hjärtslag, ex. bpm [frekvens]",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.typeOfLeave",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.typeOfLeave",
      "short" : "Typ av ledighet",
      "definition" : "Typ av ledighet enligt kodverk 0 = Sjukskrivning, 1 = Havandekapsledighet, 2 = Föräldrarledighet\nTillåtna värden enligt XSD: 0, 1, 2.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.medicationSinceRegistration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.medicationSinceRegistration",
      "short" : "Läkemedel sedan inskrivning",
      "definition" : "Läkemedel (även kostpreparat) som administrerats sedan registreringen / föregående ”checkup”.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.medicationSinceRegistration.medicament",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.medicationSinceRegistration.medicament",
      "short" : "Läkemedel",
      "definition" : "Preparat",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.medicationSinceRegistration.dosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.pregnancyCheckupRecord.medicationSinceRegistration.dosage",
      "short" : "Dosering",
      "definition" : "Dosering i beskrivande text",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord",
      "short" : "Eftervård",
      "definition" : "Efterskötning",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord",
      "short" : "Moderns eftervård",
      "definition" : "Efterskötningsjournal, moder",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.bloodPressureSystolic",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.bloodPressureSystolic",
      "short" : "Systoliskt blodtryck",
      "definition" : "Systoliskt blodtryck [tryck]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.bloodPressureDiastolic",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.bloodPressureDiastolic",
      "short" : "Diastoliskt blodtryck",
      "definition" : "Diastoliskt blodtryck [tryck]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.haemoglobin",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.haemoglobin",
      "short" : "Hemoglobin",
      "definition" : "Haemoglobin, t.ex. g/L [massa / volym]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.bodyTemperature",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.bodyTemperature",
      "short" : "Kroppstemperatur",
      "definition" : "Kroppstemperatur",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.scarsOK",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.scarsOK",
      "short" : "Ärr OK",
      "definition" : "Sår/bristningar/klipp utan anmärkning (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.sutureRemoved",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.sutureRemoved",
      "short" : "Suturer borttagna",
      "definition" : "Suturer borttagna (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.perineumComfortable",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.perineumComfortable",
      "short" : "Perineum OK",
      "definition" : "Bäckenbotten utan anmärkning (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.vulvaVaginaPortioOK",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.vulvaVaginaPortioOK",
      "short" : "Vulva/vagina/portio OK",
      "definition" : "vulvaVaginaPortio utan anmärkning (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.uterusContracted",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.uterusContracted",
      "short" : "Uterus kontraherad",
      "definition" : "Uterus utan anmärkning (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.uterusNote",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.uterusNote",
      "short" : "Uterusnotering",
      "definition" : "Kommentar till uterus med anmärkning. Kan endast anges då uterusContracted = false",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.breastfeeding",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.motherPostDeliveryRecord.breastfeeding",
      "short" : "Amning",
      "definition" : "Ammar (true/false)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord",
      "short" : "Barnets eftervård",
      "definition" : "Efterskötningsjournal, för barn ur samma graviditet",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord.ordinalNumber",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord.ordinalNumber",
      "short" : "Löpnummer för barn (vid flerbörd)",
      "definition" : "Ordningstal för barnet, med start på 1. Ju äldre barn desto lägre siffra.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord.weight",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord.weight",
      "short" : "Barnets vikt",
      "definition" : "Barnets vikt [massa]",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeHealthcondActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord.apgarScore1",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord.apgarScore1",
      "short" : "Apgar-poäng 1 min",
      "definition" : "Apgar (0..10) efter 1 minut",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord.apgarScore5",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord.apgarScore5",
      "short" : "Apgar-poäng 5 min",
      "definition" : "Apgar (0..10) efter 5 minuter",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord.apgarScore10",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:healthcond:actoutcome:2"
      }],
      "path" : "SEEHDSLMMaternityMedicalHistory.maternityMedicalRecord.maternityMedicalRecordBody.postDeliveryRecord.childPostDeliveryRecord.apgarScore10",
      "short" : "Apgar-poäng 10 min",
      "definition" : "Apgar (0..10) efter 10 minuter",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    }]
  }
}

```
