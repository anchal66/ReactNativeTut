import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default ColorCounter = ({color, onIncrease, onDecrease}) => {
    
    return (
        <View>
            <Text>{color}</Text>
            <Button
             title={`+ ${color}`}
             onPress={()=>onIncrease()}
             //This just calls setRed(red+1) indirectrly
             />
            <Button
             title={`- ${color}`}
             onPress={()=>onDecrease()}
             />
        </View>
    )
}

const styles = StyleSheet.create({});