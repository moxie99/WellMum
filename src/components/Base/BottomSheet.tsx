/* eslint-disable react/no-unused-prop-types */
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import React, { RefObject, useMemo, VFC } from 'react';

import { Button } from '../Button';
import Box from './Box';
import { Text } from '../Typography';
import { envelope } from '@/assets/images';
import Image from './Image';
import { RFValue } from 'react-native-responsive-fontsize';
import { screenWidth } from '../../constants';

type MutualSuccessProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  onProceed: () => void;
  handleClose: () => void;
  title?: string;
  subtitle?: string;
  amount?: string;
  receiver?: string;
  imgStatus?: string;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.5} pressBehavior='close' />
);

const UniversalBottomSheet: VFC<MutualSuccessProps> = (props) => {
  const snapPoints = useMemo(() => ['52%', '52%'], []);

  const handleClose = () => {
    props.handleClose();
    props.bottomSheetModalRef.current?.close();
  };

  return (
    <Box>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={props.bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView
          contentContainerStyle={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Box alignItems='center' flex={1} justifyContent='center' p='md'>
            <Box
              width={screenWidth}
              backgroundColor={'lightPrimary'}
              alignItems={'center'}
            >
              <Box
                backgroundColor={'white'}
                height={RFValue(120)}
                width={RFValue(120)}
                borderRadius={RFValue(60)}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Box
                  alignContent={'center'}
                  backgroundColor={'lightPrimary'}
                  padding={'md'}
                  height={RFValue(100)}
                  width={RFValue(100)}
                  borderRadius={RFValue(50)}
                  alignItems={'center'}
                  justifyContent={'center'}
                  margin={'md'}
                >
                  {props.imgStatus === 'email' ? (
                    <Image
                      source={envelope}
                      height={RFValue(30)}
                      width={RFValue(30)}
                    />
                  ) : null}
                </Box>
              </Box>
            </Box>
            <Box
              borderWidth={1}
              borderColor={'lightGrey'}
              paddingHorizontal={'lg'}
            >
              <Text mb='md' mt='md' textAlign='justify' variant='regular14'>
                {props.title}
              </Text>
              <Text mb='md' mt='md' textAlign='justify' variant='regular14'>
                {props.subtitle}
              </Text>
            </Box>
            <Box
              alignItems='center'
              justifyContent='center'
              mb='md'
              paddingHorizontal='lg'
            >
              {props.amount && (
                <Text color='black' textAlign='justify' variant='regular14'>
                  {props.subtitle}
                  <Text color='black' variant='medium14'>
                    {props.amount}
                  </Text>

                  <Text color='black' variant='medium14'>
                    {props.receiver}
                  </Text>
                </Text>
              )}
            </Box>
          </Box>
        </BottomSheetScrollView>
        <Box p='md'>
          <Button
            backgroundColor='primary'
            borderColor='primary'
            borderWidth={1}
            style={{ flex: 1 }}
            label='CLOSE'
            labelProps={{ color: 'white' }}
            mb='sm'
            onPress={handleClose}
            paddingVertical='md'
          />
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default UniversalBottomSheet;
