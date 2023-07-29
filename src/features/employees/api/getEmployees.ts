import { useQuery } from 'react-query';

import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import axios from '@/lib/AxiosInterceptor';
import { Employee } from '../types';

export const getEmployees = (): Promise<Employee[]> => {
  return axios.get('/users');
};

type QueryFnType = typeof getEmployees;

type UseEmployeesOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useEmployees = ({ config }: UseEmployeesOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['employees'],
    queryFn: () => getEmployees(),
  });
};
