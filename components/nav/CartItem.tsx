import Image from 'next/image'

import {
  addToCart,
  minusOneFromCart,
  removeFromCart,
} from '@/redux/features/cartSlice'
import { useAppDispatch } from '@/redux/hooks'
import type { Product } from '@/types'

const CartItem = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="mt-[24px] flex w-full items-center justify-between">
      <div className="flex items-center">
        <Image
          src={product.image.mobile}
          width={64}
          height={64}
          alt="Logo"
          className="mr-[10px] rounded-lg"
        />
        <div className="font-bold">
          <p className="">{product.shortName}</p>
          <p className="opacity-50">$ {product.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex h-[40px] min-w-[96px] items-center justify-around bg-gray-base">
        <button
          className="opacity-25 hover:text-orange-primary/100"
          onClick={
            product.quantity === 1
              ? () => dispatch(removeFromCart(product))
              : () => dispatch(minusOneFromCart(product))
          }
        >
          -
        </button>
        <p className="font-bold">{product.quantity}</p>
        <button
          className="opacity-25 hover:text-orange-primary/100"
          onClick={() => dispatch(addToCart(product))}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem
