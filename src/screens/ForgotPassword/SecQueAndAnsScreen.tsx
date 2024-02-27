import React from 'react';
import ProgressLoader from 'rn-progress-loader';
import { SafeAreaBox, ScrollBox } from '@/components/Base';
import { Text } from '@/components/Typography';
import { StyleSheet } from 'react-native';
import useStore from '@/store/useStore';
import { screenWidth } from '../../constants';
import SimpleInput from '@/components/Input/SimpleInput';
import HorizontalRule from '@/components/Base/HorizontalRule';
import {
  useForgotPasscode,
  useForgotPasscodeAnon,
} from '@/hooks/useCreateRequest';

export default function SecQueAndAnsScreen() {
  const { setIsAnonymous, isAnonymous } = useStore((state) => state);

  const { data, handleForgotPasscodeAnon, isLoading } = useForgotPasscodeAnon();

  const submitRequest = () => {
    handleForgotPasscodeAnon(isAnonymous);
  };
  console.log(isAnonymous);
  return (
    <>
      <ScrollBox
        backgroundColor='white'
        bounces={false}
        flex={1}
        paddingHorizontal='md'
      >
        <SafeAreaBox>
          <Text variant={'bold14'} marginVertical={'md'}>
            Please Enter security Question and Answer at the point of account
            creation
          </Text>

          <SimpleInput
            isPassword
            wrapperStyle={{ borderRadius: 10 }}
            label='Please Enter Security Question when creating account'
            onChangeText={(text) => {
              setIsAnonymous({
                ...isAnonymous,
                secretQuestion: {
                  question: text,
                },
              });
            }}
            value={isAnonymous?.secretQuestion?.question}
          />

          <SimpleInput
            isPassword
            wrapperStyle={{ borderRadius: 10 }}
            label='Please Enter Security Answer to the question'
            onChangeText={(text) => {
              setIsAnonymous({
                ...isAnonymous,
                secretQuestion: {
                  question: isAnonymous.secretQuestion.question,
                  answer: text,
                },
              });
            }}
            value={isAnonymous?.secretQuestion?.answer}
          />
        </SafeAreaBox>
      </ScrollBox>

      <HorizontalRule buttonText='Submit Request' onPress={submitRequest} />

      <ProgressLoader
        color='#FFFFFF'
        hudColor='#000000'
        isHUD
        isModal
        visible={isLoading}
      />
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
