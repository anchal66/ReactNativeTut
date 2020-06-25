import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';


export default function ListScreen(){
    const friends = [
        {key:'1', name: 'Avinash'},
        {key:'2', name: 'Avinash2'},
        {key:'3', name: 'Avinash3'},
        {key:'4', name: 'Avinash4'},
        {key:'5', name: 'Avinash6'}
    ]

    return (
    <FlatList data={friends}
        renderItem={({item})=>{
            // using ES 6 feature to destauctre item from elemnt:
            return <Text style={styles.listScreen}>{item.name}</Text>
        }} />
    )

}

const styles=StyleSheet.create({
    listScreen:{
        fontSize: 40
    }
});