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
			<div className="bg-main text-main min-h-[calc(100vh-48px)] p-[30px] min-[992px]:p-[100px] block">
				<div className="p-5 justify-center mx-[5vw] lg:mx-[20vw]">
					<h1 className="text-5xl md:text-6xl font-bold font-Roboto-Mono mb-8 text-center">$ whoami</h1>
					<p className="font-Roboto-Mono my-3 text-lg md:text-2xl text-center md:text-justify">
						I&apos;m an undergraduate student learning cyber security and computer vision, especially interested in
						Reverse Engineering and Deep Learning techniques used in biological features recognition.<br></br>
					</p>
				</div>
				<div className="p-5 justify-center mx-[5vw] lg:mx-[20vw]">
					<h1 className="text-5xl md:text-6xl font-bold font-Roboto-Mono mb-8 text-center">skills</h1>
					<div className="grid grid-cols-3 w-full md:grid-cols-6">
						<Languages
							languages={["javascript", "typescript", "go", "python", "c", "cplusplus", "nodejs", "express", "react", "nextjs", "linux", "docker"]}
							layoutType="intrinsic"
							size={500}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;