# SE EHDS Observation – Tillväxtkurva (GetObservations + IoÖ v3) - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Resursprofil: SE EHDS Observation – Tillväxtkurva (GetObservations + IoÖ v3) 

**Användningar:**

* CapabilityStatements som använder denna Profil: [SE EHDS Resource Access Provider](CapabilityStatement-SEEHDSResourceAccessProvider.md)
* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSObservationGrowth.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [SEEHDSObservationBase](StructureDefinition-SEEHDSObservationBase.md) 

#### Terminologibindningar (differential)

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [SEEHDSObservationBase](StructureDefinition-SEEHDSObservationBase.md) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [SEEHDSObservationBase](StructureDefinition-SEEHDSObservationBase.md) 

#### Terminologibindningar (differential)

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [SEEHDSObservationBase](StructureDefinition-SEEHDSObservationBase.md) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSObservationGrowth.csv), [Excel](../StructureDefinition-SEEHDSObservationGrowth.xlsx), [Schematron](../StructureDefinition-SEEHDSObservationGrowth.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSObservationGrowth",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSObservationGrowth",
  "version" : "0.9.0",
  "name" : "SEEHDSObservationGrowth",
  "title" : "SE EHDS Observation – Tillväxtkurva (GetObservations + IoÖ v3)",
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
  "description" : "Profil för tillväxtobservationer (längd, vikt, huvudomfång, beräknad\ngraviditetslängd) för barn och ungdom, baserad på:\n- GetObservations (clinicalprocess:healthcond:basic v2.0)\n- Interaktionsöverenskommelse Tillväxtkurva för barn och ungdom v3 (Inera, 2023-05-15)\n\nÄrver SEEHDSObservationBase och lägger till:\n- code bunden till GrowthObservationTypeVS (IoÖ-specificerade SNOMED CT-koder)\n- value[x] begränsad till Quantity (pq-grenen; IoÖ anger alltid PQ-värden)\n- Enhet (UCUM) per mättyp: cm (längd/hC), kg (vikt), d (gestationslängd)\n\nKodsystem för observationBody.type: SNOMED CT SE, OID 1.2.752.116.2.1.1.\n\nTäcker NPÖ 1.2 och 1177 Journal 1.2.",
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
  "baseDefinition" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSObservationBase",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation"
    },
    {
      "id" : "Observation.code",
      "path" : "Observation.code",
      "short" : "IoÖ-kod (observationBody.type):\nSNOMED CT SE OID 1.2.752.116.2.1.1, kräver en av:\n1153637007 (kroppslängd), 50373000 (mått på kroppslängd),\n248334005 (längd i liggande – ej för nyanslutning),\n27113001 (kroppsvikt), 363812007 (huvudomfång),\n412726003 (graviditetslängd vid födelse).",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.inera.se/ig/ehds-tk/ValueSet/growth-observation-type-vs"
      }
    },
    {
      "id" : "Observation.code.coding",
      "path" : "Observation.code.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "system"
        }],
        "description" : "SNOMED CT-kod (obligatorisk per IoÖ)",
        "rules" : "open"
      },
      "min" : 1
    },
    {
      "id" : "Observation.code.coding:snomedSE",
      "path" : "Observation.code.coding",
      "sliceName" : "snomedSE",
      "short" : "SNOMED CT SE-kod (IoÖ-obligatorisk):\n1153637007 | kroppslängd |\n50373000   | mått på kroppslängd |\n248334005  | längd i liggande (bakåtkompatibel) |\n27113001   | kroppsvikt |\n363812007  | huvudomfång |\n412726003  | graviditetslängd vid födelse |",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Observation.code.coding:snomedSE.system",
      "path" : "Observation.code.coding.system",
      "min" : 1,
      "patternUri" : "http://snomed.info/sct"
    },
    {
      "id" : "Observation.value[x]",
      "path" : "Observation.value[x]",
      "short" : "Mätvärde (observationBody.value.pq); IoÖ anger alltid pq-grenen för tillväxtmätningar",
      "min" : 1,
      "type" : [{
        "code" : "Quantity"
      }]
    },
    {
      "id" : "Observation.value[x].value",
      "path" : "Observation.value[x].value",
      "short" : "Mätetalet (observationBody.value.pq.value):\nLängd: decimal cm, 0-1 decimal (t.ex. 49.5)\nVikt:  decimal kg, 0-3 decimaler (t.ex. 5.830)\nHuvud: decimal cm, 1 decimal (t.ex. 38.5)\nGest:  heltal dagar (t.ex. 280)",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x].unit",
      "path" : "Observation.value[x].unit",
      "short" : "Enhet: 'cm' (längd/hC), 'kg' (vikt), 'd' (gestationslängd)",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x].system",
      "path" : "Observation.value[x].system",
      "short" : "Alltid UCUM (http://unitsofmeasure.org)",
      "min" : 1,
      "patternUri" : "http://unitsofmeasure.org",
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x].code",
      "path" : "Observation.value[x].code",
      "short" : "UCUM-kod: cm | kg | d",
      "min" : 1,
      "mustSupport" : true
    }]
  }
}

```
