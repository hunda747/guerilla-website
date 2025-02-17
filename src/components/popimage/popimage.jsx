'use client';
import styles from './popimage.module.scss'
import { useState } from 'react';
import Project from './project/project';
import Modal from './modal/modal';

import event2 from '../../assets/images/showcaserol1.png';
import event3 from '../../assets/images/showcasesafari1.png';
import safariEvent from '../../assets/images/gorilla11.png';
import safariEventOnCar from '../../assets/images/gorilla8.png';
import maltaGroupEvent from '../../assets/images/gorilla26.jpg';
import cocacolaEvent from '../../assets/images/gorilla3.png';
// title1: "Coca-Cola",
//       title2: "Billion Reasons To Believe",
//       src: safariEvent
//     },
//     {
//       title1: "Habesha Brewery",
//       title2: "Brand Activation",
//       src: maltaGroupEvent
//     },
//     {
//       title1: "East Africa Tigers Brands",
//       title2: "Consumer Tent Activation",
const projects = [
  {
    title: "Safaricom",
    src: event3,
    color: "green",
    description: "PR Event"
  },
  {
    title: "Roll Detergent",
    src: event2,
    color: "#8C8C8C",
    description: "Volume Uplifting"
  },
  {
    title: "Coca-Cola",
    src: cocacolaEvent,
    color: "red",
    description: "Billion Reasons To Believe"
  },
  {
    title: "Habesha Brewery",
    src: maltaGroupEvent,
    color: "#706D63",
    description: "Brand Activation"
  },
  {
    title: "East Africa Tigers Brands",
    src: safariEventOnCar,
    color: "#706D63",
    description: "Consumer Tent Activation"
  }
]

export default function PopImage() {
  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
    <>
      {/* <h1>Our Projects</h1> */}
      <main className={styles.main}>
        <div className={styles.body}>
          {
            projects.map((project, index) => {
              return <Project index={index} title={project.title} description={project.description} setModal={setModal} key={index} />
            })
          }
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </>
  )
}