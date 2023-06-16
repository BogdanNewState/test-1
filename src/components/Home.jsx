import PropTypes from 'prop-types'
import List from './List'

const Home = ({ inc, dec, arr, handleLike }) => {
	return (
		<div>
			<h1 className={style.h1}>Home</h1>

			<div className={style.buttons}>
				<button className={style.btnRed} onClick={inc}>
					Increment
				</button>
				<button className={style.btnBlue} onClick={dec}>
					Decrement
				</button>
			</div>
			<List arr={arr} handleLike={handleLike} />
		</div>
	)
}

const style = {
	h1: 'text-center text-lg mb-3',
	buttons: 'w-full flex gap-1 justify-evenly mb-10',
	btnBlue:
		'text-md font-bold border-2 text-gray-100 bg-blue-400 rounded-lg p-2',
	btnRed: 'text-md font-bold border-2 text-gray-100 bg-red-400 rounded-lg p-2',
}

Home.propTypes = {
	inc: PropTypes.func.isRequired,
	dec: PropTypes.func.isRequired,
	toggle: PropTypes.func.isRequired,
	arr: PropTypes.array.isRequired,
	handleLike: PropTypes.func.isRequired,
}

export default Home
