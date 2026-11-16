# GetMedicationHistory - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: GetMedicationHistory 

**Användningar:**

* Denna Logisk modell används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSLMMedicationHistory.json)

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

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSLMMedicationHistory.csv), [Excel](../StructureDefinition-SEEHDSLMMedicationHistory.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSLMMedicationHistory",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics",
    "valueCode" : "can-be-target"
  },
  {
    "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
    "valueString" : "GetMedicationHistoryResponse"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
    "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:GetMedicationHistoryResponder:2"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory",
  "version" : "0.9.0",
  "name" : "SEEHDSLMMedicationHistory",
  "title" : "GetMedicationHistory",
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
  "description" : "Logisk modell för tjänstekontraktet GetMedicationHistory\n(RIV-TA urn:riv:clinicalprocess:activityprescription:actoutcome:GetMedicationHistoryResponder:2).\nRepresenterar responsens informationsstruktur — läkemedelshistorik per patient.\n\nOBS: Kontraktet är tämligen omfattande. Se tillämpningsanvisningen\n(AB_clinicalprocess_activityprescription_actoutcome.docx) för implementationsdetaljer.",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSLMMedicationHistory",
      "path" : "SEEHDSLMMedicationHistory",
      "short" : "GetMedicationHistory",
      "definition" : "Logisk modell för tjänstekontraktet GetMedicationHistory\n(RIV-TA urn:riv:clinicalprocess:activityprescription:actoutcome:GetMedicationHistoryResponder:2).\nRepresenterar responsens informationsstruktur — läkemedelshistorik per patient.\n\nOBS: Kontraktet är tämligen omfattande. Se tillämpningsanvisningen\n(AB_clinicalprocess_activityprescription_actoutcome.docx) för implementationsdetaljer."
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord",
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord",
      "short" : "Patientens läkemedelshistorik",
      "definition" : "En läkemedelsjournalpost per ordination. En patient kan ha många poster.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader",
      "short" : "Basinformation om dokumentet",
      "definition" : "Innehåller basinformation om dokumentet, inklusive information om vid vilken vårdkontakt som ordinationen skedde. Notera: accountableHealthCareProfessional anges till den som registrerat informationen. Ordinatör, förskrivare och administrerande vårdpersonal anges i Bodyn.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.documentId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.documentId",
      "short" : "Identifierare för uppgift (vanligtvis ordinations-id)",
      "definition" : "Vanligtvis ordinations-id eller ordinations-id kompletterat med löpnummer.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.sourceSystemHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.sourceSystemHSAId",
      "short" : "Källsystemets HSA-id",
      "definition" : "Det källsystem som uppgiften lagras i. Sätts till källsystemets HSA-id.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.documentTitle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.documentTitle",
      "short" : "Titel (ej tillämpligt — 0..0 per TKB)",
      "definition" : "Titel som beskriver den information som tillgängliggörs.\nKardinaliteten 0..0 kommer från tidigare modell; TKB anger 0..1.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.documentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.documentTime",
      "short" : "Tidpunkt för dokumentet",
      "definition" : "Ska ej anges\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.patientId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.patientId",
      "short" : "Personidentifierare för patienten",
      "definition" : "Personidentifierare för patienten.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPersonIdTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional",
      "short" : "Dokumentationsansvarig",
      "definition" : "Information avseende dokumentation av uppgiften som tillgängliggörs. Notera att den som registrerar uppgiften från annan källa, exempelvis en medicinsk sekreterare som transkriberar ett diktat, inte avses.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.authorTime",
      "short" : "Tidpunkt för dokumentation",
      "definition" : "Tidpunkt då uppgiften dokumenterades eller senast uppdaterades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "HSA-id för personal",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som dokumenterat uppgiften som tillgängliggörs.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på personal",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Anges med tilltalsnamn och efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Befattning (KV Befattning OID 1.2.752.129.2.2.1.4)",
      "definition" : "Information om hälso- och sjukvårdspersonalens befattning så som den var angiven i HSA-katalogen vid dokumentationstidpunkten. Anges med HSAs kodverk Befattning (OID: 1.2.752.129.2.2.1.4) [R6]. Om kod inte är tillgänglig anges befattning som klartext i datatypens attribut originalText.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Organisationsenhet",
      "definition" : "Den organisation som hälso- och sjukvårdspersonalen är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. I de fall då HSA-id inte finns tillgängligt i systemet ska lokalt id anges (unikt inom källsystemet).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn på organisationsenhet",
      "definition" : "Namnet på organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post",
      "definition" : "E-post till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress",
      "definition" : "Postadress till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats/ort",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet",
      "definition" : "HSA-id för vårdenheten där uppgiften är dokumenterad. För mer information av vad som avses med vårdenhet, se [R17]. I de fall då HSA-id inte finns tillgängligt i systemet ska lokalt id anges (unikt inom källsystemet). Regel 1.1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.accountableHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id/id för vårdgivare",
      "definition" : "Id för uppgiftsägande vårdgivare. För mer information av vad som avses med vårdgivare, se [R17]. I första hand HSA-id, i andra hand organisationsnummer. Regel 1.1",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.legalAuthenticator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.legalAuthenticator",
      "short" : "Information om signering",
      "definition" : "Information avseende signering av uppgiften som tillgängliggörs.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.legalAuthenticator.signatureTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.legalAuthenticator.signatureTime",
      "short" : "Tidpunkt för signering",
      "definition" : "Tidpunkt då uppgiften signerades.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorHSAId",
      "short" : "HSA-id för signerande personal",
      "definition" : "HSA-id för hälso- och sjukvårdspersonal som signerat uppgiften som tillgängliggörs.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.legalAuthenticator.legalAuthenticatorName",
      "short" : "Namn på signerande personal",
      "definition" : "Namn på hälso- och sjukvårdspersonal. Anges med tilltalsnamn och efternamn.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.approvedForPatient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.approvedForPatient",
      "short" : "Ansvarig vårdpersonals beslut om synlighet (PDL-prövning)",
      "definition" : "Ansvarig vårdpersonals beslut, alternativt verksamhetens policy och regler (men- och sekretessprövning), huruvida uppgiften får delas till patient för ändamålet patients åtkomst (Individens direktåtkomst). Om uppgiften beslutas delas sätts värdet till true, i annat fall till false. False innebär att uppgiften inte får delas till patient. Notera att värdet kan, för samma uppgift, förändras med tiden på grund av att rådrumstid har passerats, eller att verksamheten ändrat policy för vad som lämnas ut till patient. I sådana fall ska källsystemet uppdatera engagemangsindex.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.careContactId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.careContactId",
      "short" : "Identitet för vård- och omsorgskontakt",
      "definition" : "Identitetet för den vård- och omsorgskontakt som föranlett den information som omfattas av dokumentet. Identiteten är unik inom källsystemet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.nullified",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.nullified",
      "short" : "Makulerat (ej tillämpligt)",
      "definition" : "N/A — GetMedicationHistory stödjer inte nullified. Elementet är 0..0 per TKB.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.nullifiedReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordHeader.nullifiedReason",
      "short" : "Makuleringsskäl (ej tillämpligt)",
      "definition" : "N/A — GetMedicationHistory stödjer inte nullifiedReason. Elementet är 0..0 per TKB.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody",
      "short" : "Läkemedelshistorikens innehåll",
      "definition" : "Läkemedelshistorikens innehåll",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription",
      "short" : "Läkemedelsordination",
      "definition" : "LÄKEMEDELSORDINATION. Ordination som avser läkemedelsbehandling. De individuella läkemedelsordinationerna kan indelas i ordination som avser utsättning, förändrande läkemedelsordination, ordination som avser insättning och bekräftande läkemedelsordination. I slutenvård görs endast ordination, men i öppenvård krävs vanligtvis även en förskrivning (se nedan).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-prescriber",
        "severity" : "error",
        "human" : "prescriber ska anges om selfMedication är false",
        "expression" : "selfMedication.value = true or prescriber.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      },
      {
        "key" : "getmedicationhistory-start-of-treatment",
        "severity" : "error",
        "human" : "startOfTreatment ska anges om typeOfPrescription är I",
        "expression" : "typeOfPrescription.value != 'I' or startOfTreatment.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriptionId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriptionId",
      "short" : "Ordinations-id",
      "definition" : "Unik identifierare för aktuell läkemedelsordination.\nroot = UUID eller OID som pekar på källsystem.\nextension = ordinations-id unikt inom källsystemet.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.typeOfPrescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.typeOfPrescription",
      "short" : "Ordinationstyp (I=insättning, U=utsättning)",
      "definition" : "Ordinationstyp. Uppgift som anger om aktuell ordination ska räknas som en insättningsordination eller utsättningsordination (utsättningsordination = ordination som beskriver avslut av läkemedelsbehandling). Insättning används när läkemedlet är insatt, dvs. även en ändrad eller förnyad ordination har typen insättning. Kodverk: I, U.\nTillåtna värden enligt XSD: I, U.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.typeOfPrescription.value",
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.typeOfPrescription.value",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/typeofprescription-vs"
      }
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriptionStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriptionStatus",
      "short" : "Ordinationsstatus (Active/Inactive)",
      "definition" : "Ordinationsstatus. Anger ordinationens aktuella status [Active, Inactive] En aktiv ordination är den sista i sin ordinationskedja. Alla andra ordinationer i samma ordinationskedja är inaktiva.\nTillåtna värden enligt XSD: Active, Inactive.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriptionStatus.value",
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriptionStatus.value",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/prescriptionstatus-vs"
      }
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriptionNote",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriptionNote",
      "short" : "Notat om ordinationen (del av Läkemedelsberättelse)",
      "definition" : "Notat. Text som beskriver läkemedelsordinationen som utgör del av Läkemedelsberättelse. Exempel: Text som beskriver varför man satt in eller gjort dosändringar.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.principalPrescriptionReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.principalPrescriptionReason",
      "short" : "Ordinationshuvudorsak",
      "definition" : "Den eller de viktigaste av de ordinationsorsaker som anges.\nAnges med Socialstyrelsens kodsystem för ordinationsorsaker.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.principalPrescriptionReason.reason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.principalPrescriptionReason.reason",
      "short" : "Ordinationsorsak (Socialstyrelsens kodsystem)",
      "definition" : "Ordinationsorsak. Skäl till en viss ordination. Anges enligt Socialstyrelsens kodsystem för ordinationsorsaker (NKOO, Nationell källa för ordinationsorsak). Se [R8].\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.principalPrescriptionReason.otherReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.principalPrescriptionReason.otherReason",
      "short" : "Beskrivning om 'Annan ordinationsorsak' väljs",
      "definition" : "Om koden för ”Annan ordinationsorsak” (SNOMED: 46021000052104) väljs för föregående kod så anges beskrivning här.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.additionalPrescriptionReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.additionalPrescriptionReason",
      "short" : "Övriga ordinationsorsaker",
      "definition" : "Anges en övrig ordinationsorsak måste minst en ordinationshuvudorsak vara angiven.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.additionalPrescriptionReason.reason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.additionalPrescriptionReason.reason",
      "short" : "Ordinationsorsak",
      "definition" : "Ordinationsorsak. Skäl till en viss ordination. Anges enligt Socialstyrelsens kodsystem för ordinationsorsaker (NKOO). Se [R8].\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.additionalPrescriptionReason.otherReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.additionalPrescriptionReason.otherReason",
      "short" : "Beskrivning om 'Annan ordinationsorsak' väljs",
      "definition" : "Om koden för ”Annan ordinationsorsak” (SNOMED: 46021000052104) väljs för föregående kod så anges beskrivning här.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluationTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluationTime",
      "short" : "Nästa planerade utvärderingstidpunkt",
      "definition" : "Utvärderingstidpunkt (nästa planerade utvärderingstidpunkt). Tidpunkt vid vilken behandlingen ska utvärderas.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.treatmentPurpose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.treatmentPurpose",
      "short" : "Behandlingsändamål",
      "definition" : "Behandlingsändamål. Text som beskriver avsikten med läkemedelsbehandlingen för vård- och omsorgstagaren. Exempel: Mot högt blodtryck.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriptionChainId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriptionChainId",
      "short" : "Ordinationskedje-id",
      "definition" : "Ordinationskedje-id. Lokal identifierare för den ordinationskedja i vilken aktuell ordination ingår. Serie av läkemedelsordinationer med gemensam indikation, gemensam verksam substans och gemensam läkemedelsform",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.precedingPrescriptionId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.precedingPrescriptionId",
      "short" : "Föregående ordinations-id",
      "definition" : "Föregående ordinations-id. Referens till föregående ordination i ordinationskedja.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.succeedingPrescriptionId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.succeedingPrescriptionId",
      "short" : "Efterföljande ordinations-id",
      "definition" : "Efterföljande ordinations-id. Referens till efterföljande ordination i ordinationskedja.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber",
      "short" : "Ordinatör",
      "definition" : "Icke att beblandas med accountableHealthcareProfessional (den som registrerat).\nVillkor (Regel 1.8): Obligatorisk om selfMedication = false.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.authorTime",
      "short" : "Beslutstidpunkt/ordinationstidpunkt",
      "definition" : "Beslutstidpunkt/ordinationstidpunkt. Tidpunkt då beslut fattas om läkemedelsbehandling (gäller för insättning, utsättning, makulering etc) Inte nödvändigtvis samma som behandlingsstart.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalHSAId",
      "short" : "Ordinatörens HSA-id",
      "definition" : "Ordinatörens HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalName",
      "short" : "Namn på ordinatören",
      "definition" : "Namn på ordinatören. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalRoleCode",
      "short" : "Ordinatörens befattning",
      "definition" : "Information om ordinatörens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4) användas, se referens [R6].",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit",
      "short" : "Organisation ordinatören är uppdragstagare på",
      "definition" : "Den organisation som ordinatören är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id för organisationsenhet. I de fall då HSA-id inte finns tillgängligt i systemet ska lokalt id anges (unikt inom källsystemet).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn",
      "definition" : "Namnet på den organisation som hälso- och sjukvårdspersonalen är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post",
      "definition" : "E-post till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress",
      "definition" : "Postadress för den organisation som hälso- och sjukvårdspersonalen är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats/ort",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.prescriber.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivare",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator",
      "short" : "'Utvärderat av' — person som utvärderat utfallet",
      "definition" : "”Utvärderat av”. Den hälso- och sjukvårdsperson/-enhet som utvärderat utfallet av ordinationen/förskrivningen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.authorTime",
      "short" : "Faktisk utvärderingstidpunkt",
      "definition" : "Utvärderingstidpunkt (faktisk utvärderingstidpunkt). Tidpunkt vid vilken ordinationen har utvärderats.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalHSAId",
      "short" : "Utvärderande persons HSA-id",
      "definition" : "Utvärderande persons HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalName",
      "short" : "Namn på utvärderande person",
      "definition" : "Namn på utvärderande person. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalRoleCode",
      "short" : "Utvärderande persons befattning",
      "definition" : "Information om utvärderande persons befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4) användas, se referens [R6].",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit",
      "short" : "Utvärderande persons organisation",
      "definition" : "Den organisation som utvärderande person är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id",
      "definition" : "HSA-id för organisationsenhet. I de fall då HSA-id inte finns tillgängligt i systemet ska lokalt id anges (unikt inom källsystemet).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namn",
      "definition" : "Namnet på den organisation som utvärderande person är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "E-post till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress till organisationsenhet",
      "definition" : "Postadress för den organisation som utvärderande person är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Plats för organisationsenhet",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalCareUnitHSAId",
      "short" : "HSA-id för vårdenhet",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.evaluator.healthcareProfessionalCareGiverHSAId",
      "short" : "HSA-id för vårdgivare",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.startOfFirstTreatment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.startOfFirstTreatment",
      "short" : "Första insättningstidpunkt (beräknad från ordinationskedjan)",
      "definition" : "Första insättningstidpunkt. Beräknas som insättningstidpunkt för första ordinationen i ordinationskedjan.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.startOfTreatment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.startOfTreatment",
      "short" : "Insättningstidpunkt. Villkor (Regel 1.8): Obligatorisk om typeOfPrescription = 'I' (insättning).",
      "definition" : "Insättningstidpunkt. Datum då patienten ska börja ta sitt läkemedel/läkemedlet ska administreras för första gången. Vid ordinationstyp ”Insättning” sätts detta till samma som registreringstidpunkt (authorTime i headern) om inget annat anges här. Är obligatorisk vid ordinationstyp ”Insättning”.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.endOfTreatment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.endOfTreatment",
      "short" : "Utsättningstidpunkt",
      "definition" : "Utsättningstidpunkt. Datum då patienten ska upphöra ta sitt läkemedel/då läkemedlet ska sluta administreras. OBS, kan anges både vid ordinationer av typ ”Insättning” och ”Utsättning”.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.endOfTreatmentReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.endOfTreatmentReason",
      "short" : "Utsättningsorsak",
      "definition" : "Utsättningsorsak. Orsak som ordinatör anger för utsättning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.selfMedication",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.selfMedication",
      "short" : "Anger om ordination är utfärdad av patienten själv",
      "definition" : "Egenmedicinering. Anger om ordinationen är utfärdad av patienten själv",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug",
      "short" : "Läkemedelsval (ett av: unstructured/merchandise/drugArticle/drug/generics)",
      "definition" : "OBS: Ett och endast ett av följande alternativ ska anges.\nVillkoret uttrycks av invarianten getmedicationhistory-drug-choice (MED-003).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-drug-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av unstructuredDrugInformation, merchandise, drugArticle, drug och generics ska anges (MED-003)",
        "expression" : "unstructuredDrugInformation.combine(merchandise).combine(drugArticle).combine(drug).combine(generics).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.comment",
      "short" : "Kommentar om läkemedelsval",
      "definition" : "Kommentar om läkemedelsval. Text som innehåller en kommentar till det ordinerade läkemedlet. Fältet kan användas för att specificera ytterligare läkemedel eller läkemedelsnära produkter, t.ex. i samband med spädning och infusion där läkemedlet består av en huvudingrediens men där spädningsvätskor eller motsvarande också kan behöva anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.unstructuredDrugInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.unstructuredDrugInformation",
      "short" : "Fritextval (extemporeberedning, licensläkemedel m.m.)",
      "definition" : "Fritextval. Används för extemporeberedning, licensläkemedel etc.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.unstructuredDrugInformation.unstructuredInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.unstructuredDrugInformation.unstructuredInformation",
      "short" : "Fritextbeskrivning",
      "definition" : "Fritextbeskrivning.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.merchandise",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.merchandise",
      "short" : "Handelsvara",
      "definition" : "Handelsvara.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.merchandise.articleNumber",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.merchandise.articleNumber",
      "short" : "Varunummer (från SIL)",
      "definition" : "Varunummer. Från SIL. Identifierare för ordinerad handelsvara (exempel: spruta). Bör anges med id ur Apotekets varunummerregister. OID: 1.2.752.129.2.2.3.1.1. Får ej anges för läkemedel.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drugArticle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drugArticle",
      "short" : "Läkemedelsartikel",
      "definition" : "Läkemedelsartikel.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drugArticle.nplPackId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drugArticle.nplPackId",
      "short" : "NPL pack-id (OID 1.2.752.129.2.1.5.2)",
      "definition" : "NPL pack-id. Unik identifierare enligt NPL för läkemedelsvaran. Satt om varunummer beskriver en godkänd läkemedelsvara. Kan vara satt om varunummer beskriver en licensvara. OID: 1.2.752.129.2.1.5.2.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug",
      "short" : "Läkemedelsprodukt",
      "definition" : "Läkemedelsprodukt.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-npl-or-atc",
        "severity" : "error",
        "human" : "Minst ett av nplId och atcCode ska anges",
        "expression" : "nplId.exists() or atcCode.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.nplId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.nplId",
      "short" : "NPL-id (OID 1.2.752.129.2.1.5.1)",
      "definition" : "NPL-id. Nationellt Produktregister för Läkemedelsprodukter. OID: 1.2.752.129.2.1.5.1. Alla producenter av kontraktet ska skicka code, codeSystem samt displayName. Antingen nplId eller atcCode måste anges.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.atcCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.atcCode",
      "short" : "ATC-kod (OID 1.2.752.129.2.2.3.1.1)",
      "definition" : "ATC-kod. atcKod + atcKodBeskrivning i SIL. Klassificeringskod för läkemedlet på sjuställig nivå. OID: 1.2.752.129.2.2.3.1.1. Underhålls av WHO Collaborating Centre for Drug Statistics Methodology, Oslo, Norge http://www.whocc.no/atcddd/ I Sverige oklart vilken instans som ansvarar men Läkemedelsverket har övergripande ansvar för läkemedelsfrågor www.lakemedelsverket.se/ ATC-kod, (Anatomic Therapeutic Chemical classification system), är ett klassificeringssystem för läkemedel. Läkemedlen indelas i olika grupper efter indikationsområde. Antingen nplId eller atcCode måste anges.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.routeOfAdministration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.routeOfAdministration",
      "short" : "Administreringssätt",
      "definition" : "Administreringssätt. Hur produkten ska intas/administreras. Kan anges med SNOMED-kod.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.pharmaceuticalForm",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.pharmaceuticalForm",
      "short" : "Läkemedelsform (t.ex. Tablett)",
      "definition" : "Läkemedelsform enligt SIL, t.ex Tablett",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.strength",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.strength",
      "short" : "Styrka (t.ex. 20.0)",
      "definition" : "Styrka enligt SIL, t.ex 20.0 I de fall läkemedlet är ett kombinationspreparat anges styrka (värde) för substans 1.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.strengthUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.drug.strengthUnit",
      "short" : "Enhet på styrka (t.ex. mg)",
      "definition" : "Enhet på styrka enligt SIL, t.ex mg. I de fall läkemedlet är ett kombinationspreparat anges enhet för substans 1, snedstreck, styrka (värde) för substans 2, enhet för substans 2. Exempel: ”mg/12.5 mg”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.generics",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.generics",
      "short" : "Generiskt läkemedelsval",
      "definition" : "Generiskt läkemedelsval.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.generics.substance",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.generics.substance",
      "short" : "Substansgrupp",
      "definition" : "Substansgrupp. Text som anger namn på den grupp som innehåller den läkemedel med den substans som önskas i aktuell läkemedelsordination.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.generics.strength",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.generics.strength",
      "short" : "Önskad styrka",
      "definition" : "Styrka. Önskad styrka på det generiska läkemedel som önskas i aktuell läkemedelsordination.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.generics.form",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.generics.form",
      "short" : "Läkemedelsform",
      "definition" : "Läkemedelsform. Text som anger namn på den grupp som innehåller de läkemedel med den läkemedelsform som önskas i aktuell läkemedelsordination",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage",
      "short" : "Dosering",
      "definition" : "Dosering. Socialstyrelsens termbank: Terminologirådet; uppgift om mängd och periodicitet. setDosage (fastdosering), maxiumumDosage (maxdosering) och conditionalDosage (villkorsdosering) anger samtliga mängd och periodicitet under en avgränsad tid, men med olika syfte. Normalt består en dosering av ett av dessa val men den kan även bestå av flera stycken, t.ex. vid upp- och nedtrappning av läkemedel. Dessa följer då varandra i tiden och utgör tillsammans den kompletta doseringen. De tre angivna attributen kan alltså, men behöver inte, förekomma samtidigt. Däremot måste minst ett av attributen fast dosering eller villkorsdosering alltid anges. Anges ej vid ordinationstyp Utsättning.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-dosage",
        "severity" : "error",
        "human" : "Minst ett av setDosage och conditionalDosage ska anges",
        "expression" : "setDosage.exists() or conditionalDosage.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.lengthOfTreatment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.lengthOfTreatment",
      "short" : "Behandlingstid",
      "definition" : "Behandlingstid.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.lengthOfTreatment.treatmentInterval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.lengthOfTreatment.treatmentInterval",
      "short" : "Tidsintervall för behandling (PQIntervalType)",
      "definition" : "Behandlingstid. Tidsintervall under vilket läkemedlet ska användas enligt ordination. Exempel: 5-6 veckor.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.lengthOfTreatment.isMaximumTreatmentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.lengthOfTreatment.isMaximumTreatmentTime",
      "short" : "Om true: maximalt tillåten tid",
      "definition" : "Logiskt villkor som anger om attributet behandlingstid avser den maximala tid som läkemedlet får användas. Sant = Behandlingstiden är en maxtid Falskt = Behandlingstiden är inte en maxtid.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.dosageInstruction",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.dosageInstruction",
      "short" : "Doseringsanvisning",
      "definition" : "Doseringsanvisning. Källa: Socialstyrelsens termbank: Terminologirådet; beskrivning av dosering, användning och ändamål riktad till patient. Text som beskriver doseringen.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.unitDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.unitDose",
      "short" : "Doseringsenhet",
      "definition" : "Doseringsenhet. Kod som anger den enhet som doseringen avser. Exempel: tablett, ml, droppe I dagsläget existerar ingen kvalitetssäkrad kodifierad förteckning över doseringsenheter, men kan anges med SNOMED-kod. Via SIL kan doseringsenhet som text erhållas för vissa läkemedel.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.shortNotation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.shortNotation",
      "short" : "Kortnotation, t.ex. '1x2'",
      "definition" : "Kortnotation. Text som ger en kort beskrivning av doseringen. Exempel: 1x2",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage",
      "short" : "Fastdosering",
      "definition" : "Dosering där ordinatören har bestämt mängd och periodicitet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage",
      "short" : "rampedDosage",
      "definition" : "rampedDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.doseStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.doseStep",
      "short" : "doseStep",
      "definition" : "doseStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.timeStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.timeStep",
      "short" : "timeStep",
      "definition" : "timeStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart",
      "short" : "rampStart",
      "definition" : "rampStart",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd",
      "short" : "rampEnd",
      "definition" : "rampEnd",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.setDosage.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage",
      "short" : "Maxdosering",
      "definition" : "Den högsta tillåtna mängden under en viss period.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage",
      "short" : "rampedDosage",
      "definition" : "rampedDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.doseStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.doseStep",
      "short" : "doseStep",
      "definition" : "doseStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.timeStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.timeStep",
      "short" : "timeStep",
      "definition" : "timeStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart",
      "short" : "rampStart",
      "definition" : "rampStart",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd",
      "short" : "rampEnd",
      "definition" : "rampEnd",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.maximumDosage.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage",
      "short" : "Villkorsdosering",
      "definition" : "Ordinerad mängd och periodicitet som gäller om ett visst villkor är uppfyllt.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.conditionDescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.conditionDescription",
      "short" : "Villkorstext",
      "definition" : "Villkorstext. Text som anger villkor kopplat till en villkorsdosering, t.ex. \"vid behov\". Det finns en diskrepans i multipliciteten för detta attribut mellan tjänstekontraktsbeskrivningen och XSD-schemat. Se arkitekturella beslut för denna domän för mer information om detta.\nTKB anger kardinaliteten 0..1, men XSD:n kräver 1..1. Modellen följer XSD:n.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.frequencyDosage",
      "short" : "Frekvensdosering",
      "definition" : "Frekvensdosering. Beskriver dosering uttryckt som mängd och periodicitet i form av ett antal intag eller appliceringar under en viss tidsenhet, dvs. frekvensen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.frequencyDosage.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.frequencyDosage.frequency",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex.",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex. 3 gånger dagligen (3/dag).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.periodDosage",
      "short" : "Perioddosering",
      "definition" : "Perioddosering. Beskriver dosering uttryckt som mängd och periodicitet i form av den tid som ska flyta mellan varje intag eller applicering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.periodDosage.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.periodDosage.period",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, …",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, t.ex. var 6:e timme (1/6 tim).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage",
      "short" : "Rampdosering",
      "definition" : "Rampdosering. Innehåller uppgifter om en successiv ökning eller minskning av läkemedelsdosen under en angiven tid. Detta innebär i praktiken att en trappstegsfunktion skapas i den slutliga doseringsanvisningen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.doseStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.doseStep",
      "short" : "Den mängd som dosen ska ökas eller minskas med vid varje tidssteg (vid varje ”trappsteg”)",
      "definition" : "Den mängd som dosen ska ökas eller minskas med vid varje tidssteg (vid varje ”trappsteg”).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.timeStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.timeStep",
      "short" : "Den tid som ska förflyta mellan varje ändring av dosen (längden på ”trappsteget”)",
      "definition" : "Den tid som ska förflyta mellan varje ändring av dosen (längden på ”trappsteget”).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart",
      "short" : "Den dosering som gäller vid doseringsstegets start",
      "definition" : "Den dosering som gäller vid doseringsstegets start.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage",
      "short" : "Frekvensdosering",
      "definition" : "Frekvensdosering. Beskriver dosering uttryckt som mängd och periodicitet i form av ett antal intag eller appliceringar under en viss tidsenhet, dvs. frekvensen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "short" : "den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex.",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex. 3 gånger dagligen (3/dag).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage",
      "short" : "Perioddosering",
      "definition" : "Perioddosering. Beskriver dosering uttryckt som mängd och periodicitet i form av den tid som ska flyta mellan varje intag eller applicering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.period",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, …",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, t.ex. var 6:e timme (1/6 tim).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose",
      "short" : "Engångsdosering",
      "definition" : "Engångsdosering. Beskriver att intag eller applicering ska ske vid ett enda tillfälle.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.time",
      "short" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras",
      "definition" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras. Tidpunkt kan anges som en specifik dag, (datum, veckodag eller antal dagar från Doseringsstegets början) eller som ett tillfälle eller klockslag inom dygnet eller som en kombination av dessa. Om tid utelämnas tolkas det som \"omgående\".\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "short" : "Fritextdosering",
      "definition" : "Beskriver en dosering i klartext. Denna doseringstyp används för de fall då doseringen är för komplex eller av andra skäl inte kan anges inom ramen för någon av de andra doseringstyperna",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "short" : "Dosering angiven i klartext",
      "definition" : "Dosering angiven i klartext",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd",
      "short" : "Den dosering som gäller vid doseringsstegets slut",
      "definition" : "Den dosering som gäller vid doseringsstegets slut.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage",
      "short" : "Frekvensdosering",
      "definition" : "Frekvensdosering. Beskriver dosering uttryckt som mängd och periodicitet i form av ett antal intag eller appliceringar under en viss tidsenhet, dvs. frekvensen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex.",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex. 3 gånger dagligen (3/dag).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage",
      "short" : "Perioddosering",
      "definition" : "Perioddosering. Beskriver dosering uttryckt som mängd och periodicitet i form av den tid som ska flyta mellan varje intag eller applicering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.period",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, …",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, t.ex. var 6:e timme (1/6 tim).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose",
      "short" : "Engångsdosering",
      "definition" : "Engångsdosering. Beskriver att intag eller applicering ska ske vid ett enda tillfälle.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.time",
      "short" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras",
      "definition" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras. Tidpunkt kan anges som en specifik dag, (datum, veckodag eller antal dagar från Doseringsstegets början) eller som ett tillfälle eller klockslag inom dygnet eller som en kombination av dessa. Om tid utelämnas tolkas det som \"omgående\".\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "short" : "Fritextdosering",
      "definition" : "Beskriver en dosering i klartext. Denna doseringstyp används för de fall då doseringen är för komplex eller av andra skäl inte kan anges inom ramen för någon av de andra doseringstyperna",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "short" : "Dosering angiven i klartext",
      "definition" : "Dosering angiven i klartext",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.singleDose",
      "short" : "Engångsdosering",
      "definition" : "Engångsdosering. Beskriver att intag eller applicering ska ske vid ett enda tillfälle.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.singleDose.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.singleDose.time",
      "short" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras",
      "definition" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras. Tidpunkt kan anges som en specifik dag, (datum, veckodag eller antal dagar från Doseringsstegets början) eller som ett tillfälle eller klockslag inom dygnet eller som en kombination av dessa. Om tid utelämnas tolkas det som \"omgående\".\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.unstructuredDosageInformation",
      "short" : "Fritextdosering",
      "definition" : "Beskriver en dosering i klartext. Denna doseringstyp används för de fall då doseringen är för komplex eller av andra skäl inte kan anges inom ramen för någon av de andra doseringstyperna",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.drug.dosage.conditionalDosage.unstructuredDosageInformation.text",
      "short" : "Dosering angiven i klartext",
      "definition" : "Dosering angiven i klartext",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization",
      "short" : "Förskrivning",
      "definition" : "Se XSD DispensationAuthorizationType för fullständig struktur.\nNyckelfält: dispensationAuthorizationId (1..1), dispensationAuthorizer (1..1,\ncareUnitHSAId/careGiverHSAId=0..0), prescriptionSignatura (1..1),\ndrug (0..1 XOR: unstructured/merchandise/drugArticle/drug/generics, samma mönster som ordination),\ntotalAmount/packageUnit (båda eller ingetdera — Regel 1.8), validUntil (0..1),\nnonReplaceable (0..1, enum Prescriber/Patient).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-total-amount",
        "severity" : "error",
        "human" : "totalAmount och packageUnit ska anges tillsammans eller inte alls",
        "expression" : "totalAmount.exists() = packageUnit.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizationId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizationId",
      "short" : "Förskrivnings-id",
      "definition" : "Förskrivnings-id. Unik identifierare för aktuell förskrivning",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.validUntil",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.validUntil",
      "short" : "Sista giltighetsdag",
      "definition" : "Sista giltighetsdag. Expeditionsunderlagets sista giltighetsdag.\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.receivingPharmacy",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.receivingPharmacy",
      "short" : "Mottagande apotek",
      "definition" : "Mottagande apotek. Apoteks-id (GLN eller EAN) vid direktadressering av expedieringsunderlag.\nEnligt TKB i detta sammanhang: extension 1..1.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-ii-strict",
        "severity" : "error",
        "human" : "extension ska anges",
        "expression" : "rivExtension.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.minimumDispensationInterval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.minimumDispensationInterval",
      "short" : "Utlämningsintervall",
      "definition" : "Utlämningsintervall. Minsta tidsintervall, i dagar, som ska förflyta mellan två utlämningar. Minsta värde: 1 dag Största värde: 12 månader.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.totalAmount",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.totalAmount",
      "short" : "Totalmängd",
      "definition" : "Totalmängd. Den totala mängd (i förpackningsenheter) av ordinerat läkemedel som får lämnas ut enligt denna förskrivning oavsett om det sker vid ett eller flera tillfällen. Om totalAmount anges måste också packageUnit anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.packageUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.packageUnit",
      "short" : "Förpackningsenhet",
      "definition" : "Förpackningsenhet. Text som anger den enhet som används för att uttrycka mängd i de förpackningar som säljs. Exempel: styck, ml, mg. Om packageUnit anges måste också totalAmount anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.distributionMethod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.distributionMethod",
      "short" : "Distributionssätt",
      "definition" : "Distributionssätt. Text som beskriver hur det förskrivna läkemedlet ska distribueras till vård- och omsorgstagaren. Exempel Apodos, Hemleverans, Hämtas.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer",
      "short" : "Förskrivare",
      "definition" : "Förskrivare. Hälso- och sjukvårdspersonal med förskrivningsrätt.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.authorTime",
      "short" : "Beslutstidpunkt/förskrivningsstidpunkt",
      "definition" : "Beslutstidpunkt/förskrivningsstidpunkt. Tidpunkt då beslut fattas om förskrivning.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalHSAId",
      "short" : "Förskrivarens HSA-id",
      "definition" : "Förskrivarens HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalName",
      "short" : "Namn på förskrivaren",
      "definition" : "Namn på förskrivaren. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalRoleCode",
      "short" : "Information om förskrivarens befattning",
      "definition" : "Information om förskrivarens befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4) användas, se referens [R6].",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit",
      "short" : "Den organisation som förskrivaren är uppdragstagare på",
      "definition" : "Den organisation som förskrivaren är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. I de fall då HSA-id inte finns tillgängligt i systemet ska lokalt id anges (unikt inom källsystemet).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namnet på den organisation som Hälso- och sjukvårdspersonalen är uppdragstagare på",
      "definition" : "Namnet på den organisation som Hälso- och sjukvårdspersonalen är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "E-post till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress för den organisation som förskrivaren är uppdragstagare på",
      "definition" : "Postadress för den organisation som förskrivaren är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalCareUnitHSAId",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizer.healthcareProfessionalCareGiverHSAId",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizerComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.dispensationAuthorizerComment",
      "short" : "Förskrivares kommentar",
      "definition" : "Förskrivares kommentar. Kommentar till apoteket.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.firstDispensationBefore",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.firstDispensationBefore",
      "short" : "Första uttag före",
      "definition" : "Första uttag före. Datum före vilket första uttag av läkemedel måste göras.\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.prescriptionSignatura",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.prescriptionSignatura",
      "short" : "Doseringstext på recept",
      "definition" : "Doseringstext på recept. Instruktion till patienten.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.nonReplaceable",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.nonReplaceable",
      "short" : "Bytes ej",
      "definition" : "Bytes ej. Anger att ordinatör eller patient beslutat att förskriven artikel ej får bytas ut. Tillåtna värden: Prescriber, Patient Lämnas fältet tomt antas det betyda att läkemedlet får bytas ut.\nTillåtna värden enligt XSD: Prescriber, Patient.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug",
      "short" : "Läkemedelsval",
      "definition" : "Läkemedelsval. OBS: Ett och endast ett av följande alternativ: unstructuredDrugInformation (fritextval/extemporeberedning) merchandise (handelsvara) drugArticle (läkemedelsartikel) drug (läkemedelsprodukt) generics (generika/utbytesgrupp)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-drug-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av unstructuredDrugInformation, merchandise, drugArticle, drug och generics ska anges (MED-003)",
        "expression" : "unstructuredDrugInformation.combine(merchandise).combine(drugArticle).combine(drug).combine(generics).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.comment",
      "short" : "Kommentar om läkemedelsval",
      "definition" : "Kommentar om läkemedelsval. Text som innehåller en kommentar till det ordinerade läkemedlet. Fältet kan användas för att specificera ytterligare läkemedel eller läkemedelsnära produkter, t.ex. i samband med spädning och infusion där läkemedlet består av en huvudingrediens men där spädningsvätskor eller motsvarande också kan behöva anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.unstructuredDrugInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.unstructuredDrugInformation",
      "short" : "Fritextval",
      "definition" : "Fritextval. Används för extemporeberedning, licensläkemedel etc.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.unstructuredDrugInformation.unstructuredInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.unstructuredDrugInformation.unstructuredInformation",
      "short" : "Fritextbeskrivning",
      "definition" : "Fritextbeskrivning.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.merchandise",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.merchandise",
      "short" : "Handelsvara",
      "definition" : "Handelsvara.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.merchandise.articleNumber",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.merchandise.articleNumber",
      "short" : "Varunummer",
      "definition" : "Varunummer. Från SIL. Identifierare för ordinerad handelsvara (exempel: spruta). Bör anges med id ur Apotekets varunummerregister. OID: 1.2.752.129.2.2.3.1.1. Får ej anges för läkemedel.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drugArticle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drugArticle",
      "short" : "Läkemedelsartikel",
      "definition" : "Läkemedelsartikel.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drugArticle.nplPackId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drugArticle.nplPackId",
      "short" : "NPL pack-id",
      "definition" : "NPL pack-id. Unik identifierare enligt NPL för läkemedelsvaran. Satt om varunummer beskriver en godkänd läkemedelsvara. Kan vara satt om varunummer beskriver en licensvara. OID: 1.2.752.129.2.1.5.2.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug",
      "short" : "Läkemedelsprodukt",
      "definition" : "Läkemedelsprodukt.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-npl-or-atc",
        "severity" : "error",
        "human" : "Minst ett av nplId och atcCode ska anges",
        "expression" : "nplId.exists() or atcCode.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.nplId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.nplId",
      "short" : "NPL-id",
      "definition" : "NPL-id. Nationellt Produktregister för Läkemedelsprodukter. OID: 1.2.752.129.2.1.5.1.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.atcCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.atcCode",
      "short" : "ATC-kod",
      "definition" : "ATC-kod. atcKod + atcKodBeskrivning i SIL. Klassificeringskod för läkemedlet på sjuställig nivå. OID: 1.2.752.129.2.2.3.1.1. Underhålls av WHO Collaborating Centre for Drug Statistics Methodology, Oslo, Norge http://www.whocc.no/atcddd/ I Sverige oklart vilken instans som ansvarar men Läkemedelsverket har övergripande ansvar för läkemedelsfrågor www.lakemedelsverket.se/ ATC-kod, (Anatomic Therapeutic Chemical classification system), är ett klassificeringssystem för läkemedel. Läkemedlen indelas i olika grupper efter indikationsområde.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.routeOfAdministration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.routeOfAdministration",
      "short" : "Administreringssätt",
      "definition" : "Administreringssätt. Hur produkten ska intas/administreras. Kan anges med SNOMED-kod.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.pharmaceuticalForm",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.pharmaceuticalForm",
      "short" : "Läkemedelsform enligt SIL, t.ex Tablett",
      "definition" : "Läkemedelsform enligt SIL, t.ex Tablett",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.strength",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.strength",
      "short" : "Styrka enligt SIL, t.ex 20.0",
      "definition" : "I de fall läkemedlet är ett kombinationspreparat anges styrka (värde) för substans 1.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.strengthUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.drug.strengthUnit",
      "short" : "Enhet på styrka enligt SIL, t.ex mg.",
      "definition" : "Enhet på styrka enligt SIL, t.ex mg. I de fall läkemedlet är ett kombinationspreparat anges enhet för substans 1, snedstreck, styrka (värde) för substans 2, enhet för substans 2. Exempel: ”mg/12.5 mg”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.generics",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.generics",
      "short" : "Generiskt läkemedelsval",
      "definition" : "Generiskt läkemedelsval.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.generics.substance",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.generics.substance",
      "short" : "Substansgrupp",
      "definition" : "Substansgrupp. Text som anger namn på den grupp som innehåller den läkemedel med den substans som önskas i aktuell läkemedelsordination.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.generics.strength",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.generics.strength",
      "short" : "Styrka",
      "definition" : "Styrka. Önskad styrka på det generiska läkemedel som önskas i aktuell läkemedelsordination.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.generics.form",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.generics.form",
      "short" : "Läkemedelsform",
      "definition" : "Läkemedelsform. Text som anger namn på den grupp som innehåller de läkemedel med den läkemedelsform som önskas i aktuell läkemedelsordination",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage",
      "short" : "dosage",
      "definition" : "dosage",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.lengthOfTreatment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.lengthOfTreatment",
      "short" : "lengthOfTreatment",
      "definition" : "lengthOfTreatment",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.lengthOfTreatment.treatmentInterval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.lengthOfTreatment.treatmentInterval",
      "short" : "treatmentInterval",
      "definition" : "treatmentInterval",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.lengthOfTreatment.isMaximumTreatmentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.lengthOfTreatment.isMaximumTreatmentTime",
      "short" : "isMaximumTreatmentTime",
      "definition" : "isMaximumTreatmentTime",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.dosageInstruction",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.dosageInstruction",
      "short" : "dosageInstruction",
      "definition" : "dosageInstruction",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.unitDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.unitDose",
      "short" : "unitDose",
      "definition" : "unitDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.shortNotation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.shortNotation",
      "short" : "shortNotation",
      "definition" : "shortNotation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage",
      "short" : "setDosage",
      "definition" : "setDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage",
      "short" : "rampedDosage",
      "definition" : "rampedDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.doseStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.doseStep",
      "short" : "doseStep",
      "definition" : "doseStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.timeStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.timeStep",
      "short" : "timeStep",
      "definition" : "timeStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart",
      "short" : "rampStart",
      "definition" : "rampStart",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd",
      "short" : "rampEnd",
      "definition" : "rampEnd",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.setDosage.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage",
      "short" : "maximumDosage",
      "definition" : "maximumDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage",
      "short" : "rampedDosage",
      "definition" : "rampedDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.doseStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.doseStep",
      "short" : "doseStep",
      "definition" : "doseStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.timeStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.timeStep",
      "short" : "timeStep",
      "definition" : "timeStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart",
      "short" : "rampStart",
      "definition" : "rampStart",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd",
      "short" : "rampEnd",
      "definition" : "rampEnd",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.maximumDosage.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage",
      "short" : "conditionalDosage",
      "definition" : "conditionalDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.conditionDescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.conditionDescription",
      "short" : "conditionDescription",
      "definition" : "conditionDescription",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage",
      "short" : "rampedDosage",
      "definition" : "rampedDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.doseStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.doseStep",
      "short" : "doseStep",
      "definition" : "doseStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.timeStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.timeStep",
      "short" : "timeStep",
      "definition" : "timeStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart",
      "short" : "rampStart",
      "definition" : "rampStart",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd",
      "short" : "rampEnd",
      "definition" : "rampEnd",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.dispensationAuthorization.drug.dosage.conditionalDosage.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration",
      "short" : "Information om administrering av läkemedel",
      "definition" : "Bara administreringstillfällen som faktiskt ägt rum kan anges.\nSe XSD AdministrationType för fullständig struktur.\nNyckelfält: administrationId (1..1), administrationTime (1..1, start/end —\nminst ett av start/end — Regel 1.8), administeringHealthcareProfessional (1..1,\ncareUnitHSAId/careGiverHSAId=0..0), routeOfAdministration (0..1),\ndrug (0..1 XOR), administrationComment (0..1).",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administrationId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administrationId",
      "short" : "Administrerings-id",
      "definition" : "Administrerings-id. Unik identifierare för aktuell administrering.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administrationTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administrationTime",
      "short" : "Tidsintervall för läkemedelsadministreringen",
      "definition" : "Tidsintervall för läkemedelsadministreringen. Om administreringen sker vid en viss tidpunkt sätts start och end till samma tidpunkt.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimePeriodTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-administration-time",
        "severity" : "error",
        "human" : "Minst ett av start och end ska anges",
        "expression" : "start.exists() or end.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administrationComment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administrationComment",
      "short" : "Kommentar till administrering av vårdpersonal",
      "definition" : "Kommentar till administrering av vårdpersonal. Exempelvis ”patienten kräktes 30 minuter efter administrering”.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.routeOfAdministration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.routeOfAdministration",
      "short" : "Administreringssätt",
      "definition" : "Administreringssätt. Hur produkten ska intas/administreras. Kan anges med SNOMED-kod.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional",
      "short" : "Information om administrerande vårdpersonal och -organisation",
      "definition" : "Information om administrerande vårdpersonal och -organisation.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.authorTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.authorTime",
      "short" : "Tidpunkt för signering av administrering",
      "definition" : "Tidpunkt för signering av administrering.\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalHSAId",
      "short" : "Administrerande personals HSA-id",
      "definition" : "Administrerande personals HSA-id.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalName",
      "short" : "Namn på administrerande personal",
      "definition" : "Namn på administrerande personal. Om tillgängligt ska detta anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalRoleCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalRoleCode",
      "short" : "Information om administrerande persons befattning",
      "definition" : "Information om administrerande persons befattning. Om möjligt ska KV Befattning (OID 1.2.752.129.2.2.1.4) användas, se referens [R6].",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit",
      "short" : "Den organisation som administrerande personal är uppdragstagare på",
      "definition" : "Den organisation som administrerande personal är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitHSAId",
      "short" : "HSA-id för organisationsenhet",
      "definition" : "HSA-id för organisationsenhet. I de fall då HSA-id inte finns tillgängligt i systemet ska lokalt id anges (unikt inom källsystemet).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitName",
      "short" : "Namnet på den organisation som administrerande personal är uppdragstagare på",
      "definition" : "Namnet på den organisation som administrerande personal är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitTelecom",
      "short" : "Telefon till organisationsenhet",
      "definition" : "Telefon till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitEmail",
      "short" : "E-post till organisationsenhet",
      "definition" : "E-post till organisationsenhet.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitAddress",
      "short" : "Postadress för den organisation som administrerande personal är uppdragstagare på",
      "definition" : "Postadress för den organisation som administrerande personal är uppdragstagare på.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalOrgUnit.orgUnitLocation",
      "short" : "Text som anger namnet på plats eller ort för organisationens fysiska placering",
      "definition" : "Text som anger namnet på plats eller ort för organisationens fysiska placering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalCareUnitHSAId",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.administeringHealthcareProfessional.healthcareProfessionalCareGiverHSAId",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug",
      "short" : "Läkemedelsval",
      "definition" : "Läkemedelsval. OBS: Ett och endast ett av följande alternativ: unstructuredDrugInformation (fritextval/extemporeberedning) merchandise (handelsvara) drugArticle (läkemedelsartikel) drug (läkemedelsprodukt) generics (generika/utbytesgrupp)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-drug-choice",
        "severity" : "error",
        "human" : "Ett och endast ett av unstructuredDrugInformation, merchandise, drugArticle, drug och generics ska anges (MED-003)",
        "expression" : "unstructuredDrugInformation.combine(merchandise).combine(drugArticle).combine(drug).combine(generics).count() = 1",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.comment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.comment",
      "short" : "Kommentar om läkemedelsval",
      "definition" : "Kommentar om läkemedelsval. Text som innehåller en kommentar till det administrerade läkemedlet. Fältet kan användas för att specificera ytterligare läkemedel eller läkemedelsnära produkter, t.ex. i samband med spädning och infusion där läkemedlet består av en huvudingrediens men där spädningsvätskor eller motsvarande också kan behöva anges.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.unstructuredDrugInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.unstructuredDrugInformation",
      "short" : "Fritextval",
      "definition" : "Fritextval. Används för extemporeberedning, licensläkemedel etc.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.unstructuredDrugInformation.unstructuredInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.unstructuredDrugInformation.unstructuredInformation",
      "short" : "Fritextbeskrivning",
      "definition" : "Fritextbeskrivning.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.merchandise",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.merchandise",
      "short" : "Handelsvara",
      "definition" : "Handelsvara.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.merchandise.articleNumber",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.merchandise.articleNumber",
      "short" : "Varunummer",
      "definition" : "Varunummer. Från SIL. Identifierare för ordinerad handelsvara (exempel: spruta). Bör anges med id ur Apotekets varunummerregister. OID: 1.2.752.129.2.2.3.1.1. Får ej anges för läkemedel.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drugArticle",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drugArticle",
      "short" : "Läkemedelsartikel",
      "definition" : "Läkemedelsartikel.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drugArticle.nplPackId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drugArticle.nplPackId",
      "short" : "NPL pack-id",
      "definition" : "NPL pack-id. Unik identifierare enligt NPL för läkemedelsvaran. Satt om varunummer beskriver en godkänd läkemedelsvara. Kan vara satt om varunummer beskriver en licensvara. OID: 1.2.752.129.2.1.5.2.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug",
      "short" : "Läkemedelsprodukt",
      "definition" : "Läkemedelsprodukt.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-npl-or-atc",
        "severity" : "error",
        "human" : "Minst ett av nplId och atcCode ska anges",
        "expression" : "nplId.exists() or atcCode.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.nplId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.nplId",
      "short" : "NPL-id",
      "definition" : "NPL-id. Nationellt Produktregister för Läkemedelsprodukter. OID: 1.2.752.129.2.1.5.1.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.atcCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.atcCode",
      "short" : "ATC-kod",
      "definition" : "ATC-kod. atcKod + atcKodBeskrivning i SIL. Klassificeringskod för läkemedlet på sjuställig nivå. OID: 1.2.752.129.2.2.3.1.1. Underhålls av WHO Collaborating Centre for Drug Statistics Methodology, Oslo, Norge http://www.whocc.no/atcddd/ I Sverige oklart vilken instans som ansvarar men Läkemedelsverket har övergripande ansvar för läkemedelsfrågor www.lakemedelsverket.se/ ATC-kod, (Anatomic Therapeutic Chemical classification system), är ett klassificeringssystem för läkemedel. Läkemedlen indelas i olika grupper efter indikationsområde.\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.routeOfAdministration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.routeOfAdministration",
      "short" : "Administreringssätt",
      "definition" : "Administreringssätt. Hur produkten ska intas/administreras. Kan anges med SNOMED-kod.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.pharmaceuticalForm",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.pharmaceuticalForm",
      "short" : "Läkemedelsform enligt SIL, t.ex Tablett",
      "definition" : "Läkemedelsform enligt SIL, t.ex Tablett",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.strength",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.strength",
      "short" : "Styrka enligt SIL, t.ex 20.0",
      "definition" : "I de fall läkemedlet är ett kombinationspreparat anges styrka (värde) för substans 1.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDecimal"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.strengthUnit",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.drug.strengthUnit",
      "short" : "Enhet på styrka enligt SIL, t.ex mg.",
      "definition" : "Enhet på styrka enligt SIL, t.ex mg. I de fall läkemedlet är ett kombinationspreparat anges enhet för substans 1, snedstreck, styrka (värde) för substans 2, enhet för substans 2. Exempel: ”mg/12.5 mg”",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.generics",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.generics",
      "short" : "Generiskt läkemedelsval",
      "definition" : "Generiskt läkemedelsval.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.generics.substance",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.generics.substance",
      "short" : "Substansgrupp",
      "definition" : "Substansgrupp. Text som anger namn på den grupp som innehåller den läkemedel med den substans som önskas i aktuell läkemedelsordination.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.generics.strength",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.generics.strength",
      "short" : "Styrka",
      "definition" : "Styrka. Önskad styrka på det generiska läkemedel som önskas i aktuell läkemedelsordination.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.generics.form",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.generics.form",
      "short" : "Läkemedelsform",
      "definition" : "Läkemedelsform. Text som anger namn på den grupp som innehåller de läkemedel med den läkemedelsform som önskas i aktuell läkemedelsordination",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage",
      "short" : "Dosering",
      "definition" : "Dosering. Socialstyrelsens termbank: Terminologirådet; uppgift om mängd och periodicitet. setDosage (fastdosering), maxiumumDosage (maxdosering) och conditionalDosage (villkorsdosering) anger samtliga mängd och periodicitet under en avgränsad tid, men med olika syfte. Normalt består en dosering av ett av dessa val men den kan även bestå av flera stycken, t.ex. vid upp- och nedtrappning av läkemedel. Dessa följer då varandra i tiden och utgör tillsammans den kompletta doseringen. De tre angivna attributen kan alltså, men behöver inte, förekomma samtidigt. Däremot måste minst ett av attributen fast dosering eller villkorsdosering alltid anges.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-dosage",
        "severity" : "error",
        "human" : "Minst ett av setDosage och conditionalDosage ska anges",
        "expression" : "setDosage.exists() or conditionalDosage.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.lengthOfTreatment",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.lengthOfTreatment",
      "short" : "Ska ej anges",
      "definition" : "Ska ej anges.",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.lengthOfTreatment.treatmentInterval",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.lengthOfTreatment.treatmentInterval",
      "short" : "treatmentInterval",
      "definition" : "treatmentInterval",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.lengthOfTreatment.isMaximumTreatmentTime",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.lengthOfTreatment.isMaximumTreatmentTime",
      "short" : "isMaximumTreatmentTime",
      "definition" : "isMaximumTreatmentTime",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBoolean"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.dosageInstruction",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.dosageInstruction",
      "short" : "dosageInstruction",
      "definition" : "dosageInstruction",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.unitDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.unitDose",
      "short" : "Doseringsenhet",
      "definition" : "Doseringsenhet. Kod som anger den enhet som doseringen avser. Exempel: tablett, ml, droppe I dagsläget existerar ingen kvalitetssäkrad kodifierad förteckning över doseringsenheter, men kan anges med SNOMED-kod. Via SIL kan doseringsenhet som text erhållas för vissa läkemedel.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.shortNotation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.shortNotation",
      "short" : "Kortnotation",
      "definition" : "Kortnotation. Text som ger en kort beskrivning av doseringen. Exempel: 1x2",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage",
      "short" : "Fastdosering",
      "definition" : "Fastdosering. Dosering där ordinatören har bestämt mängd och periodicitet, t.ex. 2 tabletter 3 gånger dagligen. Fastdosering kan utgöra Frekvensdosering, Perioddosering, Tillfällesdosering, Rampdosering, Engångsdosering och Fritextdosering. Dessa alla har det gemensamt att de anger mängd och periodicitet, men på lite olika sätt.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage",
      "short" : "rampedDosage",
      "definition" : "rampedDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.doseStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.doseStep",
      "short" : "doseStep",
      "definition" : "doseStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.timeStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.timeStep",
      "short" : "timeStep",
      "definition" : "timeStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart",
      "short" : "rampStart",
      "definition" : "rampStart",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd",
      "short" : "rampEnd",
      "definition" : "rampEnd",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.setDosage.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage",
      "short" : "Maxdosering",
      "definition" : "Maxdosering. Dosering som anger den högsta tillåtna mängden under en viss period, t.ex. högst 5 tabletter per vecka",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage",
      "short" : "rampedDosage",
      "definition" : "rampedDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.doseStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.doseStep",
      "short" : "doseStep",
      "definition" : "doseStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.timeStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.timeStep",
      "short" : "timeStep",
      "definition" : "timeStep",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart",
      "short" : "rampStart",
      "definition" : "rampStart",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd",
      "short" : "rampEnd",
      "definition" : "rampEnd",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage",
      "short" : "frequencyDosage",
      "definition" : "frequencyDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "short" : "frequency",
      "definition" : "frequency",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage",
      "short" : "periodDosage",
      "definition" : "periodDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.periodDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.singleDose",
      "short" : "singleDose",
      "definition" : "singleDose",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.singleDose.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.singleDose.time",
      "short" : "time",
      "definition" : "Format enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.unstructuredDosageInformation",
      "short" : "unstructuredDosageInformation",
      "definition" : "unstructuredDosageInformation",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.maximumDosage.unstructuredDosageInformation.text",
      "short" : "text",
      "definition" : "text",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage",
      "short" : "Villkorsdosering",
      "definition" : "Villkorsdosering. Ordinerad mängd och periodicitet som gäller om ett visst villkor är uppfyllt, t.ex. 1-2 tabletter till natten",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.conditionDescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.conditionDescription",
      "short" : "Villkorstext",
      "definition" : "Villkorstext. Text som anger villkor kopplat till en villkorsdosering, t.ex. \"vid behov\". Det finns en diskrepans i multipliciteten för detta attribut mellan tjänstekontraktsbeskrivningen och XSD-schemat. Se arkitekturella beslut för denna domän för mer information om detta.\nTKB anger kardinaliteten 0..1, men XSD:n kräver 1..1. Modellen följer XSD:n.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.frequencyDosage",
      "short" : "Frekvensdosering",
      "definition" : "Frekvensdosering. Beskriver dosering uttryckt som mängd och periodicitet i form av ett antal intag eller appliceringar under en viss tidsenhet, dvs. frekvensen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.frequencyDosage.dose",
      "short" : "den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.frequencyDosage.frequency",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex.",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex. 3 gånger dagligen (3/dag).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.periodDosage",
      "short" : "Perioddosering",
      "definition" : "Perioddosering. Beskriver dosering uttryckt som mängd och periodicitet i form av den tid som ska flyta mellan varje intag eller applicering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.periodDosage.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.periodDosage.period",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, …",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, t.ex. var 6:e timme (1/6 tim).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage",
      "short" : "Rampdosering",
      "definition" : "Rampdosering. Innehåller uppgifter om en successiv ökning eller minskning av läkemedelsdosen under en angiven tid.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.doseStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.doseStep",
      "short" : "Den mängd som dosen ska ökas eller minskas med vid varje tidssteg",
      "definition" : "Den mängd som dosen ska ökas eller minskas med vid varje tidssteg",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.timeStep",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.timeStep",
      "short" : "Den tid som ska förflyta mellan varje ändring av dosen",
      "definition" : "Den tid som ska förflyta mellan varje ändring av dosen",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart",
      "short" : "den dosering som gäller vid Doseringsstegets start",
      "definition" : "den dosering som gäller vid Doseringsstegets start",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage",
      "short" : "Frekvensdosering",
      "definition" : "Frekvensdosering. Beskriver dosering uttryckt som mängd och periodicitet i form av ett antal intag eller appliceringar under en viss tidsenhet, dvs. frekvensen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.frequencyDosage.frequency",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex.",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex. 3 gånger dagligen (3/dag).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage",
      "short" : "Perioddosering",
      "definition" : "Perioddosering. Beskriver dosering uttryckt som mängd och periodicitet i form av den tid som ska flyta mellan varje intag eller applicering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.periodDosage.period",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, …",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, t.ex. var 6:e timme (1/6 tim).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose",
      "short" : "Engångsdosering",
      "definition" : "Engångsdosering. Beskriver att intag eller applicering ska ske vid ett enda tillfälle.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.singleDose.time",
      "short" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras",
      "definition" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras. Tidpunkt kan anges som en specifik dag, (datum, veckodag eller antal dagar från Doseringsstegets början) eller som ett tillfälle eller klockslag inom dygnet eller som en kombination av dessa. Om tid utelämnas tolkas det som \"omgående\".\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation",
      "short" : "Fritextdosering",
      "definition" : "Beskriver en dosering i klartext. Denna doseringstyp används för de fall då doseringen är för komplex eller av andra skäl inte kan anges inom ramen för någon av de andra doseringstyperna",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampStart.unstructuredDosageInformation.text",
      "short" : "Dosering angiven i klartext",
      "definition" : "Dosering angiven i klartext",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd",
      "short" : "den dosering som gäller vid Doseringsstegets slut",
      "definition" : "den dosering som gäller vid Doseringsstegets slut",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage",
      "short" : "Frekvensdosering",
      "definition" : "Frekvensdosering. Beskriver dosering uttryckt som mängd och periodicitet i form av ett antal intag eller appliceringar under en viss tidsenhet, dvs. frekvensen.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.dose",
      "short" : "den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.frequencyDosage.frequency",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex.",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som antal gånger per tidsenhet, t.ex. 3 gånger dagligen (3/dag).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage",
      "short" : "Perioddosering",
      "definition" : "Perioddosering. Beskriver dosering uttryckt som mängd och periodicitet i form av den tid som ska flyta mellan varje intag eller applicering.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex.",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras vid varje tillfälle, t.ex. 2 tabletter",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.periodDosage.period",
      "short" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, …",
      "definition" : "Periodicitet för intaget eller appliceringen uttryck som förfluten tid mellan varje intag eller applicering, t.ex. var 6:e timme (1/6 tim).",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage",
      "short" : "occasionDosage",
      "definition" : "occasionDosage",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-occasion-dosage",
        "severity" : "error",
        "human" : "period.value ska vara mellan 1 och 28 och administration.dayOfPeriod mellan 1 och 14",
        "expression" : "period.value.value.all($this > 0 and $this < 29) and administration.dayOfPeriod.value.all($this > 0 and $this < 15)",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.period",
      "short" : "period",
      "definition" : "period",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration",
      "short" : "administration",
      "definition" : "administration",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dose",
      "short" : "dose",
      "definition" : "dose",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.time",
      "short" : "time",
      "definition" : "time",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.occasionDosage.administration.dayOfPeriod",
      "short" : "dayOfPeriod",
      "definition" : "dayOfPeriod",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivInteger"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose",
      "short" : "Engångsdosering",
      "definition" : "Engångsdosering. Beskriver att intag eller applicering ska ske vid ett enda tillfälle.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.singleDose.time",
      "short" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras",
      "definition" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras. Tidpunkt kan anges som en specifik dag, (datum, veckodag eller antal dagar från Doseringsstegets början) eller som ett tillfälle eller klockslag inom dygnet eller som en kombination av dessa. Om tid utelämnas tolkas det som \"omgående\".\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation",
      "short" : "Fritextdosering",
      "definition" : "Beskriver en dosering i klartext. Denna doseringstyp används för de fall då doseringen är för komplex eller av andra skäl inte kan anges inom ramen för någon av de andra doseringstyperna",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.rampedDosage.rampEnd.unstructuredDosageInformation.text",
      "short" : "Dosering angiven i klartext",
      "definition" : "Dosering angiven i klartext",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.singleDose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.singleDose",
      "short" : "Engångsdosering",
      "definition" : "Engångsdosering. Beskriver att intag eller applicering ska ske vid ett enda tillfälle.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.singleDose.dose",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.singleDose.dose",
      "short" : "Den mängd läkemedel som ska intas eller appliceras",
      "definition" : "Den mängd läkemedel som ska intas eller appliceras.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivPQIntervalTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-pq-interval",
        "severity" : "error",
        "human" : "Minst ett av low och high ska anges",
        "expression" : "low.exists() or high.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.singleDose.time",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.singleDose.time",
      "short" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras",
      "definition" : "Den tid eller det tillfälle under dygnet när läkemedlet ska intas eller appliceras. Tidpunkt kan anges som en specifik dag, (datum, veckodag eller antal. dagar från Doseringsstegets början) eller som ett tillfälle eller klockslag inom dygnet eller som en kombination av dessa. Om tid utelämnas tolkas det som \"omgående\".\nFormat enligt XSD (TimeStampType): ÅÅÅÅMMDDttmmss.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivTimeStamp"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.unstructuredDosageInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.unstructuredDosageInformation",
      "short" : "Fritextdosering",
      "definition" : "Beskriver en dosering i klartext. Denna doseringstyp används för de fall då doseringen är för komplex eller av andra skäl inte kan anges inom ramen för någon av de andra doseringstyperna",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.unstructuredDosageInformation.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.administration.drug.dosage.conditionalDosage.unstructuredDosageInformation.text",
      "short" : "Dosering angiven i klartext",
      "definition" : "Dosering angiven i klartext",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2.1"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation",
      "short" : "Sambandsklass",
      "definition" : "Alla meddelandeposter som i ordinationen pekas ut med samma relationstyp.\nSe XSD RelationType för fullständig struktur.\nNyckelfält: code (1..1 CVType), referredInformation (1..*:\nid/IIType 1..1, type/CVType 1..1 originalText 'caa-ga'/'chb-go',\ninformationOwner/InformationOwnerType 1..1).",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2.1"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.code",
      "short" : "Beskriver hur ordinationen relaterar till den refererade informationsmängden",
      "definition" : "Beskriver hur ordinationen relaterar till den refererade informationsmängden. Denna kod bör, i den mån det är tillämpligt, hämtas från den lista av sambandstyper som publiceras i senaste version av nationell informationsstruktur (NI) (ref R14). Exempel: om ordinationsbeslutet baseras på en diagnosticerad postoperativ infektion, så bör detta anges genom användande av SNOMED CT-koden “416083004 | har orsak”.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.referredInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2.1"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.referredInformation",
      "short" : "Information kring den refererade informationsmängden som tjänstekonsument behöver för att avgöra om och hur …",
      "definition" : "Information kring den refererade informationsmängden som tjänstekonsument behöver för att avgöra om och hur den refererade informationen ska hämtas.",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.referredInformation.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2.1"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.referredInformation.rivId",
      "short" : "Id till den aktivitet eller observation som refereras",
      "definition" : "Id till den aktivitet eller observation som refereras.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.referredInformation.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2.1"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.referredInformation.type",
      "short" : "Typ av interaktion som behöver nyttjas för att ta del av den refererade informationen",
      "definition" : "Typ av interaktion som behöver nyttjas för att ta del av den refererade informationen. Motsvarar fältet categorization i engagemangsindex. I skrivande stund finns inget OID-satt kodverk över olika categorization-typer, vilket betyder att fältet originalText behöver användas. Från den dag ett OID-satt kodverk finns tillgängligt bör detta användas istället. type.originalText får enbart sättas till ett av följande caa-ga för att referera till aktiviteter som tjänstekonsument kan hämta mha GetActivities chb-go för att referera till observationer som tjänstekonsument kan hämta mha GetObservations",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-referred-type",
        "severity" : "error",
        "human" : "type.originalText ska vara caa-ga eller chb-go",
        "expression" : "originalText.where(value = 'caa-ga' or value = 'chb-go').exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.referredInformation.informationOwner",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2.1"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.referredInformation.informationOwner",
      "short" : "Vårdgivare som är informationsägare av den refererade informationen",
      "definition" : "Vårdgivare som är informationsägare av den refererade informationen. Används av tjänstekonsument för spärrhantering.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.referredInformation.informationOwner.rivId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      },
      {
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/xml-name",
        "valueString" : "id"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.medicationPrescription.relation.referredInformation.informationOwner.rivId",
      "short" : "Informationsägande vårdgivare",
      "definition" : "Informationsägande vårdgivare",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivIITypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-ii-strict",
        "severity" : "error",
        "human" : "extension ska anges",
        "expression" : "rivExtension.exists()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.additionalPatientInformation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.additionalPatientInformation",
      "short" : "Ytterligare patientinformation",
      "definition" : "Ytterligare information om patienten som inte går att få tag på via en gemensam PU-slagning.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.additionalPatientInformation.dateOfBirth",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.additionalPatientInformation.dateOfBirth",
      "short" : "Patientens födelsedatum",
      "definition" : "Patientens födelsedatum.\nFormat enligt XSD (DateType): ÅÅÅÅMMDD.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivDate"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.additionalPatientInformation.gender",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.medicationMedicalRecord.medicationMedicalRecordBody.additionalPatientInformation.gender",
      "short" : "Patientens kön. KV Kön (OID 1.2.752.129.2.2.1.1) bör användas. CVType-begränsning (Regel 1.6): originalText är förbjudet (0..0) för könsfältet — code, codeSystem och displayName ska anges.",
      "definition" : "Patientens kön. KV Kön (1.2.752.129.2.2.1.1) bör användas (se referens [R6]).\nEnligt TKB i detta sammanhang: code 1..1, codeSystem 1..1, displayName 1..1, originalText 0..0.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivCVTypeActivityprescriptionActoutcome2"
      }],
      "constraint" : [{
        "key" : "getmedicationhistory-cv-strict",
        "severity" : "error",
        "human" : "code, codeSystem och displayName ska anges, originalText ska inte anges",
        "expression" : "code.exists() and codeSystem.exists() and displayName.exists() and originalText.empty()",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSLMMedicationHistory"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.result",
      "path" : "SEEHDSLMMedicationHistory.result",
      "short" : "Svarsstatus",
      "definition" : "Innehåller information om begäran gick bra eller ej.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "BackboneElement"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.result.resultCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.result.resultCode",
      "short" : "OK, INFO eller ERROR",
      "definition" : "Kan endast vara OK, INFO eller ERROR\nTillåtna värden enligt XSD: OK, ERROR, INFO.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.result.resultCode.value",
      "path" : "SEEHDSLMMedicationHistory.result.resultCode.value",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/resultcode-vs"
      }
    },
    {
      "id" : "SEEHDSLMMedicationHistory.result.errorCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.result.errorCode",
      "short" : "Sätts om resultCode är ERROR",
      "definition" : "Sätts endast om resultCode är ERROR, se kapitel 4.4 för mer information.\nTillåtna värden enligt XSD: INVALID_REQUEST.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.result.errorCode.value",
      "path" : "SEEHDSLMMedicationHistory.result.errorCode.value",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/errorcode-vs"
      }
    },
    {
      "id" : "SEEHDSLMMedicationHistory.result.logId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.result.logId",
      "short" : "UUID för felsökning hos producent",
      "definition" : "En UUID som kan användas vid felanmälan för att användas vid felsökning av producent.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.result.subCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.result.subCode",
      "short" : "Inga subkoder specificerade",
      "definition" : "Inga subkoder är specificerade.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivString"
      }]
    },
    {
      "id" : "SEEHDSLMMedicationHistory.result.message",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace",
        "valueUri" : "urn:riv:clinicalprocess:activityprescription:actoutcome:2"
      }],
      "path" : "SEEHDSLMMedicationHistory.result.message",
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
