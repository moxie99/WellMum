/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable simple-import-sort/imports */
import * as React from 'react'
import { useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Animated, { Layout, ZoomIn, ZoomOut } from 'react-native-reanimated'
import { palette } from '@/constants/theme'
import { Entypo, Feather } from '@expo/vector-icons'

export interface SimpleInputProps {
  onChangeText?: (argument: any) => void
  value?: any
  containerStyle?: any
  isPassword?: boolean
  label?: string
  height?: number
  inputStyle?: any
  labelStyle?: any
  multiline?: boolean
  placeholder?: string
  maxLength?: number | null | undefined
  editable?: boolean
  keyboardType?: any
  wrapperStyle?: any
  textAlignVertical?: any
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#C4C4C4',
    borderRadius: RFValue(4),
    borderWidth: 1,
    height: RFValue(55),
    paddingHorizontal: RFValue(10),
    position: 'relative',
    width: '100%',
  },
  image: {
    height: RFValue(20),
    width: RFValue(20),
  },
  input: {
    color: 'black',
    fontSize: RFValue(14),
    height: RFValue(40),
    padding: 0,
  },
})

const SimpleInput = ({
  onChangeText,
  value,
  containerStyle,
  isPassword,
  label,
  height,
  inputStyle,
  labelStyle,
  multiline,
  placeholder,
  maxLength,
  editable = true,
  keyboardType = 'default',
  wrapperStyle,
  textAlignVertical = 'center',
  ...rest
}: SimpleInputProps) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const [showPassword, setShowPassword] = useState(!isPassword)
  return (
    <View style={[{ marginVertical: RFValue(8) }, wrapperStyle]}>
      <View
        style={[
          styles.container,
          containerStyle,
          {
            backgroundColor: !editable ? palette.harsh : 'white',
            borderRadius: 10,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
          },
        ]}
      >
        {(isFocused || Boolean(value)) && (
          <Animated.View
            entering={ZoomIn.duration(300)}
            exiting={ZoomOut.duration(300)}
            layout={Layout.springify()}
            style={{
              justifyContent: 'flex-end',
              paddingHorizontal: RFValue(10),
              paddingTop: RFValue(5),
              position: 'absolute',
              zIndex: 2,
            }}
          >
            <Text
              style={[
                {
                  color: 'grey',
                  fontSize: RFValue(10),
                  textTransform: 'uppercase',
                  marginBottom: 10,
                },
                labelStyle,
              ]}
            >
              {/* {label} */}
            </Text>
          </Animated.View>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: isFocused || value ? 'flex-end' : 'center',
          }}
        >
          <View
            style={[
              {
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              },
            ]}
          >
            <View style={{ width: isPassword ? '90%' : '100%' }}>
              <TextInput
                autoCapitalize='none'
                editable={editable}
                autoComplete='off'
                keyboardType={keyboardType}
                secureTextEntry={showPassword}
                maxLength={maxLength}
                multiline={multiline}
                onBlur={() => setIsFocused(false)}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)}
                placeholder={placeholder}
                placeholderTextColor='#a9a9a9'
                style={[
                  styles.input,
                  {
                    paddingRight: isPassword ? RFValue(25) : RFValue(30),
                  },
                  inputStyle,
                ]}
                textAlignVertical={textAlignVertical}
                value={value}
                {...rest}
              />
            </View>
          </View>
          {isPassword && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Entypo
                name={showPassword ? 'eye' : 'eye-with-line'}
                size={24}
                color={palette.wellMumGray}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  )
}

export default SimpleInput
