import { queryClient } from '@/lib/react-query';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { AxiosInterceptor } from '@/lib/AxiosInterceptor';
import { ReactQueryDevtools } from 'react-query/devtools';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<h5>Spinner here...</h5>}>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        <Router>
          <AxiosInterceptor>{children}</AxiosInterceptor>
        </Router>
      </QueryClientProvider>
    </React.Suspense>
  );
};
