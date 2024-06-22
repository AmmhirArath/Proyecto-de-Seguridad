import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bienvenida from './src/screen/Bienvenida';
import Inicio from './src/screen/Inicio';
import SeleccionarEdad from './src/screen/SeleccionarEdad'
import Colores from './src/constants/Colores';

const Stack = createStackNavigator();

function App() {
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
        <Stack.Screen 
          name="SeleccionarEdad" 
          component={SeleccionarEdad} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
