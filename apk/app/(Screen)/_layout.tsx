import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='karyawans'/>
        <Stack.Screen name='absensi'/>
        <Stack.Screen name='baru'/>
    </Stack>
  )
}