import pokemon from "./pokemon-data";
import PokemonItem from "./PokemonItem"
import PokemonLineup from "./PokemonLineup"

import React, {useState} from "react";
import './App.css';

function App() {

  const [selected, setSelected] = useState([])
  const [minLevel, setMinLevel] = useState(0)
  const [maxLevel, setMaxLevel] = useState(100)
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("none")

  const togglePokemon = (i) => {

    const inList = selected.filter(s => s == i).length > 0;

    if (inList) {
      setSelected(selected.filter(s => s != i))
    } else {
      if (selected.length == 6) return;

      setSelected(selected.concat([i]))
    }
  }

  const isPokemonToggled = (i) => {
    return selected.filter(s => s == i).length > 0;
  }

  const getTypes = () => {
    const types = {}

    pokemon.forEach(p => {
      types[p.type] = true
    })

    return Object.keys(types)
  }

  const displayPokemon = () => {
    let pokemonToShow = [...pokemon]
    if (filter != "All") {
      pokemonToShow = pokemonToShow.filter(p => p.type == filter)
    }

    pokemonToShow = pokemonToShow.filter(p => p.level >= minLevel && p.level <= maxLevel)

    if (sort != "none") {
      pokemonToShow.sort((a, b) => a[sort] - b[sort])
    } else {
      pokemonToShow.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else {
          return 1
        }
      })
    }

    return pokemonToShow
  }

  return (
      <div className="row" style={{alignItems: "flex-start", justifyContent: "space-between"}}>
        <div className="pokelist">
        <h2>Your Pokemon</h2>
        <p>Click on your Pokemon to toggle them in your lineup!</p>
        <br />
        <div>
          Filter by type
          <select onChange={e => setFilter(e.target.value)}>
            <option value="All">All</option>
            {
              getTypes().map(t => <option value={t}>{t}</option>)
            }
          </select>
        </div>
        <div className="row">
          Filter by level
            <input type="number" value={minLevel} onChange={e => setMinLevel(e.target.value)} />
            <p>To</p>
            <input type="number" value={maxLevel} onChange={e => setMaxLevel(e.target.value)} />
        </div>
        <div>
          Sort by
          <input type="radio" id="none" value="none" name="sort" checked={sort == "none"} onChange={() => setSort("none")} />
          <label for="none">None</label>
          <input type="radio" id="strength" value="strength" name="sort" checked={sort == "strength"}  onChange={() => setSort("strength")}/>
          <label for="strength">Strength</label>
          <input type="radio" id="speed" value="speed" name="sort" checked={sort == "speed"} onChange={() => setSort("speed")}/>
          <label for="speed">Speed</label>
          <input type="radio" id="stamina" value="stamina" name="sort" checked={sort == "stamina"} onChange={() => setSort("stamina")} />
          <label for="stamina">Stamina</label>
        </div>
        <br />
        {
          displayPokemon().map(p => <PokemonItem pokemon={p} toggle={togglePokemon} index={p.id} isSelected={isPokemonToggled(p.id)} />)
        }
        </div>
        <PokemonLineup selected={selected} togglePokemon={togglePokemon} />
      </div>
  );
}

export default App;
