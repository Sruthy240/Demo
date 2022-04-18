import React,{Component} from 'react'
import { View, StyleSheet, Text, FlatList} from 'react-native'
export default class new extends Component{

    constructor (){
        super()
        this.state = {
            DATA : []
        }
    }
    getData (){
        fetch ('')
        .then( (response) => response.json())
        .then ( (response) => {
            this.setState({ DATA :  response})
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    componentDidMount (){
        this.getData()
    }
    render(){
const renderItem = ( {item}) => (
    <View>
        <Text>{item.title}</Text>
    </View>
)
        return(
            <View>
                <FlatList 
                data = {this.state.DATA}
                renderItem = {renderItem}/>
            </View>
        )
    }
}