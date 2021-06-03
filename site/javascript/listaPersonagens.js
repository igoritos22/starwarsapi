    var conteudo = document.querySelector('#conteudoDaBusca');
    var cont = document.getElementById("conteudoDaBusca")
    
 

    function trazerTudo(){
        fetch("https://swapi.dev/api/people")
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            for (const key in data.results){
                console.log(data.results[key]);
            cont.innerHTML +=`
                <label class="list-group-item">
                    <input class="form-check-input me-1" type="checkbox" value="">${data.results[key].name}, Nascimento: ${data.results[key].birth_year}
                </label>
            `
        }

        })
        .catch(e => {
            console.log("erro")
        })
    }

    


           