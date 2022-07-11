class CustomFunctions {
	constructor() {}

	static capitalize(str) {
		const lower = str.toLowerCase()
		return str.charAt(0).toUpperCase() + lower.slice(1)
	}
	static toTitleCase(str) {
		const lower = str.toLowerCase()
		return lower
			.toLowerCase()
			.split(' ')
			.map(ltr => {
				return ltr.charAt(0).toUpperCase() + ltr.substring(1)
			})
			.join(' ')
	}
}
export default CustomFunctions
