import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'

const Loader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container ]} >
        <LottieView source={require('../../assets/loading.json')} autoPlay loop  />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})