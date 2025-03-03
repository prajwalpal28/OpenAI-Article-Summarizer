import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//         url: 'https://time.com/6266679/musk-ai-open-letter/',
//         lang: 'en',
//         engine: '2'
//     },
//     headers: {
//         'x-rapidapi-key': '76a688d63fmsh5c2656171fd0fe5p141e0ejsn4a9aefdd8813',
//         'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
// };

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',

        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
});

export const { useLazyGetSummaryQuery } = articleApi;