# SE EHDS ServiceRequest – Konsultationsremiss (GetReferralOutcome) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS ServiceRequest – Konsultationsremiss (GetReferralOutcome) 

**Användningar:**

* Referera till denna Profil: [SE EHDS DiagnosticReport – Konsultationssvar (GetReferralOutcome)](StructureDefinition-SEEHDSDiagnosticReportReferral.md) and [SE EHDS Task – Remisstatus (GetRequestActivities)](StructureDefinition-SEEHDSTask.md)
* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSServiceRequestReferral.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSServiceRequestReferral.csv), [Excel](../StructureDefinition-SEEHDSServiceRequestReferral.xlsx), [Schematron](../StructureDefinition-SEEHDSServiceRequestReferral.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSServiceRequestReferral",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSServiceRequestReferral",
  "version" : "0.9.0",
  "name" : "SEEHDSServiceRequestReferral",
  "title" : "SE EHDS ServiceRequest – Konsultationsremiss (GetReferralOutcome)",
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
  "description" : "Profil för konsultationsremisser mappat från RIVTA-tjänstekontraktet GetReferralOutcome\n(clinicalprocess:healthcond:actoutcome v3.2). Täcker NPÖ 3.2 och 1177 Journal 3.2.\n\nNotera: GetReferralOutcome returnerar remissvaret, inte remissen i sig. Remissens\nmetadata finns under referralOutcomeBody.referral och är begränsad till id, orsak,\ntid och avsändare. Inget mottagarfält, prioritet, typ eller diagnos finns i TKBn\nför remissens del.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
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
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "quick",
    "uri" : "http://siframework.org/cqf",
    "name" : "Quality Improvement and Clinical Knowledge (QUICK)"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "ServiceRequest",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "ServiceRequest",
      "path" : "ServiceRequest"
    },
    {
      "id" : "ServiceRequest.meta.source",
      "path" : "ServiceRequest.meta.source",
      "short" : "Källsystem HSA-id (referralOutcomeHeader.sourceSystemHSAId) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier",
      "path" : "ServiceRequest.identifier",
      "short" : "Remissidentifierare (referralOutcomeBody.referral.referralId)",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.status",
      "path" : "ServiceRequest.status",
      "short" : "Alltid 'active' – härledd (remissdata i GetReferralOutcome representerar aktiva remisser)",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.intent",
      "path" : "ServiceRequest.intent",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.code",
      "path" : "ServiceRequest.code",
      "short" : "Ej direkt mappad – TKBn har inget kodat tjänstebegäransfält i remissblocket",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.subject",
      "path" : "ServiceRequest.subject",
      "short" : "Patient (referralOutcomeHeader.patientId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.authoredOn",
      "path" : "ServiceRequest.authoredOn",
      "short" : "Remisstidpunkt (referralOutcomeBody.referral.referralTime)",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.requester",
      "path" : "ServiceRequest.requester",
      "short" : "Remitterande personal (referralOutcomeBody.referral.referralAuthor)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.note",
      "path" : "ServiceRequest.note",
      "short" : "Remissorsak (referralOutcomeBody.referral.referralReason)",
      "mustSupport" : true
    }]
  }
}

```
