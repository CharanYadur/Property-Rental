import React from 'react'
import HomeBanner from './HomeBanner'
import NewlyAdded from './NewlyAdded'
import FeatureSection from './FeatureSection'
import Locations from './Locations'
import CtaSection from './CtaSection'
import Blogs from './Blogs'

const Home = () => {
  return (
    <div style={{backgroundColor:"#f3ece5ff"}}>
      <HomeBanner />
      <NewlyAdded />
      <FeatureSection />
      <Locations />
      <CtaSection />
      <Blogs />
      
    </div>
  )
}

export default Home
