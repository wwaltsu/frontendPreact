import { h } from 'preact'
import { Router, Route } from 'preact-router'
import Goal from './goals/Goals'
import Target from '../targets/Target'
import Header from './header'


import Home from '../routes/home'

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Home path="/" />
				<Route path="/target" component={Target} />
				<Route path="/goal" component={Goal} />
			</Router>
		</main>
	</div>
)

export default App