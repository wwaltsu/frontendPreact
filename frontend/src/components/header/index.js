import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'

const Header = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">
				Home
			</Link>
			<Link activeClassName={style.active} href="/target">
				Targets
			</Link>
			<Link activeClassName={style.active} href="/goal">
				Goals
			</Link>
		</nav>
	</header>
)

export default Header
