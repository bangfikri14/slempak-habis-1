import { useLocalSearchParams } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function SolusiKimiawiPage() {
  const { name, chemicalSolution } = useLocalSearchParams();

  const alerts = [
    "Baca petunjuk penggunaan Insektisida.",
    "Gunakan peralatan pelindung diri.",
    "Hindari penyemprotan saat tanaman saat tanaman berbunga atau berbuah.",
    "Gunakan dosis yang tepat.",
    "Konsultasikan dengan ahli pertanian atau petugas penyuluh pertanian."
  ]

  return (
    <ScrollView>
      <View
        style={{
          padding: 20,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 23, fontWeight: "bold", marginBottom: 10 }}>
          Untuk mengendalikan hama {name}, yaitu:
        </Text>
        <FlatList
          data={chemicalSolution}
          keyExtractor={(item) => item.id?.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem} key={item.id?.toString()}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
          style={{marginBottom: 50}}
        />
        <Text style={{ fontSize: 23, fontWeight: "bold", marginBottom: 10 }}>
          MANGAN RAWON NANG TEMANGGUNG:
        </Text>
        {alerts.map((alert) => (
          <>
          <View style={styles.listItem} key={alert.id?.toString()}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>{alert}</Text>
            </View>
          </>
        ))}
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