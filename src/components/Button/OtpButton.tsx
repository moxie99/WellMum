import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { Box, Image } from '@/components/Base'
import Pressable from '@/components/Button/Pressable'
import { Text } from '@/components/Typography'
import { hp } from '@/constants/'
import { palette } from '@/constants/theme'
import { hapticFeedback, screenHeight } from '@/utils/'

import useStore from '../../store/useStore'
import { close, face } from '@/assets/images'

const styles = StyleSheet.create({
  customPad: {
    alignItems: 'center',
    justifyContent: 'center',
    width: RFValue(70),
    height: RFValue(70),
    borderRadius: RFValue(10),
  },
  dot: {
    width: RFValue(30),
    height: RFValue(30),
    borderRadius: RFValue(8),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(10),
  },
})

export type CustomKeyboardProps = {
  value: string
  onChangeText: (argument: string) => void
  noMargin?: boolean
  bgColor?: string
  faceNeeded?: boolean
}

export default function OtpButton({
  value,
  onChangeText,
  noMargin,
  bgColor,
  faceNeeded,
}: CustomKeyboardProps) {
  const { accountOpeningData } = useStore((state) => state)

  const handleClick = (item: any) => {
    if (value?.length < 6) {
      hapticFeedback()
      const returnedValue = [...value, item].join('')
      onChangeText(returnedValue)
    }
  }

  const handleDelete = () => {
    hapticFeedback()
    if (value?.length > 0) {
      const newValue = [...value]
      newValue.pop()
      onChangeText(newValue.join(''))
    }
  }

  return (
    <Box style={{ flex: 1 }}>
      <Box
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: RFValue(20),
          backgroundColor: palette.lightGray,
          borderRadius: 12,
          paddingVertical: 8,
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <Box
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: value[index]
                  ? palette.primary
                  : palette.lightPurple,
                margin: 10,
              },
            ]}
          />
        ))}
      </Box>
      {noMargin && <Box height={screenHeight * 0.1} />}

      <Box
        paddingHorizontal={'sm'}
        paddingVertical={'sm'}
        borderColor={'lightPurple'}
        borderWidth={1}
        borderRadius={12}
      >
        <Box style={styles.row}>
          {[1, 2, 3].map((number) => (
            <Pressable
              key={number}
              containerStyle={[
                styles.customPad,
                {
                  borderColor: value.includes(number.toString())
                    ? palette.primary
                    : palette.white,
                  borderWidth: 1,
                  backgroundColor: bgColor ? bgColor : 'white',
                },
              ]}
              onPress={() => handleClick(number)}
            >
              <Text
                style={{
                  color: value.includes(number.toString())
                    ? palette.primary
                    : palette.black,
                }}
                variant={'bold16'}
              >
                {number}
              </Text>
            </Pressable>
          ))}
        </Box>

        <Box style={styles.row}>
          {[4, 5, 6].map((number) => (
            <Pressable
              key={number}
              containerStyle={[
                styles.customPad,
                {
                  borderColor: value.includes(number.toString())
                    ? palette.primary
                    : palette.white,
                  borderWidth: 1,
                  backgroundColor: bgColor ? bgColor : 'white',
                },
              ]}
              onPress={() => handleClick(number)}
            >
              <Text
                style={{
                  color: value.includes(number.toString())
                    ? palette.primary
                    : palette.black,
                }}
                variant={'bold16'}
              >
                {number}
              </Text>
            </Pressable>
          ))}
        </Box>

        <Box style={styles.row}>
          {[7, 8, 9].map((number) => (
            <Pressable
              key={number}
              containerStyle={[
                styles.customPad,
                {
                  borderColor: value.includes(number.toString())
                    ? palette.primary
                    : palette.white,
                  borderWidth: 1,
                  backgroundColor: bgColor ? bgColor : 'white',
                },
              ]}
              onPress={() => handleClick(number)}
            >
              <Text
                style={{
                  color: value.includes(number.toString())
                    ? palette.primary
                    : palette.black,
                }}
                variant={'bold16'}
              >
                {number}
              </Text>
            </Pressable>
          ))}
        </Box>

        <Box style={styles.row}>
          <Pressable
            containerStyle={[
              styles.customPad,
              {
                backgroundColor: faceNeeded ? bgColor : 'white',
              },
            ]}
            onPress={handleDelete}
          >
            {faceNeeded ? (
              <Image source={face} width={30} height={30} />
            ) : (
              <Box
                width={30}
                height={30}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text color={'primary'} variant={'bold16'}>
                  *
                </Text>
              </Box>
            )}
          </Pressable>

          <Pressable
            containerStyle={[
              styles.customPad,
              {
                borderColor: value.includes('0')
                  ? palette.primary
                  : palette.white,
                borderWidth: 1,
                backgroundColor: bgColor ? bgColor : 'white',
              },
            ]}
            onPress={() => handleClick(0)}
          >
            <Text
              style={{
                color: value.includes('0') ? palette.primary : palette.black,
              }}
              variant={'bold16'}
            >
              0
            </Text>
          </Pressable>

          <Pressable
            containerStyle={[
              styles.customPad,
              {
                backgroundColor: bgColor ? bgColor : 'white',
              },
            ]}
            onPress={handleDelete}
          >
            <Image source={close} width={30} height={30} />
          </Pressable>
        </Box>
      </Box>
    </Box>
  )
}
