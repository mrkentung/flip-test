import styled from 'styled-components'
import currency from '../../helpers/idrCurrency'
import indonesianDate from '../../helpers/indonesianDate'
import theme from '../../theme'

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: auto;
  background: #fff;
  border-radius: 4px;
  padding: 12px;
  color: ${theme.colors.grey};
  margin-bottom: 24px;
`

const Row = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 15% 85%;
`

const Col = styled.div`
  justify-self: start;
  padding: 12px;
  align-self: start;
  :first-child {
    padding: 0;
    justify-self: center;
  }
  :last-child {
    div:not(:first-child) {
      margin-top: 14px;
    }
  }
`

const Text = styled.p`
  ${(props) => props}
`

export default function TransactionDetail({
  amount,
  uniqueCode,
  senderBank,
  accountNumber,
  beneficiaryName,
  beneficiaryBank,
  remark,
  createdAt,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <Text fontSize="35px" margin="0" color="#fd6542">
            <i className="fas fa-inbox"></i>
          </Text>
        </Col>
        <Col>
          <div>
            <Text margin="0" fontWeight="600">
              PENGIRIM
            </Text>
            <Text
              margin="0"
              textTransform="uppercase"
              fontSize="16px"
              color={theme.colors.grey2}
            >
              {senderBank}
            </Text>
          </div>
          <div>
            <Text margin="0" fontWeight="600">
              PENERIMA
            </Text>
            <Text
              margin="0"
              textTransform="capitalize"
              fontSize="15px"
              color={theme.colors.grey2}
            >
              {beneficiaryBank}
            </Text>
            <Text
              margin="0"
              textTransform="capitalize"
              fontSize="16px"
              color={theme.colors.grey2}
            >
              {accountNumber}
            </Text>
            <Text
              margin="0"
              textTransform="capitalize"
              fontSize="16px"
              color={theme.colors.grey2}
            >
              {beneficiaryName}
            </Text>
          </div>
          <div>
            <Text margin="0" fontWeight="600">
              NOMINAL
            </Text>
            <Text
              margin="0"
              textTransform="capitalize"
              fontSize="16px"
              color={theme.colors.grey2}
            >
              {currency(amount)}
            </Text>
            <Text
              margin="0"
              textTransform="capitalize"
              fontSize="16px"
              color={theme.colors.grey2}
            >
              kode unik: {uniqueCode}
            </Text>
          </div>
          <div>
            <Text margin="0" fontWeight="600">
              CATATAN
            </Text>
            <Text
              margin="0"
              textTransform="capitalize"
              fontSize="16px"
              color={theme.colors.grey2}
            >
              {remark}
            </Text>
          </div>
          <div>
            <Text margin="0" fontWeight="600">
              WAKTU DIBUAT
            </Text>
            <Text
              margin="0"
              textTransform="capitalize"
              fontSize="16px"
              color={theme.colors.grey2}
            >
              {indonesianDate(createdAt)}
            </Text>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
