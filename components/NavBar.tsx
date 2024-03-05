import React, { MutableRefObject, useRef, useState } from "react";
import Link from 'next/link';
import styles from './NavBar.module.css';
import useClickOutside from "../hooks/useClickOutside";

const NavBar = () => {
	const [isNavExpand, setNavState] = useState(false);
	const navRef = useRef<HTMLUListElement>(null);
	const excludeRef = useRef<HTMLButtonElement>(null);
	const handleClickOutside = (target: HTMLElement) => {
		if (!excludeRef.current?.contains(target)) {
			setNavState(false);
		}
	};
	useClickOutside({ ref: navRef as MutableRefObject<HTMLElement>, callback: handleClickOutside });

	return (
		<div className="sticky top-0 z-50">
			<div className={styles.bar}>
				<Link href="/">
					<a id={styles.logo}>
						<p className="group transition duration-300 my-auto">
							PROGPIERRE
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#025b96] mr-1"></span>
						</p>
						<span className="my-auto">by Pierre</span>
					</a>
				</Link>
				<button onClick={() => setNavState(!isNavExpand)}
					ref={excludeRef}
					className="my-auto px-2 ml-auto mr-1 leading-none"
				>
					<strong className="group transition duration-300">
						Menu
						<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#025b96] mr-1"></span>
					</strong>
				</button>
			</div>
			<nav id="selector">
				<div id={isNavExpand ? styles.menuexpanded : styles.menu} className="backdrop-blur-sm">
					<ul className="w-fit" ref={navRef}>
						<li>
							<Link href="/about">
								<a className="transition ease-in-out delay-75 hover:shadow-sep hover:bg-select hover:-translate-x-1 hover:-translate-y-1 duration-300">
									<strong>About</strong>
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
							<Link href="https://blog.progpierre.com">
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
};

export default NavBar;