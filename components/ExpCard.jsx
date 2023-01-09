import React from 'react'
import { Text } from '@chakra-ui/react'

const ExpCard = () => {
  return (
    <div style={{ width: "22%", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: "30px", padding: "8px", display: "grid", rowGap: "16px", paddingTop: "20px" }}>
    <div>
      <Text as='b' fontSize='md'>Anspiring Full Stack Web Developer</Text>
      <Text fontSize='sm'>At Masai School</Text>
      <Text fontSize='sm'>July 2022 to present</Text>
    </div>
    <div>
      <Text as='b' fontSize='md'>Digital Marketing</Text>
      <Text fontSize='sm'>Proideators</Text>
      <Text fontSize='sm'>Oct 2019 to April 2020</Text>
    </div>
    <div>
      <Text as='b' fontSize='md'>B.com</Text>
      <Text fontSize='sm'>MLSU College</Text>
      <Text fontSize='sm'>April 2014 to March 2017</Text>
    </div>
    <div></div>
    <div></div>
  </div>
  )
}

export default ExpCard;