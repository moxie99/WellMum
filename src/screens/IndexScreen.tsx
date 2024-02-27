import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useTranslation } from 'react-i18next'
import { Animated, Easing, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { logo } from '@/assets/images'
import { Box, Image } from '@/components/Base'
import { Button } from '@/components/Button'
import { Text } from '@/components/Typography'
import { hp } from '@/constants/layout'
import { heightPixel, screenHeight, screenWidth, widthPixel } from '../utils'
import { useEffect, useRef } from 'react'
const styles = StyleSheet.create({
  margin: {
    marginTop: hp(90),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  safeArea: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default function IndexScreen() {
  const { t } = useTranslation()
  const navigation = useNavigation()

  const fadeInAnim = useRef(new Animated.Value(0)).current
  const fadeInAnimText = useRef(new Animated.Value(0)).current
  const moveUpAnim = useRef(new Animated.Value(screenHeight)).current
  const slideInAnim = useRef(new Animated.Value(screenWidth)).current

  const fadeIn = () => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start()
  }
  const fadeInText = () => {
    Animated.timing(fadeInAnimText, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start()
  }

  const moveUp = () => {
    Animated.timing(moveUpAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start()
  }

  const slideIn = () => {
    Animated.timing(slideInAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start()
  }

  useEffect(() => {
    const fadeInSequence = () => {
      Animated.parallel([
        Animated.timing(fadeInAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(moveUpAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(slideInAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]).start(() => {
        fadeInText()
      })
    }

    const fadeInText = () => {
      Animated.timing(fadeInAnimText, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start()
    }

    fadeInSequence()
  }, [])

  const handleGetStarted = () => {
    navigation.navigate('SignUpLanding')
  }

  return (
    <Box alignItems='center' flex={1} justifyContent='center'>
      <StatusBar style='light' />
      <Box flex={1} width='100%' backgroundColor={'white'}>
        <SafeAreaView edges={['bottom', 'top']} style={styles.safeArea}>
          <Animated.View
            style={[
              styles.margin,
              {
                opacity: fadeInAnim,
                transform: [{ translateY: moveUpAnim }],
              },
            ]}
          >
            <Image
              source={logo}
              opacity={0.9}
              height={heightPixel(196)}
              width={widthPixel(196)}
              resizeMode='contain'
            />
          </Animated.View>

          <Animated.View style={{ opacity: fadeInAnimText }}>
            <Box marginTop='md'>
              <Text
                color='black'
                variant='regular16'
                opacity={0.9}
                textAlign='center'
              >
                Mothers and women get the best
              </Text>
              <Text
                color='black'
                variant='regular16'
                opacity={0.9}
                textAlign='center'
              >
                health care with us
              </Text>
            </Box>
          </Animated.View>
        </SafeAreaView>
        <Animated.View style={{ transform: [{ translateX: slideInAnim }] }}>
          <Box paddingBottom='lg' marginTop={'Ml'}>
            <Button
              marginVertical='xxl'
              label='Get Started'
              variant='primary'
              onPress={handleGetStarted}
            />
          </Box>
        </Animated.View>
      </Box>
    </Box>
  )
}
