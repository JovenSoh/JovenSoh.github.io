import React from 'react'
import { useEffect } from 'react';
import {Chrono} from 'react-chrono'
import {Box, Heading, Text, Wrap} from '@chakra-ui/react'
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextSlide from './TextSlide';
import '../style.css'

function About(){

    const items = [{
            title: "2015",
            cardTitle: "Attended Hwa Chong Institution",
            cardDetailedText: "Attained Hwa Chong Diploma with Distinction"
        },
        {
            title: "2019",
            cardTitle: "DSO National Laboratories",
            cardDetailedText: "Intern under Young Defence Scientist Programme"
        },
        {
            title: "2019",
            cardTitle: "New Town Primary School",
            cardDetailedText: "Provided free tuition for students at CareHut, a school-based student care centre",
        },
        {
            title: "2021",
            cardTitle: "Ministry of Health",
            cardDetailedText: "Data Coordinator at Data Fusion Center"
        },
        {
            title: "2023",
            cardTitle: "National University Singapore",
            cardDetailedText: "Bachelors in Computer Science"
        },
      ]

    const theme = { 
        primary: "#8c8c8c",
        secondary: "rgba(18,18,18,0.2)",
        cardBgColor: "rgba(18,18,18,0.8)",
        cardForeColor: "#15bfe3",
        titleColor: "#15bfe3"
      }

    let paragraph = "I am a programmer from Singapore. Intending to pursue a Bachelors in Computer Sciences at NUS, I hope to leverage infocomm technologies to  help improve lives. During my leisure time, I enjoy photography and reading books."

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

      

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        } else if (!inView) {
        controls.start("hidden");
        }
    }, [controls, inView]);

      
    return(
            <Wrap w='full'  mt='5vh' justify='center' ref={ref}>  
                <AnimatePresence>
                <Box overflow='auto' maxH='25vh' w='600px'>
                    <Box bg='rgba(18,18,18,0.9)' mx='30px' >
                        <Heading as={motion.div} animate={controls} initial='hidden' variants={headerVariants} custom={0}>About me</Heading>
                        <TextSlide text={paragraph} controls={controls} delay={0.5} />
                    </Box>
                </Box>
                
                <Box overflow='hidden' mb='5vh' w='600px'>
                    <Box as={motion.div} animate={controls} initial='hidden' variants={letterVariants} custom={1}>
                        <Chrono items={items} useReadMore={false} theme = {theme} mode='VERTICAL_ALTERNATING' hideControls={true} cardHeight  />
                    </Box>
                </Box>
                </AnimatePresence>
            </Wrap>
    )
}

export default About