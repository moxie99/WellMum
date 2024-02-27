/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable unicorn/filename-case */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable unicorn/prefer-string-slice */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable arrow-body-style */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-template */
/* eslint-disable react/jsx-sort-props */
import React from "react";
import { SafeAreaView } from "react-native";
import Modal from "react-native-modal";

import { Box, Icon, ScrollBox } from "@/components/Base/index";
import ToastMessage from "@/components/Base/ToastMessage";
import { NextButton, OtpButton, Pressable } from "@/components/Button";
import { Text } from "@/components/Typography";
import { showToast } from "@/utils/helpers";

function maskEmail(email: string | null): string {
  if (!email) {
    return "Email is null or empty";
  }

  const parts: string[] = email.split("@");
  if (parts.length !== 2) {
    return "Invalid email format";
  }

  const username: string = parts[0];
  const domain: string = parts[1];
  const usernamePrefix: string = username.slice(0, 3);
  const usernameSuffix: string = username.slice(-3);
  const maskedEmail: string = `${usernamePrefix}*****${usernameSuffix}@${domain}`;
  return maskedEmail;
}

function maskPhoneNumber(phoneNumber: string | null): string {
  if (!phoneNumber) {
    return "Phone number is null or empty";
  }

  const cleanedPhoneNumber: string = phoneNumber.replace(/\D/g, "");
  if (cleanedPhoneNumber.length < 11) {
    return "Invalid phone number format";
  }

  const firstThreeDigits: string = cleanedPhoneNumber.slice(0, 3);
  const lastTwoDigits: string = cleanedPhoneNumber.slice(-3);
  const maskedPhoneNumber: string = `${firstThreeDigits}****${lastTwoDigits}`;
  return maskedPhoneNumber;
}

const OTPModal = ({
  closeModal,
  isVisible,
  navigator,
  handleVerifyOTP,
  OTPValue,
  setOTPValue,
  isLoadingVerifyOTP,
  accountOpeningData,
}: {
  closeModal: () => void;
  isVisible: boolean;
  navigator: any;
  handleVerifyOTP: () => void;
  setOTPValue: any;
  OTPValue: any;
  isLoadingVerifyOTP: boolean;
  accountOpeningData: any;
}) => {
  return (
    <Modal isVisible={isVisible}>
      <SafeAreaView style={{ flex: 1 }}>
        <ToastMessage />
        <Box
          backgroundColor="white"
          borderRadius={10}
          justifyContent="center"
          paddingHorizontal="sl"
          paddingVertical="lg"
          flex={1}
        >
          <Pressable
            alignItems="center"
            backgroundColor="harsh"
            borderRadius={14}
            height={28}
            justifyContent="center"
            marginBottom="lg"
            onPress={closeModal}
            width={28}
          >
            <Icon name="x-icon" size="s" />
          </Pressable>
          {/*<Text variant="medium16">*/}
          {/*    Confirm OTP{" "}*/}
          {/*</Text>*/}
          <ScrollBox
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <Box marginBottom="sl">
              <Text color="black" marginVertical="xs" variant="bold16">
                OTP Verification
              </Text>
              <Text color="success3" variant="regular14">
                OTP has been sent to{" "}
                {maskPhoneNumber(
                  accountOpeningData.phoneToSendOtp
                    ? accountOpeningData?.phoneToSendOtp
                    : accountOpeningData?.phoneNumber,
                ) +
                  " and " +
                  maskEmail(accountOpeningData?.email) +
                  "."}
              </Text>

              <OtpButton
                onChangeText={(item) => setOTPValue(item)}
                value={OTPValue}
              />
            </Box>
            <Box flex={1} justifyContent="flex-end">
              <NextButton
                isLoading={isLoadingVerifyOTP}
                label="CONFIRM OTP"
                onPress={() => {
                  if (!OTPValue) {
                    return showToast({
                      message: "Enter OTP to proceed",
                      type: "danger",
                    });
                  }
                  if (OTPValue?.length !== 5) {
                    return showToast({
                      message: "Enter valid otp",
                      type: "danger",
                    });
                  }
                  handleVerifyOTP();
                }}
              />
            </Box>
          </ScrollBox>
        </Box>
        <ToastMessage />
      </SafeAreaView>
    </Modal>
  );
};

export default OTPModal;
