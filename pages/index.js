import axios from 'axios'
import Header from '@comps/layout/Header'
import SearchUser from '@comps/SearchUser'
import UserProfile from '@comps/UserProfile'
import ClanProfile from '@comps/ClanProfile'
import SelectButton from '@comps/layout/SelectButton'
import SearchClan from '@comps/SearchClan'
import searchStore from 'stores/SearchStore'
import { observer } from 'mobx-react'

function Home() {
	const { user, clan, search } = searchStore
	const submitSearch = async e => {
		e.preventDefault()
		if (search.term !== '') {
			const res = await axios.get(
				`api/v1/${search.in}/${
					search.term.includes('#')
						? encodeURIComponent(search.term.toUpperCase())
						: `%23${search.term.toUpperCase()}`
				}`
			)
			const data = await res.data
			if (search.in === 'users') {
				user.setSelf(data)
				clan.setSelf(null)
			} else {
				clan.setSelf(data)
				user.setSelf(null)
			}
			if (res.status == 200) {
				search.setTerm('')
			}
		}
	}
	return (
		<>
			<Header />
			<main className="container mx-auto">
				<div className="container mx-auto flex justify-between align-center my-3">
					<SelectButton
						flag="Player"
						clickButton={user.button}
						clickHandler={user.clickHandler}
					/>
					<SelectButton
						flag="Clan"
						clickButton={clan.button}
						clickHandler={clan.clickHandler}
					/>
				</div>

				<div className="m-16">
					{user.button ? (
						<SearchUser
							submitSearch={submitSearch}
							setSearch={search.set}
							searchTerm={search.term}
						/>
					) : (
						<SearchClan
							submitSearch={submitSearch}
							setSearch={search.set}
							searchTerm={search.term}
						/>
					)}
				</div>
				<div className="m-16">
					{user.self !== null && <UserProfile />}
					{clan.self !== null && <ClanProfile />}
				</div>
			</main>
		</>
	)
}
export default observer(Home)
