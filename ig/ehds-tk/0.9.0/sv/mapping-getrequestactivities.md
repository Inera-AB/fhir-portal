# GetRequestActivities – Remisstatus - Inera EHDS Tjänstekontrakt – FHIR Implementation Guide v0.9.0

## GetRequestActivities – Remisstatus

**Tjänstekontrakt:** `crm:requeststatus` GetRequestActivities v2.0 och v1.0
 **FHIR-profil:** [SEEHDSTask](StructureDefinition-SEEHDSTask.md)
 **Logiska modeller:** [SEEHDSLMRequestActivities](StructureDefinition-SEEHDSLMRequestActivities.md) (v2.0) | [SEEHDSLMRequestActivitiesV10](StructureDefinition-SEEHDSLMRequestActivitiesV10.md) (v1.0, se [Övriga aktiva versioner](#version-1-0))
 **Krävs för NPÖ:** Ja (v2.0) | **Krävs för 1177 Journal:** Ja (v1.0, 2.0)
 **EHDS-koppling:** Stödjande processinformation (ej separat EHDS-huvudkategori)

-------

### Meddelandestruktur

Svaret `GetRequestActivitiesResponse` innehåller noll eller flera `requestActivity`, var och en med `header` (åtkomstkontroll, källsystem, post och dokumentationsansvarig) och `body` (status, händelsetidpunkt och den remiss som statusen gäller). Svaret har ingen patientidentitet och inget `result`-element. Patienten är den som efterfrågades i begäran (`patientId`). Strukturen följer den logiska modellen [SEEHDSLMRequestActivities](StructureDefinition-SEEHDSLMRequestActivities.md), som är genererad från XSD:n och verifierad mot TKB:n.

-------

### Mappningstabell – header

| | | | |
| :--- | :--- | :--- | :--- |
| (begärans`patientId`) | 1..1 | `Task.for` | Svaret saknar patientidentitet;`Task.for`sätts till SEEHDSPatient för den efterfrågade patienten (GENERAL-006) |
| `requestActivity.header.accessControlHeader.accountableHealthcareProvider` | 1..1 | `Provenance.agent[custodian].who.identifier` | Yttre Sparr – uppgiftsägande vårdgivare. IIType:`extension`= HSA-id |
| `requestActivity.header.accessControlHeader.accountableCareUnit` | 0..1 | `Provenance.agent[author].who.identifier` | Inre Sparr – vårdenhet. IIType:`extension`= HSA-id |
| `requestActivity.header.accessControlHeader.originalPatientId` | 0..1 | Ej mappad | Personidentitet vid lagringstillfället, om den skiljer sig från den efterfrågade |
| `requestActivity.header.accessControlHeader.careProcessId` | 0..1 | Ej mappad | Id för individanpassad vårdprocess |
| `requestActivity.header.accessControlHeader.lockTime` | 0..0 | N/A | Ska inte användas enligt TKB |
| `requestActivity.header.accessControlHeader.blockComparisonTime` | 1..1 | Ej mappad | Används för spärrkontroll i bryggan |
| `requestActivity.header.accessControlHeader.approvedForPatient` | 1..1 | `Task.meta.security` | PDL-kontroll – se PDL-001 |
| `requestActivity.header.sourceSystemId` | 1..1 | `Task.meta.source` | IIType;`extension`= källsystemets HSA-id →`https://tjanstekatalogen.inera.se/Endpoint/{hsaId}`(GENERAL-005) |
| `requestActivity.header.record.id` | 1..1 | `Task.identifier[0]` | Remisstatusens id.`root`→`system`(OID→URI),`extension`→`value` |
| `requestActivity.header.record.timestamp` | 1..1 | `Task.authoredOn` | När remisstatusen skapades i källsystemet; ÅÅÅÅMMDDttmmss → ISO 8601 (GENERAL-001) |
| `requestActivity.header.author.id` | 0..1 | Ej mappad | HSA-id för den som dokumenterat statusen |
| `requestActivity.header.author.name` | 0..1 | Ej mappad | Namn på den som dokumenterat statusen |
| `requestActivity.header.author.timestamp` | 1..1 (om author) | `Provenance.recorded` | Används om`author`finns, annars`record.timestamp` |
| `requestActivity.header.author.byRole` | 0..1 | Ej mappad | Befattning (CVType) |

-------

### Mappningstabell – body

| | | | |
| :--- | :--- | :--- | :--- |
| `requestActivity.body.statusCode` | 1..1 | `Task.businessStatus`och`Task.status` | Kv status vårdbegäran (OID 1.2.752.129.2.2.2.43). Koden bevaras i`businessStatus`;`status`härleds enligt tabellen nedan |
| `requestActivity.body.eventTime` | 1..1 | `Task.lastModified` | Tidpunkt för statusändringen; ÅÅÅÅMMDDttmmss → ISO 8601 |
| `requestActivity.body.request.id` | 1..1 | `Task.focus.identifier.value` | Remiss-id; logisk referens till SEEHDSServiceRequestReferral |
| `requestActivity.body.request.type` | 0..1 | Ej mappad | Remisstyp (Kv framställantyp, OID 1.2.752.129.2.2.2.24) – attribut till remissen, som bara refereras logiskt |
| `requestActivity.body.request.medium` | 0..1 | Ej mappad | Form av framställan (OID 1.2.752.129.2.2.2.7) – attribut till remissen |
| `requestActivity.body.request.author.name` | 1..1 (om author) | `Task.requester.display` | Remittentens namn |
| `requestActivity.body.request.author.organization.id` | 0..1 | `Task.requester.identifier` | Remitterande enhets HSA-id (IIType`extension`) |
| `requestActivity.body.request.author.organization.name` | 1..1 | `Task.requester.display` | Läggs efter remittentens namn |
| `requestActivity.body.request.receivingOrganization.id` | 0..1 | `Task.owner.identifier` | Mottagande enhets HSA-id (IIType`extension`) |
| `requestActivity.body.request.receivingOrganization.name` | 1..1 | `Task.owner.display` | Mottagande enhets namn |

-------

### Statusmappning (Kv status vårdbegäran → Task.status)

Mappningen görs på koden i `statusCode`. Tabellen anger klartexterna; koderna i kodverket 1.2.752.129.2.2.2.43 behöver verifieras mot Ineras kodverkstjänst.

| | |
| :--- | :--- |
| Mottagen | received |
| Under utredning | in-progress |
| Besvarad | completed |
| Avbruten | cancelled |
| Avvisad | rejected |

-------

### Provenance

En `Provenance`-resurs skapas per Task och bär PDL/Sparr-information från `header.accessControlHeader`.

| | | |
| :--- | :--- | :--- |
| `agent[custodian]` | Juridiskt ansvarig vårdgivare (Yttre Sparr) | `requestActivity.header.accessControlHeader.accountableHealthcareProvider` |
| `agent[author]` | Informationsägande vårdenhet (Inre Sparr) | `requestActivity.header.accessControlHeader.accountableCareUnit` |

`Provenance.target` refererar Task-resursen.
 `Provenance.recorded` = `header.author.timestamp` om den finns, annars `header.record.timestamp` (konverterat till ISO 8601).

-------

### Övriga aktiva versioner – GetRequestActivities 1.0

Mappningstabellerna ovan utgår från GetRequestActivities 2.0. Version 1.0 är också aktiv för 1177 Journal och beskrivs av den logiska modellen [SEEHDSLMRequestActivitiesV10](StructureDefinition-SEEHDSLMRequestActivitiesV10.md) (genererad från `GetRequestActivitiesResponder_1.0.xsd` i `riv.crm.requeststatus` 1.0.7 och TKB:n för samma version). Samma profil, [SEEHDSTask](StructureDefinition-SEEHDSTask.md), används.

Version 1.0 har en platt struktur utan header och body. Den saknar åtkomstkontrollfälten i 2.0: det finns ingen vårdgivare, inget `approvedForPatient` och ingen identitet för själva statusposten.

| | | | |
| :--- | :--- | :--- | :--- |
| `requestActivity.subjectOfCareId` | 1..1 String | – | Finns bara i 1.0 |
| `requestActivity.senderRequestId` | 0..1 String | – | Finns bara i 1.0 |
| `requestActivity.receiverRequestId` | 0..1 String | – | Finns bara i 1.0 |
| `requestActivity.typeOfRequest` | 1..1 String | – | Finns bara i 1.0 |
| `requestActivity.requestMedium` | 0..1 String | – | Finns bara i 1.0 |
| `requestActivity.requestIssuedByPersonName` | 0..1 String | – | Finns bara i 1.0 |
| `requestActivity.requestIssuedByOrganizationalUnitId` | 0..1 String | – | Finns bara i 1.0 |
| `requestActivity.requestIssuedByOrganizationalUnitDescription` | 0..1 String | – | Finns bara i 1.0 |
| `requestActivity.receivingPersonName` | 0..1 String | – | Finns bara i 1.0 |
| `requestActivity.receivingOrganizationalUnitId` | 0..1 String | – | Finns bara i 1.0 |
| `requestActivity.receivingOrganizationalUnitDescription` | 0..1 String | – | Finns bara i 1.0 |
| `requestActivity.careUnit` | 0..1 String | – | Finns bara i 1.0 |
| `requestActivity.logicalSystemId` | 1..1 String | – | Finns bara i 1.0 |
| `requestActivity.statusCode` | 1..1 String | – | Finns bara i 1.0 |
| `requestActivity.eventTime` | 1..1 String | – | Finns bara i 1.0 |
| `requestActivity.header` | – | 1..1 Backbone | Finns bara i 2.0 |
| `requestActivity.body` | – | 1..1 Backbone | Finns bara i 2.0 |

#### Mappningstabell – requestActivity (1.0)

| | | | |
| :--- | :--- | :--- | :--- |
| `requestActivity.subjectOfCareId` | 1..1 | `Task.for.identifier.value` | Person- eller samordningsnummer (12 tecken).`system`sätts från numrets form, se[GENERAL-006](mappings.md#patientreferens) |
| `requestActivity.senderRequestId` | 0..1 | `Task.focus.identifier.value` | Remiss-id hos framställaren; motsvarar`body.request.rivId`i 2.0 |
| `requestActivity.receiverRequestId` | 0..1 | `Task.focus.identifier.value`om`senderRequestId`saknas | Remiss-id hos mottagaren. Minst ett av de två id:na finns alltid |
| `requestActivity.typeOfRequest` | 1..1 | Ej mappad | Lokal kod för framställantyp (1 röntgen, 2 lab, 4 allmän, 10 fysiologi); attribut till remissen, som i 2.0 |
| `requestActivity.requestMedium` | 0..1 | Ej mappad | KV Form av framställan; attribut till remissen, som i 2.0 |
| `requestActivity.requestIssuedByPersonName` | 0..1 | `Task.requester.display` | Remittentens namn |
| `requestActivity.requestIssuedByOrganizationalUnitId` | 0..1 | `Task.requester.identifier` | Remitterande enhets HSA-id |
| `requestActivity.requestIssuedByOrganizationalUnitDescription` | 0..1 | `Task.requester.display` | Läggs efter remittentens namn |
| `requestActivity.receivingPersonName` | 0..1 | Ej mappad | Mottagande person; finns inte i 2.0 och Task.owner är enheten |
| `requestActivity.receivingOrganizationalUnitId` | 0..1 | `Task.owner.identifier` | Mottagande enhets HSA-id |
| `requestActivity.receivingOrganizationalUnitDescription` | 0..1 | `Task.owner.display` |   |
| `requestActivity.careUnit` | 0..1 | `Provenance.agent[author].who.identifier` | Inre Sparr – informationsägande vårdenhet. Ingen vårdgivare (Yttre Sparr) finns i 1.0 |
| `requestActivity.logicalSystemId` | 1..1 | `Task.meta.source` | Källsystemets HSA-id (GENERAL-005) |
| `requestActivity.statusCode` | 1..1 | `Task.businessStatus`och`Task.status` | Lokalt kodverk utan nationell förankring, se tabellen nedan |
| `requestActivity.eventTime` | 1..1 | `Task.lastModified` | ÅÅÅÅMMDDttmmss → ISO 8601 (GENERAL-001). Används även som`Task.authoredOn`och`Provenance.recorded`, eftersom 1.0 saknar`record.timestamp` |

`Task.identifier` sätts inte, eftersom 1.0 saknar identitet för statusposten. Utan `approvedForPatient` sätts ingen `meta.security`.

#### statusCode 1.0 → Task.status

TKB 1.0 anger klartext för sju koder, och testsvitens schematron tillåter bara dem (invarianten `getrequestactivities1-status-code` i [SEEHDSLMRequestActivitiesV10](StructureDefinition-SEEHDSLMRequestActivitiesV10.md), se VER-005 i [Mappningsissues](mapping-issues.md#stangda-fragor)). Ett svar med en annan kod bryter mot kontraktet och ger `Task.status = unknown`, med koden kvar i `businessStatus`.

| | | |
| :--- | :--- | :--- |
| 20 | Skickad | `requested` |
| 30 | Mottagen | `received` |
| 90 | Bedömd | `accepted` |
| 126 | Preliminärsvar skickat | `in-progress` |
| 130 | Svar skickat | `completed` |
| 136 | Preliminärsvar mottaget | `in-progress` |
| 140 | Svar mottaget | `completed` |

-------

### OID-till-URI-tabell

| | | |
| :--- | :--- | :--- |
| `1.2.752.129.2.1.3.1` | `http://electronichealth.se/identifier/personnummer` | Personnummer |
| `1.2.752.129.2.1.3.3` | `http://electronichealth.se/identifier/samordningsnummer` | Samordningsnummer |
| `1.2.752.129.2.1.4.1` | `urn:oid:1.2.752.29.4.19` | HSA-id (Inera NTjP) |

OID:er utan känd URI-mappning bevaras som `urn:oid:{oid}`.

-------

### Designbeslut

#### Task.identifier och Task.focus (tidigare REQ-001)

Meddelandet har två skilda identiteter: `header.record.id` identifierar remisstatusen och mappas till `Task.identifier`, medan `body.request.id` identifierar remissen och mappas till `Task.focus.identifier`.

#### Task.requester (tidigare REQ-002)

Remittenten finns i `body.request.author` (namn och remitterande enhet) och mappas till `Task.requester` som logisk referens.

