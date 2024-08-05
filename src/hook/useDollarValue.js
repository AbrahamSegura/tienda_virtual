//import useSWR from "swr";

export const useDollarValue = () =>{
    let dollar = 0
    // const API_KEY = '694286104b1f4d3abfba4504c21721d3'
    // const { data, error, isLoading } = useSWR(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}&symbols=VES`);
    // if (isLoading) return 0
    // if (data) return data?.rates?.VES
    // if (error) throw new Error(error)
    dollar = 35.43
    const changeFromDollar = (price) => (price * dollar).toFixed(2)
    return {dollar, changeFromDollar}
}
