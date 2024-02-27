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
const RadioButton = ({ label, selected, onSelect }) => {
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
      </Box>
    </TouchableOpacity>
  );
};

const StruggleDurations = () => {
  const [selectedItem, setSelectedItem] = useState<string>('"');

  const { accountOpeningData, setAccountOpeningData } = useStore(
    (state) => state
  );

  console.log(selectedItem, '[[]][[');
  const navigation = useNavigation();
  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    if (item === 'Item 1') {
      const newObject = {
        question: 'When did it all start?',
        answer: '1-12 months ago',
      };
      const newArray = [...accountOpeningData.questionAndAnswer, newObject];
      setAccountOpeningData({
        ...accountOpeningData,
        questionAndAnswer: newArray,
      });
    } else if (item === 'Item 2') {
      const newObject = {
        question: 'When did it all start?',
        answer: '1 -3 years ago',
      };
      const newArray = [...accountOpeningData.questionAndAnswer, newObject];
      setAccountOpeningData({
        ...accountOpeningData,
        questionAndAnswer: newArray,
      });
    } else if (item === 'Item 3') {
      const newObject = {
        question: 'When did it all start?',
        answer: '3 -10 years ago',
      };
      const newArray = [...accountOpeningData.questionAndAnswer, newObject];
      setAccountOpeningData({
        ...accountOpeningData,
        questionAndAnswer: newArray,
      });
    } else if (item === 'Item 4') {
      const newObject = {
        question: 'When did it all start?',
        answer: 'More than 10 years ago',
      };
      const newArray = [...accountOpeningData.questionAndAnswer, newObject];
      setAccountOpeningData({
        ...accountOpeningData,
        questionAndAnswer: newArray,
      });
    } else if (item === 'Item 5') {
      const newObject = {
        question: 'When did it all start?',
        answer: "I can't really remember",
      };
      const newArray = [...accountOpeningData.questionAndAnswer, newObject];
      setAccountOpeningData({
        ...accountOpeningData,
        questionAndAnswer: newArray,
      });
    }
  };

  const navigateToNextScreen = () => {
    navigation.navigate('StruggleFrequency');
  };

  console.log(accountOpeningData, '3333333');
  return (
    <SafeAreaBox flex={1} backgroundColor={'white'} paddingHorizontal={'sm'}>
      <ProgressBar progress={0.65} />
      <Text marginVertical={'md'} variant={'medium14'} color={'medGray'}>
        We are getting familiar
      </Text>
      <Text variant={'bold24'} color={'black'}>
        When did it all start?
      </Text>

      <Box style={styles.container}>
        <RadioButton
          label='1 - 12 months ago'
          selected={selectedItem === 'Item 1'}
          onSelect={() => handleSelectItem('Item 1')}
        />
        <RadioButton
          label='1 - 3 years ago'
          selected={selectedItem === 'Item 2'}
          onSelect={() => handleSelectItem('Item 2')}
        />
        <RadioButton
          label='3 - 10 years ago   '
          selected={selectedItem === 'Item 3'}
          onSelect={() => handleSelectItem('Item 3')}
        />
        <RadioButton
          label='More than 10 years ago'
          selected={selectedItem === 'Item 4'}
          onSelect={() => handleSelectItem('Item 4')}
        />
        <RadioButton
          label='I can’t really remember'
          selected={selectedItem === 'Item 5'}
          onSelect={() => handleSelectItem('Item 5')}
        />
      </Box>
      <HorizontalRule buttonText='Continue' onPress={navigateToNextScreen} />
    </SafeAreaBox>
  );
};

export default StruggleDurations;
