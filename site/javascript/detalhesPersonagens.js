const id = document.querySelector("#id")

const showData = (result)=> {
    for (const campo in result){
        if (document.querySelector("#"+campo))
        document.querySelector("#"+campo).value = result[campo];
        console.log(campo);
    }
}

id.addEventListener("blur", (e)=>{
    let id_busca = id.value;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    
    fetch(`https://swapi.dev/api/people/${id_busca}`, options)
    .then((response)=>{response.json()
        .then(data => showData(data))
    })
    .catch(e => console.log('Deu erro'))
})
