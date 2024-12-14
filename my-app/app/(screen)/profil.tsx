import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

interface ProfileProps {
  navigation: any;
}

const profilePage = ({ navigation }: ProfileProps) => {
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        <View style={styles.frameProfile}>
          <Text style={styles.textProfile}>PROFILE</Text>
        </View>
      </View>
      <View style={styles.colum}>
        <View style={styles.frameInput}>
        <TextInput
        placeholder="Nama"
        value={nama}
        onChangeText={(text) => setNama(text)}
        style={styles.input}
        />
        </View>
        <View style={styles.frameInput}>
        <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
        />
        </View>
        <View style={styles.frameInput}>
        <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profilePage;

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
  frameProfile: {
    height: 50,
    width: 250,
    justifyContent: "center",
  },
  textProfile: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  colum: {
    height: 350,
    width: "90%",
    marginHorizontal: "auto",
    marginVertical:'auto',
    borderWidth:0.5,
    borderRadius:10
  },
  frameInput:{
    height:80,
    width:'90%',
    marginHorizontal:'auto',
    marginTop:20,
    borderWidth:0.6,
    borderRadius:20
  },
  input:{
    height:80,
    width:'80%',
    marginHorizontal:'auto'
  }
});