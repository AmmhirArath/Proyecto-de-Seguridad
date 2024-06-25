import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SeleccionarEdad from '../screen/SeleccionarEdad'
import Bienvenido from '../screen/HomeAdult';
import AprenderAdul from '../screen/AprenAdul';
import Bienvenida from '../screen/Bienvenida';
import ProQuiz from '../screen/ProQuiz';
import Colores from '../constants/Colores';

const Stack = createStackNavigator();

const AuthStack = () => {
    
    const [initialRoute] = React.useState('Bienvenida');

return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen 
          name="Bienvenida" 
          component={Bienvenida} 
          options={{ headerShown: true, headerTransparent: true, title: ''}}
        />
        <Stack.Screen 
          name="Inicio" 
          component={Bienvenido} 
          options={{ headerShown: true, headerTransparent: true, title: '', headerTintColor: Colores.blanco}}
        />
        <Stack.Screen 
          name="SeleccionarEdad" 
          component={SeleccionarEdad} 
          options={{ headerShown: true, headerTransparent: true, title: '', headerTintColor: Colores.blanco}}
        />
        <Stack.Screen 
          name="AprenderAdult" 
          component={AprenderAdul} 
          options={{ headerShown: true, headerTransparent: true, title: '', headerTintColor: Colores.blanco}}
        />
        <Stack.Screen 
          name="Juegos" 
          component={ProQuiz} 
          options={{ headerShown: true, headerTransparent: true, title: '', headerTintColor: Colores.blanco}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthStack;