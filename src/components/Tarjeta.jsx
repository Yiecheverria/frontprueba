import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Tarjeta({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={{ uri: item.urls.thumb }} style={styles.img} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>{item.alt_description}</Text>
      </View>
    </View>
  );
}

export default Tarjeta;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 150,
    borderWidth: 0.4,
    marginHorizontal: 8,
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: '#F2ECEC'
  },
  containerImg: {
    flexDirection: "row",
  },
  img: {
    width: 130,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  containerText: {
    flex: 1,
    margin: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "300",
  },
});
