import React, { useState } from "react";
import Link from 'next/link'
import styles from './NavBar.module.css';

function NavBar() {
	const [isNavExpand, setNavState] = useState(false);
	return (
		<>
			<div className={styles.bar}>
				<Link href="/">
					<a id={styles.logo}><strong>PROGPIERRE</strong> <span>by Pierre</span></a>
				</Link>
				<button onClick={ () => setNavState(!isNavExpand) }><strong>Menu</strong></button>
			</div>
			<nav id="selector">
				<div id={ isNavExpand ? styles.menuexpanded : styles.menu }>
					<ul>
						<li>
							<Link href="/news">
								<a><strong>News</strong></a>
							</Link>
						</li>
						<li>
							<Link href="/project">
								<a><strong>Project</strong></a>
							</Link>
						</li>
						<li>
							<Link href="/blog">
								<a><strong>Blog</strong></a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
		
	);
}

export default NavBar;