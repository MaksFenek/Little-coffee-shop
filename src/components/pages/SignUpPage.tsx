import React from 'react'
import {StyleSheet, SafeAreaView, Image, ScrollView} from 'react-native'
import {Input, Button} from 'react-native-elements'

const SignUpPage = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Image style={styles.bg} source={require('../../assets/SignUpBg.jpg')} />
      <ScrollView style={styles.form}>
        <Input
          style={styles.input}
          autoCompleteType="name"
          placeholder="Name"
        />
        <Input
          style={styles.input}
          autoCompleteType="email"
          placeholder="Email"
        />
        <Input
          style={styles.input}
          autoCompleteType="username"
          placeholder="Username"
        />
        <Input
          style={styles.input}
          autoCompleteType="password"
          placeholder="Password"
        />
      </ScrollView>
      <Button buttonStyle={styles.button} title="Sign up" />
    </SafeAreaView>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bg: {
    flex: 0.9,
  },
  form: {
    flex: 0.5,
  },
  input: {
    height: 60,
  },
  button: {
    height: 60,
    backgroundColor: '#0D9F67',
    borderRadius: 0,
  },
})
