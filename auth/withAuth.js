import { api } from '@/pages/api';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AuthLogin(Component) {
  const newComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');

      const getUser = async () => {
        try {
          const result = await api.get('/user/me');

          if (accessToken && router.asPath === '/login')
            alert('이미 로그인 하셨습니다');
          router.push('/');
        } catch (error) {
          console.log(error.message);
        }
      };

      if (!accessToken && router.asPath !== '/login') {
        alert('로그인이 필요합니다');
        router.push('/login');
      }
      if (accessToken) getUser();
    }, []);

    return <Component {...props} />;
  };

  return newComponent;
}
