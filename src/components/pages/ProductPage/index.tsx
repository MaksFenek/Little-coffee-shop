import {useNavigation} from '@react-navigation/native'
import {StackScreenProps} from '@react-navigation/stack'
import Card from 'components/molecules/Card'
import {ProductsCollection} from 'GeneralTypes'
import React, {useCallback, useEffect, useState} from 'react'
import {View, Text, ImageBackground, FlatList} from 'react-native'
import {useSelector} from 'react-redux'
import {RootReducerInterface} from 'redux/types'
import {Props, RootStackParamList} from '../../../../App'
import styles from './styles'

interface IProductPage
  extends StackScreenProps<RootStackParamList, 'Product'> {}

const ProductPage: React.FC<IProductPage> = ({route}) => {
  const {setOptions} = useNavigation<Props>()
  const state = useSelector((storage: RootReducerInterface) =>
    storage.products.products.find(prod => prod.name === route.params.name),
  )

  const [products, setProducts] = useState<ProductsCollection>()

  useEffect(() => {
    setOptions({title: route.params.name})
  }, [route.params.name, setOptions])

  useEffect(() => {
    if (state) {
      setProducts(state)
    }
  }, [state])

  const handleNavigate = useCallback((title: string) => {
    console.log(title)
  }, [])

  return products ? (
    <View style={styles.main}>
      <FlatList
        initialNumToRender={6}
        ListHeaderComponent={
          <View style={styles.header}>
            <ImageBackground
              style={styles.headerImg}
              source={require('assets/bg.jpg')}>
              <View style={styles.overlay} />
              <Text style={styles.title}>{products.description}</Text>
            </ImageBackground>
          </View>
        }
        data={products.products}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListEmptyComponent={
          <View>
            <Text style={styles.emptyText}>
              Sorry, but there is no anything yet :(
            </Text>
          </View>
        }
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
    </View>
  ) : (
    <View style={styles.main}>
      <Text style={styles.emptyText}>Sorry, but there is no anything :(</Text>
    </View>
  )
}

export default ProductPage
