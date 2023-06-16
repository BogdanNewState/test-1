import PropTypes from 'prop-types'

const Hub = ({ count, arr }) => {
	return (
		<div>
			<h1 className='text-center text-3xl'>Hub</h1>

			<div className={style.count}>
				<span>Count:</span>
				<span>{count}</span>
			</div>

			<ul className={style.ul}>
				{arr.map(item => {
					if (item.like === true) {
						return (
							<li key={item.id} className='border p-2 border-black'>
								<h2 className='text-2xl font-bold'>{item.title}</h2>
							</li>
						)
					}
				})}
			</ul>
		</div>
	)
}

const style = {
	count:
		'text-2xl items-center justify-center text-center p-2 border-2 border-black my-5 flex gap-2',
	ul: 'flex gap-1 flex-col',
}

Hub.propTypes = {
	count: PropTypes.number.isRequired,
	arr: PropTypes.array.isRequired,
}

export default Hub
