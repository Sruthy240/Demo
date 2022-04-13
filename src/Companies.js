import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { width, height } from './Constant/constant';


export default function Companies(props) {
    console.log(height * 0.371);
    const DATA = [
        {
            id: 1,
            title: 'Lexiang Company',
            image: require('./assets/image1.png')

        },
        {
            id: 2,
            title: 'Flexcare Medical Staffing',
            image: require('./assets/image2.png')

        },
        {
            id: 3,
            title: 'Travel Nurse',
            image: require('./assets/image1.png')

        },
        {
            id: 4,
            title: 'Fusion Medical Staffing',
            image: require('./assets/image3.png')

        },
        {
            id: 5,
            title: 'Atlas Medstaff',
            image: require('./assets/image4.png')

        },
        {
            id: 6,
            title: 'or Nurses Nationwide',
            image: require('./assets/image1.png')

        },
    ];
    const renderItem = ({ item, index }) => {
   
       return <View style={styles.itemContainer}>
            <Image style={{ height: 90, width: 90 }}
                source={item.image} />
            <Text style={{ fontFamily: 'MontserratAlternates-Medium', fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
        </View>
     }
    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0.5, y: 1}} colors={['#2ECBAA', '#339DC9', '#367FDD']}
                style={[styles.blueContainer,]}>
                <View style={{ flexDirection: 'row', width : width, paddingHorizontal : width * 0.05, alignItems : 'center', justifyContent :'space-between', height : height * 0.07}}>
                    {/* <View style={{ top: 25, position: 'absolute', right: 220 }}> */}
                        <Image style={{ height: 22 }} source={require('./assets/arrow1.png')} />
                    {/* </View> */}
                    {/* <View style={{ }}> */}
                        <Text style={{ color: '#fff', fontSize: 22, fontFamily: 'MontserratAlternates-Medium' , }}> Companies </Text>

                    {/* </View> */}
                    {/* <View style={{top: 25, position: 'absolute', left: 220  }}> */}
                        <Image source={require('./assets/bk1.png')} />
                    {/* </View> */}
                </View>
                <View style={{ marginTop: height * 0.03, flexDirection: 'row' ,}}>
                    <View style={{ position: 'absolute', top: 18, left: 10 }}>
                        <Image source={require('./assets/search.png')} />
                    </View>
                    <View style={{}}>
                        <TextInput placeholder='Search'
                            placeholderTextColor='#afabc4'
                            style={styles.inputText} />
                    </View>
                </View>
            </LinearGradient>


            <FlatList style={{ marginTop: -45, padding: 5 }}
                data={DATA}
                renderItem={renderItem}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    blueContainer: {
        height: height * 0.28,
        width: width,
        backgroundColor: '#387FDA',
        alignItems: 'center',
        paddingVertical: 35

    },
    inputText: {
        height: 53,
        width: 313,
        borderWidth: 1,
        borderColor: '#afabc4',
        borderRadius: 8,
        paddingLeft: 40,
        fontSize: 16,
        fontFamily: 'MontserratAlternates-Light'
    },
    itemContainer: {
        height: height * 0.12,
        backgroundColor: '#fff',
        marginHorizontal: 12,
        marginBottom: 14,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 8,
        padding: 10,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    }

});
