import 'react-native-gesture-handler'
import React from 'react'
import WelcomePage from './src/components/pages/WelcomePage'
import {NavigationContainer} from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'

export type RootStackParamList = {
  Welcome: undefined
  SignUp: undefined
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
