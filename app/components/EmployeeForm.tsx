"use client";

import { FormEvent } from "react";
import { EmployeeForm as EmployeeFormType } from "../types/employee";

interface EmployeeFormProps {
  formData: EmployeeFormType;
  editingId: number | null;
  saving: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

export default function EmployeeForm({
  formData,
  editingId,
  saving,
  onChange,
  onSubmit,
  onCancel,
}: EmployeeFormProps) {
  const isEditing = editingId !== null;

  return (
    <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* Form Header */}
      <div className="border-b border-gray-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-gray-900">
          {isEditing ? "Edit Employee" : "Add Employee"}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {isEditing
            ? "Update the employee information below."
            : "Enter the employee details to create a new record."}
        </p>
      </div>

      <form onSubmit={onSubmit} className="p-6">
        {/* Personal Information */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-700">
            Personal Information
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                placeholder="Enter first name"
                required
                maxLength={50}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                placeholder="Enter last name"
                required
                maxLength={50}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="example@company.com"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>

        {/* Employment Information */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-700">
            Employment Information
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Department */}
            <div>
              <label
                htmlFor="department"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Department
              </label>

              <input
                id="department"
                type="text"
                name="department"
                value={formData.department}
                onChange={onChange}
                placeholder="e.g. Engineering"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Salary */}
            <div>
              <label
                htmlFor="salary"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Annual Salary
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  ₹
                </span>

                <input
                  id="salary"
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={onChange}
                  placeholder="80000"
                  required
                  min="1"
                  className="w-full rounded-lg border border-gray-300 py-2.5 pl-9 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            disabled={saving}
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving
              ? isEditing
                ? "Updating..."
                : "Saving..."
              : isEditing
                ? "Update Employee"
                : "Save Employee"}
          </button>
        </div>
      </form>
    </div>
  );
}