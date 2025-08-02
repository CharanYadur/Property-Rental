import React from 'react'
import HomeBanner from './HomeBanner'
import NewlyAdded from './NewlyAdded'
import FeatureSection from './FeatureSection'
import Locations from './Locations'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <NewlyAdded/>
      <FeatureSection/>
      <Locations/>
    </div>
  )
}

export default Home
