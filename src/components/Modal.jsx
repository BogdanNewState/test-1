import PropTypes from 'prop-types'

const Modal = ({ count }) => {
	return (
		<div className=' max-w-[150px] h-[120px] bg-emerald-500 rounded-lg flex justify-center items-center text-gray-100 text-lg font-semibold'>
			count: {count}
		</div>
	)
}

Modal.propTypes = {
	count: PropTypes.number.isRequired,
}

export default Modal
