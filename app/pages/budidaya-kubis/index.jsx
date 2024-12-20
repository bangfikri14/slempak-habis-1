import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import growthStages from "../../data/budidaya-kubis.json";

export default function BudidayaKubisPage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/budidaya-kubis.jpg")}
        style={{
          width: 300,
          height: 200,
          margin: "auto",
          marginBottom: 20,
        }}
      />
      <FlatList
        data={growthStages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemNumber}>{item.id}.</Text>
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  itemNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#33AD56",
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemDescription: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
    textAlign: "justify",
  },
});
