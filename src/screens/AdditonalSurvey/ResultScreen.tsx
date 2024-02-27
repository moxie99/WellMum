import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Box, Image } from '@/components/Base';
import { emojiFrame } from '@/assets/images';

const ResultScreen = () => {
  return (
    <Box style={styles.container}>
      {/* Emojis */}
      <Box style={[styles.emoji, { top: '10%', left: '20%' }]}>🌟</Box>
      <Box style={[styles.emoji, { top: '20%', left: '60%' }]}>🌸</Box>
      <Box style={[styles.emoji, { top: '30%', left: '40%' }]}>🍀</Box>
      <Box style={[styles.emoji, { top: '40%', left: '70%' }]}>❤️</Box>
      <Box style={[styles.emoji, { top: '50%', left: '10%' }]}>😊</Box>
      <Box style={[styles.emoji, { top: '60%', left: '50%' }]}>😎</Box>
      <Box style={[styles.emoji, { top: '70%', left: '30%' }]}>🐱</Box>
      <Box style={[styles.emoji, { top: '80%', left: '80%' }]}>🌈</Box>
      {/* Image */}
      <Image source={emojiFrame} style={styles.image} />
    </Box>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 400,
    height: 400,
  },
  emoji: {
    position: 'absolute',
    fontSize: 24,
  },
  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 200,
    height: 200,
    resizeMode: 'contain',
    transform: [{ translateX: -100 }, { translateY: -100 }],
  },
});
