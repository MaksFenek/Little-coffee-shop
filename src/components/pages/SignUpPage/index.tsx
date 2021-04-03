import React from 'react'
import {SafeAreaView, KeyboardAvoidingView} from 'react-native'
import {Input, Button} from 'react-native-elements'
import SignHeader from 'components/molecules/SignHeader'
import styles from './styles'

const SignUpPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.main}>
      <SignHeader />
      <KeyboardAvoidingView style={styles.form}>
        <Input autoCompleteType="name" placeholder="Name" />
        <Input autoCompleteType="email" placeholder="Email" />
        <Input autoCompleteType="username" placeholder="Username" />
        <Input autoCompleteType="password" placeholder="Password" />
      </KeyboardAvoidingView>
      <Button buttonStyle={styles.button} title="Sign up" />
    </SafeAreaView>
  )
}

export default SignUpPage
