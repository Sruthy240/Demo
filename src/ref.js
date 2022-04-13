import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native'
import Header from './Components/Header'
import bookMarkImage from './assets/bk1.png'
import dotImage from './assets/dot.png'
import { height, width } from './Constant/constant'
import LinearGradient from 'react-native-linear-gradient'


export default class ref extends Component {
    render() {
        console.log(width * 0.08);
        return (
            <SafeAreaView style={styles.container}>
                <LinearGradient style={styles.view2}
                    start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#2ECBAA', '#30A5B7', '#3881D9']}>
                    <Header title='Services'
                        leftIcon={bookMarkImage}
                        rightIcon={dotImage} />
                    <Image style={{ width: height * 0.057, position: 'absolute', top: 80 }}
                        source={require('./assets/cs.png')} />
                    <View style={{ position: 'absolute', top: 200 }}>
                        <Text style={{ fontSize: 18, color: '#fff' }}> What Service you are looking for ?</Text>
                    </View>
                </LinearGradient>
                <View style={styles.view3}>
                    <View style={{ width: 82, height: 88, backgroundColor: '#e34bac', alignItems: 'center', justifyContent: 'center',  }}>
                        <Image
                            source={require('./assets/house1.png')} />
                    </View>
                    <View style={{ left: 50, shadowColor: "#000", shadowOffset: {
                            width: 0, height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Home Services</Text>
                    </View>

                </View>

                <View style={{ elevation: 8,height: 90, width: '90%',backgroundColor: '#fff',marginTop: 32,borderRadius: 10,alignItems: 'center',           flexDirection: 'row',
                    borderWidth : 1, borderColor : '#2ECBAA'}}>

                    <LinearGradient  start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3882D8', '#33A7C1', '#2ECBAA']} style={{ width: 82, height: 88, backgroundColor: '#7ad6c5', alignItems: 'center', justifyContent: 'center' }}>
                        <Image 
                            source={require('./assets/nurse1.png')} />
                   </LinearGradient>
                    <View style={{ left: 50,shadowColor: "#000", shadowOffset: {
                            width: 0, height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Nursing</Text>
                    </View>

                </View>

                <View style={styles.view3}>

                     <LinearGradient  start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#653DBC', '#894FC6', '#B865D3']}
                    style={{ width: 82, height: 88, backgroundColor: '#B865D3', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('./assets/coffee.png')} />
                    </LinearGradient>

                    <View style={{ left: 50, shadowColor: "#000", shadowOffset: {
                            width: 0, height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Guests Serving </Text>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent : 'center',
        backgroundColor: '#eee'
    },
    view2: {
        height: '40%',
        width: '100%',
        // backgroundColor: "#7ad6c5",
        alignItems: 'center',
        // justifyContent : 'center',

    },
    text1: {
        fontSize: 22,
        color: 'white'
    },
    textView: {
        color: '#fff',
        fontSize: 18
    },
    view3: {
        elevation: 8,
        height: 90,
        width: '90%',
        backgroundColor: '#fff',
        marginTop: 32,
        borderRadius: 10,
        alignItems: 'center',
        // justifyContent : 'center',
        flexDirection: 'row',
       
    }
})