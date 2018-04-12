//--------------------------------------- Global Imports --
import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'


//------------------------------------ Component Imports --
import App from './components/App'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'


//------------------------------------- Global Variables --
const client = new ApolloClient({})


//--------------------------------------- Root Component --
function Root ()  {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SongList} />
          <Route path='songs/new' component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>

  )
}


//-------------------------------------------- RenderDOM --
render (
	<Root />,
	document.querySelector('#root')
)
