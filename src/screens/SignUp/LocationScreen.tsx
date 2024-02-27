import React from 'react'

import { Box, SafeAreaBox, ScrollBox } from '@/components/Base'
import { Button, Pressable } from '@/components/Button'
import ProgressLoader from 'rn-progress-loader'
import { Text } from '@/components/Typography'
import { heightPixel, screenWidth } from '../../utils'
import SimpleInput from '@/components/Input/SimpleInput'
import { useNavigation } from '@react-navigation/native'
import useStore from '@/store/useStore'
import { useRegisterAnon } from '@/hooks/useCreateRequest'
import { RFValue } from 'react-native-responsive-fontsize'
import { palette } from '@/constants/theme'
import { Entypo, SimpleLineIcons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
export default function LocationScreen() {
  const navigation = useNavigation()

  const { setIsAnonymous, isAnonymous } = useStore((state) => state)

  const skipToLogin = () => {
    navigation.navigate('LoginScreen')
  }

  const submitAddress = () => {
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
          <Box flexDirection={'column'} flex={1}>
            <Box>
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
            </Box>

            <Box>
              <Text color='black' variant='regular20' marginBottom={'lg'}>
                Set up your Location
              </Text>
              <Text color='lightBlack' variant='regular14'>
                Location
              </Text>
            </Box>

            <Box>
              <SimpleInput
                multiline
                height={heightPixel(150)}
                wrapperStyle={{ borderRadius: 10 }}
                label='Enter your address'
                onChangeText={(value) => {
                  setIsAnonymous({
                    ...isAnonymous,
                    location: value,
                  })
                }}
                value={isAnonymous?.location}
              />
            </Box>

            <Box
              marginVertical={'lg'}
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

            <Box marginTop={'lg'} marginBottom={'Ml'}>
              <Pressable
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'md'}
                borderColor={'wellMumGray'}
                borderWidth={1}
                borderRadius={10}
                padding={'md'}
              >
                <SimpleLineIcons
                  name='location-pin'
                  size={24}
                  color={palette.wellMumGray}
                />
                <Text flex={1} color={'wellMumGray'} variant={'regular14'}>
                  Use your current location
                </Text>
              </Pressable>
            </Box>
            <Button
              marginBottom={'md'}
              backgroundColor={'primary'}
              variant='primary'
              label={'Enter'}
              onPress={submitAddress}
            />

            <Button
              marginBottom={'md'}
              backgroundColor={'lightPurple'}
              label={'Skip'}
              onPress={skipToLogin}
            />
          </Box>
        </SafeAreaBox>
        {/* <ProgressLoader
          color='#FFFFFF'
          hudColor='#000000'
          isHUD
          isModal
          visible={isLoading}
        /> */}
      </ScrollBox>
    </>
  )
}
