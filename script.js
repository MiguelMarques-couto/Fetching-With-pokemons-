async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const card= document.getElementById("card");
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = data.sprites.front_default;
        card.style.display="block";
        imgElement.style.display = "block";

      
        const typeEl = document.getElementById("type");
        const abilityEl = document.getElementById("ability");
        const movesEl = document.getElementById("moves");

       
        const types = data.types.map(t => t.type.name).join(", ");
        typeEl.textContent = "Type: " + types;

        const abilities = data.abilities.map(a => a.ability.name).join(", ");
        abilityEl.textContent = "Abilities: " + abilities;

       
        const moves = data.moves.slice(0, 5).map(m => m.move.name).join(", ");
        movesEl.textContent = "Moves: " + moves;

    } catch (error) {
        console.error(error);
    }
}
