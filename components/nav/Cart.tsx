import Image from 'next/image'

import { emptyCart } from '@/redux/features/cartSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import type { RootState } from '@/redux/store'

import Button from '../Button'

interface CartProps {
  openCart: boolean
  setOpenCart: (openCart: boolean) => void
}

const Cart = ({ openCart, setOpenCart }: CartProps) => {
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart)
  const dispatch = useAppDispatch()

  let totalPrice = 0
  let totalItems = 0

  if (cart) {
    totalPrice = cart.reduce(
      (acc: number, product) => acc + product.price * product.quantity,
      0,
    )
    totalItems = cart.reduce((acc, product) => acc + product.quantity, 0)
  }

  return (
    <div className="relative z-30 rounded-lg bg-white px-6 md:w-[377px]">
      <div className="">
        <div className="flex justify-between pb-[7px] pt-[32px]">
          <h2 className="text-[18px] font-bold ">CART ({totalItems}) </h2>
          {cart && cart.length ? (
            <button
              className="hover:text-orange text-[15px] font-medium underline underline-offset-1 opacity-50 hover:opacity-100"
              onClick={() => dispatch(emptyCart())}
            >
              ; Remove all
            </button>
          ) : (
            ''
          )}
        </div>
        {cart && cart.length ? (
          ''
        ) : (
          <div className="mt-10 flex justify-center">
            <div>
              <p className="text-center">Cart is empty</p>
              <Image
                src="/cart/empty-cart-icon.svg"
                width={200}
                height={200}
                alt="Empty cart"
              />
            </div>
          </div>
        )}
        {/* {cart?.map(() => <div>CartItem</div>)} */}
        <div className="mt-[32px] flex justify-between">
          <p className="text-[15px] font-medium opacity-50">TOTAL</p>
          <p className="text-[18px] font-bold">
            ${totalPrice.toLocaleString()}
          </p>
        </div>
        <div className="py-6">
          {cart && cart.length ? (
            <Button
              intent="primary"
              size="lg"
              href="/checkout"
              onClick={() => setOpenCart(!openCart)}
            >
              Checkout
            </Button>
          ) : (
            <Button intent="ghost" size="lg">
              Checkout
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
