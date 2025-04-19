'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { spectralBridgeRegular } from '@/fonts/font'

type Header = {
  readonly text: string;
}

function Header5({ text }: Header) {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.h2 
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={gradual}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${spectralBridgeRegular.className} text-[8vw] md:text-[5vw] leading-[1]`}
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.h2>
            ))}
      </AnimatePresence>
    </div>
  )
}

export default Header5