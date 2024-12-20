import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";

export default function SolusiNonKimiawiPage() {
  const { name, nonChemicalSolutionNature, nonChemicalSolutionMixture, nonChemicalProduce, nonChemicalTips } = useLocalSearchParams();

  return (
    <ScrollView>
      <View
        style={{
          padding: 20,
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: 60
        }}
      >
        <Text style={{ fontSize: 23, fontWeight: "bold", marginBottom: 10 }}>
          Untuk mengendalikan hama {name}, yaitu:
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Bahan Alami:
        </Text>
        <FlatList
          data={nonChemicalSolutionNature}
          keyExtractor={(item) => item.id?.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem} key={item.id?.toString()}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
          style={{marginBottom: 20}}
        />

        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Bahan Campuran:
        </Text>
        <FlatList
          data={nonChemicalSolutionMixture}
          keyExtractor={(item) => item.id?.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem} key={item.id?.toString()}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
          style={{marginBottom: 20}}
        />

        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Tips:
        </Text>
        <FlatList
          data={nonChemicalTips}
          keyExtractor={(item) => item.id?.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem} key={item.id?.toString()}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
          style={{marginBottom: 20}}
        />
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
    textAlign:"justify"
  },
});
