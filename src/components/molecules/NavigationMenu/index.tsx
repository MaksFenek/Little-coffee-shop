import React from 'react'
import {ScrollView, Image} from 'react-native'
import NavigationMenuItem from './NavigationMenuItem'
import styles from './styles'

const NavigationMenu = () => {
  return (
    <ScrollView>
      <Image source={require('assets/logoGrey.png')} style={styles.image} />

      <NavigationMenuItem text="Menu" route="Menu" />
      <NavigationMenuItem text="Welcome" route="Welcome" />
    </ScrollView>
  )
}

export default NavigationMenu
