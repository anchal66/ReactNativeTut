import React from 'react';
import {Text, StyleSheet} from 'react-native';

const test ='Hello There!'
const ComponentScreen = () => {
    return <Text style={styles.textStyle}>{test}</Text>
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
});

export default ComponentScreen;
