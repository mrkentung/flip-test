import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../theme'

const Container = styled(Link)`
	border: 1px solid ${theme.colors.orange};
	border-radius: 4px;
	color: ${theme.colors.orange};
	padding: 5px 15px;
	background: none;
	outline: none;
	:hover {
		cursor: pointer;
	}
	:active {
		opacity: 0.6;
	}
	text-decoration: none;
`

/**
 *
 * @param {String} props.linkTo
 * @param {Any} props.children
 * @param {Any} props.otherProps
 * @returns <Comp />
 */
export default function Button({ linkTo, children, ...otherProps }) {
	return (
		<Container to={linkTo} {...otherProps}>
			{children}
		</Container>
	)
}
