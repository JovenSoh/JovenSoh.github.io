import {Heading, Wrap, Box} from '@chakra-ui/react'
import { useAnimation, AnimatePresence, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import detections from '../images/detections.gif'
import readr from "../images/readr.gif"
import mahjong from "../images/mahjong.gif"


function Projects() {
    const projects = [{
        'title':'Canteen Tracker',
        'desc':'Computer vision model developed to measure crowd density and adherence to social distancing. Built using YOLOv3.',
        'image': detections,
        'website': null,
        'github': "https://github.com/JovenSoh/School-YOLO",
    },
    {
        'title': 'Radar Classification',
        'desc':'Classification of radar signals using Convolutional Neural Networks.',
        'image':'https://c.tenor.com/8Juj0k-1L4AAAAAM/radar-love-search.gif',
        'website': null,
        'github': 'https://github.com/JovenSoh/Signal-Modulation-Detection-using-Conv1D',
    },
    {
        'title': 'Pose Detection',
        'desc':'Deep learning model for the classification of human poses using Mask RCNN and VGG19.',
        'image':'https://raw.githubusercontent.com/JovenSoh/Pose-Detector/master/ModelArchitecture.png',
        'website': null,
        'github': "https://github.com/JovenSoh/Pose-Detector",
    },
    {
        'title': 'Readr',
        'desc':'Collection of books that I have read.',
        'image':readr,
        'website': "https://jovensoh.github.io/readr",
        'github': null,
    },
    {
        'title': 'SG Mahjong',
        'desc':'Play Singapore Mahjong with your friends! Built using React and Websockets.',
        'image':mahjong,
        'website': "https://jovensoh.github.io/sgmahjong",
        'github': null,
    },
    ]

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        } else if (!inView) {
        controls.start("hidden");
        }
    }, [controls, inView]);
    
    const cardVariants = {
        hidden: {
            opacity: "0%",
        },
        visible: (custom) => ({
            opacity: "100%",
            transition: { delay:custom, ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5 }
        })
    }

    const projectList = projects.map((project, index) =>{
        return (
            <Box as={motion.div} animate={controls} initial='hidden' variants={cardVariants}>
                <ProjectCard props={project} index={index}/>
            </Box>
                
        )
    })


    return(
        <>
            <Heading mt='5vh' align='center'> Projects</Heading>
            <AnimatePresence>
                <Wrap justify='center' w='100vw' minH='100vh' mb='15vh' ref={ref}>
                    {projectList}
                </Wrap>
            </AnimatePresence>
        </>
    )
}

export default Projects