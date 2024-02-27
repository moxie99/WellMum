import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { palette } from '@/constants/theme';
import { screenWidth } from '../../constants';
import {
  Box,
  Image,
  LayoutComponent,
  SafeAreaBox,
  ScrollBox,
} from '@/components/Base';
import { Text } from '@/components/Typography';
import { NextButton, Pressable } from '@/components/Button';
import { arrowback, closeSquare, profileImage } from '@/assets/images';
import { heightPixel } from '../../utils';
import { widthPixel } from '../../utils';
import { useNavigation } from '@react-navigation/native';

const TheraphyDetails = () => {
  const [activeTab, setActiveTab] = useState('Tab1');
  const navigation = useNavigation();
  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };
  return (
    <ScrollBox backgroundColor={'white'} padding={'sm'}>
      <SafeAreaBox>
        <Pressable
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          backgroundColor={'lightPrimary'}
          borderRadius={9}
          height={heightPixel(50)}
          width={widthPixel(50)}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={arrowback}
            height={heightPixel(30)}
            width={widthPixel(30)}
          />
        </Pressable>
        <Box marginVertical={'sm'} style={styles.container}>
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
              Theraphy Details
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
              Therapist Details
            </Text>
          </TouchableOpacity>
        </Box>
        {activeTab === 'Tab1' && (
          <Box>
            <Text marginVertical={'sm'} variant={'medium12'}>
              Theraphy Details
            </Text>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              borderColor={'gray'}
              padding={'md'}
              borderWidth={1}
              borderRadius={10}
              marginVertical={'sm'}
            >
              <Text variant={'regular12'}>Therapy Date</Text>
              <Text variant={'regular12'}>25, Dcember 2023 </Text>
            </Box>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              borderColor={'gray'}
              padding={'md'}
              borderWidth={1}
              borderRadius={10}
              marginVertical={'sm'}
            >
              <Text variant={'regular12'}>Therapy Duration</Text>
              <Text variant={'regular12'}>15 mins </Text>
            </Box>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              borderColor={'gray'}
              padding={'md'}
              borderWidth={1}
              borderRadius={10}
              marginVertical={'sm'}
            >
              <Text variant={'regular12'}>Date Booked</Text>
              <Text variant={'regular12'}>8, Dcember 2023 </Text>
            </Box>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              borderColor={'gray'}
              padding={'md'}
              borderWidth={1}
              borderRadius={10}
              marginVertical={'sm'}
            >
              <Text variant={'regular12'}>Therapist</Text>
              <Text variant={'regular12'}>Dr Claire William </Text>
            </Box>
            <Box
              marginVertical={'lg'}
              height={StyleSheet.hairlineWidth}
              backgroundColor={'gray'}
            />
            <Box>
              <Box marginBottom='sl' style={{ marginTop: 50 }}>
                <NextButton label='Join Session Now' />
              </Box>
            </Box>
          </Box>
        )}

        {activeTab === 'Tab2' && (
          <Box>
            <Text marginVertical={'sm'} variant={'medium12'}>
              Theraphist Details
            </Text>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              padding={'md'}
              borderRadius={10}
              gap={'lg'}
            >
              <Image
                source={profileImage}
                height={heightPixel(80)}
                width={widthPixel(80)}
                borderRadius={10}
              />
              <Box>
                <Text marginVertical={'sm'} variant={'bold14'}>
                  Dr. Claire Williams
                </Text>
                <Text variant={'regular12'}>
                  48, Walton Street. California, USA
                </Text>
              </Box>
            </Box>
            <Box
              borderColor={'gray'}
              padding={'md'}
              borderWidth={1}
              borderRadius={10}
              marginVertical={'sm'}
            >
              <Text variant={'bold14'}>About Therapist</Text>
              <Text
                marginVertical={'sm'}
                textAlign={'justify'}
                variant={'regular12'}
                color={'gray'}
              >
                In a world grappling with numerous challenges, drug addiction
                stands out as a pervasive and destructive force that affects
                individuals
              </Text>
            </Box>

            <Box
              borderColor={'gray'}
              padding={'md'}
              borderWidth={1}
              borderRadius={10}
              marginVertical={'sm'}
            >
              <Text variant={'regular12'}>Specialities</Text>
              <Box marginVertical={'md'} flexDirection={'row'} gap={'lg'}>
                <Pressable
                  backgroundColor={'tertiary'}
                  padding={'xs'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={10}
                >
                  <Text variant={'medium12'} color={'deepeTertiary'}>
                    Stress & Anxiety
                  </Text>
                </Pressable>
                <Pressable
                  backgroundColor={'tertiary'}
                  padding={'xs'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={10}
                >
                  <Text variant={'medium12'} color={'deepeTertiary'}>
                    Drug Abuse
                  </Text>
                </Pressable>
                <Pressable
                  backgroundColor={'tertiary'}
                  padding={'xs'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={10}
                >
                  <Text variant={'medium12'} color={'deepeTertiary'}>
                    Alcohol
                  </Text>
                </Pressable>
              </Box>
              <Box flexDirection={'row'} gap={'lg'}>
                <Pressable
                  backgroundColor={'tertiary'}
                  padding={'xs'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={10}
                >
                  <Text variant={'medium12'} color={'deepeTertiary'}>
                    Pornography
                  </Text>
                </Pressable>
                <Pressable
                  backgroundColor={'tertiary'}
                  padding={'xs'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={10}
                >
                  <Text variant={'medium12'} color={'deepeTertiary'}>
                    Alcohol
                  </Text>
                </Pressable>
              </Box>
            </Box>
            <Box
              marginVertical={'md'}
              height={StyleSheet.hairlineWidth}
              backgroundColor={'gray'}
            />
            <Box>
              <Box marginBottom='sl' style={{ marginTop: 50 }}>
                <NextButton label='Join Session Now' />
              </Box>
            </Box>
          </Box>
        )}
      </SafeAreaBox>
    </ScrollBox>
  );
};

export default TheraphyDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: palette.lightGrey,
    width: screenWidth - 20,
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
