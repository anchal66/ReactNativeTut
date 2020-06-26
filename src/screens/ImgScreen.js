import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImgDetails from '../components/ImgDetails';

export default ImgScreen = () => {
    return (
        <View>
            <ImgDetails title="Forest" imgSrc={require('../../assets/images/beach.jpg')}/>
            <ImgDetails title="Beach" imgSrc={require('../../assets/images/forest.jpg')}/>
            <ImgDetails title="Mountains" imgSrc={require('../../assets/images/mountain.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({});