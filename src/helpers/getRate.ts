import axios from "axios"

const API_KEY = '50dbe660f41b73fe2f00a4af';

export const getRate = async (currencyOne: string,  currencyTwo: string, value: string, setResult: any, setChangesFromInput: any) => {
    console.log(currencyOne,currencyTwo);
    
    if(!value) return null
    
    return await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${currencyOne}/${currencyTwo}/${value}`)
            .then(({data}) => 
                {console.log(data.conversion_result)
                setResult(data.conversion_result) 
                
            })
}