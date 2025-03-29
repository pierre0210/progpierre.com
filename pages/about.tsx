import { NextPage } from 'next';
import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import Languages from '../components/Languages';

const About: NextPage = () => {
	const bio: string = "I\'m currently an undergraduate student learning cyber security and computer vision, especially interested in\
				Reverse Engineering, Security in AI and Biological Features Recognition.\
				I have participated in serveral research programs as a part-time research assitant at National Central University Geometric Data Vision Laboratory.\
				The study fields includs developing defense methods against evasion attacks and implementing geometric deep learning model on biomedical image segmentation tasks.";
	return (
		<>
			<Meta
				title="About | Pierre"
				thumbnail="https://i.imgur.com/17InHzQ.jpg"
				description="About me"
				themeColor="#02061c"
			/>
			<NavBar />
			<div className="bg-main text-main min-h-[calc(100vh-48px)] p-[30px] min-[992px]:p-[100px] block">
				<div className="p-5 justify-center mx-[5vw] lg:mx-[15vw]">
					<h1 className="text-5xl md:text-6xl font-bold font-Roboto-Mono mb-8 text-center">$ whoami</h1>
					<p className="font-Roboto-Mono my-3 text-md md:text-lg text-center md:text-justify">
						{ bio }<br></br>
					</p>
				</div>
				<div className="p-5 justify-center mx-[5vw] lg:mx-[20vw]">
					<h1 className="text-5xl md:text-6xl font-bold font-Roboto-Mono mb-8 text-center">skills</h1>
					<div className="grid grid-cols-3 w-full md:grid-cols-6">
						<Languages
							languages={["javascript", "typescript", "go", "python", "c", "cplusplus", "nodejs", "express", "react", "nextjs", "linux", "docker"]}
							size={500}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;