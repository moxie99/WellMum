import { StyleSheet } from 'react-native';
import React from 'react';
import Box from './Box';
import { Pressable } from '../Button';
import { Text } from '../Typography';

interface HorizontalRuleProps {
  onPress: () => void;
  buttonText: string;
}
const HorizontalRule = ({ onPress, buttonText }: HorizontalRuleProps) => {
  return (
    <Box position={'absolute'} bottom={30} right={10} left={10}>
      <Box
        marginBottom={'Ml'}
        height={StyleSheet.hairlineWidth}
        backgroundColor={'gray'}
      />

      <Pressable
        backgroundColor={'deepeTertiary'}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={10}
        padding={'md'}
        onPress={onPress}
      >
        <Text color={'white'} variant={'bold16'}>
          {buttonText}
        </Text>
      </Pressable>
    </Box>
  );
};

export default HorizontalRule;

const styles = StyleSheet.create({});
