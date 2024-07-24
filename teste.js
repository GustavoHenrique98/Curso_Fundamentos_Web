

// class Caneta {
    
//     //Atributos da classe
//     nome;
//     ponta;
//     tampada;
//     //Método construtor para passarmos os valores por parâmetros na hora de instanciar a classe.
//     constructor(nome,ponta,tampada){
//        this.nome = nome; 
//        this.ponta = ponta;
//        this.tampada  = tampada;
//      }
//      rabiscar(){
//           if(this.tampada === true){
//                 console.log("A caneta está tampada, não pode rabiscar");
//           }else{
//                 console.log("A caneta está rabiscando");
//            }
//       }

//       tampar(){
//            this.tampada = true;
//       }

//       destampar(){
//            this.tampada = false;
//       }

// }


// // Criando uma caneta a partir da classe caneta

// const caneta1 = new Caneta("Bic",1.3,true);

// /*Tentando rabiscar com a caneta tampada  utilizando o método rabiscar  */
// caneta1.rabiscar();

// /* Tentando rabiscar com a caneta após destampar com o método destampar*/
// caneta1.destampar()

// /* Rabiscando após destampar a caneta */
// caneta1.rabiscar();

function line(){
    console.log("---------------------------------------------------------------------------------------------")
}

let pessoa1 = {
    nome:"Gustavo",
    sobreNome:"Henrique"
}


 
pessoa2.nome = "heveny";

console.table(pessoa1);

line();

console.table(pessoa2);


