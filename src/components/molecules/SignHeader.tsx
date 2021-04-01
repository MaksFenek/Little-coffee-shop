import React from 'react'
import {StyleSheet, View, Image, ViewProps, ImageBackground} from 'react-native'

interface ISignHeader extends ViewProps {}

const SignHeader: React.FC<ISignHeader> = ({...props}) => {
  return (
    <View style={styles.container} {...props}>
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/SignUpBg.jpg')}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    height: 125,
    width: 125,
    alignSelf: 'center',
  },
})

export default SignHeader
