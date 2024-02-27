import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import {
  Box,
  Image,
  KeyBoardAwareScrollBox,
  LayoutComponent,
  ScrollBox,
} from '@/components/Base'
import { Text } from '@/components/Typography'
import {
  calendarGreen,
  calendarLight,
  calling,
  close,
  envelope,
  gift,
  profile,
  program,
  userBrown,
} from '@/assets/images'
import { heightPixel, screenHeight, screenWidth } from '../../utils'
import { widthPixel } from '../../utils'
import { Pressable } from '@/components/Button'
import { SimpleLineIcons } from '@expo/vector-icons'
import {
  QuickActions,
  commDummy,
  upcomingEventsData,
} from '@/constants/dummyData'
import SuggestedCommunityCard from './components/SuggestedCommunityCard'
import { palette } from '@/constants/theme'
import UpcomingEventsCard from './components/UpcomingEventsCards'

const WellMumLandingPage = () => {
  const tabItems = [
    { name: 'Appointments', color: palette.lightPurple },
    { name: 'Routine', color: palette.lightPurple },
    { name: 'Health Status', color: palette.lightPurple },
    { name: 'Announcements', color: palette.lightPurple },
  ]
  const [activeTab, setActiveTab] = useState(tabItems[0].name)
  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName)
  }

  return (
    <LayoutComponent
      label='👋 Hi Tolani (Pregnant)'
      backgroundColor={'white'}
      isIcon
    >
      <KeyBoardAwareScrollBox
        backgroundColor='white'
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
        paddingHorizontal='md'
      >
        <Box style={styles.container}>
          <ScrollBox horizontal showsHorizontalScrollIndicator={false}>
            {tabItems.map((tab, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tab,
                  activeTab === tab.name && styles.activeTab,
                  {
                    backgroundColor:
                      activeTab === tab.name
                        ? palette.primary
                        : palette.lightPurple,
                  },
                ]}
                onPress={() => handleTabPress(tab.name)}
              >
                <Text
                  variant={'regular16'}
                  style={[
                    styles.tabText,
                    activeTab === tab.name && styles.activeTabText,
                  ]}
                >
                  {tab.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollBox>
        </Box>
        <Box>
          <Text variant={'bold14'}>Hello there</Text>
        </Box>
      </KeyBoardAwareScrollBox>
    </LayoutComponent>
  )
}

export default WellMumLandingPage

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tab: {
    paddingVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: palette.lightPurple,
    marginRight: 20,
  },
  activeTab: {
    backgroundColor: palette.primary,
  },
  tabText: {
    color: palette.lightBlack,
  },
  activeTabText: {
    color: 'white', // Active text color
  },
})
