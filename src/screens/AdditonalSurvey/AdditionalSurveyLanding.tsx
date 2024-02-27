import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Box, SafeAreaBox } from '@/components/Base';
import ProgressBar from '@/components/Progress/LinearProgressBar';
import { Text } from '@/components/Typography';
import {
  heightPixel,
  screenWidth,
  widthPercentageToDP,
  widthPixel,
} from '../../utils';
import { palette } from '@/constants/theme';
import HorizontalRule from '@/components/Base/HorizontalRule';
import { Pressable } from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import useStore from '@/store/useStore';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: heightPixel(50),
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthPercentageToDP(3),
    marginVertical: heightPixel(15),
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(5),
    width: screenWidth * 0.85,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderColor: palette.gray,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#07B6B0',
  },
});
const RadioButton = ({ label, selected, onSelect, sub }) => {
  return (
    <TouchableOpacity
      style={[
        styles.radioButton,
        selected && { borderColor: '#07B6B0' },
        !selected && { borderColor: '#F2F2F2' },
      ]}
      onPress={onSelect}
    >
      <Box
        style={[styles.radioCircle, selected && { backgroundColor: '#07B6B0' }]}
      >
        {selected && <Box style={styles.selectedRb} />}
      </Box>
      <Box>
        <Text marginVertical={'sm'} variant={'medium14'} color={'black'}>
          {label}
        </Text>
        <Text variant={'medium14'} color={'medGray'}>
          {sub}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

const AdditionalSurveyLanding = () => {
  const [selectedItem, setSelectedItem] = useState<string>('"');

  const { accountOpeningData, setAccountOpeningData } = useStore(
    (state) => state
  );

  const navigation = useNavigation();
  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    console.log(item);
    if (item === 'Item 1') {
      // setSurveyQuestion({});
      setAccountOpeningData({
        ...accountOpeningData,
        userType: 'user',
        deviceId: '112345690778fghhgj566',
        questionAndAnswer: [
          {
            answer: 'Myself',
            question: 'How do you want to use GetCare?',
          },
        ],
      });
    } else if (item === 'Item 2') {
      // setSurveyQuestion({});
      setAccountOpeningData({
        ...accountOpeningData,
        userType: 'user',
        deviceId: '112390n565675689',
        questionAndAnswer: [
          {
            answer: 'Someone I Love',
            question: 'How do you want to use GetCare?',
          },
        ],
      });
    }
  };

  const navigateToNextScreen = () => {
    navigation.navigate('StruggleScreen');
  };

  return (
    <SafeAreaBox flex={1} backgroundColor={'white'} paddingHorizontal={'sm'}>
      <ProgressBar progress={0.3} />
      <Text marginVertical={'md'} variant={'medium14'} color={'medGray'}>
        Let's start somewhere.
      </Text>
      <Text variant={'bold24'} color={'black'}>
        How do you want to use GetCare?
      </Text>

      <Box style={styles.container}>
        <RadioButton
          label='For Myself'
          sub={'to help me with a struggle'}
          selected={selectedItem === 'Item 1'}
          onSelect={() => handleSelectItem('Item 1')}
        />
        <RadioButton
          label='For Someone I Love'
          sub={'to help them get better'}
          selected={selectedItem === 'Item 2'}
          onSelect={() => handleSelectItem('Item 2')}
        />
      </Box>
      <HorizontalRule buttonText='Continue' onPress={navigateToNextScreen} />
    </SafeAreaBox>
  );
};

export default AdditionalSurveyLanding;
