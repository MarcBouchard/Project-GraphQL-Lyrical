//--------------------------------------- Global Imports --
import gql from 'graphql-tag'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'

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

  onSubmit (event) {
    event.preventDefault()

    this.props.mutate({
      variables: {
        title: this.state.title,
      }
    })
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
