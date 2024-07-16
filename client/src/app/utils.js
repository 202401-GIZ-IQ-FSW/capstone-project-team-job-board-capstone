// utils.js
export const handlePageChange = (
	direction,
	currentPage,
	setCurrentPage,
	totalPages
) => {
	if (direction === "prev" && currentPage > 1) {
		setCurrentPage(currentPage - 1);
	} else if (
		direction === "next" &&
		currentPage < totalPages
	) {
		setCurrentPage(currentPage + 1);
	}
};
