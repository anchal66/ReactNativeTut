import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

export default SquareScreen = () => {
    
    return (
        <View>
            <ColorCounter />
            <ColorCounter />
            <ColorCounter />
        </View>
    )
}

const styles = StyleSheet.create({});