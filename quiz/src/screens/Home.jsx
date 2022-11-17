import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HomePage } from '../components/Loader';
import Title from '../components/Title'

const Home = ({navigation}) => {

    const homePage = <HomePage/>
  return (
    <View style={styles.conatainer}>
      <Title titleText='Quiz'/>
      <View style ={styles.bannerContainer}>
        <Image source={require('../../assets/homepage.png')} 
        style={styles.banner}
        resizeMode='contain'
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button} >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    conatainer: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: '#6A5AE0'
    },
    button: {
        width: '100%',
        backgroundColor: '#FF8A3C',
        padding: 16,
        borderRadius: 16,
        alignItems:'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff'
    }
});