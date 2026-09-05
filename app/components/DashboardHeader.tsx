"use client";

interface DashboardHeaderProps {
  employeeCount: number;
  showForm: boolean;
  onAddEmployee: () => void;
  onCloseForm: () => void;
}

export default function DashboardHeader({
  employeeCount,
  showForm,
  onAddEmployee,
  onCloseForm,
}: DashboardHeaderProps) {
  return (
    <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Employee Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Employee Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage employee records and keep your workforce information
            organized.
          </p>

          <div className="mt-4">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
              {employeeCount}{" "}
              {employeeCount === 1 ? "Employee" : "Employees"}
            </span>
          </div>
        </div>

        <button
          onClick={showForm ? onCloseForm : onAddEmployee}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          {showForm ? "Close Form" : "+ Add Employee"}
        </button>
      </div>
    </div>
  );
}