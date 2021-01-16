import React from 'react'

export const Wrapper = ({
	children,
	className,
}) => {
	return (
		<div className={className}>
			{children}
		</div>
	)
}