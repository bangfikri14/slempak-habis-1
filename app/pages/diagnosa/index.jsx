import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import gejalaList from "../../data/gejala";
import determineKH from "../../utils/determineKH";

export default function ChecklistList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigation = useNavigation();

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={gejalaList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => toggleSelect(item.id)}
          >
            <Text style={styles.itemText}>{item.label}</Text>
            {selectedItems.includes(item.id) && (
              <Icon name="check" size={24} color="#33AD56" />
            )}
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const selectedLabels = gejalaList
            .filter((item) => selectedItems.includes(item.id))
            .map((item) => item.id);
            console.log(selectedLabels)
          const hamaCode = determineKH(selectedLabels);
          console.log(hamaCode)

          navigation.navigate("pages/hasil-diagnosa/index", {
            id: hamaCode,
          });
        }}
      >
        <Text style={styles.buttonText}>LANJUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#f8f8f8",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#33AD56",
    padding: 15,
    borderRadius: 0,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
