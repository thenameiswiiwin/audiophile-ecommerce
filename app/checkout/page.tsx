'use client'

import CheckoutForm from '@/components/checkout/CheckoutForm'
import CheckoutSummary from '@/components/checkout/CheckoutSummary'
import GoBack from '@/components/GoBack'

export default function CategoryPage() {
  return (
    <div className="bg-li-gray">
      <div className="mx-auto max-w-[1174px] px-8">
        <GoBack />
        <div className="flex flex-col items-start gap-[32px] pb-[97px] md:pb-[116px] lg:flex-row lg:gap-[30px] lg:pb-[141px]">
          <CheckoutForm />
          <CheckoutSummary />
        </div>
      </div>
      {/* {success && <SuccesBanner />} */}
    </div>
  )
}
