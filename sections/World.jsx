'use client';

import { motion } from 'framer-motion'

import { TypingText, TitleText } from '../components'

import styles from '../styles'

import { fadeIn, staggerContainer } from '../utils/motion'



const World = () => (
  <section className={`relative z-10 ${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title='| People from all over the World!' textStyles='text-center' />
      <TitleText 
        title={(
          <>
            Track Your Friends and invite them to play together!
          </>
        )}
        textStyles='text-center'
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img 
          src='/map.png'
          alt='map'
          className='w-full h-full object-cover'
        />
         <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-03.png' alt='people' className='w-full h-full' />
        </div>
        <div className="absolute top-9 right-[25%] w-[220px] h-[146px] p-[6px] rounded-[20px] bg-[#5D6680]">
            <img
              src='/card-1.png'
              alt='card-2'
              className='w-full h-full'
            >
            </img>
            
              <div className='absolute top-[60px] left-[16px] text-white flex flex-row justify-center mx-3 ' >
                <img
                  src='/circle- 1.png'
                  alt='card-2'
                  className='w-full h-full ml-[-10px]'
                />
                <img
                  src='/circle- 2.png'
                  alt='card-2'
                  className='w-full h-full ml-[-10px]'
                />
                <img
                  src='/circle- 3.png'
                  alt='card-2'
                  className='w-full h-full ml-[-10px]'
                />
              </div>
              <h1 className='absolute top-[60px] right-[16px] text-white text-[15px]'> 
              + 264 has joined
              </h1>
              <div  className='absolute bottom-[10px] left-[12px] text-white text-[25px] mx-4 my-1 font-bold'>
                <h1>Hawkins Labs</h1>
              </div>
        </div>
        <div className="absolute top-[35%] left-[20%] w-[220px] h-[146px] p-[6px] rounded-[20px] bg-[#5D6680]">
            <img
              src='/card-2.png'
              alt='card-2'
              className='w-full h-full'
            >
            </img>
            
              <div className='absolute top-[60px] left-[16px] text-white flex flex-row justify-center mx-3 ' >
                <img
                  src='/circle- 1.png'
                  alt='card-2'
                  className='w-full h-full ml-[-10px]'
                />
                <img
                  src='/circle- 2.png'
                  alt='card-2'
                  className='w-full h-full ml-[-10px]'
                />
                <img
                  src='/circle- 3.png'
                  alt='card-2'
                  className='w-full h-full ml-[-10px]'
                />
              </div>
              <h1 className='absolute top-[60px] right-[16px] text-white text-[15px]'> 
              + 64 has joined
              </h1>
              <div  className='absolute bottom-[10px] left-[12px] text-white text-[20px] mx-4 my-1 font-bold'>
                <h1>The Upside Down</h1>
              </div>
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;
