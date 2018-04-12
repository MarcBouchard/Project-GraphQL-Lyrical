//--------------------------------------- Global Imports --
import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'


//------------------------------------------------ Query --
const query = gql`{
  songs {
    title
  }

}
`

//----------------------------------- SongList Component --
class SongList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        SongList
      </div>
    )
  }
}

//-------------------------------------- Export Songlist --
export default graphql(query)(SongList)
