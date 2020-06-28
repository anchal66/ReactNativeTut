import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

export default TextScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Boxy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor: 'black'
    },
    textStyle:{
        borderWidth:1,
        borderColor: 'red',
        marginVertical: 20,
        marginHorizontal: 20,
        padding:10

    }
});