import React, {Component} from 'react'
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native'
import {height, width } from './Constant/constant'
import LinearGradient from 'react-native-linear-gradient'

export default class Guest extends Component { 
    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.view5}>
                    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                    style={styles.view6} colors={['#673EBD', '#7C48C3', '#B564D2']}>

                    <View style = {{width : 136, height : 136, backgroundColor : '#fff', borderRadius : 68, alignItems : 'center',justifyContent : 'center'}}> 
                        <Image 
                        source = {require ('./assets/coffee1.png')}/>
                        </View>

                        </LinearGradient>
                    <View style = {{alignItems : 'center', marginTop : 50}}>
                        <Text style = {{fontSize : 28.43}}> Guests Serving </Text>
                    </View>
                    <View style = {{alignItems : 'center',justifyContent : 'center', padding : 30, }}>
                        <Text style = {{fontSize : 16, alignSelf : 'center'}}> Lorum Ipsum  is  simply dummy text of the  printing and typesetting industry </Text>
                    </View>

                </View>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.button1} colors={['#2ECBAA', '#33A5C2', '#387FDA']} >
                        <TouchableHighlight
                         >
                            <Text style={styles.buttonText1}> Send </Text>
                        </TouchableHighlight>
                    </LinearGradient>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#eee',
        marginTop  : 20
    },
    view5: {
        elevation : 4,
        height : height * 0.65,
        width : width * 0.85,
        backgroundColor : '#fff',  
        marginTop : height * 0.1, 
        borderWidth :1,
        borderRadius : 12,
        borderColor : '#fff'
    
    },
    view6 : {
        height : 280,
        width : '100%',
        backgroundColor : '#653DBC',
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth :1,
        // borderRadius : 12,
        borderColor : "#7ad6c5",

    },
    button1 : {
        height : 50,
        width : width * 0.8,
        borderRadius : 30,
        backgroundColor : "#7ad6c5",
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 40
    },
    buttonText1 : {
        color : 'white',
        fontSize : 18
    }

})