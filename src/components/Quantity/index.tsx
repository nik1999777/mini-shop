import React, { FC } from 'react'
import { TypeSetState } from '../../types'

interface IQuantity {
  count: number
  setCount: TypeSetState<number>
}

const Quantity: FC<IQuantity> = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
      <input
        type='number'
        onChange={e => setCount(+e.target.value)}
        value={count}
      />
      <button onClick={() => count < 30 && setCount(count + 1)}>+</button>
    </div>
  )
}

export default Quantity
