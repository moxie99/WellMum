import React, { useEffect } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StatusBar } from 'expo-status-bar';
import { AppStateStatus } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { focusManager, QueryClient, QueryClientProvider } from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToastMessage from './src/components/Base/ToastMessage';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { isWeb } from './src/constants';
import theme from './src/constants/theme';
import { useAppState, useCachedResources, useOnlineManager } from './src/hooks';
import Navigation from './src/navigation';
import { resetNavigation } from '@/navigation/ResetNavigator';
import { useNavigation } from '@react-navigation/native';

function onAppStateChange(status: AppStateStatus) {
  if (!isWeb) {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient();

export default function App() {
  enableScreens(true);
  useOnlineManager();
  useAppState(onAppStateChange);

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <SafeAreaProvider>
              <QueryClientProvider client={queryClient}>
                <Navigation />
                <ToastMessage />
                <FlashMessage position='top' />
              </QueryClientProvider>
            </SafeAreaProvider>
            <StatusBar style='light' />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
