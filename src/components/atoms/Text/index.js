import React from 'react'

export const Text = ({
  className,
  children,
  type,
  title
}) => {
  if (type == 'h1') {
    return (
      <h1 
        className={className}
        title={title}>{children}</h1>
    )
  }

  if (type == 'h2') {
    return (
      <h2 
        className={className}
        title={title}>{children}</h2>
    )
  }

  if (type == 'span') {
    return (
      <span 
        className={className}
        title={title}>{children}</span>
    )
  }

  return (
    <p 
      className={className}
      title={title}>{children}</p>
  )
}