

export const reverseCurrencies = (  currencyOne: string, 
                                    currencyTwo: string, 
                                    setCurrencyOne: any,
                                    setCurrencyTwo: any,
                                    setChangesFromInputOne: any) => {
    console.log('Hello')
    let f = currencyOne;
    setCurrencyOne(currencyTwo);
    setCurrencyTwo(f)
    setChangesFromInputOne('Enter')
    // setFirstInputValue(firstInputValue)
}