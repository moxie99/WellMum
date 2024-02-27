import React, { useEffect } from 'react';
import { help } from '@/assets/images';
import { Box, Image, SafeAreaBox, ScrollBox } from '@/components/Base';
import { NextButton } from '@/components/Button';
import { Text } from '@/components/Typography';
import ProgressBar from '@/components/Progress/LinearProgressBar';
import { heightPixel } from '../../utils';
import { widthPixel } from '../../utils';
import SimpleInput from '@/components/Input/SimpleInput';
import { screenHeight } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import useStore from '@/store/useStore';

export default function ForgotPasswordLandingAnon() {
  const navigation = useNavigation();

  useEffect(() => {
    setIsAnonymous({});
  }, []);
  const { setIsAnonymous, isAnonymous } = useStore((state) => state);

  const continueToOTP = () => {
    navigation.navigate('NewPasswordScreen');
  };
  console.log('[]]]]', isAnonymous);
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
              <ProgressBar progress={0.3} />

              <Text color='grey' variant='regular14' marginBottom={'sm'}>
                Forgot Passcode?
              </Text>
              <Text color='black' variant='medium14' marginBottom={'sm'}>
                Don't worry, it happens to the best of us
              </Text>

              <Box marginTop={'md'}>
                <Box
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  marginTop={'md'}
                >
                  <Text variant='regular14'>Nickname</Text>
                  <Image
                    source={help}
                    height={heightPixel(20)}
                    width={widthPixel(20)}
                  />
                </Box>
                <SimpleInput
                  wrapperStyle={{ borderRadius: 10 }}
                  label='Enter Nickname'
                  maxLength={50}
                  onChangeText={(text) => {
                    setIsAnonymous({
                      ...isAnonymous,
                      nickname: text,
                    });
                  }}
                  value={isAnonymous?.email}
                />
              </Box>
            </Box>
            <Box height={screenHeight * 0.45} />
            <Box
              marginVertical={'md'}
              height={StyleSheet.hairlineWidth}
              backgroundColor={'grey'}
            />
            <Box>
              <Box marginBottom='sl' style={{ marginTop: 50 }}>
                <NextButton onPress={continueToOTP} label='Continue' />
              </Box>
            </Box>
          </Box>
        </SafeAreaBox>
      </ScrollBox>
    </>
  );
}
