import React from "react";
import "./App.css";

export default function PokemonItem({ pokemon, toggle, index, isSelected }) {

	const outerSquare = isSelected ? "square selected" : "square";

	console.log(outerSquare)
	return (
		<div className={outerSquare} onClick={() => toggle(index)}>
			<div className="row" >
				<img className="poke" src={pokemon.picture} />
				<div>
					<div className="row-far">
						<h2>{pokemon.name}</h2>
						<p>{pokemon.type}</p>
					</div>
					<p>Level {pokemon.level}</p>
					<div className="row">
						<p>Speed: <span style={{fontWeight: "bold"}}>{pokemon.speed}</span> Strength: <span style={{fontWeight: "bold"}}>{pokemon.strength}</span> Stamina: <span style={{fontWeight: "bold"}}>{pokemon.stamina}</span></p>
					</div>
				</div>
			</div>
		</div>
	)
}