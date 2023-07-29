import { MainLayout } from '@/components/Layouts';
import { useEmployee } from '../api/getEmployee';
import { useParams } from 'react-router-dom';
import { EmployeeDetail } from '../components/EmployeeDetail';
import { Employee } from '../types';

const Employee = () => {
  const { employeeId } = useParams();

  if (!employeeId) return null;

  const { data: employee, isLoading } = useEmployee({
    employeeId: employeeId,
  });

  if (isLoading) return <div>Loading employee data...</div>;

  return (
    <MainLayout>
      <EmployeeDetail employee={employee as Employee} />
    </MainLayout>
  );
};

export default Employee;
