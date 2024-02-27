import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import { Box, Image } from '@/components/Base';
import { back, user } from '@/assets/images';
import { heightPixel } from '../../../utils';
import { widthPixel } from '../../../utils';
import { Text } from '@/components/Typography';
import { Pressable } from '@/components/Button';
import { useNavigation } from '@react-navigation/native';

interface SuggestedProps {
  imageUrl: string;
  communityName: string;
  communityDescription: string;
  numberOfMembers: number;
  item: object;
}
const Suggested = ({
  imageUrl,
  communityName,
  communityDescription,
  numberOfMembers,
  item,
}: SuggestedProps) => {
  const [commModalOpen, setCommModalOpen] = useState(false);
  const navigation = useNavigation();

  const openCommModal = () => {
    setCommModalOpen(!commModalOpen);
  };

  const navigateToPayment = () => {
    navigation.navigate('PaymentScreen', { item });
  };

  const navigateToCommunity = () => {
    navigation.navigate('CommunityDetailsScreen', { item });
  };
  return (
    <>
      <Pressable
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'md'}
        marginTop={'md'}
        borderWidth={1}
        borderRadius={10}
        borderColor={'grayShad'}
        padding={'sm'}
        onPress={navigateToCommunity}
      >
        <Box
          backgroundColor={'lightBlue'}
          paddingHorizontal={'lg'}
          paddingVertical={'lg'}
        >
          <Image
            src={imageUrl}
            height={heightPixel(44)}
            width={widthPixel(44)}
          />
        </Box>
        <Box flex={1} justifyContent={'space-between'} gap={'sm'}>
          <Text variant={'bold14'}>{communityName}</Text>
          <Text numberOfLines={2} variant={'regular12'} color={'gray'}>
            {communityDescription}
          </Text>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box flexDirection={'row'} alignItems={'center'} gap={'sm'}>
              <Image
                source={user}
                height={heightPixel(16)}
                width={widthPixel(16)}
              />
              <Text variant={'bold14'}>{numberOfMembers}</Text>
            </Box>
            <Pressable
              borderRadius={15}
              backgroundColor={'deepeTertiary'}
              paddingVertical={'sm'}
              paddingHorizontal={'lg'}
              onPress={openCommModal}
            >
              <Text variant={'bold14'} color={'white'}>
                Join
              </Text>
            </Pressable>
          </Box>
        </Box>
      </Pressable>
      <Modal isVisible={commModalOpen}>
        <Box backgroundColor={'lightGray'} borderRadius={10}>
          <Pressable
            marginTop={'md'}
            marginLeft={'sm'}
            backgroundColor={'tertiary'}
            borderRadius={5}
            padding={'xs'}
            width={widthPixel(30)}
            height={heightPixel(30)}
            alignItems={'center'}
            justifyContent={'center'}
            mb={'lg'}
            onPress={() => setCommModalOpen(false)}
          >
            <Image
              source={back}
              height={heightPixel(28)}
              width={widthPixel(28)}
            />
          </Pressable>

          <Box alignItems={'center'}>
            <Image
              src={imageUrl}
              height={heightPixel(40)}
              width={widthPixel(40)}
              borderRadius={10}
            />
          </Box>

          <Text
            color='black'
            marginBottom='sm'
            marginTop='sm'
            variant='medium14'
            marginLeft={'sm'}
          >
            {communityDescription}
          </Text>
          <Text
            color='gray'
            marginBottom='sm'
            marginTop='sm'
            variant='medium14'
            marginLeft={'sm'}
          >
            Previous sessions you've had will appear here
          </Text>
          <Box alignItems={'center'} marginBottom={'lg'}>
            <Box padding={'sm'} backgroundColor={'grayShad'} borderRadius={10}>
              <Text variant={'regular12'}>₦5,000</Text>
            </Box>
          </Box>
          <Box backgroundColor={'white'} padding={'md'}>
            <Text
              color='black'
              marginBottom='sm'
              textAlign='center'
              variant='regular14'
            >
              This is a Paid Community
            </Text>
            <Text
              color='gray'
              marginBottom='sm'
              textAlign='center'
              variant='regular14'
            >
              Previous sessions you've had will appear here
            </Text>

            <Box marginBottom='sm' marginTop='xxl'>
              <Pressable
                backgroundColor={'deepeTertiary'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={10}
                padding={'md'}
                onPress={() => {
                  setCommModalOpen(false);
                  navigateToPayment();
                }}
              >
                <Text color={'white'} variant={'bold16'}>
                  Join Community
                </Text>
              </Pressable>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Suggested;
