/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import colors from './../constants/colors'

export default class AddButton extends Component {


    render() {
        return (



            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.blueShade, colors.middleShade, colors.purpleShade]}
                style={styles.linearGradient}>

                <Text style={styles.buttonText}>
                    +
                        </Text>
            </LinearGradient>

        );
    }
}

var styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
        borderRadius: 5,
        height: 32,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {width:5, height:3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        padding: 8,
        color: '#fff',
        
    },
});