//Codigos js - desestruturação simples e em parametros

// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
//    };


//    const {nome , endereco: {cidade , estado}} = empresa
   
//    console.log(nome)
//    console.log(cidade)
//    console.log(estado)


const usuario = {
    nome: 'Victor',
    idade: 22
}

   function mostraInfo({nome , idade}) {
    return `${nome} tem ${idade} anos.`
   }


   console.log(mostraInfo(usuario))
   
   

