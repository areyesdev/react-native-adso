import { Text } from 'react-native'

export default function Saludar(props) {
  console.log(props)
  const { name } = props
  return <Text>Hola, {name}</Text>
}

Saludar.defaultProps = {
  name: 'Andres Fontecha'
}