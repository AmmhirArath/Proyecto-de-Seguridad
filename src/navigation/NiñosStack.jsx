import * as React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import HomeNiños from "../screen/NiñosScreen/HomeNiños";
import { useState } from "react";
import Colores from "../constants/Colores";
import InfoNiños from "../screen/NiñosScreen/InfoNiños";
import TriviaNiños from "../screen/NiñosScreen/TriviaNiños";

const Stack = createStackNavigator();

const NiñosStack = () => {
    const [initialRoute, setInitialRoute] = useState("HomeNiños");
    return (
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
                name="HomeNiños"
                component={HomeNiños}
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    title: "",
                    headerTintColor: Colores.negro,
                    ...TransitionPresets.ModalFadeTransition
                  }}
            />
            <Stack.Screen
              name="InfoNiños"
              component={InfoNiños}
              options={{
                headerShown: true,
                headerTransparent: true,
                title: "",
                headerTintColor: Colores.blanco,
                ...TransitionPresets.ModalFadeTransition
              }}
            />
            <Stack.Screen
              name="TriviaNiños"
              component={TriviaNiños}
              options={{
                headerShown: true,
                headerTransparent: true,
                title: "",
                headerTintColor: Colores.negro,
                ...TransitionPresets.ModalFadeTransition
              }}
            />
        </Stack.Navigator>
  );
};
export default NiñosStack;