import { Fragment } from 'react'

import { useLocation } from 'react-router-dom'

import TransactionStatus from '../../components/TransactionStatus'
import TransactionDetail from '../../components/TransactionDetail'
import Title from '../../components/Title'
import Button from '../../components/Button'

const TransactionPage = () => {
    const location = useLocation()
    
    return (
        <Fragment>
            <Title title="Detail Transaksi" />
            <TransactionStatus 
                idTransaction={location.state && location.state.id}
                status={location.state && location.state.status}
            />
            <TransactionDetail 
                amount={location.state && location.state.amount}
                uniqueCode={location.state && location.state.unique_code}
                senderBank={location.state && location.state.sender_bank}
                accountNumber={location.state && location.state.account_number}
                beneficiaryName={location.state && location.state.beneficiary_name}
                beneficiaryBank={location.state && location.state.beneficiary_bank}
                remark={location.state && location.state.remark}
                createdAt={location.state && location.state.created_at}
            />
            <Button linkTo={`/`}>Kembali</Button>
        </Fragment>
    )
}

export default TransactionPage