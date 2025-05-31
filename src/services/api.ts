import {
  BaseQueryFn,
  FetchArgs,
  createApi,
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

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs> = async (
  args,
  api,
  extraOptions,
) => {
 
  let result = await baseQuery(args, api, extraOptions);

  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithInterceptor,
  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (action.type === REHYDRATE && action.payload) {
  //     return action.payload;
  //     // return action.payload[reducerPath];
  //   }
  // },
  tagTypes: [

  ],
  endpoints: () => ({}),
});
