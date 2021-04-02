import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native'
import {Button} from 'react-native-elements'
import {Props} from '../../../App'

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

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    position: 'relative',
    padding: 20,
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  imgContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {
    flex: 0.6,
    padding: 20,
    justifyContent: 'space-around',
  },
  img: {
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 38,
    color: '#fff',
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#0D9F67',
    height: 60,
  },
  signIn: {
    height: 60,
  },
})
