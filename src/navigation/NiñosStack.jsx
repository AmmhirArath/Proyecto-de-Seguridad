import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNiños from "../screen/NiñosScreen/HomeNiños";
import { useState } from "react";
import Colores from "../constants/Colores";
import InfoNiños from "../screen/NiñosScreen/InfoNiños"
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
              }}
            />
        </Stack.Navigator>
  );
};
export default NiñosStack;