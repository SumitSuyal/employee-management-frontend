export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  salary: number;
}

export interface EmployeeForm {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  salary: string;
}

export const initialEmployeeForm: EmployeeForm = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
  salary: "",
};