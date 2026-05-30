function Pagination({
  currentPage,
  handlePrevious,
  handleNext,
}) {
  return (
    <div className="pagination">
      <button onClick={handlePrevious}>
        Previous
      </button>

      {/* Cypress looks for page number inside span/div */}
      <span className="page-number">
        {currentPage}
      </span>

      <button onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Pagination;