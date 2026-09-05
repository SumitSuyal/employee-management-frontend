# Employee Management Frontend

A professional Employee Management System frontend built with **Next.js, React, TypeScript, and Tailwind CSS**.

The application provides a responsive interface for managing employee records through a **Spring Boot REST API**.

## Features

- View all employees
- Add new employees
- Edit existing employees
- Delete employees
- Form validation
- Loading states
- Error handling
- Responsive employee table
- Department badges
- Salary formatting
- Employee initials/avatar
- Reusable React components
- Custom React hook for employee operations
- Centralized API service
- Environment-based API configuration

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Spring Boot**
- **Spring Data JPA**
- **MySQL**

## Architecture

The frontend follows a component-based architecture with a clear separation of responsibilities:

```text
page.tsx
   │
   ├── DashboardHeader
   ├── EmployeeForm
   └── EmployeeTable
          │
          ↓
    useEmployees()
          │
          ↓
  employeeService.ts
          │
          ↓
 Spring Boot REST API