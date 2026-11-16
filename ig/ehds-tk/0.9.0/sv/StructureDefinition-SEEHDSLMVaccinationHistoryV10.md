# GetVaccinationHistory 1.0 - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetVaccinationHistory 1.0 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMVaccinationHistoryV10.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMVaccinationHistoryV10.csv), [Excel](../StructureDefinition-SEEHDSLMVaccinationHistoryV10.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMVaccinationHistoryV10",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetVaccinationHistoryResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:GetVaccinationHistoryResponder:1"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMVaccinationHistoryV10",
  "version" : "0.9.0",
  "name" : "SEEHDSLMVaccinationHistoryV10",
  "title" : "GetVaccinationHistory 1.0",
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
  "description" : "Logisk modell för version 1.0 av tjänstekontraktet GetVaccinationHistory\n(urn:riv:clinicalprocess:activityprescription:actoutcome:GetVaccinationHistoryResponder:1).\nMappningen utgår från versionen i SEEHDSLMVaccinationHistory. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMVaccinationHistoryV10",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMVaccinationHistoryV10",
      "path" : "SEEHDSLMVaccinationHistoryV10",
      "short" : "GetVaccinationHistory 1.0",
      "definition" : "Logisk modell för version 1.0 av tjänstekontraktet GetVaccinationHistory\n(urn:riv:clinicalprocess:activityprescription:actoutcome:GetVaccinationHistoryResponder:1).\nMappningen utgår från versionen i SEEHDSLMVaccinationHistory. Skillnaderna mot den och hur de\npåverkar mappningen beskrivs på tjänstekontraktets mappningssida."
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord",
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord",
      "short" : "En strukturerad vaccinationsjournal",
      "definition" : "En strukturerad vaccinationsjournal.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader",
      "short" : "Innehåller basinformation om dokumentet",
      "definition" : "Innehåller basinformation om dokumentet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentId",
      "short" : "Dokumentets identitet som är unik inom källsystemet",
      "definition" : "Dokumentets identitet som är unik inom källsystemet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.sourceSystemHSAId",
      "short" : "HSA-id för det system som dokumentet är skapat i",
      "definition" : "HSA-id för det system som dokumentet är skapat i.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentTitle",
      "short" : "Titel som beskriver den information som sänds i dokumentet",
      "definition" : "Titel som beskriver den information som sänds i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentTime",
      "short" : "Händelsetidpunkt",
      "definition" : "Händelsetidpunkt. Tidsangivelse för den vaccinationstidpunkt dokumentet gäller.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.patientId",
      "short" : "Identifierare för patient",
      "definition" : "Identifierare för patient.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional",
      "short" : "Information om den hälso- och sjukvårdsperson som ansvarar för informationen i dokumentet",
      "definition" : "Information om den hälso- och sjukvårdsperson som ansvarar för informationen i dokumentet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt då dokumentet skapades",
      "definition" : "Tidpunkt då dokumentet skapades. Det är den senaste tidpunkten då informationen uppdaterats i systemet som ska finnas här i de fall informationen har ändrats efter det att den skapades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "Hälso- och sjukvårdspersonens HSA-id",
      "definition" : "Hälso- och sjukvårdspersonens HSA-id. (Enligt NPÖ riv-spec 2.2.0 avsnitt 4.1.39 beslutsregel: I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på hälso- och sjukvårdspersonen",
      "definition" : "Namn på hälso- och sjukvårdspersonen. Om tillgängligt skall detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Information om personens befattning",
      "definition" : "Information om personens befattning. Om möjligt skall KV Befattning (OID 1.2.752.129.2.2.1.4), se http://www.inera.se/Documents/TJANSTER_PROJEKT/Katalogtjanst_HSA/Innehall/hsa_innehall_befattning.pdf",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Den organisation som hälso- och sjukvårdspersonen är uppdragstagare på",
      "definition" : "Den organisation som hälso- och sjukvårdspersonen är uppdragstagare på",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAid",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. (Enligt NPÖ riv-spec 2.2.0 avsnitt 4.1.6 beslutsregel: I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namnet på den organisation som hälso- och sjukvårdspersonen är uppdragstagare på",
      "definition" : "Namnet på den organisation som hälso- och sjukvårdspersonen är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "Epost till enhet",
      "definition" : "Epost till enhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress för den organisation som hälso- och sjukvårdspersonen är uppdragstagare på",
      "definition" : "Postadress för den organisation som hälso- och sjukvårdspersonen är uppdragstagare på. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för Vårdenhet",
      "definition" : "HSA-id för Vårdenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivaren, som är vårdgivare för den enhet som hälso- och sjukvårdspersonen är uppdragstagare …",
      "definition" : "HSA-id för vårdgivaren, som är vårdgivare för den enhet som hälso- och sjukvårdspersonen är uppdragstagare för.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator",
      "short" : "Information om vem som signerat informationen i dokumentet",
      "definition" : "Information om vem som signerat informationen i dokumentet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.signatureTime",
      "short" : "Tidpunkt för signering",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorHSAid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorHSAid",
      "short" : "HSA-id för person som signerat dokumentet",
      "definition" : "HSA-id för person som signerat dokumentet. (Enligt NPÖ riv-spec 2.2.0 avsnitt 4.1.39 beslutsregel: I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namnen i klartext för signerande person",
      "definition" : "Namnen i klartext för signerande person.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.approvedForPatient",
      "short" : "Anger om information får delas till patient",
      "definition" : "Anger om information får delas till patient. Värdet sätts i sådant fall till true, i annat fall till false.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.careContactId",
      "short" : "Identitetet för den vård- och omsorgskontakt som föranlett den information som omfattas av dokumentet",
      "definition" : "Identitetet för den vård- och omsorgskontakt som föranlett den information som omfattas av dokumentet. Identiteten är unik inom källsystemet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.nullified",
      "short" : "Anger om dokumentet makulerats i källsystemet",
      "definition" : "Anger om dokumentet makulerats i källsystemet. Sätts i så fall till true annars false. Används bl.a. i statistik-/rapportuttag med hjälp av tjänstekontrakten.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.nullifiedReason",
      "short" : "Anger orsak till makulering",
      "definition" : "Anger orsak till makulering. Får endast anges i kombination med att nullified = true",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody",
      "short" : "Består av en registrationData med ytterligare administrativ information samt en eller flera vaccinationData …",
      "definition" : "Består av en registrationData med ytterligare administrativ information samt en eller flera vaccinationData om utförda vaccinationer vid vaccinationstillfället.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord",
      "short" : "Annan information än ovan som registreras vid eller relaterat till vaccinationstillfället",
      "definition" : "Annan information än ovan som registreras vid eller relaterat till vaccinationstillfället",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg",
      "short" : "Information om juridisk vårdgivare; hsaid (om finns) och kontaktuppgifter namn,epost,tel,adress etc",
      "definition" : "Information om juridisk vårdgivare; hsaid (om finns) och kontaktuppgifter namn,epost,tel,adress etc",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitHSAid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitHSAid",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. Om tillgängligt skall detta anges. (Enligt NPÖ riv-spec 2.2.0 avsnitt 4.1.6 beslutsregel: I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt skall detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitEmail",
      "short" : "Epost till organisationsenhet",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress till organisationsenhet. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact",
      "short" : "Kontaktperson hos juridiskt ansvarig vårdgivare",
      "definition" : "Kontaktperson hos juridiskt ansvarig vårdgivare",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.hsaid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.hsaid",
      "short" : "HSAid för personen",
      "definition" : "HSAid för personen. (Enligt NPÖ riv-spec 2.2.0 avsnitt 4.1.39 beslutsregel: I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personName",
      "short" : "personName",
      "definition" : "personName",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personEmail",
      "short" : "Epostadress till personen",
      "definition" : "Epostadress till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personTelecom",
      "short" : "Telefon till personen",
      "definition" : "Telefon till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personAddress",
      "short" : "Adress till personen",
      "definition" : "Adress till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemName",
      "short" : "Klartextnamn på källsystemet",
      "definition" : "Klartextnamn på källsystemet",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemProductName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemProductName",
      "short" : "Klartextnamn på källsystemets produktnamn",
      "definition" : "Klartextnamn på källsystemets produktnamn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemProductVersion",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemProductVersion",
      "short" : "Klartextnamn på källsystemets produktversion",
      "definition" : "Klartextnamn på källsystemets produktversion",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact",
      "short" : "Kontaktuppgifter till källsystemsansvarig",
      "definition" : "Kontaktuppgifter till källsystemsansvarig",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.hsaid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.hsaid",
      "short" : "HSAid för personen",
      "definition" : "HSAid för personen. (Enligt NPÖ riv-spec 2.2.0 avsnitt 4.1.39 beslutsregel: I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personName",
      "short" : "personName",
      "definition" : "personName",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personEmail",
      "short" : "Epostadress till personen",
      "definition" : "Epostadress till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personTelecom",
      "short" : "Telefon till personen",
      "definition" : "Telefon till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personAddress",
      "short" : "Adress till personen",
      "definition" : "Adress till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careUnitSmiId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careUnitSmiId",
      "short" : "Utförande vårdenhetens registreringsId hos SMI",
      "definition" : "Utförande vårdenhetens registreringsId hos SMI",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.date",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.date",
      "short" : "Datum då nedan vaccination(er) gavs",
      "definition" : "Format enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.patientPostalCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.patientPostalCode",
      "short" : "Postnummer för patientens senast kända bostadsadress",
      "definition" : "Postnummer för patientens senast kända bostadsadress",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.vaccinationUnstructuredNote",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.vaccinationUnstructuredNote",
      "short" : "Enligt CDA:s konvention med läsbar fritextsammanfattning av den strukturerade information kan också använda …",
      "definition" : "Enligt CDA:s konvention med läsbar fritextsammanfattning av den strukturerade information kan också använda här. Kan formateras enligt HL7NarrativeBlock. Not: Om endast ostrukturerad vaccinationsinformation finns, kan, detta kontrakt produceras men i så fall inga administrationRecords nedan returneras.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.riskCategory",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.riskCategory",
      "short" : "Information om patientens eventuella riskgruppstillhörighet, känd vid vaccinationstillfället, baserad på i …",
      "definition" : "Information om patientens eventuella riskgruppstillhörighet, känd vid vaccinationstillfället, baserad på i förekommande fall patientens hälsodeklaration",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.patientAdverseEffect",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.patientAdverseEffect",
      "short" : "Information om patienten erfarit någon eller några reaktioner hänför bara till vaccinationstillfället men ej …",
      "definition" : "Information om patienten erfarit någon eller några reaktioner hänför bara till vaccinationstillfället men ej specifik vaccination (i fall som när flera vaccin givits vid samma tillfälle)",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord",
      "short" : "Information om utförd(a) vaccination(er) vid tillfället",
      "definition" : "Information om utförd(a) vaccination(er) vid tillfället. Ordinerad men av någon anledning ej given vaccination kan inkluderas.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccinationProgramName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccinationProgramName",
      "short" : "Information om vaccinationsprogram om vaccinationen är del av sådant program",
      "definition" : "Information om vaccinationsprogram om vaccinationen är del av sådant program. Tillåter kodat värde liksom endast namn genom bruk av DisplayName i CVType.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg",
      "short" : "Information om var vaccinationen ordinerats (eller i fallet med förskrivna vaccinationsläkemedel, förskrivits)",
      "definition" : "Information om var vaccinationen ordinerats (eller i fallet med förskrivna vaccinationsläkemedel, förskrivits)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitHSAid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitHSAid",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. Om tillgängligt skall detta anges. (Enligt NPÖ riv-spec 2.2.0 avsnitt 4.1.6 beslutsregel: I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt skall detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitEmail",
      "short" : "Epost till organisationsenhet",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress till organisationsenhet. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson",
      "short" : "Information om vem som ordinerat/förskrivit vaccinationen",
      "definition" : "Information om vem som ordinerat/förskrivit vaccinationen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.hsaid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.hsaid",
      "short" : "HSAid för personen",
      "definition" : "HSAid för personen. (Enligt NPÖ riv-spec 2.2.0 avsnitt 4.1.39 beslutsregel: I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personName",
      "short" : "personName",
      "definition" : "personName",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personEmail",
      "short" : "Epostadress till personen",
      "definition" : "Epostadress till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personTelecom",
      "short" : "Telefon till personen",
      "definition" : "Telefon till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personAddress",
      "short" : "Adress till personen",
      "definition" : "Adress till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg",
      "short" : "Information om vårdenhet som utfört vaccinationen",
      "definition" : "Information om vårdenhet som utfört vaccinationen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitHSAid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitHSAid",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. Om tillgängligt skall detta anges. (Enligt NPÖ riv-spec 2.2.0 avsnitt 4.1.6 beslutsregel: I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet. Om tillgängligt skall detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitEmail",
      "short" : "Epost till organisationsenhet",
      "definition" : "Epost till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress till organisationsenhet. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för enhetens eller funktionens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer",
      "short" : "Information om vem som utfört (administrerat) vaccineringen",
      "definition" : "Information om vem som utfört (administrerat) vaccineringen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.hsaid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.hsaid",
      "short" : "HSAid för personen",
      "definition" : "HSAid för personen. (Enligt NPÖ riv-spec 2.2.0 avsnitt 4.1.39 beslutsregel: I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personName",
      "short" : "personName",
      "definition" : "personName",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personEmail",
      "short" : "Epostadress till personen",
      "definition" : "Epostadress till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personTelecom",
      "short" : "Telefon till personen",
      "definition" : "Telefon till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personAddress",
      "short" : "Adress till personen",
      "definition" : "Adress till personen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.anatomicalSite",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.anatomicalSite",
      "short" : "Information om var på kroppen vaccinet givits",
      "definition" : "Information om var på kroppen vaccinet givits.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.route",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.route",
      "short" : "Information om hur vaccinet givits",
      "definition" : "Information om hur vaccinet givits. Ibland kallat ”administrationsväg”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dosage",
      "short" : "Mängd vaccin som givits",
      "definition" : "Mängd vaccin som givits",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dosage.quantity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dosage.quantity",
      "short" : "Mängd preparat som givits dvs 1 ml etc",
      "definition" : "Mängd preparat som givits dvs 1 ml etc. Skall anges om möjligt i denna strukturerade form med värde(float) samt enhet. Annars i nästa fält om det endast finns angivet som text",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dosage.displayName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dosage.displayName",
      "short" : "Fritextbeskrivning av preparat och mängd som givits",
      "definition" : "Fritextbeskrivning av preparat och mängd som givits. T ex ”Twinrix 1 ml, 1 av 3”, ”2 ml” odyl. Anges även om quantity angivits ovan",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.isDoseComplete",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.isDoseComplete",
      "short" : "True om vaccineringen räknas som hel dos eller efter flera delvaccinationer fullt utförd",
      "definition" : "True om vaccineringen räknas som hel dos eller efter flera delvaccinationer fullt utförd. Annars false (dvs för de fall som ytterligare delvaccinationer skall ges innan full dos är uppnådd)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.doseOrdinalNumber",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.doseOrdinalNumber",
      "short" : "Anger i förekommande fall om vaccineringen är en del av flera vaccinationer som skall utföras, värden 1,2,3… …",
      "definition" : "Anger i förekommande fall om vaccineringen är en del av flera vaccinationer som skall utföras, värden 1,2,3… 1 om endast en",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.numberOfPrescribedDoses",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.numberOfPrescribedDoses",
      "short" : "Anger antalet delvaccinationer som skall utföras för att vaccinationen skall räknas som full dos uppnådd",
      "definition" : "Anger antalet delvaccinationer som skall utföras för att vaccinationen skall räknas som full dos uppnådd. Värden 1,2,3,… 1 om endast en vaccinering utgör full dos",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.sourceDescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.sourceDescription",
      "short" : "Fritextinformation som anger källa för vaccinering som efterregistrerats",
      "definition" : "Fritextinformation som anger källa för vaccinering som efterregistrerats. T ex namn på annan vårdenhet, intyg, land el. dyl.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.commentPrescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.commentPrescription",
      "short" : "Fritextinformation",
      "definition" : "Fritextinformation. T.ex. instruktioner som noterats i ordinationen av vaccineringen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.commentAdministration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.commentAdministration",
      "short" : "Fritextinformation",
      "definition" : "Fritextinformation. Generella kommentarer gjorde vid vaccineringen av den som utfört den",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.patientAdverseEffect",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.patientAdverseEffect",
      "short" : "Information om patienten erfarit någon eller några reaktioner hänför bara till den specifika administreringen",
      "definition" : "Information om patienten erfarit någon eller några reaktioner hänför bara till den specifika administreringen",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineType",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineType",
      "short" : "Information om givet vaccin",
      "definition" : "Information om givet vaccin",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineName",
      "short" : "Information om givet vaccins produktnamn",
      "definition" : "Information om givet vaccins produktnamn. I Code skall då anges exempelvis NPL-id om det finns och kodverk ”npl”. Om standardkodverk ej används, ej anges lokal kod, se CVType ovan. Namnet i klartext ges i DisplayName.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineBatchId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineBatchId",
      "short" : "Identifiering av batchnummer för vaccinets tillverkning",
      "definition" : "Identifiering av batchnummer för vaccinets tillverkning",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineManufacturer",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineManufacturer",
      "short" : "Namn på tillverkaren av vaccinet",
      "definition" : "Namn på tillverkaren av vaccinet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineTargetDisease",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineTargetDisease",
      "short" : "Information om den/de sjukdomar vaccinet skyddar emot",
      "definition" : "Information om den/de sjukdomar vaccinet skyddar emot",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome1"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccinationUniqueReference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:1"
      }],
      "path" : "SEEHDSLMVaccinationHistoryV10.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccinationUniqueReference",
      "short" : "Unika referensen till källsystemets vaccinationsinformation",
      "definition" : "Unika referensen till källsystemets vaccinationsinformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome1"
      }]
    }]
  }
}

```
