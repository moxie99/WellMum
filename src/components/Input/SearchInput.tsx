import React from 'react'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { EvilIcons } from '@expo/vector-icons'
import { Box, Icon } from '@/components/Base'
import { palette } from '@/constants/theme'

export interface SearchInputProps {
  value: string
  onChangeText: (argument: any) => void
  placeholder?: string
}

const SearchInput = ({
  value,
  onChangeText,
  placeholder,
}: SearchInputProps) => (
  <Box padding='sm'>
    <Box
      alignItems='center'
      flexDirection='row'
      style={{
        borderColor: '#CFCDD0',
        borderRadius: RFValue(4),
        borderWidth: 1,
        height: 45,
      }}
    >
      <EvilIcons name='search' size={12} color={palette.primary} />
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{ flex: 1, height: 45, paddingHorizontal: RFValue(5) }}
        value={value}
      />
    </Box>
  </Box>
)

export default SearchInput
