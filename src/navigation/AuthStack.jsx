import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from "@react-navigation/stack";
import SeleccionarEdad from "../screen/SeleccionarEdad";
import TemasAdultos from "../screen/TemaAdul";
import AprenAdul from "../screen/AprenAdul";
import Bienvenido from "../screen/HomeAdult";
import Bienvenida from "../screen/Bienvenida";
import WelcomeScreen from "../screen/WelcomeVideo";
import ProQuiz from "../screen/ProQuiz";
import Login from "../screen/Login";
import Register from "../screen/Register";
import Colores from "../constants/Colores";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import appFirebase from "../../credentials";
import Chatbot from '../screen/Chatbox';
import NiñosStack from "./NiñosStack";
import BrechasInfo from "../screen/InfoBrechas";
import EventosHistoricos from "../screen/BrechasCiberseguridad";

const Stack = createStackNavigator();
const auth = getAuth(appFirebase);

const AuthStack = () => {
  const [initialRoute, setInitialRoute] = useState("WelcomeScreen");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setUser(userFirebase);
        setInitialRoute("Inicio");
      } else {
        setUser(null);
        setInitialRoute("Bienvenida");
      }
    });

    return () => unsubscribe();
  }, []);

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Chatbot" 
          component={Chatbot} 
          options={{ headerShown: true, headerTransparent: true, title: ''}}
        />
        <Stack.Screen
          name="Bienvenida"
          component={Bienvenida}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {
                  duration: 600,
                },
              },
              close: {
                animation: 'timing',
                config: {
                  duration: 500,
                },
              },
            },
          }}
        />
        <Stack.Screen
          name="NiñosStack"
          component={NiñosStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "",
            headerTintColor: Colores.blanco,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "",
            headerTintColor: Colores.blanco,
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen
          name="Inicio"
          component={Bienvenido}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "",
            headerTintColor: Colores.blanco,
          }}
        />
        <Stack.Screen
          name="SeleccionarEdad"
          component={SeleccionarEdad}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "",
            headerTintColor: Colores.blanco,
          }}
        />
        <Stack.Screen
          name="AprenAdul"
          component={AprenAdul}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "",
            headerTintColor: Colores.blanco,
          }}
        />
        <Stack.Screen
          name="TemasAdultos"
          component={TemasAdultos}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "",
            headerTintColor: Colores.blanco,
          }}
        />
        <Stack.Screen
          name="Juegos"
          component={ProQuiz}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "",
            headerTintColor: Colores.blanco,
          }}
        />
        <Stack.Screen 
          name="HistoriaHacks"
          component={EventosHistoricos} 
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitleAlign: 'center',
            title: "Eventos Históricos",
            headerTintColor: Colores.azuloscuro,
          }}
        />
        <Stack.Screen 
          name="BrechasHackeos"
          component={BrechasInfo} 
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "",
            headerTintColor: Colores.blanco,
            ...TransitionPresets.ModalFadeTransition
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
