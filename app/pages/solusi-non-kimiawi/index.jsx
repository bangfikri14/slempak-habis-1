import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function SolusiNonKimiawiPage() {
  const { name, nonChemicalSolution } = useLocalSearchParams();

  return (
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
      <FlatList
        data={nonChemicalSolution}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem} key={item.id?.toString()}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </View>
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
