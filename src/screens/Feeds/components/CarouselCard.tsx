import { Box, Image, ImageBackground } from '@/components/Base';
import { Text } from '@/components/Typography';
import { screenHeight, screenWidth } from '../../../constants';
import { carouselData } from '@/constants/dummyData';
import React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import { Pressable } from '@/components/Button';
import { bookmark } from '@/assets/images';
import { heightPixel } from '../../../utils';
import { widthPixel } from '../../../utils';

const ImageCarousel = () => {
  const renderItem = ({ item }) => (
    <Box marginHorizontal={'sm'} style={styles.imageContainer} marginTop={'sm'}>
      <ImageBackground
        width={screenWidth * 0.65}
        height={screenHeight * 0.3}
        paddingHorizontal={'md'}
        justifyContent={'space-between'}
        src={item.imageUrl}
      >
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          marginTop={'md'}
        >
          <Pressable
            padding={'sm'}
            backgroundColor={'primary'}
            borderRadius={10}
          >
            <Text variant={'bold14'} color={'white'}>
              TRENDING
            </Text>
          </Pressable>
          <Pressable
            backgroundColor={'lightWhite'}
            // style={styles.padding}
            borderRadius={5}
            padding={'xs'}
          >
            <Image
              source={bookmark}
              height={heightPixel(28)}
              width={widthPixel(28)}
            />
          </Pressable>
        </Box>
        <Box marginBottom={'Ml'}>
          <Text numberOfLines={1} marginBottom={'md'} variant={'medium12'}>
            {item.title}
          </Text>
          <Text numberOfLines={1} variant={'medium12'}>
            {item.subtitle}
          </Text>
        </Box>
      </ImageBackground>
    </Box>
  );

  return (
    <FlatList
      data={carouselData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  padding: {
    padding: 30,
  },
  imageContainer: {
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default ImageCarousel;
