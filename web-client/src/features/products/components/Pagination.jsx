import {
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    return [1, 2, "...", totalPages];
  };

  return (
    <div className="mt-10">
      {/* Mobile Pagination */}
      <div className="flex justify-center items-center gap-2 md:hidden">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer font-medium"
        >
          <MdKeyboardArrowLeft />
          Back
        </button>

        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-lg transition-all cursor-pointer font-medium ${
            currentPage === 1
              ? "bg-[#008521] text-white shadow-md"
              : "border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
          }`}
        >
          1
        </button>

        <span className="w-10 h-10 flex items-center justify-center text-gray-500 font-medium">
          ...
        </span>

        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-lg transition-all cursor-pointer font-medium ${
            currentPage === totalPages
              ? "bg-[#008521] text-white shadow-md"
              : "border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
          }`}
        >
          {totalPages}
        </button>

        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer font-medium"
        >
          Next
          <MdKeyboardArrowRight />
        </button>
      </div>

      {/* Desktop Pagination */}
      <div className="hidden md:flex justify-end items-center gap-2 flex-wrap">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer font-medium"
        >
          <MdKeyboardDoubleArrowLeft />
          First
        </button>

        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer font-medium"
        >
          <MdKeyboardArrowLeft />
          Back
        </button>

        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="w-10 h-10 flex items-center justify-center text-gray-500 font-medium"
            >
              ...
            </span>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-lg transition-all cursor-pointer font-medium ${
                currentPage === page
                  ? "bg-[#008521] text-white shadow-md"
                  : "border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer font-medium"
        >
          Next
          <MdKeyboardArrowRight />
        </button>

        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer font-medium"
        >
          Last
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
