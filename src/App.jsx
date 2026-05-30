import { useState } from "react";

import EmployeeTable from "./components/EmployeeTable";
import Pagination from "./components/Pagination";

import useEmployees from "./hooks/useEmployees";

import { ITEMS_PER_PAGE } from "./constants/constants";

import "./App.css";

function App() {

  // Employee data comes from custom hook
  const employees = useEmployees();

  // Current page starts from 1
  const [currentPage, setCurrentPage] =
    useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(
    employees.length / ITEMS_PER_PAGE
  );

  // Find start index
  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  // Extract employees for current page
  const currentEmployees = employees.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="app">

      <h1>Employee Data Table</h1>

      <EmployeeTable
        employees={currentEmployees}
      />

      <Pagination
        currentPage={currentPage}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />

    </div>
  );
}

export default App;