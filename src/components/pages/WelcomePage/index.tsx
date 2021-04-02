import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Image, SafeAreaView, View, Text, ImageBackground} from 'react-native'
import {Button} from 'react-native-elements'
import {Props} from '../../../../App'
import styles from './styles'

interface IWelcomePage {}

const WelcomePage: React.FC<IWelcomePage> = ({}) => {
  const navigation = useNavigation<Props>()

  const handleSignUp = (): void => {
    navigation.navigate('SignUp')
  }

  const handleSignIn = (): void => {
    navigation.navigate('SignIn')
  }

  return (
    <SafeAreaView style={styles.bg}>
      <ImageBackground style={styles.bgImage} source={require('assets/bg.jpg')}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require('assets/logo.png')} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.text}>
            The Little Coffee Shop serves specialty {'\n'} coffee, fancy grilled
            sandwiches, {'\n'} scratch cooking, craft ales, and cider.
          </Text>
          <Button
            buttonStyle={styles.button}
            onPress={handleSignUp}
            title="Sign up"
          />
          <Button
            buttonStyle={styles.signIn}
            onPress={handleSignIn}
            title="Sign in"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default WelcomePage
