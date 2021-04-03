import 'react-native-gesture-handler'
import React from 'react'
import WelcomePage from 'components/pages/WelcomePage'
import {NavigationContainer} from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import SignUpPage from 'components/pages/SignUpPage'
import SignInPage from 'components/pages/SignInPage'
import MenuPage from 'components/pages/MenuPage'
import {Provider} from 'react-redux'
import store from 'redux/rootReducer'
import {getAllProducts} from 'api/firebase'

export type RootStackParamList = {
  Welcome: undefined
  SignUp: undefined
  SignIn: undefined
  Menu: undefined
}
export type Props = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator<RootStackParamList>()
getAllProducts()
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            options={{headerTitleAlign: 'center'}}
            component={MenuPage}
          />
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
            component={SignInPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
