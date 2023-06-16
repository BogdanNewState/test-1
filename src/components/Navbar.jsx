import PropTypes from 'prop-types'

const Navbar = ({ home, hub }) => {
	return (
		<nav className='flex justify-between gap-1 w-2/5 items-center mx-auto py-3'>
			<button
				className='text-md font-bold border-2 text-gray-100 bg-red-400 rounded-lg p-2 cursor-pointer'
				onClick={home}
			>
				Home
			</button>
			<button
				className='font-bold border-2 text-gray-100 bg-blue-400 rounded-lg p-2 cursor-pointer'
				onClick={hub}
			>
				Hub
			</button>
		</nav>
	)
}

Navbar.propTypes = {
	home: PropTypes.func.isRequired,
	hub: PropTypes.func.isRequired,
}

export default Navbar
