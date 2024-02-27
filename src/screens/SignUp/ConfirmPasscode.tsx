import React, { useEffect, useState } from 'react'

import { Box, SafeAreaBox, ScrollBox } from '../../components/Base'
import { OtpButton, Pressable } from '../../components/Button'
import { Text } from '../../components/Typography'
import ProgressBar from '@/components/Progress/LinearProgressBar'
import ProgressLoader from 'rn-progress-loader'
import { heightPixel } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import useStore from '@/store/useStore'
import { useRegisterUser } from '@/hooks/useCreateRequest'
import { resetNavigation } from '@/navigation/ResetNavigator'
import { RFValue } from 'react-native-responsive-fontsize'
import { Entypo } from '@expo/vector-icons'
import { palette } from '@/constants/theme'

export default function ConfirmPasscode() {
  const [nickName, setnickName] = useState<string>('')
  const navigation = useNavigation()
  const [passcode, setPasscode] = useState<string>('')

  const { isLoading, handleRegisterUsers, data } = useRegisterUser()
  const { setIsAnonymous, isAnonymous } = useStore((state) => state)

  useEffect(() => {
    if (passcode && passcode.length === 6) {
      resetNavigation('LocationScreen')
    }
  }, [passcode])

  return (
    <>
      <ScrollBox
        backgroundColor='harsh'
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
                <Text color='black' variant='regular20' marginBottom={'sm'}>
                  Verify Your Number
                </Text>

                <Text color='lightBlack' variant='regular14'>
                  We send a code to{' '}
                  <Text variant={'regular14'} color={'primary'}>
                    (+234 ******987).{' '}
                  </Text>
                  Enter it here to verify your identity.
                </Text>
              </Box>
            </Box>
            <Box height={heightPixel(30)} />
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <OtpButton
                onChangeText={(item) => setPasscode(item)}
                value={passcode}
              />
            </Box>
          </Box>
        </SafeAreaBox>
      </ScrollBox>

      <ProgressLoader
        color='#FFFFFF'
        hudColor='#000000'
        isHUD
        isModal
        visible={isLoading}
      />
    </>
  )
}
