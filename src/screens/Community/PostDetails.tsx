import { FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Box, Image, SafeAreaBox, ScrollBox } from '@/components/Base';
import { Pressable } from '@/components/Button';
import { screenWidth, widthPixel } from '../../utils';
import { heightPixel } from '../../utils';
import {
  arrowback,
  ashCalendar,
  back,
  bookmarkAsh,
  chat,
  heartGray,
  uploadAsh,
} from '@/assets/images';
import { Text } from '@/components/Typography';
import { commentContent } from '@/constants/dummyData';
import CommentCard from './components/CommentCard';

const LoadMoreFooter = ({ onLoadMore }) => (
  <Box
    flexDirection={'row'}
    alignItems={'center'}
    justifyContent={'space-between'}
  >
    <Box height={5} backgroundColor={'error'} />
    <Pressable onPress={onLoadMore}>
      <Text variant={'bold16'} color={'primary'}>
        Load More
      </Text>
    </Pressable>
    <Box height={StyleSheet.hairlineWidth} backgroundColor={'gray'} />
  </Box>
);
const PostDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [data, setData] = useState(commentContent);

  const loadMore = () => {
    setData([...data, ...commentContent]);
  };
  const { item } = route.params;
  console.log(item);
  return (
    <ScrollBox backgroundColor={'white'} paddingHorizontal={'sm'}>
      <SafeAreaBox>
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
            source={arrowback}
            height={heightPixel(28)}
            width={widthPixel(28)}
          />
        </Pressable>
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
        <Text variant={'bold14'} marginTop={'sm'} marginBottom={'md'}>
          {item.title}
        </Text>
        <Text variant={'regular12'} color={'gray'}>
          {item.description}
        </Text>
        <Box
          marginVertical={'Ml'}
          height={StyleSheet.hairlineWidth}
          backgroundColor={'gray'}
        />
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={'xs'}
        >
          <Pressable
            backgroundColor={'midGray'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={7}
            borderColor={'midGray'}
            borderWidth={1}
            gap={'xs'}
            height={heightPixel(40)}
            width={screenWidth * 0.18}
          >
            <Image
              source={heartGray}
              height={heightPixel(20)}
              width={widthPixel(20)}
            />
            <Text variant={'regular12'}>{item.fav}K</Text>
          </Pressable>
          <Pressable
            backgroundColor={'midGray'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={7}
            borderColor={'midGray'}
            borderWidth={1}
            gap={'xs'}
            height={heightPixel(40)}
            width={screenWidth * 0.22}
          >
            <Image
              source={chat}
              height={heightPixel(20)}
              width={widthPixel(20)}
            />
            <Text variant={'regular12'}>{item.comment}0K</Text>
          </Pressable>
          <Pressable
            backgroundColor={'midGray'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={7}
            borderColor={'midGray'}
            borderWidth={1}
            gap={'xs'}
            height={heightPixel(40)}
            width={screenWidth * 0.22}
          >
            <Image
              source={bookmarkAsh}
              height={heightPixel(20)}
              width={widthPixel(20)}
            />
            <Text variant={'regular12'}>{item.bookmark}0K</Text>
          </Pressable>
          <Pressable
            backgroundColor={'midGray'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={7}
            borderColor={'midGray'}
            borderWidth={1}
            gap={'xs'}
            height={heightPixel(40)}
            width={screenWidth * 0.22}
          >
            <Image
              source={uploadAsh}
              height={heightPixel(20)}
              width={widthPixel(20)}
            />
            <Text variant={'regular12'}>{item.share}K</Text>
          </Pressable>
        </Box>
        <Text variant={'bold14'} marginVertical={'md'}>
          Comments
        </Text>
        <FlatList
          bounces={false}
          data={data}
          indicatorStyle='black'
          keyExtractor={(item, index) => item.comment.content + index}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CommentCard
              description={item.comment.content}
              fav={item.comment.numOfFavs}
              share={item.comment.numShared}
              item={item}
              comment={item.comment.numOfComments}
              bookmark={item.comment.numBookmarked}
            />
          )}
          ListFooterComponent={<LoadMoreFooter onLoadMore={loadMore} />}
        />
      </SafeAreaBox>
    </ScrollBox>
  );
};

export default PostDetails;

const styles = StyleSheet.create({});
