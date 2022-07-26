import {Heading, Wrap} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import { useState } from 'react';
import Square from "./Square"
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

    const projectList = projects.map((project, index) =>{
        return (
            <Square delay={index}>
                    <ProjectCard props={project} index={index}/>
            </Square>
        )
    })



    return(
        <>
            <Heading mt='5vh' align='center'> Projects</Heading>
            <Wrap justify='center' w='100vw' minH='100vh' mb='15vh'>
                {projectList}
            </Wrap>
        </>
    )
}

export default Projects