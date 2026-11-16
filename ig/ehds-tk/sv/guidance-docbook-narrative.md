# DocBook-mappning – clinicalDocumentNoteText och bilagor - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## DocBook-mappning – clinicalDocumentNoteText och bilagor

**Gäller:** GetCareDocumentation v3.0 (`careDocumentation.body.clinicalDocumentNoteText` och `careDocumentation.body.multimediaEntry`)
 **FHIR-resurser:** [SEEHDSDocumentReference](StructureDefinition-SEEHDSDocumentReference.md) (obligatorisk), [SEEHDSCompositionCareDocumentation](StructureDefinition-SEEHDSCompositionCareDocumentation.md) (valfri)
 **Designbeslut:** DOC-004 i [Mappningsissues och Designbeslut](mapping-issues.md#designbeslut-fattade)
 **Mappningssida:** [GetCareDocumentation – Anteckningar](mapping-getcaredocumentation.md)

-------

### Bakgrund

`clinicalDocumentNoteText` är av typen string. Fältet innehåller antingen fritext eller ett DocBook-dokument. När DocBook används ska fältet innehålla XML. Eftersom XML:en ligger inuti ett XML-element måste XML-tecknen entity-kodas:

```
<clinicalDocumentNoteText>
  &lt;?xml version="1.0" encoding="utf-8"?&gt;
  &lt;article&gt;
    &lt;section&gt;
      &lt;title&gt;Bedömning&lt;/title&gt;
      &lt;para&gt;Patienten mår bra.&lt;/para&gt;
    &lt;/section&gt;
  &lt;/article&gt;
</clinicalDocumentNoteText>

```

DocBook är ett källsystemsformat som FHIR-konsumenter inte kan förväntas rendera. DocBook förs därför **inte** över som DocBook till FHIR-resursen. Innehållet transformeras i stället till format som FHIR-konsumenter kan använda direkt:

| | | |
| :--- | :--- | :--- |
| **A – XHTML** | `DocumentReference.content[0].attachment`med XHTML och`contentType: text/html; charset=utf-8` | Obligatorisk |
| **B – Composition** | En fristående`Composition`enligt[SEEHDSCompositionCareDocumentation](StructureDefinition-SEEHDSCompositionCareDocumentation.md)med en`section`per DocBook-`<section>` | Valfri – men om den skapas ska den följa profilen |

DocBook kan förekomma på två ställen, som identifieras på olika sätt (se [Steg 2](#steg-2--identifiering-av-docbook)):

| | |
| :--- | :--- |
| `clinicalDocumentNoteText` | Som entity-kodad XML i textfältet (se exemplet ovan) |
| `multimediaEntry`(bilaga) | Som base64-kodad fil i`multimediaEntry.value`, med`multimediaEntry.mediaType`som anger formatet |

-------

### Översikt över flödet

```
RIVTA-svar (XML)
  ├── clinicalDocumentNoteText (entity-kodad sträng)
  │     │  1. XML-parsning av RIVTA-svaret avkodar entiteterna
  │     │  2. DocBook om värdet börjar med <?xml / <article och har roten article
  └── multimediaEntry.value (base64) + mediaType
        │  1. base64-avkodning
        │  2. DocBook om mediaType = application/docbook+xml (eller XML med roten article)
        ▼
        ├── inte DocBook ──► content.attachment oförändrat
        │                    (text: text/plain; charset=utf-8 – bilaga: ursprunglig mediaType)
        └── DocBook
              ├── 3A. DocBook → XHTML ──► content.attachment (text/html; charset=utf-8)
              └── 3B. (valfri) DocBook → Composition.section[] ──► Composition
                                                                      ▲
                    Provenance.target ─► DocumentReference + Composition

```

-------

### Steg 1 – Avkodning

**clinicalDocumentNoteText:** Entity-kodningen tas bort av den vanliga XML-parsningen av RIVTA-svaret. Strängvärdet som parsern ger är alltså DocBook-XML i klartext:

```
<?xml version="1.0" encoding="utf-8"?>
<article>
  <section>
    <title>Bedömning</title>
    <para>Patienten mår bra.</para>
  </section>
</article>

```

Ingen ytterligare avkodning ska göras. Att avkoda en gång till skulle förstöra innehåll där källtexten själv innehåller `&amp;`, `&lt;` osv.

**multimediaEntry (bilaga):** `multimediaEntry.value` är base64-kodad. Bilagans innehåll fås genom base64-avkodning, och teckenkodningen anges av XML-deklarationen i filen (UTF-8 om den saknas).

-------

### Steg 2 – Identifiering av DocBook

Regeln skiljer sig beroende på var innehållet ligger.

#### I clinicalDocumentNoteText

Textfältet saknar en egen typindikator. DocBook känns igen på att fältet innehåller **entity-kodad XML**, som i exemplet under [Bakgrund](#bakgrund):

1. I det råa RIVTA-svaret börjar elementets innehåll (efter inledande blanktecken) med`&lt;?xml`eller`&lt;article`. Efter XML-parsning (steg 1) motsvarar det att strängvärdet börjar med`<?xml`eller`<article`.
1. Det avkodade värdet är välformad XML med rotelementet`article`.

Är båda villkoren uppfyllda behandlas innehållet som **DocBook**. Annars behandlas det som **fritext**, även om texten råkar innehålla enstaka tecken som `<` eller `&`.

#### I en bilaga (multimediaEntry)

En bilaga har en uttrycklig typindikator. DocBook känns igen på `multimediaEntry.mediaType`:

| | |
| :--- | :--- |
| `application/docbook+xml` | **DocBook**– transformeras enligt Strategi A (och valfritt B) |
| `application/xml`eller`text/xml`med rotelementet`article`efter avkodning | **DocBook**– transformeras på samma sätt |
| Övriga (t.ex.`application/pdf`,`image/jpeg`) | Ingen transformation –`value`och`mediaType`förs över oförändrade till`content.attachment` |

En bilaga som innehåller `multimediaEntry.reference` (URL) i stället för `value` transformeras inte, eftersom innehållet inte finns i svaret.

#### Om tolkningen misslyckas

Om innehållet ser ut som DocBook men inte kan tolkas, eller om transformationen misslyckas:

* `clinicalDocumentNoteText` mappas som fritext (`text/plain; charset=utf-8`) med strängvärdet oförändrat.
* En bilaga förs över oförändrad med sin ursprungliga `mediaType`.

Inget innehåll tappas.

-------

### Steg 3A – Strategi A: DocBook → XHTML (obligatorisk)

DocBook-dokumentet transformeras till ett XHTML-fragment med en rot-`<div>` i XHTML-namnrymden. Transformationen behåller källans ordning och struktur. Resultatet base64-kodas och läggs i `DocumentReference.content[0].attachment.data` med `contentType: text/html; charset=utf-8`.

#### Elementmappning

| | | |
| :--- | :--- | :--- |
| `<article>` | `<div xmlns="http://www.w3.org/1999/xhtml">` | Rot |
| `<article><title>` | `<h1>` | Dokumentrubrik, om den finns |
| `<section>` | `<div>` | Nästlade sektioner nästlas |
| `<title>`i`<section>` | `<h2>`–`<h6>` | Nivå efter nästlingsdjup (sektion på nivå 1 →`<h2>`); djupare än`<h6>`blir`<h6>` |
| `<para>`,`<simpara>` | `<p>` |   |
| `<emphasis>` | `<em>` |   |
| `<emphasis role="bold">`/`role="strong"` | `<strong>` |   |
| `<itemizedlist>` | `<ul>` |   |
| `<orderedlist>` | `<ol>` |   |
| `<listitem>` | `<li>` |   |
| `<variablelist>`/`<varlistentry>`/`<term>`/`<listitem>` | `<dl>`/ – /`<dt>`/`<dd>` |   |
| `<ulink url="…">`,`<link xlink:href="…">` | `<a href="…">` | Endast`http`/`https`-länkar behålls som länkar; övriga blir text |
| `<informaltable>`,`<table>` | `<table>` | `<title>`i`<table>`→`<caption>` |
| `<thead>`/`<tbody>`/`<row>` | `<thead>`/`<tbody>`/`<tr>` | `<tgroup>`tas bort, innehållet behålls |
| `<entry>` | `<th>`i`<thead>`, annars`<td>` |   |
| `<literallayout>`,`<programlisting>`,`<screen>` | `<pre>` | Radbrytningar bevaras |
| `<sbr/>` | `<br/>` |   |
| Okända element | – | Elementet tas bort men textinnehållet behålls |

#### Stylade sektioner (rutor)

En sektion vars `<title>` innehåller `<emphasis role="…">` med något av rollvärdena `information`, `observe`, `frame` eller `collapsible` är en informationsruta, inte en strukturell rubrik. Den renderas som en inbäddad ruta i föräldern:

| | |
| :--- | :--- |
| `<section><title><emphasis role="information">Rubrik</emphasis></title>…</section>` | `<div class="information"><p><strong>Rubrik</strong></p>…</div>` |

Motsvarande gäller rollerna `observe`, `frame` och `collapsible` (klassnamnet är rollvärdet).

#### Säkerhet

XHTML:en ska följa FHIR:s regler för narrativ XHTML: inga `<script>`-, `<style>`-, `<form>`- eller `<iframe>`-element, inga händelseattribut (`on*`) och inga `javascript:`-länkar. Allt innehåll som inte täcks av elementmappningen ovan blir text.

#### Placering

XHTML:en läggs i `content.attachment` och **inte** i resursens `DomainResource.text`. `text` ska sammanfatta resursen, inte bära dokumentets faktiska innehåll.

-------

### Steg 3B – Strategi B: Composition.section (valfri)

Utöver Strategi A kan en fristående `Composition` skapas när innehållet är DocBook. Den gör dokumentets sektioner adresserbara var för sig, till exempel för navigering eller för att visa enskilda avsnitt.

Strategi B är valfri, men en `Composition` som skapas ska följa profilen [SEEHDSCompositionCareDocumentation](StructureDefinition-SEEHDSCompositionCareDocumentation.md). Då kan konsumenter lita på strukturen oavsett vilket API som skapat den.

#### Sektionsmappning

| | |
| :--- | :--- |
| `<section><title>…</title>…</section>` | En`section`med`title`från`<title>`-texten |
| Nästlad`<section>`inom en`<section>` | Nästlad`section.section`(rekursivt) |
| Stylad sektion (`<emphasis role="information/observe/frame/collapsible">`i titeln) | Bryts**inte**ut – stannar som inbäddad ruta i förälderns`section.text` |
| Löst innehåll direkt under`<article>`(utanför alla`<section>`) | En avslutande namnlös`section`sist i listan |
| Inget`<section>`-element alls | En enda namnlös`section`med hela innehållet |

Varje `section.text` är en `Narrative` med `status = generated` och samma slags XHTML-`<div>` som Strategi A ger, men begränsad till sektionens eget innehåll. Nästlade sektioner ligger i `section.section` och upprepas inte i förälderns `text`.

#### Övriga fält i Composition

| | |
| :--- | :--- |
| `status` | Alltid`final` |
| `type` | Kopieras från`DocumentReference.type` |
| `subject` | Kopieras från`DocumentReference.subject` |
| `date` | Kopieras från`DocumentReference.date` |
| `author` | Kopieras från`DocumentReference.author`. Om`author`saknas i källan används vårdenheten (`accessControlHeader.accountableCareUnit`) som logisk referens till`Organization`, eftersom`Composition.author`är obligatorisk |
| `title` | `clinicalDocumentNoteTitle`; fallback`"Journalanteckning"` |

#### Koppling till DocumentReference

`Composition` saknar ett eget element som pekar på `DocumentReference`. Kopplingen görs genom att samma `Provenance` har både `DocumentReference` och `Composition` i `Provenance.target`. Den `Provenance` bär redan Sparr-agenterna (`agent[custodian]`, `agent[author]`), så samma spärrkontroll gäller för båda resurserna. En konsument som hämtar `Provenance` för en `DocumentReference` hittar den tillhörande `Composition` bland dess targets.

-------

### Exempel

#### Källa (efter avkodning)

```
<?xml version="1.0" encoding="utf-8"?>
<article>
  <section>
    <title>Bedömning</title>
    <para>Patienten mår bra.</para>
    <section>
      <title>Status</title>
      <itemizedlist>
        <listitem><para>Afebril</para></listitem>
        <listitem><para>Opåverkad</para></listitem>
      </itemizedlist>
    </section>
  </section>
  <section>
    <title><emphasis role="observe">Observera</emphasis></title>
    <para>Ny kontroll om två veckor.</para>
  </section>
</article>

```

#### Strategi A – content.attachment

```
"content": [{
  "attachment": {
    "contentType": "text/html; charset=utf-8",
    "title": "Besöksanteckning",
    "data": "<base64 av XHTML nedan>"
  }
}]

```

```
<div xmlns="http://www.w3.org/1999/xhtml">
  <div>
    <h2>Bedömning</h2>
    <p>Patienten mår bra.</p>
    <div>
      <h3>Status</h3>
      <ul>
        <li><p>Afebril</p></li>
        <li><p>Opåverkad</p></li>
      </ul>
    </div>
  </div>
  <div class="observe">
    <p><strong>Observera</strong></p>
    <p>Ny kontroll om två veckor.</p>
  </div>
</div>

```

#### Strategi B – Composition

```
{
  "resourceType": "Composition",
  "status": "final",
  "type": { "coding": [{ "system": "urn:oid:1.2.752.129.2.2.2.11", "code": "bes" }] },
  "subject": { "reference": "Patient/pat-191212121212", "identifier": { "system": "http://electronichealth.se/identifier/personnummer", "value": "191212121212" } },
  "date": "2023-06-01T12:00:00+02:00",
  "author": [{ "identifier": { "system": "urn:oid:1.2.752.29.4.19", "value": "SE2321000016-1234" } }],
  "title": "Besöksanteckning",
  "section": [
    {
      "title": "Bedömning",
      "text": { "status": "generated", "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>Patienten mår bra.</p></div>" },
      "section": [{
        "title": "Status",
        "text": { "status": "generated", "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li><p>Afebril</p></li><li><p>Opåverkad</p></li></ul></div>" }
      }]
    },
    {
      "text": { "status": "generated", "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"observe\"><p><strong>Observera</strong></p><p>Ny kontroll om två veckor.</p></div></div>" }
    }
  ]
}

```

Den stylade sektionen "Observera" bryts inte ut som egen rubrik. Den ligger direkt under `<article>` och hamnar därför i den avslutande namnlösa sektionen.

-------

### Kända begränsningar

* **Identifieringen i clinicalDocumentNoteText bygger på innehållet.** Textfältet saknar typindikator, så DocBook känns igen på den entity-kodade XML:en. Se [Steg 2](#steg-2--identifiering-av-docbook).
* **Dokumentordning i Strategi B.** Löst innehåll direkt under `<article>` vid sidan av strukturella `<section>`-element samlas i en avslutande sektion i stället för att behålla sin ursprungliga position. Det är en medveten förenkling för att inget innehåll ska tappas. Strategi A bevarar alltid exakt källordning och är den representation som ska användas när exakt visuell återgivning krävs.
* **Ingen direkt länk Composition → DocumentReference.** Kopplingen går via `Provenance.target`.

