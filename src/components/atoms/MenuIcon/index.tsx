import React, {memo} from 'react'
import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import styles from './styles'

interface IMenuIcon extends TouchableOpacityProps {}

const index: React.FC<IMenuIcon> = ({...props}) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.container}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
    </TouchableOpacity>
  )
}

export default memo(index)
