import React, { useEffect, useState } from 'react'

import { Box, SafeAreaBox, ScrollBox } from '@/components/Base'
import { Button, OtpButton, Pressable } from '@/components/Button'
import { Text } from '@/components/Typography'
import ProgressBar from '@/components/Progress/LinearProgressBar'
import { heightPixel, screenHeight } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import useStore from '@/store/useStore'
import { Entypo } from '@expo/vector-icons'
import { palette } from '@/constants/theme'
import { RFValue } from 'react-native-responsive-fontsize'
import CountryCodeSelectButton from '@/components/Button/CountryCodeSelectButton'
import { countryCode } from '@/constants/countryCode'
import { TouchableOpacity } from 'react-native'

export default function EnterPhoneVerification() {
  const [searchData, setSearchData] = useState('')
  const { setIsAnonymous, isAnonymous } = useStore((state) => state)
  const navigation = useNavigation()

  const newCountryCode = countryCode.filter((item: any) =>
    item?.name?.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
  )
  console.log(isAnonymous)

  const navToVerifyPhone = () => {
    navigation.navigate('ConfirmPasscode')
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
            <Pressable
              onPress={() => navigation.goBack()}
              borderWidth={1}
              borderColor={'wellMumLightGrayBorder'}
              height={RFValue(40)}
              width={RFValue(40)}
              borderRadius={12}
              alignItems={'center'}
              justifyContent={'center'}
              marginBottom={'lg'}
            >
              <Entypo
                name='chevron-thin-left'
                size={24}
                color={palette.primary}
              />
            </Pressable>
            <Box>
              <Text color='black' variant='regular20' marginBottom={'lg'}>
                Verify Your Number
              </Text>

              <Text marginVertical={'lg'} color='lightBlack' variant='medium16'>
                Enter Your Phone Number
              </Text>
            </Box>

            <CountryCodeSelectButton
              data={newCountryCode}
              inputLabel='(647)-(0000)-(0987)'
              inPutMaxLength={11}
              inPutOnChangeText={(value: string) => {
                setIsAnonymous({
                  ...isAnonymous,
                  phoneToSendOtp: value,
                })
              }}
              inPutValue={setIsAnonymous?.phoneToSendOtp}
              keyboardType='numeric'
              label='Code'
              onChangeText={(value) =>
                setIsAnonymous({
                  ...isAnonymous,
                  countryCode: value?.dial_code,
                })
              }
              searchData={searchData}
              setSearchData={(value) => setSearchData(value)}
              value={
                isAnonymous?.countryCode ? isAnonymous?.countryCode : '+234'
              }
            />

            <Box marginTop={'md'}>
              <Text variant={'regular12'} color={'wellMumGray'}>
                A verification code will be sent via SMS to your number.
              </Text>
            </Box>

            <Box height={screenHeight * 0.1} />

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
                onPress={navToVerifyPhone}
              />
            </Box>

            <Box height={screenHeight * 0.1} />
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
            {/* <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <OtpButton
                onChangeText={(item) => {
                  setPasscode(item)
                  setIsAnonymous({ ...isAnonymous, passcode: item })
                }}
                value={passcode}
              />
            </Box> */}
          </Box>
        </SafeAreaBox>
      </ScrollBox>
    </>
  )
}
