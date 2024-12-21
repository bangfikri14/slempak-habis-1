import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useNavigation } from "expo-router";

export default function DetailHamaPage() {
  const {
    id,
    name,
    scientifictName,
    image,
    description,
    nonChemicalSolutionNature,
    nonChemicalSolutionMixture,
    nonChemicalProduce,
    nonChemicalTips,
    chemicalSolution,
  } = useLocalSearchParams();
  const navigation = useNavigation();

  const imageMap = {
    "ulat-daun-kubis.jpg": require("../../../assets/images/hama/ulat-daun-kubis.jpg"),
    "ulat-tanah.jpg": require("../../../assets/images/hama/ulat-tanah.jpg"),
    "ulat-krop.jpg": require("../../../assets/images/hama/ulat-krop.jpg"),
    "akar-gada.jpg": require("../../../assets/images/hama/akar-gada.jpg"),
    "kutu-daun.jpg": require("../../../assets/images/hama/kutu-daun.jpg"),
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <Text style={{ fontSize: 23, fontWeight: "bold", marginBottom: 10 }}>
          {name ? name : "Kubis enak"}
        </Text>
        <Image
          source={imageMap[image]}
          style={{
            width: 310,
            height: 180,
            marginBottom: 20,
            margin: "auto",
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Nama Hama (Ilmiah): {scientifictName}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "justify",
            lineHeight: 28,
          }}
        >
          Deskripsi Umum: {description}
        </Text>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("pages/solusi-non-kimiawi/index", {
              id: id,
              name: name,
              nonChemicalSolutionNature: nonChemicalSolutionNature,
              nonChemicalSolutionMixture: nonChemicalSolutionMixture,
              chemicalSolution: chemicalSolution,
              nonChemicalProduce: nonChemicalProduce,
              nonChemicalTips: nonChemicalTips,
            });
          }}
        >
          <Text style={styles.buttonText}>Solusi Non Kimiawi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("pages/solusi-kimiawi/index", {
              id: id,
              name: name,
              chemicalSolution: chemicalSolution,
            });
          }}
        >
          <Text style={styles.buttonText}>Solusi Kimiawi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "#33AD56",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
