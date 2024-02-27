import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Pressable, StyleSheet } from 'react-native'

import Box from '@/components/Base/Box'
import Icon from '@/components/Base/Icon'
import { Text } from '@/components/Typography'
import { wp } from '@/constants/'
import { resetNavigation } from '@/navigation/ResetNavigator'

import useStore from '../../store/useStore'
import SafeAreaBox, { SafeAreaBoxProps } from './SafeAreaBox'
import { filter, notif, notifImg, support, wallet } from '@/assets/images'
import Image from './Image'
import { heightPixel } from '../../utils'
import { widthPixel } from '../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import { backgroundColor } from '@shopify/restyle'
import { palette } from '@/constants/theme'

export type LayoutComponentProps = SafeAreaBoxProps & {
  isIcon?: boolean
  label?: string
  children?: JSX.Element | JSX.Element[]
}

const styles = StyleSheet.create({
  blank: {
    width: wp(30),
  },
  iconImage: {
    color: 'white',
    marginRight: wp(10),
  },
  image: {
    borderRadius: 10,
    height: 300,
    width: '100%',
  },
  rotate: {
    transform: [{ rotate: '180deg' }],
  },
})

export default function LayoutComponent({
  label,
  isIcon = false,
  children,
  ...rest
}: LayoutComponentProps) {
  const navigation = useNavigation()
  const { setAccountOpeningData } = useStore((state) => state)

  const homeAlert = () =>
    Alert.alert(
      'Return to Dashboard?',
      'All your data will be cleared and you will return to dashboard',
      [
        {
          onPress: () => {},
        },
        {
          onPress: () => {
            setAccountOpeningData({})
            resetNavigation('HomeScreen')
          },
          text: 'Proceed',
        },
      ]
    )

  return (
    <Box backgroundColor='white' flex={1}>
      <SafeAreaBox edges={['bottom', 'top']} flex={1} {...rest}>
        <Box
          alignItems='center'
          flexDirection='row'
          marginBottom='lg'
          marginTop='md'
          paddingHorizontal='md'
          justifyContent={'space-between'}
        >
          <Box alignItems='center' justifyContent='center'>
            <Text color='lightBlack' marginTop='xs' variant='bold16'>
              {label}
            </Text>
          </Box>
          {isIcon ? (
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'center'}
              gap={'md'}
            >
              <Pressable style={{}} onPress={() => homeAlert()}>
                <Image
                  source={support}
                  height={heightPixel(30)}
                  width={widthPixel(30)}
                />
              </Pressable>
              <Pressable style={{}} onPress={() => homeAlert()}>
                <Image
                  source={notif}
                  height={heightPixel(30)}
                  width={widthPixel(30)}
                />
              </Pressable>
              <Pressable style={{}} onPress={() => homeAlert()}>
                <Image
                  source={filter}
                  height={heightPixel(30)}
                  width={widthPixel(30)}
                />
              </Pressable>
            </Box>
          ) : (
            <Box style={styles.blank} />
          )}
        </Box>
        {children}
      </SafeAreaBox>
    </Box>
  )
}
