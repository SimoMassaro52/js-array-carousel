/*
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine 
grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo 
così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci 
dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine 
di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso 
JavaScript.
*/

const imgArr = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const titleArr = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const textArr = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let mainContent = '';
let thumbs = '';

for (let i = 0; i < imgArr.length; i++) {
    mainContent += `
    <div id="img-${[i+1]}">
        <img src="${imgArr[i]}">
        <div class="position-relative" id="textbox"><h5 id="title">${titleArr[i]}</h5><span id="description">${textArr[i]}</span></div> 
    </div>`    
}

document.getElementById('mainbox').innerHTML = mainContent;

for (let i = 0; i < imgArr.length; i++) {
    thumbs += `
    <img src="${imgArr[i]}">
    `
}

document.getElementById('thumbnails').innerHTML = thumbs;

