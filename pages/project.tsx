import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import styles from './project.module.css';

const Project : NextPage = () => {
	return(
		<>
			<Head>
				<title>Project</title>
				<link rel="image_src" href="https://i.imgur.com/y4qM2y1.png"/>
				<meta name="description" content="Project page for progpierre.com" />
			</Head>
			<NavBar/>
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