 import React, { Component } from 'react'
 import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet,
 } from 'react-native'

 export default class MainScreen extends Component {
   render() {
     return (
       <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Awesome Support</Text>
          <Text style={styles.subTitle}>Please click to get help!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Help</Text>
          </TouchableOpacity>
        </View>
       </View>
     )
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#36c4c0',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#B66431',
  },
  subTitle: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    borderRadius: 150,
    borderWidth: 10,
    borderColor: '#94f249',
    backgroundColor: '#d9fe49',
    padding: 30,
    elevation: 5,
    shadowColor: '#5ADD49',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.6,
    shadowRadius: 0,
  },
  buttonText: {
    color: '#2b5a9c',
    fontSize: 60,
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});
