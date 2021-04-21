import {useNavigation} from '@react-navigation/native'
import Card from 'components/molecules/Card'
import NavigationMenu from 'components/molecules/NavigationMenu'
import {ProductInfo} from 'GeneralTypes'
import React, {useCallback, useEffect, useState} from 'react'
import {View, FlatList, DrawerLayoutAndroid} from 'react-native'
import {useSelector} from 'react-redux'
import {RootReducerInterface} from 'redux/types'
import {Props} from '../../../../App'
import styles from './styles'

interface IMenuPage {
  drawerRef: React.RefObject<DrawerLayoutAndroid>
}

const MenuPage: React.FC<IMenuPage> = ({drawerRef}) => {
  const state = useSelector((store: RootReducerInterface) => store.products)
  const [data, setData] = useState<ProductInfo[]>()
  const {navigate} = useNavigation<Props>()

  useEffect(() => {
    setData(
      state.products.map(item => ({
        name: item.name,
        photo: item.photo,
        description: item.description,
      })),
    )
  }, [state.products])

  const handleNavigate = useCallback(
    (title: string) => {
      navigate('Product', {name: title})
    },
    [navigate],
  )

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={NavigationMenu}>
      <View style={styles.container}>
        {state.products.length !== 0 && (
          <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={({item}) => (
              <Card
                title={item.name}
                description={item.description}
                photo={item.photo}
                navigateFunction={handleNavigate}
              />
            )}
            keyExtractor={item => item.name}
          />
        )}
      </View>
    </DrawerLayoutAndroid>
  )
}

export default MenuPage
