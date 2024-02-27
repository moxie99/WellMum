import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Image } from '@/components/Base';
import {
  anonymous,
  bookmarkAsh,
  chat,
  heartGray,
  uploadAsh,
} from '@/assets/images';
import { heightPixel, screenWidth } from '../../../utils';
import { widthPixel } from '../../../utils';
import { Text } from '@/components/Typography';
import { Pressable } from '@/components/Button';
import { useNavigation } from '@react-navigation/native';

interface PostcardProps {
  title: string;
  description: string;
  imgUrl: string;
  fav: number;
  comment: number;
  share: number;
  bookmark: number;
  item: object;
}

const PostCard = ({
  title,
  description,
  imgUrl,
  fav,
  comment,
  share,
  bookmark,
  item,
}: PostcardProps) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('PostDetails', { item })}
      borderRadius={10}
      borderWidth={0.5}
      borderColor={'gray'}
      padding={'md'}
      marginHorizontal={'sm'}
      marginBottom={'sm'}
    >
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        gap={'sm'}
        marginBottom={'sm'}
      >
        <Image
          source={anonymous}
          height={heightPixel(25)}
          width={widthPixel(25)}
        />
        <Text variant={'bold14'} color={'deepeTertiary'}>
          Anonymous
        </Text>
      </Box>
      <Box>
        <Text marginBottom={'sm'} variant={'medium14'}>
          {title}
        </Text>
        <Text
          marginBottom={'sm'}
          textAlign={'justify'}
          numberOfLines={2}
          variant={'regular12'}
          color={'gray'}
        >
          {description}
        </Text>
      </Box>
      <Box marginVertical={'sm'}>
        <Image
          borderRadius={10}
          src={imgUrl}
          height={heightPixel(200)}
          resizeMode='cover'
        />
      </Box>
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
          <Text variant={'regular12'}>{fav}K</Text>
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
          <Text variant={'regular12'}>{comment}0K</Text>
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
          <Text variant={'regular12'}>{bookmark}0K</Text>
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
          <Text variant={'regular12'}>{share}K</Text>
        </Pressable>
      </Box>
    </Pressable>
  );
};

export default PostCard;
