import React from 'react'

export default function CurrencyInfoTables({ currencyInfo, isHidden, handleIsHiddenChange }) {
    const countriesArray = currencyInfo?.countries.split(', ')
    let renderCountries = ''
    renderCountries = countriesArray <= 3 ?
        (<>{currencyInfo?.countries}</>)
        :
        (<>{countriesArray?.slice(0, 3).join(', ')}
            {isHidden ?
                <span className='three-dots-hidden-text' onClick={() => handleIsHiddenChange(false)}> ...</span>
                :
                <>, {countriesArray?.slice(3).join(', ')}</>}
        </>)
    return (
        <div className='conversion-container'>
            <h2 className='container-header'>{currencyInfo?.code}</h2>
            <table className='conversion-container-table info-table'>
                <tbody>
                    <tr>
                        <td>Symbol</td>
                        <td>{currencyInfo?.symbol}</td>
                    </tr>
                    <tr>
                        <td>Code</td>
                        <td>{currencyInfo?.code}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{currencyInfo?.name}</td>
                    </tr>
                    <tr>
                        <td>Countries</td>
                        <td>{renderCountries}</td>
                    </tr>
                    <tr>
                        <td>Flag</td>
                        <td><img
                            src={`https://flagcdn.com/w40/${currencyInfo?.countryCode?.toLowerCase()}.png`}
                            alt="Country flag."
                        /></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}