import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Box, Image, ImageBackground, ScrollBox } from '@/components/Base';
import { screenHeight } from '../../constants';
import { screenWidth } from '../../constants';
import { Pressable } from '@/components/Button';
import { widthPixel } from '../../utils';
import { heightPixel } from '../../utils';
import {
  anonymous,
  back,
  bookmarkAsh,
  chat,
  edit,
  heartGray,
  shuffle,
  uploadAsh,
  user,
  userGray,
  userGreen,
  wallet,
} from '@/assets/images';
import { Text } from '@/components/Typography';
import { FlatList } from 'react-native-gesture-handler';
import { postArray, sidebarDataMore } from '@/constants/dummyData';
import PostCard from './components/PostCard';
import { Feather } from '@expo/vector-icons';

const Tile = ({ title, active, onPress }) => {
  return (
    <Pressable
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      borderWidth={1}
      padding='sm'
      borderColor={active ? 'deepeTertiary' : 'gray'}
      borderRadius={10}
      style={[styles.tile, active ? styles.activeTile : null]}
      onPress={onPress}
    >
      <Text variant={'medium12'} style={styles.title}>
        {title}
      </Text>
      {active && (
        <Box style={styles.checkmark}>
          <Feather name='check' size={18} color='white' />
        </Box>
      )}
    </Pressable>
  );
};

const CommunityScreen = () => {
  const [commModalOpen, setCommModalOpen] = useState(false);
  const openCommModal = () => {
    setCommModalOpen(!commModalOpen);
  };
  const closeCommModal = () => {
    setCommModalOpen(false);
  };
  const navigation = useNavigation();
  const route = useRoute();

  const { item } = route.params;
  console.log(item);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTilePress = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
    closeCommModal();
  };

  return (
    <ScrollBox>
      <ImageBackground
        src={item.imageUrl}
        height={screenHeight * 0.4}
        width={screenWidth}
      >
        <Box marginLeft={'sm'} marginTop={'lg'}>
          <Pressable
            backgroundColor={'lighterWhite'}
            borderRadius={10}
            padding={'xs'}
            width={widthPixel(46)}
            height={heightPixel(46)}
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

          <Text variant={'bold16'} color={'white'} marginVertical={'lg'}>
            {item.communityName}
          </Text>
          <Text
            numberOfLines={2}
            variant={'regular12'}
            color={'white'}
            marginVertical={'lg'}
          >
            {item.communityDescription}
          </Text>
        </Box>

        <Box
          backgroundColor={'white'}
          position={'absolute'}
          zIndex={1230}
          bottom={-20}
          left={10}
          borderRadius={5}
        >
          <Image
            src={item.imageUrl}
            width={widthPixel(60)}
            height={heightPixel(60)}
            padding={'md'}
            margin={'xs'}
          />
        </Box>
        <Box
          position={'absolute'}
          bottom={10}
          right={20}
          flexDirection={'row'}
          alignItems={'center'}
          gap={'lg'}
        >
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'xs'}
          >
            <Pressable>
              <Image
                source={user}
                height={heightPixel(25)}
                width={widthPixel(25)}
              />
            </Pressable>
            <Text variant={'regular12'} color={'white'}>
              12.2K
            </Text>
          </Box>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'xs'}
          >
            <Pressable>
              <Image
                source={edit}
                height={heightPixel(25)}
                width={widthPixel(25)}
              />
            </Pressable>
            <Text variant={'regular12'} color={'white'}>
              12.2K
            </Text>
          </Box>
        </Box>
      </ImageBackground>
      <Box paddingHorizontal={'sm'} marginBottom={'lg'}>
        <Box
          marginTop={'Ml'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text variant={'bold14'}>New Posts</Text>
          <Pressable
            onPress={openCommModal}
            backgroundColor={'lightGrey'}
            padding={'xs'}
          >
            <Image
              source={shuffle}
              height={heightPixel(25)}
              width={widthPixel(25)}
            />
          </Pressable>
        </Box>
      </Box>

      <FlatList
        bounces={false}
        data={postArray}
        indicatorStyle='black'
        keyExtractor={(item, index) => item.description + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PostCard
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            fav={item.fav}
            share={item.share}
            item={item}
            comment={item.comment}
            bookmark={item.bookmark}
          />
        )}
      />
      <Box
        marginHorizontal={'md'}
        backgroundColor={'lightGray'}
        padding={'md'}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={10}
        marginVertical={'sm'}
      >
        <Text variant={'bold16'}>Love to see more from the Community</Text>
        <Text
          marginTop={'md'}
          textAlign={'center'}
          variant={'regular12'}
          color={'gray'}
        >
          Join the Community to see more updates, posts and discussions
        </Text>
      </Box>
      <Box
        marginVertical={'Ml'}
        height={StyleSheet.hairlineWidth}
        backgroundColor={'gray'}
      />
      <Box marginBottom='sm' marginTop='xxl' marginHorizontal={'sm'}>
        <Pressable
          backgroundColor={'deepeTertiary'}
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius={10}
          padding={'md'}
          onPress={() => {
            // setCommModalOpen(false);
            // navigateToPayment();
          }}
        >
          <Text color={'white'} variant={'bold16'}>
            Join Community
          </Text>
        </Pressable>
      </Box>
      <Modal isVisible={commModalOpen}>
        <Box backgroundColor={'lightGray'} borderRadius={10} padding={'sm'}>
          <Text variant={'bold16'} marginVertical={'md'}>
            Filter by
          </Text>

          <Box style={styles.container}>
            <Tile
              title='New Posts'
              active={activeIndex === 0}
              onPress={() => handleTilePress(0)}
            />
            <Tile
              title='Popular Posts'
              active={activeIndex === 1}
              onPress={() => handleTilePress(1)}
            />
            <Tile
              title='All Posts'
              active={activeIndex === 2}
              onPress={() => handleTilePress(2)}
            />
            <Tile
              title='Popular Posts'
              active={activeIndex === 3}
              onPress={() => handleTilePress(3)}
            />
          </Box>
        </Box>
      </Modal>
    </ScrollBox>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    gap: 30,
  },
  tile: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  activeTile: {
    borderColor: '#07B6B0',
  },
  title: {
    marginRight: 5,
  },
  checkmark: {
    backgroundColor: '#07B6B0',
    borderRadius: 5,
    padding: 5,
    justifyContent: 'flex-end',
  },
});
