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
