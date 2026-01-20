## Introduksjon

Du har blitt ansatt som juniorutvikler i et utviklingsselskap kalt Central.
Du har erstattet en annen juniorutvikler som jobbet på en Meme-webapplikasjon for en kunde.
Denne utvikleren rakk ikke å fullføre applikasjonen før han sluttet.

Applikasjonen var omtrent 25 % ferdig, og ikke all funksjonalitet var implementert.

Du skal nå ta over koden hans og fullføre oppgaven i henhold til kundens spesifikasjoner.

Utvikleren brukte ingen versjonskontroll, og selskapets CEO fant en zip-fil som inneholder den siste koden han jobbet med.
Denne koden skal brukes som utgangspunkt.

Utvikleren brukte NodeJS med Express og EJS template engine, noe som var et krav fra kunden.

CEO forsøkte å kjøre applikasjonen, men det oppstod feil, og han klarte ikke å rette dem.
Din oppgave er å:

rette feilene

sette deg inn i hva som allerede er gjort

fullføre det som gjenstår



## Kundens behov (Client Brief)

Kunden trenger følgende funksjonalitet i applikasjonen:



## Meme Oversikt-side

Det må finnes en Meme Oversikt-side som viser en tabell med 20 ulike memes
(memes = morsomme bilder fra internett)

API-et som skal brukes er:
http://jss.restapi.co.za/memes

Dette API-et returnerer 20 tilfeldige memes



## API-håndtering

API-kallet skal kun utføres én gang, når webapplikasjonen lastes første gang

De 20 memene skal lagres i et objekt

Når brukeren navigerer mellom sider og returnerer til Meme Oversikt-siden, skal:

det samme objektet brukes

samme liste med memes vises

Kun når:

webappen lukkes

serveren restartes

og webappen åpnes på nytt
→ skal et nytt API-kall gjøres og nye memes lagres

API-URL-en må ligge i en konfigurasjons-/miljøfil

For eksempel en JSON-fil

Denne skal inneholde konfigurasjonsvariabler som API-URL

Dette gjør det enkelt for kunden å endre URL senere



## Tabellinnhold

Hver rad i tabellen skal inneholde:

Et lite bilde av memen

skalert til 20 % av original størrelse

Navnet på memen

En “Details”-knapp



## Meme Details-side

Når “Details”-knappen klikkes:

åpnes en Meme Details-side

som viser all informasjon om memen:

ID

URL

Bilde

Navn

Dimensjoner (bredde og høyde)



## Viste memes

Når en meme har blitt vist (Details-knappen er klikket):

skal bakgrunnsfargen på raden endres

Dette skal hjelpe brukeren å holde oversikt over hva som er sett

Dette skal gjelde selv om Meme Oversikt-siden refreshes



## Søkefunksjon

Tabellen må ha søkemulighet

Det må finnes:

et tekstfelt for søk

en “Search”-knapp

Når søk utføres:

skal memes med navn som matcher søket vises

kun de matchende resultatene skal vises i tabellen

Hvis søkefeltet tømmes:

skal de opprinnelige 20 memene vises igjen

API-kallet må IKKE kjøres på nytt

ellers vil en ny liste med 20 memes dukke opp

Søkefunksjonen skal implementeres i back-end, ikke i front-end



## Innloggingssystem

Det må finnes et innloggingssystem, inkludert en Login-side:



## Login-side

Brukere skal se Login-siden når de trykker på “Login” i navigasjonsbaren, dersom de ikke allerede er innlogget



## Gjester (Guest users)

Gjester:

skal kunne se listen med memes

skal IKKE se “Details”-knappene



## Innloggede brukere

Når en bruker logger inn:

skal de omdirigeres tilbake til Meme Oversikt-siden

først da skal “Details”-knappene være synlige

Når de klikker “Details”:

åpnes Meme Details-siden

med mer informasjon om valgt meme



## Direkte URL-tilgang

Hvis en gjest manuelt skriver inn URL-en til en Meme Details-side:

skal de videresendes til Login-siden

Gjester har ikke lov til å se detaljer – selv via direkte URL



## Navigasjonsmeny (Navbar)

Applikasjonen må ha en Navbar som inneholder:

Central-logo

“Login” eller “Logout” (avhengig av innloggingsstatus)

Brukernavn:

“Guest” hvis ikke innlogget

faktisk brukernavn hvis innlogget

Navbaren skal vises på:

Meme Oversikt-siden

Meme Details-siden
(samme view skal gjenbrukes – ikke kopier kode)

Når logoen klikkes:

skal brukeren alltid sendes til Meme Oversikt-siden



## README-fil

Det må finnes en README-fil som beskriver:

hvilke teknologier som er brukt

spesielle installasjonsinstruksjoner

eksterne biblioteker/pakker

hvordan applikasjonen kjøres
(f.eks. om live-server eller annet er nødvendig)



## Instruksjoner (Teknologivalg)

Basert på diskusjon mellom kunde og tidligere utvikler er følgende bestemt:

Følgende eksterne biblioteker må installeres via NPM (ikke CDN):

jQuery

Bootstrap versjon 5.2.3

PassportJS

Riktig NPM-kommando må brukes slik at:

avhengigheter lagres i package.json

Express skal brukes sammen med:

EJS template engine

Egendefinerte:

CSS-filer skal ligge i riktig mappe

JavaScript-filer skal ligge i riktig mappe

Innloggingssystemet skal bruke:

PassportJS

en users.json-fil

minst 3 brukere

brukes til autentisering

Informasjon om innlogget bruker skal lagres med:

Sessions



## Struktur

Det må finnes:

Meme Oversikt-view

Meme Details-view

riktige ruter for begge

Alle:

stilark

JavaScript-filer
må ligge i korrekte mapper



## Details-knapp og POST-logikk

Når “Details”-knappen klikkes i Meme Oversikt:

skal et JavaScript-event brukes

denne funksjonen skal ligge i en egen JS-fil

funksjonen skal:

sende data via POST

åpne Meme Details-view

vise korrekt informasjon for valgt meme



## Brukere

De tre brukerne som må opprettes i autentiseringsfilen:

har forhåndsdefinerte brukernavn og passord

(disse er utelatt her)