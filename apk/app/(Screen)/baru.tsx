import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const TambahKaryawan = () => {
  const [nip, setNip] = useState('');
  const [nama, setNama] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [departemenId, setDepartemenId] = useState('');

  const handleTambahKaryawan = () => {
    const apiUrl = 'http://192.168.107.88:8000/api/karyawans';
    const data = {
      nip: nip,
      nama: nama,
      jabatan: jabatan,
      id_departemens: departemenId,
    };

    if (!data.nip || !data.nama || !data.jabatan || !data.id_departemens) {
      Alert.alert('Error', 'Semua field harus diisi.');
      return;
    }

    axios.post(apiUrl, data)
      .then((response) => {
        Alert.alert('Sukses', 'Karyawan baru berhasil ditambahkan!');
        setNip('');
        setNama('');
        setJabatan('');
        setDepartemenId('');
      })
      .catch((error) => {
        console.error(error.response.data);
        Alert.alert('Error', 'Gagal menambahkan karyawan baru. Silakan coba lagi.');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="NIP"
        value={nip}
        onChangeText={setNip}
      />
      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={nama}
        onChangeText={setNama}
      />
      <TextInput
        style={styles.input}
        placeholder="Jabatan"
        value={jabatan}
        onChangeText={setJabatan}
      />
      <TextInput
        style={styles.input}
        placeholder="ID Departemen"
        value={departemenId}
        onChangeText={setDepartemenId}
      />
      <Button
        title="Tambah Karyawan"
        onPress={handleTambahKaryawan}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default TambahKaryawan;
