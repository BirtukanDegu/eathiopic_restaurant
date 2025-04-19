import React from 'react'
import { spectralBridgeRegular } from '@/fonts/font'

type Header = {
  readonly text: string;
}

function Header4({ text }: Header) {
  return (
    <h2 className={`${spectralBridgeRegular.className} text-[10vw] md:text-[8vw] leading-[1]`}>{text}</h2>
  )
}

export default Header4