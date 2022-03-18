import axios from "axios"

export const getCurrencies = async (setCurrencies: any) => {
    return await axios.get('https://openexchangerates.org/api/currencies.json').then((data: any) => {
    let key = Object.keys(data.data)  
    setCurrencies(key)}) 
  }