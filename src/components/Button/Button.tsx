import { GestureResponderEvent } from 'react-native'
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  FadeOutDown,
} from 'react-native-reanimated'

import { ActivityIndicator, Box, Icon, IconName } from '@/components/Base'
import { Text, TextProps } from '@/components/Typography'
import { palette, useTheme } from '@/constants/theme'

import Pressable, { PressableProps } from './Pressable'
import { heightPercentageToDP, screenWidth } from '../../utils'

const AnimatedBox = Animated.createAnimatedComponent(Box)

export type ButtonProps = PressableProps & {
  icon?: IconName
  isloading?: boolean
  label: string
  labelProps?: TextProps
  variant?: 'primary' | 'secondary'
}

/**
 * Custom `Button` component with two variants (primary & secondary)
 * inherits Pressable Props
 * @see {@link PressableProps}
 */
function Button({
  icon,
  isloading = false,
  label,
  labelProps,
  variant,
  onPress,
  ...rest
}: ButtonProps) {
  const { spacing } = useTheme()
  const handlePress = (event?: GestureResponderEvent | undefined) => {
    if (isloading) return
    if (onPress) {
      onPress(event)
    }
  }
  return (
    <Box alignItems={'center'}>
      <Pressable
        alignItems='center'
        backgroundColor={variant === 'primary' ? 'primary' : 'white'}
        borderRadius={10}
        width={screenWidth * 0.5}
        height={heightPercentageToDP(7)}
        justifyContent='center'
        onPress={handlePress}
        paddingVertical='md'
        type='scale'
        {...rest}
      >
        {isloading ? (
          <AnimatedBox
            entering={FadeInUp}
            exiting={FadeOutDown}
            key={`${isloading}`}
          >
            <ActivityIndicator
              size={16}
              type={variant === 'primary' ? 'light' : 'dark'}
            />
          </AnimatedBox>
        ) : (
          <AnimatedBox
            alignItems='center'
            entering={FadeIn}
            exiting={FadeOut}
            flexDirection='row'
            justifyContent='center'
          >
            <Text
              color={variant === 'primary' ? 'white' : 'black'}
              textAlign='justify'
              variant='bold14'
              {...labelProps}
            >
              {label}
            </Text>
          </AnimatedBox>
        )}
      </Pressable>
    </Box>
  )
}

export default Button
