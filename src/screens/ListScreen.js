import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';


export default function ListScreen(){
    const friends = [
        {name: 'Avinash'},
        {name: 'Avinash2'},
        {name: 'Avinash3'},
        {name: 'Avinash4'},
        {name: 'Avinash5'}
    ]

    return (
    <FlatList  data={friends}
        renderItem={(element)=>{
            //we get elemt as object of various property 
            //to get value we have to element.item
        }} />
    )

}

const styles=StyleSheet.create({
    listScreen:{
        fontSize: 40
    }
});