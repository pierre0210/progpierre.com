import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from './index.module.css'

const Home: NextPage = () => {
	return (
		<>
			<NavBar/>
			<div className={styles.Home}>
				<h1 className="text-3xl">Hi there</h1>
				<hr className="w-80 bg-white"/>
				<p>Just some notes about what I&#39;m working on.</p>
			</div>
		</>
	)
}

export default Home
