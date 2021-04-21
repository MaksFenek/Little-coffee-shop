import React, {memo} from 'react'
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
  navigateFunction: (title: string) => void
}

const MyCard: React.FC<ICard> = ({
  title,
  description,
  photo,
  navigateFunction,
  ...props
}) => {
  const handlePress = () => {
    navigateFunction(title)
  }
  return (
    <Card containerStyle={styles.container}>
      <TouchableOpacity onPress={handlePress} {...props}>
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

export default memo(MyCard)
