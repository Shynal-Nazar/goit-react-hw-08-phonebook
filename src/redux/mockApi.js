import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62868972f0e8f0bb7c17746e.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    createContact: builder.mutation({
      query: contact => ({
        url: './contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `./contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
