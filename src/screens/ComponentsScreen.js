import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const test = <Text>'Hello There!'</Text>;
const ComponentScreen = () => {
    return (
        <View>
              <Text style={styles.textStyle}>Hello</Text>
               {test}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentScreen;
