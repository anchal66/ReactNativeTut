import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

export default SquareScreen = () => {

    const COLOR_CHANGE_VAL = 20;

    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    console.log(red,blue, green);

    const setColor= (color, change)=>{
        if(color === 'red'){
            if(red + change > 255 || red + change < 0){
                return
            }
            else
            {
                setRed(red + change);
            }
        }
    }
    return (
        <View>
            <ColorCounter
             onIncrease={()=>{setColor('red', COLOR_CHANGE_VAL)}}
             onDecrease={()=>{setColor('red', -1 * COLOR_CHANGE_VAL)}}
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