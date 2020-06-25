import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HomeScreen = () =>{
    return <Text style={styles.text}>Hi There!</Text>
};

const styles = StyleSheet.create({
    text:{
        marginTop: 50,
        fontSize:30
    }
});

export default HomeScreen;