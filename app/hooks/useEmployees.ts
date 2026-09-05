import { useEffect, useState } from "react";
import {
  createEmployee,
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from "../services/employeeService";
import {
  Employee,
  EmployeeForm,
} from "../types/employee";

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchEmployees = async () => {
    try {
      setError(null);

      const data = await getEmployees();

      setEmployees(data);
    } catch (error) {
      console.error(error);
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = async (employee: EmployeeForm) => {
    try {
      setSaving(true);
      setError(null);

      const newEmployee = await createEmployee(employee);

      setEmployees((previous) => [
        ...previous,
        newEmployee,
      ]);
    } catch (error) {
      console.error(error);
      setError("Failed to create employee");
      throw error;
    } finally {
      setSaving(false);
    }
  };

  const editEmployee = async (
    id: number,
    employee: EmployeeForm
  ) => {
    try {
      setSaving(true);
      setError(null);

      const updatedEmployee = await updateEmployee(
        id,
        employee
      );

      setEmployees((previous) =>
        previous.map((existingEmployee) =>
          existingEmployee.id === id
            ? updatedEmployee
            : existingEmployee
        )
      );
    } catch (error) {
      console.error(error);
      setError("Failed to update employee");
      throw error;
    } finally {
      setSaving(false);
    }
  };

  const removeEmployee = async (id: number) => {
    try {
      setDeletingId(id);
      setError(null);

      await deleteEmployee(id);

      setEmployees((previous) =>
        previous.filter(
          (employee) => employee.id !== id
        )
      );
    } catch (error) {
      console.error(error);
      setError("Failed to delete employee");
      throw error;
    } finally {
      setDeletingId(null);
    }
  };

  return {
    employees,
    loading,
    saving,
    deletingId,
    error,
    addEmployee,
    editEmployee,
    removeEmployee,
  };
};