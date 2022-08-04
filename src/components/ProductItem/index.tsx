import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cart/actions'
import { IProduct } from '../../types'
import Quantity from '../Quantity'

interface IProductItem {
  product: IProduct
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()

  const addHandler = () => {
    dispatch(addToCart(product, count))
  }

  return (
    <li>
      <img src={product.imagePath} alt={product.name} />
      <div>{product.name}</div>
      <div>{product.price}</div>
      <Quantity count={count} setCount={setCount} />
      <button onClick={addHandler}>Add to cart</button>
    </li>
  )
}

export default ProductItem
