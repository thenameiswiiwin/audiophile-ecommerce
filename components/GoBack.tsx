'use client'

import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

const GoBack = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <p
      className={clsx(
        ' block w-max cursor-pointer pb-[24px] pt-[16px] text-[15px] leading-[25px] opacity-50 transition-all hover:text-orange-primary/100 hover:underline md:pb-[24px] lg:pt-[79px]',
        pathname === '/checkout'
          ? 'md:pt-[48px] lg:pb-[38px]'
          : 'md:pt-[33px] lg:pb-[56px]',
      )}
      onClick={() => router.back()}
    >
      Go Back
    </p>
  )
}

export default GoBack
