import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const LoginPages = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ padding: 10, width: 200, marginHorizontal: 'auto', marginTop: 20 }}>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>SIGN IN</Text>
      </View>
      <View style={{padding:10, width:'90%', marginHorizontal:'auto', marginTop: 200, gap:20,}}>
        <View style={{ padding: 2, width: '100%', marginHorizontal: 'auto', backgroundColor: '#f0f0f0', borderRadius: 10, elevation: 5 }}>
          <TextInput placeholder='Username'/>
        </View>
        <View style={{ padding: 2, width: '100%',marginHorizontal: 'auto', backgroundColor: '#f0f0f0', borderRadius: 10, elevation: 5 }}>
          <TextInput placeholder='Password'/>
        </View>
        <TouchableOpacity style={{width:'90%', marginHorizontal:'auto'}}>
          <Text style={{fontSize:12, color:'green', textAlign:'right'}}>Lupa Password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
      onPress={() => {
        router.push('/(Tabs)/home')
      }}
      style={{padding:10, width:'80%', borderWidth:0.4, borderRadius:10, marginHorizontal:'auto', backgroundColor:'#f0f0f0', marginTop:20}}>
        <Text style={{ fontSize: 16, textAlign: 'center',}}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 10}}>Buat akun baru</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default LoginPages