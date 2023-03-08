import Image from "next/image";

type param = {
	languages: string[],
	size: number
};

const Languages = ({ languages, size }: param) => {
	return (
		<div className="container mx-auto grid grid-cols-3 lg:m-0 lg:w-2/3 md:w-auto md:justify-center md:flex">
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
		</div>
	);
};

export default Languages;