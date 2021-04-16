import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Props, RootStackParamList} from '../../../../../App'
import styles from './styles'

interface INavigationMenuItem {
  text: string
  route: keyof RootStackParamList
}

const NavigationMenuItem: React.FC<INavigationMenuItem> = ({text, route}) => {
  const {navigate} = useNavigation<Props>()

  const handlePress = () => {
    navigate(route)
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NavigationMenuItem
