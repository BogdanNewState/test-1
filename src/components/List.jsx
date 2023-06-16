import PropTypes from 'prop-types'

const List = ({ arr, handleLike }) => {
	return (
		<ul className='grid grid-cols-2 gap-3 w-full'>
			{arr.map(item => (
				<li key={item.id} className={style.li}>
					<h2 className='text-2xl font-bold'>{item.title}</h2>
					<div className='flex gap-3 text-2xl'>
						<span>{item.price}</span>
						{item.like ? <span>❤️</span> : <span>♡</span>}
					</div>
					<button onClick={() => handleLike(item.id)} className={style.btn}>
						Like
					</button>
				</li>
			))}
		</ul>
	)
}

const style = {
	btn: 'text-2xl bg-emerald-300 p-2 rounded-lg hover:bg-emerald-400',
	li: 'flex gap-3 flex-col justify-center items-center',
}

List.propTypes = {
	arr: PropTypes.array.isRequired,
	handleLike: PropTypes.func.isRequired,
}

export default List
