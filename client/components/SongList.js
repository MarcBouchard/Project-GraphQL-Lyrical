//--------------------------------------- Global Imports --
import gql from 'graphql-tag'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'


//---------------------------------------------- Queries --
import { fetchSongs } from '../queries/queries'
import { deleteSong } from '../queries/mutations'


//----------------------------------- SongList Component --
class SongList extends Component {
  async onSongDelete (id) {
    await this.props.mutate({ variables: { id } })

    this.props.data.refetch()
  }

  renderSongs () {
    return this.props.data.songs.map(({ id, title }) => {
      return (<li key={id} className="collection-item">
          <Link to={`/songs/${id}`} >
            {title}
          </Link>
          <i
            className="material-icons"
            onClick={() => this.onSongDelete(id)}
          >
            delete
          </i>
        </li>
      )
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


//-------------------------------------- Export SongList --
export default graphql(deleteSong)(
  graphql(fetchSongs)(SongList)
)
