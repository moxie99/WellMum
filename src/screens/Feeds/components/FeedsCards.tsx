import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Box, Image } from '@/components/Base';
import { screenHeight } from '../../../constants';
import { Text } from '@/components/Typography';
import { bookmarkGreen, uplaod, userGray } from '@/assets/images';
import { heightPixel } from '../../../utils';
import { widthPixel } from '../../../utils';
import { Pressable } from '@/components/Button';
import useStore from '@/store/useStore';
import { useNavigation } from '@react-navigation/native';

interface FeedsCardsProps {
  imgUrl: string;
  title: string;
  description: string;
  uploadNumber: string;
  bookmarkedNumber: string;
  sharedNumber: string;
  readTime: string;
  item: object;
}
const FeedsCards = ({
  imgUrl,
  title,
  description,
  uploadNumber,
  bookmarkedNumber,
  sharedNumber,
  readTime,
  item,
}: FeedsCardsProps) => {
  const { feedItem, setFeedItem } = useStore((state) => state);
  const navigation = useNavigation();

  const navigateToFeedDetails = () => {
    navigation.navigate('FeedDetails', {
      imgUrl,
      title,
      description,
      uploadNumber,
      bookmarkedNumber,
      sharedNumber,
      readTime,
      item,
    });
  };
  return (
    <Pressable marginBottom={'sm'} onPress={navigateToFeedDetails}>
      <Box
        borderRadius={10}
        borderWidth={1}
        borderColor={'grayShad'}
        padding={'md'}
        backgroundColor={'white'}
      >
        <Image
          src={imgUrl}
          width={'100%'}
          height={screenHeight * 0.2}
          borderRadius={10}
        />
        <Text marginVertical={'sm'} variant={'bold14'}>
          {title}
        </Text>
        <Text marginVertical={'sm'} variant={'medium12'} color={'gray'}>
          {description}
        </Text>
        <Text marginVertical={'sm'} variant={'bold14'} color={'primary'}>
          {readTime} Read
        </Text>
        <Box flexDirection={'row'} gap={'sm'}>
          <Box
            backgroundColor={'midGray'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            padding={'xs'}
            borderRadius={10}
            borderColor={'midGray'}
            borderWidth={1}
            gap={'xs'}
          >
            <Image
              source={uplaod}
              height={heightPixel(24)}
              width={widthPixel(24)}
            />
            <Text variant={'regular14'}>{uploadNumber}K</Text>
          </Box>
          <Box
            backgroundColor={'tertiary'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            padding={'xs'}
            borderRadius={10}
            borderColor={'midGray'}
            borderWidth={1}
            gap={'xs'}
          >
            <Image
              source={bookmarkGreen}
              height={heightPixel(20)}
              width={widthPixel(20)}
            />
            <Text variant={'regular12'}>{bookmarkedNumber}K</Text>
          </Box>
          <Box
            backgroundColor={'midGray'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            padding={'xs'}
            borderRadius={10}
            borderColor={'midGray'}
            borderWidth={1}
            gap={'xs'}
          >
            <Image
              source={userGray}
              height={heightPixel(20)}
              width={widthPixel(20)}
            />
            <Text variant={'regular12'}>{sharedNumber}K</Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default FeedsCards;
