import { NextPage } from 'next';
import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import ProjectContainer from '../components/ProjectContainer';

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
			<div className="bg-main text-main min-h-[calc(100vh-48px)] p-[30px] static lg:p-[100px]">
				<div className="flex flex-col md:grid md:grid-cols-2">
					<ProjectContainer title="NIFTI Viewer" url="https://github.com/pierre0210/nii-viewer" languages={["javascript"]} />
					<ProjectContainer title="Discord Drive" url="https://github.com/pierre0210/discord-drive" languages={["go"]} />
					<ProjectContainer title="Wenku8 Crawler" url="https://github.com/pierre0210/wenku8-api" languages={["go"]} />
					<ProjectContainer title="Reddit Media Downloader" url="https://github.com/pierre0210/reddit-dl" languages={["go"]} />
					<ProjectContainer title="NovelAI Discord Bot" url="https://github.com/pierre0210/NovelAI-bot" languages={["typescript"]} />
					<ProjectContainer title="Sauce Discord Bot" url="https://github.com/pierre0210/Sauce-bot" languages={["typescript"]} />
					<ProjectContainer title="Logger Discord Bot" url="https://github.com/pierre0210/Logger-Bot" languages={["csharp"]} />
				</div>
			</div>
		</>
	);
};

export default Project;