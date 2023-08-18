'use client'

import { useState } from 'react'

import type { InputProps } from '@/types'

const Input = ({ text, type, errorMessage, require, name }: InputProps) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setValue(e.target.value)
    if (error) {
      if (!value.includes(require)) {
        setError(true)
      } else {
        setError(false)
      }
    }
  }

  function onBlur() {
    console.log(value)
    if (!value.includes(require) || value === '') {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <div
      className={`w-full ${
        name === 'Your Address' ? 'md:w-[634px]' : 'md:w-[309px]'
      }`}
    >
      <div className="flex items-center justify-between">
        <label
          className="mb-[9px] block text-[12px] font-bold tracking-[-0.21px]"
          htmlFor={name}
        >
          {name}
        </label>
        {error && (
          <p className="text-red mb-[9px] text-[12px] font-medium tracking-[-0.21px]">
            {errorMessage}
          </p>
        )}
      </div>
      <input
        className={`${
          error ? 'ring-red' : 'ring-[#CFCFCF]'
        } h-[56px] w-full rounded-lg p-[10px] pl-[20px] text-[14px] font-bold outline-none ring-[1px] ring-[#CFCFCF]`}
        type={type}
        placeholder={text}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
      />
    </div>
  )
}

export default Input
