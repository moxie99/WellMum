import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Image } from '@/components/Base';
import { heightPixel } from '../../../utils';
import { widthPixel } from '../../../utils';
import { Text } from '@/components/Typography';
import { timeIcon } from '@/assets/images';
import { palette } from '@/constants/theme';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Pressable } from '@/components/Button';
import { opacity } from '@shopify/restyle';
import { useNavigation } from '@react-navigation/native';
dayjs.extend(relativeTime);
interface CommunityProps {
  imgTherapist: string;
  imgClient: string;
  therapistName: string;
  callDescription: string;
  time: string;
  opacity?: boolean;
  item: object;
}
const UpcomingEventsCard = ({
  imgTherapist,
  imgClient,
  therapistName,
  callDescription,
  time,
  item,
}: CommunityProps) => {
  const navigation = useNavigation();

  const navToTherDetails = () => {
    navigation.navigate('TheraphyDetails', { item });
  };
  return (
    <Pressable
      marginVertical={'sm'}
      paddingVertical={'md'}
      paddingHorizontal={'sm'}
      backgroundColor={'white'}
      borderRadius={10}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      gap={'sm'}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
      }}
      onPress={navToTherDetails}
    >
      <Box padding={'lg'} style={styles.container}>
        <Box>
          <Image src={imgTherapist} style={styles.image} />
          <Image src={imgClient} style={[styles.image, styles.overlap]} />
        </Box>
      </Box>
      <Box gap={'sm'} flex={1} paddingHorizontal={'sm'}>
        <Text variant={'medium14'} color={'lightBlack'}>
          Session with Dr. {therapistName}
        </Text>
        <Text numberOfLines={2} variant={'medium12'} color={'grey'}>
          {callDescription}
        </Text>
        <Box flexDirection={'row'} alignItems={'center'} gap={'sm'}>
          <Image
            source={timeIcon}
            height={heightPixel(20)}
            width={widthPixel(20)}
          />
          <Text variant={'medium14'}>{dayjs(time).fromNow()}</Text>
        </Box>
      </Box>
    </Pressable>
  );
};

export default UpcomingEventsCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.lightBlue,
  },
  image: {
    width: widthPixel(40),
    height: heightPixel(40),
    borderRadius: 1000,
    resizeMode: 'cover',
  },
  overlap: {
    position: 'absolute',
    top: 0,
    borderWidth: 5,
    borderColor: 'white',
    left: widthPixel(40) - widthPixel(20),
    width: widthPixel(40),
    height: heightPixel(40),
  },
});
