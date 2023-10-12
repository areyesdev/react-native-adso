import { SafeAreaView, StyleSheet, Text, View } from 'react-native-web'
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack'


const LoginScreen = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
})


export default LoginScreen