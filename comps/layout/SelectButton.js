import { useState } from 'react'
const SelectButton = ({ flag }) => {
	const [clickButton, setClickButton] = useState(false)
	const clickHandler = () => {
		setClickButton(!clickButton)
	}
	return (
		<>
			<span
				className={`bg-blue-400 m-4 p-2 rounded-lg text-center text-white`}
				onClick={clickHandler}
			>
				Search By {flag} Tag
			</span>
		</>
	)
}
export default SelectButton
