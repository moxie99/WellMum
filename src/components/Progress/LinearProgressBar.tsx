import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import { Box } from '../Base'
import { screenWidth } from '../../constants'
import { palette } from '@/constants/theme'

interface ProgressBarProps {
  progress: number // value between 0 and 1
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    width: screenWidth * 0.4,
  },
  bar: {
    height: '100%',
    backgroundColor: palette.primary,
  },
  text: {
    color: '#00808C',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2,
  },
})
const ProgressBar = ({ progress }: ProgressBarProps) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(progress * 100)
  }, [progress])

  return (
    <Box style={styles.container}>
      <Box style={[styles.bar, { width: `${width}%` }]} />
    </Box>
  )
}

export default ProgressBar
