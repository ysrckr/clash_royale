import Head from 'next/head'
import Title from './Title'
import NavBar from './NavBar'
const Header = () => {
	return (
		<>
			<Head>
				<title>Clash Royale</title>
				<meta name="description" content="Clash Royale" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="bg-blue-600 p-4">
				<div className="container mx-auto flex justify-between items-center">
					<Title />
					<NavBar />
				</div>
			</header>
		</>
	)
}
export default Header
