import searchStore from 'stores/SearchStore'
import { observer } from 'mobx-react'
import CustomFunctions from '../classes/CustomFunctions'
const UserProfile = () => {
	const { name, expLevel, trophies, role, clan, totalDonations } =
		searchStore.user.self
	const { capitalize } = CustomFunctions
	return (
		<div className="container mx-auto text-center flex flex-col gap-3 dark:text-white">
			<h1 className="text-3xl text-blue-600 font-bold dark:text-blue-200">
				User Profile
			</h1>
			<h3>
				<span className="text-lg font-semibold">Username: </span>
				{name}
			</h3>
			<p>
				<span>Experience Level: </span>
				{expLevel}
			</p>
			<p>
				<span>Trophies: </span>
				{trophies}
			</p>
			<p>
				<span>Role: </span>
				{capitalize(role)}
			</p>
			<p>
				<span>Clan: </span>
				{clan.name}
			</p>
			<p>
				<span>Total Donations: </span>
				{totalDonations}
			</p>
		</div>
	)
}
export default observer(UserProfile)
