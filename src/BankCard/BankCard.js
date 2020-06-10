import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import './BankCard.scss'

const BankCard = ({ bank }) => {

  const formatNumber = (number) => {
    const splitedNumber = number.toLocaleString('es-MX').split('.')
    return [splitedNumber[0], splitedNumber[1]]
  }
  return (
    <div className="col-12 col-lg-3 mb-3" datacy="bank">
      <div className="bank py-3 px-4">
        <div className="mb-4 d-flex justify-content-between">
          <div className="smaller">
            <div className="name mb-2">
              {bank.name}
            </div>
            <div className="smaller number">
              {bank.creditCard}<span className="ml-2"><FontAwesomeIcon icon={faClone}/></span>
            </div>
          </div>
          <div className="logo">
            <img src={bank.logo} alt="bank logo"/>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="amount">
            {formatNumber(bank.amount)[0]}.<span className="smaller decimal">{formatNumber(bank.amount)[1]}</span><span className="ml-1 dollar">$</span>
          </div>
          <div className="menu d-flex justify-content-center">
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankCard;