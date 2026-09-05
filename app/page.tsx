"use client";

import { FormEvent, useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import { useEmployees } from "./hooks/useEmployees";
import {
  Employee,
  EmployeeForm as EmployeeFormType,
  initialEmployeeForm,
} from "./types/employee";

export default function Home() {
  const {
    employees,
    loading,
    saving,
    deletingId,
    error,
    addEmployee,
    editEmployee,
    removeEmployee,
  } = useEmployees();

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] =
    useState<EmployeeFormType>(initialEmployeeForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (editingId === null) {
        await addEmployee(formData);
      } else {
        await editEmployee(editingId, formData);
      }

      handleCloseForm();
    } catch {
      // Error is already handled by the hook.
    }
  };

  const handleEdit = (employee: Employee) => {
    setEditingId(employee.id);

    setFormData({
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      department: employee.department,
      salary: String(employee.salary),
    });

    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await removeEmployee(id);
    } catch {
      // Error is already handled by the hook.
    }
  };

  const handleAddEmployee = () => {
    setEditingId(null);
    setFormData(initialEmployeeForm);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData(initialEmployeeForm);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Dashboard Header */}
        <DashboardHeader
          employeeCount={employees.length}
          showForm={showForm}
          onAddEmployee={handleAddEmployee}
          onCloseForm={handleCloseForm}
        />

        {/* Error Message */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {/* Employee Form */}
        {showForm && (
          <EmployeeForm
            formData={formData}
            editingId={editingId}
            saving={saving}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={handleCloseForm}
          />
        )}

        {/* Employee Table */}
        <EmployeeTable
          employees={employees}
          loading={loading}
          deletingId={deletingId}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
}