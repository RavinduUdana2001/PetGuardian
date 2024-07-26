import React from 'react'
import BodyContent from '../BodyContent/BodyContent';
import DetailContent from '../DetailContent/DetailContent';
import SecondContent from '../SecondContent/SecondContent';
import PetCategories from '../PetCategories/PetCategories';
import DescriptionSection from '../DescriptionSection/DescriptionSection';
import BookAConsultation from '../BookAConsultation/BookAConsultation';



function HomePage() {
  return (
    <div>
    
      <BodyContent/>
      <DetailContent/>
      <SecondContent/>
      <PetCategories/>
      <BookAConsultation/>
      <DescriptionSection/>
    </div>
  )
}

export default HomePage