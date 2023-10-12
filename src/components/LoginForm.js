import { TextInput, Button, Text, View } from 'react-native'

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder='email' />
      <TextInput placeholder='password' />
      <Button title='Enviar' onPress={() => console.log('Presionado')} />
    </View>
  )
}