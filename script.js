document.getElementById('searchButton').addEventListener('click', async () => {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase().trim();
    if (!pokemonName) {
        alert("Por favor, ingresa el nombre del Pokémon.");
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) throw new Error("Pokémon no encontrado");

        const data = await response.json();
        
        // URL base para las imágenes
        const imageBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

        // Actualizar la interfaz
        document.getElementById('pokemonNameDisplay').textContent = `Nombre: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`;
        document.getElementById('pokemonId').textContent = `ID: ${data.id}`;
        document.getElementById('pokemonHeight').textContent = `Altura: ${data.height / 10} m`;
        document.getElementById('pokemonWeight').textContent = `Peso: ${data.weight / 10} kg`;
        document.getElementById('pokemonTypes').textContent = `Tipo(s): ${data.types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)).join(', ')}`;
        document.getElementById('pokemonImage').src = `${imageBaseUrl}${data.id}.png`;

    } catch (error) {
        alert(error.message);
    }
});


