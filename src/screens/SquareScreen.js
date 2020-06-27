import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

export default SquareScreen = () => {


    const reducer = (state, action) => {
        //state = {red:numner, green:number, blue:number}
        //action = {colorToChange: red|| green || blue, amount: 15 || -15}
        switch (action.colorToChange) {
            case 'red':
                return {...state, red: state.red + action.amount}
            //this will copy orignal state receved and override new red property
            case 'green':
                return {...state, green: state.green + action.amount}
            case 'blue':
                return {...state, blue: state.blue + action.amount}
            default: 
                return state;
        }
    }
    const COLOR_CHANGE_VAL = 20;
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_CHANGE_VAL})}
                onDecrease = {()=> dispatch({colorToChange: 'red', amount: -1 * COLOR_CHANGE_VAL})}
                color="Red"
            />

            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_CHANGE_VAL})}
                onDecrease = {() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_CHANGE_VAL})}
             color="Blue"
            />
            <ColorCounter
                color="Green"
                onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_CHANGE_VAL})}
                onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_CHANGE_VAL})}
            />
            <View
                style={{
                    height: 150, width: 150,
                    backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({});