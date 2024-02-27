import { StyleSheet } from 'react-native';
import React from 'react';
import useStore from '@/store/useStore';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Box,
  Image,
  ImageBackground,
  LayoutComponent,
  SafeAreaBox,
  ScrollBox,
} from '@/components/Base';
import { screenHeight } from '../../constants';
import { screenWidth } from '../../constants';
import { Pressable } from '@/components/Button';
import { Text } from '@/components/Typography';
import { ashCalendar, back, bookmark, upWhite } from '@/assets/images';
import { heightPixel } from '../../utils';
import { widthPixel } from '../../utils';
import ImageCarousel from './components/CarouselCard';
import { SimpleLineIcons } from '@expo/vector-icons';

const FeedDetails = () => {
  const { feedItem, setFeedItem } = useStore((state) => state);
  const navigation = useNavigation();
  const route = useRoute();
  const {
    imgUrl,
    title,
    description,
    uploadNumber,
    bookmarkedNumber,
    sharedNumber,
    readTime,
    item,
  } = route.params;
  return (
    <ScrollBox paddingBottom={'Ml'} showsVerticalScrollIndicator={false}>
      <ImageBackground
        src={imgUrl}
        height={screenHeight * 0.44}
        width={screenWidth}
      >
        <SafeAreaBox paddingHorizontal={'md'}>
          <Box marginTop={'lg'}>
            <Pressable
              backgroundColor={'tertiary'}
              borderRadius={5}
              padding={'xs'}
              width={widthPixel(56)}
              height={heightPixel(56)}
              alignItems={'center'}
              justifyContent={'center'}
              mb={'lg'}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={back}
                height={heightPixel(28)}
                width={widthPixel(28)}
              />
            </Pressable>
            <Pressable
              backgroundColor={'primary'}
              borderRadius={5}
              width={widthPixel(120)}
              height={heightPixel(40)}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Text variant={'bold14'} color={'white'}>
                TRENDING
              </Text>
            </Pressable>

            <Box
              flexDirection={'row'}
              mt={'Ml'}
              justifyContent={'flex-end'}
              gap={'md'}
            >
              <Pressable
                backgroundColor={'lightWhite'}
                borderRadius={10}
                padding={'sm'}
              >
                <Image
                  source={upWhite}
                  height={heightPixel(28)}
                  width={widthPixel(28)}
                />
              </Pressable>
              <Pressable
                backgroundColor={'deepeTertiary'}
                borderRadius={10}
                padding={'sm'}
              >
                <Image
                  source={bookmark}
                  height={heightPixel(28)}
                  width={widthPixel(28)}
                />
              </Pressable>
            </Box>
          </Box>
        </SafeAreaBox>
      </ImageBackground>
      <Box paddingHorizontal={'sm'}>
        <Box mt={'md'} flexDirection={'row'} alignItems={'center'} gap={'sm'}>
          <Image
            source={ashCalendar}
            height={heightPixel(28)}
            width={widthPixel(28)}
          />
          <Text color={'medGray'} variant={'medium12'}>
            Friday, September 2023
          </Text>
        </Box>
        <Box mt={'sm'}>
          <Text mt={'sm'} variant={'bold14'}>
            {title}
          </Text>
          <Text
            mt={'sm'}
            color={'gray'}
            textAlign={'justify'}
            variant={'medium12'}
          >
            {description}
          </Text>
        </Box>
      </Box>

      <Box marginTop={'md'} padding={'sm'}>
        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text color={'lightBlack'} variant={'bold16'}>
            Suggested Communities
          </Text>
          <Pressable
            padding={'sm'}
            backgroundColor={'primary'}
            borderRadius={20}
          >
            <SimpleLineIcons name='arrow-right' size={14} color='white' />
          </Pressable>
        </Box>
      </Box>
      <ImageCarousel />
    </ScrollBox>
  );
};

export default FeedDetails;

const styles = StyleSheet.create({});
