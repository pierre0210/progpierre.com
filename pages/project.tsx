import { NextPage } from 'next';
import Link from 'next/link';
import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import styles from './project.module.css';

const Project: NextPage = () => {
	return (
		<>
			<Meta
				title="Project | Pierre"
				thumbnail="https://i.imgur.com/17InHzQ.jpg"
				description="Project page"
				themeColor="#02061c"
			/>
			<NavBar />
			<div className={styles.Project}>
				<div>
					<h1>NovelAI Discord Bot (TypeScript)</h1>
					<Link href='https://github.com/pierre0210/NovelAI-bot'>
						<a>Github repo</a>
					</Link>
					<br></br>
					<br></br>
					<h1>Sauce Discord Bot (TypeScript)</h1>
					<Link href='https://github.com/pierre0210/Sauce-bot'>
						<a>Github repo</a>
					</Link>
					<br></br>
					<br></br>
					<h1>Logger Discord Bot (C#)</h1>
					<Link href='https://github.com/pierre0210/Logger-Bot'>
						<a>Github repo</a>
					</Link>
					<br></br>
					<br></br>
				</div>
			</div>
		</>
	);
};

export default Project;