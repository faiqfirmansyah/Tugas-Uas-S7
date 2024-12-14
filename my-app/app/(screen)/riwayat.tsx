import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

interface RiwayatProps {
  navigation: any;
}

const riwayatPage = ({ navigation }: RiwayatProps) => {
  const [riwayat, setRiwayat] = useState([
    { id: 1, tanggal: "2022-01-01", jamMasuk: "08:00", jamKeluar: "17:00" },
    { id: 2, tanggal: "2022-01-02", jamMasuk: "08:00", jamKeluar: "17:00" },
    { id: 3, tanggal: "2022-01-02", jamMasuk: "08:00", jamKeluar: "17:00" },
    { id: 4, tanggal: "2022-01-02", jamMasuk: "08:00", jamKeluar: "17:00" },
    { id: 5, tanggal: "2022-01-02", jamMasuk: "08:00", jamKeluar: "17:00" },
    { id: 6, tanggal: "2022-01-02", jamMasuk: "08:00", jamKeluar: "17:00" },
    { id: 7, tanggal: "2022-01-02", jamMasuk: "08:00", jamKeluar: "17:00" },
    { id: 8, tanggal: "2022-01-02", jamMasuk: "08:00", jamKeluar: "17:00" },
    { id: 9, tanggal: "2022-01-02", jamMasuk: "08:00", jamKeluar: "17:00" },
    { id: 19, tanggal: "2022-01-02", jamMasuk: "08:00", jamKeluar: "17:00" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.columHeader}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={34}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.frameRiwayat}>
          <Text style={styles.textRiwayat}>RIWAYAT ABSENSI</Text>
        </View>
      </View>
      <View style={styles.colum}>
        <FlatList
          data={riwayat}
          renderItem={({ item }) => (
            <ScrollView style={styles.frameColum}>
              <Text>{item.tanggal}</Text>
              <Text>Jam Masuk: {item.jamMasuk}</Text>
              <Text>Jam Keluar: {item.jamKeluar}</Text>
            </ScrollView>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default riwayatPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90AFC5",
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
  frameRiwayat: {
    height: 50,
    width: 250,
    justifyContent: "center",
  },
  textRiwayat: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  colum: {
    height: 550,
    width: "90%",
    marginHorizontal: "auto",
    marginTop:50,
    borderWidth:0.5,
    borderRadius:10
  },
  frameColum:{
    height:80,
    width:'90%',
    marginHorizontal:'auto',
  }
});

