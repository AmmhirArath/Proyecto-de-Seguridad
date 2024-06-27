import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SeleccionarEdad from '../screen/SeleccionarEdad'
import Bienvenido from '../screen/HomeAdult';
import AprenderAdul from '../screen/AprenAdul';
import Bienvenida from '../screen/Bienvenida';
import ProQuiz from '../screen/ProQuiz';
import Login from '../screen/Login';
import Register from '../screen/Register';
import Colores from '../constants/Colores';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from '../../credentials';

const Stack = createStackNavigator();
const auth = getAuth(appFirebase);

const AuthStack = () => {
    
    const [initialRoute, setInitialRoute] = useState('Bienvenida');
    const [user, setUser] = useState(null)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
        if (userFirebase) {
          setUser(userFirebase);
          setInitialRoute('Inicio');
        } else {
          setUser(null);
          setInitialRoute('Bienvenida');
        }
      });
  
      // Limpieza del listener al desmontar el componente
      return () => unsubscribe();
    }, []);

return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen 
          name="Bienvenida" 
          component={Bienvenida} 
          options={{ headerShown: true, headerTransparent: true, title: ''}}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: true, headerTransparent: true, title: 'Iniciar Sesion'}}
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: true, headerTransparent: true, title: '', headerTintColor: Colores.blanco}}
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