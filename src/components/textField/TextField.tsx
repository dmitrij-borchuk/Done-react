import React from 'react'
import cn from 'classnames'
// import './styles.css'

interface IProps {
  fullWidth?: boolean
  error?: boolean
  helperText?: string | React.ReactNode
}
export const TextField: React.FC<
  IProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  children,
  fullWidth = false,
  error = false,
  helperText = '',
  ...others
}) => {
  // TODO: full
  return (
    <>
      <input
        {...others}
        className={cn(
          'h-12 rounded-lg shadow-lg border border-gray-200 text-2xl text-gray-600 pl-2',
          { 'w-full': fullWidth },
          { 'border-red-500': error },
          others.className,
        )}
      >
        {children}
      </input>
      <div className={cn('mt-4', { 'text-red-500': error })}>{helperText}</div>
    </>
  )
}
