import React from 'react'
import {View, Image, ViewProps, ImageBackground} from 'react-native'
import styles from './styles'

interface ISignHeader extends ViewProps {}

const SignHeader: React.FC<ISignHeader> = ({...props}) => {
  return (
    <View style={styles.container} {...props}>
      <ImageBackground
        style={styles.bg}
        source={require('assets/SignUpBg.jpg')}>
        <Image style={styles.logo} source={require('assets/logo.png')} />
      </ImageBackground>
    </View>
  )
}

export default SignHeader
