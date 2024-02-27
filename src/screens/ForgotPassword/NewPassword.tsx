import React, { useRef, useState } from 'react';
import { Box, Image, SafeAreaBox, ScrollBox } from '@/components/Base';
import ProgressLoader from 'rn-progress-loader';
import { NextButton } from '@/components/Button';
import { Text } from '@/components/Typography';
import ProgressBar from '@/components/Progress/LinearProgressBar';
import { StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useStore from '@/store/useStore';
import { heightPixel, screenHeight, widthPixel } from '../../utils';
import { screenWidth } from '../../constants';
import { help } from '@/assets/images';
import SimpleInput from '@/components/Input/SimpleInput';
import { showToast } from '@/utils/helpers';
import { useForgotPasscode } from '@/hooks/useCreateRequest';

export default function NewPasswordScreen() {
  const { setIsAnonymous, isAnonymous } = useStore((state) => state);
  const navigation = useNavigation();

  const continueToSecSection = () => {
    if (isAnonymous.newPasscode !== isAnonymous?.confirmPasscode) {
      return showToast({
        message: 'New Passcode and confirm passcode must be the same',
      });
    }
    if (!isAnonymous.newPasscode) {
      return showToast({ message: 'Please enter your new passcode' });
    }
    if (!isAnonymous.confirmPasscode) {
      return showToast({ message: 'Please confirm your new passcode' });
    }

    navigation.navigate('SecQueAndAnsScreen');
  };

  console.log('anonymous', isAnonymous);

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
              <ProgressBar progress={1.0} />

              <Text color='grey' variant='regular14' marginBottom={'sm'}>
                Save New Password
              </Text>
              <Text color='black' variant='medium16' marginBottom={'sm'}>
                Let's get you back on track!
              </Text>
            </Box>
            <Box marginTop={'md'}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                marginTop={'md'}
              >
                <Text variant='regular14'>New Passcode</Text>
                <Image
                  source={help}
                  height={heightPixel(20)}
                  width={widthPixel(20)}
                />
              </Box>
              <SimpleInput
                isPassword
                wrapperStyle={{ borderRadius: 10 }}
                label='Enter New Passcode'
                maxLength={50}
                onChangeText={(text) => {
                  setIsAnonymous({
                    ...isAnonymous,
                    newPasscode: text,
                  });
                }}
                value={isAnonymous?.newPasscode}
              />
            </Box>
            <Box marginTop={'md'}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                marginTop={'md'}
              >
                <Text variant='regular14'>Confirm Passcode</Text>
                <Image
                  source={help}
                  height={heightPixel(20)}
                  width={widthPixel(20)}
                />
              </Box>
              <SimpleInput
                isPassword
                wrapperStyle={{ borderRadius: 10 }}
                label='Enter Passcode Again'
                maxLength={50}
                onChangeText={(text) => {
                  setIsAnonymous({
                    ...isAnonymous,
                    confirmPasscode: text,
                  });
                }}
                value={isAnonymous?.confirmPasscode}
              />
            </Box>

            <Box height={screenHeight * 0.27} />
            <Box
              marginVertical={'md'}
              height={StyleSheet.hairlineWidth}
              backgroundColor={'grey'}
            />
            <Box marginBottom='sl' style={{ marginTop: 50 }}>
              <NextButton
                onPress={continueToSecSection}
                label='Save New Password'
              />
            </Box>
          </Box>
        </SafeAreaBox>
      </ScrollBox>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
    width: screenWidth * 0.2,
    textAlign: 'center',
    fontSize: 18,
  },
  focusBorder: {
    borderColor: '#07B6B0',
  },
});
