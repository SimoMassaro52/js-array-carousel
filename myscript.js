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

//Ciclo immagini vetrina

for (let i = 0; i < imgArr.length; i++) {
    mainContent += `
    <div id="img-${[i+1]}" class="position-relative d-none">
        <img src="${imgArr[i]}">
        <div id="textbox" class="p-3"><h5 id="title">${titleArr[i]}</h5><span id="description">${textArr[i]}</span></div> 
    </div>
    `    
}

document.getElementById('mainbox').innerHTML = mainContent;

let thumbsContent = '';

//Ciclo immagini carosello

for (let i = 0; i < imgArr.length; i++) {
    if(i == 0){
        thumbsContent += `
        <img src="${imgArr[i]}">
        <div id="freccia-su">
            <i class="bi bi-arrow-up"></i>
        </div>    
        `
    }else if(i == 4){
        thumbsContent += `
        <img src="${imgArr[i]}">
        <div id="freccia-giu">
            <i class="bi bi-arrow-down"></i>
        </div>    
        `
    }else{
    thumbsContent += `
    <img src="${imgArr[i]}">
    `
    }
}

document.getElementById('thumbnailsbox').innerHTML = thumbsContent;

//Funzione freccette

let prevArrow = document.getElementById('freccia-su');
let nextArrow = document.getElementById('freccia-giu');

//Mettiamo di default la prima immagine sovrascrivendo l'intero ciclio for definito all'inizio che assume un valore differente, non sparisce.

let x = 1;
let activated = document.getElementById('img-' + x);
activated.classList.add('active'); 

//Freccia in su

prevArrow.addEventListener('click', function(){
    activated.classList.remove('active');
    x--;      
    activated = document.getElementById('img-' + x);       
    activated.classList.add('active'); 
});

//Freccia in giu

nextArrow.addEventListener('click', function(){
        activated.classList.remove('active');
        x++;      
        activated = document.getElementById('img-' + x);       
        activated.classList.add('active'); 
});

