import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import SearchUser from '@comps/SearchUser'
import UserProfile from '@comps/UserProfile'
import ClanProfile from '@comps/ClanProfile'
import SelectButton from '@comps/layout/SelectButton'
import SearchClan from '@comps/SearchClan'

export default function Home() {
	const [searchTerm, setSearchTerm] = useState('')
	const [searchIn, setSearchIn] = useState('users')
	const [clickPlayerButton, setPlayerClickButton] = useState(true)
	const [clickClanButton, setClanClickButton] = useState(false)
	const [user, setUser] = useState(null)
	const [clan, setClan] = useState(null)
	const clickPlayerHandler = () => {
		if (clickPlayerButton) {
			return
		}
		setClanClickButton(false)
		setPlayerClickButton(true)
		setSearchIn('users')
		setClan(null)
	}
	const clickClanHandler = () => {
		if (clickClanButton) {
			return
		}
		setPlayerClickButton(false)
		setClanClickButton(true)
		setSearchIn('clans')
		setUser(null)
	}
	const setSearch = e => {
		setSearchTerm(e.target.value)
	}
	const submitSearch = async e => {
		e.preventDefault()
		if (searchTerm !== '') {
			const res = await axios.get(
				`api/v1/${searchIn}/${
					searchTerm.includes('#')
						? encodeURIComponent(searchTerm.toUpperCase())
						: `%23${searchTerm.toUpperCase()}`
				}`
			)
			const data = await res.data
			if (searchIn === 'users') {
				setUser(data)
			} else {
				setClan(data)
			}
			if (res.status == 200) {
				setSearchTerm('')
			}
		}
	}
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="container mx-auto">
				<div className="container mx-auto flex justify-between align-center my-3">
					<SelectButton
						flag="Player"
						clickButton={clickPlayerButton}
						clickHandler={clickPlayerHandler}
					/>
					<SelectButton
						flag="Clan"
						clickButton={clickClanButton}
						clickHandler={clickClanHandler}
					/>
				</div>

				<div className="m-16">
					{clickPlayerButton ? (
						<SearchUser
							submitSearch={submitSearch}
							setSearch={setSearch}
							searchTerm={searchTerm}
						/>
					) : (
						<SearchClan
							submitSearch={submitSearch}
							setSearch={setSearch}
							searchTerm={searchTerm}
						/>
					)}
				</div>
				<div className="m-16">
					{user !== null && <UserProfile name={user.name} />}
					{clan !== null && <ClanProfile name={clan.name} />}
				</div>
			</main>
		</>
	)
}
