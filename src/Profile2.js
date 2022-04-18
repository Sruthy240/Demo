import React, {Component} from 'react'
import {View, StyleSheet, ScrollView,Text, Image} from 'react-native'

export default class Profile2 extends Component {
  render (){
    return (
      
        <View style = {styles.scrollContainer}>
          <View style = {styles.container}>
            <View style = {{flexDirection :'row'}}>
              <Text style = {{color : '#fff', fontSize : 20,marginTop : 10}}> Profile</Text>
              <View style = {{position : 'absolute', top : 20, left : 180}}>
              <Image source = {require('./assets/bk1.png')}/>
              </View>
  
            
            </View>
            
          
          </View>
          
          <View style = {styles.headerCard}>
            <View style = {{ borderRadius : 25, alignItems : 'center', justifyContent : 'center'}}>
              <Image
              source= {require('./assets/salma.png')}/>
              <Text style = {{fontWeight : 'bold'}}> Salma Saeed </Text>
              <Text>Nursing</Text>
              <View style = {{flexDirection :'row'}}>
             <Image source = {require ('./assets/group.png')} />
              </View>
              <View style = {{flexDirection :'row'}}>
                <Text style = {{marginRight : 100 , fontWeight : 'bold'}}> 150 QAR </Text>
                <Text style = {{fontWeight : 'bold'}}> Philippine </Text>

               
              
              </View>
              <View style = {{flexDirection : 'column', marginTop : 20}}>
                  <Text style = {{fontWeight : 'bold'}}>Nursco Nursing Company </Text>
              </View>

            </View>

           

          </View>
          <View style = {styles.card}> 

          <Image style = {styles.image} 
          source = {require ('./assets/text.png')}/>

          </View>

        </View>

      
    )
  }
}
const styles = StyleSheet.create({
  scrollContainer : {
  width : '100%',
  height :'100%',
  alignItems : 'center',
  justifyContent : 'center',
  backgroundColor : '#eee'
  },
  container : {
    width : '100%',
    height : '30%',
    backgroundColor : '#387FDA',
    alignItems : 'center',
    justifyContent : 'center'
   
  },
  headerCard : {
    width : '85%',
    height : '40%',
    padding : 15,
    backgroundColor : '#fff',
    elevation : 4,
    margin :20,
    marginTop : -70
   
  },
  card : {
    width : '85%',
    height : '30%',
    padding : 15,
    backgroundColor : '#fff',
    elevation : 4
  },
  image : {
    height : 30,
    width : 30,
    borderRadius : 15,
  
  }
})