import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    }catch (e){
      return initialValue
    }
  })

  const setLocalStorage = value => {
    if (value) {
      try {
        localStorage.setItem(key, JSON.stringify(value))
        setStoredValue(value)
      }
      catch (e) {
        console.log(e)
      }
    } else {
      try {
        localStorage.removeItem(key)
        setStoredValue(value)
      }
      catch (e) {
        console.log(e)
      } 
    }
  }

  return [storedValue, setLocalStorage]
}
