import { Navigate, Route, Routes } from 'react-router-dom';
import Employees from './Employees';

export const EmployeesRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<Employees />} />
    </Routes>
  );
};
