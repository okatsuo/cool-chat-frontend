import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '../graphql/main'
import Head from 'next/head'
import { AuthProvider } from '../contexts/authentication'

function SafeHydrate({ children }: any) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <ApolloProvider client={client}>
        <AuthProvider>
          <Head>
            <title>Cool-Chat</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </AuthProvider>
      </ApolloProvider>
    </SafeHydrate>
  )
}

export default MyApp
