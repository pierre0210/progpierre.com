import { NextPage } from "next";
import Meta from "../components/Meta";
import NavBar from "../components/NavBar";
import style from "./404.module.css";

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
			<div className={style.NotFound}>
				<h1 className="text-6xl font-extrabold tracking-wider font-Roboto-Mono">404 Not Found.</h1>
			</div>
		</>
	);
};

export default NotFound;