import NotFound from '@/features/misc/routes/NotFound';
import { lazyImport } from '@/utils/lazyImport';

const { EmployeesRoutes } = lazyImport(() => import('@/features/employees'), 'EmployeesRoutes');

export const publicRoutes = [
  {
    path: '/',
    element: <EmployeesRoutes />,
  },
  {
    path: '/user/*',
    element: <EmployeesRoutes />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
