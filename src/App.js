import React, { useState, useEffect } from 'react'
import './App.scss'
import BankCard from './BankCard/BankCard'
import Api from './api/apiResult.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [banks, setBanks] = useState([])
  const mock = (success) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve()
        } else {
          reject({ message: 'Error' })
        }
      }, 2000)
    })
  }
  const fetchData = async () => {
    try {
      await mock(true)
      setBanks(Api)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchData()
  })
  return (
    <div className="container">
      <div className="row pt-3">
        {banks && banks.length > 0 && banks.map((el) => (
          <BankCard bank={el} key={el.id} />
        ))
        }
        {banks && banks.length === 0 &&
          <div className="d-flex justify-content-center" datacy="spinner">
            <FontAwesomeIcon icon={faCircleNotch} className="fa-spin fa-lg" />
          </div>
        }
      </div>
    </div>
  )
}

export default App
