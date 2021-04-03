import Card from 'components/molecules/Card'
import {ProductInfo} from 'GeneralTypes'
import React, {useEffect, useState} from 'react'
import {View, FlatList} from 'react-native'
import {useSelector} from 'react-redux'
import {RootReducerInterface} from 'redux/types'
import styles from './styles'

const CustomCard: React.FC = () => {
  const state = useSelector((store: RootReducerInterface) => store.products)
  const [data, setData] = useState<ProductInfo[]>()

  useEffect(() => {
    setData(
      state.products.map(item => ({
        name: item.name,
        photo: item.photo,
        description: item.description,
      })),
    )
  }, [state.products])

  return (
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
            />
          )}
          keyExtractor={item => item.name}
        />
      )}
    </View>
  )
}

export default CustomCard
