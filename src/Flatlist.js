import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'
import { height, width } from './Constant/constant'
import LinearGradient from 'react-native-linear-gradient'

export default class FlatList extends Component {

    render() {
        return (

            <View style={styles.container}>
                <ScrollView horizontal={true}>

                    <View style={styles.view1}>
                        <View style={styles.view2}>

                            <View style={{ width: 136, height: 136, backgroundColor: '#fff', borderRadius: 68, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('./assets/house.png')} />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 70 }}>
                            <Text style={{ fontSize: 28.43 }}> Home Services </Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 30, }}>
                            <Text style={{ fontSize: 16, }}> Lorum Ipsum  is  simply dummy text of the  printing and typesetting industry </Text>
                        </View>
                    </View>



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


                    <View style={styles.view5}>
                        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                            style={styles.view6} colors={['#673EBD', '#7C48C3', '#B564D2']}>

                            <View style={{ width: 136, height: 136, backgroundColor: '#fff', borderRadius: 68, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('./assets/coffee1.png')} />
                            </View>

                        </LinearGradient>
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <Text style={{ fontSize: 28.43 }}> Guests Serving </Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 30, }}>
                            <Text style={{ fontSize: 16, alignSelf: 'center' }}> Lorum Ipsum  is  simply dummy text of the  printing and typesetting industry </Text>
                        </View>

                    </View>

                </ScrollView>
            </View >
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        margin: 30

    },
    view1: {
        elevation: 4,
        height: height * 0.65,
        width: width * 0.85,
        backgroundColor: '#fff',
        marginTop: height * 0.1,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#fff'
    },
    view2: {
        height: 280,
        width: '100%',
        backgroundColor: '#F93BC5',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        // borderRadius : 12,
        borderColor: "#7ad6c5",

    },
    view3: {
        elevation: 4,
        height: height * 0.65,
        width: width * 0.85,
        backgroundColor: '#fff',
        marginTop: height * 0.1,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#fff'
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

    },
    view6: {
        height: 280,
        width: '100%',
        backgroundColor: '#653DBC',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        // borderRadius : 12,
        borderColor: "#7ad6c5",

    },
    button: {
        height: 50,
        width: width * 0.8,
        borderRadius: 30,
        backgroundColor: "#7ad6c5",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    button1: {
        height: 50,
        width: width * 0.8,
        borderRadius: 30,
        backgroundColor: "#7ad6c5",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    buttonText1: {
        color: 'white',
        fontSize: 18
    },
    view5: {
        elevation: 4,
        height: height * 0.65,
        width: width * 0.85,
        backgroundColor: '#fff',
        marginTop: height * 0.1,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#fff'

    }


})