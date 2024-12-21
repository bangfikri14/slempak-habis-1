import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import hamaList from "../../data/hama";

export default function HasilDiagnosaPage() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const hamaData = hamaList.find((hama) => hama.id == id);

  const imageMap = {
    "ulat-daun-kubis.jpg": require("../../../assets/images/hama/ulat-daun-kubis.jpg"),
    "ulat-tanah.jpg": require("../../../assets/images/hama/ulat-tanah.jpg"),
    "ulat-krop.jpg": require("../../../assets/images/hama/ulat-krop.jpg"),
    "akar-gada.jpg": require("../../../assets/images/hama/akar-gada.jpg"),
    "kutu-daun.jpg": require("../../../assets/images/hama/kutu-daun.jpg"),
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {hamaData ? (
        <>
          <ScrollView
            contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
          >
            <Text
              style={{ fontSize: 23, fontWeight: "bold", marginBottom: 10 }}
            >
              {hamaData?.name ? hamaData?.name : "Kubis enak"}
            </Text>
            <Image
              source={imageMap[hamaData?.image]}
              style={{
                width: 310,
                height: 180,
                marginBottom: 20,
                margin: "auto",
              }}
            />
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
            >
              Nama Hama (Ilmiah): {hamaData?.scientifictName}
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "justify",
                lineHeight: 28,
              }}
            >
              Deskripsi Umum: {hamaData?.description}
            </Text>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("pages/solusi-non-kimiawi/index", {
                  id: hamaData?.id,
                  name: hamaData?.name,
                  nonChemicalSolutionNature:
                    hamaData?.nonChemicalSolutionNature,
                  nonChemicalSolutionMixture:
                    hamaData?.nonChemicalSolutionMixture,
                  nonChemicalProduce: hamaData?.nonChemicalProduce,
                  nonChemicalTips: hamaData?.nonChemicalTips,
                });
              }}
            >
              <Text style={styles.buttonText}>Solusi Non Kimiawi</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("pages/solusi-kimiawi/index", {
                  id: hamaData?.id,
                  name: hamaData?.name,
                  chemicalSolution: hamaData?.chemicalSolution,
                  chemicalSolutionInsecticide:
                    hamaData?.nonChemicalSolutionInsecticide,
                  chemicalSolutionInsecticideSistemic:
                    hamaData?.chemicalSolutionInsecticideSistemic,
                  chemicalProduce: hamaData?.chemicalProduce,
                  chemicalWarning: hamaData?.chemicalWarning,
                });
              }}
            >
              <Text style={styles.buttonText}>Solusi Kimiawi</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={{ fontSize: 20 }}>Hama tidak terdeteksi!</Text>
      )}
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
