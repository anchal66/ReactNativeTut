import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

export default CounterScreen = () => {
    
    const [counter, setCounter] = useState(0);
    //above [] is array destructring
    return (
        <View>
            <Text>Counter {counter}</Text>
            <Button title="Increse"
                onPress={()=>setCounter(counter + 1)}/>
            <Button title="Decrease"
                onPress={()=>setCounter(counter - 1)}/>
        </View>
    )
}

const styles = StyleSheet.create({});