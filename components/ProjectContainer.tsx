import Link from "next/link";
import Languages from "./Languages";

type param = {
	title: string;
	url: string;
	languages: string[];
};

const ProjectContainer = ({ title, url, languages }: param) => {
	return (
		<div className="inline-block w-full p-0 min-[576px]:p-10 md:w-1/3 md:inline-flex">
			<div className="block p-1">
				<h1 className="font-NotoSans font-bold text-3xl">{title}</h1>
				<Link href={url}>
					<a className="font-Roboto-Mono">Github repo</a>
				</Link>
			</div>
			<div className="lg:m-0 lg:w-2/3 min-[576px]: w-1/3 md:justify-center md:flex">
				<Languages languages={languages} size={30} />
			</div>
		</div>
	);
};

export default ProjectContainer;