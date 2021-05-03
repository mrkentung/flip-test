import styled from 'styled-components'
import theme from '../../theme'
import Search from '../Search'
import Select from '../Select'

const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 65% 35%;
  border: 1px solid ${theme.colors.grey_3};
  background: ${theme.colors.white};
  border-radius: 4px;
  div:last-child {
    border-left: 1px solid ${theme.colors.grey_3};
  }
`

export default function SearchSort({
  onChangeInput,
  selectValue,
  selectActive,
}) {
  return (
    <Container>
      <Search onChange={onChangeInput}/>
      <Select
        active={selectActive}
        value={(val) => selectValue(val)}
        items={[
          { id: 'a-z', text: 'Nama A-Z' },
          { id: 'z-a', text: 'Nama Z-A' },
          { id: 'new-date', text: 'Tanggal Terbaru' },
          { id: 'old-date', text: 'Tanggal Terlama' },
        ]}
      />
    </Container>
  )
}
