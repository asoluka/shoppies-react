import React from 'react'
import {Wrapper} from 'components'

export const InputField = ({
  children,
  className,
}) => {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  )
}