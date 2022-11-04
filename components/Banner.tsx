import styles from './Banner.module.css';
import Image from 'next/image'

type param = {
	image: string,
	text: string,
};

const Banner = ({ image, text }: param) => {
	return ( 
		<div className={styles.banner}>
			<picture>
				<source srcSet={image} />
				<img className="object-fill mx-auto" src={image} alt="Not found" />
			</picture>
			<p id={styles.text} className="text-[#93f1fa] text-7xl">{text}</p>
		</div>
	);
}

export { Banner };