import { Wrap, Box, Heading, Text, Spacer} from '@chakra-ui/react'
import SimpleWordCloud from './SimpleWordCloud'
import { motion, useAnimation, AnimatePresence} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import TextSlide from './TextSlide';
import {useState, useEffect, useRef} from 'react'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
  


function Skills() {
    const { height, width } = useWindowDimensions();

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        } else if (!inView) {
        controls.start("hidden");
        }
    }, [controls, inView]);


    const headerVariants = {
        hidden: {
            x: "-50%",
        },
        visible: (custom) => ({
            x: 0,
            transition: { delay:custom, ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }
        })
    }

    const letterVariants = {
        hidden: {
            y: "100%",
        },
        visible: (custom) => ({
            y: 0,
            transition: { delay:custom, ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }
        })
    }

    const draw = {
        hidden: { strokeDashoffset: 100},
        visible: {
            strokeDashoffset: 0,
            transition: {
              strokeDashoffset: { duration: 1.5 },
          }
        }
      };

    const Line = ({percentage}) => {
        const controls = useAnimation();
        const [ref, inView] = useInView();
        useEffect(() => {
            if (inView) {
            controls.start("visible");
            } else {
                controls.start("hidden")
            }
        }, [controls, inView]);
        return (
            <motion.svg
            width="100%"
            height="10"
            viewBox="0 0 100% 10"
            initial="hidden"
            animate={controls}
            ref={ref}
            >
            <motion.line
                z='0'
                x1="0"
                y1="5"
                x2="100%"
                y2="5"
                stroke="#FFF"
                pathLength="100"
                strokeDasharray="100"
            />
            
            <motion.line
                z='1'
                x1="0"
                y1="5"
                x2={percentage}
                y2="5"
                stroke="#30D1FA"
                pathLength="100"
                strokeDasharray="100"
                variants={draw}
            />
             </motion.svg>
        )
    }
      
    
    const getWidth = () => {
        if (width < 1200){
            return 600
        }else{
            return 1200
        }
    }

    let paragraph="Over the course of my studies, I have picked up various programming languages while working on projects involving artificial intelligence and fullstack development. I can help you create responsive websites that capture the attention of your audience and generate leads."
    
    const containerRef = useRef(null);
    const containerHeight = ref.offsetHeight;
    const windowHeight = window.innerHeight;
    const heightA = containerHeight > windowHeight ? containerHeight : windowHeight;
    
    return(
        <div ref={containerRef}>
        <Wrap  w='full' h={heightA} justify='center' >
            <Box w='600px' px='30px' overflow='auto' bg='rgba(18,18,18,0.9)' maxH='50vh' ref={ref}>
                <Heading>Skills</Heading>
                <TextSlide text={paragraph} controls={controls} delay={0.5} />          
            </Box>
            <Box w='600px' overflow='hidden' mx='30px' bg='rgba(18,18,18,0.9)' maxH='50vh'>
                <Box as={motion.div} animate={controls} initial='hidden' variants={letterVariants} custom={1}>
                    <SimpleWordCloud />
                </Box>
            </Box>
            <Box px='30px' overflow='hidden' w = {getWidth()} bg='rgba(18,18,18,0.9)'>
                <Box as={motion.div} animate={controls} initial='hidden' variants={letterVariants} custom={1.5}>
                    <Text my='5px'>Artificial Intelligence</Text>
                        <Line percentage = "75%" />
                    <Text my='5px'>Website Development</Text>
                        <Line percentage = "65%" />
                    <Text my='5px'>Backend</Text>
                        <Line percentage = "50%" />
                </Box>
            </Box>
        </Wrap>
        </div>
    )
}

export default Skills