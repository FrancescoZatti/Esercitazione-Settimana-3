/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let n1 = 10;
let n2 = 20;

const sum = n1 + n2;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Francesco",
  surname: "Zatti",
  age: "25",
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const skills = ["html", "css", "javascript"];
console.log(skills);
me.skills = skills;
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("pippo");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice(){
  let n = Math.ceil(Math.random() * 6);
  console.log(n);
  return n;
};

dice()

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log(random);
console.log(dice());

function whoIsBigger (random, dice) {
  if (random > dice) {
    console.log("Il numero più grande è " + random);
  } else if (dice > random) {
    console.log("Il numero più grande è " + dice);
  } else {
    console.log("I numeri sono uguali");
  }
};

whoIsBigger(random, dice);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

let string1 = "Questa stringa è da dividere";

function splitMe (string1) {
  let parole = string1.split(" ");
  console.log(parole);
};

splitMe(string1);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

let string2 = "Vero o Falso"
let booleanoCasuale = Math.random() < 0.5;
console.log(booleanoCasuale);

function deleteOne (string2, booleanoCasuale) {
  if (booleanoCasuale === true) {
    string2 = string2.split("").slice(1).join("");
  } else {
    string2 = string2.split("").slice(0, -1).join("");
  }
  console.log(string2);
};

deleteOne(string2, booleanoCasuale);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

let string3 = "Ho preso 45 nel banchmark e un po' voglio morire";

function onlyLetters(string3) {
  let addSpace = string3.replace(/[0-9]/g, '');
  string3 = addSpace.split('  ').join(' ')
  console.log(string3);
};

onlyLetters(string3);


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

let emailCom = "emailesempio@email.com";
let emailIt = "emailesempio@email.it";
let nonEmail = "Sono un'email!";
let nonEmail2 = "Ho .com quindi sono una mail!";

function isThisAnEmail (Element) {
  console.log(Element);
  if (Element.includes("@") && Element.includes(".it") || Element.includes("@") && Element.includes(".com")) {
    Element = true;
    console.log("Questa è una mail")
  } else {
    console.log("Non è una mail")
  }
};

isThisAnEmail(emailCom);
isThisAnEmail(emailIt);
isThisAnEmail(nonEmail);
isThisAnEmail(nonEmail2);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledi", "Giovedì", "Venerdì", "Sabato"];
  let dataDiOggi = new Date();
  let indiceGiorni = dataDiOggi.getDay();
  return giorniSettimana[indiceGiorni];
};

let cheGiornoE = whatDayIsIt();
console.log("Oggi è", cheGiornoE);
 
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

let numeroDadi = Math.ceil(Math.random() * 10);

function rollTheDices(n) {
  let obj = {
    sum: 0,
    values: []
  }

  for(let i = 0; i < n; i++) {
    let n = dice();
    obj.sum += n;
    obj.values.push(n);
  }
  return obj;
}

console.log(rollTheDices(numeroDadi));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(dataDiInizio) {
  let dataDiOggi = new Date();

  let dataInizioM = dataDiInizio.getTime();
  let datadiOggiM = dataDiOggi.getTime();

  let differenzaInMillisecondi = datadiOggiM - dataInizioM;

  let giorniDiDifferenza = Math.floor(differenzaInMillisecondi / (1000 * 60 * 60 * 24));

  return giorniDiDifferenza;
}

let dataDiInizio = new Date("1998-04-12");
let giorniTrascorsi = howManyDays(dataDiInizio);

console.log("Giorni trascorsi:", giorniTrascorsi);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

let dataDiOggi = new Date();
let mioCompleanno = new Date(dataDiOggi.getFullYear(), 3, 12);
console.log("Il mio compleanno è il " + mioCompleanno.toLocaleDateString());
console.log("Oggi è " + dataDiOggi.toLocaleDateString() + "." + " Oggi è il mio compleanno?");

function isTodayMyBirthday () {
  return (
    dataDiOggi.getDate() === 12 &&
    dataDiOggi.getMonth() === 3
  );
};

console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const obj1 = {
  proprieta1: "Sono",
  proprieta2: "un",
  proprieta3: "oggetto!",
};

let deleteString = "proprieta3";

console.log(obj1);

function deleteProp (obj1, deleteString) {
    let proprieta = Object.keys(obj1);
    let lastProp = proprieta[proprieta.length - 1]; 

    if (deleteString === lastProp) {
      delete obj1[lastProp];
    };
  return obj1;
};

deleteProp(obj1, deleteString);
console.log(obj1);


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]



/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie (movies) {
  const years = [];
  for (let i = 0; i < movies.length; i++) {
    years.push(movies[i].Year)
  }
  console.log(years);
  let n = 0;
  for (let i = 0; i < years.length; i++) {
    if (years[i] > n) {
      n = years[i];
    }
  }
  console.log("Il film più recente è uscito nel " + n);
}

newestMovie(movies);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies) {
  return movies.length;
};

const nFilm = countMovies(movies);
console.log("Ci sono " + nFilm + " film.")

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears (movies) {
  const years = [];
  for (let i = 0; i < movies.length; i++) {
    years.push(movies[i].Year)
  }
  console.log(years);
};

onlyTheYears(movies);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium (movies) {
  const preMillenium = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year < 2000) {
      preMillenium.push(movies[i])
    };
  };
  console.log(preMillenium);
}

onlyInLastMillennium(movies);


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

let sumYears = 0;

function sumAllTheYears (movies) {
  for (let i = 0; i < movies.length; i++) {
    let anno = parseInt(movies[i].Year);
    sumYears += anno;
  }
console.log(sumYears);
};

sumAllTheYears(movies);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

let title = "Rings";
let filmCercato = [];

/*function searchByTitle(movies, title) {
  let res = movies.filter(movie => movie.Title.toLowerCase().includes(title.toLowerCase()));
  filmCercato.push(res);
  }

searchByTitle(movies, title);
console.log("Il film che cercavi è:", filmCercato);*/ //Ho provato con filter ma non funziona, non ho capito dove ho sbagliato.

function searchByTitle (movies) {
  for (let i = 0; i < movies.length; i++) {
    let search = title.toLowerCase();
    let res = movies[i].Title.toLowerCase();

    if (res.includes(search)) {
      filmCercato.push(movies[i]);
    }
  }
  console.log(filmCercato);
}

searchByTitle(movies);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

let string4 = "Avengers";
const obj2 = {
  match: [],
  unmatch: [],
}

function searchAndDivide (movies) {
  for (let i = 0; i < movies.length; i++) {
    let search = string4.toLowerCase();
    let res = movies[i].Title.toLowerCase();

    if (res.includes(search)) {
      obj2.match.push(movies[i]);
    } else {
      obj2.unmatch.push(movies[i])
    }
  }
  console.log(obj2);
}

searchAndDivide(movies);


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

let randomDelete = Math.ceil(Math.random() * countMovies(movies));
console.log(randomDelete);

function removeIndex(movies, randomDelete) {
  if (randomDelete >= 0 && randomDelete < movies.length) {
    let newArray = [...movies.slice(0, randomDelete), ...movies.slice(randomDelete + 1)];
    return newArray;
  } else {
    console.log("Indice non valido. Nessuna modifica all'array.");
    return movies;6
  }
}

let newArray = removeIndex(movies, randomDelete);
console.log('Array "movies" aggiornato:', newArray);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

//Creo il <div class="container"></div> all'interno del documento html.
const createContainer = function () {
  let nuovoDiv = document.createElement('div');
  nuovoDiv.classList.add('container');
  document.body.appendChild(nuovoDiv);
  return nuovoDiv;
}

const container = createContainer();

console.log(container);

//Cerco il <div class="container"></div> all'interno della pagina html.
function findContainer () {
  let res = document.querySelector('.container');
  return res;
};

console.log("Ho trovato questi container:", findContainer());


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

//Creo una <table></table> all'interno del documento html.
const createTable = function (nTd) {
  let nuovaTabella = document.createElement('table');
  document.querySelector('.container').appendChild(nuovaTabella);
  let nuovoTr = document.createElement('tr');
  nuovaTabella.appendChild(nuovoTr);
  for (let i = 0; i < nTd; i++) {
    let nuovoTd = document.createElement('td');
    nuovoTd.innerText = 'Questo è il testo interno';
    nuovoTr.appendChild(nuovoTd);
  }
  return nuovaTabella;
}

const tabella = createTable(5);
console.log(tabella);

//Cerco i tag <td></td> nel documento html.
function findTd () {
  let res = document.querySelectorAll('td');
  return res;
}

console.log("Ho trovato questi Td:", findTd())

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

let innerTextTd = function () {
  let totTd = document.querySelectorAll('td');
  const testi = [];
  totTd.forEach(td => {
    testi.push(td.innerText)
  });
  return testi;
}

let testiInterni = innerTextTd();

console.log(testiInterni);

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

//Creo un <a></a> dentro ad ogni <td></td> della pagina html;
let createA = function () {
  let newA = document.createElement('a');
  document.querySelector('td').appendChild(newA);
  newA.innerText= 'Questo è un link.'
  return newA
}

const link = createA();
console.log(link);

//Cambio il colore del background di ogni link nella pagina (in questo caso uno, nel primo td).
let changeBgLink = function () {
  let link = document.querySelectorAll('a');
  link.forEach(a => {
    a.style.backgroundColor= 'red';
  })
  return link;
}

let cambiaColore = changeBgLink();
console.log(cambiaColore);


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

//Creo una lista <ul></ul> all'interno del documento html e creo i suoi punti.
const createUl = function (nLi) {
  let nuovaUl = document.createElement('ul');
  nuovaUl.id= 'myList';
  document.querySelector('.container').appendChild(nuovaUl);
  for (let i = 0; i < nLi; i++) {
    let nuovoLi = document.createElement('li');
    nuovoLi.innerText = 'Questo è un punto della lista';
    nuovaUl.appendChild(nuovoLi);
  }
  return nuovaUl;
}

const uList = createUl(5);
console.log(uList);

//Aggiungo un elemento <li></li> alla lista.
let addLi = function () {
  let aggiungiLi = document.createElement('li');
  document.getElementById('myList').appendChild(aggiungiLi);
  aggiungiLi.innerText= 'Sono stato aggiunto dopo!';
  return aggiungiLi;
}

const newLi = addLi();
console.log(newLi);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaMyList () {
  const myList = document.getElementById('myList');
  if (myList) {
    while (myList.firstChild) {
      myList.removeChild(myList.firstChild);
    }
    console.log("myList è stata svuotata.")
  }
}

svuotaMyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

let addClass = function () {
  let allTr = document.querySelectorAll('tr');
  allTr.forEach(tr => {
    tr.classList.add('test');
  })
  console.log("Controlliamo di aver aggiunto la classe 'test':", allTr)
}

addClass();


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(n) {
  for (let i = 1; i <= n; i++) {
    let riga = '';
    for (let asterischi = 1; asterischi <= i; asterischi++) {
      riga += '*';
    }

    console.log(riga);
  }
}

halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(n) {
  for (let i = 1; i <= n; i++) {
    let avanti = ' '.repeat(n - i);
    let asterischi ='*'.repeat(2 * i - 1);
    console.log(avanti + asterischi);
  }
}

tree(10);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const n = Math.ceil(Math.random() * 100);
console.log(n);

let isItPrime = function(n) {
  if (n <= 1) {
    console.log(`Il numero ${n} non è un numero primo.`)
    return;
  }

  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && n !== i) {
      console.log(`Il numero ${n} ha un resto pari a zero quando diviso per ${i}. Non è un numero primo.`);
      return;
    }
  }
      console.log(`Il numero ${n} è un numero primo.`);
};
    
isItPrime(n);
