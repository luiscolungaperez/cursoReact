import React from 'react'
import { ListOfCategories } from '../Components/ListOfCategories'
import { ListOfPhotoCards } from "../container/ListOfPhotosCards"

export const Home = ({ id }) => {
  return (
    <>    
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}