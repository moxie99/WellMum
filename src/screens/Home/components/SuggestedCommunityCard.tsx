import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Image } from '@/components/Base';
import { screenWidth } from '../../../utils';
import { heightPixel } from '../../../utils';
import { widthPixel } from '../../../utils';
import { Text } from '@/components/Typography';
import { user } from '@/assets/images';

interface CommunityProps {
  imageUrl: string;
  communityName: string;
  communityDescription: string;
  numberOfMembers: number;
}
const SuggestedCommunityCard = ({
  imageUrl,
  communityName,
  communityDescription,
  numberOfMembers,
}: CommunityProps) => {
  return (
    <Box
      marginVertical={'sm'}
      paddingVertical={'md'}
      paddingHorizontal={'sm'}
      backgroundColor={'white'}
      borderRadius={10}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      gap={'sm'}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
      }}
    >
      <Box>
        <Image
          borderRadius={10}
          src={imageUrl}
          height={heightPixel(100)}
          width={widthPixel(100)}
        />
      </Box>
      <Box gap={'sm'} flex={1} paddingHorizontal={'sm'}>
        <Text variant={'bold14'} color={'lightBlack'}>
          {communityName}
        </Text>
        <Text numberOfLines={2} variant={'medium12'} color={'grey'}>
          {communityDescription}
        </Text>
        <Box flexDirection={'row'} alignItems={'center'} gap={'sm'}>
          <Image
            source={user}
            height={heightPixel(20)}
            width={widthPixel(20)}
          />
          <Text variant={'medium14'}>{numberOfMembers}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SuggestedCommunityCard;
