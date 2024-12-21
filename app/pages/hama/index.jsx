import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import hamaList from "../../data/hama";

export default function HamaPage() {
  const router = useRouter();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = hamaList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const imageMap = {
    "ulat-daun-kubis.jpg": require("../../../assets/images/hama/ulat-daun-kubis.jpg"),
    "ulat-tanah.jpg": require("../../../assets/images/hama/ulat-tanah.jpg"),
    "ulat-krop.jpg": require("../../../assets/images/hama/ulat-krop.jpg"),
    "akar-gada.jpg": require("../../../assets/images/hama/akar-gada.jpg"),
    "kutu-daun.jpg": require("../../../assets/images/hama/kutu-daun.jpg"),
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari hama..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
      </View>

      {/* List */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              navigation.navigate("pages/detail-hama/index", {
                id: item.id,
                name: item.name,
                scientifictName: item.scientifictName,
                image: `${item.image}`,
                description: item.description,
                nonChemicalSolutionNature: item.nonChemicalSolutionNature,
                nonChemicalSolutionMixture: item.nonChemicalSolutionMixture,
                nonChemicalProduce: item.nonChemicalProduce,
                nonChemicalTips: item.nonChemicalTips,
                chemicalSolution: item?.chemicalSolution,
                chemicalSolutionInsecticide: item?.chemicalSolutionInsecticide,
                chemicalSolutionInsecticideSistemic:
                  item?.chemicalSolutionInsecticideSistemic,
                chemicalProduce: item?.chemicalProduce,
                chemicalWarning: item?.chemicalWarning,
              });
            }}
          >
            <Image source={imageMap[item.image]} style={styles.listImage} />
            <Text style={styles.listText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 0,
    paddingHorizontal: 10,
    marginBottom: 20,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  listItem: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 0,
    elevation: 2,
  },
  listImage: {
    width: 300,
    height: 200,
    borderRadius: 0,
  },
  listText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
