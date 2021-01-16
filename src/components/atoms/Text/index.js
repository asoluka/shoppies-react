import React from 'react'
import PropTypes from 'prop-types'
import Styled, { css } from 'styled-components'

const styles = css`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ lineHeight }) => lineHeight};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
`

const StyledText = Styled.span`
    ${styles}
`

const StyledH1 = Styled.h1`
    ${styles}
`

const StyledH2 = Styled.h2`
    ${styles}
`

const StyledH3 = Styled.h3`
    ${styles}
`

export const Text = ({
  children,
  color,
  fontSize,
  header,
  width,
  height,
  lineHeight,
  padding,
  margin,
  fontWeight,
  textAlign,
  className,
}) => {
  if (header === 'h1') {
    return (
      <StyledH1
        color={color}
        fontSize={fontSize}
        width={width}
        height={height}
        fontWeight={fontWeight}
        padding={padding}
        margin={margin}
        textAlign={textAlign}
        className={className}>
        {children}
      </StyledH1>
    )
  }

  if (header === 'h2') {
    return (
      <StyledH2
        color={color}
        fontSize={fontSize}
        width={width}
        height={height}
        fontWeight={fontWeight}
        padding={padding}
        margin={margin}
        textAlign={textAlign}
        className={className}>
        {children}
      </StyledH2>
    )
  }

  if (header === 'h3') {
    return (
      <StyledH3
        color={color}
        fontSize={fontSize}
        width={width}
        height={height}
        fontWeight={fontWeight}
        padding={padding}
        margin={margin}
        textAlign={textAlign}
        className={className}>
        {children}
      </StyledH3>
    )
  }

  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      width={width}
      height={height}
      lineHeight={lineHeight}
      padding={padding}
      margin={margin}
      fontWeight={fontWeight}
      textAlign={textAlign}
      className={className}>
      {children}
    </StyledText>
  )
}

Text.defaultProps = {
  lineHeight: '30px',
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.any,
  fontSize: PropTypes.string,
  header: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  lineHeight: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string,
  className: PropTypes.string,
}