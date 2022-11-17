import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Result = ({navigation, route}) => {

    const {score} = route.params;

  return (

    <View style={styles.conatainer}>
        <Title titleText='Result' />
        <Text style={styles.score}>{score}</Text>
      <View style ={styles.bannerContainer}>
        {
            score >= 15 ? <View>
                <Image source={require('../../assets/success.png')} 
            style={styles.banner}
            resizeMode='contain'
            />
            <Text style={styles.result}>Great!!</Text>
            </View> : <View>
                <Image source={require('../../assets/sorry.png')} 
            style={styles.banner}
            resizeMode='contain'
            />
            <Text style={styles.result}>Keep Trying!!</Text>
            </View>
        }
        
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
            <Text style={{color: 'white'}}>Home</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Result

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
    },
    score: {
        fontSize: 35,
        fontWeight: '800',
        alignSelf: 'center',
        color: 'white'
    },
    result: {
        fontSize: 36,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    }
});
