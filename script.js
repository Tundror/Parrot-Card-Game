const arrayCartas = [];
arrayCartas.push('bobrossparrot.gif');
arrayCartas.push('bobrossparrot.gif');
arrayCartas.push('explodyparrot.gif');
arrayCartas.push('explodyparrot.gif');
arrayCartas.push('fiestaparrot.gif');
arrayCartas.push('fiestaparrot.gif');
arrayCartas.push('metalparrot.gif');
arrayCartas.push('metalparrot.gif');
arrayCartas.push('revertitparrot.gif');
arrayCartas.push('revertitparrot.gif');
arrayCartas.push('tripletsparrot.gif');
arrayCartas.push('tripletsparrot.gif');
arrayCartas.push('unicornparrot.gif');
arrayCartas.push('unicornparrot.gif');
const numerocartas = prompt("Com quantas cartas quer jogar? (4 a 14, numeros pares");
if(numerocartas == 4 || numerocartas == 6 || numerocartas == 8 || numerocartas == 10 || numerocartas == 12 || numerocartas == 14){
let cont = 0;
let cartaum;
let cartadois;
let nomeimgum;
let nomeimgdois;
let timeout = true;
let jogadas = 0;
function girar(carta){
    const cartasViradas = [];
    jogadas++;
    const cartacorreta = carta.classList.contains('correto');
    const temvirado = carta.classList.contains('virado');
    if(cartacorreta == false && timeout == true && temvirado==false){
    carta.classList.add('virado');
    carta.querySelector(".back-face").classList.toggle("girar-back-face");
    carta.querySelector(".front-face").classList.toggle("girar-front-face");
    const selectorall = document.querySelectorAll('.virado');
    let cont3=0;
    while(cont3 < selectorall.length){
        cartasViradas[cont3]=selectorall[cont3];
        cont3++;
    }
    if(cartasViradas.length == 1){
        cartaum = carta;
        nomeimgum = cartaum.querySelector('.back-face img').src;
    }
    else if(cartasViradas.length == 2){
        cartadois = carta;
        nomeimgdois = cartadois.querySelector('.back-face img').src;
    }
    const contemum = cartaum.classList.contains('virado');
    const contemdois = cartadois.classList.contains('virado');
    if(cartasViradas.length==2 && nomeimgum !== nomeimgdois){
        cartasViradas.length = 0;
        cartaum.classList.remove('virado');
        cartadois.classList.remove('virado');
        timeout=false;
        setTimeout(()=> {
            cartaum.querySelector(".back-face").classList.toggle("girar-back-face");
            cartaum.querySelector(".front-face").classList.toggle("girar-front-face");
            cartadois.querySelector(".back-face").classList.toggle("girar-back-face");
            cartadois.querySelector(".front-face").classList.toggle("girar-front-face");
            timeout=true;
         },1000);
    }
    else if(cartasViradas.length==2){
        cartasViradas.length = 0;
        cartaum.classList.add('correto');
        cartadois.classList.add('correto');
        cartaum.classList.remove('virado');
        cartadois.classList.remove('virado');
    }
    (document.querySelectorAll('.correto'));
    console.log(timeout);
    }
    const fimdejogo = document.querySelectorAll('.correto');  
    if(fimdejogo.length == numerocartas){
        alert(`Você ganhou em ${jogadas} jogadas!`);
    }
}
const novasCartas = [];
while(cont < numerocartas)
{
    novasCartas[cont] = arrayCartas[cont];
    novasCartas.sort(comparador);
    function comparador() { 
        return Math.random() - 0.5; 
    }
    
    cont++;
}
let cont2 = 0;
while(cont2 < numerocartas){
    const container = document.querySelector('.container-cartas');
    container.innerHTML += `
    <div data-test="card" onclick = "girar(this)"class="card">
        <div class="front-face face">
            <img data-test="face-down-image" class="back" src="imagens/back.png" alt="back">
        </div>
        <div class="back-face face">
            <img data-test="face-up-image" class="front" src="imagens/${novasCartas[cont2]}" alt="bobrossparrot">
        </div>`
    cont2++;
}
}
else{
    alert("Numero invalido de cartas");
}
