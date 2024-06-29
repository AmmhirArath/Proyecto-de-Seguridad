import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNiños from "../screen/NiñosScreen/HomeNiños";
import { useState } from "react";
import Colores from "../constants/Colores";

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
        </Stack.Navigator>
  );
};
export default NiñosStack;