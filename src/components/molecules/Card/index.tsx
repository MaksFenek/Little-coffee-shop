import React from 'react'
import {
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import {Card} from 'react-native-elements'
import styles from './styles'

interface ICard extends TouchableOpacityProps {
  title: string
  description: string
  photo: string
}

const index: React.FC<ICard> = ({title, description, photo, ...props}) => {
  return (
    <Card containerStyle={styles.container}>
      <TouchableOpacity {...props}>
        <View>
          <ImageBackground style={styles.imageBg} source={{uri: photo}} />
        </View>
        <View style={styles.section}>
          <Card.Title style={styles.title}>{title}</Card.Title>
          <Card.FeaturedSubtitle style={styles.description}>
            {description}
          </Card.FeaturedSubtitle>
        </View>
      </TouchableOpacity>
    </Card>
  )
}

export default index
