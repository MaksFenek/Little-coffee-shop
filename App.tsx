import 'react-native-gesture-handler'
import React from 'react'
import WelcomePage from './src/components/pages/WelcomePage'
import {NavigationContainer} from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import SignUpPage from './src/components/pages/SignUpPage'

export type RootStackParamList = {
  Welcome: undefined
  SignUp: undefined
  SignIn: undefined
}
export type Props = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator<RootStackParamList>()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{headerShown: false}}
          component={WelcomePage}
        />
        <Stack.Screen
          name="SignUp"
          options={{
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitle: 'Sign Up',
            headerTitleStyle: {
              color: '#fff',
            },
          }}
          component={SignUpPage}
        />
        <Stack.Screen
          name="SignIn"
          options={{
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitle: 'Sign In',
            headerTitleStyle: {
              color: '#fff',
            },
          }}
          component={SignUpPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
