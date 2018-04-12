//--------------------------------------- Global Imports --
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'

//------------------------------------- Relative Imports --
import { getSong } from '../queries/queries'


//--------------------------------- SongDetail Component --
class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data

    if (loading)
      return <div>Loading...</div>

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
      </div>
    )
  }
}


export default graphql(getSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetail)
