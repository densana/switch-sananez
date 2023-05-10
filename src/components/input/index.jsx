import React from "react";
import { TextInput, Button, View } from "react-native";
import { styles } from "./styles";
const Input = ({ placeholder, value, onChangeText, buttonColor, buttonTitle, onHandlerButton}) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        />
        <Button 
        onPress={onHandlerButton}
        title={buttonTitle}
        color={buttonColor}
        ></Button>
      </View>
    )
}
export default Input;