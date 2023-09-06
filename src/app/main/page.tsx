"use client"

import { CldVideoPlayer } from 'next-cloudinary'
import React from 'react'

const MainPage = () => {
  return (
    <CldVideoPlayer
       src={"/videos/sidhuvideo.mp4"}
        width="640px"
        height="360px"
     
      />
  )
}

export default MainPage