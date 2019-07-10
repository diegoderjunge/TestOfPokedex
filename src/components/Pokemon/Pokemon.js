import React, { Fragment } from 'react'
import './pokemon.css'
import teamRocket from './../../assets/teamRocket.gif'
import ReactJson from 'react-json-view'
import Layout from './../Layout/Layout'
import Pokecard from './../Pokecard/Pokecard'

const Pokemon = ({ match, pokemons }) => {
  debugger
  const { id } = match.params
  const pokemon = pokemons.find(p => p.id == id)
  return (
    <Layout>
                <div className="row">
                    <div className="col-lg-12">
                    <Pokecard {...pokemon} />
                    </div>
                </div>
            </Layout>
  )
}

export default Pokemon