/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'
import Center from '../utils/Center'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Video from 'react-native-video';
import Colors from '../constants/colors'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

import PlayIcon from 'react-native-vector-icons/Fontisto'

import ContentCard from '../components/ContentCard'




export class Home extends Component {




    render() {

        return (


            <View style={styles.mainContainer}>

                <ContentCard username='xylanreeves' />

            </View >

        );
    }
}

export default Home;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
    },
});