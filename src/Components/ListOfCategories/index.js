import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './style'

const useCategoriesData = () => {
  const [categories, setCategories] =  useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('https://petgram-server-krimittz-8yspc096o.vercel.app/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
  }, [])

  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='Loading'><Category /></Item> 
          : categories.map(category => <Item key={category.id}> <Category {...category} path={`/pet/${category.id}`}/> </Item>) 
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
