import { useQuery } from 'react-query';

import axios from '@/lib/AxiosInterceptor';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Employee } from '../types';

export const getEmployee = async ({ employeeId }: { employeeId: string }): Promise<Employee> => {
  const res = await axios.get(`/users/${employeeId}`);
  return res.data;
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
