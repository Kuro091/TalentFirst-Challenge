import { lazyImport } from '@/utils/lazyImport';

const { EmployeesRoutes } = lazyImport(() => import('@/features/employees'), 'EmployeesRoutes');

export const publicRoutes = [
  {
    path: '/',
    element: <EmployeesRoutes />,
  },
];
