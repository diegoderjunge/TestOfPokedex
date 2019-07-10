import React from 'react'
import './pokecard.css'
import { Link } from "react-router-dom"

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
// const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

// resource https://tylermcginnis.com/react-router-pass-props-to-components/

const Pokecard = ({ id, name, type, exp, src }) => {

  return (
    <div className="pokecard">

      <h1 className="pokecard-title">{name}</h1>
      <div className="pokecard-image">
        <Link to={`/pokemon/${id}`}>
          <img src={src} alt={name} />
        </Link>
      </div>
      <div className="pokecard-data">Type: {type}</div>
      <div className="pokecard-data">EXP: {exp}</div>
    </div>
  )
}

export default Pokecard