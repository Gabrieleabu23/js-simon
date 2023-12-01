const min=1; const max=50; const numToGenerate=5; let count=0;let sad;let punteggio=0;const vet1=[];let sda;
let secondi=30;
const vet= document.getElementById("array").innerHTML=genCasualNumber();
counter();
const myTimeout = setTimeout(boh, secondi*1000);
setTimeout(catchNumber,(secondi+1)*1000);



function catchNumber(){
    for(let i=0;i<5;i++){
        let number= parseInt(prompt("Inserisci un numero tra quelli mostrati in precendenza"));
        console.log("numeri inseriti utente: ",number);
        if(vet.includes(number)){
            punteggio++;
            vet1.push(number);
            // console.log("indovinato",vet1[i]);
            // console.log("busone");
        }

    }
    stampaNumeri();
}

function stampaNumeri(){
    console.log("Numeri indovinati: ",vet1);
    console.log("Punteggio: ",punteggio);
    console.log("Numeri generati: ",vet)
    if(punteggio ===5){
        alert("Hai indovinato tutti i numeri, bravo!");
    }else if(punteggio===0){
        alert("Non hai indovinato nessun numero:(. Prendi carta e penna mentre guardi i numeri!");
    }
}

// GENERARE 5 NUMERI CASUALI
function genCasualNumber(){
    const arrayNumbers=[];
    for(let i=0;i<numToGenerate;i++){
        let randomNum= Math.floor(Math.random()*max + min);
        arrayNumbers[i]=randomNum;
        // DEBUG
        // console.log(arrayNumbers[i]);
    }
    return arrayNumbers;
    
}
// PULIRE L'ARRAY STAMPATO ALL'UTENTE
function boh(){
    document.getElementById("array").innerHTML=' ';
}
// CONTATORE CHE PERMETTE ALL'UTENTE DI SAPERE QUANTI SECONDI STANNO PASSANDO PRIMA CHE SCOMPAIA L'ARRAY
function counter() {
    if( count !== secondi){
    count = count + 1;      
    setTimeout(counter, 1000)
    document.getElementById("contatore").innerHTML=`${count}  ${"secondi"}`;
    }
    else{
        document.getElementById("contatore").innerHTML='';
        return;
    }
}
