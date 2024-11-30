// ambito globale

var globalVar = "sono una variabile globale";
let globalLet = "sono anche globale, ma scoping di let";
const globalConst = "sono una costante globale";

{
    //ambito visibilita di blocco
    var blockVar = "sono una Var con ambito di blocco";
    let blockLet = "sono una Let con ambito di blocco";
    const blockConst = "sono una Const con ambito di blocco";
}

//ambito globale
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block Scope
//console.log(blockVar);
//console.log(blockLet);// this will produce error for out of scope 

function show(){
    var functionVar = "sono functionVar una var con ambito di blocco";
    let functionLet = "sono functionLet una let con ambito di blocco";
    const functionConst = "sono fuctionConst una const con ambito di blocco";

    //those produce correct output
    console.log(functionVar);
    console.log(functionVar);
    console.log(functionVar);

}
show();

//in questo caso anche la variabile non sara visibile all'esterno
//var infatti e' interna alla funzione 
//quindi il suo scope sara globale all'interno di essa

//  console.log(functionVar); //genera reference error
//  console.log(functionLet); //genera reference error
//  console.log(functionConst); //genera reference error
