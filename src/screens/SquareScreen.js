import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

export default SquareScreen = () => {

    const COLOR_CHANGE_VAL = 20;

    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    console.log(red,blue, green);
    return (
        <View>
            <ColorCounter
             onIncrease={()=>{setRed(red + COLOR_CHANGE_VAL)}}
             onDecrease={()=>{setRed(red - COLOR_CHANGE_VAL)}}
             color="Red"
            />

            <ColorCounter
             onIncrease={()=>{setBlue(blue + COLOR_CHANGE_VAL)}}
             onDecrease={()=>{setBlue(blue - COLOR_CHANGE_VAL)}}
             color="Blue"
            />
            <ColorCounter
             color="Green"
             onIncrease={()=>{setGreen(green + COLOR_CHANGE_VAL)}}
             onDecrease={()=>{setGreen(green - COLOR_CHANGE_VAL)}}
            />
            <View 
            style={{height:150, width:150,
             backgroundColor: `rgb(${red},${green},${blue})`
            }} 
            />
        </View>
    )
}

const styles = StyleSheet.create({});