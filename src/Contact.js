
import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, SafeAreaView, Pressable } from 'react-native'
import Header from './Components/Header'
import bookMarkImage from './assets/bk1.png'
import dotImage from './assets/dot.png'
import { height, width } from './Constant/constant'
import LinearGradient from 'react-native-linear-gradient'


export default class Contact extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <LinearGradient style={styles.view1} start={{ x: 0.38, y: 0.5 }} end={{ x: 0.7, y: 0.5 }} colors={['#2ECBAA', '#30A5B7', '#3881D9']} >
                </LinearGradient>
                <View>
                    <Header title='Contact us'
                        leftIcon={bookMarkImage}
                        rightIcon={dotImage} />
                    <View style={{ marginHorizontal: 80, }}>
                        <Text style={{ color: '#fff', fontSize: 18, marginTop: 80, textAlign: 'center', fontFamily: 'MontserratAlternates-Regular' }}> we Are Here to Support You. </Text>
                    </View>
                </View>
                <View style={{ marginTop: height * 0.26, }}>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', marginTop: -height * 0.1, shadowColor: "#000", shadowOffset: {
                            width: 0, height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                    }}>
                        <TextInput style={styles.inputText}
                            placeholder='Email' />
                    </View>
                    <View style={{
                        margin: 20, alignItems: 'center', justifyContent: 'center', marginTop: height * 0.028, shadowColor: "#000", shadowOffset: {
                            width: 0, height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                    }}>
                        <TextInput style={styles.inputText}
                            placeholder='Subject' />
                    </View>
                    <View style={{
                        alignItems: 'center', margin: 20, shadowColor: "#000", marginTop: 6, shadowOffset: {
                            width: 0, height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3, elevation: 5,
                    }}>
                        <TextInput style={{
                            height: height * 0.22,
                            width: width * 0.8, padding: 20, paddingTop: 14,
                            backgroundColor: '#fff', borderRadius: 5,
                        }} multiline placeholder='Your Messsage' />
                    </View>
                    <Pressable style={{
                        shadowColor: "#2ECBAA", shadowOffset: {
                            width: 5, height: 7,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                    }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.button} colors={['#2ECBAA', '#33A5C2', '#387FDA']} >
                            <Text style={styles.buttonText}> Send </Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent : 'center'
    },
    view1: {
        height: width * 4,
        width: width * 4,
        borderRadius: width * 3,
        position: 'absolute',
        top: -width * 3.25,
    },
    inputText: {
        width: width * 0.8,
        padding: 18,
        borderRadius: 5,
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        fontSize: 14,
        fontFamily: 'MontserratAlternates-Regular'
    },
    button: {
        height: height * 0.06,
        width: width * 0.75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2ECBAA',
        borderRadius: 25,
        marginTop: height * 0.056,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontFamily: 'MontserratAlternates-Regular',
    }
})