import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Image, SafeAreaBox } from '@/components/Base';
import {
  bank,
  card,
  closeSquare,
  uploadGreen,
  userBrown,
  wallet,
} from '@/assets/images';
import { heightPixel } from '../../utils';
import { widthPixel } from '../../utils';
import { Text } from '@/components/Typography';
import { Pressable } from '@/components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { item } = route.params;
  console.log(item);
  return (
    <SafeAreaBox padding={'sm'}>
      <Box flexDirection={'row'} justifyContent={'flex-end'}>
        <Pressable
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          backgroundColor={'lightPrimary'}
          borderRadius={9}
          height={heightPixel(50)}
          width={widthPixel(50)}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={closeSquare}
            height={heightPixel(30)}
            width={widthPixel(30)}
          />
        </Pressable>
      </Box>
      <Text marginVertical={'md'} variant={'bold24'}>
        How would you like to Pay to join the Community?
      </Text>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        borderColor={'medGray'}
        borderWidth={1}
        borderRadius={10}
        padding={'md'}
        gap={'md'}
        marginBottom={'md'}
      >
        <Box borderRadius={10} padding={'sm'} backgroundColor={'lightestPink'}>
          <Image
            source={wallet}
            height={heightPixel(30)}
            width={widthPixel(30)}
          />
        </Box>
        <Box flex={1}>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            marginBottom={'md'}
          >
            <Text variant={'medium14'}>Your Wallet</Text>
            <Pressable
              backgroundColor={'tertiary'}
              padding={'xs'}
              justifyContent={'center'}
              alignItems={'center'}
              borderRadius={10}
            >
              <Text variant={'medium12'} color={'deepeTertiary'}>
                Recommended
              </Text>
            </Pressable>
          </Box>
          <Text variant={'regular12'}>Balance ⚪️ ₦25,000.00 </Text>
        </Box>
      </Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        borderColor={'medGray'}
        borderWidth={1}
        borderRadius={10}
        padding={'md'}
        gap={'md'}
        marginBottom={'md'}
      >
        <Box borderRadius={10} padding={'sm'} backgroundColor={'tertiary'}>
          <Image
            source={card}
            height={heightPixel(30)}
            width={widthPixel(30)}
          />
        </Box>
        <Box flex={1}>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            marginBottom={'md'}
          >
            <Text variant={'medium14'}>Pay with Card</Text>
          </Box>
          <Text variant={'regular12'}>Make payment with your debit card</Text>
        </Box>
      </Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        borderColor={'medGray'}
        borderWidth={1}
        borderRadius={10}
        padding={'md'}
        gap={'md'}
        marginBottom={'md'}
      >
        <Box borderRadius={10} padding={'sm'} backgroundColor={'tertiary'}>
          <Image
            source={uploadGreen}
            height={heightPixel(30)}
            width={widthPixel(30)}
          />
        </Box>
        <Box flex={1}>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            marginBottom={'md'}
          >
            <Text variant={'medium14'}>Payment Request</Text>
          </Box>
          <Text variant={'regular12'}>Generate and share payment link </Text>
        </Box>
      </Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        borderColor={'medGray'}
        borderWidth={1}
        borderRadius={10}
        padding={'md'}
        gap={'md'}
        marginBottom={'md'}
        backgroundColor={'grayShad'}
      >
        <Box padding={'sm'} backgroundColor={'lightGray'} borderRadius={5}>
          <Image
            source={bank}
            height={heightPixel(30)}
            width={widthPixel(30)}
          />
        </Box>
        <Box flex={1}>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            marginBottom={'md'}
          >
            <Text variant={'medium14'}>Pay with Bank</Text>
          </Box>
          <Pressable
            alignItems={'center'}
            justifyContent={'center'}
            padding={'xs'}
            backgroundColor={'medGray'}
            borderRadius={10}
            height={heightPixel(20)}
            width={widthPixel(100)}
          >
            <Text variant={'regular12'}>Coming Soon</Text>
          </Pressable>
        </Box>
      </Box>
    </SafeAreaBox>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
