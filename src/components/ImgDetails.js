import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default ImgDetails = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
            <Image source={props.imgSrc}/>
        </View>
    )
}

const styles = StyleSheet.create({});