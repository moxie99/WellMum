
import Checkbox from 'expo-checkbox';
import React from "react";
import { StyleSheet } from "react-native";

import {Box} from "@/components/Base";
import {Text} from "@/components/Typography";
import {palette} from "@/constants/theme";

const styles = StyleSheet.create({
    checkbox: {
        borderColor: palette.deepBlue,
        marginVertical: 8
    },
    checkboxContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    }
});

export type CheckBoxButtonProps = {
  isChecked: boolean;
  setChecked: (argument: boolean) => void;
  label: string;
  labelSize?: number;
};


export default function CheckBoxButton({
  isChecked = false,
  setChecked,
  label,
  labelSize,
}: CheckBoxButtonProps) {
  return (
    <Box style={[styles.checkboxContainer]}>
      <Checkbox
        color={isChecked ? palette.deepBlue : undefined}
        onValueChange={setChecked}
        style={styles.checkbox}
        value={isChecked}
      />
      <Text
        color="black"
        marginTop="xs"
        style={{ flex: 1, fontSize: labelSize, paddingLeft: 10 }}
        variant="regular14"
      >
        {label}
      </Text>
    </Box>
  );
}
