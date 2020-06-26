import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
    return <View>
        <Text style={styles.text}>Hi There!</Text>
        <Button 
        onPress={()=>console.log('pressed')}
        title="Go to Componets" />
    </View>
};

const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        fontSize: 30
    }
});

export default HomeScreen;