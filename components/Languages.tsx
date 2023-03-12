import Image from "next/image";

type param = {
	languages: string[],
	size: number
};

// https://devicon.dev/
const Languages = ({ languages, size }: param) => {
	return (
		<>
			{
				languages.map((language) => (
					<div key={language} className="p-1 justify-center md:w-40">
						<Image
							src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + language + "/" + language + "-original.svg"}
							width={size}
							height={size}
							layout="responsive"
							alt={language}
						/>
					</div>
				))
			}
		</>
	);
};

export default Languages;