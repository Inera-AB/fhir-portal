# fhir-portal

Hub-repo för Ineras FHIR Implementation Guides, publicerade på **[fhir.inera.se](https://fhir.inera.se)**.

## Arkitektur

```
inera-ab/fhir-portal   (gh-pages branch)
  /ig/EHDS-TK/           ← publicerad av EHDS-TK-repots CI
  /ig/inera-laboratory/  ← publicerad av laboratory-repots CI
  /ig/inera-medication/  ← osv.
  index.html             ← landningssida, uppdateras automatiskt
```

Varje IG-repo bygger sin guide och pushar resultatet till detta repos `gh-pages`-branch. Indexsidan uppdateras automatiskt via `repository_dispatch`.

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
    publish_dir: ./output          # katalogen där IG:n byggs
    destination_dir: ig/mitt-ig-namn
    keep_files: true               # viktigt – radera inte andra IG:ar

- name: Uppdatera index på fhir-portal
  env:
    GH_TOKEN: ${{ secrets.FHIR_PORTAL_TOKEN }}
  run: |
    gh api repos/inera-ab/fhir-portal/dispatches \
      --method POST \
      -f event_type=ig-deployed \
      -f client_payload[ig_name]=mitt-ig-namn \
      -f client_payload[ig_title]="Min IG-titel" \
      -f client_payload[ig_description]="Kort beskrivning av guiden." \
      -f client_payload[ig_version]="${{ env.IG_VERSION }}"
```

### Parametrar för `repository_dispatch`

| Fält | Beskrivning |
|---|---|
| `ig_name` | Mappnamn under `/ig/` (t.ex. `inera-laboratory`) |
| `ig_title` | Visningsnamn på landningssidan |
| `ig_description` | Kort beskrivning (visas som brödtext i kortet) |
| `ig_version` | Versionsnummer, t.ex. `1.0.0` (visas som badge) |

## GitHub Pages-inställningar

Settings → Pages → Source: **Branch `gh-pages` / `(root)`**

Custom domain: `fhir.inera.se`

> **DNS:** Lägg till en CNAME-post i Ineras DNS som pekar `fhir.inera.se` → `inera-ab.github.io`.
