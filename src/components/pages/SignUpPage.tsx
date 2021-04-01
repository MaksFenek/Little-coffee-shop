import React from 'react'
import {StyleSheet, SafeAreaView, KeyboardAvoidingView} from 'react-native'
import {Input, Button} from 'react-native-elements'
import SignHeader from '../molecules/SignHeader'

const SignUpPage = () => {
  return (
    <SafeAreaView style={styles.main}>
      <SignHeader />
      <KeyboardAvoidingView style={styles.form}>
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
      </KeyboardAvoidingView>
      <Button buttonStyle={styles.button} title="Sign up" />
    </SafeAreaView>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  form: {
    flex: 0.5,
    justifyContent: 'space-around',
  },
  input: {},
  button: {
    height: 60,
    backgroundColor: '#0D9F67',
    borderRadius: 0,
  },
})
