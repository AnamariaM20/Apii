import React from 'react'
import { useState } from 'react';

const Pokemon = () => {

    //     fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    //     .then(response =>{
    //         if(!response.ok){
    //             throw new Error("the data couldn't fetch")
    //         }
    //         return response.json()
    //     })
    //     .then(data)
    //     .catch(e => console.log(e))
    //   return (
    //     <div>Pokemon</div>
    //   )

    const [pokemonName, setPokemonName] = useState(""); 
    const [pokemonSprite, setPokemonSprite] = useState(""); 

    async function fetchData() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

            if (!response.ok) {
                throw new Error("could not fetch resources")
            }

            const data = await response.json();
            const sprite = data.sprites.front_default //here is the image
            setPokemonSprite(sprite)
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <>
            <h2>Show the Pokemon</h2>
            <input type='text' value={pokemonName} placeholder='enter the pokemon name'
                onChange={(e) => setPokemonName(e.target.value)} />
            <button onClick={fetchData}>Fetch Pokemon</button>

            { <img src={pokemonSprite} alt="Pokemon sprite" />}

        </>

    )
}

export default Pokemon