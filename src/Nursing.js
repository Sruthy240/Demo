import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native'
import { height, width } from './Constant/constant'
import LinearGradient from 'react-native-linear-gradient'

export default class Nursing extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view3}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                        style={styles.view4} colors={['#3882D8', '#33A4C3', '#2ECBAA']}>

                        <View style={{ width: 150, height: 150, backgroundColor: '#fff', borderRadius: 75, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('./assets/nurse.png')} />
                        </View>

                    </LinearGradient>
                    <View style={{ alignItems: 'center', marginTop: 50 }}>
                        <Text style={{ fontSize: 28.43 }}> Nursing </Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 30, }}>
                        <Text style={{ fontSize: 16, }}> Lorum Ipsum  is  simply dummy text of the  printing and typesetting industry </Text>
                    </View>
                </View>
                <TouchableHighlight >
                    <Text style={{ marginTop: 100 }}> Skip </Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        marginTop: 20
    },
    view3: {
        elevation: 4,
        height: height * 0.65,
        width: width * 0.85,
        backgroundColor: '#fff',
        marginTop: height * 0.1,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#fff',
    },
    view4: {
        height: 280,
        width: '100%',
        backgroundColor: '#2ECBAA',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        // borderRadius : 12,
        borderColor: "#7ad6c5",

    }
})