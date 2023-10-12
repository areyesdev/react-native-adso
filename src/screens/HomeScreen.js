import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
  const { navigation } = props
  const goToLogin = () => {
    navigation.navigate('Login')
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={goToLogin} title='Ir a Login' />
    </View>
  )
}