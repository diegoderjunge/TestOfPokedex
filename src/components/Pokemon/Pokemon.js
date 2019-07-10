import React, { Fragment } from 'react'
import ReactJson from 'react-json-view'

const Pokemon = ({ match, pokemons }) => {
  const { id } = match.params
  const pokemon = pokemons.find(p => p.id == id)
  return (
    <Fragment>
      <ReactJson src={match} theme="monokai" />
      <ReactJson src={pokemons} theme="monokai" />
      <ReactJson src={pokemon} />
    </Fragment>
  )
}

export default Pokemon
