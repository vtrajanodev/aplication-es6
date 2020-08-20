// codigos js - operações com arrays, rest - spread

// function soma(a , ...params ){
//     return arr = [a, ...params].reduce((total , next) => {
//         return total + next
//     })


// }

// console.log(soma(1, 3))

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };


   const usuario2  = {

       ...usuario , 
        nome: 'Gabriel' 

       
   }

   console.log(usuario2)

   const usuario3 = {
       ...usuario , 
       endereco: {
           ...usuario.endereco,
           cidade: 'Lontras'
       }
       
   }

   console.log(usuario3)

   const name = 'Diego';
    const age = 23;

console.log(`O usuário ${name} possui ${age} anos`)


const id = 'Diego';
const howold = 23;

const username = {
  id,
  howold,
 cidade: 'Rio do Sul',
};

console.log(username)
   





