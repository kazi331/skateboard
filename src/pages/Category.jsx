import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
  const {category} = useParams();
  return (
    <div>Category : {category}</div>
  )
}

export default Category