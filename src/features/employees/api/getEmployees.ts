import { useQuery } from 'react-query';

import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import axios from '@/lib/AxiosInterceptor';
import { Employee } from '../types';

export const getEmployees = async (filter?: string) => {
  const res = await axios.get<Employee[]>('/users');
  if (!filter || filter == '') return res.data;

  return res.data.filter((employee: any) => {
    return (
      employee.first_name.toLowerCase().includes(filter.toLowerCase()) ||
      employee.last_name.toLowerCase().includes(filter.toLowerCase())
    );
  });
};

type QueryFnType = typeof getEmployees;

type UseEmployeesOptions = {
  config?: QueryConfig<QueryFnType>;
  filter?: string;
};

export const useEmployees = ({ config, filter = '' }: UseEmployeesOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['employees', filter],
    queryFn: () => getEmployees(filter),
  });
};
