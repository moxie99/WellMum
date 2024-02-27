/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-empty-interface */

import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'

export type AppNavRoutes = {
  IndexScreen: undefined
  LoginScreen: undefined
  AnalysisDecisionScreen: undefined
  OtpVerificationScreen: undefined
  NewRequestScreen: undefined
  RequestDetailsScreen: undefined
  NextOfKinScreen: undefined
  PendingAccountScreen: undefined
  CreatedAccountScreen: undefined
  FailedAccountScreen: undefined
  SignUpAnonymous: undefined
  SignUpLanding: undefined
  EnterPhoneVerification: undefined
  ConfirmPasscode: undefined
  LocationScreen: undefined
  ForgotPasswordLanding: undefined
  OTPScreen: undefined
  SecQueAndAnsScreen: undefined
  NewPasswordScreen: undefined
  GetCareRoot: NavigatorScreenParams<RootTabParamList> | undefined
  FeedDetails: {
    imgUrl: string
    title: string
    description: string
    uploadNumber: string
    bookmarkedNumber: string
    sharedNumber: string
    readTime: string
    item: object
  }
  PaymentScreen: {
    item: object
  }
  CommunityDetailsScreen: {
    item: object
  }
  PostDetails: {
    item: object
  }
  TheraphyDetails: {
    item: object
  }
  AdditionalSurveyLanding: undefined
  StruggleScreen: undefined
  StruggleDurations: undefined
  StruggleFrequency: undefined
  StruggleIndulgence: undefined
  AnalyzingDataScreen: undefined
  AnalysisDecisionScreen: undefined
  ForgotPasswordLandingAnon: undefined
  NewPasswordScreen: undefined
}

export type RootTabParamList = {
  HomeScreen: undefined
  FeedsScreen: undefined
  CommunityScreen: undefined
  TheraphyScreen: undefined
  AccountScreen: undefined
}

export type StackParamsList = AppNavRoutes
declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamsList {}
  }
}
