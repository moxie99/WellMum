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

interface CheckboxItem {
  label: string;
}
interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}
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
const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onToggle }) => {
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
      </Box>
    </TouchableOpacity>
  );
};
const StruggleIndulgence = () => {
  const { accountOpeningData, setAccountOpeningData } = useStore(
    (state) => state
  );
  const navigation = useNavigation();
  const [checkedItems, setCheckedItems] = useState<CheckboxItem[]>([]);

  const handleToggleItem = (itemLabel: string) => {
    const isChecked = checkedItems.find((item) => item.label === itemLabel);
    if (isChecked) {
      const newCheckedItems = checkedItems.filter(
        (item) => item.label !== itemLabel
      );
      setCheckedItems(newCheckedItems);
    } else {
      setCheckedItems([...checkedItems, { label: itemLabel }]);
    }
  };
  const navigateToNext = () => {
    const subtexts = checkedItems.map((item) => item.label).join(', ');
    const newObject = {
      question: 'How do you indulge in these habits?',
      answer: subtexts,
    };
    const newArray = [...accountOpeningData.questionAndAnswer, newObject];

    setAccountOpeningData({
      ...accountOpeningData,
      questionAndAnswer: newArray,
    });
    navigation.navigate('AnalyzingDataScreen');
  };

  return (
    <SafeAreaBox flex={1} backgroundColor={'white'} paddingHorizontal={'sm'}>
      <ProgressBar progress={0.85} />
      <Text marginVertical={'md'} variant={'medium14'} color={'medGray'}>
        I'm still here
      </Text>
      <Text variant={'bold24'} color={'black'}>
        How do you indulge in these habits?
      </Text>

      <Box marginTop={'lg'} style={styles.container}>
        <Checkbox
          label='Websites    '
          isChecked={checkedItems.some((item) => item.label === 'Websites    ')}
          onToggle={() => handleToggleItem('Pornography Magazines    ')}
        />

        <Checkbox
          label='Pornography Magazines        '
          isChecked={checkedItems.some(
            (item) => item.label === 'Pornography Magazines    '
          )}
          onToggle={() => handleToggleItem('Pornography Magazines    ')}
        />

        <Checkbox
          label='Sports Betting Sites     '
          isChecked={checkedItems.some(
            (item) => item.label === 'Sports Betting Sites     '
          )}
          onToggle={() => handleToggleItem('Sports Betting Sites     ')}
        />
        <Checkbox
          label='Sports Betting Shops  '
          isChecked={checkedItems.some(
            (item) => item.label === 'Sports Betting Shops  '
          )}
          onToggle={() => handleToggleItem('Sports Betting Shops  ')}
        />
        <Checkbox
          label=' Local Substance Supplier '
          isChecked={checkedItems.some(
            (item) => item.label === ' Local Substance Supplier '
          )}
          onToggle={() => handleToggleItem(' Local Substance Supplier ')}
        />
        <Checkbox
          label='Motels'
          isChecked={checkedItems.some((item) => item.label === 'Motels')}
          onToggle={() => handleToggleItem('Motels')}
        />
      </Box>
      <HorizontalRule buttonText='Complete Survey' onPress={navigateToNext} />
    </SafeAreaBox>
  );
};

export default StruggleIndulgence;
