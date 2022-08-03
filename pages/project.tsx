import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from './project.module.css'

const Project : NextPage = () => {
	return(
		<>
			<NavBar/>
			<div className={styles.Project}>
				<div>
					<h1>Logger Discord Bot</h1>
					<h2>Features</h2>
					<ul>
						<li>Log Text Messages</li>
						<li>Save deleted Attachments</li>
						<li>Reminder command</li>
					</ul>
					<h2>Requirements</h2>
					<ul>
						<li>.Net 6</li>
						<li>RedisDB</li>
					</ul>
					<Link href='https://github.com/pierre0210/Logger-Bot'>
						<a>Github repo</a>
					</Link>
					<br></br>
					<br></br>
					<Image
						src="https://i.imgur.com/NNcdZc6.png"
						alt="Picture of the logger bot"
						width={508}
						height={633}
						layout="intrinsic"
					/>
				</div>
				<div>
					<h1>More projects coming soon...</h1>
				</div>
			</div>
		</>
	)
}

export default Project;