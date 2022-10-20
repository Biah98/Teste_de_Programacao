
let itemQuant = parseInt(prompt("Digite a quantidade de item consumido: "));
let array_Itens = [];
for (let cont = 0; cont < itemQuant; cont++) {
    let nomeItem = (prompt("Nome do Item: "));
    array_Itens.push(nomeItem);
}


let quantPessoas = parseInt(prompt("Digite a quantidade de pessoas: "));
let array_Pessoas = [];
for (let cont = 0; cont < quantPessoas; cont++) {
    let nomePessoa = (prompt("Nome do Pessoa: "));
    array_Pessoas.push(nomePessoa);
}

console.log(array_Itens);
console.log(array_Pessoas);

/*
function calcItem(){

    //let itemNome = prompt("Digite o nome do item: ");
    //let itemValor = parseFloat(prompt("Digite o valor de "+itemNome+": "));
    //let itemQuant = parseInt(prompt("Digite a quantidade de "+itemNome+" consumido(a): "));
    //let item = itemValor*itemQuant;

    let quantPessoa = parseInt(prompt("Quantas pessoas estão na mesa?"));

    let array_Pessoas = [];
    for (let cont = 0; cont < quantPessoa; cont++) {
        let nomePessoa = (prompt("Nome: "));


        array_Pessoas.push(nomePessoa);
    

    }

    //return item / quantPessoa

    console.log (array_Pessoas);

}*/
/*
do{
     
   
    
    

}while(confirm("Quer acrescentar?"));
*/
//calcItem();
