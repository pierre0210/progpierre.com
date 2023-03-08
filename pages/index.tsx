import type { NextPage } from 'next';
import { Info } from '../components/Info';
import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import styles from './index.module.css';

const Home: NextPage = () => {
	return (
		<>
			<Meta
				title="Pierre"
				thumbnail="https://i.imgur.com/17InHzQ.jpg"
				description="I'm an undergrad student interested in CTF, backend development and computer vision. Welcome to my website!"
				themeColor="#02061c"
			/>
			<NavBar />
			<div className={styles.Home}>
				<h1 className="text-4xl font-extrabold tracking-wider">Hello</h1>
				<hr className="w-72 bg-white" />
				<p className="mt-2.5 text-xs">CTF / Backend / Computer vision</p>
				<Info color="white" size={25} />
			</div>
		</>
	);
};

export default Home;
