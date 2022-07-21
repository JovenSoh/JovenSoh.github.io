import React from "react"
import { useState } from "react";
import { Box, AspectRatio, Button, Icon, Link, Text} from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import { GoMarkGithub } from "react-icons/go";
import {CgWebsite} from 'react-icons/cg'
import { motion } from "framer-motion";


function Github({props}) {
    if (props.github) {
        return(
            <Link href={props.github} isExternal>
                <Button _hover={{background:'black'}}  ml='5px' px='3px' leftIcon = {<Icon as={GoMarkGithub}/>} color='white' fontSize='12px' size='xs' variant='outline'>
                        View Source
                </Button>
            </Link>
        )
    }
    else if (props.website) {
        return(
            <Link href={props.website} isExternal>
                <Button _hover={{background:'black'}} ml='5px' px='3px' leftIcon = {<Icon as={CgWebsite}/>} color='white' fontSize='12px' size='xs' variant='outline'>
                        View Website
                </Button>
            </Link>
        )
    }
}

function ProjectCard({props}) {
    const [hover, setHover] = useState(false)
    return(
        <Box as={motion.div} whileHover={{scale:1.1}} onHoverStart={() => setHover(true)} bg='rgba(18,18,18,0.9)' onClick={() => window.open(props.github ? props.github : props.website)} align='left' m='5px' w='170px' boxShadow='2xl' maxH='300px' borderRadius='10px' overflow='hidden'>
            <Box as={motion.div}  >         
                <AspectRatio ratio={4/3}>
                    <Image objectFit='cover' borderTopRadius='10px' p='0px' src={props.image} alt='photo' />
                </AspectRatio>
            </Box>
            <Box isTruncated maxH='48px' color='white' fontFamily='Courier New' fontWeight='semibold' p='3px'>
                {props.title}
            </Box>
            <Box overflow='auto' h='110px' fontSize='12' p='3px'>
                <Text> {props.desc} </Text>
            </Box>
            <Github props={props} />
        </Box>
    )
}

export default ProjectCard