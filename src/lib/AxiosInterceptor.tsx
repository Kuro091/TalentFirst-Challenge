import { API_URL } from '@/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const instance = axios.create({
  baseURL: `${API_URL}/api/`,
});

const AxiosInterceptor = ({ children }: any) => {
  const [isSet, setIsSet] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = (request: any) => {
      return request;
    };

    const resInterceptor = (response: any) => {
      return response.data;
    };

    const errInterceptor = (error: any) => {
      if (error.response.status === 401) {
        navigate('/home');
      }

      if (error.response.status === 404) {
        navigate('/404');
      }

      return Promise.reject(error);
    };

    const requestInterceptor = instance.interceptors.request.use(reqInterceptor, errInterceptor);
    const responseInterceptor = instance.interceptors.response.use(resInterceptor, errInterceptor);

    setIsSet(true);

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return isSet && children;
};

export default instance;
export { AxiosInterceptor };
