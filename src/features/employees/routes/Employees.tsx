import { MainLayout } from '@/components/Layouts';
import { EmployeeHeader } from '../components/EmployeesHeader';
import { EmployeeList } from '../components/EmployeeList';
import { useEmployees } from '../api/getEmployees';

const Employees = () => {
  const { data } = useEmployees();

  return (
    <MainLayout>
      <EmployeeHeader employees={data} />
      <EmployeeList employees={data} />
    </MainLayout>
  );
};

export default Employees;
