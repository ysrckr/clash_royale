const ClanProfile = ({ name }) => {
	return (
		<div className="container mx-auto text-center flex flex-col gap-3">
			<h1 className="text-3xl text-blue-600 font-bold">Clan Profile</h1>
			<h3>
				<span className="text-lg font-semibold">Clan Name: </span>
				{name}
			</h3>
		</div>
	)
}
export default ClanProfile
