import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TopNavigation from "./src/navigation/TopNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>      
      <TopNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
