import styled from 'styled-components'
import Label from '../Label'
import theme from '../../theme'

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  background: ${theme.colors.white};
  padding: 14px;
  border-radius: 4px;
`

const Col = styled.div`
  width: auto;
`

const Text = styled.p`
  ${(props) => props}
`

const TransactionStatus = ({ idTransaction, status }) => {
    return (
        <Container>
          <Col>
            <Text margin="0" fontWeight="600">
              ID TRANSAKSI: #{idTransaction}
            </Text>
          </Col>
          <Col>
            <Label status={status} />
          </Col>
        </Container>
    )
}

export default TransactionStatus