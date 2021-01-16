import React from 'react'

export const Text = ({
  className,
  children,
  type
}) => {
  if (type == 'h1') {
    return (
      <h1 className={className}>{children}</h1>
    )
  }

  if (type == 'h2') {
    return (
      <h2 className={className}>{children}</h2>
    )
  }

  return (
    <p className={className}>{children}</p>
  )
}