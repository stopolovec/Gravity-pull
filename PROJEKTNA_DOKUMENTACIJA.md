# Gravitacijski obrat — projektna dokumentacija

Datum raziskave: 20. oktober 2026  
Vrsta izdelka: spletna 2D ugankarska platformna igra  
Delujoči MVP: `http://localhost:8080`

> Navodila iz primera za knjigo so prilagojena digitalni igri. Amazonovo tabelo knjig nadomešča analiza primerljivih iger na Steamu, strani knjige igralni obseg, zvezdice pa delež pozitivnih uporabniških ocen.

## Faza 2 — raziskava trga

### Pet primerljivih iger

| Konkurent | Redna cena | Obseg/platforma | Ocena igralcev | Število ocen | Kaj igralcem manjka oziroma jih moti |
|---|---:|---|---:|---:|---|
| **VVVVVV** | približno $4.99 | PC, približno 2–5 ur | 93 % pozitivnih | približno 10.600 | Visoka težavnost in nenadni skoki zahtevnosti; retro videz ni za vsakogar; posamezni igralci pogrešajo sodobnejši sistem napredovanja. |
| **Dandara: Trials of Fear Edition** | $14.99 | PC/Mac/Linux, približno 10–12 ur | 81 % pozitivnih | približno 1.275 | Del igralcev kritizira upravljanje, orientacijo v prostoru, težavnost zadnjih bojev in neenakomerno ravnotežje. |
| **Etherborn** | približno $16.99 | PC, približno 3–5 ur | 76 % pozitivnih | 103 | Prekratka izkušnja glede na ceno, premalo ugank in preveč abstraktna zgodba. |
| **Gravity Ghost** | približno $14.99 | PC, približno 2–4 ure | zelo pozitivno | več sto | Igralci jo opisujejo kot lepo, vendar kratko; redna cena se nekaterim zdi previsoka, izziv pa prelahek. |
| **Bionic Bay** | $19.99 redno | PC, približno 6–9 ur | 80–84 % pozitivnih | približno 900 | Ponavljajoča se okolja, skromna zgodba, posamezni frustrirajoči odseki in velika odvisnost od zelo natančnega upravljanja. |

Viri: [VVVVVV – SteamDB](https://steamdb.info/app/70300/info/), [Dandara – Steam](https://store.steampowered.com/app/612390/Dandara/), [Dandara – pregled ocen](https://steambase.io/games/dandara-trials-of-fear-edition/reviews), [Etherborn – Steam](https://store.steampowered.com/app/812160/Etherborn/), [Gravity Ghost – odzivi igralcev](https://steamcommunity.com/app/251490/reviews/?browsefilter=toprated), [Bionic Bay – SteamDB](https://steamdb.info/app/1928690/), [Bionic Bay – analiza recenzij](https://steamstat.io/app/1928690).

### Ugotovitve iz srednjih in negativnih recenzij

Pri konkurenčnih igrah se ponavlja pet težav:

1. osnovna mehanika se začne ponavljati, če se dovolj hitro ne pojavijo nove ovire;
2. težavnost pogosto nenadoma poskoči brez varnega prostora za učenje;
3. igralec se pri spreminjanju gravitacije lahko izgubi v prostoru;
4. kratka igra pri ceni nad 10 € deluje kot preslaba vrednost;
5. igralci želijo dodatne levele, časovne izzive, lestvice ali možnost ponovnega igranja.

Naša igra to rešuje z 25 sektorji, tremi vrstami dinamičnih nevarnosti, postopnim uvajanjem težavnosti, izbiro sektorjev, odklenljivimi barvnimi temami in načinom One Life.

### Iskalni predlogi in ključne besede

Začetki iskanja `gravity platformer…`, `browser puzzle game…`, `indie space game…` in `free web game…` vodijo do teh uporabnih izrazov:

1. gravity puzzle platformer
2. gravity switch game
3. free browser platform game
4. space puzzle game online
5. one life platformer
6. challenging indie web game
7. no download puzzle game

### Izbrana niša v enem stavku

**Kratka, vizualno izpopolnjena spletna gravitacijska platformna igra za ljubitelje ugank in hitrih izzivov, ki jo lahko igrajo takoj brez namestitve.**

## Faza 3 — persona in koncept

### Kupec oziroma odločevalec

Pri neposredni spletni različici sta kupec in uporabnik večinoma ista oseba. Sekundarni odločevalec je učitelj oziroma mentor, ki igro izbere za predstavitev digitalnih izdelkov.

**Primarna persona:** Luka, 18–25 let, študent ali mlajši igralec. Igra neodvisne platformne in ugankarske igre, uporablja računalnik ter želi igro razumeti v manj kot minuti. Za kratko, dodelano indie igro je pripravljen plačati 3–7 €, vendar najprej pričakuje brezplačen spletni demo.

**Sekundarna persona:** Nina, 35–50 let, profesorica ali mentorica. Išče jasen, delujoč digitalni izdelek, pri katerem lahko hitro oceni idejo, izvedbo, uporabniški vmesnik in tehnično zahtevnost.

### Uporabnik

Igralec uživa v občutku mojstrstva, kratkih sektorjih, izboljševanju časa in odklepanju vsebine. Zabavajo ga nenavadno gibanje, nevarnosti, ki zahtevajo pravi trenutek, ter možnost, da neuspeh takoj popravi z novim poskusom.

### Edinstvena vrednost

**Naša igra pomaga igralcem, ki iščejo hiter miselno-gibalni izziv, doživeti štirismerno gravitacijo neposredno v brskalniku, ker združuje uganke, natančno gibanje in kratke sektorje – za razliko od daljših plačljivih platformerjev, ki zahtevajo namestitev.**

### Koncept izdelka

- **Naslov:** Gravitacijski obrat
- **Podnaslov:** Prelomi pravila. Obrni svet.
- **Format:** spletna igra HTML5/Canvas
- **Distribucija MVP:** localhost in univerzitetna predstavitev
- **Predlagana distribucija končne različice:** brezplačen spletni demo ter razširjena različica na itch.io
- **Jedrna mehanika:** igralec ne skače, temveč s štirimi smermi obrača gravitacijo

## Faza 4 — prototip igre

### Kaj vsebuje MVP

- 25 ročno oblikovanih sektorjev;
- štirismerno gravitacijo z WASD ali puščicami;
- zbiranje energijskih jeder in odklep izhoda;
- statične bodice, vrteče se laserje, premikajoče krogle in pulzirajoče valove;
- običajni in One Life način;
- izbiro sektorjev in shranjevanje napredka;
- devet odklenljivih barvnih tem;
- časomer, premor, zvok, odziven uporabniški vmesnik in upravljanje na dotik;
- lokalni zagon brez strežniške podatkovne baze.

### Vizualna pravila

- osnovna paleta: temno modra, električno turkizna, vijolična in koralno rdeča;
- največ dve družini pisav: Chakra Petch za tehnološke elemente in Inter za daljše besedilo;
- svetle nevarnosti, jasno ločene od sten in ozadja;
- ista oblika energijskega jedra, portala in igralca v vseh sektorjih;
- animacije morajo pomagati pri branju nevarnosti, ne samo krasiti zaslona.

### Uporabniški test MVP

Test naj opravi pet oseb brez predhodne razlage. Vsaka naj odigra prve tri sektorje in en poznejši sektor. Beležimo:

1. koliko časa potrebuje, da odkrije upravljanje;
2. kolikokrat umre na sektor;
3. ali razume pogoj za odprtje portala;
4. ali opazi meni sektorjev, barvne teme in One Life način;
5. na katerem mestu prvič začuti frustracijo ali ponavljanje.

Merilo uspeha: vsaj štirje od petih igralcev samostojno zaključijo prvi sektor v treh minutah in pravilno opišejo glavno mehaniko.

### Lokalni zagon

```powershell
cd C:\Users\silvo\Desktop\PajanusRex\gravity-shift
node server.js
```

Nato odpremo `http://localhost:8080`.

## Faza 5 — prodajna stran in cena

### Opis igre do 150 besed

Tla so samo stvar perspektive. **Gravitacijski obrat** je hitra spletna ugankarska platformna igra, v kateri ne skačeš – obračaš gravitacijo. Zamenjaj smer navzgor, navzdol, levo ali desno, izogni se laserskim rokam in udarnim valovom, zberi energijska jedra ter odpri portal v naslednji sektor. Kampanja vsebuje 25 ročno zasnovanih izzivov, ki postopoma uvajajo nove ovire in zahtevajo vedno natančnejše odločitve. Odklepaj barvne teme, izboljšuj svoj čas ali vključi One Life način, kjer ena napaka konča poskus. Igra deluje neposredno v brskalniku, brez namestitve in registracije. Ali lahko ponovno vzpostaviš gravitacijsko jedro postaje?

### Sedem ključnih besed

- gravity puzzle platformer
- gravity switch game
- browser platform game
- space puzzle online
- one life challenge
- indie web game
- no download game

### Kategoriji

- Puzzle / Puzzle-Platformer
- Platformer / Precision Platformer

### Cena in prihodek

- brezplačen spletni demo: prvih 5 sektorjev;
- polna različica na itch.io: **4,99 €**;
- pri izbranem 10-odstotnem deležu platforme ostane približno **4,49 € na prodajo** pred stroški plačilnega sistema in davki;
- za študijski MVP je primerna tudi popolnoma brezplačna objava z možnostjo prostovoljnega prispevka.

### Dvominutna predstavitev za sejem

»Kaj če v platformni igri ne bi mogli skočiti? V *Gravitacijskem obratu* igralec namesto skoka obrne celoten svet. S tipkami WASD izbere smer gravitacije, nato pa mora z zagonom, časom in logiko priti do energijskih jeder ter izhoda. Na prvi pogled je pravilo zelo preprosto, toda vrteči laserji, premikajoče krogle in pulzirajoči valovi iz njega ustvarijo vedno nove probleme.

Naša ciljna skupina so igralci kratkih indie in brskalniških iger, ki želijo izziv brez prenosa in dolgega uvoda. Analiza konkurentov, kot so VVVVVV, Dandara in Bionic Bay, je pokazala dve pomembni nevarnosti: nenadne skoke težavnosti in občutek ponavljanja. Zato ima naš MVP 25 kratkih sektorjev, več vrst ovir, postopno učenje, izbiro že opravljenih sektorjev, devet barvnih tem ter dodaten One Life način.

Igra že deluje lokalno v brskalniku, podpira tipkovnico in dotik ter shranjuje napredek. Naslednji korak je test s petimi igralci, merjenje časa in smrti ter popravljanje sektorjev, kjer se igralci izgubijo. Končni model je brezplačen spletni demo in razširjena različica za 4,99 evra.«

## Naslednji razvojni koraki

1. testiranje vseh sektorjev z najmanj petimi uporabniki;
2. beleženje najboljšega časa za vsak sektor;
3. zaslon skupnega napredka in dosežkov;
4. spletna objava brez lokalnega strežnika;
5. napovednik dolžine 30–45 sekund in pet posnetkov zaslona za prodajno stran.
