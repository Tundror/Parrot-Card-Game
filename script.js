//||

const numerocartas = prompt("Com quantas cartas quer jogar? (4 a 14, numeros pares");
if(numerocartas == 4 || numerocartas == 6 || numerocartas == 8 || numerocartas == 10 || numerocartas == 12 || numerocartas == 14){
let cont = 4;
while(cont <= numerocartas)
{
cont++;
}
}
else{
    alert("Numero invalido de cartas");
}