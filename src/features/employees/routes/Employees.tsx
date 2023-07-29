import { MainLayout } from '@/components/Layouts';
import { EmployeeHeader } from '../components/EmployeesHeader';
import { EmployeeList } from '../components/EmployeeList';
import { useEmployees } from '../api/getEmployees';
import { Inputs } from '../types';
import { useState } from 'react';

const Employees = () => {
  const [query, setQuery] = useState<string>('');
  const { data } = useEmployees({
    filter: query,
    config: {
      staleTime: 1000 * 60 * 1, // 5 minutes
    },
  });

  const handleOnSearch = (val: Inputs) => {
    setQuery(val.searchQuery);
  };

  return (
    <MainLayout>
      <EmployeeHeader employeeCount={data?.length} onSubmitCallback={handleOnSearch} />
      <EmployeeList employees={data} />
    </MainLayout>
  );
};

export default Employees;
