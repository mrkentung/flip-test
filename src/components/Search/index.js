import styled from 'styled-components'
import { SearchIcon } from '@heroicons/react/solid'

const Container = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	padding: 4px 0;
	i {
		position: absolute;
		left: 8px;
		top: 8px;
	}
`

const Input = styled.input`
	width: 100%;
	height: 24px;
	box-sizing: border-box;
	padding-left: 32px;
	border: none;
	outline: none;
	background: none;
`

const IconWrapper = styled.i`
	width: 16px;
	position: absolute;
	left: 8px;
	top: 8px;
`

const InputSearch = ({ ...otherProps }) => {
	return (
		<Container>
			<Input placeholder="Cari nama atau bank" {...otherProps} />
			<IconWrapper>
				<SearchIcon />
			</IconWrapper>
		</Container>
	)
}

export default InputSearch
