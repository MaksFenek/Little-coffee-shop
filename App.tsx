import 'react-native-gesture-handler'
import React, {useCallback, useRef} from 'react'
import {DrawerLayoutAndroid} from 'react-native'
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
import MenuIcon from 'components/atoms/MenuIcon'
import ProductPage from 'components/pages/ProductPage'

export type RootStackParamList = {
  Welcome: undefined
  SignUp: undefined
  SignIn: undefined
  Menu: undefined
  Product: {name: string}
}
export type Props = StackNavigationProp<RootStackParamList>

const {Navigator, Screen} = createStackNavigator<RootStackParamList>()

const App: React.FC = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null)

  const handlePress = useCallback(() => {
    drawer.current!.openDrawer()
  }, [])

  const LinkedMenuPage: React.FC = () => <MenuPage drawerRef={drawer} />

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator initialRouteName="Menu">
          <Screen
            name="Menu"
            options={{
              headerTitleAlign: 'center',
              headerLeft: () => <MenuIcon onPress={handlePress} />,
            }}
            component={LinkedMenuPage}
          />
          <Screen
            name="Product"
            options={{
              headerTitleAlign: 'center',
            }}
            component={ProductPage}
          />
          <Screen
            name="Welcome"
            options={{headerShown: false}}
            component={WelcomePage}
          />
          <Screen
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
          <Screen
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
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
