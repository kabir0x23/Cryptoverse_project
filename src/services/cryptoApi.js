import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// const RAPIDAPI_HOST = process.env.REACT_APP_RAPIDAPI_HOST;
const REACT_APP_APIKey = process.env.REACT_APP_APIKey;

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    // 'X-RapidAPI-Key': 'b1d57f69b3mshadfcecfc9e489a6p14b18cjsn87ec366e56b2'
    'X-RapidAPI-Key': REACT_APP_APIKey
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const creatRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'createApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => creatRequest(`/coins?limit=${count}`)
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => creatRequest(`/coin/${coinId}`)

        }),

        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod}) => creatRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`)

        }),
        //
        // Note: To access this endpoint you need premium plan
        // getExchanges: builder.query({
        //     query: () => createRequest('/exchanges'),
        // }),
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery,
    // useGetExchangesQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;
