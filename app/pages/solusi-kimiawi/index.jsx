import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function SolusiKimiawiPage() {
  const {
    name,
    chemicalSolution,
    chemicalSolutionInsecticide,
    chemicalSolutionInsecticideSistemic,
    chemicalProduce,
    chemicalWarning,
  } = useLocalSearchParams();
  console.log(
    chemicalSolutionInsecticide,
    chemicalSolutionInsecticideSistemic,
    chemicalProduce,
    chemicalWarning
  );

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
        {chemicalSolution.length > 1 ? (
          <View style={{ marginBottom: 20 }}>
            {chemicalSolution &&
              chemicalSolution.map((item, index) => (
                <View style={styles.listItem} key={item.id?.toString()}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.text}>{item}</Text>
                </View>
              ))}
          </View>
        ) : null}

        {chemicalSolutionInsecticide.length > 1 ? (
          <>
            <Text
              style={{
                fontSize: 23,
                fontWeight: "bold",
                lineHeight: 34,
                marginBottom: 10,
              }}
            >
              Insektisida:
            </Text>
            <View style={{ marginBottom: 20 }}>
              {chemicalSolutionInsecticide &&
                chemicalSolutionInsecticide.map((item, index) => (
                  <View style={styles.listItem} key={item.id?.toString()}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.text}>{item}</Text>
                  </View>
                ))}
            </View>
          </>
        ) : null}

        {chemicalSolutionInsecticideSistemic.length > 1 ? (
          <>
            <Text
              style={{
                fontSize: 23,
                fontWeight: "bold",
                lineHeight: 34,
                marginBottom: 10,
              }}
            >
              Insektisida Sistemik:
            </Text>
            <View style={{ marginBottom: 20 }}>
              {chemicalSolutionInsecticideSistemic &&
                chemicalSolutionInsecticideSistemic.map((item, index) => (
                  <View style={styles.listItem} key={item.id?.toString()}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.text}>{item}</Text>
                  </View>
                ))}
            </View>
          </>
        ) : null}

        {chemicalProduce.length > 1 ? (
          <>
            <Text
              style={{
                fontSize: 23,
                fontWeight: "bold",
                lineHeight: 34,
                marginBottom: 10,
              }}
            >
              Cara Pembuatan:
            </Text>
            <View style={{ marginBottom: 20 }}>
              {chemicalProduce &&
                chemicalProduce.map((item, index) => (
                  <View style={styles.listItem} key={item.id?.toString()}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.text}>{item}</Text>
                  </View>
                ))}
            </View>
          </>
        ) : null}

        {chemicalWarning.length > 1 ? (
          <>
            <Text
              style={{
                fontSize: 23,
                fontWeight: "bold",
                lineHeight: 34,
                marginBottom: 10,
              }}
            >
              Peringatan:
            </Text>
            <View style={{ marginBottom: 20 }}>
              {chemicalWarning &&
                chemicalWarning.map((item, index) => (
                  <View style={styles.listItem} key={item.id?.toString()}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.text}>{item}</Text>
                  </View>
                ))}
            </View>
          </>
        ) : null}
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
