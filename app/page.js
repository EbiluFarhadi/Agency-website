"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import { motion, useAnimation } from 'framer-motion';
import WhoWeInvest from '@/src/components/WhoWeInvest/WhoWeInvest';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';

const WhatWeDo = dynamic(() => import('@/src/components/WhatWeDo/WhatWeDo'), {
  ssr: false,
})
const OurDiff = dynamic(() => import('@/src/components/OurDiff/OurDiff'),{
  ssr: false,
} )
const HowItWorks = dynamic(() => import('@/src/components/HowItWorks/HowItWorks'), {
  ssr: false
})
export default function Home() {

  const controls = useAnimation()

  return (<Suspense fallback={<div>Loading...</div>}>
      <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <motion.div
      onViewportEnter={()=> 
        controls.start({
          backgroundColor: "var(--secondary-color)",
        })
      } 
      onViewportLeave={()=> controls.start({
        backgroundColor: "white",
      })}
      viewport={{amount: 0.4}}
      >
        <OurDiff />
      </motion.div>
      <HowItWorks />

      <motion.div
      onViewportEnter={()=> 
        controls.start({
          backgroundColor: "var(--primary-color)",
        })
      } 
      onViewportLeave={()=> controls.start({
        backgroundColor: "white",
      })}
      viewport={{amount: 0.4}}
      >
        <WhoWeInvest />
      </motion.div>

      <Testimonials />
      <Footer />
    </motion.div>
    </Suspense>
    
  );
}
