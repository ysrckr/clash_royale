import { useState } from 'react'
const SelectButton = ({ flag, clickHandler, clickButton }) => {
	return (
		<>
			<span
				className={`${
					clickButton ? 'bg-blue-800' : 'bg-blue-400'
				} m-4 p-2 rounded-lg text-center text-white`}
				onClick={clickHandler}
			>
				Search By {flag} Tag
			</span>
		</>
	)
}
export default SelectButton
