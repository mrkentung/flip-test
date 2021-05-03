import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../theme'
import Label from '../Label'
import currency from '../../helpers/idrCurrency'
import indonesianDate from '../../helpers/indonesianDate'

const Container = styled(Link)`
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 4px;
  border-left: 4px solid ${(props) => StatusColor(props.status)};
  padding: 12px;
  text-decoration: none;
  color: ${theme.colors.grey};
  box-sizing: border-box;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Col = styled.div`
  p:last-child {
    i {
      font-size: 7px;
      margin: 0 2px;
    }
  }
`

const Text = styled.p`
  ${(props) => props};
  margin-bottom: 4px;
`

const StatusColor = (status) => {
  const type = {
    pending: theme.colors.orange,
    success: theme.colors.green,
  }
  return type[status.toLowerCase()]
}

const TransactionItem = ({ linkTo,items,amount,beneficiaryBank,beneficiaryName,senderBank,createdAt,status }) => {
    return (
        <Container
        status={status}
        to={{
            pathname: linkTo,
            state: items,
        }}
        >
        <Row>
            <Col>
            <Text
                margin="0"
                fontSize="14px"
                textTransform="uppercase"
                fontWeight="700"
            >
                {senderBank} <i className="fas fa-long-arrow-alt-right"></i>{' '}
                {beneficiaryBank}
            </Text>
            <Text margin="0" fontSize="14px" textTransform="uppercase">
                {beneficiaryName}
            </Text>
            <Text margin="0" fontSize="14px" textTransform="capitalize">
                {currency(amount)} <i className="fas fa-circle"></i>{' '}
                {indonesianDate(createdAt)}
            </Text>
            </Col>
            <Col>
              <Label status={status} />
            </Col>
        </Row>
        </Container>
    )
}

export default TransactionItem