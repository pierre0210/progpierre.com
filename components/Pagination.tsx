import { useEffect } from "react";
import usePagination from "../hooks/usePagination";

type param = {
	pageSize: number,
	page: number,
	totalPosts: number,
	onChange: (page: number) => void
};

const Pagination = ({ pageSize, page, totalPosts, onChange}: param) => {
	const { currentPage, totalPages, handleClickNext, handleClickPrev } = usePagination({ defaultPage: page, pageSize: pageSize, totalPosts: totalPosts });
	useEffect(() => {
		onChange(currentPage);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage]);
	
	return(
		<div className="flex items-stretch justify-center">
			<button onClick={handleClickPrev} className="font-semibold rounded my-3 px-2 pb-1 transition ease-in-out delay-75 hover:bg-blog hover:text-white hover:drop-shadow-menu duration-300">
				prev
			</button>
			<p className="font-bold">Page: {currentPage}/{totalPages}</p>
			<button onClick={handleClickNext} className="font-semibold rounded my-3 px-2 pb-1 transition ease-in-out delay-75 hover:bg-blog hover:text-white hover:drop-shadow-menu duration-300">
				next
			</button>
		</div>
	);
};

export default Pagination;