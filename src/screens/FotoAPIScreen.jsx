import React, { useEffect, useState } from "react";
import { View } from "react-native";
import api from "../api/ApiFotos";
import Lista from "../components/Lista";

export default function FotoAPIScreen() {
  return (
    <View>
      <Lista />
    </View>
  );
}
