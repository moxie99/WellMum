import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  KeyBoardAwareScrollBox,
  LayoutComponent,
} from '@/components/Base';
import { Text } from '@/components/Typography';
import ImageCarousel from './components/CarouselCard';
import { palette } from '@/constants/theme';
import { screenHeight, screenWidth } from '../../constants';
import {
  bookmarkGreen,
  list,
  list_inactive,
  sidebar,
  sidebar_inactive,
  uplaod,
  userGray,
} from '@/assets/images';
import { heightPixel } from '../../utils';
import { widthPixel } from '../../utils';
import { sidebarData, sidebarDataMore } from '@/constants/dummyData';
import FeedsCards from './components/FeedsCards';
import FeedsSecondCard from './components/FeedsSecondCard';
import useStore from '@/store/useStore';

const LoadMoreFooter = ({ onLoadMore }) => (
  <Box
    flexDirection={'row'}
    alignItems={'center'}
    justifyContent={'space-between'}
  >
    <Box height={StyleSheet.hairlineWidth} backgroundColor={'gray'} />
    <Pressable onPress={onLoadMore}>
      <Text variant={'bold16'} color={'primary'}>
        Load More
      </Text>
    </Pressable>
    <Box height={StyleSheet.hairlineWidth} backgroundColor={'gray'} />
  </Box>
);
const FeedsLandingPage = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState(sidebarData);

  const loadMore = () => {
    setData([...data, ...sidebarDataMore]);
  };
  const [activeTab, setActiveTab] = useState('Tab1');
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    setLoader(true);
    setProducts([]);
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          setLoader(false);
          console.log(json);
          setProducts(json);
        })
        .catch((err) => {
          setLoader(false);
        });
    }, 5000);
  };

  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    console.log(tabName, '======');
    setActiveTab(tabName);
  };
  // if (loader) {
  //   return (
  //     <FlatList
  //       data={[1, 1, 1, 1, 1, 1, 1]}
  //       renderItem={() => {
  //         return (
  //           <Box
  //             style={{
  //               width: '90%',
  //               height: 100,
  //               flexDirection: 'row',
  //               alignItems: 'center',
  //               marginTop: 20,
  //               alignSelf: 'center',
  //             }}
  //           >
  //             <Box
  //               style={{
  //                 width: 80,
  //                 height: 80,
  //                 backgroundColor: '#9e9e9e',
  //                 opacity: 0.2,
  //               }}
  //             ></Box>
  //             <Box style={{ width: '80%', marginLeft: 10 }}>
  //               <Box
  //                 style={{
  //                   width: '80%',
  //                   height: 30,
  //                   backgroundColor: '#9e9e9e',
  //                   opacity: 0.2,
  //                 }}
  //               ></Box>
  //               <Box
  //                 style={{
  //                   width: 100,
  //                   height: 40,
  //                   backgroundColor: '#9e9e9e',
  //                   opacity: 0.2,
  //                   marginTop: 10,
  //                 }}
  //               ></Box>
  //             </Box>
  //           </Box>
  //         );
  //       }}
  //     />
  //   );
  // }

  return (
    <LayoutComponent isIcon>
      <KeyBoardAwareScrollBox
        backgroundColor='white'
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
        paddingHorizontal='md'
      >
        <Box>
          <Text variant={'bold16'}>Feeds</Text>
        </Box>
        <ImageCarousel />
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          marginVertical={'md'}
        >
          <Text variant={'bold14'}>For you</Text>
          <Box style={styles.container}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'Tab1' ? styles.activeTab : null,
              ]}
              onPress={() => {
                handleTabPress('Tab1');
              }}
            >
              <Image
                height={heightPixel(24)}
                width={widthPixel(24)}
                source={activeTab === 'Tab1' ? sidebar : sidebar_inactive}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'Tab2' ? styles.activeTab : null,
              ]}
              onPress={() => {
                handleTabPress('Tab2');
              }}
            >
              <Image
                height={heightPixel(24)}
                width={widthPixel(24)}
                source={activeTab === 'Tab2' ? list_inactive : list}
              />
            </TouchableOpacity>
          </Box>
        </Box>
        {activeTab === 'Tab1' && (
          <FlatList
            bounces={false}
            data={data}
            indicatorStyle='black'
            keyExtractor={(item, index) => item.description + index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <FeedsCards
                imgUrl={item.imgUrl}
                title={item.title}
                description={item.description}
                uploadNumber={item.uploadNumber}
                bookmarkedNumber={item.bookmarkedNumber}
                sharedNumber={item.sharedNumber}
                readTime={item.readTime}
                item={item}
              />
            )}
            ListFooterComponent={<LoadMoreFooter onLoadMore={loadMore} />}
            // onEndReached={loadMore}
            // onEndReachedThreshold={0.1}
          />
        )}
        {activeTab === 'Tab2' && (
          <FlatList
            bounces={false}
            data={data}
            indicatorStyle='black'
            keyExtractor={(item, index) => item.description + index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <FeedsSecondCard
                imgUrl={item.imgUrl}
                title={item.title}
                description={item.description}
                uploadNumber={item.uploadNumber}
                bookmarkedNumber={item.bookmarkedNumber}
                sharedNumber={item.sharedNumber}
                readTime={item.readTime}
                item={item}
              />
            )}
            ListFooterComponent={<LoadMoreFooter onLoadMore={loadMore} />}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
          />
        )}
      </KeyBoardAwareScrollBox>
    </LayoutComponent>
  );
};

export default FeedsLandingPage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: palette.lightGrey,
    borderRadius: 10,
    padding: 10,
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: 'white',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: 'green',
  },
});
