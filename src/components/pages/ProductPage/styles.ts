import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: 200,
  },
  headerImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(197,176,142, 0.7)',
  },
  title: {
    fontSize: 28,
    color: 'white',
    zIndex: 10,
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
  },
  emptyText: {
    fontSize: 40,
  },
})
