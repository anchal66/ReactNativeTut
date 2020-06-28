import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

export default TextScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Boxy</Text>
            <Text style={styles.textStyle}>Boxy2 </Text>
            <Text style={styles.textStyle}>Boxy3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'center'
    },
    textStyle1:{
        borderWidth:3,
        borderColor: 'red',
    },
    textStyle2:{
        borderWidth:3,
        borderColor: 'red',
        flex:1,
        alignSelf:'flex-end'
    }
});