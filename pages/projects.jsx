import React from 'react'
import Head from 'next/head'

import ProjectCard from '../components/ProjectCard'

const Projects = ({repos}) => {
  return (
    <>
     <Head>
        <title>My Project page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
    {/* <Text fontSize='5xl' as="b" >Projects</Text>
        {repos?.map((item)=>(
            console.log(item)
        ))} */}

       <ProjectCard repos={repos} /> 
    </div>
    </>
  )
}

export async function getServerSideProps(){
    let res = await fetch(`https://api.github.com/search/repositories?q=user:nikhildeora+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data = await res.json()
    return {
      props : {
       repos : data.items
      }
    }
  }

export default Projects;