import { createTheme, useTheme as useRestyleTheme } from '@shopify/restyle'
import { PixelRatio } from 'react-native'

import { wp } from '../../constants/layout'

const fontScale = (fontsize: number) => PixelRatio.getFontScale() * fontsize

export const palette = {
  black: '#000000',
  black8: '#D8D8D8',
  blackTint: '#696977',
  blue: '#3878B8',
  blueb6: '#006FB6',
  burgundy: '#AC145A',
  burgundy16: '#B93A74',
  classicBlue: '#0033AA',
  classicBlue16: '#2954B8',
  darkBlue: '#001648',
  deepBlue: '#005CC8',
  deepBlue12: '#E0EBF8',
  deepBlue8: '#EBF2FB',
  error: '#E25825',
  fadeBlue: '#616E88',
  grey: '#C1C7CF',
  lightGrey: '#F6F7F9',
  inactiveBorder: '#CCCCCC',
  harsh: '#FAFAFA',
  lightblue: 'rgba(0, 92, 200, 0.08)',
  lightgray: '#EFEFEF',
  primary: '#8C028E',
  lightPurple: 'rgba(140, 2, 142, 0.05)',
  purple: '#665EC7',
  purple16: '#A4A0DE',
  secondary: '#009C97',
  tertiary: '#CDF0EF',
  lightPrimary: '#DFF6F5',
  success: '#97E225',
  success2: '#007200',
  success3: '#045206',
  transparent: 'transparent',
  white: '#ffffff',
  red: 'red',
  pink: '#FBD4C6',
  lightPink: '#FBD8CC',
  lighterPink: '#FFFBF9',
  darkPink: '#AE8779',
  lightBlack: '#333333',
  lightestPink: '#FEF6F4',
  lightRed: '#FFCFD7',
  midBrown: '#FDE5DD',
  midGray: '#E6E6E6',
  midRed: '#FFF5F7',
  lightBlue: '#EFFAFA',
  lightGreenbg: '#CDF0EF',
  lightGray: '#FAFAFA',
  gray: '#999999',
  grayShad: '#F2F2F2',
  lightWhite: 'rgba(255, 255, 255, 0.25)',
  lighterWhite: 'rgba(239, 250, 250, 0.24)',
  deepeTertiary: 'rgba(7, 182, 176, 1)',
  medGray: '#808080',
  middleGray: '#F2F2F3',
  wellMumGray: '#B1B1B1',
  wellMumDarkGray: '#EEEEEE',
  wellMumLightGrayBorder: '#F4F4F4',
}

const theme = createTheme({
  breakpoints: {
    bigscreen: 412,
    phone: 0,
    tablet: 768,
  },
  colors: {
    ...palette,
    blockBg: palette.grey,
    buttonPry: palette.primary,
    mainBackground: palette.white,
    textColor: palette.black,
    textColorTint: palette.blackTint,
  },
  iconsizes: {
    l: {
      height: wp(24),
      width: wp(24),
    }, // large
    m: {
      height: wp(16),
      width: wp(16),
    }, // medium
    s: {
      height: wp(8),
      width: wp(8),
    }, // small
    xl: {
      height: wp(32),
      width: wp(32),
    }, // extra large
    xs: {
      height: wp(4),
      width: wp(4),
    }, // extra small
    xxl: {
      height: wp(48),
      width: wp(48),
    }, // extra extra large
  },
  spacing: {
    Ml: wp(60), // mega large
    lg: wp(24), // large
    md: wp(16), // medium
    sl: wp(20), // semi large
    sm: wp(12), // semi medium
    sml: wp(8), // small
    xl: wp(32), // extra large
    xs: wp(4), // extra small
    xxl: wp(40), // extra extra large
    xxs: wp(2), // extra extra small
  },
  textVariants: {
    body: {
      color: 'textColorTint',
      fontFamily: 'harmonia-rg',
      fontSize: fontScale(14),
      fontWeight: '400',
      lineHeight: fontScale(20),
    },
    bold14: {
      color: 'textColor',
      fontFamily: 'bento-bold',
      fontSize: fontScale(14),
      fontWeight: '700',
    },
    bold16: {
      color: 'textColor',
      fontFamily: 'bento-bold',
      fontSize: fontScale(16),
      fontWeight: '700',
    },
    bold24: {
      color: 'textColor',
      fontFamily: 'bento-bold',
      fontSize: fontScale(24),
      fontWeight: '700',
      lineHeight: fontScale(25),
    },
    boldBody: {
      color: 'textColorTint',
      fontFamily: 'harmonia-bd',
      fontSize: fontScale(14),
      fontWeight: '700',
      lineHeight: fontScale(20),
    },
    button: {
      color: 'mainBackground',
      fontFamily: 'bento-bold',
      fontSize: fontScale(16),
      fontWeight: '700',
    },
    header: {
      color: 'textColor',
      fontFamily: 'harmonia-sbd',
      fontSize: fontScale(24),
      fontWeight: '600',
      lineHeight: fontScale(36),
    },
    medium12: {
      color: 'textColor',
      fontFamily: 'bento-medium',
      fontSize: fontScale(12),
      fontWeight: '400',
      lineHeight: fontScale(20),
    },
    medium14: {
      color: 'textColor',
      fontFamily: 'bento-medium',
      fontSize: fontScale(14),
      fontWeight: '400',
    },
    medium16: {
      color: 'textColor',
      fontFamily: 'bento-medium',
      fontSize: fontScale(16),
      fontWeight: '400',
    },
    regular12: {
      color: 'textColor',
      fontFamily: 'bento-regular',
      fontSize: fontScale(12),
      fontWeight: '400',
      lineHeight: fontScale(14),
    },
    regular14: {
      color: 'textColor',
      fontFamily: 'bento-regular',
      fontSize: fontScale(14),
      fontWeight: '400',
      lineHeight: fontScale(20),
    },
    regular16: {
      color: 'textColor',
      fontFamily: 'bento-regular',
      fontSize: fontScale(16),
      fontWeight: '500',
      lineHeight: fontScale(24),
    },
    regular20: {
      color: 'textColor',
      fontFamily: 'bento-regular',
      fontSize: fontScale(20),
      fontWeight: '500',
      lineHeight: fontScale(30),
    },
    subHeading: {
      color: 'textColor',
      fontFamily: 'harmonia-sbd',
      fontSize: fontScale(18),
      fontWeight: '600',
      lineHeight: fontScale(21),
    },
  },
})

export type Theme = typeof theme

export const useTheme = () => useRestyleTheme<Theme>()

export default theme
