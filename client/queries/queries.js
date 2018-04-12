//--------------------------------------- Global Imports --
import gql from 'graphql-tag'


//---------------------------------------------- Queries --
export const fetchSongs = gql` {
  songs {
    id
    title
  }
}
`

export const getSong = gql`
  query GetSong($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`
