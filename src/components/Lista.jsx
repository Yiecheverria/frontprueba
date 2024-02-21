import React, { useEffect, useState } from "react";
import api from "../api/ApiFotos";
import { FlatList, Text, View } from "react-native";
import Tarjeta from "./Tarjeta";

function Lista() {
  const [data, setData] = useState([]);

  // cargar una vez los datos
  useEffect(() => {
    api.get().then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          margin: 20,
          fontWeight: "500",
        }}
      >
        Listado de Fotos
      </Text>
      {/* mostrar los datos de una como yo quiero */}
      <FlatList
        //    que voy a redenriszar
        data={data}
        // itero los datos para mostrar como yo quiero"tarjeta""
        renderItem={({ item }) => <Tarjeta item={item} />}
        // obtener los id de cada item
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Lista;
