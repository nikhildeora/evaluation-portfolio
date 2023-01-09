import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link as ChakraLink,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';

const Mycard = ({avatar,giturl,name,bio}) => {
    return (
        <Center py={6}>
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
              size={'xl'}
              src={avatar}
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
               {name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              <a href={giturl} target="_blank" rel="noreferrer" style={{color:"grey"}}>@nikhilDeora</a>
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
               {bio}
            </Text>
    
    
            <Stack mt={8} direction={'row'} spacing={4} justifyContent={"space-around"}>
                <ChakraLink href="https://drive.google.com/file/d/10gcj2_8-ZXwjgekaawHwj70bA9XS5S1F/view?usp=share_link"  target="_blank"  rel="noreferrer">
              <Button
                flex={1}
                color={'black'}
                fontSize={'sm'}
                bg={'green.400'}
                rounded={'full'}
                _hover={{
                    bg: 'green.500',
                  }}
                _focus={{
                  bg: 'green.500',
                }}>
                Resume
              </Button></ChakraLink>
              
              <ChakraLink href={giturl} target="_blank" rel="noreferrer">
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Follow
              </Button>
                </ChakraLink>
            </Stack>
          </Box>
        </Center>
      );
}

export default Mycard;