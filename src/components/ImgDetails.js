import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default ImgDetails = ({title, imgSrc, score}) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={imgSrc}/>
            <Text>Score is {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});