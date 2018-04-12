//--------------------------------------- Global Imports --
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

//-------------------------------------------- Mutations --
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;


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
