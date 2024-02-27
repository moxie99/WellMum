import { StyleSheet, TouchableOpacity } from 'react-native';

import React, { useState } from 'react';
import { Box, Image, LayoutComponent, ScrollBox } from '@/components/Base';
import { Text } from '@/components/Typography';
import { palette } from '@/constants/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { screenWidth } from '../../constants';
import { back, user } from '@/assets/images';
import { heightPixel, widthPixel } from '../../utils';
import { Pressable } from '@/components/Button';
import SearchInput from '@/components/Input/SearchInput';
import SearchInput2 from '@/components/Input/SearchInput2';
import { FlatList } from 'react-native-gesture-handler';
import { commDummy } from '@/constants/dummyData';
import Suggested from './components/Suggested';
import Joined from './components/Joined';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: palette.lightGrey,
    width: screenWidth * 0.9,
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
    color: palette.deepeTertiary,
  },
});
const CommunityLandingPage = () => {
  const [activeTab, setActiveTab] = useState('Tab1');
  const [search, setSearch] = useState('');
  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <LayoutComponent isIcon>
      <ScrollBox paddingHorizontal={'sm'}>
        <Box>
          <Text variant={'bold16'} color={'black'}>
            Community
          </Text>
        </Box>
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
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Tab1' ? styles.activeTabText : null,
              ]}
              variant={'bold14'}
            >
              Suggested
            </Text>
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
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Tab2' ? styles.activeTabText : null,
              ]}
              variant={'bold14'}
            >
              Joined
            </Text>
          </TouchableOpacity>
        </Box>
        {activeTab === 'Tab1' && (
          <Box>
            <Text variant={'medium14'} marginVertical={'md'}>
              Suggested Community
            </Text>
            <SearchInput2
              onChangeText={(value) => setSearch(value)}
              placeholder={'Search for Suggested Communities...'}
              value={search}
            />
            <FlatList
              bounces={false}
              indicatorStyle='black'
              keyExtractor={(item, index) => item.communityName + index}
              showsVerticalScrollIndicator={false}
              data={commDummy}
              style={{
                backgroundColor: palette.white,
                flex: 1,
                paddingHorizontal: 10,
              }}
              renderItem={({ item }) => (
                <Suggested
                  item={item}
                  imageUrl={item.imageUrl}
                  communityDescription={item.communityDescription}
                  communityName={item.communityName}
                  numberOfMembers={item.numberOfMembers}
                />
              )}
            />
          </Box>
        )}
        {activeTab === 'Tab2' && (
          <Box>
            <Text variant={'medium14'} marginVertical={'md'}>
              Joined Community
            </Text>
            <SearchInput2
              onChangeText={(value) => setSearch(value)}
              placeholder={'Search for Joined Community...'}
              value={search}
            />
            <FlatList
              bounces={false}
              indicatorStyle='black'
              keyExtractor={(item, index) => item.communityName + index}
              showsVerticalScrollIndicator={false}
              data={commDummy}
              style={{
                backgroundColor: palette.white,
                flex: 1,
                paddingHorizontal: 10,
              }}
              renderItem={({ item }) => (
                <Joined
                  item={item}
                  imageUrl={item.imageUrl}
                  communityDescription={item.communityDescription}
                  communityName={item.communityName}
                  numberOfMembers={item.numberOfMembers}
                />
              )}
            />
          </Box>
        )}
      </ScrollBox>
    </LayoutComponent>
  );
};

export default CommunityLandingPage;
