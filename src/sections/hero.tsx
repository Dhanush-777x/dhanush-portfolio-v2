'use client'
import MotionDiv from '@/components/motion-div';
import MotionText from '@/components/motion-text';
import { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HeroSection: React.FC = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer','Tech Enthusiast', 'Video Editor', 'Gamer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });

  return (
    <section className="my-20 flex flex-col items-center justify-center">
      <h1 className="mt-20 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hi, I'm Dhanush! 👋</MotionText>
        
      </h1>
      <MotionDiv delayOffset={0.1} className="overflow-hidden rounded-full p-3 md:p-4 lg:mb-10">
        <img className="h-[40vh] rounded-full" src="./profile-1.png" alt="profile" />
      </MotionDiv>
      <MotionDiv delayOffset={0.2}>
      <h1 className="text-[1.4rem] md:text-[2rem] py-4">
        A &lt; {text}<Cursor /> /&gt; 
      </h1>
      </MotionDiv>
      
      <div className="my-10 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={0.3}>
        <p>
          A passionate MERN Stack developer who thrives on building innovative and cool projects.
        </p>
        </MotionDiv>
        
      </div>
    </section>
  );
};

export default HeroSection;
