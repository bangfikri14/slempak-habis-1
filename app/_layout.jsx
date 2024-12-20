import { Stack } from "expo-router";
import "./styles/globals.css";
import hamaList from "./data/hama";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="pages/diagnosa/index"
        options={{
          title: "Pilih Gejala",
          headerStyle: { backgroundColor: "#33AD56" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="pages/hasil-diagnosa/index"
        options={{
          title: "Hasil Diagnosa",
          headerStyle: { backgroundColor: "#33AD56" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="pages/solusi-non-kimiawi/index"
        options={{
          title: "Solusi Non Kimiawi",
          headerStyle: { backgroundColor: "#33AD56" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="pages/solusi-kimiawi/index"
        options={{
          title: "Solusi Kimiawi",
          headerStyle: { backgroundColor: "#33AD56" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="pages/hama/index"
        options={{
          title: "Daftar Hama",
          headerStyle: { backgroundColor: "#33AD56" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="pages/detail-hama/index"
        options={({ route }) => {
          const hama = hamaList.find((item) => item.id === route.params?.id);
          return {
            title: hama ? `Hama ${hama.name}` : "Penjelasan Hama",
            headerStyle: { backgroundColor: "#33AD56" },
            headerTintColor: "white",
          };
        }}
      />
      <Stack.Screen
        name="pages/budidaya-kubis/index"
        options={{
          title: "Ulasan Budidaya Kubis",
          headerStyle: { backgroundColor: "#33AD56" },
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}
