import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ProgressLoader from 'rn-progress-loader'

import { Box, Image, ScrollBox } from '@/components/Base'
import { Button, Pressable } from '@/components/Button'
import { Text } from '@/components/Typography'
import { hp } from '@/constants/layout'
import { useLogin } from '@/hooks/useCreateRequest'
import { palette } from '@/constants/theme'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPixel, screenWidth } from '../utils'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import UniversalBottomSheet from '@/components/Base/BottomSheet'
import SimpleInput from '@/components/Input/SimpleInput'
import { google } from '@/assets/images'

const styles = StyleSheet.create({
  margin: {
    marginTop: hp(90),
  },
  rotate: { transform: [{ rotate: '180deg' }] },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    maxWidth: 200,
  },
  pressableStyle: {
    backgroundColor: palette.lightPrimary,
    padding: RFValue(12),
    borderRadius: RFValue(20),
  },
  pressableStyle2: {
    backgroundColor: palette.white,
    padding: RFValue(12),
    borderRadius: RFValue(20),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: palette.lightGrey,
    width: screenWidth * 0.75,
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: 'white',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: palette.deepeTertiary,
  },
  pressableStyle3: {
    ...Platform.select({
      ios: {
        shadowColor: '#09454312',
        shadowOffset: { width: 0, height: 31 },
        shadowOpacity: 1,
        shadowRadius: 50,
      },
      android: {
        elevation: 10,
      },
    }),
  },
})

export default function LoginScreen() {
  const [activeTab, setActiveTab] = useState('Tab1')
  const [email, setEmail] = useState<string>('')
  const [passcode, setPasscode] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName)
  }

  console.log(activeTab)

  const { isLoading, handleLogin, data } = useLogin()
  const navigation = useNavigation()

  const navToSignUpScreen = () => {
    navigation.navigate('SignUpLanding')
  }
  const navToSignUpScreenAnon = () => {
    navigation.navigate('SignUpAnonymous')
  }
  const NavToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordLanding')
  }
  const NavToForgotPasswordScreenAnon = () => {
    navigation.navigate('ForgotPasswordLandingAnon')
  }

  const payload = {
    email,
    passcode,
    nickname,
  }

  console.log(payload)

  const submitToLogin = () => {
    navigation.navigate('GetCareRoot')
  }

  const navToSignUp = () => {
    navigation.navigate('SignUpLanding')
  }

  return (
    <Box alignItems='center' flex={1} justifyContent='center'>
      <StatusBar style='light' />
      <ScrollBox flex={1} backgroundColor={'white'} width='100%'>
        <SafeAreaView edges={['bottom', 'top']} style={styles.safeArea}>
          <Box>
            <Text color='black' variant='regular20'>
              Hi there 👋
            </Text>
            <Text color='wellMumGray' variant='regular14'>
              Welcome back, login to your account
            </Text>
          </Box>

          <Box marginTop={'sm'}>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Text variant='regular14'>Email Address</Text>
            </Box>
            <SimpleInput
              wrapperStyle={{ borderRadius: 10 }}
              label='Enter your email'
              placeholder='Enter your email'
              maxLength={50}
              onChangeText={(value) => {
                setEmail(value)
              }}
            />
          </Box>

          <Box marginTop={'sm'}>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Text variant='regular14'>Password</Text>
            </Box>
            <SimpleInput
              isPassword
              wrapperStyle={{ borderRadius: 10 }}
              placeholder='Enter your password'
              label='Enter your password'
              maxLength={50}
              onChangeText={(value) => {
                setPasscode(value)
              }}
            />
          </Box>
          <Box
            alignItems='center'
            flexDirection='row'
            justifyContent='space-between'
            marginBottom='md'
            marginTop={'lg'}
          >
            <Box />
            <Pressable
              style={[
                styles.pressableStyle3,
                {
                  backgroundColor: 'white',
                  paddingHorizontal: 12,
                  paddingVertical: 10,
                  borderRadius: 12,
                },
              ]}
              // style={styles.pressableStyle3}
              // onPress={
              //   activeTab === 'Tab1'
              //     ? NavToForgotPasswordScreen
              //     : NavToForgotPasswordScreenAnon
              // }
            >
              <Text variant={'bold14'} color={'primary'}>
                Forgot Password?
              </Text>
            </Pressable>
          </Box>

          <Button
            marginBottom={'md'}
            marginTop={'md'}
            backgroundColor={'primary'}
            variant='primary'
            label={'LOG IN'}
            onPress={submitToLogin}
          />

          <Box
            marginVertical={'Ml'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'sm'}
          >
            <Box
              height={StyleSheet.hairlineWidth}
              backgroundColor={'wellMumGray'}
              width={screenWidth * 0.3}
            />
            <Text color={'wellMumGray'} variant={'regular12'}>
              or
            </Text>
            <Box
              height={StyleSheet.hairlineWidth}
              backgroundColor={'wellMumGray'}
              width={screenWidth * 0.3}
            />
          </Box>

          <Box marginTop={'md'} alignItems={'center'} justifyContent={'center'}>
            <Box
              height={RFValue(60)}
              width={RFValue(60)}
              borderRadius={100000}
              backgroundColor={'wellMumDarkGray'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Image height={RFValue(22)} width={RFValue(22)} source={google} />
            </Box>
          </Box>

          <Box
            alignItems={'center'}
            justifyContent={'center'}
            gap={'sm'}
            marginTop='Ml'
            flexDirection={'row'}
          >
            <Text color='gray' variant='regular16'>
              Don’t have an account?
            </Text>
            <TouchableOpacity onPress={navToSignUp}>
              <Text color='primary' variant='regular16'>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Box>
        </SafeAreaView>
      </ScrollBox>

      <ProgressLoader
        color='#FFFFFF'
        hudColor='#000000'
        isHUD
        isModal
        visible={isLoading}
      />
    </Box>
  )
}
