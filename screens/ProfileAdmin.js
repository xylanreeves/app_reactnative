/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Hyperlink from 'react-native-hyperlink'


import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';




class Profile extends Component {


    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.profileHeader}>


                    <Entypo name="dots-three-horizontal" size={28} color={Colors.lightGrey} style={{ position: 'absolute', right: 18, top: 8 }} />

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



                    <View style={{ flexDirection: 'row', paddingBottom: 32, justifyContent: 'center' }}>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('EditProfile')}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 48,
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: Colors.lightGrey,
                            }}>
                            <Text style={{ fontWeight: 'bold', color: Colors.blueShade }}>Edit Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Wallet')}
                            style={{
                                paddingHorizontal: 16,
                                paddingVertical: 12,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: Colors.lightGrey,
                                marginLeft: 16,
                            }}>

                            <SimpleLineIcons name="wallet" size={24} color={Colors.blueShade} />

                        </TouchableOpacity>

                    </View>

                </View>

            </View >

        );
    }
}

export default Profile;

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
        overflow: 'hidden',
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