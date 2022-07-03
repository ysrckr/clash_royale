const SearchUser = ({ submitSearch, setSearch }) => {
	return (
		<>
			<form onSubmit={submitSearch} className="grid col-span-1">
				<input
					className="w-full p-4 text-center border-2 border-blue-200 rounded-lg"
					onChange={setSearch}
					type="text"
					name="search"
					id="search"
					placeholder="Search Users by Tag"
				/>
				<button
					className="mx-4 my-3 bg-blue-400 text-white px-2 py-1 rounded"
					type="submit"
				>
					Search
				</button>
			</form>
		</>
	)
}
export default SearchUser
