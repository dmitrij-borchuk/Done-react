import React from 'react'
import cn from 'classnames'
// import './styles.css'

interface IRoundButtonProps {}
export const RoundButton: React.FC<
  IRoundButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...others }) => {
  return (
    <button
      {...others}
      className={cn(
        'w-16 h-16 bg-orange-400 rounded-full shadow-xl flex items-center justify-center',
        others.className,
      )}
    >
      {children}
    </button>
  )
}
