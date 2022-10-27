import { useState } from "react"

type paginationParam = {
	defaultPage: number
	pageSize: number
	totalPosts: number
}

const usePagination = ({ defaultPage, pageSize, totalPosts }: paginationParam) => {
	const [currentPage, setCurrentPage] = useState(defaultPage);
	const totalPages = Math.ceil(totalPosts / pageSize);
	const handleClickNext = () => {
		setCurrentPage(currentPage + 1 > totalPages ? totalPages : currentPage + 1);
	};
	const handleClickPrev = () => {
		setCurrentPage(currentPage - 1 < 1 ? 1: currentPage - 1);
	};

	return {
		currentPage,
		totalPages,
		handleClickNext,
		handleClickPrev
	};
}

export default usePagination;