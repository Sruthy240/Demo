import React, {Component} from 'react'
import {View, StyleSheet, Image,Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


export default class Service2 extends Component {
    render (){
        return (
            <View style = {styles.container}>
                <View style = {styles.view2}>
                    <Text style = {styles.text1}> Services </Text>
                    <View style = {{marginTop : 20, alignItems : 'center',justifyContent : 'center', }}>
                        <Image source = {require('./assets/cs.png')}/>
                        <View style = {{padding : 20, alignItems : 'center', justifyContent : 'center'}}>
                        <Text style = {styles.textView}>What Services you are looking for ?</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.view3}>
                <LinearGradient  start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F93BC5', '#FA33A0', '#FA2E89']} style={{ width: 82, height: 88, backgroundColor: '#7ad6c5', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('./assets/house1.png')} />
                    </LinearGradient>
                    <View style = {{left : 50,}}>
                    <Text style = {{fontSize :20, fontWeight : 'bold'}}> Home Services</Text>
                    </View>
        
                </View>

                <View style = {styles.view3}>
                    <View style = {{width : 82, height : 88, backgroundColor : '#7ad6c5', alignItems :'center', justifyContent : 'center'}}> 
                    <Image source = {require('./assets/nurse1.png')}/>
                    </View>
                    <View style = {{left : 50}}>
                    <Text  style = {{fontSize :20,fontWeight : 'bold'}}> Nursing</Text>
                    </View>
        
                </View>

                <View style = {styles.view3}>
                    <View style = {{width : 82, height : 88, backgroundColor : '#B865D3', alignItems :'center', justifyContent : 'center'}}> 
                    <Image source = {require('./assets/coffee.png')}/>
                    </View>
                    <View style = {{left : 50}}>
                    <Text  style = {{fontSize :20, fontWeight : 'bold'}}> Guests Serving </Text>
                    </View>
        
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems :'center',
        //justifyContent : 'center',
        backgroundColor : '#eee'
    },
    view2 : {
        height : '45%',
        width : '100%',
        backgroundColor : "#7ad6c5",
        alignItems : 'center',
        justifyContent : 'center',
      
    },
    text1 : {
        fontSize : 18,
        color: 'white'
    },
    textView : {
        color : '#fff'
    },
    view3 : {
        elevation : 4, 
        height : 80, 
        width : '90%',
         backgroundColor : '#fff',
         marginTop : 20,
         borderRadius : 10,
         alignItems :'center',
        // justifyContent : 'center',
         flexDirection :'row'       
    }
})