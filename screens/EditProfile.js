/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import ImagePicker from 'react-native-image-picker';




export class EditProfile extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>EditProfile</Text>
            </View>
        )
    }
}

export default EditProfile


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }

})
