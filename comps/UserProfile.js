const UserProfile = ({ name }) => {
	return (
		<div className="container mx-auto text-center flex flex-col gap-3">
			<h1 className="text-3xl text-blue-600 font-bold">User Profile</h1>
			<h3>
				<span className="text-lg font-semibold">Username: </span>
				{name}
			</h3>
		</div>
	)
}
export default UserProfile
