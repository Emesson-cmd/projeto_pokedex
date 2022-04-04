<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Pokedéx</title>
</head>
<body>

    <div class="main">
        <h2>Pokedéx</h2>

        <div class="escolher-quantidade">
            <label for="quantidade">Escolher quantidade de pokemons para vizualizar:</label><br>
            <input id="quantidade" type="number" step="1" name="quantidade" placeholder="Digite um valor">
        </div>

        <div class="pokemon-boxes">
            
            <!--
            <div class="pokemon-box">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Imagem Pokemon">
                <p>Ditto</p>
            </div>
            -->

        </div>
    </div>

    <div class="espera">
        <div class="rodando"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
