//Codigos  classes
class Usuario{
    constructor(){
        this.usuario = 'Usuário'
        this.email = 'email@teste.com'
        this.senha = 'senha123'
    }

    isAdmin(){
        return 'Não' 
    }
}

class Admin{
    constructor(){
        this.adm = 'ADM'
        this.email1 = 'emailteste@hot'
        this.senha = 'senhateste0312'
    }

    isAdmin(){
        return 'Sim'
    }



}

const user = new Usuario()
const adm = new Admin()

console.log(`${user.usuario} = Email: ${user.email} , Senha: ${user.senha} , Admin ? ${user.isAdmin()}`)
console.log(`${adm.adm} = Email: ${adm.email1} , Senha: ${adm.senha} , ${adm.isAdmin()}`)
