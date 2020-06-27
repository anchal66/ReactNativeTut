import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

export default SquareScreen = () => {


    const reducer = (state, action) => {
        //state = {red:numner, green:number, blue:number}
        //action = {type: change_red|| change_green || change_blue, payload: 15 || -15}
        switch (action.type) {
            case 'change_red':
                return state.red+ action.payload > 255 || state.red + action.payload < 0
                    ? state : 
                    {...state, red: state.red + action.payload};
            //this will copy orignal state receved and override new red property
            case 'change_green':
                return state.green+ action.payload > 255 || state.green + action.payload < 0
                    ? state : 
                    {...state, green: state.green + action.payload};
            case 'change_blue':
                return state.blue+ action.payload > 255 || state.blue + action.payload < 0
                    ? state : 
                    {...state, blue: state.blue + action.payload};
            default: 
                return state;
        }
    }
    const COLOR_CHANGE_VAL = 20;
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    console.log('state: ', state)
    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_CHANGE_VAL})}
                onDecrease = {()=> dispatch({type: 'change_red', payload: -1 * COLOR_CHANGE_VAL})}
                color="Red"
            />

            <ColorCounter
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_CHANGE_VAL})}
                onDecrease = {() => dispatch({type: 'change_blue', payload: -1 * COLOR_CHANGE_VAL})}
             color="Blue"
            />
            <ColorCounter
                color="Green"
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_CHANGE_VAL})}
                onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_CHANGE_VAL})}
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