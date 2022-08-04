import { IProduct } from '../../types'
import ProductItem from '../ProductItem'
import styles from './index.module.scss'

const products: IProduct[] = [
  {
    id: '2',
    imagePath:
      'https://img3.labirint.ru/rc/c764dc79816b3b680d5e4fbc56706ca7/220x340/books42/419735/cover.jpg?1563737926',
    name: 'Книга',
    price: 350,
  },
  {
    id: '3',
    imagePath:
      'https://img3.labirint.ru/rc/c764dc79816b3b680d5e4fbc56706ca7/220x340/books42/419735/cover.jpg?1563737926',
    name: 'Книга',
    price: 350,
  },
  {
    id: '4',
    imagePath:
      'https://img3.labirint.ru/rc/c764dc79816b3b680d5e4fbc56706ca7/220x340/books42/419735/cover.jpg?1563737926',
    name: 'Книга',
    price: 350,
  },
]

const Products = () => {
  return (
    <ul className={styles.products}>
      {products.map(product => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  )
}

export default Products
