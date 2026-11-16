# RIV-TA xs:base64Binary - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## Logisk modell: RIV-TA xs:base64Binary 

**Användningar:**

* Använd denna Logisk modell: [GetCareDocumentation](StructureDefinition-SEEHDSLMCareDocumentation.md), [GetCareDocumentation 2.1](StructureDefinition-SEEHDSLMCareDocumentationV21.md), [GetCarePlans](StructureDefinition-SEEHDSLMCarePlans.md), [GetImagingOutcome](StructureDefinition-SEEHDSLMImagingOutcome.md)... Show 2 more, [GetReferralOutcome](StructureDefinition-SEEHDSLMReferralOutcome.md) and [GetReferralOutcome 3.1](StructureDefinition-SEEHDSLMReferralOutcomeV31.md)

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/resource/inera.ehds.ehds-tk|current/StructureDefinition/StructureDefinition-SEEHDSRivBase64Binary.json)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **Differentialvy** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 **ÖgonblicksbildsvyView** 

Denna struktur är härledd från [Base](http://build.fhir.org/types.html#Base) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-SEEHDSRivBase64Binary.csv), [Excel](../StructureDefinition-SEEHDSRivBase64Binary.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SEEHDSRivBase64Binary",
  "url" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBase64Binary",
  "version" : "0.9.0",
  "name" : "SEEHDSRivBase64Binary",
  "title" : "RIV-TA xs:base64Binary",
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
  "description" : "Base64-kodat innehåll. Elementets värde ligger som textinnehåll i XML-elementet (representation xmlText).",
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
  "type" : "https://fhir.inera.se/ig/ehds-tk/StructureDefinition/SEEHDSRivBase64Binary",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "SEEHDSRivBase64Binary",
      "path" : "SEEHDSRivBase64Binary",
      "short" : "RIV-TA xs:base64Binary",
      "definition" : "Base64-kodat innehåll. Elementets värde ligger som textinnehåll i XML-elementet (representation xmlText)."
    },
    {
      "id" : "SEEHDSRivBase64Binary.value",
      "path" : "SEEHDSRivBase64Binary.value",
      "representation" : ["xmlText"],
      "short" : "Elementets textinnehåll",
      "definition" : "Elementets textinnehåll",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "base64Binary"
      }]
    }]
  }
}

```
