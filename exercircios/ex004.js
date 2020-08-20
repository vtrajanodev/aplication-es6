// relembrando promises com o axios - arrow function

axios.get('https://api.github.com/users/netopapa')

.then((response) => {
    
    alert(response.status)
    let resp = response.data
    let resp1 = JSON.stringify(resp)

    return document.write(resp1)
})

.catch((reject) => {
    return console.log(reject.status)
})






