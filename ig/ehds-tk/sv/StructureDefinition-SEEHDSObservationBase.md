# SE EHDS Observation Base – GetObservations - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Observation Base – GetObservations 

**Användningar:**

* Härledd från denna Profil: [SE EHDS Observation – Tillväxtkurva (GetObservations + IoÖ v3)](StructureDefinition-SEEHDSObservationGrowth.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSObservationBase.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Observation](http://hl7.org/fhir/R4/observation.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Observation](http://hl7.org/fhir/R4/observation.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [Observation](http://hl7.org/fhir/R4/observation.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Observation](http://hl7.org/fhir/R4/observation.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSObservationBase.csv), [Excel](../StructureDefinition-SEEHDSObservationBase.xlsx), [Schematron](../StructureDefinition-SEEHDSObservationBase.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSObservationBase",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSObservationBase",
  "version" : "0.9.0",
  "name" : "SEEHDSObservationBase",
  "title" : "SE EHDS Observation Base – GetObservations",
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
  "description" : "Basprofil för alla observationer från GetObservations\n(clinicalprocess:healthcond:basic v2.0).\n\nProfilen fångar den generella TK-mappningen och används som förälder av\ndomänspecifika profiler (t.ex. SEEHDSObservationGrowth för tillväxtkurva).\n\nNyckeldesignbeslut:\n- observationBody.value är XOR-union av sju värdetyper (cv/pq/ivl_pq/ts/ivl_ts/st/int).\n  Varje gren mappas till respektive FHIR value[x]-variant.\n- Om valueNegation=true utelämnas value[x] och dataAbsentReason sätts.\n- observationBody.time (ts/ivl_ts) → effective[x]; registrationTime → issued.\n- participation är polymorf (healthcareProfessional/patient/otherPerson/locationRole/resource/organisation).\n  Välj FHIR-element per deltagartyp (se mappningssida).\n- PDL-fält (Sparr) hanteras via Provenance och meta.security (se mappningssida).\n\nTäcker NPÖ 1.2 och 1177 Journal 1.2.",
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
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
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
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Observation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Observation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation"
    },
    {
      "id" : "Observation.meta.source",
      "path" : "Observation.meta.source",
      "short" : "Källsystem (header) – HSA-id för det system som tillgängliggör informationen – https://tjanstekatalogen.inera.se/Endpoint/{hsaId} (GENERAL-005)",
      "mustSupport" : true
    },
    {
      "id" : "Observation.meta.security",
      "path" : "Observation.meta.security",
      "short" : "Säkerhetsmärkning:\nconfidentialityIndicator=true → v3-Confidentiality#R (skyddad identitet)\napprovedForPatient=false      → ActCode#NOPAT (ej visas för patient, se PDL-001)",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier",
      "path" : "Observation.identifier",
      "short" : "Observations-id (observationBody.observationId)",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier.system",
      "path" : "Observation.identifier.system",
      "short" : "OID för informationsägande vårdgivare (observationId.root) – format urn:oid:{root}",
      "mustSupport" : true
    },
    {
      "id" : "Observation.identifier.value",
      "path" : "Observation.identifier.value",
      "short" : "Unikt id inom vårdgivaren (observationId.extension)",
      "mustSupport" : true
    },
    {
      "id" : "Observation.status",
      "path" : "Observation.status",
      "short" : "Observationsstatus (observationBody.status – SNOMED CT urvals-id 56431000052106 → FHIR ObservationStatus via ConceptMap, se OBS-003)",
      "mustSupport" : true
    },
    {
      "id" : "Observation.code",
      "path" : "Observation.code",
      "short" : "Observationstyp (observationBody.type.code) – SNOMED CT SE OID 1.2.752.116.2.1.1; om saknas används platshållarkod",
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.coding",
      "path" : "Observation.code.coding",
      "short" : "Kodat observationstyps-värde; SNOMED CT SE-koder (http://snomed.info/sct)",
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.text",
      "path" : "Observation.code.text",
      "short" : "observationBody.type.displayName",
      "mustSupport" : true
    },
    {
      "id" : "Observation.subject",
      "path" : "Observation.subject",
      "short" : "Patient (observationBody.patient.person.id om tillgängligt; annars observationBody.patient.id)",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSPatient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.effective[x]",
      "path" : "Observation.effective[x]",
      "short" : "Observationstid (observationBody.time.ts → effectiveDateTime; observationBody.time.ivl_ts → effectivePeriod); se GENERAL-001 och OBS-001",
      "mustSupport" : true
    },
    {
      "id" : "Observation.issued",
      "path" : "Observation.issued",
      "short" : "Dokumentationstidpunkt (observationBody.registrationTime) – när uppgiften registrerades i journalen",
      "mustSupport" : true
    },
    {
      "id" : "Observation.performer",
      "path" : "Observation.performer",
      "short" : "Deltagare (observationBody.participation[*]):\nhealthcareProfessional.performerId → Reference(PractitionerRole)\notherPerson → Reference(RelatedPerson)\norganisation → Reference(Organization)\nresource → Observation.device (se nedan)\npatient/locationRole → se OBS-006",
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]",
      "path" : "Observation.value[x]",
      "short" : "Observationsvärde (observationBody.value – XOR-union):\ncv       → valueCodeableConcept\npq       → valueQuantity\nivl_pq   → valueRange\nts       → valueDateTime (precision ≥ dag) eller valueString (precision < dag, se OBS-001)\nivl_ts   → valuePeriod\nst       → valueString\nint → valueInteger\nOm valueNegation=true utelämnas value[x] och dataAbsentReason sätts (se OBS-002).",
      "mustSupport" : true
    },
    {
      "id" : "Observation.dataAbsentReason",
      "path" : "Observation.dataAbsentReason",
      "short" : "Negation (observationBody.valueNegation=true → dataAbsentReason.code='not-detected'); se OBS-002",
      "mustSupport" : true
    },
    {
      "id" : "Observation.note",
      "path" : "Observation.note",
      "short" : "Textuell beskrivning (observationBody.description); även overflow-lokal från targetSite[1..*] läggs här",
      "mustSupport" : true
    },
    {
      "id" : "Observation.bodySite",
      "path" : "Observation.bodySite",
      "short" : "Anatomisk lokalisation (observationBody.targetSite[0]).\nFörsta målplatsen mappas till bodySite; TK är 0..* men FHIR R4 är 0..1.\nYtterligare platser (index ≥ 1) mappas till extension[additionalBodySite] (se OBS-004).\nOBS: extension utgår i FHIR R5 där bodySite är 0..* – använd standard bodySite vid R5-migration.",
      "mustSupport" : true
    },
    {
      "id" : "Observation.method",
      "path" : "Observation.method",
      "short" : "Mätskala (observationBody.scale) – nominalskala/ordinalskala (t.ex. AUDIT, AB0-systemet)",
      "mustSupport" : true
    },
    {
      "id" : "Observation.device",
      "path" : "Observation.device",
      "short" : "Medicinteknisk utrustning (observationBody.participation[*].resource.id → Device.identifier)",
      "mustSupport" : true
    },
    {
      "id" : "Observation.hasMember",
      "path" : "Observation.hasMember",
      "short" : "Samband – panelmedlem (observationBody.relation[*] med relationstyp 'ingår i grupp'); se OBS-005",
      "mustSupport" : true
    },
    {
      "id" : "Observation.derivedFrom",
      "path" : "Observation.derivedFrom",
      "short" : "Samband – härledd observation (observationBody.relation[*] med relationstyp 'härledd från'); se OBS-005",
      "mustSupport" : true
    }]
  }
}

```
