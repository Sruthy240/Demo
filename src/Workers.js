import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { height, width } from './Constant/constant'
import Nursing from './Nursing'

export default function Workers(props) {
    console.log(width * 0.05)
    const DATA = [
        {
            id: 1,
            image: require('./assets/salma6.png'),
            title: 'Salma Saeed',
            company: 'Nursco Nursing Company',
            designation: "Nursing",
            value: 150,
            image1: require('./assets/nurse2.png'),
        },
        {
            id: 2,
            image: require('./assets/salma1.png'),
            title: 'Salma Saeed',
            company: 'Nursco Nursing Company',
            designation: "Nursing",
            value: 150,
            image1: require('./assets/nurse2.png'),

        },
        {
            id: 3,
            image: require('./assets/salma3.png'),
            title: 'Salma Saeed',
            company: 'Nursco Nursing Company',
            designation: "Nursing",
            value: 150,
            image1: require('./assets/nurse2.png'),
        },
        {
            id: 4,
            image: require('./assets/salma6.png'),
            title: 'Salma Saeed',
            company: 'Nursco Nursing Company',
            designation: "Nursing",
            value: 150,
            image1: require('./assets/nurse2.png'),
        },
        {
            id: 5,
            image: require('./assets/salma4.png'),
            title: 'Salma Saeed',
            company: 'Nursco Nursing Company',
            designation: "Nursing",
            value: 150,
            image1: require('./assets/nurse2.png'),
        },
        {
            id: 7,
            image: require('./assets/salma5.png'),
            title: 'Salma Saeed',
            company: 'Nursco Nursing Company',
            designation: "Nursing",
            value: 150,
            image1: require('./assets/nurse2.png'),
        },
        {
            id: 8,
            image: require('./assets/salma1.png'),
            title: 'Salma Saeed',
            company: 'Nursco Nursing Company',
            designation: "Nursing",
            value: 150,
            image1: require('./assets/nurse2.png'),
        }
        , {
            id: 9,
            image: require('./assets/salma6.png'),
            title: 'Salma Saeed',
            company: 'Nursco Nursing Company',
            designation: "Nursing",
            value: 150,
            image1: require('./assets/nurse2.png'),
        },
        {
            id: 10,
            image: require('./assets/salma6.png'),
            title: 'Salma Saeed',
            company: 'Nursco Nursing Company',
            designation: "Nursing",
            value: 150,
            image1: require('./assets/nurse2.png'),
        },
        {
            id: 11,
            image: require('./assets/salma6.png'),
            title: 'Salma Saeed',
            company: 'Nursco Nursing Company',
            designation: "Nursing",
            value: 150,
            image1: require('./assets/nurse2.png'),
        }
    ]
    const renderItem = ({ item, index }) => {
        return <View style={[styles.itemContainer, index == DATA.length - 1 && { marginBottom: 50 }]}>
            <Image style={{ width: width * 0.157, height: height * 0.073, }}
                source={item.image} />
            <View style={{ flexDirection: 'column', alignSelf: 'center', flex: 1, marginLeft: width * 0.05 }}>
                <TouchableOpacity onPress={ () => props.navigation.navigate('Profile')}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'MontserratAlternates-Regular' }}>{item.title} </Text>
                </TouchableOpacity>
     
                <Text style={{ fontSize: 10, fontFamily: 'MontserratAlternates-Regular', marginTop: 2, }}>{item.company}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Image style={{ width: 9.91, height: 13.5, marginTop: 4 }}
                        source={item.image1} />
                    <Text style={{ fontFamily: 'MontserratAlternates-Regular', fontSize: 12, marginTop: 4, }}> {item.designation}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                <Text style={{ fontFamily: 'MontserratAlternates-Regular', fontSize: 18, fontWeight: 'bold' }}> {item.value}</Text>
                <Text style={{ fontFamily: 'MontserratAlternates-Regular', fontSize: 14, fontWeight: 'bold' }}>QAR</Text>
            </View>
        </View>
    }
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.blueContainer} start={{ x: 1, y: 0.75 }} end={{ x: 0, y: 0.75 }} colors={['#3882D8', '#33A3C4', '#2ECBAA']} >
                <View style={{ flexDirection: 'row', width: width, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: width * 0.05, }}>
                    <Image source={require('./assets/arrow1.png')}
                        style={{}} />
                    <Text style={{ color: 'white', fontSize: 22, fontFamily: 'MontserratAlternates-Medium', }}>Workers</Text>
                    <Image style={{}}
                        source={require('./assets/bk1.png')} />
                </View>
                <Text style={{ color: '#FFF', fontSize: 16, fontFamily: 'MontserratAlternates-Light', marginTop: 6 }}>Lexiang Company</Text>
            </LinearGradient>
            <FlatList style={{ marginTop: -25, padding: 5 }}
                keyExtractor={(item) => item.id}
                data={DATA}
                renderItem={renderItem} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    blueContainer: {
        height: height * 0.2,
        width: width,
        backgroundColor: '#387FDA',
        alignItems: 'center',
        paddingVertical: 50,

    },
    itemContainer: {
        height: height * 0.125,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 8,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})