import { MutableRefObject, useEffect } from "react";

type clickOutsideParam = {
	ref: MutableRefObject<HTMLElement>
	callback: (target: HTMLElement) => void
};

const useClickOutside = ({ ref, callback }: clickOutsideParam) => {
	useEffect(() => {
		const handleClick = (event: Event) => {
			if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
				callback(event.target as HTMLElement);
			}
		};

		document.addEventListener("mousedown", handleClick);
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [ref, callback]);
};

export default useClickOutside;