import api from './api'


class App{
    constructor(){
        this.repositories = []
        
        this.formElement = document.querySelector('#repo-form')
        this.inputElement = document.querySelector('input[name=repository]')
        this.listlElement = document.querySelector('#repo-list')


        this.registerHandles()
    }

    registerHandles(){  
        this.formElement.onsubmit =  event => this.addRepositories(event)
    }

    setLoading(loading = true){
        if(loading == true){
            let loadingElement = document.createElement('span')
            loadingElement.appendChild(document.createTextNode( 'CARREGANDO...'))
            loadingElement.setAttribute('id' , 'loading')

            this.formElement.appendChild(loadingElement)
        }
        else
        {
            document.getElementById('loading').remove()

        }

    }


    async addRepositories(){
       
        event.preventDefault()

        const repoInput = this.inputElement.value

        if(repoInput.length === 0){
                alert('[ERRO] Você deve inserir valores para continuar')
        }
            
       
       
        else{

            this.setLoading()

            try 
            {
                const response =  await api.get(`/repos/${repoInput}`)
                const {name , description , html_url , owner: { avatar_url} } = response.data
    
                this.repositories.push({
                name: name,
                description: description ,
                avatar_url: avatar_url ,
                html_url: html_url, 
                
                })

                this.inputElement.value = ''
    
                this.render()
            }
            catch(err)
            {
                alert(["USUÁRIO NÃO EXISTE"])
            }

            this.setLoading(false)
            

        }

        
    }

    render(){
        this.listlElement.innerHTML = ''
        this.repositories.forEach(repo => {

            let imgElement = document.createElement('img')
            imgElement.setAttribute('src' , repo.avatar_url)

            let titleElement = document.createElement('strong')
            titleElement.appendChild(document.createTextNode(repo.name))

            let descriptionElement = document.createElement('p')
            descriptionElement.appendChild(document.createTextNode(repo.description))

            let linkElement = document.createElement('a')
            linkElement.setAttribute('href' , repo.html_url)
            linkElement.setAttribute('target' , '_blank' )
            linkElement.appendChild(document.createTextNode('Acessar'))

            let listItemElement = document.createElement('li')
            listItemElement.appendChild(imgElement)
            listItemElement.appendChild(titleElement)
            listItemElement.appendChild(descriptionElement)
            listItemElement.appendChild(linkElement)

            this.listlElement.appendChild(listItemElement)

            console.log(this.repositories)

        })
    }
    
}

const myApp = new App
