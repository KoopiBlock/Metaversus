'use client';

import { motion } from 'framer-motion'

import { TypingText, TitleText, ExploreCard, StartSteps } from '../components'
import styles from '../styles'
import { fadeIn, staggerContainer, planetVariants } from '../utils/motion'

import { startingFeatures } from "../constants";



const GetStarted = () => (
  <section className={`relative z-10 ${styles.paddings}`}>
   <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: 'false', amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
   >
    <motion.div
      variants={planetVariants('left')}
      className={`${styles.flexCenter} flex-1`}
    >
      <img 
        src='/get-started.png'
        alt='get-started'
        className='w-[90%] h-[90%] object-contain'
      />
    </motion.div>
    <motion.div 
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className='flex-[0.75] flex justify-center flex-col'
    >
      <TypingText title='| How MetaVersus Works ' />
      <TitleText title={<>Get Started With a Few Clicks!</>} />
      <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
        {startingFeatures.map((feature, index) => (
          <StartSteps 
            key={feature}
            number={index + 1}
            text={feature}
          />
        ))}
      </div>
    </motion.div>

   </motion.div>
  </section>
);

export default GetStarted;