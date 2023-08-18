import type { RadioProps } from '@/types'

const Radio = ({ name, id, setPayMethod, payMethod }: RadioProps) => {
  return (
    <div
      onClick={() => setPayMethod(id)}
      className={`flex h-[56px] w-full items-center gap-[16px] rounded-[8px] border-[1px] border-solid px-[16px] md:w-[309px] ${
        payMethod === id ? 'border-orange' : 'border-[#CECECE]'
      }`}
    >
      <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full border-[1px] border-solid border-[#CFCECF]">
        {payMethod === id && (
          <div className="bg-orange aspect-square h-[10px] w-[10px] rounded-full" />
        )}
      </div>
      <p className="text-[14px] font-bold tracking-[-0.25px]">{name}</p>
    </div>
  )
}

export default Radio
