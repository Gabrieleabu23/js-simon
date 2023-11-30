const min=1; const max=50; const numToGenerate=5;

// GENERARE 5 NUMERI CASUALI
console.log(genCasualNumber());
function genCasualNumber(){
    const arrayNumbers=[];
    for(let i=0;i<numToGenerate;i++){
        let randomNum= Math.floor(Math.random()*max + min);
        arrayNumbers[i]=randomNum;
        // DEBUG
        // console.log(arrayNumbers);
    }
    return arrayNumbers;
}
