import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

const AbsensiPage = () => {
  const [jamMasuk, setJamMasuk] = useState("");
  const [jamKeluar, setJamKeluar] = useState("");

  const handleAbsen = async () => {
    //  try {
    //  const response = await axios.post('(link unavailable)', {
    //  jamMasuk,
    //  jamKeluar,
    //  });
    //  console.log(response);
    //  } catch (error) {
    //  console.error(error);
    //  }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.header}>
        <View style={styles.columHeader}>
          <TouchableOpacity 
          onPress={() => {
            router.back()
          }}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={34}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.frameAbsensi}>
            <Text style={styles.textAbsen}>ABSENSI</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.colum}>
          <View style={styles.frameInput}>
            <TextInput
              placeholder="Jam Masuk"
              value={jamMasuk}
              onChangeText={(text) => setJamMasuk(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.frameInput}>
            <TextInput
              placeholder="Jam Keluar"
              value={jamKeluar}
              onChangeText={(text) => setJamKeluar(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.buttom}>
            <Button title="Absen" onPress={handleAbsen} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AbsensiPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90AFC5",
  },
  header: {
    flex: 0.5,
  },
  columHeader: {
    height: 50,
    width: "90%",
    marginTop: 20,
    marginHorizontal: "auto",
    flexDirection: "row",
  },
  icon: {
    height: 35,
    width: 40,
    marginVertical: "auto",
  },
  frameAbsensi: {
    height: 50,
    width: 280,
    justifyContent: "center",
  },
  textAbsen: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  body: {
    flex: 0.5,
  },
  colum: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  frameInput: {
    height: 50,
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 10,
  },
  input: {
    height: 50,
    width: "80%",
    marginHorizontal: "auto",
    textAlign: "center",
  },
  buttom: {
    width: "80%",
    marginTop: 50,
    marginHorizontal: "auto",
  },
});
