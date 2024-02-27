import React, { useState } from 'react'

import { google, help } from '@/assets/images'
import { Box, Image, SafeAreaBox, ScrollBox } from '@/components/Base'
import { Button, NextButton } from '@/components/Button'
import { Text } from '@/components/Typography'
import { palette } from '@/constants/theme'
import ProgressBar from '@/components/Progress/LinearProgressBar'
import {
  heightPercentageToDP,
  heightPixel,
  screenWidth,
  widthPercentageToDP,
} from '../../utils'
import { widthPixel } from '../../utils'
import SimpleInput from '@/components/Input/SimpleInput'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { screenHeight } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import useStore from '@/store/useStore'
import { RFValue } from 'react-native-responsive-fontsize'

export default function SignUpLanding() {
  const [nickName, setnickName] = useState<string>('')
  const { setIsAnonymous, isAnonymous } = useStore((state) => state)
  const navigation = useNavigation()
  const navigateToAnonymous = () => {
    setIsAnonymous({ ...isAnonymous, anonymous: true })
    navigation.navigate('SignUpAnonymous')
  }

  const continueToVerifyNumber = () => {
    setIsAnonymous({ ...isAnonymous, anonymous: false })
    navigation.navigate('EnterPhoneVerification')
  }

  const navToLogin = () => {
    navigation.navigate('LoginScreen')
  }

  return (
    <>
      <ScrollBox
        backgroundColor='white'
        bounces={false}
        flex={1}
        paddingHorizontal='md'
      >
        <SafeAreaBox>
          <Box
            flexDirection={'column'}
            justifyContent={'space-between'}
            flex={1}
          >
            <Box>
              <Text color='black' variant='regular20' marginBottom={'xs'}>
                Get Proper care with us
              </Text>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Box width={'45%'} marginTop={'sm'}>
                  <Box
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Text variant='regular14'>FirstName</Text>
                  </Box>
                  <SimpleInput
                    wrapperStyle={{ borderRadius: 10 }}
                    label='Enter First Name'
                    placeholder='Enter First Name'
                    maxLength={50}
                    onChangeText={(text) => {
                      setIsAnonymous({
                        ...isAnonymous,
                        firstName: text,
                      })
                    }}
                  />
                </Box>
                <Box width={'45%'} marginTop={'sm'}>
                  <Box
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Text variant='regular14'>LastName</Text>
                  </Box>
                  <SimpleInput
                    wrapperStyle={{ borderRadius: 10 }}
                    label='Enter Last Name'
                    placeholder='Enter Last Name'
                    maxLength={50}
                    onChangeText={(text) => {
                      setIsAnonymous({
                        ...isAnonymous,
                        lastName: text,
                        role: 'Regular',
                        deviceId: 's231456789',
                      })
                    }}
                  />
                </Box>
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
                  onChangeText={(text) => {
                    setIsAnonymous({
                      ...isAnonymous,
                      email: text,
                    })
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
                  label='Enter your password'
                  placeholder='Enter your password'
                  maxLength={50}
                  onChangeText={(text) => {
                    setIsAnonymous({
                      ...isAnonymous,
                      email: text,
                    })
                  }}
                />
              </Box>

              <Box
                marginTop='Ml'
                flexDirection={'row'}
                flex={1}
                flexWrap='wrap'
                alignItems={'center'}
                justifyContent={'center'}
                gap={'xs'}
              >
                <Text color='gray' variant='regular16'>
                  By continuing, you agree to our
                </Text>
                <Text color='primary' variant='regular16'>
                  Terms and Conditions
                </Text>
                <Text color='gray' variant='regular16'>
                  and
                </Text>
                <Text color='primary' variant='regular16'>
                  Privacy Policy
                </Text>
                <Text color='gray' variant='regular16'>
                  .
                </Text>
              </Box>

              <Box>
                <Button
                  marginVertical='lg'
                  label='NEXT'
                  variant='primary'
                  onPress={continueToVerifyNumber}
                />
              </Box>
              <Box
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

              <Box
                marginTop={'md'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Box
                  height={RFValue(60)}
                  width={RFValue(60)}
                  borderRadius={100000}
                  backgroundColor={'wellMumDarkGray'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Image
                    height={RFValue(22)}
                    width={RFValue(22)}
                    source={google}
                  />
                </Box>
              </Box>

              <Box
                alignItems={'center'}
                justifyContent={'center'}
                gap={'sm'}
                marginTop='md'
                flexDirection={'row'}
              >
                <Text color='gray' variant='regular16'>
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={navToLogin}>
                  <Text color='primary' variant='regular16'>
                    Log in
                  </Text>
                </TouchableOpacity>
              </Box>
            </Box>
          </Box>
        </SafeAreaBox>
      </ScrollBox>
    </>
  )
}
