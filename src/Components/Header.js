import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native'
import { width, height } from '../Constant/constant'
export default class Header extends Component {
    render() {
        console.log(this.props)
        const { title } = this.props
        return (

            <View style={styles.view1}>
                <Image style={{ left: 10, height: 18, width: 4 }}
                    source={require('./../assets/dot.png')} />

                <Text style={styles.text}> {title}</Text>

                <Image style={{ height: 19.5, width: 15.17, right: 10 }}
                    source={require('./../assets/bk1.png')} />

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',

    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.9,
        marginHorizontal: width * 0.05,
        marginTop: height * 0.02,
        // borderWidth : 1
    },
    text: {
        fontSize: 22,
        color: '#fff',
        fontFamily: 'MontserratAlternates-Regular',
       
    },
    view2: {

        backgroundColor: '#387FDA',
        height: width * 4,
        width: width * 4,
        borderRadius: width * 3,
        position: 'absolute',
        top: -width * 3.25,

    },

})