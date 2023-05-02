import { h } from 'preact'
import { Router, Route } from 'preact-router'
import Goal from './goals/Goals'
import Event from './events/Events'
import Header from './header'


import Home from '../routes/home'

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Home path="/" />
				<Route path="/event" component={Event} />
				<Route path="/goal" component={Goal} />
			</Router>
		</main>
	</div>
)

export default App