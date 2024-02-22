import React from 'react'
import GallerySwiper from './GallerySwiper'
import FeaturedEvents from './FeaturedEvents'
import WorkshopsTraining from './WorkshopsTraining'
import AchievementsAndAwards from './AchievementsAwards'
import StudentProjects from './StudentProjects'
import Sports from './Sports'
import DepartmentalGroupPhoto from './DepartmentalGroupPhoto'

export default function Gallery() {
  return (
    <div>
      <GallerySwiper/>
      <DepartmentalGroupPhoto/>
      <AchievementsAndAwards/>
      <StudentProjects/>
      <Sports/>
      <FeaturedEvents/>
      <WorkshopsTraining/>
      
    </div>
  )
}
