import React from 'react'

function Heading({ text }: { text: string }) {
    return (
      <p className="mb-1 uppercase text-[14px] 2xl:text-[24px] text-accent dark:text-accent">
        {text}
      </p>
    );
  }

export default Heading