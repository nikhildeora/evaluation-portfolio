import React from 'react'
import { Text } from '@chakra-ui/react'
import { PhoneIcon, StarIcon, WarningIcon } from '@chakra-ui/icons'


const ProjectCard = ({repos}) => {
  return (
    <div>
        <Text fontSize='5xl' as="b" >Projects</Text>
        <div style={{display:"grid",gridTemplateColumns: "repeat(4,1fr)", gap: "0.6rem", padding: "8px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            {repos?.map((item)=>{
                return (
                    <div key={item.id}>
                       <StarIcon />
                       <Text>{item.name}</Text>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProjectCard;