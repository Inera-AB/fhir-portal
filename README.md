# fhir-portal

Hub-repo för Ineras FHIR Implementation Guides, publicerade på **[fhir.inera.se](https://fhir.inera.se)**.

## Arkitektur

```
inera-ab/fhir-portal   (gh-pages branch)
  index.html             ← Ineras huvudlandningssida (hanteras manuellt)
  ig/
    index.html           ← IG-katalog, auto-genererad från registry.json
    registry.json        ← maskinläsbar källa, uppdateras av CI-dispatch
    IneraFHIRTemplate/
      history.html
      1.0.0/             ← IG-output publicerad av IG-repots CI
    inera-laboratory/
      history.html
      1.0.0/
```

Varje IG-repo bygger sin guide och pushar output till `gh-pages/ig/{ig-namn}/{version}/`.
`registry.json` uppdateras via `repository_dispatch`, och `ig/index.html` regenereras automatiskt.

## Hur ett IG-repo publicerar hit

### 1. Skapa en PAT med rätt behörigheter

Skapa en [Fine-grained PAT](https://github.com/settings/personal-access-tokens/new) för kontot/organisationen med:
- **Repository access:** `inera-ab/fhir-portal`
- **Permissions → Contents:** Read and write

Spara PAT:en som en Actions-hemlighet i IG-repot, t.ex. `FHIR_PORTAL_TOKEN`.

### 2. Lägg till dessa steg i IG-repots workflow

```yaml
- name: Publicera IG till fhir-portal
  uses: peaceiris/actions-gh-pages@v4
  with:
    personal_token: ${{ secrets.FHIR_PORTAL_TOKEN }}
    external_repository: inera-ab/fhir-portal
    publish_branch: gh-pages
    publish_dir: ./output
    destination_dir: ig/${{ github.event.repository.name }}/${{ env.IG_VERSION }}
    keep_files: true               # viktigt – radera inte andra IG:ar

- name: Uppdatera IG-registret på fhir-portal
  env:
    GH_TOKEN: ${{ secrets.FHIR_PORTAL_TOKEN }}
  run: |
    gh api repos/inera-ab/fhir-portal/dispatches \
      --method POST \
      -f event_type=ig-deployed \
      -f "client_payload[ig_name]=${{ github.event.repository.name }}" \
      -f "client_payload[ig_title]=${{ env.IG_TITLE }}" \
      -f "client_payload[ig_description]=${{ env.IG_DESCRIPTION }}" \
      -f "client_payload[ig_version]=${{ env.IG_VERSION }}" \
      -f "client_payload[is_release]=${{ github.event_name == 'release' }}"
```

### Miljövariabler att sätta i IG-repots workflow

Läs dem från `ImplementationGuide-{package-id}.json` i output-katalogen:

```yaml
- name: Läs IG-metadata
  run: |
    MANIFEST=output/package.manifest.json
    PKG_ID=$(jq -r '.name' "$MANIFEST")
    echo "IG_VERSION=$(jq -r '.version' "$MANIFEST")" >> $GITHUB_ENV
    IG_FILE="output/ImplementationGuide-${PKG_ID}.json"
    echo "IG_TITLE=$(jq -r '.title' "$IG_FILE")"       >> $GITHUB_ENV
    echo "IG_DESCRIPTION=$(jq -r '.description' "$IG_FILE")" >> $GITHUB_ENV
```

### Parametrar för `repository_dispatch`

| Fält | Beskrivning |
|---|---|
| `ig_name` | Mappnamn under `/ig/` — ska matcha repo-namnet |
| `ig_title` | Visningsnamn i IG-katalogen |
| `ig_description` | Kort beskrivning |
| `ig_version` | Versionsnummer, t.ex. `1.0.0` |
| `is_release` | `true` för release-taggar, `false` för branch-byggen |

`is_release: true` gör att `latest_version` i `registry.json` uppdateras och att ett versionsnummer visas i IG-katalogen. Branch-byggen skriver inte över `latest_version`.

## GitHub Pages-inställningar

Settings → Pages → Source: **Branch `gh-pages` / `(root)`**

Custom domain: `fhir.inera.se`

> **DNS:** Lägg till en CNAME-post i Ineras DNS som pekar `fhir.inera.se` → `inera-ab.github.io`.
