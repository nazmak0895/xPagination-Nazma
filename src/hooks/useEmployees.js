import { useEffect, useState } from "react";
import { API_URL } from "../constants/constants";

function useEmployees() {

  // Stores employee data
  const [employees, setEmployees] = useState([]);

useEffect(() => {
  const fetchEmployees = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      setEmployees(data);
    } catch {
      alert("failed to fetch data");
    }
  };

  fetchEmployees();
}, []);

  return employees;
}

export default useEmployees;