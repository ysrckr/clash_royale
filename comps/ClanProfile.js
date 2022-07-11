import searchStore from 'stores/SearchStore'
import { observer } from 'mobx-react'
const ClanProfile = () => {
	const {
		name,
		description,
		location,
		clanScore,
		clanWarTrophies,
		requiredTrophies,
		donationsPerWeek,
		members,
	} = searchStore.clan.self
	return (
		<>
			<div className="container mx-auto text-center flex flex-col gap-3 dark:text-white">
				<h1 className="text-3xl text-blue-600 font-bold dark:text-white">
					Clan Profile
				</h1>
				<h3 className="text-lg dark:text-white">
					<span className="text-2xl font-semibold dark:text-gray-300">Clan Name: </span>
					{name}
				</h3>
				<p className="leading-relaxed dark:text-white">
					<span className="text-xl font-bold text-blue-800 dark:text-blue-300">
						Description:{' '}
					</span>
					{description}
				</p>
				<p className="text-lg font-medium dark:text-white">
					<span className="font-bold italic text-blue-900 dark:text-blue-300">
						Country of Origin:{' '}
					</span>
					{location.name.toUpperCase()}
				</p>
			</div>
			<div className="container mx-auto grid grid-cols-1 justify-center text-center my-4 gap-2 dark:text-white">
				<p>
					<span className="text-lg font-semibold text-blue-500">
						Clan Score:{' '}
					</span>
					{clanScore}
				</p>

				<p>
					<span className="text-lg font-semibold text-blue-500">
						Clan War Trophies:{' '}
					</span>
					{clanWarTrophies}
				</p>
				<p>
					<span className="text-lg font-semibold text-blue-500">
						Required Trophies To Join:{' '}
					</span>
					{requiredTrophies}
				</p>
				<p>
					<span className="text-lg font-semibold text-blue-500">
						Total Donations Per Week:{' '}
					</span>
					{donationsPerWeek}
				</p>
				<p>
					<span className="text-lg font-semibold text-blue-500">
						Total Members:{' '}
					</span>
					{members}/50
				</p>
			</div>
		</>
	)
}
export default observer(ClanProfile)
