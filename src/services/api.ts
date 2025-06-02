import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootReducerType } from '../store';
// import { REHYDRATE } from 'redux-persist/es/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: ``,
  prepareHeaders: (headers, { getState }) => {
    // const token = (getState() as RootReducerType).auth.token;

    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`);
    // }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<FetchArgs | string> = async (
  arguments_,
  api,
  extraOptions,
) => {
 
  const result = await baseQuery(arguments_, api, extraOptions);

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  reducerPath: 'api',
  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (action.type === REHYDRATE && action.payload) {
  //     return action.payload;
  //     // return action.payload[reducerPath];
  //   }
  // },
  endpoints: () => ({}),
  tagTypes: [

  ],
});
