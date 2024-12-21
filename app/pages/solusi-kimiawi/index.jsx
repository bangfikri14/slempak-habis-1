import { useLocalSearchParams } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function SolusiKimiawiPage() {
  const { name, chemicalSolution } = useLocalSearchParams();

  return (
    <ScrollView>
      <View
        style={{
          padding: 20,
          flexDirection: "column",
          justifyContent: "center",
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
          Berikut beberapa solusi kimia untuk pemberantasan {name} pada tanaman
          kubis:
        </Text>
        <View style={{ marginBottom: 20 }}>
          {chemicalSolution.map((item, index) => (
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
