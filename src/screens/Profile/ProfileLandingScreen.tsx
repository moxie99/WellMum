import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { resetNavigation } from '@/navigation/ResetNavigator';

const ProfileLandingScreen = () => {
  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      resetNavigation('LoginScreen');
    } catch (e) {
      console.log('error', e);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={removeToken}>
        <Text>ProfileLandingScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileLandingScreen;

const styles = StyleSheet.create({});
