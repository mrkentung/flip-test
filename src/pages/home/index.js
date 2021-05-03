import { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'

import { getTransactions } from '../../api'

import mapData from '../../helpers/mapData'
import totalAmount from '../../helpers/totalAmount'
import currency from '../../helpers/idrCurrency'

import TransactionItem from '../../components/TransactionItem'
import SearchSort from '../../components/Search-Sort'
import Title from '../../components/Title'

const Description = styled.div`
  h2,
  p {
    margin: 0;
  }
  p {
    font-size: 16px;
    span {
      color: rgb(253, 101, 66);
      font-weight: 700;
    }
  }
  h2 {
    margin-bottom: 12px;
  }
  margin-bottom: 16px;
`

const ListTransactions = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 10px;
  margin: 20px 0;
  height: calc(100vh - 280px);
  overflow-y: scroll;
`
const Home = () => {
    const [select, setSelect] = useState('')
    const [keyword, setKeyword] = useState()
    const [dataFilter, setDataFilter] = useState()
    const { data, isError, isSuccess, isLoading } = useQuery(
        'transactions',
        getTransactions,
        {
          staleTime: 3000,
        },
    )

    useEffect(() => {
        if (!isError && isSuccess) {
            setDataFilter(mapData(data))
        }
    }, [data, isError, isSuccess])
    
    useEffect(() => {
        if (keyword) {
          let filterData = [...dataFilter].filter(
            (item) =>
              item.beneficiary_name.toLowerCase().includes(keyword) ||
              item.beneficiary_bank.toLowerCase().includes(keyword) ||
              item.sender_bank.toLowerCase().includes(keyword),
          )
          setDataFilter(filterData)
        } else {
          setDataFilter(data && mapData(data))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword])

    useEffect(() => {
        if (select) {
          let filterData = {
            'a-z': [...dataFilter].sort((a, b) =>
              a.beneficiary_name.localeCompare(b.beneficiary_name),
            ),
            'z-a': [...dataFilter].sort((a, b) =>
              b.beneficiary_name.localeCompare(a.beneficiary_name),
            ),
            'old-date': [...dataFilter].sort((a, b) =>
              a.created_at.localeCompare(b.created_at),
            ),
            'new-date': [...dataFilter].sort((a, b) =>
              b.created_at.localeCompare(a.created_at),
            ),
          }
          setDataFilter(filterData[select])
        } else {
          setDataFilter(data && mapData(data))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [select])

    const handleChangeInput = (val) => {
        setKeyword(val.toLowerCase())
    }

    const handleSelectValue = (val) => {
        setSelect((select) => (select !== val ? val : ''))
    }

    return (
        <Fragment>
            <Title title="Daftar Transaksi" />
             <Description>
                <h2>Halo Kak!</h2>
                <p>
                Kamu telah melakukan transaksi sebesar{' '}
                <span>{currency(totalAmount(mapData(data)))}</span> sejak menggunakan
                Flip.
                </p>
            </Description>
            <SearchSort 
                onChangeInput={(e) => handleChangeInput(e.target.value)}
                selectValue={(val) => handleSelectValue(val)}
                selectActive={select}
            />
            <ListTransactions>
                {isLoading && (
                    <span>loading</span>
                )}
                {isSuccess && typeof dataFilter !== 'undefined' ? (
                    dataFilter.map((item, idx) => (
                        <TransactionItem
                            key={String(idx)}
                            linkTo={`/transaction/${item.id}`}
                            items={item}
                            amount={item.amount}
                            status={item.status}
                            beneficiaryBank={item.beneficiary_bank}
                            beneficiaryName={item.beneficiary_name}
                            senderBank={item.sender_bank}
                            createdAt={item.created_at}
                        />
                    ))
                    ) : null}
            </ListTransactions>

        </Fragment>
    )
}

export default Home