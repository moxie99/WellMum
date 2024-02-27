export type NormalRegisterRequest = {
  deviceId: string;
  email: string;
  firstName: string;
  lastName: string;
  passcode: string;
  role: string | 'Regular';
};

export type AnonRegisterRequest = {
  deviceId: string;
  nickname: string;
  passcode: string;
  secretQuestion: {
    answer: string;
    question: string;
  };
};

export type LoginRequest = {
  email: string;
  nickname: string;
  passcode: string;
};

export type ForgetPasswordRequest = {
  email: string;
};

export type LookUpRequest = {
  email: string;
  nickname: string;
};

export type ResetPasscodeRequest = {
  confirmPasscode: string;
  email: string;
  newPasscode: string;
};

export type ResertPasscodeAnon = {
  confirmPasscode: string;
  newPasscode: string;
  nickname: string;
  secretQuestion: {
    answer: string;
    question: string;
  };
};

export type VerifyOTPRequest = {
  code: string;
  email: string;
};

export type VerifyEmailRequest = {
  email: string;
};

export type VerifyPhoneNumberRequest = {
  phoneNumber: string;
};

export type UpdateAccountBasicInfoRequest = {
  accountHolder: string;
  accountNumber: string;
  bankName: string;
  bio: string;
  dateOfBirth: string;
  firstName: string;
  gender: string;
  image: string;
  interests: [string];
  lastName: string;
  nickname: string;
  phoneNumber: string;
};

export type UpdateBioDateRequest = {
  city: string;
  country: string;
  imageOfId: string;
  meansOfId: string;
  passportPhoto: string;
  placeOfBirth: string;
  selfiePhoto: string;
  state: string;
  street: string;
};

export type ValidateOTPRequest = {
  pin: string;
};

export type QuestionAndAnswerType = {
  answer: string;
  question: string;
};

export type SubmitSurveyRequest = {
  deviceId: string;
  questionAndAnswer: [QuestionAndAnswerType];
  userType: 'user';
};

export type JoinWaitListRequest = {
  email: string;
  firstName: string;
  lastName: string;
  role: string | 'Creative';
};

export type PostSurveyRequest = {
  deviceId: string;
  questionAndAnswer: {
    answer: string;
    question: string;
  }[];
  userType: 'user';
};
