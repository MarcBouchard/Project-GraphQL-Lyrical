//--------------------------------------- Global Imports --
import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'


//------------------------------------ Component Imports --
import SongList from './components/SongList'


//------------------------------------- Global Variables --
const client = new ApolloClient({})


//--------------------------------------- Root Component --
function Root ()  {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>

  )
}


//-------------------------------------------- RenderDOM --
render (
	<Root />,
	document.querySelector('#root')
)
