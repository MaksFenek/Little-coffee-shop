export interface ProductsCollection extends ProductInfo {
  readonly products: [ProductsItem]
}

export interface ProductsItem extends ProductInfo {
  readonly price: number
  readonly fullDescription: string
}

export type ProductInfo = {
  readonly name: string
  readonly description: string
  readonly photo: string
}
