import { useEffect, useState } from 'react'

import Home from './components/Home'
import Hub from './components/Hub'
import Navbar from './components/Navbar'

import { data } from './data.js'

const App = () => {
	const [toggle, setToggle] = useState({
		home: true,
		hub: false,
		count: 0,
	})
	const [arr, setArr] = useState([])

	useEffect(() => {
		setArr(data)
	}, [])

	const toggleChange = {
		home: () => {
			setToggle({ ...toggle, home: true, hub: false })
		},
		hub: () => {
			setToggle({ ...toggle, home: false, hub: true })
		},
	}

	const counter = {
		inc: () => {
			setToggle({ ...toggle, count: toggle.count + 1 })
		},
		dec: () => {
			setToggle({ ...toggle, count: toggle.count - 1 })
		},
	}

	const handleLike = id => {
		const newArr = arr.map(item => {
			if (item.id === id) {
				return { ...item, like: !item.like }
			}
			return item
		})
		setArr(newArr)
	}

	return (
		<div className={style.container}>
			<Navbar home={toggleChange.home} hub={toggleChange.hub} />

			{toggle.home && (
				<Home
					count={toggle.count}
					inc={counter.inc}
					dec={counter.dec}
					toggle={toggle}
					arr={arr}
					handleLike={handleLike}
				/>
			)}
			{toggle.hub && <Hub count={toggle.count} arr={arr} />}
		</div>
	)
}

const style = {
	container: 'w-full px-4 mx-auto',
}

export default App
