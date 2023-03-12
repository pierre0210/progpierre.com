import { NextPage } from 'next';
import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import ProjectContainer from '../components/ProjectContainer';
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
					<ProjectContainer title="NovelAI Discord Bot" url="https://github.com/pierre0210/NovelAI-bot" languages={["typescript"]} />
					<ProjectContainer title="Sauce Discord Bot" url="https://github.com/pierre0210/Sauce-bot" languages={["typescript"]} />
					<ProjectContainer title="Logger Discord Bot" url="https://github.com/pierre0210/Logger-Bot" languages={["csharp"]} />
				</div>
			</div>
		</>
	);
};

export default Project;