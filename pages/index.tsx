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
			<div className="static flex bg-main text-main min-h-[calc(100vh-48px)] items-center justify-center">
				<div className="border-[1px] p-5 shadow-index-sep">
					<h1 className="font-Roboto-Mono text-5xl font-extrabold tracking-wider m-3" id={styles.hello}>Hello</h1>
					<hr className=" w-100 bg-white" />
					<p className="font-Roboto-Mono m-3 text-xs">CTF / Backend / Computer vision</p>
					<Info color="white" size={20} />
				</div>
			</div>
		</>
	);
};

export default Home;
