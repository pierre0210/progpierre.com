import { NextPage } from 'next';
import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import styles from './about.module.css';
import Languages from '../components/Languages';

const About: NextPage = () => {
	return (
		<>
			<Meta
				title="About | Pierre"
				thumbnail="https://i.imgur.com/17InHzQ.jpg"
				description="About me"
				themeColor="#02061c"
			/>
			<NavBar />
			<div className={styles.About}>
				<h1 className="text-6xl font-bold font-Comfortaa mb-10 text-center md:text-left">About me</h1>
				<p className="font-Roboto-Mono p-1 my-2 mb-5 text-lg lg:w-2/3 md:w-auto sm:text-xl">
					I&apos;m a sophomore student at National Central University, majoring in Biomedical Sciences and Engineering.
					I&apos;m interested in CTF, backend development and computer vision.
				</p>
				<div className="container mx-auto grid grid-cols-3 lg:m-0 lg:w-2/3 md:w-auto md:justify-center md:flex">
					<Languages languages={["javascript", "typescript", "go", "python", "nodejs", "express", "react", "raspberrypi", "arduino", "linux", "git", "docker"]} size={50} />
				</div>
			</div>
		</>
	);
};

export default About;