//--------------------------------------- Global Imports --
import React, { Component } from 'react'


//--------------------------------- SongCreate Component --
class SongCreate extends Component {
  constructor(props) {
    super(props)

    this.state = { title: '' }
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form>
          <label>Song Title:</label>
          <input
            onChange={({target}) => this.setState({title: event.value})}
            value={this.state.title}
          />
        </form>
      </div>
    )
  }
}


//------------------------------------ Export SongCreate --
export default SongCreate
