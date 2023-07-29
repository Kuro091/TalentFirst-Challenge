import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Employee } from '../types';

export const getEmployees = (): Promise<Employee[]> => {
  return axios.get('/users');
};

type QueryFnType = typeof getEmployees;

type UseEmployeesOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useEmployees = ({ config }: UseEmployeesOptions = {}) => {
  console.log(import.meta.env.REACT_APP_API_URL)
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['employees'],
    queryFn: () => getEmployees(),
  });
};
