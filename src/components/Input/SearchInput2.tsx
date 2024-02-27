import React from "react";
import { TextInput } from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';
import { Box, Icon } from '@/components/Base';

export interface SearchInputProps {
  value: string;
  onChangeText: (argument: any) => void;
  placeholder?: string;
}

const SearchInput2 = ({
  value,
  onChangeText,
  placeholder,
}: SearchInputProps) => (
  <Box paddingBottom='sm'>
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
      <Ionicons
        style={{ paddingLeft: 10 }}
        name='search-outline'
        size={24}
        color='black'
      />
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{ flex: 1, height: 45, paddingHorizontal: RFValue(5) }}
        value={value}
      />
    </Box>
  </Box>
);

export default SearchInput2
