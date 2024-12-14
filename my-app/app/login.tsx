import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import Button from "@/components/button";
import globalStyles from "@/components/global";
// import axios from 'axios';


interface LoginProps {
  navigation: any;
}

const login = ({ navigation }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // const response = await axios.post('(link unavailable)', {
      // username,
      // password,
      // });
      router.replace('/(screen)/home');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.container}>
        <StatusBar barStyle={"dark-content"} />

        {/* header */}
        <View style={styles.header}>
          <View style={styles.frameHeader}>
            <Text style={styles.textHeader}>SELAMAT DATANG</Text>
          </View>
          <View style={styles.frameHeader}>
            <Text style={styles.textHeader}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>

        {/* body */}
        <View style={styles.body}>
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
          <TouchableOpacity>
            <Text style={styles.textLupa}>lupa Password</Text>
          </TouchableOpacity>
        </View>

        {/* footer */}
        <View style={styles.footer}>
        <Button title="Login" onPress={handleLogin}/>
          <TouchableOpacity>
            <Text style={styles.textBuat}>Buat Akun !!!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90AFC5",
  },
  header: {
    height: 200,
    width: 300,
    marginTop: 50,
    marginHorizontal: "auto",
  },
  frameHeader: {
    height: 100,
    width: 300,
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  body: {
    height: 250,
    width: 300,
    marginHorizontal: "auto",
  },
  frameInput: {
    height: 80,
    width: 300,
    marginTop: 20,
    borderWidth: 0.4,
    borderRadius: 50,
  },
  input: {
    height: 80,
    width: 300,
    borderRadius: 50,
    textAlign: "center",
  },
  footer: {
    height: 60,
    width: 300,
    marginTop: 20,
    marginHorizontal: "auto",
  },
  textLupa: {
    textAlign: "right",
    marginTop: 10,
    color: "white",
  },
  textBuat: {
    textAlign: "center",
    marginTop: 10,
    color: "white",
  },
});
