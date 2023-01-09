import React from 'react'
import { Text } from '@chakra-ui/react'
import { PhoneIcon, StarIcon, WarningIcon } from '@chakra-ui/icons'


const ProjectCard = ({repos}) => {
  return (
    <div>
        <Text fontSize='5xl' as="b" >Projects</Text>
        <div>
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