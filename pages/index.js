import Head from 'next/head'
import Mycard from '../components/Mycard'
import { Badge } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import ExpCard from '../components/ExpCard'
import ProjectCard from '../components/ProjectCard'

export default function Home({ mydata }) {
  return (
    <>
      <Head>
        <title>My home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{display:"flex",gap:"35px"}}>
        <div>
          <Mycard avatar={mydata.avatar_url} giturl={mydata.html_url} name={mydata.name} bio={mydata.bio} />
          <div style={{ border: 'none', width: "95%", margin: "auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.6rem", padding: "8px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <Badge colorScheme='green'>Typescript</Badge>
            <Badge colorScheme='green'>HTML</Badge>
            <Badge colorScheme='green'>CSS</Badge>
            <Badge colorScheme='green'>Javascript</Badge>
            <Badge colorScheme='green'>Github</Badge>
            <Badge colorScheme='green'>NextJs</Badge>
            <Badge colorScheme='green'>MongoDB</Badge>
            <Badge colorScheme='green'>Chakra</Badge>
            <Badge colorScheme='green'>Tailwind</Badge>
            <Badge colorScheme='green'>ReactJs</Badge>
            <Badge colorScheme='green'>Firebase</Badge>

          </div>

         <ExpCard />
        </div>

        <div>
          {/* <Text fontSize='5xl' as="b" >Projects</Text> */}
          
        </div>
      </div>
    </>
  )
}



export async function getStaticProps() {
  let res = await fetch(`https://api.github.com/users/nikhildeora`)
  let data = await res.json()
  console.log(data)
  return {
    props: {
      mydata: data,
    }
  }
}
