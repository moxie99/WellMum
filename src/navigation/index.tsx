import { NavigationContainer } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack'
import { withTranslation } from 'react-i18next'

import { navigationRef, resetNavigation } from '../navigation/ResetNavigator'
import { IndexScreen, LoginScreen } from '../screens/'

import type { AppNavRoutes } from './types'
import { SignUpLanding } from '../screens/SignUp'
import ConfirmPasscode from '../screens/SignUp/ConfirmPasscode'
import ForgotPasswordLanding from '../screens/ForgotPassword/ForgotPasswordLanding'
import SecQueAndAnsScreen from '../screens/ForgotPassword/SecQueAndAnsScreen'
import NewPasswordScreen from '../screens/ForgotPassword/NewPassword'
import { GetCareBottomTab } from './BottomNav/GetCareBottomTab'
import FeedDetails from '../screens/Feeds/FeedDetails'
import PaymentScreen from '../screens/Community/PaymentScreen'
import CommunityScreen from '../screens/Community/CommunityScreen'
import PostDetails from '../screens/Community/PostDetails'
import TheraphyDetails from '../screens/Theraphy/TheraphyDetails'
import AdditionalSurveyLanding from '../screens/AdditonalSurvey/AdditionalSurveyLanding'
import StruggleScreen from '../screens/AdditonalSurvey/StruggleScreen'
import StruggleDurations from '../screens/AdditonalSurvey/StruggleDurations'
import StruggleFrequency from '../screens/AdditonalSurvey/StrggleFrequency'
import StruggleIndulgence from '../screens/AdditonalSurvey/StruggleIndulgence'
import AnalyzingDataScreen from '../screens/AdditonalSurvey/AnalyzingDataScreen'
import AnalysisDecisionScreen from '../screens/AdditonalSurvey/AnalysisDecisionScreen'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ForgotPasswordLandingAnon from '@/screens/ForgotPassword/ForgotPasswordLandingAnon'
import useStore from '@/store/useStore'
import EnterPhoneVerification from '@/screens/SignUp/EnterPhoneVerification'
import LocationScreen from '@/screens/SignUp/LocationScreen'

export type AppNavScreenProps<Screen extends keyof AppNavRoutes> =
  StackScreenProps<AppNavRoutes, Screen>

const Stack = createStackNavigator<AppNavRoutes>()

function Navigation() {
  const { setUserData, setAccountOpeningData, accountOpeningData } = useStore(
    (state) => state
  )
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('accessToken')
        if (value !== null) {
          console.log(value, '=======')
          setUserData({ token: value })
          resetNavigation('GetCareRoot')
        }
      } catch (e) {
        console.log('error', e)
      }
    }

    getData()
  }, [])
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
      >
        <Stack.Screen component={IndexScreen} name='IndexScreen' />
        <Stack.Screen component={LoginScreen} name='LoginScreen' />
        <Stack.Screen component={SignUpLanding} name='SignUpLanding' />
        <Stack.Screen
          component={EnterPhoneVerification}
          name='EnterPhoneVerification'
        />
        <Stack.Screen component={ConfirmPasscode} name='ConfirmPasscode' />
        <Stack.Screen
          name='AnalysisDecisionScreen'
          component={AnalysisDecisionScreen}
        />
        <Stack.Screen
          name='ForgotPasswordLandingAnon'
          component={ForgotPasswordLandingAnon}
        />
        <Stack.Screen component={LocationScreen} name='LocationScreen' />
        <Stack.Screen
          component={ForgotPasswordLanding}
          name='ForgotPasswordLanding'
        />
        <Stack.Screen
          component={SecQueAndAnsScreen}
          name='SecQueAndAnsScreen'
        />
        <Stack.Screen component={NewPasswordScreen} name='NewPasswordScreen' />
        <Stack.Screen name='GetCareRoot' component={GetCareBottomTab} />
        <Stack.Screen name='FeedDetails' component={FeedDetails} />
        <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
        <Stack.Screen
          name='CommunityDetailsScreen'
          component={CommunityScreen}
        />
        <Stack.Screen name='PostDetails' component={PostDetails} />
        <Stack.Screen name='TheraphyDetails' component={TheraphyDetails} />
        <Stack.Screen
          name='AdditionalSurveyLanding'
          component={AdditionalSurveyLanding}
        />
        <Stack.Screen name='StruggleScreen' component={StruggleScreen} />
        <Stack.Screen name='StruggleDurations' component={StruggleDurations} />
        <Stack.Screen name='StruggleFrequency' component={StruggleFrequency} />
        <Stack.Screen
          name='StruggleIndulgence'
          component={StruggleIndulgence}
        />
        <Stack.Screen
          name='AnalyzingDataScreen'
          component={AnalyzingDataScreen}
        />
      </Stack.Navigator>

      <Stack.Screen
        name='AnalysisDecisionScreen'
        component={AnalysisDecisionScreen}
      />
    </NavigationContainer>
  )
}

export default withTranslation()(Navigation)
