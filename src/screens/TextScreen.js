import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

export default TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newText)=>setName(newText)}
            />
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: 'black',
        borderWidth: 1
    }
});