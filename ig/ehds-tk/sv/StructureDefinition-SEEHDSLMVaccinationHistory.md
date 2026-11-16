# GetVaccinationHistory - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetVaccinationHistory 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMVaccinationHistory.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Terminologibindningar (differential)

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **Differentialvy** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

#### Terminologibindningar (differential)

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMVaccinationHistory.csv), [Excel](../StructureDefinition-SEEHDSLMVaccinationHistory.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMVaccinationHistory",
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
    "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:GetVaccinationHistoryResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMVaccinationHistory",
  "version" : "0.9.0",
  "name" : "SEEHDSLMVaccinationHistory",
  "title" : "GetVaccinationHistory",
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
  "description" : "Logisk modell för tjänstekontraktet GetVaccinationHistory\n(RIV-TA urn:riv:clinicalprocess:activityprescription:actoutcome:GetVaccinationHistoryResponder:2).\nRepresenterar responsens informationsstruktur — vaccinationsjournal per patient.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMVaccinationHistory",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMVaccinationHistory",
      "path" : "SEEHDSLMVaccinationHistory",
      "short" : "GetVaccinationHistory",
      "definition" : "Logisk modell för tjänstekontraktet GetVaccinationHistory\n(RIV-TA urn:riv:clinicalprocess:activityprescription:actoutcome:GetVaccinationHistoryResponder:2).\nRepresenterar responsens informationsstruktur — vaccinationsjournal per patient."
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord",
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord",
      "short" : "En strukturerad vaccinationsjournal",
      "definition" : "En strukturerad vaccinationsjournal. Kan innehålla en eller flera administreringsposter.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader",
      "short" : "Basinformation om dokumentet",
      "definition" : "Innehåller basinformation om dokumentet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentId",
      "short" : "Identifierare för uppgift i patientjournal",
      "definition" : "Identifieraren ska vara konsistent och beständig mellan anrop.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.sourceSystemHSAId",
      "short" : "Det källsystem som uppgiften lagras i",
      "definition" : "Sätts till OID för HSA-katalogen (1.2.752.129.2.1.4.1).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentTitle",
      "short" : "Titel som beskriver informationen",
      "definition" : "Titel som beskriver den information som tillgängliggörs.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.documentTime",
      "short" : "Händelsetidpunkt (vaccinationstidpunkt)",
      "definition" : "Händelsetidpunkt. Tidsangivelse för den vaccinationstidpunkt dokumentet gäller.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.patientId",
      "short" : "Personidentifierare för patienten",
      "definition" : "id = patientens identifierare (12 tecken utan avskiljare).\ntype = OID för typ av personidentifierare.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional",
      "short" : "Dokumentationsansvarig",
      "definition" : "Information avseende dokumentation av uppgiften som tillgängliggörs. Notera att den som registrerar uppgiften från annan källa, exempelvis en medicinsk sekreterare som transkriberar ett diktat, inte avses.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt för dokumentation",
      "definition" : "Tidpunkt då uppgiften dokumenterades eller senast uppdaterades. I de fall då uppgiften ursprungligen dokumenterats eller uppdaterats i ett annat informationssystem än tjänsteproducentens källsystem (t.ex. laboratorieinformationssystem), ska tidpunkten spegla informationen från systemet där uppgiften ursprungligen dokumenterades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "HSA-id för personal",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som dokumenterat uppgiften som tillgängliggörs. I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på personal",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Anges med tilltalsnamn och efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Befattning",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4) [R6]. Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Organisationsenhet",
      "definition" : "Den organisation som hälso- och sjukvårdspersonen är uppdragstagare på",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namnet på den organisation som hälso- och sjukvårdspersonen är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "E-post till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress för den organisation som hälso- och sjukvårdspersonen är uppdragstagare på. Skrivs på ett så naturligt sätt som möjligt, exempelvis:”Storgatan 12468 91 Lilleby”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats/ort för organisationens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet",
      "definition" : "HSA-id för vårdenheten där uppgiften är dokumenterad. För mer information av vad som avses med vårdenhet, se [R17]. I de fall då HSA-id inte finns tillgängligt i systemet ska lokalt id anges (unikt inom källsystemet). Regel 1.1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id/id för vårdgivare",
      "definition" : "Id för uppgiftsägande vårdgivare. För mer information av vad som avses med vårdgivare, se [R17]. I första hand HSA-id, i andra hand organisationsnummer. Regel 1.1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator",
      "short" : "Information om signering",
      "definition" : "Information avseende signering av uppgiften som tillgängliggörs.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.signatureTime",
      "short" : "Tidpunkt för signering",
      "definition" : "Tidpunkt då uppgiften signerades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id för signerande personal",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som signerat uppgiften som tillgängliggörs. I de fall då HSA-id inte finns tillgängligt i systemet kan Orgnr + lokalt id anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namn på signerande personal",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Anges med tilltalsnamn och efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.approvedForPatient",
      "short" : "Beslut om synlighet för patient (PDL-prövning)",
      "definition" : "Ansvarig vårdpersonals beslut, alternativt verksamhetens policy och regler (men- och sekretessprövning), huruvida uppgiften får delas till patient för ändamålet patients åtkomst (Individens direktåtkomst). Om uppgiften beslutas delas sätts värdet till true, i annat fall till false. False innebär att uppgiften inte får delas till patient. Notera att värdet kan, för samma uppgift, förändras med tiden på grund av att rådrumstid har passerats, eller att verksamheten ändrat policy för vad som lämnas ut till patient. I sådana fall skall källsystemet uppdatera engagemangsindex.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.careContactId",
      "short" : "Identitet för vård- och omsorgskontakt",
      "definition" : "Identitetet för den vård- och omsorgskontakt som föranlett den information som omfattas av dokumentet. Identiteten är unik inom källsystemet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.nullified",
      "short" : "Anger om dokumentet makulerats i källsystemet",
      "definition" : "Anger om dokumentet makulerats i källsystemet. Sätts i så fall till true annars false. Används bl.a. i statistik-/rapportuttag med hjälp av tjänstekontrakten.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordHeader.nullifiedReason",
      "short" : "Orsak till makulering. Villkor: Får ENBART anges om nullified = true.",
      "definition" : "Anger orsak till makulering. Får endast anges i kombination med att nullified = true",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody",
      "short" : "Vaccinationsjournalens innehåll",
      "definition" : "Består av en registrationData med ytterligare administrativ information samt en eller flera vaccinationData om utförda vaccinationer vid vaccinationstillfället.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord",
      "short" : "Administrativ information om vaccinationstillfället",
      "definition" : "Annan information än ovan som registreras vid eller relaterat till vaccinationstillfället",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg",
      "short" : "Information om juridisk vårdgivare",
      "definition" : "Information om juridisk vårdgivare; hsaid (om finns) och kontaktuppgifter namn, e-post, tel, adress etc.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namn på organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitTelecom",
      "short" : "Telefon",
      "definition" : "Telefon",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitEmail",
      "short" : "E-post",
      "definition" : "E-post",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitAddress",
      "short" : "Postadress",
      "definition" : "Postadress",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverOrg.orgUnitLocation",
      "short" : "Plats/ort",
      "definition" : "Plats/ort",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact",
      "short" : "Kontaktperson hos juridiskt ansvarig vårdgivare",
      "definition" : "Kontaktperson hos juridiskt ansvarig vårdgivare",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.hsaid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.hsaid",
      "short" : "Identifierare för aktören",
      "definition" : "Identifierare för aktören",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personName",
      "short" : "Namn på aktören",
      "definition" : "Namn på aktören",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personEmail",
      "short" : "E-post",
      "definition" : "E-post",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personTelecom",
      "short" : "Telefon",
      "definition" : "Telefon",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careGiverContact.personAddress",
      "short" : "Adress",
      "definition" : "Adress",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemName",
      "short" : "Klartextnamn på källsystemet/organisationen",
      "definition" : "Klartextnamn på källsystemet. Detta fält fylls med namnet på den organisationen som ansvarar för vaccinationen, till exempel privat företag eller vårdgivarens huvudman.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemProductName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemProductName",
      "short" : "Källsystemets produktnamn",
      "definition" : "Klartextnamn på källsystemets produktnamn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemProductVersion",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemProductVersion",
      "short" : "Källsystemets produktversion",
      "definition" : "Klartextnamn på källsystemets produktversion",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact",
      "short" : "Kontaktuppgifter till källsystemsansvarig",
      "definition" : "Kontaktuppgifter till källsystemsansvarig",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.hsaid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.hsaid",
      "short" : "Identifierare",
      "definition" : "Identifierare",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personName",
      "short" : "Namn",
      "definition" : "Namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personEmail",
      "short" : "E-post",
      "definition" : "E-post",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personTelecom",
      "short" : "Telefon",
      "definition" : "Telefon",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.sourceSystemContact.personAddress",
      "short" : "Adress",
      "definition" : "Adress",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careUnitSmiId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.careUnitSmiId",
      "short" : "Utförande vårdenhetens registreringsId hos SMI (Folkhälsomyndigheten)",
      "definition" : "Utförande vårdenhetens registreringsId hos SMI",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.date",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.date",
      "short" : "Datum då vaccination(er) gavs",
      "definition" : "Datum då nedan vaccination(er) gavs\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.patientPostalCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.patientPostalCode",
      "short" : "Postnummer för patientens senast kända bostadsadress",
      "definition" : "Postnummer för patientens senast kända bostadsadress",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.vaccinationUnstructuredNote",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.vaccinationUnstructuredNote",
      "short" : "Fritextsammanfattning av strukturerad information",
      "definition" : "Enligt CDA:s konvention med läsbar fritextsammanfattning av den strukturerade information kan också använda här. Not: Om endast ostrukturerad vaccinationsinformation finns, kan, detta kontrakt produceras men i så fall inga administrationRecords nedan returneras.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.riskCategory",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.riskCategory",
      "short" : "Patientens riskgruppstillhörighet vid vaccinationstillfället",
      "definition" : "Information om patientens eventuella riskgruppstillhörighet, känd vid vaccinationstillfället, baserad på i förekommande fall patientens hälsodeklaration",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.patientAdverseEffect",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.registrationRecord.patientAdverseEffect",
      "short" : "Reaktioner hos patienten vid vaccinationstillfället",
      "definition" : "Information om patienten erfarit någon eller några reaktioner hänför bara till vaccinationstillfället men ej specifik vaccination (i fall som när flera vaccin givits vid samma tillfälle)",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord",
      "short" : "Information om utförd vaccination",
      "definition" : "Information om utförd(a) vaccination(er) vid tillfället. Ordinerad men av någon anledning ej given vaccination kan inkluderas.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccinationProgramName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccinationProgramName",
      "short" : "Information om vaccinationsprogram",
      "definition" : "Information om vaccinationsprogram om vaccinationen är del av sådant program. Tillåter kodat värde liksom endast namn genom bruk av originalText i CVType.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg",
      "short" : "Information om var vaccinationen ordinerats",
      "definition" : "Information om var vaccinationen ordinerats (eller i fallet med förskrivna vaccinationsläkemedel, förskrivits)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitName",
      "short" : "Namn",
      "definition" : "Namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "E-post till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberOrg.orgUnitLocation",
      "short" : "Plats för organisationsenhet",
      "definition" : "Plats för organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson",
      "short" : "Information om vem som ordinerat/förskrivit",
      "definition" : "Information om vem som ordinerat/förskrivit vaccinationen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.hsaid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.hsaid",
      "short" : "Identifierare",
      "definition" : "Identifierare",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personName",
      "short" : "Namn",
      "definition" : "Namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personEmail",
      "short" : "E-post",
      "definition" : "E-post",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personTelecom",
      "short" : "Telefon",
      "definition" : "Telefon",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.prescriberPerson.personAddress",
      "short" : "Adress",
      "definition" : "Adress",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg",
      "short" : "Information om vårdenhet som utfört vaccinationen",
      "definition" : "Information om vårdenhet som utfört vaccinationen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitName",
      "short" : "Namn",
      "definition" : "Namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "E-post till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress till organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performerOrg.orgUnitLocation",
      "short" : "Plats för organisationsenhet",
      "definition" : "Plats för organisationsenhet",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer",
      "short" : "Information om vem som administrerat vaccineringen",
      "definition" : "Information om vem som utfört (administrerat) vaccineringen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.hsaid",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.hsaid",
      "short" : "Identifierare",
      "definition" : "Identifierare",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personName",
      "short" : "Namn",
      "definition" : "Namn",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personEmail",
      "short" : "E-post",
      "definition" : "E-post",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personTelecom",
      "short" : "Telefon",
      "definition" : "Telefon",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.performer.personAddress",
      "short" : "Adress",
      "definition" : "Adress",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.anatomicalSite",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.anatomicalSite",
      "short" : "Var på kroppen vaccinet givits",
      "definition" : "Information om var på kroppen vaccinet givits.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.route",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.route",
      "short" : "Hur vaccinet givits (administrationsväg)",
      "definition" : "Information om hur vaccinet givits. Ibland kallat ”administrationsväg”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dose",
      "short" : "Mängd vaccin som givits",
      "definition" : "Mängd vaccin som givits",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dose.quantity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dose.quantity",
      "short" : "Mängd preparat som givits (strukturerad form)",
      "definition" : "Mängd preparat som givits dvs 1 ml etc. Ska anges om möjligt i denna strukturerade form med värde(float) samt enhet. Annars i nästa fält om det endast finns angivet som text.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dose.displayName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.dose.displayName",
      "short" : "Fritextbeskrivning av mängd vaccin, t.ex. '1 ml'",
      "definition" : "Fritextbeskrivning av mängd vaccin som givits. T ex ”1 ml” Anges även om quantity angivits ovan.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.isDoseComplete",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.isDoseComplete",
      "short" : "True om vaccinering räknas som hel dos",
      "definition" : "True om vaccineringen räknas som hel dos eller efter flera delvaccinationer fullt utförd. Annars false (dvs för de fall som ytterligare delvaccinationer ska ges innan full dos är uppnådd)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.doseOrdinalNumber",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.doseOrdinalNumber",
      "short" : "Anger vilken dos i ordningen",
      "definition" : "Anger vilken dos i ordningen som administrerats då vaccineringen är en del av flera vaccinationer som ska utföras för att räknas som full dos uppnådd. Värden 1,2,3,… 1 om endast en vaccinering utgör full dos. Exempel: om tre doser krävs för att vaccinationen ska uppnå full dos och patient erhåller den andra i ordningen anges detta värde som 2.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.numberOfPrescribedDoses",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.numberOfPrescribedDoses",
      "short" : "Antal delvaccinationer för hel dos",
      "definition" : "Anger antalet delvaccinationer som ska utföras för att vaccinationen ska räknas som full dos uppnådd. Värden 1,2,3,… 1 om endast en vaccinering utgör full dos Exempel: om tre doser krävs för att vaccinationen ska uppnå full dos anges detta värde som 3.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.sourceDescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.sourceDescription",
      "short" : "Fritext om källa för efterregistrerad vaccinering",
      "definition" : "Fritextinformation som anger källa för vaccinering som efterregistrerats. T ex namn på annan vårdenhet, intyg, land el. dyl.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.commentPrescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.commentPrescription",
      "short" : "Fritext: instruktioner från ordination",
      "definition" : "Fritextinformation. T.ex. instruktioner som noterats i ordinationen av vaccineringen",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.commentAdministration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.commentAdministration",
      "short" : "Fritext: kommentarer vid vaccinering",
      "definition" : "Fritextinformation. Generella kommentarer gjorde vid vaccineringen av den som utfört den",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.patientAdverseEffect",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.patientAdverseEffect",
      "short" : "Reaktioner för det specifika administreringstillfället",
      "definition" : "Information om patienten erfarit någon eller några reaktioner hänför bara till den specifika administreringen",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.typeOfVaccine",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.typeOfVaccine",
      "short" : "Vaccintyp (vilka sjukdomar vaccinet skyddar emot)",
      "definition" : "Information om givet vaccin. Beskriver vaccintyp i praktiken genom att beskriva vilka sjukdomar som vaccinet skyddar emot (exempel på koder: Hep A, MPR och säsongsinfluensa).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineName",
      "short" : "Vaccinets produktnamn (NPL-id rekommenderas)",
      "definition" : "Information om givet vaccins produktnamn. I code ska anges företrädelsevis NPL-id (codeSystem =1.2.752.129.2.1.5.1, codeSystemName = ”NPL”). Om standardkodverk ej används anges endast namnet på vaccinet i attributet originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineBatchId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineBatchId",
      "short" : "Batchnummer för vaccinets tillverkning",
      "definition" : "Identifiering av batchnummer för vaccinets tillverkning",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineManufacturer",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineManufacturer",
      "short" : "Namn på vaccintillverkaren",
      "definition" : "Namn på tillverkaren av vaccinet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineTargetDisease",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccineTargetDisease",
      "short" : "Sjukdomar vaccinet skyddar emot",
      "definition" : "Information om den/de sjukdomar vaccinet skyddar emot.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccinationUniqueReference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.administrationRecord.vaccinationUniqueReference",
      "short" : "Unik referens till källsystemets vaccinationsinformation",
      "definition" : "Unika referensen till källsystemets vaccinationsinformation.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.additionalPatientInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.additionalPatientInformation",
      "short" : "Ytterligare patientinformation",
      "definition" : "Ytterligare information om patienten som inte går att få tag på via en gemensam PU-slagning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.additionalPatientInformation.dateOfBirth",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.additionalPatientInformation.dateOfBirth",
      "short" : "Patientens födelsedatum",
      "definition" : "Patientens födelsedatum.\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.additionalPatientInformation.gender",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.vaccinationMedicalRecord.vaccinationMedicalRecordBody.additionalPatientInformation.gender",
      "short" : "Patientens kön. KV Kön (OID 1.2.752.129.2.2.1.1) bör användas. CVType-begränsning (Regel): originalText är förbjudet (0..0) — code, codeSystem och displayName ska anges.",
      "definition" : "Patientens kön. KV Kön (1.2.752.129.2.2.1.1) bör användas.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.result",
      "path" : "SEEHDSLMVaccinationHistory.result",
      "short" : "Svarsstatus",
      "definition" : "Innehåller information om begäran gick bra eller ej.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.result.resultCode",
      "short" : "OK, INFO eller ERROR",
      "definition" : "Kan endast vara OK, INFO eller ERROR\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.result.resultCode.value",
      "path" : "SEEHDSLMVaccinationHistory.result.resultCode.value",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/resultcode-vs"
      }
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.result.errorCode",
      "short" : "Sätts om resultCode är ERROR",
      "definition" : "Sätts endast om resultCode är ERROR, se kapitel 4.4 för mer information.\nTillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.result.errorCode.value",
      "path" : "SEEHDSLMVaccinationHistory.result.errorCode.value",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/errorcode-vs"
      }
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.result.logId",
      "short" : "UUID för felsökning hos producent",
      "definition" : "En UUID som kan användas vid felanmälan för att användas vid felsökning av producent.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.result.subCode",
      "short" : "Inga subkoder specificerade",
      "definition" : "Inga subkoder är specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMVaccinationHistory.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMVaccinationHistory.result.message",
      "short" : "Beskrivande text för användaren",
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
