import React, { Component } from 'react'
import { View, StyleSheet, Image, SafeAreaView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { height, width } from './Constant/constant'


class Splash extends Component {
    // componentDidMount() {
    //     setTimeout(() => this.props.navigation.navigate('Screens'), 2000)
    // }

    render() {

        return (<LinearGradient colors={['#387FDA', '#33A4C3', '#2ECBAA']}
            style={styles.container}>

            <Image style={{ position: 'absolute', top: 0, left: 0, width: width * 0.31, height: height * 0.226, }}
                source={require('./assets/mask.png')} />

            <Image style={{ height: height * 0.179, width: width * 0.317, }}
                source={require('./assets/one.png')} />

            <Image style={{ position: 'absolute', bottom: 0, right: 0, width: width * 0.5, height: width * 0.5, resizeMode: 'contain' }}
                source={require('./assets/Mask2.png')} />
        </LinearGradient>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2ECBAA',
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default Splash;