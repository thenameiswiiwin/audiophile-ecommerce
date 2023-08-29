import { nanoid } from 'nanoid'
import Image from 'next/image'
import { useState } from 'react'

import { emptyCart, setSuccess } from '@/redux/features/cartSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import type { RootState } from '@/redux/store'

import Button from '../Button'

const SuccessBanner = () => {
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart)
  const dispatch = useAppDispatch()
  const [showMore, setShowMore] = useState(false)

  let totalPrice = 0
  const shipping = 50
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

    allIncluded = totalPrice + shipping
  }

  function handleClick() {
    dispatch(setSuccess(false))
    dispatch(emptyCart())
  }
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black-opaque">
      <div className="relative z-50 mx-6 w-full max-w-[540px] rounded-[8px] bg-white p-8 md:p-12">
        <Image
          width={64}
          height={64}
          alt="checkmark"
          src="/shared/desktop/icon-check-mark.svg"
          className="pb-[23px] md:pb-[33px]"
        />
        <h2 className="pb-[16px] text-[24px] font-bold leading-[28px] tracking-[0.86px] md:pb-[24px] md:text-[32px] md:leading-[36px] md:tracking-[1.14px]">
          THANK YOU <br />
          FOR YOUR ORDER
        </h2>
        <p className="md:pb-[33px[ pb-[24px] text-[15px] font-medium leading-[25px] opacity-50">
          You will receive an email confirmation shortly.
        </p>
        <div className="md:flex">
          {cart && (
            <div className="bg-grey mt-[16px] rounded-t-lg p-6 md:mt-[0px] md:w-[60%] md:rounded-l-lg md:rounded-tr-none">
              {showMore ? (
                <div>
                  {cart?.map((cart) => (
                    <div
                      key={nanoid()}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Image
                          src={cart.image.mobile}
                          width={64}
                          height={64}
                          alt="Logo"
                          className="mr-[10px] rounded-lg"
                        />
                        <div className="font-bold">
                          <p className="">{cart.shortName}</p>
                          <p className="opacity-50">
                            $ {cart?.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <p className="font-bold opacity-50">x{cart?.quantity}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={cart[0]?.image.mobile}
                      width={64}
                      height={64}
                      alt="Logo"
                      className="mr-[10px] rounded-lg"
                    />
                    <div className="font-bold">
                      <p className="">{cart[0]?.shortName}</p>
                      <p className="opacity-50">
                        $ {cart[0]?.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold opacity-50">x{cart[0]?.quantity}</p>
                </div>
              )}
              <div className="border-b border-black opacity-[0.079]"></div>
              <p
                className="mb-[25px] mt-[12px] cursor-pointer text-center font-bold opacity-50 md:mb-[0px]"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore
                  ? 'Show less'
                  : `and ${cart?.length - 1} other item${
                      cart?.length - 1 === 1 ? '' : 's'
                    }`}
              </p>
            </div>
          )}
          <div className="rounded-b-lg bg-black text-white md:flex md:w-[40%] md:items-center md:justify-center md:rounded-r-lg md:rounded-bl-none">
            <div>
              <p className="mb-[8px] px-5 pt-5 opacity-50">GRAND TOTAL</p>
              <h3 className="px-5 pb-[18px] text-[18px] font-bold">
                $ {allIncluded.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-[23px] md:mt-[46px]">
          <Button href="/" onClick={handleClick} intent="primary" size="lg">
            back to home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SuccessBanner
