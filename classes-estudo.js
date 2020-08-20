//Classes

class myList{
    constructor(){
        this.lista = []
    }

    addItem(){
        let inputElement = document.querySelector('input')
        let ul = document.querySelector('ul')
        let li = document.createElement('li')
        if(inputElement.value.length === 0){
            alert('[ERRO] Voce deve inserir um dado para continuar')
        }
        
        else
        
        {

            li.innerHTML = `${inputElement.value}` 
            ul.appendChild(li)
            this.lista.push(`${inputElement.value}`)
            inputElement.value  = ''
            inputElement.focus()
            console.log(this.lista)
       
        }
    }
  
}
const add = new myList()


document.querySelector('button')
.addEventListener('click', () => {
    
    add.addItem()
})





//dontpad.com/operacoes-com-array
//dontpad.com/arrow-function
//dontpad.com/desestruturação
//dontpad.com/rest/myrestandspread
//dontpad.com/rs/objectshortsyntax
//dontpad.com/importexport1
//dontpad.com/async-await1
//dontpad.com/axios-async-await

//Object Short Syntax 