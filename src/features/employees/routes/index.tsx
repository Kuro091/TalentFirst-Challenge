import { Navigate, Route, Routes } from 'react-router-dom';
import Employees from './Employees';
import Employee from './Employee';

export const EmployeesRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<Employees />} />
      <Route path=':employeeId' element={<Employee />} />
      <Route path='*' element={<Navigate to='.' />} />
    </Routes>
  );
};
