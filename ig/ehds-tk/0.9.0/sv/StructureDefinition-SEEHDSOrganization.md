# SE EHDS Organization – Organisationsenhet - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Organization – Organisationsenhet 

**Användningar:**

* Referera till denna Profil: [SE EHDS AuditEvent – Läsning av åtkomstloggar (GetAccessLogForPatient)](StructureDefinition-SEEHDSAuditEventReadAccessLog.md), [SE EHDS CarePlan – Vårdplan (GetCarePlans)](StructureDefinition-SEEHDSCarePlan.md), [SE EHDS Composition – Strukturerad journalanteckning från DocBook (GetCareDocumentation)](StructureDefinition-SEEHDSCompositionCareDocumentation.md), [SE EHDS DiagnosticReport – Bilddiagnostiskt utlåtande (GetImagingOutcome)](StructureDefinition-SEEHDSDiagnosticReportImaging.md)... Show 7 more, [SE EHDS DiagnosticReport – Provsvar (GetLaboratoryOrderOutcome)](StructureDefinition-SEEHDSDiagnosticReportLab.md), [SE EHDS DiagnosticReport – Konsultationssvar (GetReferralOutcome)](StructureDefinition-SEEHDSDiagnosticReportReferral.md), [SE EHDS Encounter – Vårdkontakter (GetCareContacts)](StructureDefinition-SEEHDSEncounter.md), [SE EHDS Immunization – Vaccinationer (GetVaccinationHistory)](StructureDefinition-SEEHDSImmunization.md), [SE EHDS PractitionerRole – Hälso- och sjukvårdspersonal i uppdrag](StructureDefinition-SEEHDSPractitionerRole.md), [SE EHDS Provenance](StructureDefinition-SEEHDSProvenance.md) and [SE EHDS Task – Remisstatus (GetRequestActivities)](StructureDefinition-SEEHDSTask.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSOrganization.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [OrganizationEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-organization-eu-core.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [OrganizationEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-organization-eu-core.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [OrganizationEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-organization-eu-core.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [OrganizationEuCore](http://hl7.eu/fhir/base/2.0.0-ballot/StructureDefinition-organization-eu-core.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSOrganization.csv), [Excel](../StructureDefinition-SEEHDSOrganization.xlsx), [Schematron](../StructureDefinition-SEEHDSOrganization.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSOrganization",
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile",
    "valueCanonical" : "http://hl7.org/fhir/uv/ips/StructureDefinition/Organization-uv-ips"
  }],
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization",
  "version" : "0.9.0",
  "name" : "SEEHDSOrganization",
  "title" : "SE EHDS Organization – Organisationsenhet",
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
  "description" : "Profil för organisationsenheter i EHDS-TK-mappningar (vårdenheter, juridiska vårdgivare m.fl.).\nÄrver HL7 Europe Core Organization (EURIDICE). Identifier-slicen följer svenska basprofilernas\nkonvention (SEBaseOrganization: slice hsaid, system urn:oid:1.2.752.29.4.19, typ PRN).\n\nIdentifier-slicen ger stöd för HSA-id och SMI-id (Folkhälsomyndighetens\nid för vaccinationsenheter i det nationella vaccinationsregistret).\nNamn, kontaktuppgifter och adress mappar fält som annars inte har plats\ni resurserna de refereras ifrån.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Organization",
  "baseDefinition" : "http://hl7.eu/fhir/base/StructureDefinition/organization-eu-core",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Organization",
      "path" : "Organization"
    },
    {
      "id" : "Organization.identifier",
      "path" : "Organization.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "system"
        }],
        "rules" : "open"
      },
      "mustSupport" : true
    },
    {
      "id" : "Organization.identifier:hsaid",
      "path" : "Organization.identifier",
      "sliceName" : "hsaid",
      "short" : "HSA-id för organisationsenhet (orgUnitHSAId)",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Organization.identifier:hsaid.type",
      "path" : "Organization.identifier.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code" : "PRN"
        }]
      }
    },
    {
      "id" : "Organization.identifier:hsaid.system",
      "path" : "Organization.identifier.system",
      "min" : 1,
      "patternUri" : "urn:oid:1.2.752.29.4.19"
    },
    {
      "id" : "Organization.identifier:hsaid.value",
      "path" : "Organization.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Organization.identifier:smiId",
      "path" : "Organization.identifier",
      "sliceName" : "smiId",
      "short" : "SMI-id / Verksamhetsid från Folkhälsomyndighetens vaccinationsregister (careUnitSmiId). OID behöver verifieras – se VAC-006.",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Organization.identifier:smiId.system",
      "path" : "Organization.identifier.system",
      "min" : 1,
      "patternUri" : "urn:oid:1.2.752.194.10.1.1"
    },
    {
      "id" : "Organization.identifier:smiId.value",
      "path" : "Organization.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Organization.name",
      "path" : "Organization.name",
      "short" : "Organisationsenhetens namn (orgUnitName)",
      "mustSupport" : true
    },
    {
      "id" : "Organization.telecom",
      "path" : "Organization.telecom",
      "short" : "Telefon/e-post för organisationsenhet (orgUnitTelecom / orgUnitEmail)",
      "mustSupport" : true
    },
    {
      "id" : "Organization.address",
      "path" : "Organization.address",
      "mustSupport" : true
    },
    {
      "id" : "Organization.address.line",
      "path" : "Organization.address.line",
      "short" : "Gatuadress (orgUnitAddress)",
      "mustSupport" : true
    },
    {
      "id" : "Organization.address.city",
      "path" : "Organization.address.city",
      "short" : "Ort/plats (orgUnitLocation)",
      "mustSupport" : true
    }]
  }
}

```
