import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
export default function Saved(props) {
    const DATA = [
        {
            id: 1,
            title: 'Salma Saeed',
            image: require('./assets/salma6.png'),
            value: require('./assets/150QAR.png'),
            image1: require('./assets/nurse2.png'),
            image2: require('./assets/bk3.png')
        },
        {
            id: 2,
            title: 'Salma Saeed',
            image: require('./assets/salma1.png'),
            value: require('./assets/150QAR.png'),
            image1: require('./assets/nurse2.png'),
            image2: require('./assets/bk3.png')

        },
        {
            id: 3,
            title: 'Salma Saeed',
            image: require('./assets/salma3.png'),
            value: require('./assets/150QAR.png'),
            image1: require('./assets/nurse2.png'),
            image2: require('./assets/bk3.png')
        },
        {
            id: 4,
            title: 'Salma Saeed',
            image: require('./assets/salma6.png'),
            value: require('./assets/150QAR.png'),
            image1: require('./assets/nurse2.png'),
            image2: require('./assets/bk3.png')
        },
        {
            id: 5,
            title: 'Salma Saeed',
            image: require('./assets/salma4.png'),
            value: require('./assets/150QAR.png'),
            image1: require('./assets/nurse2.png'),
            image2: require('./assets/bk3.png')
        },
        {
            id: 7,
            title: 'Salma Saeed',
            image: require('./assets/salma5.png'),
            value: require('./assets/150QAR.png'),
            image1: require('./assets/nurse2.png'),
            image2: require('./assets/bk3.png')
        },
        {
            id: 8,
            title: 'Salma Saeed',
            image: require('./assets/salma1.png'),
            value: require('./assets/150QAR.png'),
            image1: require('./assets/nurse2.png'),
            image2: require('./assets/bk3.png')
        }
        , {
            id: 9,
            title: 'Salma Saeed',
            image: require('./assets/salma6.png'),
            value: require('./assets/150QAR.png'),
            image1: require('./assets/nurse2.png'),
            image2: require('./assets/bk3.png')
        },
        {
            id: 10,
            title: 'Salma Saeed',
            image: require('./assets/salma6.png'),
            value: require('./assets/150QAR.png'),
            image1: require('./assets/nurse2.png'),
            image2: require('./assets/bk3.png')
        },
        {
            id: 11,
            title: 'Salma Saeed',
            image: require('./assets/salma6.png'),
            value: require('./assets/150QAR.png'),
            image1: require('./assets/nurse2.png'),
            image2: require('./assets/bk3.png')
        }
    ]
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={{ flexDirection: 'row', height: 50, margin: 16, }}>
                <Image
                    style={{ height: 60, width: 60 }}
                    source={item.image} />
                <TouchableOpacity onPress={() => props.navigation.navigate('Contact')}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, left: 20 }}>{item.title}</Text>
                </TouchableOpacity>


                <Image style={{ left: 90, position: 'absolute', bottom: -10, left: 294 }}
                    source={item.value} />
            </View>
            <View style={{ alignItems: 'center', }}>
                <Text style={{ fontSize: 10, position: 'absolute', top: -25, left: 108, marginTop: -10 }}>Nursco Nursing Company </Text>
                <Image style={{ position: 'absolute', top: -182, right: 10 }}
                    source={item.image2} />
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ position: 'absolute', bottom: 6, right: 60, height: 14, width: 10 }}
                        source={item.image1} />
                    <Text style={{ fontSize: 12, position: 'absolute', bottom: 6, right: 10, marginTop: 0 }}>Nursing</Text>
                </View>
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.blueContainer} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['#3882D8', '#33A7C1', '#2ECBAA']}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('./assets/arrow1.png')}
                        style={{ top: 25, right: 130 }} />
                    <Text style={{ color: 'white', fontSize: 22, marginTop: 20 }}>Saved</Text>
                </View>
            </LinearGradient>
            <FlatList style={{ marginTop: -40, }}
                data={DATA}
                renderItem={renderItem} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    blueContainer: {
        height: '17%',
        width: '100%',
        backgroundColor: '#387FDA',
        alignItems: 'center',
        paddingVertical: 20

    },
    itemContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        top: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 100
    }

})