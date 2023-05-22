import { NextPage } from "next";
import Meta from "../components/Meta";
import NavBar from "../components/NavBar";

const NotFound: NextPage = () => {
	return (
		<>
			<Meta
				title="404 | Not Found"
				thumbnail="https://i.imgur.com/17InHzQ.jpg"
				description="404 Not Found."
				themeColor="#02061c"
			/>
			<NavBar />
			<div className="static flex bg-main text-main min-h-[calc(100vh-48px)] items-center justify-center">
				<p className="text-xl font-extrabold font-Comfortaa">404 Not Found.</p>
			</div>
		</>
	);
};

export default NotFound;