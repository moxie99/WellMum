import React, { useState } from 'react';
import { Box, Image } from '@/components/Base';
import { back, user } from '@/assets/images';
import { heightPixel } from '../../../utils';
import { widthPixel } from '../../../utils';
import { Text } from '@/components/Typography';
import { Pressable } from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
interface JoinedProps {
  imageUrl: string;
  communityName: string;
  communityDescription: string;
  numberOfMembers: number;
  item: object;
}
const Joined = ({
  imageUrl,
  communityName,
  communityDescription,
  numberOfMembers,
  item,
}: JoinedProps) => {
  const navigation = useNavigation();

  const navigateToCommunity = () => {
    navigation.navigate('CommunityDetailsScreen', { item });
  };
  return (
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
        <Image src={imageUrl} height={heightPixel(24)} width={widthPixel(24)} />
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
        </Box>
      </Box>
    </Pressable>
  );
};

export default Joined;
