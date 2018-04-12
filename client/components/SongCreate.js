//--------------------------------------- Global Imports --
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { fetchSongs } from '../queries/queries'


//-------------------------------------------- Mutations --
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`


//--------------------------------- SongCreate Component --
class SongCreate extends Component {
  constructor(props) {
    super(props)

    this.state = { title: '' }

  }

  async onSubmit (event) {
    event.preventDefault()

    try {
      await this.props.mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query: fetchSongs }],
      })

      hashHistory.push('/')
    } catch (error) {}
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={e => this.onSubmit(e)}>
          <label>Song Title:</label>
          <input
            onChange={e => this.setState({title: e.target.value})}
            value={this.state.title}
          />
        </form>
      </div>
    )
  }
}


//------------------------------------ Export SongCreate --
export default graphql(mutation)(SongCreate)
