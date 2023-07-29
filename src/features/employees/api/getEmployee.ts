import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Employee } from '../types';

export const getEmployee = ({ employeeId }: { employeeId: string }): Promise<Employee> => {
  return axios.get(`/users/${employeeId}`);
};

type QueryFnType = typeof getEmployee;

type UseEmployeeOptions = {
  employeeId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useEmployee = ({ employeeId, config }: UseEmployeeOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['employee', employeeId],
    queryFn: () => getEmployee({ employeeId }),
  });
};
