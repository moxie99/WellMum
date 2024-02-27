import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Box, Image, SafeAreaBox } from '@/components/Base';
import { Text } from '@/components/Typography';
import ProgressLoader from 'rn-progress-loader';
import {
  heightPixel,
  screenHeight,
  screenWidth,
  widthPixel,
} from '../../utils';
import { frame } from '@/assets/images';
import useStore from '@/store/useStore';
import { usePostSurvey } from '@/hooks/useCreateRequest';
import { useNavigation } from '@react-navigation/native';

const AnalyzingDataScreen = () => {
  const { accountOpeningData, setAccountOpeningData } = useStore(
    (state) => state
  );
  const { isLoading, handlePostSurvey, data } = usePostSurvey();
  const navigation = useNavigation();
  console.log('details needed', accountOpeningData);

  useEffect(() => {
    if (accountOpeningData) {
      const response = handlePostSurvey(accountOpeningData);
    }
  }, []);

  return (
    <Box>
      <Box
        backgroundColor={'tertiary'}
        height={screenHeight * 0.4}
        width={screenWidth}
      >
        <Box
          position={'absolute'}
          right={screenWidth * 0.3}
          bottom={-screenHeight * 0.15}
        >
          <Image
            height={heightPixel(200)}
            width={widthPixel(200)}
            source={frame}
          />
        </Box>
      </Box>
      <Box height={screenHeight * 0.2} />
      <Box>
        <Text textAlign={'center'} variant={'bold16'} color={'black'}>
          Analysing your Data
        </Text>
        <Text
          textAlign={'center'}
          variant={'medium16'}
          color={'medGray'}
          marginVertical={'lg'}
        >
          Please wait, we are putting it all together...
        </Text>
      </Box>
      <ProgressLoader
        color='#FFFFFF'
        hudColor='#000000'
        isHUD
        isModal
        visible={isLoading}
      />
    </Box>
  );
};

export default AnalyzingDataScreen;

const styles = StyleSheet.create({});
