
const countPokemon = async (number)=>{
    let arrPokemon =[];
    let pokemon="";
    for (let i = 1; i <= number ; i++) {
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let data = await pokemon.json();
        arrPokemon.push(data);
    }
    arrPokemon.map(e => {
    pokemon += `
     <div style="display:flex;flex-direction:column;align-items:center; background:white;width:80%;border-radius:30px">
    <h1 class="titulo">${e.name}</h1>
    <img src="${e.sprites.front_default}" alt="${e.name}">
    </div>` 
});
    document.getElementById("conte-pokemon").innerHTML = pokemon;        
}
const mostrar=()=>{
   if (document.getElementById("boton").value=="MOSTRAR POKEMONES") {
     countPokemon(15);
     document.getElementById("boton").value="OCULTAR POKEMONES";
   } else{
    countPokemon(0);
    document.getElementById("boton").value="MOSTRAR POKEMONES";
   }
}
