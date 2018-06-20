# javascript-calculator

## Installation

1. Klona ner projektet:
```bash
git clone https://github.com/jesperorb/javascript-calculator
```
2. Navigera till mappen
```
cd javascript-calulcator
```
3. Öppna projektet i din editor och börja koda. Det kan vara en bra idé att göra commits ibland för att få in känslan för det men det är inget krav.

## Arbetsflöde

Uppgiften ska utföras i grupper av 3 personer och dessa är kraven för arbetet:

* Enbart en person får skriva koden i taget och resterande 2 personer ska sitta/stå bakom och ge stöd.
* De andra två personerna ska under tiden den skrivande personen skriver koden komma med feedback om vad som skulle kunna göra med koden och hålla koll på eventuella fel som skulle kunna uppstå. Det är även ok att stanna upp och diskutera eventuella struktur/sätt att skriva koden.
* Var **10e minut** ska ni byta ut den personen som skriver kod. Personen som nyss skrev kod ska alltså inta en feedback-roll och en ny person i gruppen får sätta sig ner och koda.


## Uppgift

1. Skapa en miniräknare. Ni har funktionernas namn redan skapade i `script.js`. Ni ska fylla ut dessa funktioner så att de gör vad namnet antyder. Börja med att varje funktion kan lägga ihop 2 värden och om tid finns, utöka så att varje funktion kan ta emot fler värden än 2. Det är fritt att ta er "friheter" med koden och ändra som ni tycker att det borde vara.

2. `memory` är tänkt att lagra alla föregående beräkningar. Implementera så att att det finns en minnesfunktion om tid finns.

3. `calculate` är en funktion som ska kalla på antingen `add`, `subtract`,`multiply` eller `divide` baserat på om vi använt `+`, `-`, `*` eller `/` som tecken för att göra beräkningen.

4. Skapa ett gränssnitt som ska hantera att ta in värden från DOMen och sedan kalla på rätt funktion (`add`, `subtract` etc.). Använd nedanstående HTML för att sköta hanteringen av input. Lägg denna HTML inuti `<body>`. Interaktionen är alltså att man ska först skriva in en operator i input-fältet med id `operator` och sedan skriva in det värde man ska använda i input-fältet med id `number`. Ni får använda annan HTML, använda knappar etc. och strukturera det hur ni vill. Det här är bara ett exempel på hur input kan hanteras på ett enklare sätt.

```html
<label for="operator">
  Operator (+,-,*, /)
  <input type="text" id="operator">
</label>
<label for="number">
  Number
  <input type="text" id="number">
</label>

<button id="calculate">Calculate</button>
<div id="output"></div>
```
5. Ni ska nu gruppera era funktioner med hjälp av objekt för att få flera grundläggande [`namespaces`](https://en.wikipedia.org/wiki/Namespace). Vi gör en initial uppdelning av kod som är ren logik: **model**, samt kod som är till för att hantera gränssnittet: **view**. Vi bygger detta löst på ett mönster som kallas: [`Model - View - Controller`](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

```js
const Model = {
  money: 0,
  functionThatHandlesLogic(){
    return Model.money;
  }
}

const View = {
  title: 'Write JavaScript - Get Money'
  functionThatHandlesDOM(){
    document.body.innerHTML = `<h1>${View.title}</h1>`;
  },
  secondFunctionThatHandlesDOM(){
    // What is my purpose?
  }
}
```


6 . jQueryfiera koden. Vi bestämmer oss för att använda jQuery i projektet eftersom vi tänker att det ska effektivisera vårt kodande och hjälpa oss med bakåtkompabilitet. 

**Ni ska byta ut så mycket "vanlig" javascript till dess motsvarighet i jQuery.**

Till hjälp ska ni använda API-dokumentationen för jQuery:

* https://api.jquery.com/
* https://oscarotero.com/jquery/


Länken till jQuery:

```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

Samt dessa länkar kan vara användbara:
* https://remysharp.com/2017/12/15/is-jquery-still-relevant
* http://youmightnotneedjquery.com/
* https://css-tricks.com/now-ever-might-not-need-jquery/


Om ni behöver något extra att arbeta med så finns det läsförståelseövningar gällande både jQuery och JavaScript på Canvas.