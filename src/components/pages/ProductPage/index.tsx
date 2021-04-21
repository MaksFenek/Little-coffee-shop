import {RouteProp, useNavigation} from '@react-navigation/native'
import {StackScreenProps} from '@react-navigation/stack'
import {ProductsCollection, ProductsItem} from 'GeneralTypes'
import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
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

  return <View>{state?.name && <Text>{state.description}</Text>}</View>
}

export default ProductPage
