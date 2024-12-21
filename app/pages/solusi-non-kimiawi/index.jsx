import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";

export default function SolusiNonKimiawiPage() {
  const {
    name,
    nonChemicalSolutionNature,
    nonChemicalSolutionMixture,
    nonChemicalProduce,
    nonChemicalTips,
  } = useLocalSearchParams();

  console.log(nonChemicalSolutionMixture);

  return (
    <ScrollView>
      <View
        style={{
          padding: 20,
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: 60,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            lineHeight: 34,
            marginBottom: 10,
          }}
        >
          Komposisi pestisida alami untuk {name} yang menyerang tanaman kubis:
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          Bahan Alami:
        </Text>
        <View style={{ marginBottom: 20 }}>
          {nonChemicalSolutionNature.map((item, index) => (
            <View style={styles.listItem} key={item.id?.toString()}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          Bahan Campuran:
        </Text>
        <View style={{ marginBottom: 20 }}>
          {nonChemicalSolutionMixture.length > 1 ? (
            nonChemicalSolutionMixture.map((item, index) => (
              <View style={styles.listItem} key={item.id?.toString()}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.text}>{item}</Text>
              </View>
            ))
          ) : (
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>~</Text>
            </View>
          )}
        </View>

        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          Cara Pembuatan:
        </Text>
        <View style={{ marginBottom: 20 }}>
          {nonChemicalProduce.map((item, index) => (
            <View style={styles.listItem} key={item.id?.toString()}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          Tips:
        </Text>
        <View style={{ marginBottom: 20 }}>
          {nonChemicalTips.map((item, index) => (
            <View style={styles.listItem} key={item.id?.toString()}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  bullet: {
    fontSize: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    flexWrap: "wrap",
    flexShrink: 1,
    lineHeight: 34,
    textAlign: "justify",
  },
});
