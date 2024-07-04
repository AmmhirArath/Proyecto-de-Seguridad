import * as React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AuthStack from './src/navigation/AuthStack';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

const App = () => {
  const [fontsLoaded, fontError]  = useFonts({
    'Bold': require("./src/assets/fonts/InriaSans-Bold.ttf"),
    'Regular': require("./src/assets/fonts/InriaSans-Regular.ttf")
  })
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <AuthStack/>
  );
}

export default App;
