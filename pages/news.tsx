import { NextPage } from 'next'
import Link from 'next/link';
import NavBar from '../components/NavBar';
import styles from './news.module.css'

const News : NextPage = () => {
	return(
		<>
			<NavBar/>
			<div className={styles.News}>
				<div>
					<h3>Finish building <Link href="https://progpierre.com"><a>progpierre.com</a></Link> v1</h3>
					<p>Wed Aug 03 2022 22:27:37 GMT+0800 (台北標準時間)</p>
				</div>
			</div>
		</>
	);
}

export default News