import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import { QueryClient, useMutation, useQuery } from 'react-query';

import { resetNavigation } from '@/navigation/ResetNavigator';
import {
  anonRegisterService,
  forgotPasscodeService,
  getUsers,
  loginService,
  postSurveyService,
  registerService,
  resetPasscodeAnonService,
} from '@/services/services';
import { showToast } from '@/utils/helpers';

import useStore from '../store/useStore';
import { storeData } from '@/utils/asyncStore';
import { user } from '@/assets/images';

const queryClient = new QueryClient();

export const useLogin = () => {
  const mutation = useMutation((payload) => loginService(payload), {
    onError: (error, payload) => {
      console.log('===== error', error);
      showToast({ message: error, type: 'danger' });
    },
    onSuccess: async (res, payload: any) => {
      console.log('==== success', res);
      if (res.data && res.data.accessToken && res.success) {
        // setUserData({ token: res?.data, username: payload?.sapIdOrEmail });
        // storage.set('accessToken', res.data.accessToken);
        showToast({ message: res.message, type: 'success' });
        storeData('accessToken', res.data.accessToken);
        resetNavigation('GetCareRoot');
      } else {
        showToast({
          message: res.message,
          type: 'danger',
        });
        return false;
      }
    },
  });

  const { isLoading, error, data, reset } = mutation;

  const handleLogin = async (value: any) => {
    const netInfoState = await NetInfo.fetch();

    // storage.set('email', value.email);
    // storage.set('nickname', value.nickname);
    storeData('email', value.email);
    storeData('nickname', value.nickname);
    if (netInfoState.isConnected) {
      mutation.mutate(value);
    } else {
      // If there is no internet connectivity, show a toast
      showToast({
        message: 'No internet connection available',
        type: 'danger',
      });
    }
  };

  return { data, error, handleLogin, isLoading, reset };
};

export const usePostSurvey = () => {
  const { setUserData, setAccountOpeningData, accountOpeningData } = useStore(
    (state) => state
  );
  const navigation = useNavigation();
  const mutation = useMutation((payload) => postSurveyService(payload), {
    onError: (error, payload) => {
      console.log('===== error', error);
      showToast({ message: error?.message, type: 'danger' });
    },
    onSuccess: async (res, payload: any) => {
      if (res?.data) {
        showToast({ message: res?.message, type: 'success' });
        navigation.navigate('AnalysisDecisionScreen');
        setAccountOpeningData({});
      } else {
        showToast({
          message: res?.message,
          type: 'info',
        });
        return false;
      }
    },
  });
  const { isLoading, error, data, reset } = mutation;
  const handlePostSurvey = async (value: any) => {
    console.log(value, 'payload passed');
    const netInfoState = await NetInfo.fetch();

    if (netInfoState.isConnected) {
      mutation.mutate(value);
    } else {
      showToast({
        message: 'No internet connection available',
        type: 'warning',
      });
    }
  };

  return { data, error, handlePostSurvey, isLoading, reset };
};

export const useRegisterUser = () => {
  const { setUserData, setAccountOpeningData, accountOpeningData } = useStore(
    (state) => state
  );
  const navigation = useNavigation();
  const mutation = useMutation((payload) => registerService(payload), {
    onError: (error, payload) => {
      console.log('===== error', JSON.stringify(error));
      showToast({
        message: 'There seems to be an error, please try again late',
        type: 'danger',
      });
    },
    onSuccess: async (res, payload: any) => {
      if (res && res.success) {
        showToast({ message: res.message, type: 'success' });
        resetNavigation('LoginScreen');
        setAccountOpeningData({});
      } else {
        showToast({
          message: res?.message || 'Your account cannot be created now',
          type: 'info',
        });
        return false;
      }
    },
  });

  const { isLoading, error, data, reset } = mutation;

  const handleRegisterUsers = async (value: any) => {
    console.log(value, 'payload passed');

    const payload: any = {
      deviceId: value.deviceId,
      email: value.email,
      firstName: value.firstName,
      lastName: value.lastName,
      passcode: value.passcode,
      role: 'Regular',
    };

    console.log(payload, 'final');
    const netInfoState = await NetInfo.fetch();

    if (netInfoState.isConnected) {
      mutation.mutate(payload);
    } else {
      // If there is no internet connectivity, show a toast
      showToast({
        message: 'No internet connection available',
        type: 'danger',
      });
    }
  };

  return { data, error, handleRegisterUsers, isLoading, reset };
};

export const useRegisterAnon = () => {
  const { setUserData, setAccountOpeningData, accountOpeningData } = useStore(
    (state) => state
  );
  const navigation = useNavigation();
  const mutation = useMutation((payload) => anonRegisterService(payload), {
    onError: (error, payload) => {
      console.log('===== error', error);
      showToast({ message: error, type: 'danger' });
    },
    onSuccess: async (res, payload: any) => {
      console.log(res, '---11111');

      if (res?.message && res.success) {
        showToast({ message: res?.message, type: 'success' });
        resetNavigation('LoginScreen');
        setAccountOpeningData({});
      } else {
        showToast({
          message:
            res?.message ||
            'Your account could not be created now, please try agin later',
          type: 'info',
        });
        setAccountOpeningData({});
        return false;
      }
    },
  });
  const { isLoading, error, data, reset } = mutation;
  const handleRegisterUsersAnon = async (value: any) => {
    const payload: any = {
      deviceId: value.deviceId,
      nickname: value.nickname,
      passcode: value.passcode,
      secretQuestion: value.secretQuestion,
    };

    const netInfoState = await NetInfo.fetch();
    if (netInfoState.isConnected) {
      mutation.mutate(payload);
    } else {
      showToast({
        message: 'No internet connection available',
        type: 'danger',
      });
    }
  };

  return { data, error, handleRegisterUsersAnon, isLoading, reset };
};

export const useForgotPasscode = () => {
  const { setUserData, setAccountOpeningData, accountOpeningData } = useStore(
    (state) => state
  );
  const navigation = useNavigation();
  const mutation = useMutation((payload) => forgotPasscodeService(payload), {
    onError: (error, payload) => {
      console.log('===== error', error);
      showToast({
        message: 'There seems to be an error.Please try agin later',
        type: 'danger',
      });
    },
    onSuccess: async (res, payload: any) => {
      if (res.message && res.success) {
        showToast({ message: res.message, type: 'success' });
        resetNavigation('LoginScreen');
      } else {
        showToast({
          message:
            res.message ||
            'Some details are not correct, please enter correctly and try agin',
          type: 'danger',
        });
      }
    },
  });

  const { isLoading, error, data, reset } = mutation;

  const handleForgotPasscode = async (value: any) => {
    console.log(value, 'final');
    const netInfoState = await NetInfo.fetch();

    if (netInfoState.isConnected) {
      mutation.mutate(value);
    } else {
      // If there is no internet connectivity, show a toast
      showToast({
        message: 'No internet connection available',
        type: 'danger',
      });
    }
  };

  return { data, error, handleForgotPasscode, isLoading, reset };
};

export const useForgotPasscodeAnon = () => {
  const mutation = useMutation((payload) => resetPasscodeAnonService(payload), {
    onError: (error, payload) => {
      console.log('===== error', error);
      showToast({
        message: 'There seems to be an error.Please try agin later',
        type: 'danger',
      });
    },
    onSuccess: async (res, payload: any) => {
      if (res.message && res.success) {
        showToast({ message: res.message, type: 'success' });
        resetNavigation('LoginScreen');
      } else {
        showToast({
          message:
            res?.message ||
            'Some details are not correct, please enter correctly and try agin',
          type: 'danger',
        });
      }
    },
  });

  const { isLoading, error, data, reset } = mutation;

  const handleForgotPasscodeAnon = async (value: any) => {
    console.log(value, 'final');
    const netInfoState = await NetInfo.fetch();

    if (netInfoState.isConnected) {
      mutation.mutate(value);
    } else {
      showToast({
        message: 'No internet connection available',
        type: 'danger',
      });
    }
  };

  return { data, error, handleForgotPasscodeAnon, isLoading, reset };
};

export const useUser = () => {
  const { accountOpeningData, userData, setUserData } = useStore(
    (state) => state
  );
  const data = useQuery('user', () => getUsers(userData.token));
  return { data };
};
