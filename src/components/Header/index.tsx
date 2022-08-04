import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { removeFromCard } from '../../store/cart/actions'

import logo from '../../assets/logo.png'
import CartIcon from '../../assets/shopping-cart.png'

const Header: FC = () => {
  const [isShowCart, setIsShowCart] = useState(false)

  const cart = useTypedSelector(state => state.cart)
  const total = cart.reduce((acc, item) => acc + item.price, 0)

  const dispatch = useDispatch()

  const removeHandler = (id: string) => {
    dispatch(removeFromCard(id))
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <img className={styles.header__logo} src={logo} alt='logo' />

        <p className={styles.header__title}>Shop</p>

        <button
          className={styles.header__button}
          onClick={() => setIsShowCart(!isShowCart)}
        >
          <img
            className={styles.header__button_icon}
            src={CartIcon}
            alt='cartIcon'
          />
          <div>{cart.length}</div>
        </button>
      </div>

      <ul
        className={cn(styles.header__list, {
          [styles.hidden]: !isShowCart,
        })}
        // className={!isShowCart ? styles.header__list : styles.hidden} - ternary operator
      >
        {cart.map(item => (
          <li
            className={styles.header__list_item}
            key={`cart item ${item.name}`}
          >
            <div className={styles.header__list_wrapper}>
              <img
                className={styles.header__list_img}
                src={item.imagePath}
                alt={item.name}
              />
              <div className={styles.header__list_wrapp}>
                <div className={styles.header__list_name}>{item.name}</div>
                <div className={styles.header__list_price}>{`${
                  item.count
                } x ${item.price.toLocaleString()}`}</div>
                <button
                  className={styles.header__list_button}
                  onClick={() => removeHandler(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className={styles.header__list_total}>
              Total: <b>{total.toLocaleString()} р</b>
            </div>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
