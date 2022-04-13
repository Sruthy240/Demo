import React,{Component} from 'react'
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native'
import { height, width} from './Constant/constant'
export default class Home extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.view1}>
                    <View style={styles.view2}>
                        
                        <View style = {{width : 136, height : 136, backgroundColor : '#fff', borderRadius : 68, alignItems : 'center',justifyContent : 'center'}}> 
                        <Image source = {require ('./assets/house.png')}/>
                        </View>
                        </View>
                    <View style = {{alignItems : 'center', marginTop : 70}}>
                        <Text style = {{fontSize : 28.43}}> Home Services </Text>
                    </View>
                    <View style = {{alignItems : 'center',justifyContent : 'center', padding : 30, }}>
                        <Text style = {{fontSize : 16,}}> Lorum Ipsum  is  simply dummy text of the  printing and typesetting industry </Text>
                    </View>
                </View>
                <TouchableHighlight >
                    <Text style = {{marginTop : 100, color : '#AFABC4'}}> Skip </Text>
                </TouchableHighlight>
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
        
    },
    view1: {
        elevation : 4,
        height : height * 0.65,
        width : width * 0.85,
        backgroundColor : '#fff',  
        marginTop : height * 0.1, 
        borderWidth :1,
        borderRadius : 12,
        borderColor : '#fff'
    },
    view2 : {
        height : 280,
        width : '100%',
        backgroundColor : '#F93BC5',
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth :1,
        // borderRadius : 12,
        borderColor : "#7ad6c5",
        

    }
})