import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
 title: string;
 onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
 return (
 <TouchableOpacity
 style={{    
    height: 60,
    width: 300,
    borderWidth: 0.4,
    borderRadius: 50,
    backgroundColor: "#5CA9E9",
    justifyContent: "center",
   marginHorizontal:'auto',
   marginTop:10
   }}
 onPress={onPress}>
 <View>
 <Text 
 style={{    
    fontSize: 18,
    color: "white",
    textAlign: "center",}}
 >{title}</Text>
 </View>
 </TouchableOpacity>
 );
};

export default Button;