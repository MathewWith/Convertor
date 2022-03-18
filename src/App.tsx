import {useEffect, useState} from 'react';
import {ListCurrencies} from './helpers/list-currencies/list-currencies';
import {getCurrencies} from './helpers/getAllCurrencies';
import {reverseCurrencies} from './helpers/reverse-currencies';
import './App.scss';

function App() {

  const [listCurrency, setListCurrency] = useState([])

  const [firstInputValue, setFirstInputValue] = useState('')
  const [secondInputValue, setSecondInputValue] = useState('')

  const [result1, setResult1] = useState('')
  const [result2, setResult2] = useState('')


  const [flag1, setFlag1] = useState('')
  const [flag2, setFlag2] = useState('')

  const [changesFromInputOne, setChangesFromInputOne] = useState('')
  const [changesFromInputTwo, setChangesFromInputTwo] = useState('')

  const [currencyOne, setCurrencyOne] = useState('')
  const [currencyTwo, setCurrencyTwo] = useState('')
  
  
  useEffect(() => {
    getCurrencies(setListCurrency)
  }, [])

  useEffect(() => {
    setCurrencyOne(listCurrency[0])
    setCurrencyTwo(listCurrency[0])
    console.log('hell',currencyOne, currencyTwo);
  }, [listCurrency])

  useEffect(() => {
    console.log('useEffect from App, result1: ',result1);
    if(changesFromInputOne !== 'Enter'){
      setSecondInputValue('')
    }else setSecondInputValue(String(result1))
  }, [result1])

  useEffect(() => {
    console.log('useEffect from App, result2: ',result2);
    if(changesFromInputTwo !== 'Enter'){
      setFirstInputValue('')
    }else setFirstInputValue(String(result2))
  }, [result2])
  

  return (
    <div className="container">
      <h1>Change money</h1>
      <div className='container__list-currencies'>
          {ListCurrencies(listCurrency, 
                          firstInputValue, 
                          secondInputValue, 
                          changesFromInputOne, 
                          changesFromInputTwo, 
                          flag1, 
                          flag2, 
                          setResult1, 
                          setResult2, 
                          currencyOne,
                          currencyTwo, 
                          setCurrencyOne,
                          setCurrencyTwo,
                          setChangesFromInputOne,
                          setChangesFromInputTwo
                          )}
      </div>
      <div className='container__inputs'>
        <input type='text' className='container__inputs-one'
          onMouseDown={() => {setFlag1(flag1 + '1')}}
          onKeyDown={(e) => {setChangesFromInputOne(e.key)  
            console.log(e.key);
          }}
          onChange={(e) => {setFirstInputValue(e.target.value)}} value={firstInputValue}
          />
        <input type='text' className='container__inputs-two'
          onMouseDown={() => { setFlag2(flag2 + '1')}}
          onKeyDown={(e) => setChangesFromInputTwo(e.key)}
          onChange={(e) => setSecondInputValue(e.target.value)} value={secondInputValue}/>
      </div>
      <div className='container__btn'>
        <button className='container__btn-reverse' 
                onClick={() => reverseCurrencies( currencyOne, 
                                                  currencyTwo, 
                                                  setCurrencyOne, 
                                                  setCurrencyTwo,
                                                  setChangesFromInputOne )
                }
        >
          Revers
        </button>
        <button className='container__btn-btn' onClick={() => {
          setChangesFromInputOne('Enter')
          setChangesFromInputTwo('Enter')
        }}>Enter</button>
      </div>
    </div>
  );
}

export default App;

