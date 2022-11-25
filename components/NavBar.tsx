import React, { useState } from "react";
import Link from 'next/link'
import styles from './NavBar.module.css';

function NavBar() {
	const [isNavExpand, setNavState] = useState(false);
	return (
		<div>
			<div className={styles.bar}>
				<Link href="/">
					<a id={styles.logo}><p>PROGPIERRE</p> <span>by Pierre</span></a>
				</Link>
				<button onClick={ () => setNavState(!isNavExpand) } className="transition ease-in-out delay-75 hover:bg-sky-900 hover:shadow-inner hover:drop-shadow-menu duration-300">
					<strong>Menu</strong>
				</button>
			</div>
			<nav id="selector">
				<div id={ isNavExpand ? styles.menuexpanded : styles.menu } className="backdrop-blur-sm">
					<ul>
						<li>
							<Link href="/news">
								<a className="transition ease-in-out delay-75 hover:shadow-sep hover:bg-select hover:-translate-x-1 hover:-translate-y-1 duration-300">
									<strong>News</strong>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/project">
								<a className="transition ease-in-out delay-75 hover:shadow-sep hover:bg-select hover:-translate-x-1 hover:-translate-y-1 duration-300">
									<strong>Project</strong>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/blog">
								<a className="transition ease-in-out delay-75 hover:shadow-sep hover:bg-select hover:-translate-x-1 hover:-translate-y-1 duration-300">
									<strong>Blog</strong>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;