/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import Center from '../utils/Center';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';
import Colors from '../constants/colors';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

import PlayIcon from 'react-native-vector-icons/Fontisto';


class ContentCard extends Component {


    state = {
        error: false,
        pause: false,
        currentTime: 0,
        duration: 0,
    }



    render() {

        const { pause } = this.state;

        return (




            <View style={styles.cardContainer}>

                <View style={styles.cardHeader}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Image source={require('../assets/stone.png')} style={{ width: 30, height: 30, borderRadius: 30, marginHorizontal: 8 }} />
                        <Text style={{}}>{this.props.username}</Text>
                    </View>
                    <Icon name="dots-vertical" size={24} />
                </View>


                <View style={styles.cardContent}>
                    <Video source={require('../assets/boring.mp4')}       // Can be a URL or a local file.
                        ref={(ref) => { this.player = ref; }}     // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onError={this.videoError}               // Callback when video cannot be loaded
                        repeat={true}
                        paused={pause}
                        resizeMode="contain"
                        onLoad={this.load}
                        onError={this.handleError}
                        onProgress={this.progress}
                        style={styles.backgroundVideo} />


                    <TouchableNativeFeedback onPress={() => {
                        this.setState({ pause: !pause });
                    }}
                    >
                        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: 'transparent' }}>
                            {pause ?
                                <View style={styles.videoOverlay}>
                                    <PlayIcon name="play" size={42} color='rgba(255, 255, 255, 0.4)' />
                                </View> : undefined}

                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingVertical: 42, justifyContent: 'space-around' }}>
                    <TouchableWithoutFeedback onPress={() => this.animation.play()}>
                        <LottieView
                            ref={animation => {
                                this.animation = animation;
                            }}
                            loop={false}
                            source={require('../assets/animations/like.json')}
                        />
                    </TouchableWithoutFeedback>
                </View>
            </View>


        );
    }
}

export default ContentCard;


const styles = StyleSheet.create({

    cardContainer: {
        marginTop: 32,
        marginBottom: 8,
        // borderColor: 'black',
        // borderWidth: 1,
        width: '100%',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 3 },
        shadowOpacity: 0.5,
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',

    },
    cardHeader: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        // borderColor: 'violet',
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 3 },
        shadowOpacity: 0.5,
    },
    cardContent: {
        width: '100%',
        paddingTop: '75%',
        // borderWidth: 1,
        // borderColor: 'blue',
        backgroundColor: 'black',
    },
    backgroundVideo: {
        ...StyleSheet.absoluteFill,

    },

    videoOverlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    }
});