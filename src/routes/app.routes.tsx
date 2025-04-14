import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import New from "../pages/New";

export type StackParamsList = {
    Home: undefined;
    New: undefined;
}

const Stack = createNativeStackNavigator<StackParamsList>();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="New" component={New} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default AppRoutes;