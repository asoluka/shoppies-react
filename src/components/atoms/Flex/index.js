import PropTypes from 'prop-types'
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  order: ${({ order }) => order};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink};
  flex-basis: ${({ basis }) => basis};
  align-self: ${({ alignSelf }) => alignSelf};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
`

Flex.propTypes = {
  direction: PropTypes.string,
  wrap: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  order: PropTypes.string,
  grow: PropTypes.string,
  shrink: PropTypes.string,
  basis: PropTypes.string,
  alignSelf: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
}

Flex.defaultProps = {
  direction: 'row',
  wrap: 'no-wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  order: '0',
  grow: '0',
  shrink: '1',
  basis: 'auto',
  alignSelf: 'auto',
  margin: '0px',
  padding: '0px',
  height: 'auto',
}
