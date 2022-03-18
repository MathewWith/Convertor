import {useEffect, useState} from "react"
import {getRate} from "../getRate"
import './list-currencies.scss'

export const ListCurrencies = ( currency: string[], 
                                firstInputValue: string, 
                                secondInputValue: string, 
                                changesFromInputOne: string, 
                                changesFromInputTwo: string,
                                flag1: string, 
                                flag2: string, 
                                setResult1: any,
                                setResult2: any,
                                currencyOne: string, 
                                currencyTwo: string,
                                setCurrencyOne: any,
                                setCurrencyTwo: any,
                                setChangesFromInputOne: any,
                                setChangesFromInputTwo: any) => {

    

    let [caseCurrencyOne, setCaseCurrencyOne] = useState('');
    let [caseCurrencyTwo, setCaseCurrencyTwo] = useState('');

    useEffect(() => {
        getRate(currencyOne, currencyTwo, firstInputValue, setResult1, setChangesFromInputOne)
    }, [currencyTwo])

    useEffect(() => {
        console.log('firstInputValue form useEffect: ',firstInputValue);
        
        getRate(caseCurrencyOne, caseCurrencyTwo, firstInputValue, setResult1, setChangesFromInputOne)
    }, [changesFromInputOne])
    
    useEffect(() => {
        console.log('secondInputValue form useEffect: ',secondInputValue);
        getRate(caseCurrencyOne, caseCurrencyTwo, secondInputValue, setResult2, setChangesFromInputTwo)
    }, [changesFromInputTwo])

    useEffect(() => {
        setCaseCurrencyOne(currencyOne);
        setCaseCurrencyTwo(currencyTwo)
    }, [flag1])

    useEffect(() => {
        setCaseCurrencyOne(currencyTwo);
        setCaseCurrencyTwo(currencyOne)
    }, [flag2])

    return (
        <div className="wrapper">
            <div className="child-one">From</div>
            <div className="child-two">To</div>
            <select className="wrapper__list-currencies" onChange={e => setCurrencyOne(e.target.value)}>
                <optgroup label="Currency">
                {currency.map((cur) => {
                    return <option key={cur}>{cur}</option>
                })}
                </optgroup>
            </select>
            <select className="wrapper__list-currencies" onChange={e => setCurrencyTwo(e.target.value)}>
                <optgroup label="Currency">
                {currency.map((cur) => {
                    return <option key={cur}>{cur}</option>
                })}
                </optgroup>
            </select>
        </div>
        
    )
}

