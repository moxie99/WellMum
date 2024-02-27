import useStore from '@/store/useStore';
import {
  AnonRegisterRequest,
  NormalRegisterRequest,
  PostSurveyRequest,
  ResertPasscodeAnon,
} from '@/types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const baseUrlStaging = 'https://getcareafricaapi.com/api/v1/';

const apiHelper = async (function_: any) => {
  try {
    const { data } = await function_;
    return data;
  } catch (error: any) {
    if (error.toJSON() && !error.toJSON().status) {
      throw 'Network error!';
    } else if (error?.response) {
      // throw error?.response?.data?.error;
    } else if (error?.request) {
      // throw "Request not processed!";
    } else {
      // throw error.message;
    }
  }
};

// const getAccessToken = async () => {
//   try {
//     return await AsyncStorage.getItem('accessToken');
//   } catch (e) {
//     console.log('there is an error', e);
//   }
//   console.log('Done.');
// };

// const accessToken = getAccessToken();
const config = {
  headers: {
    'Content-type': 'application/json',
  },
};

export const registerService = (data: NormalRegisterRequest) => {
  return apiHelper(axios.post(baseUrlStaging + 'auth/register', data));
};
export const anonRegisterService = (data: AnonRegisterRequest) => {
  return apiHelper(axios.post(baseUrlStaging + 'auth/register-anon', data));
};

export const resetPasscode = (data: AnonRegisterRequest) => {
  return apiHelper(axios.post(baseUrlStaging + 'auth/reset-passcode', data));
};
export const loginService = (data: any) => {
  return apiHelper(axios.post(`${baseUrlStaging}auth/login`, data));
};

export const forgotPasscodeService = (data: any) => {
  return apiHelper(axios.post(`${baseUrlStaging}auth/forgot-passcode`, data));
};

export const postSurveyService = (data: PostSurveyRequest) => {
  return apiHelper(axios.post(`${baseUrlStaging}survey/submit-survey`, data));
};

export const resetPasscodeAnonService = (data: ResertPasscodeAnon) => {
  return apiHelper(
    axios.post(`${baseUrlStaging}auth/reset-passcode-anon`, data)
  );
};
export const checkBVNService = (data: any) => {
  return apiHelper(
    axios.get(
      `${baseUrlStaging}/check-account-availability-by-bvn?bvn=${data.bvn}`
    )
  );
};

export const getUsers = (data: any) => {
  return apiHelper(
    axios.get(`${baseUrlStaging}auth/get-user}`, {
      headers: {
        Authorization: `Bearer ${data}`,
        'Content-type': 'application/json',
      },
    })
  );
};
