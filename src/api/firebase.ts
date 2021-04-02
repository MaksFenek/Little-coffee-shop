import firestore from '@react-native-firebase/firestore'
import {ProductsCollection} from 'GeneralTypes'

const productsCollection = firestore().collection<ProductsCollection>(
  'products',
)
export const getAllProducts = async () => {
  try {
    const categories = await productsCollection.get()
    const data = categories.docs.map(category => category.data())
    return data
  } catch (error) {
    console.error(error)
  }
}
