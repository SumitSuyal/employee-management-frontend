import {
  Employee,
  EmployeeForm,
} from "../types/employee";

const API_URL = "http://localhost:8080/api/employees";

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
};

export const createEmployee = async (
  employee: EmployeeForm
): Promise<Employee> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...employee,
      salary: Number(employee.salary),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create employee");
  }

  return response.json();
};

export const updateEmployee = async (
  id: number,
  employee: EmployeeForm
): Promise<Employee> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...employee,
      salary: Number(employee.salary),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update employee");
  }

  return response.json();
};

export const deleteEmployee = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete employee");
  };
};