# SE EHDS Encounter – Vårdkontakter (GetCareContacts) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Encounter – Vårdkontakter (GetCareContacts) 

**Användningar:**

* Referera till denna Profil: [SE EHDS DocumentReference – Anteckningar (GetCareDocumentation)](StructureDefinition-SEEHDSDocumentReference.md)
* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSEncounter.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Encounter](http://hl7.org/fhir/R4/encounter.html) 

#### Begränsningar

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Encounter](http://hl7.org/fhir/R4/encounter.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [Encounter](http://hl7.org/fhir/R4/encounter.html) 

#### Begränsningar

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Encounter](http://hl7.org/fhir/R4/encounter.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSEncounter.csv), [Excel](../StructureDefinition-SEEHDSEncounter.xlsx), [Schematron](../StructureDefinition-SEEHDSEncounter.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSEncounter",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSEncounter",
  "version" : "0.9.0",
  "name" : "SEEHDSEncounter",
  "title" : "SE EHDS Encounter – Vårdkontakter (GetCareContacts)",
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
  "description" : "Profil för vårdkontakter mappat från RIVTA-tjänstekontraktet GetCareContacts (clinicalprocess:logistics:logistics v3.0). Täcker NPÖ 2.0, 3.0 och 1177 Journal 2.0, 3.0.",
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Encounter",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Encounter",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Encounter",
      "path" : "Encounter",
      "constraint" : [{
        "key" : "encounter-period-min-one",
        "severity" : "error",
        "human" : "careContactTimePeriod: minst ett av start och end måste anges",
        "expression" : "period.exists() implies (period.start.exists() or period.end.exists())",
        "source" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSEncounter"
      }]
    },
    {
      "id" : "Encounter.meta.source",
      "path" : "Encounter.meta.source",
      "short" : "Källsystem HSA-id (sourceSystemHSAId) – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.identifier",
      "path" : "Encounter.identifier",
      "short" : "Vårdkontaktens identitet (documentId)",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.status",
      "path" : "Encounter.status",
      "short" : "Kontaktstatus (careContactStatus – SNOMED CT SE, SCTID 53761000052103)",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.class",
      "path" : "Encounter.class",
      "short" : "Typ av vårdkontakt (careContactCode – KV Vårdkontakttyp OID 1.2.752.129.2.2.2.x)",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.subject",
      "path" : "Encounter.subject",
      "short" : "Patient (patientId)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Encounter.participant",
      "path" : "Encounter.participant",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.participant.individual",
      "path" : "Encounter.participant.individual",
      "short" : "Ansvarig personal (accountableHealthcareProfessional)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPractitionerRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Encounter.period",
      "path" : "Encounter.period",
      "short" : "Tidsintervall för vårdkontakten (careContactTimePeriod)",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.period.start",
      "path" : "Encounter.period.start",
      "short" : "Starttidpunkt (careContactTimePeriod.start)",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.period.end",
      "path" : "Encounter.period.end",
      "short" : "Sluttidpunkt (careContactTimePeriod.end)",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.reasonCode",
      "path" : "Encounter.reasonCode",
      "short" : "Orsak till vårdkontakt (careContactReason)",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.serviceProvider",
      "path" : "Encounter.serviceProvider",
      "short" : "Enhet för vårdkontakten (careContactOrgUnit – Regel 5: krävs för NPÖ)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSOrganization"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Encounter.serviceProvider.identifier",
      "path" : "Encounter.serviceProvider.identifier",
      "short" : "HSA-id för kontaktenhet (careContactOrgUnit.orgUnitHSAId) – obligatorisk per Regel 4",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Encounter.serviceProvider.display",
      "path" : "Encounter.serviceProvider.display",
      "short" : "Namn på kontaktenhet (careContactOrgUnit.orgUnitName) – obligatorisk per Regel 4",
      "min" : 1,
      "mustSupport" : true
    }]
  }
}

```
