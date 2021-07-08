/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import ImagePicker from 'react-native-image-picker';




export class AddPost extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>uchiha</Text>
            </View>
        )
    }
}

export default AddPost


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }

})
