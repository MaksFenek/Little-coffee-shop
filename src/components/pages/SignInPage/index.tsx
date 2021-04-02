import React from 'react'
import {SafeAreaView, KeyboardAvoidingView} from 'react-native'
import SignHeader from 'components/molecules/SignHeader'
import {Input, Button} from 'react-native-elements'
import styles from './styles'

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
