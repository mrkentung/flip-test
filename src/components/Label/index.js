import styled from 'styled-components'
import theme from '../../theme'

const Container = styled.span`
	width: auto;
	padding: 2px 10px;
	border-radius: 4px;
	font-size: 14px;
	${(props) => StatusColor(props.status).style}
`

const StatusColor = (status) => {
	const type = {
		pending: {
			style: {
				background: 'none',
				border: `1px solid ${theme.colors.orange}`,
				color: theme.colors.grey,
			},
			text: 'Pengecekan',
		},
		success: {
			style: {
				background: theme.colors.green,
				border: `1px solid ${theme.colors.green}`,
				color: theme.colors.white,
			},
			text: 'Berhasil',
		},
	}
	return type[status.toLowerCase()]
}

/**
 *
 * @param {String} props.status
 * @returns <Comp />
 */
export default function Label({ status }) {
	return <Container status={status}>{StatusColor(status).text}</Container>
}
