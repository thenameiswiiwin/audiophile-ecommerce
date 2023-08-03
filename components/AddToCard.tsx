import { useState } from 'react'

import { submitToCart } from '@/redux/features/cartSlice'
import { useAppDispatch } from '@/redux/hooks'

import Button from './Button'

const AddToCart = ({ productArray }) => {
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(1)

  const handleClick = (value: number) => setCount(count + value)

  const handleSubmit = () => {
    dispatch(submitToCart({ product: productArray, count }))
    setCount(1)
  }

  return (
    <div className="flex flex-wrap items-center gap-[16px]">
      <div className="flex h-[48px] w-[120px] items-center justify-between gap-[20px] bg-gray-base px-[15.5px]">
        <h2
          className="cursor-pointer text-[13px] font-bold tracking-[1px] opacity-25 transition-all hover:text-orange-primary/100"
          onClick={count === 1 ? undefined : () => handleClick(-1)}
        >
          -
        </h2>
        <p className="text-[13px] font-bold tracking-[1px]">{count}</p>
        <h2
          className="cursor-pointer text-[13px] font-bold tracking-[1px] opacity-25 transition-all hover:text-orange-primary/100"
          onClick={() => handleClick(1)}
        >
          +
        </h2>
      </div>
      <Button intent="primary" size="base" onClick={handleSubmit}>
        Add To Cart
      </Button>
    </div>
  )
}

export default AddToCart
