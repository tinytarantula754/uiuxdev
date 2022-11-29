import pokemon from "./pokemon-data";
import PokemonItem from "./PokemonItem"

import React, {useState} from "react";
import './App.css';

export default function PokemonLineup({ selected, togglePokemon }) {

	const summary = (attr) => {

	    let total = 0
	    let min = null
	    let minI = 0
	    let max = null
	    let maxI = 0

	    selected.forEach(s => {
	      total += pokemon[s][attr]

	      if (min == null || pokemon[s][attr] < min) {
	        min = pokemon[s][attr]
	        minI = s
	      }

	      if (max == null || pokemon[s][attr] > max) {
	        max = pokemon[s][attr]
	        maxI = s
	      }

	    })

	    return {
	      "avg": total / pokemon.length,
	      "min": pokemon[minI],
	      "max": pokemon[maxI]
	    }

	  }

	 const speed = summary("speed")
	 const strength = summary("strength")
	 const stamina = summary("stamina")

	return (
		<div className="pokelist">
          <h2>Your Lineup ({selected.length}/6)</h2>
          <p>Click on Pokemon in your lineup to remove them!</p>
          <br />
          <div className="row">
            {
              selected.map(i =>  
                <div className="circle" onClick={() => togglePokemon(i)} >
                  <img className="poke-circle" src={pokemon[i].picture} />
                </div>
              )
            }
          </div>
          <br />
          <br />
          {selected.length > 0 && 
            <div>
              <p>Average strength: <span style={{fontWeight: "bold"}}>{Math.round(100 * strength.avg) / 100}</span> Min: <span style={{fontWeight: "bold"}}>{strength.min.name}</span> Max: <span style={{fontWeight: "bold"}}>{strength.max.name}</span></p>
              <p>Average speed: <span style={{fontWeight: "bold"}}>{Math.round(100 * speed.avg) / 100}</span> Min: <span style={{fontWeight: "bold"}}>{speed.min.name}</span> Max: <span style={{fontWeight: "bold"}}>{speed.max.name}</span></p>
              <p>Average stamina: <span style={{fontWeight: "bold"}}>{Math.round(100 * stamina.avg) / 100}</span> Min: <span style={{fontWeight: "bold"}}>{stamina.min.name}</span> Max: <span style={{fontWeight: "bold"}}>{stamina.max.name}</span></p>
            </div>
          }
        </div>
    )
}