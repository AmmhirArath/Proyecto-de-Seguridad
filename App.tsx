import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './src/screen/Inicio';
import SeleccionarEdad from './src/screen/SeleccionarEdad'
import Colores from './src/constants/Colores';
import Bienvenido from './src/screen/HomeAdult';
import AprenderAdul from './src/screen/AprenAdul';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Bienvenida from './src/screen/Bienvenida';
import ProQuiz from './src/screen/ProQuiz';

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
          component={Bienvenido} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SeleccionarEdad" 
          component={SeleccionarEdad} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="AprenderAdult" 
          component={AprenderAdul} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Juegos" 
          component={ProQuiz} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
