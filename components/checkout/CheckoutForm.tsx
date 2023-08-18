'use client'

import { nanoid } from 'nanoid'
import { useState } from 'react'

import { billingDetails, eMoney, radioButtons, shippingInfo } from '@/constants'

import Input from '../Input'
import Radio from '../Radio'

const CheckoutForm = () => {
  const [payMethod, setPayMethod] = useState('emoney')

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-[800px] lg:max-w-[730px]"
    >
      <div className="w-full rounded-lg bg-white px-6 md:px-[27.5px] lg:px-[48px]">
        <h2 className="pt-[24px] text-[28px] font-bold md:pt-[30px] lg:pt-[58px]">
          CHECKOUT
        </h2>
        <p className="mb-[16px] mt-[32px] font-bold text-orange-primary md:mt-[41px]">
          BILLING DETAILS
        </p>
        <div className="flex flex-wrap gap-x-[16px] gap-y-[17px]">
          {billingDetails.map((bd) => (
            <div key={nanoid()} className="w-full md:w-max">
              <Input
                text={bd.placeholder}
                type={bd.type}
                errorMessage={bd.errorMessage}
                require={bd.requirements}
                name={bd.name}
                valid={bd.required}
              />
            </div>
          ))}
        </div>
        <p className="mb-[16px] mt-[32px] font-bold text-orange-primary md:mt-[53px]">
          SHIPPING INFO
        </p>
        <div className="flex flex-wrap gap-x-[16px] gap-y-[24px]">
          {shippingInfo.map((si) => (
            <div key={nanoid()} className="w-full md:w-max">
              <Input
                text={si.placeholder}
                type={si.type}
                errorMessage={si.errorMessage}
                require={si.requirements}
                name={si.name}
              />
            </div>
          ))}
        </div>

        <p className="mb-[16px] mt-[32px] font-bold text-orange-primary md:mt-[53px]">
          PAYMENT DETAILS
        </p>
        <div className="flex max-w-[634px] flex-col md:flex-row md:justify-between">
          <div>
            <p className="mb-[9px] block text-[12px] font-bold tracking-[-0.21px]">
              Payment Method
            </p>
          </div>
          <div className="flex flex-col gap-[16px] pb-[30px]">
            {radioButtons.map((radio) => (
              <Radio
                id={radio.id}
                name={radio.name}
                setPayMethod={setPayMethod}
                payMethod={payMethod}
                key={nanoid()}
              />
            ))}
          </div>
        </div>
        {payMethod === 'emoney' && (
          <div className="flex flex-wrap gap-x-[16px] gap-y-[24px] pb-[30px] lg:pb-[48px]">
            {eMoney.map((em) => (
              <div key={nanoid()} className="w-full md:w-max">
                <Input
                  text={em.placeholder}
                  type={em.type}
                  errorMessage={em.errorMessage}
                  require={em.requirements}
                  name={em.name}
                />
              </div>
            ))}
          </div>
        )}
        {payMethod === 'cash' && (
          <div className="flex flex-col items-center gap-[32px] pb-[30px] md:flex-row lg:pb-[48px]">
            <img src="/checkout/icon-cash-on-delivery.svg" alt="" />
            <p className="max-w-[554px] text-[15px] font-medium leading-[25px] opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </form>
  )
}

export default CheckoutForm
