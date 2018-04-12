//--------------------------------------- Global Imports --
import gql from 'graphql-tag'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'

//------------------------------------------------ Query --
const query = gql`{
  songs {
    id
    title
  }

}
`

//----------------------------------- SongList Component --
class SongList extends Component {
  renderSongs () {
    return this.props.data.songs.map(({ id, title }) => {
      return <li key={id} className="collection-item">
        {title}
        </li>
    })
  }

  render() {
    if (this.props.data.loading) return <div>Loading...</div>

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}


//-------------------------------------- Export Songlist --
export default graphql(query)(SongList)
