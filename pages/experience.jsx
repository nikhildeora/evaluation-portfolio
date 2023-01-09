import React from 'react'
import Head from 'next/head'
import ExpCard from '../components/ExpCard';

const Experience = () => {
  return (
    <>
     <Head>
        <title>My Experience page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <ExpCard />
    </>
  )
}

export default Experience;