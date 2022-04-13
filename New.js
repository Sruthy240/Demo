import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'
import { height, width } from './Constant/constant'
import LinearGradient from 'react-native-linear-gradient'

export default class New extends Component{
    render(){
        return(
            <ScrollView horizontal ={true}>




            </ScrollView>
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