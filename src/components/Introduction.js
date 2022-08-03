import { Link, Flex, HStack, IconButton, Spacer, Image, VStack, Box} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { motion } from "framer-motion"
import profile from '../images/profile.JPG'
import NameChange from './NameChange'

function Introduction() {

  return (
    <VStack h='full'>
      <Spacer />
      <Box align='center'>
            <NameChange />
            <Link href='https://wa.me/6591187460' isExternal>
                <Box as={motion.div} w='150px' fontSize='20px' fontFamily='Courier New' color="#17CCF9" border='1px' p='5px' borderRadius='10px' whileHover={{scale:1.1}}>
                  Contact Me
                </Box>
            </Link>
      </Box>
      <Spacer />
      <Spacer />
            
      <Box bg='rgba(18,18,18,0.9)' pb='5%'> 
        
        <Box align='center'>
          <Image boxSize='100px'  borderRadius='full' src={profile} alt='profile.png'/>
          <Box ml='5px' mt='5px'>
            <HStack>
              <Link href='https://www.linkedin.com/in/wei-kiat-soh-981b51213/' isExternal>
                <IconButton size='xs' colorScheme='linkedin' aria-label='LinkedIn' as ={AiFillLinkedin} boxSize='20px' variant='ghost' />
              </Link>
              <Link href='https://instagram.com/death25525' isExternal>
                <IconButton size='xs' colorScheme='red' aria-label='Instagram' as ={BsInstagram} boxSize='20px' variant='ghost' />
              </Link>
              <Link href='https://github.com/jovensoh' isExternal>
                <IconButton size='xs' colorScheme='gray' aria-label='Github' as ={GoMarkGithub} boxSize='20px' variant='ghost' />
              </Link>
            </HStack>
          </Box>
        </Box>
        <Spacer />
      </Box>
    </VStack>
    )
}

export default Introduction