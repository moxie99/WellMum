import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Image } from '@/components/Base';
import { emojiFrame } from '@/assets/images';
import { Text } from '@/components/Typography';
import { heightPixel, screenHeight } from '../../utils';
import { widthPixel } from '../../utils';
import { Pressable } from '@/components/Button';
import { useNavigation } from '@react-navigation/native';

const AnalysisDecisionScreen = () => {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate('SignUpLanding');
  };

  const goHome = () => {
    navigation.navigate('IndexScreen');
  };
  return (
    <Box style={styles.container}>
      <Box style={[styles.emoji, { top: '10%', left: '20%' }]}>
        <Text variant={'bold16'} color={'black'}>
          🌟
        </Text>
      </Box>
      <Box style={[styles.emoji, { top: '20%', left: '60%' }]}>
        <Text variant={'bold16'} color={'black'}>
          🌸
        </Text>
      </Box>
      <Box style={[styles.emoji, { top: '30%', left: '40%' }]}>
        <Text variant={'bold16'} color={'black'}>
          🍀
        </Text>
      </Box>
      <Box style={[styles.emoji, { top: '40%', left: '70%' }]}>
        <Text variant={'bold16'} color={'black'}>
          ❤️
        </Text>
      </Box>
      <Box style={[styles.emoji, { top: '50%', left: '10%' }]}>
        <Text variant={'bold16'} color={'black'}>
          😊
        </Text>
      </Box>
      <Box style={[styles.emoji, { top: '60%', left: '50%' }]}>
        <Text variant={'bold16'} color={'black'}>
          😎
        </Text>
      </Box>
      <Box style={[styles.emoji, { top: '70%', left: '30%' }]}>
        <Text variant={'bold16'} color={'black'}>
          🐱
        </Text>
      </Box>
      <Box style={[styles.emoji, { top: '80%', left: '80%' }]}>
        <Text variant={'bold16'} color={'black'}>
          🌈
        </Text>
      </Box>

      <Image source={emojiFrame} style={styles.image} />
      <Box height={screenHeight * 0.5} />
      <Box>
        <Text textAlign={'center'} variant={'bold16'} color={'black'}>
          You Can Be Better. We Are Here To Help
        </Text>
        <Text
          marginVertical={'md'}
          textAlign={'center'}
          variant={'medium12'}
          color={'medGray'}
        >
          Delivering to you the new and improved you.
        </Text>
      </Box>
      <Box height={screenHeight * 0.2} />

      <Pressable
        backgroundColor={'deepeTertiary'}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={10}
        padding={'md'}
        position={'absolute'}
        left={10}
        bottom={10}
        right={10}
        onPress={goToRegister}
      >
        <Text color={'white'} variant={'bold16'}>
          I want to Get Care
        </Text>
      </Pressable>

      <Pressable
        onPress={goHome}
        flexDirection={'row'}
        gap={'md'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text color={'medGray'} variant={'bold16'}>
          Not Interested?
        </Text>
        <Text color={'black'} variant={'bold16'}>
          Back to Home
        </Text>
      </Pressable>
    </Box>
  );
};

export default AnalysisDecisionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  emoji: {
    position: 'absolute',
    fontSize: 24,
  },
  image: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    width: heightPixel(200),
    height: widthPixel(200),
    resizeMode: 'contain',
    transform: [{ translateX: -100 }, { translateY: -100 }],
  },
});
