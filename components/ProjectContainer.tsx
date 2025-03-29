import Link from "next/link";
import Languages from "./Languages";

type param = {
	title: string;
	url: string;
	languages: string[];
};

const ProjectContainer = ({ title, url, languages }: param) => {
	return (
		<div className="grid grid-cols-3 w-[50vw] mx-auto my-[4vh] shadow-index-sep border-[1px] p-5 md:w-[25vw]">
			<div className="col-span-2">
				<h1 className="font-NotoSans font-bold text-[4vw] md:text-[2vw]">{title}</h1>
				<Link href={url} className="inline-block text-[3.5vw] md:text-[1.5vw] font-Roboto-Mono group transition duration-300">
					Github
					<span className="flex max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#025b96]"></span>
				</Link>
			</div>
			<Languages
				languages={languages}
				size={100}
			/>
		</div>
	);
};

export default ProjectContainer;