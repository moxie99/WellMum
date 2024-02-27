import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootTabParamList, StackParamsList } from '../types'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { palette } from '../../constants/theme'
import CommunityLandingPage from '@/screens/Community/CommunityLandingPage'
import { Platform } from 'react-native'
import FeedsLandingPage from '@/screens/Feeds/FeedsLandingPage'
import ProfileLandingScreen from '@/screens/Profile/ProfileLandingScreen'
import TheraphyLandingPage from '@/screens/Theraphy/TheraphyLandingPage'
import { useUser } from '@/hooks/useCreateRequest'
import { Box } from '@/components/Base'
import WellMumLandingPage from '@/screens/Home/WellMumLandingPage'
const BottomTab = createBottomTabNavigator<RootTabParamList>()

export const GetCareBottomTab = () => {
  const { data } = useUser()

  console.log('details now now now', data.data)
  return (
    <BottomTab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        tabBarActiveTintColor: palette.primary,
      }}
    >
      <BottomTab.Screen
        name='HomeScreen'
        component={WellMumLandingPage}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              active={focused}
              name='view-grid-outline'
              color={focused ? 'white' : 'black'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='FeedsScreen'
        component={FeedsLandingPage}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              active={focused}
              color={focused ? 'white' : 'black'}
              name='search-web'
            />
          ),
        }}
      />

      <BottomTab.Screen
        name='TheraphyScreen'
        component={TheraphyLandingPage}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name='account-alert-outline'
              active={focused}
              color={focused ? 'white' : 'black'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='CommunityScreen'
        component={CommunityLandingPage}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              active={focused}
              color={focused ? 'white' : 'black'}
              name='account-group-outline'
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='AccountScreen'
        component={ProfileLandingScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name='account-circle-outline'
              active={focused}
              color={focused ? 'white' : 'black'}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name']
  color: string
  active: boolean
}) {
  return (
    <Box
      borderRadius={10000}
      padding={'xs'}
      backgroundColor={props.active ? 'primary' : 'white'}
      style={{
        ...Platform.select({
          ios: {
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.4,
            shadowRadius: 12,
            shadowColor: '#00000040',
          },

          android: {
            elevation: 6,
            shadowColor: '#00000040',
          },
        }),
      }}
    >
      <MaterialCommunityIcons size={20} style={{}} {...props} />
    </Box>
  )
}
