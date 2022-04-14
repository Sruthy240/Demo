import React, { useState, useRef } from 'react'
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native'
import { height, width } from './Constant/constant'
import LinearGradient from 'react-native-linear-gradient'

const pageStyle = isActive =>
    isActive ? { backgroundColor: '#3D989F' } : { backgroundColor: 'gray' }

const Pagination = ({ index }) => {
    return (
        <View style={styles.pageContainer}>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
        </View>
    )
}
export default function Screens() {
    // console.log(width * 0.093)
    const DATA = [
        {
            id: 1,
            title: "Home Services",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            image: require('./assets/house.png'),
            width: width * 0.165, height: height * 0.08,
            backgroundColor: ['#F93BC5', '#F938B7', '#FA2E8B'],
            button: 'skip',
            scrollHeight: height * 0.006,
            scrollWidth: width * 0.093,
            scrollColor: '#3D989F'
        },
        {
            id: 2,
            title: "Nursing",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            image: require('./assets/nurse.png'),
            width: width * 0.13, height: height * 0.082,
            backgroundColor: ['#387FDA', '#33A6C1', '#2ECBAA'],
            scrollHeight: height * 0.006,
            scrollWidth: width * 0.093,
            scrollColor: '#3D989F'
        },
        {
            id: 3,
            title: "Guests Services",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            image: require('./assets/coffee1.png'),
            width: width * 0.17, height: height * 0.066,
            backgroundColor: ['#653DBC', '#9856CA', '#B865D3'],
            scrollHeight: height * 0.006,
            scrollWidth: width * 0.093,
            scrollColor: '#3D989F'

        },
    ]
    const renderItem = ({ item }) => (

        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                colors={item.backgroundColor} style={{
                    height: height * 0.332, width: width * 0.9, alignItems: 'center', justifyContent: 'center',
                    borderColor: item.color, borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                }}   >
                <View style={{ height: height * 0.162, width: width * 0.35, borderRadius: height * 0.162, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: -60 }}>
                    <Image style={{ width: item.width, height: item.height, }}
                        source={item.image} />
                </View>
            </LinearGradient>
            <View style={{ alignItems: 'center', marginTop: 50, }}>
                <Text style={{ fontSize: 28.43, fontFamily: 'MontserratAlternates-Regular', }}> {item.title} </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, textAlign: 'center', padding: 40, fontFamily: 'MontserratAlternates-Regular' }}> {item.description}</Text>
            </View>
        </View>
    )
    const [welcomeListIndex, setWelcomeListIndex] = useState(0)
    const welcomeList = useRef()
    const onViewRef = useRef(({ changed }) => {
        setWelcomeListIndex(changed[0].index);
    })
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex
        })
    }
    return (

        <View style={{ alignItems: 'center', }}>
            <FlatList style={{ marginTop: 150, height: height * 0.65, }}
                ref={welcomeList}
                data={DATA} horizontal={true}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
            />
            <Pagination index={welcomeListIndex} />
            <TouchableOpacity style={{}}
                onPress={() => pageScroll()}>
                <Text style={{ fontFamily: 'MontserratAlternates-Regular', fontSize: 16, color: '#C8C8E9' }}> Skip </Text>
            </TouchableOpacity>
            <View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        width: width * 0.9,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        margin: 10,
        borderRadius: 14
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
    pageContainer: {
        flexDirection: 'row',
        marginVertical: 40
    },
    page: {
        height: height * 0.006,
        width: width * 0.093,
        backgroundColor: "#349EC6",
        borderRadius: 32,
        marginHorizontal: 5
    }
})