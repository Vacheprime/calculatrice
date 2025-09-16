import React from 'react'

type ButtonProps = {
    buttonText: string,
    onClick: () => void,
    className?: string
}

function Button({ buttonText, onClick, className }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>{buttonText}</button>
  )
}

export default Button