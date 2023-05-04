import { h } from 'preact'
import TargetList from './target/TargetList'
import TargetForm from './target/TargetForm'



const App = () => (
	<div id="app">
		<TargetForm />
		<TargetList />
	</div>
)

export default App