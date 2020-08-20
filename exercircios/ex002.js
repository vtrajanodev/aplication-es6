//Códigos  operacoes com arrays - map

const usuarios = 
[

{nome: 'Victor' , idade: 23 , empresa: 'home'},
{nome: 'Neto' , idade: 15 , empresa: 'itriad' },
{nome: 'Rodrigo' , idade: 30 , empresa: 'coco'}

]

const idades = usuarios.map( (item => item.idade))

console.log(idades)
