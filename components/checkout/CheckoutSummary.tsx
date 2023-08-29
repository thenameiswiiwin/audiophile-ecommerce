import { nanoid } from 'nanoid'

import { setSuccess } from '@/redux/features/cartSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import type { RootState } from '@/redux/store'

import Button from '../Button'
import CheckoutItem from './CheckoutItem'

const CheckoutSummary = () => {
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart)
  const dispatch = useAppDispatch()

  let totalPrice = 0
  let shipping = 50
  let vat = 0
  let allIncluded = 0

  if (cart) {
    totalPrice = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    )
    vat = (totalPrice / 100) * 20
    vat = vat.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })

    shipping = totalPrice === 0 ? 0 : 50

    allIncluded = totalPrice + shipping
  }

  return (
    <div className="flex w-full max-w-[800px] flex-col rounded-[8px] bg-white px-[24px] py-[32px] md:px-[33px]">
      <h2 className="pb-[31px] text-[18px] font-bold uppercase tracking-[1.29px]">
        Summary
      </h2>
      <div className="flex flex-col gap-[24px]">
        {cart?.map((item) => <CheckoutItem key={nanoid()} {...item} />)}
      </div>
      <div className="gap-[8px] py-[32px]">
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-medium uppercase leading-[25px] opacity-50">
            Total
          </h2>
          <h3 className="text-[18px] font-bold">
            $ {totalPrice.toLocaleString()}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-medium uppercase leading-[25px] opacity-50">
            Shipping
          </h2>
          <h3 className="text-[18px] font-bold">$ {shipping}</h3>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-medium uppercase leading-[25px] opacity-50">
            Vat (included)
          </h2>
          <h3 className="text-[18px] font-bold">$ {vat}</h3>
        </div>
        <div className="flex items-center justify-between pt-[16px]">
          <h2 className="text-[15px] font-medium uppercase leading-[25px] opacity-50">
            Grand total
          </h2>
          <h3 className="text-orange text-[18px] font-bold">
            $ {allIncluded.toLocaleString()}
          </h3>
        </div>
      </div>
      {cart?.length === 0 ? (
        <Button intent="ghost" size="lg">
          cart is empty
        </Button>
      ) : (
        <div onClick={() => dispatch(setSuccess(true))}>
          <Button intent="primary" size="lg">
            continue & pay
          </Button>
        </div>
      )}
    </div>
  )
}

export default CheckoutSummary
