import { Tabs } from "expo-router";


export default function _layout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name="home"/>
    </Tabs>
  )
}