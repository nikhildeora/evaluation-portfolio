import React from 'react'
import { Text } from '@chakra-ui/react'
import {StarIcon,ChatIcon ,ViewIcon} from '@chakra-ui/icons'


const ProjectCard = ({repos}) => {
  return (
    <div>
        <Text fontSize='5xl' as="b" >Projects</Text>
        <div style={{display:"grid",gridTemplateColumns: "repeat(4,1fr)", gap: "0.6rem", padding: "8px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            {repos?.map((item)=>{
                return (
                    <div key={item.id}>
                        <ChatIcon />
                       <Text>{item.name}</Text>
                       <Text>{item.visibility}</Text>
                       <StarIcon />
                       <Text>{item.score}</Text>
                        <ViewIcon />
                        <Text>{item.forks_count}</Text>
                        <Text>{item.language}</Text>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProjectCard;