import {React, useEffect, useState} from "react";
import { Text, Heading, Box, Flex, Center} from "@chakra-ui/react";
import { motion } from "framer-motion";

function NameChange() {

    const [count, setCount] = useState(1)
    const [name, setName] = useState('a Web Developer')
    const names = ['a Web Developer','a Photographer','an AI Enthusiast', 'a Student','a Programmer']

    const onUpdate = () => {
      setCount(count+1)
      setName(names[count%names.length])
    }

    const [color, setColor] = useState("#a3a3a3")
    const changeColor = () => {
      color === "#a3a3a3" ?  setColor('#17CCF9') : setColor('#a3a3a3')
    }

    const MotionBox = motion(Box)

    function LightUp({props}){
      let letters = props.split("")
      return(
        letters.map((a,index) => {return(
          <MotionBox letterSpacing='8px' fontSize='48px' m='3px'  _hover={{textColor:"#17CCF9"}} animate={{scale:[1,1.2,1]}} transition={{delay:index/20}} >
              {a}
          </MotionBox>
        )})
      )
    }

    return(
      <Box w='100vw'>
        <Center>
          <Heading letterSpacing='5px' color={color}> 
            <Flex pb='10%'>
              <LightUp props="Hey, I'm Wei Kiat"/>
            </Flex>
          </Heading>
        </Center>
        <Text bg='rgba(18,18,18,0.9)' fontSize='24px' letterSpacing='8px' align='center' pb='5%' px='5%' >
            <motion.p onUpdate={onUpdate} animate={{skewX:[-100,100,0], transition:{duration:0.07, repeatDelay:1.43, repeat:Infinity }}}> {name}. </motion.p>   <p></p><p></p> I can help <strong>YOU</strong> design solutions using technology 
        </Text>
      </Box>
    )
}

export default NameChange