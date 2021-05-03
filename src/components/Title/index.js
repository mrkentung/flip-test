import styled from 'styled-components'
import theme from '../../theme'

const TitlePage = styled.h1`
	font-size: 40px;
	font-weight: 300;
	margin: 8px 0;
	padding: 0;
	text-align: center;
	color: ${theme.colors.grey};
`
const Title = ({ title }) => {
	return <TitlePage>{title}</TitlePage>
}

export default Title
