import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Loader = () => {
 return (
 <View>
 <ActivityIndicator size="large" color="#0000ff" />
 <Text>Loading...</Text>
 </View>
 );
};

export default Loader;