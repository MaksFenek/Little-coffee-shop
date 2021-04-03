import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    marginTop: 10,
    width: '45%',
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    paddingBottom: '100%',
  },
  section: {
    padding: 10,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    fontWeight: '300',
    color: 'grey',
  },
})
