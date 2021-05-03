import styled from 'styled-components'
import theme from '../theme'

const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${theme.colors.cloud};
`

const Row = styled.div`
	width: 480px;
	height: 100vh;
	padding: 12px 0;
	font-family: 'Lato', sans-serif;
	@media (max-width: 425px) {
		width: 100%;
	}
`

const Layout = ({ children }) => {
	return (
		<Container>
			<Row>{children}</Row>
		</Container>
	)
}

export default Layout
