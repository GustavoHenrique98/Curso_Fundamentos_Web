// 84) Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
// valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
// contendo apenas os dados das pessoas menores de idade.


let nomes = new Array(3);
let idade = new Array(3);
for(let i=0;i<nomes.length;i++){
    nomes[i] = prompt(`Digite o nome da ${i+1}º pessoa`);
    idade[i] = parseInt(prompt(`Digite a idade da ${i+1}º pessoa`));
}


for(let i =0; i < idade.length ;i++){
    if(idade[i]<18){
        console.log(`Nome : ${nomes[i]} |   idade : ${idade[i]} `);
    }
}

