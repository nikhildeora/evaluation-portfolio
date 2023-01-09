import Head from 'next/head'
import Mycard from '../components/Mycard'


export default function Home({mydata}) {
  return (
    <>
      <Head>
        <title>My home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <div>
          <Mycard avatar={mydata.avatar_url} giturl={mydata.html_url} name={mydata.name} bio={mydata.bio} />
          <div style={{border:"1px solid black"}}>

          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  let res = await fetch(`https://api.github.com/users/nikhildeora`)
  let data = await res.json()
  console.log(data)
  return {
    props : {
       mydata : data,
    }
  }
}
