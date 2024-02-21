import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FotoAPIScreen from "../screens/FotoAPIScreen";
import PerfilScreen from "../screens/PerfilScreen";
import FileScreen from "../screens/FileScreen";


const Tab = createMaterialTopTabNavigator();

export default function TopNavigation() {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator style={{ paddingTop: top }}>
      <Tab.Screen name="Fotos API" component={FotoAPIScreen} />
      <Tab.Screen name="Mi Perfil" component={PerfilScreen} />
      <Tab.Screen name="documento" component={FileScreen} />
    </Tab.Navigator>
  );
}
