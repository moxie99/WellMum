import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Box, Image, LayoutComponent, ScrollBox } from '@/components/Base';
import { palette } from '@/constants/theme';
import { screenHeight, screenWidth } from '../../utils';
import { Text } from '@/components/Typography';
import { videoGray } from '@/assets/images';
import { Pressable } from '@/components/Button';
import { SimpleLineIcons } from '@expo/vector-icons';
import { upcomingEventsData } from '@/constants/dummyData';
import UpcomingEventsCard from '../Home/components/UpcomingEventsCards';

const TheraphyLandingPage = () => {
  const [activeTab, setActiveTab] = useState('Tab1');
  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };
  return (
    <LayoutComponent isIcon>
      <ScrollBox padding={'sm'}>
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
              Upcoming Session
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
              Session History
            </Text>
          </TouchableOpacity>
        </Box>

        <Box
          borderRadius={10}
          alignItems={'center'}
          marginTop={'sm'}
          backgroundColor={'gray'}
        >
          <Image
            source={videoGray}
            height={screenHeight * 0.25}
            width={screenWidth * 0.35}
            resizeMode='contain'
          />
          <Box marginVertical={'Ml'}>
            <Text textAlign={'center'} variant={'bold16'}>
              No Upcoming Sessions.
            </Text>
            <Text textAlign={'center'} variant={'regular12'}>
              Upcoming sessions you have will appear here
            </Text>
          </Box>

          <Pressable
            flexDirection={'row'}
            alignItems={'center'}
            gap={'sm'}
            borderRadius={10}
            padding={'xs'}
            backgroundColor={'white'}
            marginBottom={'md'}
          >
            <Text variant={'regular14'} color={'deepeTertiary'}>
              Book a session ?
            </Text>
            <Pressable
              backgroundColor={'primary'}
              alignItems={'center'}
              justifyContent={'center'}
              height={20}
              width={20}
              borderRadius={10}
            >
              <SimpleLineIcons name='arrow-right' size={12} color='white' />
            </Pressable>
          </Pressable>
        </Box>

        {activeTab === 'Tab1' && (
          <FlatList
            bounces={false}
            indicatorStyle='black'
            keyExtractor={(item, index) => item.time + index}
            showsVerticalScrollIndicator={false}
            data={upcomingEventsData}
            style={{
              backgroundColor: palette.white,
              flex: 1,
              paddingHorizontal: 10,
            }}
            renderItem={({ item }) => (
              <UpcomingEventsCard
                imgTherapist={item.imgTherapist}
                imgClient={item.imgClient}
                therapistName={item.therapistName}
                callDescription={item.callDescription}
                time={item.time}
              />
            )}
          />
        )}
        {activeTab === 'Tab2' && (
          <FlatList
            bounces={false}
            indicatorStyle='black'
            keyExtractor={(item, index) => item.time + index}
            showsVerticalScrollIndicator={false}
            data={upcomingEventsData}
            style={{
              backgroundColor: palette.white,
              flex: 1,
              paddingHorizontal: 10,
            }}
            renderItem={({ item }) => (
              <UpcomingEventsCard
                opacity
                item={item}
                imgTherapist={item.imgTherapist}
                imgClient={item.imgClient}
                therapistName={item.therapistName}
                callDescription={item.callDescription}
                time={item.time}
              />
            )}
          />
        )}
      </ScrollBox>
    </LayoutComponent>
  );
};

export default TheraphyLandingPage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: palette.lightGrey,
    width: screenWidth,
    borderRadius: 10,
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
