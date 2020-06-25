import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const name = 'Avinash';
const ComponentScreen = () => {
    return (
        <View>
              <Text style={styles.textStyle}>Name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentScreen;
