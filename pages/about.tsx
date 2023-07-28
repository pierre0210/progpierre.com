import { NextPage } from 'next';
import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
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
			<div className="bg-main text-main min-h-[calc(100vh-48px)] p-[30px] min-[992px]:p-[100px]">
				<h1 className="text-6xl font-bold font-Comfortaa mb-8 text-center md:text-left">About me</h1>
				<p className="font-Roboto-Mono p-1 my-2 mb-10 text-lg lg:w-2/3 md:w-auto sm:text-xl">
					I&apos;m a sophomore student at National Central University, majoring in Biomedical Sciences and Engineering.
					I&apos;m interested in CTF, backend development and computer vision.
				</p>
				<h1 className="text-6xl font-bold font-Comfortaa mb-8 text-center md:text-left">Skills</h1>
				<div className="grid grid-cols-3 w-full md:grid-cols-6 md:w-[50vw]">
					<Languages
						languages={["javascript", "typescript", "go", "python", "nodejs", "express", "react", "raspberrypi", "arduino", "linux", "git", "docker"]}
						layoutType="intrinsic"
						size={500}
					/>
				</div>
			</div>
		</>
	);
};

export default About;