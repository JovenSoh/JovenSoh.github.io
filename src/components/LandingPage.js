import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence, useMotionValue, useAnimation } from "framer-motion"
import {Center, Box, Text} from '@chakra-ui/react'
import { useInView } from "react-intersection-observer"
import TextReveal from './TextReveal'

export default function LandingPage() {
  const x = useMotionValue(0)
  const constraintsRef = useRef(null)

  const draw = {
    hidden: { strokeDashoffset: 100 },
    visible: (i) => {
      const delay = i;
      return {
        strokeDashoffset: 0,
        transition: {
          strokeDashoffset: {delay, duration: 3 },
        }
      }
    }
  };

  const Animate = (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
          controls.start("visible");
        } else {
          controls.start("hidden")
        }
    }, [controls, inView]);
    let viewBox="0 0 300 300"
    if (props.type == 'svg') {
      viewBox = "-115 -90 300 300"
    }

    return (
      <motion.svg
      width="300"
      height="300"
      viewBox={viewBox}
      initial="hidden"
      animate={controls}
      ref={ref}
      >
        {props.children}
      </motion.svg>
    )
  }


  return (
    <>
    <Center h='95vh'>

          <Box bg='rgba(18,18,18,0.9)' position='absolute' h='300px' w='300px' zIndex='1' > 
            <Animate type='rect'>  
              <motion.rect
              width="300"
              height="300"
              rx="50px"
              ry='50px'
              stroke="#4FCCFE"
              pathLength="100"
              strokeDasharray="100"
              variants={draw} />
            </Animate> 
          </Box>
          <Box position='absolute' h='300px' w='300px' zIndex='2'> 
            <motion.div 
              animate={{rotate: [-5,5,-5,5,0], transition:{ duration: 0.1, repeat: Infinity, repeatDelay: 3, repeatType:'reverse'}}}
              whileHover={{ scale:1.1 }} 
              whileTap={{ scale:[0.8,1.2],transition:{duration: 0.3, repeat: Infinity, repeatDelay: 0, repeatType:'reverse'} }} 
              drag 
              dragSnapToCenter={true} 
              whileDrag={{scale:[0.7,1.3], rotate: [-10,10], transition:{duration: 0.3, repeat: Infinity, repeatDelay: 0, repeatType:'reverse'}}}  
              dragConstraints={constraintsRef}
              >

              <Animate type='svg'>
                <motion.path
                  d="M 0 80.361 L 8.54 72.801 Q 13.58 80.781 21.42 85.471 Q 29.26 90.161 38.36 90.161 Q 48.3 90.161 53.48 85.751 A 14.451 14.451 0 0 0 58.569 75.733 A 20.36 20.36 0 0 0 58.66 73.781 A 19.724 19.724 0 0 0 58.007 68.557 A 14.019 14.019 0 0 0 53.13 61.111 Q 48.135 57.127 37.827 54 A 105.502 105.502 0 0 0 35.56 53.341 A 75.192 75.192 0 0 1 23.823 49.511 Q 18.041 47.027 14.066 43.789 A 22.14 22.14 0 0 1 5.32 25.901 A 30.613 30.613 0 0 1 6.279 18.013 A 21.433 21.433 0 0 1 13.44 6.721 Q 20.291 1.051 31.628 0.165 A 55.887 55.887 0 0 1 35.98 0.001 A 48.391 48.391 0 0 1 46.524 1.107 A 39.635 39.635 0 0 1 54.81 3.921 Q 63.14 7.841 69.72 15.961 L 61.46 22.961 Q 56.42 16.101 50.4 12.811 A 26.094 26.094 0 0 0 42.644 10.106 A 36.117 36.117 0 0 0 35.98 9.521 A 30.906 30.906 0 0 0 29.818 10.101 Q 25.878 10.903 22.8 12.811 A 18.61 18.61 0 0 0 21.56 13.651 A 13.062 13.062 0 0 0 16.059 23.077 A 16.802 16.802 0 0 0 15.96 24.921 A 16.475 16.475 0 0 0 16.782 30.244 A 13.636 13.636 0 0 0 21.14 36.471 Q 25.523 40.083 35.016 42.744 A 96.113 96.113 0 0 0 38.64 43.681 A 82.932 82.932 0 0 1 47.881 46.723 Q 52.619 48.619 56.394 50.95 A 39.272 39.272 0 0 1 61.25 54.461 Q 69.3 61.321 69.3 73.781 A 25.633 25.633 0 0 1 68.06 81.867 A 22.687 22.687 0 0 1 65.38 87.361 A 24.421 24.421 0 0 1 57.672 94.662 A 31.335 31.335 0 0 1 54.11 96.531 A 36.631 36.631 0 0 1 45.066 99.191 A 49.816 49.816 0 0 1 36.96 99.821 A 42.835 42.835 0 0 1 18.077 95.359 A 50.519 50.519 0 0 1 16.52 94.571 Q 6.58 89.321 0 80.361 Z"
                  fill="transparent"
                  strokeWidth="12"
                  stroke="#4FCCFE"
                  pathLength="100"
                  strokeDasharray="100"
                  strokeLinecap="round"
                  variants={draw}
                  custom={0}
                />
              </Animate>

            </motion.div>
          </Box>
          <Box position='absolute' h='300px' w='300px' ref={constraintsRef} zIndex='1'>
            <Text mt='15px' ml='260px' bg='transparent'>
              {new Date().getFullYear() - 2002}
            </Text>
            <Center>
              
                <Text style={{visibility:'hidden'}} fontSize='130px'>
                <strong> S </strong>
                </Text>

            </Center>
            

            <Center >
                <TextReveal delay={0.25}>
                   Soh Wei Kiat 
                </TextReveal>
            </Center>
            <Center >
              <TextReveal delay={1}>
                苏维杰
              </TextReveal>
            </Center>
          </Box>

    </Center>
    <Center h='5vh'>
      <AnimatePresence>
        <motion.div animate={{y:-5,transition:{ duration:0.5,repeat:Infinity, repeatType:'reverse'}}}>
          <Text>↓ Scroll for more ↓ </Text>
        </motion.div>
      </AnimatePresence>
    </Center>
  </>
  )
}
