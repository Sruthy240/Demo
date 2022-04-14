import React, { Component, useState, useRef } from 'react'
import { View, StyleSheet, Image, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import Header from './Components/Header'
import bookMarkImage from './assets/bk1.png'
import dotImage from './assets/dot.png'
import { height, width } from './Constant/constant'
import LinearGradient from 'react-native-linear-gradient'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
export default function Service(props) {
    const DATA = [
        {
            id: 1,
            image: require('./assets/house1.png'),
            title: 'Home Services',
            colors: ['#F93BC5', '#FA33A0', '#FA2E89'],
            width: width * 0.213,
            height: height * 0.106,
            imageWidth: width * 0.106,
            imageHeight: height * 0.05
        },
        {
            id: 2,
            image: require('./assets/nurse1.png'),
            title: 'Nursing',
            colors: ['#3882D8', '#33A7C1', '#2ECBAA'],
            width: width * 0.213,
            height: height * 0.106,
            imageWidth: width * 0.08,
            imageHeight: height * 0.052
        },
        {
            id: 3,
            image: require('./assets/coffee.png'),
            title: 'Guests Serving',
            colors: ['#653DBC', '#894FC6', '#B865D3'],
            width: width * 0.213,
            height: height * 0.106,
            imageWidth: width * 0.11,
            imageHeight: height * 0.042,
        },
    ]
    console.log(width * 0.125);
    const renderItem = ({ item }) => {
        return (
            <View style={{
                flexDirection: 'row', width: width * 0.85, alignItems: 'center', margin: 10, borderRadius: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 2, },
                shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#fff', marginBottom: 16
            }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={item.colors} style={{ width: item.width, height: item.height, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, }}>
                    <Image style={{ width: item.imageWidth, height: item.imageHeight }}
                        source={item.image} />
                </LinearGradient>
                <TouchableOpacity onPress={() => props.navigation.navigate('Companies')}>
                    <Text style={{ fontSize: 20, fontFamily: 'MontserratAlternates-Semibold', paddingHorizontal: 40 }} > {item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient style={styles.blueContainer} start={{ x: 0.39, y: 0.5 }} end={{ x: 0.72, y: 0.5 }} colors={['#2ECBAA', '#30A5B7', '#3881D9']} >
            </LinearGradient>
            <View style={{ height: height * 0.25, alignItems: 'center' }}>
                <Header title='Services' />
                <Image style={{ marginTop: 32, height: height * 0.08, width: width * 0.125 }}
                    source={require('./assets/cs.png')} />
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', fontFamily: 'MontserratAlternates-Regular', paddingHorizontal: 80, marginTop: 50 }}>What service you are looking for ? </Text>
            </View>
            <View style={{ flex: 1, marginTop: height * 0.17, }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id} />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent : 'center',
        backgroundColor: '#fff',
    },
    blueContainer: {
        height: width * 4,
        width: width * 4,
        borderRadius: width * 3,
        position: 'absolute',
        top: -width * 3.25,
        marginVertical: 75
    },
})