import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  bg: {
    flex: 1,
    position: 'relative',
    padding: 20,
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  imgContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {
    flex: 0.6,
    padding: 20,
    justifyContent: 'space-around',
  },
  img: {
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 38,
    color: '#fff',
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#0D9F67',
    height: 60,
  },
  signIn: {
    height: 60,
  },
})
