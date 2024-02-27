import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Image } from '@/components/Base';
import { screenHeight } from '../../../constants';
import { Text } from '@/components/Typography';
import { bookmarkGreen, uplaod, userGray } from '@/assets/images';
import { heightPixel, screenWidth } from '../../../utils';
import { widthPixel } from '../../../utils';
import { Pressable } from '@/components/Button';
import useStore from '@/store/useStore';
import { useNavigation } from '@react-navigation/native';

interface FeedsSecondCardProps {
  imgUrl: string;
  title: string;
  description: string;
  uploadNumber: string;
  bookmarkedNumber: string;
  sharedNumber: string;
  readTime: string;
  item: object;
}
const FeedsSecondCard = ({
  imgUrl,
  title,
  description,
  uploadNumber,
  bookmarkedNumber,
  sharedNumber,
  readTime,
  item,
}: FeedsSecondCardProps) => {
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
        backgroundColor={'white'}
        borderWidth={1}
        borderRadius={10}
        padding={'md'}
        borderColor={'grayShad'}
      >
        <Box flexDirection={'row'} gap={'sm'}>
          <Image
            src={imgUrl}
            width={screenWidth * 0.23}
            height={screenHeight * 0.13}
            borderRadius={10}
          />
          <Box flex={1} justifyContent={'space-between'}>
            <Text numberOfLines={1} color={'black'} variant={'bold14'}>
              {title}
            </Text>
            <Text numberOfLines={2} color={'gray'} variant={'medium12'}>
              {description}
            </Text>
            <Text color={'gray'} variant={'medium12'}>
              {readTime} Read
            </Text>
          </Box>
        </Box>
        <Box flexDirection={'row'} gap={'sm'} marginTop={'md'}>
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

export default FeedsSecondCard;

const styles = StyleSheet.create({});
