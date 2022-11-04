import styles from './Banner.module.css';
import Image from 'next/image'

type param = {
	image: string
};

const Banner = ({ image }: param) => {
	return ( 
		<div className={styles.banner}>
			<picture>
				<source srcSet={image} />
				<img className="object-fill p-8 mx-auto" src={image} alt="Not found" />
			</picture>
		</div>
	);
}

export { Banner };