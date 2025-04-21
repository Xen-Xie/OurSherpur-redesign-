import React from 'react'
import HomeCover from '../Components/HomeCover'
import HomeCard from '../Components/HomeCard'
import DoHome from '../Components/DoHome'

function Home() {
  return (
    <div className='mt-2'>
        <HomeCover />
        <HomeCard />
        <DoHome />
    </div>
  )
}

export default Home