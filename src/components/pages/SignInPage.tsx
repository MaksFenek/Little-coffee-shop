import React from 'react'
import {StyleSheet, SafeAreaView, KeyboardAvoidingView} from 'react-native'
import SignHeader from 'components/molecules/SignHeader'
import {Input, Button} from 'react-native-elements'

const SignInPage = () => {
  return (
    <SafeAreaView style={styles.main}>
      <SignHeader />
      <KeyboardAvoidingView style={styles.form}>
        <Input autoCompleteType="username" placeholder="Username" />
        <Input autoCompleteType="password" placeholder="Password" />
      </KeyboardAvoidingView>
      <Button buttonStyle={styles.button} title="Sign in" />
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
    justifyContent: 'center',
  },
  button: {
    height: 60,
    margin: 10,
  },
})
