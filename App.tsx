import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bienvenida from './src/screen/Bienvenida';
import Inicio from './src/screen/Inicio';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';¿

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida">
        <Stack.Screen 
          name="Bienvenida" 
          component={Bienvenida} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
