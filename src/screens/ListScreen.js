import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function ListScreen(){
    return <View>
        <Text style={styles.listScreen}>List Screen</Text>
    </View>

}

const styles=StyleSheet.create({
    listScreen:{
        fontSize: 40
    }
});