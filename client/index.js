//--------------------------------------- Global Imports --
import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'


//------------------------------------- Global Variables --
const client = new ApolloClient({})


//--------------------------------------- Root Component --
function Root ()  {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>

  )
}


//-------------------------------------------- RenderDOM --
render (
	<Root />,
	document.querySelector('#root')
)
