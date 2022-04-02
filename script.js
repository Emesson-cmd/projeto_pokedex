// API Rest
var quantidade = document.getElementById("quantidade");

quantidade.addEventListener('keyup', ()=>{
    pegarPokemons(quantidade.value);
})

quantidade.addEventListener('change', ()=>{
    pegarPokemons(quantidade.value);
})

pegarPokemons(3);
function pegarPokemons(quantidade){

fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
.then(response => response.json())
.then(allpokemon => {
    
    var pokemons = [];

    allpokemon.results.map(function(val){

        fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle => {
            pokemons.push(
                {
                    nome: val.name,
                    imagem: pokemonSingle.sprites.front_default
                }
            );

            if (pokemons.length == quantidade){

                //console.log (pokemons);
                pokemons.map(function(val){
                    var pokemonBoxes = document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML = "";

                    pokemons.map(function(val){
                        pokemonBoxes.innerHTML += `
                        
                            <div class="pokemon-box">
                                <img src="`+val.imagem+`" alt="Imagem Pokemon">
                                <p>`+val.nome+`</p>
                            </div>                        
                        
                        `;
                    })
                })
            }
        });
    });

    pokemons.map((val)=>{
        console.log(val.nome)
    });
});

}