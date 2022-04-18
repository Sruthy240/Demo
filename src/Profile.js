import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { height, width } from './Constant/constant'
import Header from './Components/Header'
export default class Profile extends Component {
  render() {
    // console.log(height * 0.8);
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient style={styles.blueContainer} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3882D8', '#33A7C1', '#2ECBAA']} >
        </LinearGradient>
        <Header title='Profile' />
        <View style={{
          flex: 1, marginTop: height * 0.04, width: width * 0.9, shadowColor: "#000", shadowOffset: { width: 2, height: 2, }, shadowOpacity: 0.25, shadowRadius: 6, elevation: 8,
        }}>
          <View style={{ backgroundColor: '#fff', marginTop: height * 0.08, alignItems: 'center', borderRadius: 10, marginVertical: 10, }}>
            <Image style={{ width: width * 0.29, height: width * 0.29, borderRadius: width * 0.15, marginTop: -width * 0.15, }} source={require('./assets/salma.png')} />
            <Image style={{ position: 'absolute', top: 20, right: 20 }}
              source={require('./assets/bk4.png')} />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')}>
              <Text style={{ fontFamily: 'MontserratAlternates-Bold', fontSize: 22, marginTop: 8 }}>Salma Saeed</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginVertical: 8 }}>
              <Image source={require('./assets/nurse2.png')} />
              <Text style={{ fontSize: 16, fontFamily: 'MontserratAlternates-Light', }}> Nursing </Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 5, width: width * 0.9, alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 8 }} >
              <LinearGradient style={{ height: width * 0.12, width: width * 0.12, borderRadius: width * 0.06, alignItems: 'center', justifyContent: 'center', }} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['#653DBC', '#9A57CB', '#B865D3']}>
                <Image source={require('./assets/call.png')} />
              </LinearGradient>
              <LinearGradient style={{ height: width * 0.12, width: width * 0.12, borderRadius: width * 0.06, alignItems: 'center', justifyContent: 'center' }} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F93BC5', '#FA34A5', '#FA2E89']}>
                <Image source={require('./assets/mail.png')} />
              </LinearGradient>
              <LinearGradient style={{ height: width * 0.12, width: width * 0.12, borderRadius: width * 0.06, alignItems: 'center', justifyContent: 'center' }} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['#387FDA', '#33A7C0', '#2ECBAA']}>
                <Image source={require('./assets/watsapp1.png')} />
              </LinearGradient>
            </View>
            <View style={{ width: width * 0.8, borderColor: '#F1F4FB', marginTop: 10, borderWidth: 1 }}></View>
            <View style={{ flexDirection: 'row', width: width * 0.9, marginVertical: 10, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'column', flex: 1, paddingHorizontal: 22, }}>
                <Text style={{ color: '#AFABC4', fontFamily: 'MontserratAlternates-Regular', fontSize: 10, marginBottom: 8 }}> Hourly Rate </Text>
                <Text style={{ fontSize: 16, fontFamily: 'MontserratAlternates-Semibold' }}>150 QAR</Text>
              </View>
              <View style={{ flex: 1, }}>
                <Text style={{ color: '#AFABC4', fontFamily: 'MontserratAlternates-Regular', fontSize: 10, marginBottom: 8 }}>Nationality</Text>
                <Text style={{ fontSize: 16, fontFamily: 'MontserratAlternates-Semibold' }}>Philippine</Text>
              </View>
            </View>
            <View style={{ width: width * 0.9, justifyContent: 'space-around', }}>
              <Text style={{ fontSize: 10, fontFamily: 'MontserratAlternates-Regular', color: '#AFABC4', paddingHorizontal: 20, marginBottom: 8, marginTop: 5 }}>Company Name</Text>
              <Text style={{ fontSize: 16, fontFamily: 'MontserratAlternates-Semibold', paddingHorizontal: 22, marginBottom: 22 }}>Nursco Nursing Company</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, width: width * 0.9, shadowColor: "#000", shadowOffset: { width: 2, height: 2, }, shadowOpacity: 0.25, shadowRadius: 6, elevation: 8, padding: 15, borderColor: '#fff', alignItems: 'center', }}>
          <View style={{ backgroundColor: '#fff', marginTop: height * 0.08, alignItems: 'baseline', borderRadius: 10, width: width * 0.9, padding: 20, }}>
            <Text style={{ fontSize: 10, fontFamily: 'MontserratAlternates-Regular', color: '#AFABC4' }}> About Me </Text>
            <Text style={{ fontSize: 14, fontFamily: 'MontserratAlternates-Light', alignSelf: 'center', textAlign: 'justify', padding: 20, }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  blueContainer: {
    width: width,
    height: '32%',
    backgroundColor: '#387FDA',
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute'
    // paddingVertical: 50,
  },
})
