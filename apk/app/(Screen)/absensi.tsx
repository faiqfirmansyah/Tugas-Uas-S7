import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [karyawans, setKaryawans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'http://192.168.107.88:8000/api/karyawans';
    axios.get(apiUrl)
      .then((response) => {
        setKaryawans(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleAbsensi = (id_karyawans, status) => {
    const apiUrl = 'http://192.168.107.88:8000/api/absensis';
    const validStatus = ['hadir', 'izin', 'sakit', 'tidak hadir'];
    
    if (!validStatus.includes(status)) {
      Alert.alert('Error', 'Status yang dipilih tidak valid.');
      return;
    }

    const data = {
      id_karyawans: id_karyawans,
      tanggal: new Date().toISOString().split('T')[0], 
      jam_masuk: '08:00:00', 
      jam_keluar: '17:00:00',
      status: status,
    };

    axios.post(apiUrl, data)
      .then((response) => {
        Alert.alert('Sukses', `Absensi untuk karyawan ID ${id_karyawans} berhasil disimpan!`);
      })
      .catch((error) => {
        console.error(error.response.data);
        Alert.alert('Error', `Gagal menyimpan absensi: ${error.response.data.message}`);
      });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={karyawans}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Nama: {item.nama}</Text>
            <Text>Jabatan: {item.jabatan}</Text>
            <Text>Departemen: {item.departemen}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Absen Hadir"
                onPress={() => handleAbsensi(item.id, 'hadir')}
              />
              <Button
                title="Absen Sakit"
                onPress={() => handleAbsensi(item.id, 'sakit')}
              />
              <Button
                title="Absen Izin"
                onPress={() => handleAbsensi(item.id, 'izin')}
              />
              <Button
                title="Tidak Hadir"
                onPress={() => handleAbsensi(item.id, 'tidak hadir')}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default App;
