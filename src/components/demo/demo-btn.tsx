'use client'

import React from 'react'

export default function DemoBtn() {
    const clickHandler = async()=>{
        const data = await fetch("/api/demo", {method:"GET"})
        alert("update db success")
    }
  return (
    <button onClick={()=>{clickHandler()}}>DemoBtn</button>
  )
}
