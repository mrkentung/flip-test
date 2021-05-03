import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import Outclick from 'react-outclick'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Container = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	box-sizing: border-box;
`

const BoxValue = styled.div`
	position: absolute;
	right: 0;
	width: auto;
	cursor: pointer;
	padding: 8px;
`

const Text = styled.p`
	${(props) => props}
`

const ListOption = styled.ul`
	position: absolute;
	width: 100%;
	height: ${(props) => (props.show ? 'auto' : '0')};
	top: ${(props) => (props.show ? '19px' : '0px')};
	visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
	opacity: ${(props) => (props.show ? '1' : '0')};
	right: 0;
	list-style-type: none;
	z-index: 999;
	background: ${theme.colors.white};
	border: 1px solid ${theme.colors.grey_3};
	border-radius: 4px;
	padding: 0;
	text-align: left;
	transition: all 0.3s ease;
`

const Option = styled.li`
	padding: 0 15px 5px 5px;
	background: ${(props) => props.active && theme.colors.orange};
	color: ${(props) => props.active && theme.colors.white};
	:hover {
		background: ${theme.colors.orange};
		color: ${theme.colors.white};
		cursor: pointer;
	}
	${(props) => props}
`

const IconWrapper = styled.i`
	width: 24px;
	margin-left: 6px;
	color: ${theme.colors.orange};
	position: absolute;
	right: 0;
	top: 6px;
`

export default function Select({ active, value, items }) {
	const [show, setShow] = useState(false)

	const HandleChoose = (val) => {
		setShow((show) => !show)
		value(val)
	}

	return (
		<Container>
			<Outclick onOutsideClick={() => setShow(false)}>
				<BoxValue onClick={() => setShow((show) => !show)}>
					<Text margin="0" fontSize="14px" marginRight="16px">
						{active
							? items.filter((item) => item.id === active)[0].text
							: 'URUTKAN'}{' '}
						<IconWrapper>
							<ChevronDownIcon />
						</IconWrapper>
					</Text>
				</BoxValue>
				<ListOption show={show}>
					{items?.map((item, idx) => (
						<Option
							key={String(idx)}
							onClick={() => HandleChoose(item.id)}
							active={active === item.id}
						>
							{item.text}
						</Option>
					))}
				</ListOption>
			</Outclick>
		</Container>
	)
}
