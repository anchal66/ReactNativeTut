import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';


export default function ListScreen(){
    const friends = [
        {name: 'Avinash'},
        {name: 'Avinash2'},
        {name: 'Avinash3'},
        {name: 'Avinash4'},
        {name: 'Avinash5'},
        {name: 'Avinash6'},
        {name: 'Avinash7'},
        {name: 'Avinash8'},
    ]

    return (
    <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={friend=> friend.name}
        data={friends}
        renderItem={({item})=>{
            // using ES 6 feature to destauctre item from elemnt:
            return <Text style={styles.listScreen}>{item.name}</Text>
        }} />
    )

}

const styles=StyleSheet.create({
    listScreen:{
        marginVertical: 50
    }
});