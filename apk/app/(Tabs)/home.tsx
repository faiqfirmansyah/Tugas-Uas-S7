import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const HomePages = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ padding: 10, flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16 }}>Home Page</Text>
      </View>
      <View style={{ padding: 10, width: '90%', borderWidth: 1, marginHorizontal: 'auto', borderRadius: 10, marginTop: 100, gap:20 }}>
        <TouchableOpacity
          onPress={() => {
            router.push('/(Screen)/karyawans')
          }}
          style={{ height: 100, width: '100%', justifyContent: 'center', borderWidth: 1, borderRadius: 10, }}>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Karyawan List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push('/(Screen)/absensi')
          }}
          style={{ height: 100, width: '100%', justifyContent: 'center', borderWidth: 1, borderRadius: 10, }}>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Karyawan Absensi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push('/(Screen)/baru')
          }}
          style={{ height: 100, width: '100%', justifyContent: 'center', borderWidth: 1, borderRadius: 10, }}>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Tambah Karyawan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomePages

const styles = StyleSheet.create({})