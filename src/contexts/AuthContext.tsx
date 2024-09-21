import ReactAuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import { User } from '@/types';
import createRefresh from 'react-auth-kit/createRefresh';
import axiosInstance from '@/lib/api/axios/axios-instance';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const refresh = createRefresh<User>({
    interval: 10,
    refreshApiCallback: async (param) => {
      try {
        const response = await axiosInstance.post('/api/refresh', param, {
          headers: { Authorization: `Bearer ${param.authToken}` },
        });
        console.log('Refreshing');
        return {
          isSuccess: true,
          newAuthToken: response.data.token,
          newAuthTokenExpireIn: 10,
          newRefreshTokenExpiresIn: 60,
        };
      } catch (error) {
        console.error(error);
        return {
          isSuccess: false,
          newAuthToken: '',
        };
      }
    },
  });

  const store = createStore<User>({
    authName: '_auth',
    authType: 'localstorage',
    refresh: refresh,
  });

  return <ReactAuthProvider store={store}>{children}</ReactAuthProvider>;
};

// export AuthProvider
export default AuthProvider;
