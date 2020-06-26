import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
    return <View>
        <Text style={styles.text}>Hi There!</Text>
        <Button 
        onPress={()=>console.log('pressed')}
        title="Go to Componets" />
        <TouchableOpacity onPress={()=>console.log('opacity pressed')}>
            <Text>Go to List</Text>
            <Text>Anything here is apprad in button</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        fontSize: 30
    }
});

export default HomeScreen;