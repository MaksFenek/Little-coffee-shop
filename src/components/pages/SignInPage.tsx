import React from 'react'
import {StyleSheet, SafeAreaView, KeyboardAvoidingView} from 'react-native'
import SignHeader from '../molecules/SignHeader'
import {Input, Button} from 'react-native-elements'

const SignInPage = () => {
  return (
    <SafeAreaView style={styles.main}>
      <SignHeader />
      <KeyboardAvoidingView style={styles.form}>
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
        <Button buttonStyle={styles.button} title="Sign up" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignInPage

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flex: 0.5,
  },
  form: {
    flex: 0.5,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderStyle: 'solid',
    borderColor: '#B7B7B7',
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 60,
    margin: 10,
  },
})
