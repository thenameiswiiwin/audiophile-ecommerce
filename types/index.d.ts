import type { SetStateAction } from 'react'

export interface Product {
  id: string
  slug: string
  name: string
  shortName: string
  image: {
    mobile: string
    tablet: string
    desktop: string
  }
  cartImage: string
  category: string
  categoryImage: {
    mobile: string
    tablet: string
    desktop: string
  }
  new: boolean
  price: number
  quantity: number
  description: string
  features: string
  includedItems: {
    quantity: number
    item: string
  }[]
  gallery: {
    first: {
      mobile: string
      tablet: string
      desktop: string
    }
    second: {
      mobile: string
      tablet: string
      desktop: string
    }
    third: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
  others: {
    slug: string
    name: string
    image: {
      mobile: string
      tablet: string
      desktop: string
    }
  }[]
}

export interface InputProps {
  text: string
  type: string
  errorMessage: string
  require: string
  name: string
  valid?: boolean
}

export interface RadioProps {
  id: string
  name: string
  setPayMethod: Dispatch<SetStateAction<string>>
  payMethod: string
  key: string
}
