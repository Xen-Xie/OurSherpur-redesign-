import React from 'react'
import HomeCover from '../Components/HomeCover'
import HomeCard from '../Components/HomeCard'
import DoHome from '../Components/DoHome'
import ActivityHome from '../Components/ActivityHome'

function Home() {
  return (
    <div className='mt-2'>
        <HomeCover />
        <HomeCard />
        <DoHome />
        <ActivityHome />
    </div>
  )
}

export default Home