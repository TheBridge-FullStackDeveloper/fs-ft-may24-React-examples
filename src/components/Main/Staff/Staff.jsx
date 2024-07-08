import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PokemonCard from "./PokemonCard";

const Staff = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await resp.json(); 
      // Simulamos un retardo de 2 segundos
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      setPokemons(data.results); // array en clave results
    };
    getPokemons();
  }, []);

  const paintPokemons = () => {
    return pokemons.map((pokemon, index) => <PokemonCard key={uuidv4()} pokemon={pokemon} />);
  };

  return <section>
    {pokemons.length!=0?paintPokemons():<p>Cargando...</p>}
  </section>;
};

export default Staff;
