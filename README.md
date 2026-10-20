# fhir-portal

Hub-repo för Ineras FHIR Implementation Guides, publicerade på **[fhir.inera.se](https://fhir.inera.se)**.

Branchen `gh-pages` är webbplatsen. Mappen `ig/` i den är den gemensamma **webbroten** som IG Publisher publicerar alla Inera-IG:er till med sitt officiella publiceringsläge (`-go-publish`).

## Arkitektur

```
inera-ab/fhir-portal   (gh-pages)
  index.html                 ← Ineras landningssida (hanteras manuellt)
  ig/                        ← webbroten för -go-publish
    publish-setup.json       ← webbplatsens inställningar och layoutregler (hanteras manuellt)
    package-feed.xml         ← paketflöde för alla Inera-IG:er (uppdateras av publishern)
    publication-feed.xml     ← publiceringsflöde för alla Inera-IG:er (uppdateras av publishern)
    package-registry.json    ← sammanställning av alla IG:er och deras senaste versioner (uppdateras av publishern)
    templates/               ← Inera-sidhuvud och sidfot för historiksidorna (hanteras manuellt)
    index.html               ← IG-katalogen, genereras från registry.json
    registry.json            ← katalogens källa, uppdateras via repository_dispatch
    <code>/                  ← en mapp per IG
      package-list.json      ← IG:ns versionshistorik (uppdateras av publishern)
      history.html           ← versionshistoriken (genereras av publishern)
      index.html …           ← kopia av senaste milestone-releasen
      1.0.0/
      1.1.0/
```

`<code>` är tredje delen av IG:ns paket-id, enligt layoutregeln i `publish-setup.json`:

```json
"layout-rules" : [{
  "npm" : "inera.*.*",
  "canonical" : "https://fhir.inera.se/ig/{3}",
  "destination" : "/{3}"
}]
```

Paket-id:t `inera.core.template` publiceras alltså till `https://fhir.inera.se/ig/template`. `<code>` måste vara unikt bland alla Inera-IG:er. Ett paket-id som inte har exakt tre delar matchar inte regeln, och då misslyckas publiceringen.

### Statisk hosting

Webbplatsen ligger på GitHub Pages, som inte kan köra kod på servern. `publish-setup.json` har därför `"server": "cloud"`: publishern skapar vanliga HTML-sidor som skickar vidare från en resurs canonical-adress (till exempel `…/StructureDefinition/X`) till resursens sida, med länkar till JSON och XML. Content negotiation (`Accept: application/fhir+json`) fungerar inte. Maskiner hämtar filerna direkt eller använder paketet.

`"github": true` gör att publishern håller filer över 100 MB utanför webbroten, eftersom GitHub inte tar emot dem.

GitHub Pages tillåter högst 1 GB publicerad webbplats. Varje release tar ungefär dubbla IG-storleken, eftersom den senaste versionen även kopieras till IG:ns rot. Håll koll på storleken. Om webbplatsen flyttas till ett annat webbhotell behöver ingen canonical ändras, eftersom de bara beror på domänen.

## Hur ett IG-repo publicerar hit

IG-repon skapade från [IneraFHIRTemplate](https://github.com/Inera-AB/IneraFHIRTemplate) har workflowen `release.yml` som gör allt automatiskt när en releasetagg (till exempel `1.2.0`) pushas:

1. Bygger IG:n.
2. Checkar ut `gh-pages` i det här repot (bara den egna IG-mappen och de gemensamma filerna i `ig/`).
3. Kör `-go-publish`. Publishern bygger IG:n på nytt för publicering, lägger versionen i `ig/<code>/<version>/`, uppdaterar IG:ns rot, `package-list.json`, `history.html`, flödena och `package-registry.json`, och skriver om bannern i tidigare versioner.
4. Pushar till `gh-pages` och skickar `repository_dispatch` så att IG-katalogen uppdateras.

Se mallens README för hur ett IG-repo sätts upp.

### Behörighet

IG-repot behöver hemligheten `FHIR_PORTAL_TOKEN`: en fine-grained PAT med **Contents: Read and write** på `inera-ab/fhir-portal` (och på `inera-ab/fhir-portal-test` för testpubliceringar).

### Testpubliceringar

[inera-ab/fhir-portal-test](https://github.com/Inera-AB/fhir-portal-test) är en kopia av det här upplägget. Manuella körningar av `release.yml` och körningar från andra brancher än taggar publicerar dit, aldrig hit. Testroten kan nollställas fritt.

### Regler för den här webbroten

- **Publicera aldrig samma version två gånger.** Paketcachar och packages.fhir.org kan redan ha hämtat den, och flödena får dubbletter. Gör en ny patchversion, eller använd `"mode": "technical-correction"`.
- Ändra inte `package-list.json`, `history.html`, flödena eller `package-registry.json` för hand. Undantaget är när en befintlig IG flyttas över till publiceringsläget (se mallens instruktion för övergången).
- Mallarna i `ig/templates/` är gemensamma för alla IG:er. Historiksidans skript kräver att de innehåller elementen `id="ig-title"` och `id="ig-footer"`.

## IG-katalogen

`ig/index.html` genereras av workflowen `update-ig-index.yml` från `ig/registry.json`, som uppdateras via `repository_dispatch`:

| Fält | Beskrivning |
|---|---|
| `ig_name` | IG-repots namn |
| `ig_slug` | IG:ns mapp under `/ig/` (`<code>`) |
| `ig_title` | Visningsnamn i IG-katalogen |
| `ig_description` | Kort beskrivning |
| `ig_version` | Versionsnummer, t.ex. `1.0.0` |
| `is_release` | `true` för releaser, `false` för branch-byggen |

`is_release: true` uppdaterar `latest_version` i `registry.json`. Branch-byggen skriver inte över `latest_version`.

## FHIR:s IG-register och packages.fhir.org

- **Paketflödet** `https://fhir.inera.se/ig/package-feed.xml` registreras en gång i `package-feeds.json` i [FHIR/ig-registry](https://github.com/FHIR/ig-registry). Därefter hämtar packages.fhir.org alla Inera-paket automatiskt.
- **Varje IG** läggs till i `fhir-ig-list.json` i FHIR/ig-registry, och varje ny release läggs till som en utgåva. Publishern gör ändringen i sin kopia av registret, och `release.yml` sparar den som artefakt (`fhir-ig-list.diff`). Den skickas som PR till FHIR/ig-registry.

## GitHub Pages-inställningar

Settings → Pages → Source: **Branch `gh-pages` / `(root)`**

Custom domain: `fhir.inera.se`

> **DNS:** Lägg till en CNAME-post i Ineras DNS som pekar `fhir.inera.se` → `inera-ab.github.io`.
