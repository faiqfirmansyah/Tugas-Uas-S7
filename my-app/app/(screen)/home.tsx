import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import Button from "@/components/button";

const HomePages = () => {
  const navigation = useNavigation();
  const [notifikasi, setNotifikasi] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      {/* header */}
      <View style={styles.header}>
        <View style={styles.frameHeader}>
        <Text style={styles.textSelamat}>selamat Datang</Text>
        </View>
        <View style={styles.frameHeader}>
        <Text style={styles.textNama}>Nama Karyawan</Text>
        </View>
      </View>

      {/* body */}
      <View style={styles.colum}>
        <View style={styles.body}>
          <Text style={styles.textFitur}>fitur saat ini</Text>
          <Button
            title="Absen"
            onPress={() => navigation.navigate("absensi")}
          />
          <Button
            title="Riwayat"
            onPress={() => navigation.navigate("riwayat")}
          />
          <Button
            title="Profile"
            onPress={() => navigation.navigate("profil")}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.frameNotif}>
          <Text style={styles.textNotif}>Notifikasi</Text>
          <Switch
            value={notifikasi}
            onValueChange={(value) => setNotifikasi(value)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90AFC5",
  },
  header:{
    height:100,
    width:'100%',
    marginTop:50
  },
  frameHeader:{
    height:30,
    width:'90%',
    justifyContent:'center',
    marginHorizontal:'auto'
  },
  textSelamat:{
    fontSize:16,
    color:'white'
  },
  textNama:{
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  },
  colum: {
    height: 400,
    width: "100%",
    marginVertical: "auto",
  },
  body: {
    height: 400,
    width: 350,
    marginTop: 20,
    marginHorizontal: "auto",
  },
  textFitur: {
    fontSize: 20,
    color:'white'
  },
  buttom: {
    height: 80,
    width: 350,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 100,
    justifyContent: "center",
  },
  textButtom: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  footer:{
    height: 100,
    width: "90%",
    marginHorizontal: "auto",
  },
  frameNotif: {
    height: 100,
    width: "90%",
    marginHorizontal: "auto",
  },
  textNotif:{
    fontSize:16,
    color:'white'
  }
});
