import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Button, Dimensions, Pressable } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();

  const [loaded] = useFonts({
    "RobotoMono-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "RobotoSerif-Regular": require("../assets/fonts/RobotoSerif-Regular.ttf"),
    "RobotoSerif-SemiBold": require("../assets/fonts/RobotoSerif-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontFamily: "RobotoSerif-Regular",
            // fontWeight: "bold",
            marginBottom: 3,
          }}
        >
          Sugeng rawuh wonten Aplikasi
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 28,
          }}
        >
          <Text
            style={{
              marginRight: -55,
              color: "white",
              fontFamily: "RobotoSerif-SemiBold",
              textShadowColor: "rgba(0,0,0,0.6)",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 5,
              zIndex: 9,
            }}
          >
            SISPAK
          </Text>
          <Image
            source={require("../assets/images/logo.png")}
            style={{
              width: 120,
              height: 120,
              marginBottom: -12.8,
              aspectRatio: "1",
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              marginLeft: -48,
              color: "white",
              fontFamily: "RobotoSerif-SemiBold",
              textShadowColor: "rgba(0,0,0,0.6)",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 5,
            }}
          >
            DiHaBis
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontFamily: "RobotoSerif-Regular",
            fontWeight: "500",
            marginBottom: 3.2,
          }}
        >
          Badhe tanglet nopo dinten niki?
        </Text>
      </View>
      <View style={styles.bodyWrapper}>
        <Pressable
          onPress={() => router.push("/pages/diagnosa")}
          style={styles.menu}
        >
          <Image
            source={require("../assets/images/menu/diagnosa.png")}
            style={{
              height: 100,
              width: 100,
            }}
          />
          <Text style={styles.menuText}>Diagnosa</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/pages/hama")}
          style={styles.menu}
        >
          <Image
            source={require("../assets/images/menu/hama.png")}
            style={{
              width: 120,
              height: 120,
              marginBottom: -12.8,
              aspectRatio: "1",
            }}
            resizeMode="contain"
          />
          <Text style={styles.menuText}>Hama</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/pages/budidaya-kubis")}
          style={styles.menu}
        >
          <Image
            source={require("../assets/images/menu/budidaya-kubis.png")}
            style={{
              height: 100,
              width: 100,
            }}
          />
          <Text style={styles.menuText}>Budidaya Kubis</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // minHeight: height, // Sesuaikan tinggi penuh layar
    // minWidth: width, // Sesuaikan lebar penuh layar
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  },
  headerWrapper: {
    minHeight: height * 0.25, // 25% dari tinggi layar
    minWidth: width,
    backgroundColor: "#33AD56",
    padding: 16,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontFamily: "RobotoSerif-Regular",
    fontWeight: "bold",
    marginBottom: 8,
  },
  headerSubtitle: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  headerText: {
    marginHorizontal: -16,
    color: "white",
    fontWeight: "900",
    fontFamily: "RobotoSerif-Regular",
    textShadowColor: "rgba(0,0,0,.6)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    zIndex: 9,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: -8,
  },
  subHeaderTitle: {
    color: "white",
    fontSize: 24,
    fontFamily: "RobotoSerif-Regular",
    fontWeight: "500",
    marginBottom: 8,
  },
  bodyWrapper: {
    minWidth: width * 0.9,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 32,
    paddingTop: 32,
  },
  menu: {
    minWidth: 160,
    minHeight: 160,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  menuImage: {
    width: 100,
    height: 100,
  },
  menuText: {
    fontFamily: "RobotoMono-Regular",
    fontSize: 20,
  },
});
