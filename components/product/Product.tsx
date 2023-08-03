import GoBack from '../GoBack'
import Features from './Features'
import Overview from './Overview'
import ProductPictures from './ProductPictures'
import Recommended from './Recommended'

const Product = ({ productArray }) => {
  return (
    <div>
      <GoBack />
      <Overview productArray={productArray} />
      <Features productArray={productArray} />
      <ProductPictures productArray={productArray} />
      <Recommended productArray={productArray} />
    </div>
  )
}

export default Product
