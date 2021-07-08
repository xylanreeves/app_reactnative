/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Hyperlink from 'react-native-hyperlink'


import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/colors'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';


class ProfilePub extends Component {

    state = {
        subscribed: true,
    }

    subscribeButton = () => {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.blueShade, Colors.middleShade, Colors.purpleShade]}
                style={styles.linearGradient}>
                <TouchableNativeFeedback >
                    <TouchableOpacity
                        onPress={this.subscribe}
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 64,
                            paddingVertical: 16,
                        }}>
                        <Text style={styles.buttonText}>Subscribe</Text>
                    </TouchableOpacity>
                </TouchableNativeFeedback>
            </LinearGradient >
        )
    }

    unsubscribeButton = () => {
        return (

           
                <TouchableOpacity onPress={this.unsubscribe}
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 48,
                        paddingVertical: 15,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: Colors.lightGrey
                    }}>
                    <Text style={{ fontWeight: 'bold', color: Colors.blueShade }}>Subscribed</Text>
                    <Entypo name="check" size={16} color={Colors.blueShade} style={{ paddingLeft: 8 }} />
                </TouchableOpacity>

        )
    }

    subscribe = () => {
        this.setState({
            subscribed: true,
        });
    }

    unsubscribe = () => {
        this.setState({
            subscribed: false,
        });
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.profileHeader}>

                    <View style={styles.userInfo}>
                        <View style={styles.userImageWrapper}>
                            <Image source={require('../assets/stone.png')} style={styles.userImage} />
                        </View>

                        <View style={styles.userDetails}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Xylan Reeves</Text>

                            <View style={{ marginLeft: 1, marginRight: 64 }}>
                                <Text style={{ fontSize: 16, color: 'grey' }}>journey is all we got ✨ 🤞🏻</Text>
                            </View>

                            <TouchableOpacity>
                                <Hyperlink
                                    linkDefault={true}
                                    linkText={url => url === 'https://hominian.com' ? 'hominian.com' : url}>

                                    <Text style={{ marginTop: 4, color: Colors.linkColor }}>https://hominian.com</Text>

                                </Hyperlink>
                            </TouchableOpacity>
                        </View>



                    </View>

                    <View style={styles.userStats}>
                        <TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.statNumbers}>57</Text>
                                <Text style={styles.statText}>Uploads</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.statNumbers}>1.3k</Text>
                                <Text style={styles.statText}>Subscribers</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.statNumbers}>99k</Text>
                            <Text style={styles.statText}>Likes</Text>
                        </View>


                    </View>



                    <View style={{ flexDirection: 'row', paddingBottom: 32, justifyContent: 'space-around' }}>

                        {this.state.subscribed ? <this.unsubscribeButton /> : <this.subscribeButton />}

                    </View>

                </View>
            </View>
        );
    }
}

export default ProfilePub;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
    },
    profileHeader: {
        width: '100%',
        backgroundColor: 'white',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        elevation: 8,
        overflow: 'hidden'
    },
    userInfo: {
        flexDirection: 'row',
        marginTop: 32,
        marginHorizontal: 32,

    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        shadowColor: 'blue',
        shadowOffset: { width: 5, height: 3 },
        shadowOpacity: 0.5,
    },
    userImageWrapper: {
        shadowColor: 'blue',
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 3 },
        elevation: 8,
        borderRadius: 100,
        width: 100,
        height: 100,
        overflow: 'hidden',
    },
    userDetails: {
        paddingTop: 8,
        paddingHorizontal: 32,
    },
    userStats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 32,
        marginVertical: 32,
    },
    statNumbers: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    statText: {
        color: 'grey'
    },


    linearGradient: {
        borderRadius: 10,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 8,
        overflow: 'hidden',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',

    },

});