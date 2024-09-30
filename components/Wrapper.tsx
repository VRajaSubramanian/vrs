import React from 'react'
import {WrapperProps} from "@/Types"
export default function Wrapper({children,className}:WrapperProps) {
  return (
    <div>
      <section className={className}>
        <>
        {children}
        </>
      </section>
    </div>
  )
}

