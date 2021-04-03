import Card from 'components/molecules/Card'
import React from 'react'
import {View, Text, FlatList} from 'react-native'
import styles from './styles'

const CustomCard = () => {
  const data = [
    {
      title: 'Hello',
      desctiprion: 'hello',
      photo:
        'https://img.freepik.com/free-vector/realistic-coffee-background-with-drawings_79603-603.jpg?size=626&ext=jpg',
    },
    {
      title: 'Hello',
      desctiprion: 'hello',
      photo:
        'https://img.freepik.com/free-vector/realistic-coffee-background-with-drawings_79603-603.jpg?size=626&ext=jpg',
    },
    {
      title: 'How are you what are you doing',
      desctiprion: 'hello',
      photo:
        'https://img.freepik.com/free-vector/realistic-coffee-background-with-drawings_79603-603.jpg?size=626&ext=jpg',
    },
    {
      title: 'Hello',
      desctiprion: 'hello',
      photo:
        'https://img.freepik.com/free-vector/realistic-coffee-background-with-drawings_79603-603.jpg?size=626&ext=jpg',
    },
  ]
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-evenly',
        }}
        renderItem={({item}) => (
          <Card
            title={item.title}
            description={item.desctiprion}
            photo={item.photo}
          />
        )}
        keyExtractor={({item}, index) => index}
      />
    </View>
  )
}

export default CustomCard
