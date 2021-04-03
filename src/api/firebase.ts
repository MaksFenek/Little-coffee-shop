import firestore from '@react-native-firebase/firestore'
import {ProductsCollection} from 'GeneralTypes'
import {FetchFirebase} from './apiTypes'

const productsCollection = firestore().collection<ProductsCollection>(
  'products',
)
// Function for getting all categories and it's products from firebase.
export const getAllProducts: FetchFirebase<ProductsCollection[]> = async () => {
  try {
    // Get all categories from products collection
    const categories = await productsCollection.get()
    // Prepare every categories for storing
    const data = categories.docs.map(category => category.data())
    return {data, error: ''}
  } catch (error) {
    return {data: undefined, error: error.message}
  }
}
