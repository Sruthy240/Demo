import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, SafeAreaView, TouchableHighlight, StatusBar } from 'react-native'
import Header from './Components/Header'
import bookMarkImage from './assets/bk1.png'
import dotImage from './assets/dot.png'
import { height, width } from './Constant/constant'
import LinearGradient from 'react-native-linear-gradient'


export default class Service extends Component {
    render() {
        console.log(width * 0.11);
        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb" />


                <LinearGradient style={styles.view2}
                    start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#2ECBAA', '#30A5B7', '#3881D9']}>
                    <Header title='Services'
                        leftIcon={bookMarkImage}
                        rightIcon={dotImage} />
                    <Image style={{ width: height * 0.057, position: 'absolute', top: 95 }}
                        source={require('./assets/cs.png')} />
                    <View style={{ position: 'absolute', top: 200, marginHorizontal: 80, marginTop: 20 }}>
                        <Text style={{ fontSize: 18, color: '#fff', fontFamily: 'MontserratAlternates-Regular', textAlign: 'center' }}> What Service you are looking for ?</Text>
                    </View>
                </LinearGradient>
                <View style={styles.view3}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F93BC5', '#FA33A0', '#FA2E89']} style={{ width: width * 0.213, height: height * 0.106, backgroundColor: '#7ad6c5', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                        <View style={{ width: width * 0.213, height: height * 0.106, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: height * 0.05, width: width * 0.106 }}
                                source={require('./assets/house1.png')} />
                        </View>

                    </LinearGradient>
                    <View style={{
                        height: 20,
                        left: 50, shadowColor: "#000", shadowOffset: {
                            width: 0, height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                    }}>
                        <Text style={{ fontSize: 20, fontFamily: 'MontserratAlternates-Semibold', }}> Home Services</Text>
                    </View>
                </View>

                <View style={styles.view3}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3882D8', '#33A7C1', '#2ECBAA']} style={{ width: 82, height: 89, backgroundColor: '#7ad6c5', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }}>
                        <View style = {{width: width * 0.213, height: height * 0.106, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{ height: height * 0.052, width:width * 0.08 }}
                            source={require('./assets/nurse1.png')} />
                        </View>
                        
                    </LinearGradient>
                    <View style={{
                        left: 50, shadowColor: "#000", shadowOffset: {
                            width: 0, height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                    }}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Companies')}>
                            <Text style={{ fontSize: 20, fontFamily: 'MontserratAlternates-Semibold' }}> Nursing</Text>
                        </TouchableHighlight>
                    </View>

                </View>

                <View style={styles.view3}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#653DBC', '#894FC6', '#B865D3']}
                        style={{ width: 82, height: 89, backgroundColor: '#B865D3', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                            <View style = {{ width: width * 0.213, height: height * 0.106, alignItems: 'center', justifyContent: 'center'}}>
                                <Image style = {{height : height * 0.042, width : width * 0.11}}
                                source={require('./assets/coffee.png')} />
                            </View>
                        
                    </LinearGradient>

                    <View style={{
                        left: 50, shadowColor: "#000", shadowOffset: {
                            width: 0, height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                    }}>
                        <Text style={{ fontSize: 20, fontFamily: 'MontserratAlternates-Semibold' }}> Guests Serving </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent : 'center',
        backgroundColor: '#fff',
    },
    view2: {
        height: height * 0.4,
        width: width,
        // backgroundColor: "#7ad6c5",
        alignItems: 'center',
        // justifyContent : 'center',
        paddingVertical: 30,
        marginBottom: 30,
        // borderWidth : 1

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
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        // justifyContent : 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 90,
        paddingVertical: 10,
        
        
        // borderWidth: 1

    }
})