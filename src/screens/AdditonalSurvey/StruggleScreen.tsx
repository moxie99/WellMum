import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Text } from '@/components/Typography';
import { Box, SafeAreaBox } from '@/components/Base';
import useStore from '@/store/useStore';
import { screenWidth } from '../../constants';
import { palette } from '@/constants/theme';
import { heightPixel } from '../../utils';
import ProgressBar from '@/components/Progress/LinearProgressBar';
import HorizontalRule from '@/components/Base/HorizontalRule';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * 0.9,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPixel(10),
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
    gap: 10,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 3,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
const Checkbox = ({ label, sub, isChecked, onToggle }) => {
  return (
    <TouchableOpacity
      style={[
        styles.checkboxContainer,
        isChecked && { borderColor: '#07B6B0' },
        !isChecked && { borderColor: '#F2F2F2' },
      ]}
      onPress={onToggle}
    >
      <Box
        style={[styles.checkbox, isChecked && { backgroundColor: '#07B6B0' }]}
      >
        {isChecked && (
          <Text variant={'bold14'} style={styles.checkmark}>
            &#10003;
          </Text>
        )}
      </Box>
      <Box gap={'sm'}>
        <Text variant={'bold14'} color={'black'}>
          {label}
        </Text>
        <Text variant={'medium14'} color={'medGray'}>
          {sub}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
const StruggleScreen = () => {
  const { accountOpeningData, setAccountOpeningData } = useStore(
    (state) => state
  );
  const navigation = useNavigation();
  const [checkedItems, setCheckedItems] = useState([]);

  const handleToggleItem = (itemLabel, itemSubtext) => {
    const isChecked = checkedItems.find((item) => item.label === itemLabel);
    if (isChecked) {
      const newCheckedItems = checkedItems.filter(
        (item) => item.label !== itemLabel
      );
      setCheckedItems(newCheckedItems);
    } else {
      setCheckedItems([
        ...checkedItems,
        { label: itemLabel, sub: itemSubtext },
      ]);
    }
  };
  const navigateToNext = () => {
    const subtexts = checkedItems.map((item) => item.sub).join(', ');
    const newObject = {
      question: 'Tell me what you struggle with',
      answer: subtexts,
    };
    const newArray = [...accountOpeningData.questionAndAnswer, newObject];
    console.log('-----', newArray);
    setAccountOpeningData({
      ...accountOpeningData,
      questionAndAnswer: newArray,
    });
    navigation.navigate('StruggleDurations');
  };

  console.log(checkedItems, '----------');
  console.log('sdfghj', accountOpeningData);

  return (
    <SafeAreaBox flex={1} backgroundColor={'white'} paddingHorizontal={'sm'}>
      <ProgressBar progress={0.5} />
      <Text marginVertical={'md'} variant={'medium14'} color={'medGray'}>
        We are picking up
      </Text>
      <Text variant={'bold24'} color={'black'}>
        Tell me what you struggle with
      </Text>

      <Box marginTop={'lg'} style={styles.container}>
        <Checkbox
          label='Substance'
          sub={'Alcohol, Tobacco, Cocaine, Drugs et.c'}
          isChecked={checkedItems.some((item) => item.label === 'Substance')}
          onToggle={() =>
            handleToggleItem(
              'Substance',
              'Alcohol, Tobacco, Cocaine, Drugs et.c'
            )
          }
        />

        <Checkbox
          label='Behavioural'
          sub={'Gambling, internet, Games, Shopping...'}
          isChecked={checkedItems.some((item) => item.label === 'Behavioural')}
          onToggle={() =>
            handleToggleItem(
              'Behavioural',
              'Gambling, internet, Games, Shopping...'
            )
          }
        />

        <Checkbox
          label='Sexual'
          sub={'Pornography, Masturbation, Games, Binge Activities'}
          isChecked={checkedItems.some((item) => item.label === 'Sexual')}
          onToggle={() =>
            handleToggleItem(
              'Sexual',
              'Pornography, Masturbation, Games, Binge Activities'
            )
          }
        />
      </Box>
      <HorizontalRule buttonText='Continue' onPress={navigateToNext} />
    </SafeAreaBox>
  );
};

export default StruggleScreen;
