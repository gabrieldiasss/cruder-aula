import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Post from './pages/Post/post'
import Edit from './pages/Edit/edit'
import Lermais from './pages/LerMais/lermais'
import Feed from './pages/Feed/feed'

function App() {
	
	return(
		<Router>
			<Switch>
				<Route exact path="/" component={Feed} />
				<Route path="/post" component={Post} />
				<Route path="/edit/:id" component={Edit} />
				<Route path="/lermais/:id" component={Lermais} />
			</Switch>
		</Router>
	)
	
}

export default App;
