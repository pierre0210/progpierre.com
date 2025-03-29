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
					<div key={language} className="p-1 justify-center">
						<Image
							src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + language + "/" + language + "-original" +
								(language === "go" ? "-wordmark" : "") + ".svg"}
							width={size}
							height={size}
							alt={language}
						/>
					</div>
				))
			}
		</>
	);
};

export default Languages;